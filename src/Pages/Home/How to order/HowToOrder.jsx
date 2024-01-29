import React from 'react';
import { BsCashCoin } from "react-icons/bs";
import { MdOutlineMenuBook,MdBorderColor,MdDeliveryDining  } from "react-icons/md";
import { Link } from 'react-router-dom';
const HowToOrder = () => {
    return (
        <div>

            <div className='flex flex-col items-center justify-center pt-8'>
                <h1 className='text-4xl font-bold text-black text-center'>How to place request Meal?</h1>
                <p className='text-end text-md text-gray-500 pt-4'>Follow the steps</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 pb-8'>

                <div className='flex flex-col items-center justify-center'>
                    <h1 data-aos="fade-left" className='py-4'><BsCashCoin style={{ fontSize: '5rem', padding: '4px' }}/></h1>
                    <h1 className=' bg-yellow-300 text-black text-2xl rounded-full h-10 w-10 font-semibold flex items-center justify-center'>1</h1>
                    <p className=' py-4 w-[200px] h-[100px] text-center'>Purchase any of the package. Without parchasing you won`t be able to request a meal</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h1 data-aos="fade-up" className='py-4'><MdOutlineMenuBook  style={{ fontSize: '5rem', padding: '4px' }}/></h1>
                    <h1 className='bg-yellow-300 text-black text-2xl rounded-full h-10 w-10 font-semibold flex items-center justify-center'>2</h1>
                    <p className=' py-4 w-[200px] h-[100px] text-center'>Visit our food items from our <Link className='text-pink-600' to='/meals'>meals</Link> section. Click on the details of the selected meal.</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h1 data-aos="fade-down" className='py-4'><MdBorderColor style={{ fontSize: '5.2rem', padding: '4px' }}/></h1>
                    <h1 className='bg-yellow-300 text-black text-2xl rounded-full h-10 w-10 font-semibold flex items-center justify-center'>3</h1>
                    <p className=' py-4 w-[200px] h-[100px] text-center'>Place your request by click by click on the request meal button. </p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h1 data-aos="fade-right" className='py-4'><MdDeliveryDining style={{ fontSize: '5.2rem', padding: '4px' }}/></h1>
                    <h1 className='bg-yellow-300 text-black text-2xl rounded-full h-10 w-10 font-semibold flex items-center justify-center'>4</h1>
                    <p className=' py-4 w-[200px] h-[100px] text-center'>Your requested meal will be send to your hostel room on time.</p>
                </div>
            </div>
        </div>
    );
};

export default HowToOrder;