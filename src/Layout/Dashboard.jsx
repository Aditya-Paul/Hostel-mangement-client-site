import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaUtensils, FaCommentAlt,FaUserCircle  } from 'react-icons/fa';
import { GiHotMeal } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import UseAdmin from '../Hook/UseAdmin';
const Dashboard = () => {
    const [isAdmin] = UseAdmin()
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex pt-24 md:pt-20'>
                <div className="w-64 min-h-screen border-4 border-pink-50 rounded-xl">
                    <ul className='menu'>
                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <NavLink to='/dashboard/adminprofile'>
                                            <CgProfile></CgProfile> Admin profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/manageusers'>
                                            <FaUserCircle ></FaUserCircle > Manage Users</NavLink>
                                    </li>
                                    <li className='bg-white text-black'>
                                        <Link to='/dashboard/addmeal' className='transpa add-meal-link hover:text-pink-300'>
                                            <FaUtensils></FaUtensils> Add Meal
                                        </Link>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/allmeals'>
                                        <FaUtensils></FaUtensils> All Meals</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/allreviews'>
                                            <FaCommentAlt ></FaCommentAlt > All reviews</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/servemeals'>
                                        <FaUtensils></FaUtensils>serve meals</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/adminupcoming'>
                                        <FaUtensils></FaUtensils>Upcoming meals</NavLink>
                                    </li>


                                </>
                                :
                                <>
                                    <li>

                                        <NavLink to='/dashboard/profile'>
                                            <CgProfile></CgProfile>User Profile</NavLink>
                                    </li>
                                    <li>

                                        <NavLink to='/dashboard/reqmeals'>
                                            <GiHotMeal></GiHotMeal> Requested Meals</NavLink>
                                    </li>
                                    <li>

                                        <NavLink to='/dashboard/myreviews'>
                                            <FaCommentAlt ></FaCommentAlt > My Reviews</NavLink>
                                    </li>
                                </>
                        }
                        <li>
                            <NavLink to='/dashboard/checkout/price'>
                                <FaHome></FaHome> Payments</NavLink>
                        </li>

                    </ul>
                </div>
                <div className='flex-1 p-8'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Dashboard;