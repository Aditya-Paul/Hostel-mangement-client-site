import React, { useContext } from 'react';
import { useForm } from 'react-hook-form'; //1
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/Authprovider';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiospublic from '../../Hook/UseAxiospublic';

const Login = () => {
    const { signin, googlesignIN } = useContext(AuthContext)
    const axiospublic = UseAxiospublic()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        console.log(data)
        signin(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: "User Login Successful",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                  navigate(location?.state?.form  ?
                    location?.state?.form :    "/")
            })
    }

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
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='text-center'>
                            <p className="text-base">New User? Please <span><Link className='text-pink-600' to='/register'>Register</Link></span></p>

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

export default Login;