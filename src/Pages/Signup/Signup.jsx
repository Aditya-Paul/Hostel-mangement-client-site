import React, { useContext } from 'react';
import { useForm } from 'react-hook-form'; //1
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/Authprovider';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiospublic from '../../Hook/UseAxiospublic.jsx';

const Signup = () => {
    const { signup, update, googlesignIN } = useContext(AuthContext)
    const axiospublic = UseAxiospublic()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        console.log(data)
        //signup
        signup(data.email, data.password)

            .then(res => {
                //user update
                update(data.name, data.photo_url)
                    .then(() => {

                        const userinfo = {
                            name: data.name,
                            email: data.email,
                            photo: data.photo_url,
                            bagde: "bronze"
                        }
                        // user post to the database
                        axiospublic.post('/users', userinfo)
                            .then(res => {
                                console.log(res.data)
                                if (res.data.insertedId) {
                                    Swal.fire("Good job!", "Registered Successfully & Posted to the database, Welcome", "success");
                                    reset()
                                    navigate('/')

                                }
                            })

                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
    }//3
    
    const handlegoogle = () => {
        googlesignIN()
            .then(res => {
                console.log(res.user)
                const gInfo = {
                    email: res.user.email,
                    name: res.user.displayName,
                    photo: res.user.photoURL,
                    bagde: "bronze"
                }
                axiospublic.post('/users', gInfo)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.insertedId) {
                            Swal.fire("Good job!", "Social Registered Successfully & Posted to the database, Welcome", "success");
                            reset()
                            navigate('/')

                        }
                        navigate('/')
                    })
            })
            .catch(error => {
                console.log(error)
                Swal.fire("Oops!", "Something wrong! try again", "error");
                console.log(error)
            })
    }
    return (
        <>
            <div className="hero min-h-screen bg-pink-100 pt-20">
                <div className="hero-content flex-row lg:flex-row-reverse">
                    <div className="card shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>

                                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" required />

                                {errors.name && <span className='text-red-500'>Name is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>

                                <input type="text" {...register("photo_url", { required: true })} placeholder="photo_url" className="input input-bordered" required />

                                {errors.photo_url && <span className='text-red-500'>Photo Url is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />

                                {errors.email && <span className='text-red-500'>Email is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type="password" {...register("password", {
                                    required: true,
                                })} placeholder="password" className="input input-bordered" required />

                                {errors.password?.type === "required" && (
                                    <p className='text-red-500'>Password is required</p>
                                )}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className='text-center'>
                            <p className="text-base">Already have an account? <span><Link className='text-pink-600' to='/login'>Login</Link></span></p>

                        </div>
                        <div>
                            <button onClick={handlegoogle} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-[#002D74] text-base gap-2">
                                Login with Google<FaGoogle className="text-lg"></FaGoogle>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;