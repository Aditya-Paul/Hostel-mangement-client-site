import React from 'react';
import { FaSquareXTwitter  ,FaYoutube ,FaFacebookF,FaLinkedinIn    } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10  text-black">
                <aside>
                <img src="https://i.ibb.co/ysfwpbJ/Beige-and-Grey-Simple-Circular-Nail-Art-Logo-2.png" className="w-40 h-30" alt="" />
                    <p className="font-bold">
                        Hmanagement Ltd. <br />Providing reliable hostel services since 2020
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="www.twiter.com"><FaSquareXTwitter   className='w-10 h-10'> </FaSquareXTwitter  ></Link>
                        <Link to="www.youtube.com"><FaYoutube   className='w-10 h-10'> </FaYoutube  ></Link>
                        <Link to="www.facebook.com"><FaFacebookF  className='w-10 h-10'> </FaFacebookF ></Link>
                        <Link to="www.facebook.com"><FaLinkedinIn  className='w-10 h-10'> </FaLinkedinIn ></Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;