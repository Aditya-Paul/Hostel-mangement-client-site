import React, { useContext } from 'react';
import UseReview from '../../Hook/UseReview';
import { AuthContext } from '../../Provider/Authprovider';
import { Link } from 'react-router-dom';
import UseAxiospublic from '../../Hook/UseAxiospublic';
import Swal from 'sweetalert2';
import UseMeal from '../../Hook/UseMeal';

const Myreview = () => {
    const { user } = useContext(AuthContext)
    const [userreview, , refetch] = UseReview()
    const [meals] = UseMeal()
    const axiospublic = UseAxiospublic()

    const Myreview = userreview.filter(item => item.review_usermail === `${user?.email}`)
    //  console.log(Myreview)

    const handledelete = async (id, title, mealid) => {
        const res = await axiospublic.delete(`/reviews/${id}`)
        if (res.data.deletedCount > 0) {
            const res2 = await axiospublic.get(`/meals/${mealid}`)
            const count = res2.data.reviews
            const decreaseReviewCount = {
                reviews: count - 1
            }
            const res3 = await axiospublic.patch(`/meals/${mealid}`, decreaseReviewCount)
            console.log("res3",res3.data)
            if(res3.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${title} has been deleted`,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch()
            }
        }
    }
    return (
        <div>
            this is the length {Myreview.length}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Meal Title</th>
                            <th>Meal Review</th>
                            <th>Meal Likes</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            Myreview.map((item, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{item.meal_title}</td>
                                <td>{item.meal_review}</td>
                                <td>{item.meal_likes}</td>
                                <td><button className='btn '>Edit</button></td>
                                <td><button onClick={() => handledelete(item._id, item.meal_title, item.meal_id)} className='btn '>Delete</button></td>
                                <td><Link to={`/meals/${item.meal_id}`}><button className='btn '>View</button></Link></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myreview;