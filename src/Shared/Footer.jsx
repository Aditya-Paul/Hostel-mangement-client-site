import React from 'react';
import { FaSquareTwitter,FaSquareYoutube,FaFacebookF   } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-pink-300 text-black">
                <aside>
                <img src="https://i.ibb.co/PTW6bLx/hostel-loho.png" className="w-20 h-20" alt="" />
                    <p className="font-bold">
                        Hmanagement Ltd. <br />Providing reliable hostel services since 2020
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="www.twiter.com"><FaSquareTwitter className='w-10 h-10'> </FaSquareTwitter></Link>
                        <Link to="www.youtube.com"><FaSquareYoutube  className='w-10 h-10'> </FaSquareYoutube ></Link>
                        <Link to="www.facebook.com"><FaFacebookF  className='w-10 h-10'> </FaFacebookF ></Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;