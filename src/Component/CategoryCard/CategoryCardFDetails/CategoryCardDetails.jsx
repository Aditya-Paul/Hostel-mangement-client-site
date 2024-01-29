import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating,ThinStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaArrowRight } from "react-icons/fa";

const CategoryCardDetails = ({ item }) => {
    const [rating, setRating] = useState(0)
    const myStyles = {
        itemShapes: ThinStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }
    return (
        <div className='p-2'>
            

            <div className=" shadow-lg max-w-[350px] font-sans rounded-xl  my-6 mx-auto">
                <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
                    <div className="flex justify-between items-center left-4 right-4 top-4 absolute">

                        <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">${item.price}</button>
                    </div>
                    <img className="rounded-t-lg bg-black/40 w-full h-full" src={item.image} alt="img" />
                </div>
                <div className="text-center bg-slate-100 w-full mx-auto font-semibold space-y-2">
                    <h6 className="text-start p-4 text-sm md:text-base lg:text-lg">{item.title}</h6>
                </div>
                <div className="h-24 w-full mx-auto ">
                    <h6 className="text-star pl-2 py-4 text-sm md:text-base lg:text-lg">{item.description}</h6>
                </div>
                <div className=" w-full mx-auto flex">
                    <p className="text-orange-700">
                        <Rating style={{ maxWidth: 150 }} value={item.rating} onChange={setRating} itemStyles={myStyles} />
                    </p>
                    ( {item.rating} rating )
                </div>
                <div className="flex items-center justify-end text-sm md:text-base py-6 pr-4">
                    {/* <button className="px-4 py-2 rounded-lg bg-[#49B2FF] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Buy now</button> */}
                    <Link to={`/meals/${item._id}`} className=''><button className="flex flex-row items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-[#49B2FF] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Details<FaArrowRight /></button></Link>


                </div>
            </div>
        </div>
    );
};

export default CategoryCardDetails;