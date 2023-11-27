import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Rating from 'react-rating';
import UseMeal from '../../Hook/UseMeal';
import UseAxiospublic from '../../Hook/UseAxiospublic';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/Authprovider';
import UseUsermail from '../../Hook/UseUsermail';
import UseReview from '../../Hook/UseReview';

const MealDetails = () => {
    const { users } = UseUsermail()
    const [, , reviewrefetch] = UseReview()
    //console.log(userreviews)
    const navigate = useNavigate()
    const axiospublic = UseAxiospublic()
    const [, , refetch] = UseMeal()
    const { user } = useContext(AuthContext)
    const { image, title, adminName, description, ingredients, date, rating, likes, reviews, _id } = useLoaderData()
    const [Like, setLike] = useState(likes)
    const [revw, setRevw] = useState(reviews)
    const [rview, setrview] = useState([])
    //const userReview = userreviews.filter(item => item.meal_id === `${_id}`)
    //console.log(userReview)


    const handlelike = async (id) => {
        console.log('see')
        const newlikes = likes + 1
        const incrlike = {
            likes: newlikes
        }
        //console.log(incrlike, typeof (incrlike))

        const res = await axiospublic.patch(`/likesmeals/${id}`, incrlike)
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
            setLike(newlikes)
            const res2 = await axiospublic.patch(`/reqmeals/${id}`, incrlike)
            if (res2.data.modifiedCount > 0) {
                console.log('thik ase')
                const res3 = await axiospublic.patch(`/likesreview/${id}`, incrlike)
                console.log(res3.data)
                if (res3.data.modifiedCount > 0) {
                    Swal.fire("Good job!", "Add data Successfully & Posted to the database", "success");
                }
            }
            // Swal.fire({
            //     position: "top-end",
            //     icon: "success",
            //     title: `is updated to the meal`,
            //     showConfirmButton: false,
            //     timer: 1500
            // });
        }
    }

    const handlepost = async () => {
        const reqitem = {
            item_image: image,
            item_title: title,
            item_adminName: adminName,
            item_description: description,
            item_ingredients: ingredients,
            item_postdate: date,
            item_rating: rating,
            item_likes: likes,
            item_reviews: reviews,
            item_id: _id,
            status: "pending",
            request_usermail: user.email,
            request_username: user.displayName,
        }

        const mealreq = await axiospublic.post('/reqmeals', reqitem)
        //console.log(mealreq)
        if (mealreq.data.insertedId) {
            Swal.fire("Good job!", "Add data Successfully & Posted to the database", "success");
        }
    }
    const handlepayment = () => {
        Swal.fire("Oops!", "You have to Purchase any Package first", "error");
        navigate('/')
    }
    const handlelogin = () => {
        Swal.fire("Oops!", "You have to login first", "error");
        navigate('/login')

    }
    const handlereview = async (e) => {
        e.preventDefault()
        const form = e.target
        const review = form.review.value
        console.log(review)

        const reviewitem = {
            meal_review: review,
            meal_id: _id,
            meal_likes: Like,
            meal_title: title,
            review_usermail: user.email,
            review_username: user.displayName,
        }

        const reviewres = await axiospublic.post('/reviews', reviewitem)
        //console.log(mealreq)
        if (reviewres.data.insertedId) {
            // Swal.fire("Good job!", "Add data Successfully & Posted to the database", "success");
            const newreviews = reviews + 1
            const incrreview = {
                reviews: newreviews
            }
            const res = await axiospublic.patch(`/reviewmeals/${_id}`, incrreview)
            console.log(res.data)
            if (res.data.modifiedCount > 0) {
                setRevw(newreviews)
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `is updated to the meal`,
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        }
    }
    useEffect(() => {
        axiospublic.get(`/reviews/${_id}`)
            .then(res => {
                reviewrefetch()
                console.log(res.data)
                setrview(res.data)
            })
    }, [_id])
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 pt-20">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className='flex flex-col items-center'>
                        {/* details part */}
                        <div>
                            <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                        <div className='text-center'>
                            <h1 className="text-5xl font-bold"> {title}</h1>
                            <h1 className="text-3xl font-bold">{adminName}</h1>
                            <p className="py-6"><h1>Description:</h1> {description}</p>
                            <br />
                            <p className="py-6"><h1>Ingredients:</h1> {ingredients}</p>
                            <br />
                            <p><h1>Date:</h1> {date}</p>
                            <p className='text-xl text-pink-600'>review: <span className='text-xl text-pink-600'>{revw}</span></p>
                            <br />
                            <p class="text-orange-700">
                                <Rating
                                    initialRating={rating}
                                    readonly
                                />
                            </p>
                            <br />

                            <div className='flex items-center justify-center space-x-2'>
                                {Like > 0 ?
                                    <button onClick={() => handlelike(_id)} className="btn bg-pink-200">Like  {Like}</button>
                                    :
                                    <button onClick={() => handlelike(_id)} className="btn btn-primary">Like  {Like}</button>
                                }
                                {user ?
                                    <>
                                        {
                                            (users.bagde === "silver" || users.bagde === "gold" || users.bagde === "platinum") ? (
                                                <button onClick={handlepost} className="btn btn-primary">Meal Request</button>
                                            ) : (
                                                <button onClick={handlepayment} className="btn btn-primary">Payment</button>
                                            )
                                        }
                                    </>

                                    :
                                    <button onClick={handlelogin} className="btn btn-primary">Meal Request</button>
                                }
                            </div>
                        </div>

                        {/*make review section  */}
                        <div className=' pt-4   '>
                            <form onSubmit={handlereview} className="flex items-center justify-center space-x-2 ">
                                <div className="form-control">
                                    <textarea type="text" name='review' placeholder="review" className="input input-bordered" required />
                                </div>
                                {
                                    user ?
                                        <input type="submit" className='btn' value={"Submit"} />
                                        :
                                        ""
                                }
                            </form>
                        </div>


                    </div>
                </div>
            </div>

            {/* display review part */}
            <div className="overflow-x-auto flex flex-col items-center border-4 border-pink-200">
                <h1 className='text-2xl'>Users Review</h1>
                <table className="table ">
                    {/* head */}
                    <thead className='border-2 border-t-orange-200'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            rview.map((item, index) => <>
                                <tr >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {item.review_usermail}
                                    </td>
                                    <td>
                                        {item.meal_review}
                                    </td>
                                </tr>
                            </>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MealDetails;