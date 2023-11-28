import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaUtensils } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
const Dashboard = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className='flex pt-20'>
                <div className="w-64 min-h-screen border-4 border-pink-50 rounded-xl">
                    <ul className='menu'>
                        {
                            // isAdmin ?
                            <>
                                <li>

                                    <NavLink to='/dashboard/profile'>
                                        <CgProfile></CgProfile>User Profile</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/myreviews'>
                                        <FaHome></FaHome> My Reviews</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/reqmeals'>
                                        <FaHome></FaHome> Requested Meals</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/checkout/price'>
                                        <FaHome></FaHome> Payments</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/adminprofile'>
                                        <CgProfile></CgProfile> Admin profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageusers'>
                                        <FaHome></FaHome> Manage Users</NavLink>
                                </li>
                                <li className='bg-white text-black'>
                                    <Link to='/dashboard/addmeal' className='transpa add-meal-link hover:text-pink-300'>
                                        <FaUtensils></FaUtensils> Add Meal
                                    </Link>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allmeals'>
                                        <FaHome></FaHome> All Meals</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allreviews'>
                                        <FaHome></FaHome> All reviews</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/servemeals'>
                                        <FaHome></FaHome>serve meals</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/adminupcoming'>
                                        <FaHome></FaHome>Upcoming meals</NavLink>
                                </li>


                                {/* <li>
                                    <NavLink to='/dashboard/ManageItems'>
                                        <FaList></FaList> Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bookings'>
                                        <FaBook></FaBook> Manage Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/users'>
                                        <FaUser></FaUser> All Users</NavLink>
                                </li> */}
                            </>
                            // :
                            // <>
                            //     <li>

                            //         <NavLink to='/dashboard/userHome'>
                            //             <FaHome></FaHome> User Home</NavLink>
                            //     </li>
                            //     <li>
                            //         <NavLink to='/dashboard/history'>
                            //             <FaCalendar></FaCalendar> Not History</NavLink>
                            //     </li>
                            //     <li>
                            //         <NavLink to='/dashboard/cart'>
                            //             <FaShoppingCart></FaShoppingCart>My Cart({cart.length})</NavLink>
                            //     </li>
                            //     <li>
                            //         <NavLink to='/dashboard/review'>
                            //             <FaAd></FaAd> Add a review</NavLink>
                            //     </li>
                            //     <li>
                            //         <NavLink to='/dashboard/paymentHistory'>
                            //             <FaList></FaList>  Real Payment History</NavLink>
                            //     </li>
                            // </>
                        }
                        {/* shared navlink */}
                        {/* <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                            <FaSearch></FaSearch> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/contact'>
                            <FaEnvelope></FaEnvelope> Contact</NavLink>
                    </li> */}
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