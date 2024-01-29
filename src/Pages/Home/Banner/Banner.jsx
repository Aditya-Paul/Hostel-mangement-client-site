// import React from 'react';

// const Banner = () => {
//     return (
//         <div className=''>
//             <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/bFcPNST/Banner-bg.jpg)' }} bg-banner-bg>
//                 <div className="hero-overlay bg-opacity-60"></div>
//                 <div className="hero-content text-center text-neutral-content">
//                     <div className="max-w-md">
//                         <h1 className="mb-5 text-5xl font-bold">Welcome To The Hanagement</h1>
//                         <input type="text" placeholder="Type here" className="input w-full max-w-xs bg-transparent border border-gray-300 text-black" />
//                         <p className="mb-5">Hmanagement provided room allocation, maintenance, security, and records, ensuring a smooth, secure, and positive living environment for residents.</p>
//                         <button className="btn btn-primary">Get Started</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;


import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';

export const CarouselMain = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://i.ibb.co/L1Lr4s0/Beige-Brown-Elegant-Breakfast-Food-Ideas-Pinterest-Pin.png", tags: "Meal", }, { img: "https://i.ibb.co/qDbBYgW/Green-Grunge-Strokes-Salad-Food-Instagram-Post.png", tags: "Meal", }, { img: "https://i.ibb.co/PQP725C/Curry-Dishes-Pinterest-Graphic.png", tags: "Meal", }, { img: "https://i.ibb.co/XzDd5gp/Curry-Dishes-Pinterest-Graphic-1.png", tags: "Meal", }, { img: "https://i.ibb.co/dkBgHDB/Yellow-Brown-Modern-Animated-Biryani-Restaurant-Promotion-Instagram-Story-028.jpg", tags: "Meal", },];
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
    return (
        <div data-aos="fade-left" className="sm:w-2/3 h-[540px] md:h-[670px] flex items-center relative overflow-hidden">
            {/* arrow */}
            <button onClick={nextSlider} className="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-6 h-6 md:w-8 md:h-8 bgWhite ">
                <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
            </button>
            {/* slider container */}
            <div className="ease-linear duration-300 flex gap-[2%]" style={{ transform: `translateX(-${currentSlider * 52}%)` }}>
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <div key={inx}
                        className={`${currentSlider === inx ? 'h-[310px] md:h-[310px] lg:h-[580px] ' : 'h-[260px] md:h-[280px] lg:h-[480px]'} min-w-[50%] bg-black/30 relative duration-200`}
                    >
                        <img src={slide.img} className="w-full h-full" alt={slide.tags} />
                    </div>
                ))}
            </div>
        </div>
    );
};
const Banner = () => {
    useEffect(() => {
        Aos.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750,
        })
    }, [])
    return (
        <div className="max-w-7xl mx-auto h-[540px] lg:h-[670px] px-3 lg:px-10 flex flex-col lg:flex-row items-center justify-center overflow-hidden gap-5 lg:gap-10 pt-20 border-b-2 b-4">
            <div className="w-2/3 lg:w-1/3 text-center lg:text-left space-y-2 lg:space-y-5 py-5">
                <h1 data-aos="fade-right" className="text-lg md:text-2xl lg:text-[40px] font-bold">Discover Your Wellness journey..</h1>
                <p className="text-[#616161] text-xs md:text-lg ">Get ready for a journey to a healthier, happier you with our "Wellness Spotlight". Dive into colorful images of yummy meals and relaxing moments. On the other side, find easy health tips, upcoming meals, and stories from our community. Whether you're a wellness pro or just starting, this is your go-to spot. Scroll, explore, and kickstart your wellness journey!</p>
                {/* <button className="font-bold py-2 xl:py-3 text-xs md:text-base lg:text-lg xl:text-xl hover:scale-95 duration-300 px-4 lg:px-10 text-white bg-[#2f9fb8]">Explore More</button> */}
                <Link to='/meals'>
                    <button className="rounded-lg py-2 w-40 h-16 px-6 mb-4 mt-6 bg-sky-400 hover:bg-sky-600 duration-300 text-white flex items-center justify-center overflow-hidden hover:overflow-visible relative group">
                        <svg viewBox="0 0 1024 1024" className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M244.5 662l268.1-446.4 268 446.4z" fill="#9ED5E4"></path><path d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z" fill="#154B8B"></path><path d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z" fill="#F7F9F9"></path><path d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z" fill="#154B8B"></path><path d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z" fill="#9ED5E4"></path><path d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z" fill="#154B8B"></path><path d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z" fill="#9ED5E4"></path><path d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z" fill="#154B8B"></path></g></svg>
                        <span className="duration-500">Explore meals</span>
                    </button>
                </Link>
            </div>
            <CarouselMain />
        </div>
    );
};
export default Banner;