import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosNotifications } from "react-icons/io";
import { AuthContext } from '../Provider/Authprovider';
import UseUsermail from '../Hook/UseUsermail';

const Navbar = () => {
    const { users } = UseUsermail()
    //console.log(users)
    const { user, userlogout } = useContext(AuthContext)
    //console.log(user)
    let border = <></>
    if (users.bagde === "silver") {
        border = <>
            <div className="w-10 rounded-full border-2 border-gray-600">
                <img alt="" src="https://i.ibb.co/ykvm0kz/silver.jpg" />
            </div>
        </>
    }
    if (users.bagde === "gold") {
        border = <>
            <div className="w-10 rounded-full border-2 border-gray-600">
                <img alt="" src="https://i.ibb.co/VWyGhz1/gold.jpg" />
            </div>
        </>
    }
    if (users.bagde === "platinum") {
        border = <>
            <div className="w-10 rounded-full border-2 border-gray-600">
                <img alt="" src="https://i.ibb.co/23Qsc8y/platinum.jpg" />
            </div>
        </>
    }
    if (users.bagde === "bronze") {
        border = <>
            <div className="w-10 rounded-full border-2 border-gray-600">
                <img alt="" src="https://i.ibb.co/KcZF3XD/Bronze-Icon-1.jpg" />
            </div>
        </>
    }

    const links1 = <>
        <li><Link className="text-black" to='/'>Home</Link></li>
        <li><Link className="text-black" to='/meals'>Meals</Link></li>
        <li><Link className="text-black" to='/upcomigMeals'>Upcomig Meals</Link></li>
        <li><Link className="text-black" to='/notification'><IoIosNotifications></IoIosNotifications></Link></li>
        {
            user ?
                ""
                :
                <li><Link className="text-black" to='/login'>Join Us</Link></li>
        }
    </>
    return (
        <div>
            <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30  bg-black text-white " >
                <div className="bg-opacity-60"></div>
                <div className="navbar-start gap-4">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            <div className="flex-row text-green-400">
                                {

                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        {links1}
                                    </ul>
                                }
                            </div>
                        </label>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <img src="https://i.ibb.co/PTW6bLx/hostel-loho.png" className="w-12 h-12" alt="" />
                        <h2 className=" normal-case text-xl font-extrabold">Hmanagment</h2>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    {

                        <ul className="menu menu-horizontal px-1">
                            {links1}
                        </ul>
                    }
                </div>
                <div className="navbar-end gap-2">
                    {
                        user ?
                            <div className="flex flex-col md:flex-row  items-center gap-2">
                                {/* <div className="w-10 rounded-full border-2 border-gray-600">
                                    <img alt="" src="https://i.ibb.co/KcZF3XD/Bronze-Icon-1.jpg" />
                                </div> */}
                                {border}
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full border-2 border-gray-600">
                                            <img alt="" src={user.photoURL} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                                        <li><a className="text-black">{user.displayName}</a></li>
                                        <li><Link className="text-black" to='/dashboard'>Dashboard</Link></li>
                                        <button className="btn text-purple-300" onClick={userlogout}><Link to='/'>Logout</Link>
                                        </button>
                                    </ul>
                                </div>

                            </div>
                            :
                            ""
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;