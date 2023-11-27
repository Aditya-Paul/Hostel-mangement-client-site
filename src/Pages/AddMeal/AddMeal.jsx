import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';
import UseAxiospublic from '../../Hook/UseAxiospublic';

const AddMeal = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const axiospublic = UseAxiospublic()
    //form part
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        //console.log(data, data.category)

        const mealinfo = {
            title: data.title,
            category: data.category,
            image: data.photo_url,
            ingredients: data.ingredients,
            description: data.description,
            price: parseInt(data.price),
            rating: parseInt(data.rating),
            date: data.date,
            likes: parseInt(data.like),
            reviews: parseInt(data.rievews),
            adminName: data.name,
            adminEmail: data.email,
        }
        //console.log(mealinfo)

        const menures = await axiospublic.post('/meals', mealinfo)
        //console.log(menures)
        if (menures.data.insertedId) {
            Swal.fire("Good job!", "Add data Successfully & Posted to the database", "success");
        }
    }//3
    const handleupcoming = async() => {
        // e.preventDefault()
        // const form = e.target
        const data = getValues(["title","category","photo_url",'ingredients','description','price','rating','date','like','rievews','name','email'])
        
        const mealinfo = {
            title: data[0],
            category: data[1],
            image: data[2],
            ingredients: data[3],
            description: data[4],
            price: parseInt(data[5]),
            rating: parseInt(data[6]),
            date: data[7],
            likes: parseInt(data[8]),
            reviews: parseInt(data[9]),
            adminName: user?.displayName,
            adminEmail: user?.email,
        }
        //console.log(data,data[0])
        const menures = await axiospublic.post('/upcomings', mealinfo)
        //console.log(menures)
        if (menures.data.insertedId) {
            Swal.fire("Good job!", "Add data Successfully & Posted to the database", "success");
        }
        console.log(mealinfo)
    }
    return (
        <div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Meal Title</span>
                        </label>

                        <input type="text" name='title' {...register("title", { required: true })} placeholder="Meal Title" className="input input-bordered" required />

                        {errors.title && <span className='text-red-500'>title is required</span>}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Meal Category</span>
                        </label>

                        <select name="func" {...register("category", { required: true })} placeholder="Meal Title" className="input input-bordered">
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                        </select>

                        {errors.category && <span className='text-red-500'>You Have to slect the category</span>}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Meal image
                            </span>
                        </label>

                        <input type="text" {...register("photo_url", { required: true })} placeholder="photo_url" className="input input-bordered" required />

                        {errors.photo_url && <span className='text-red-500'>Meal image is required</span>}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ingredients

                            </span>
                        </label>

                        <input type="text" {...register("ingredients", { required: true })} placeholder="Ingredients" className="input input-bordered" required />

                        {errors.ingredients && <span className='text-red-500'>Ingredients is required</span>}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description
                            </span>
                        </label>

                        <input type="text" {...register("description", { required: true })} placeholder="Description" className="input input-bordered" required />

                        {errors.description && <span className='text-red-500'>Description is required</span>}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price
                            </span>
                        </label>

                        <input type="text" {...register("price", { required: true })} placeholder="Price" className="input input-bordered" required />

                        {errors.price && <span className='text-red-500'>Price is required</span>}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating ( from 1 to 5 )
                            </span>
                        </label>

                        <input type="text" {...register("rating", { required: true })} placeholder="Rating" className="input input-bordered" required />

                        {errors.rating && <span className='text-red-500'>Rating is required</span>}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date
                            </span>
                        </label>

                        <input type="date" {...register("date", { required: true })} placeholder="Date" className="input input-bordered" required />

                        {errors.date && <span className='text-red-500'>Date is required</span>}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Likes Count
                            </span>
                        </label>

                        <input type="text" defaultValue='0' {...register("like", { required: true })} placeholder="Likes Count" className="input input-bordered" required />

                        {errors.like && <span className='text-red-500'>Likes Count is required</span>}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rievews Count
                            </span>
                        </label>

                        <input type="text" defaultValue='0' {...register("rievews", { required: true })} placeholder="Rievews Count" className="input input-bordered" required />

                        {errors.rievews && <span className='text-red-500'>Rievews Count is required</span>}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Admin Name</span>
                        </label>

                        <input type="text" defaultValue={user?.displayName} {...register("name", { required: true })} placeholder="Admin Name" className="input input-bordered" required />

                        {errors.name && <span className='text-red-500'>Admin Name is required</span>}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Admin Email</span>
                        </label>

                        <input type="email" defaultValue={user?.email} {...register("email", { required: true })} placeholder="Admin Email" className="input input-bordered" required />

                        {errors.email && <span className='text-red-500'>Admin Email is required</span>}

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Meal</button>
                    </div>

                </form>
                <div onClick={handleupcoming} className="form-control mt-6">
                    <button className="btn btn-primary">Upcomming Meals</button>
                </div>

            </div>
        </div>
    );
};

export default AddMeal;