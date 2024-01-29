import React from 'react';
import { Link } from 'react-router-dom';

const Membershipcard = () => {
    return (
        <div className='flex flex-col items-center justify-center my-20 '>
            <h1 className='text-4xl font-bold text-black'>CHOOSE YOUR BEST PLAN</h1>
            <p className='text-sm font-bold text-gray-400 py-4'>A transparent guide without additional and hidden charges.</p>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-2 md:gap-6 text-black pt-4">

                <div className="p-2 text-center border-4 border-gray-400 rounded-3xl w-66 h-72">
                    <div className=' text-xl font-bold bg-yellow-400 rounded-full h-10 flex justify-center items-center text-black'>Silver</div>
                    <div className='pt-4 text-lg font-bold text-black'>$200</div>
                    <div className=' text-sm font-bold text-black'>Per Month</div>
                    <div className=''>
                        <ul className='flex flex-col items-start justify-center p-4'>
                            <li className='text-gray-600'>You will get 10% off.</li>
                            <li className='text-gray-600'>You will get 20% off on sunday.</li>
                            <li className='text-gray-600'>Monthy purchase point.</li>
                        </ul>
                    </div>
                    <Link to={`/dashboard/checkout/${"200"}`}>
                        <div className='flex items-center justify-center h-10 text-sm  font-bold bg-yellow-400 rounded-full h-10text-black' >Add Pack</div>
                    </Link>

                </div>
                <div className="p-2 text-center border-4 bg-yellow-400 border-gray-400 rounded-3xl w-66 h-72">
                    <div className=' text-xl font-bold bg-white rounded-full h-10 flex justify-center items-center text-black'>Gold</div>
                    <div className='pt-4 text-lg font-bold text-black'>$400</div>
                    <div className=' text-sm font-bold text-black'>Per Month</div>
                    <div className=''>
                        <ul className='flex flex-col items-start justify-center p-4'>
                            <li className='text-gray-600'>You will get 20% off.</li>
                            <li className='text-gray-600'>You will get 30% off on sunday.</li>
                            <li className='text-gray-600'>Monthy purchase point.</li>
                        </ul>
                    </div>
                    <Link to={`/dashboard/checkout/${"400"}`}>
                        <div className='flex items-center bg-white justify-center h-10 text-sm  font-bold rounded-full h-10text-black' >Add Pack</div>
                    </Link>

                </div>
                <div className="p-2 text-center border-4 border-gray-400 rounded-3xl w-66 h-72">
                    <div className=' text-xl font-bold bg-yellow-400 rounded-full h-10 flex justify-center items-center text-black'>PLatinum</div>
                    <div className='pt-4 text-lg font-bold text-black'>$500</div>
                    <div className=' text-sm font-bold text-black'>Per Month</div>
                    <div className=''>
                        <ul className='flex flex-col items-start justify-center p-4'>
                            <li className='text-gray-600'>You will get 30% off.</li>
                            <li className='text-gray-600'>You will get 40% off on sunday.</li>
                            <li className='text-gray-600'>Monthy purchase point.</li>
                        </ul>
                    </div>
                    <Link to={`/dashboard/checkout/${"500"}`}>
                        <div className='flex items-center justify-center h-10 text-sm  font-bold bg-yellow-400 rounded-full h-10text-black' >Add Pack</div>
                    </Link>

                </div>
                {/* <div className="p-2 text-center border-4 border-gray-400 rounded-3xl w-52 h-60">
                    <div className='py-2 text-xl font-bold bg-yellow-400 rounded-full h-10 flex justify-center items-center text-black'>Gold</div>
                    <div className='pt-4 text-lg font-bold text-black'>$400</div>
                    <div className=' text-sm font-bold text-black'>Per Month</div>
                    <div >
                        <Link to={`/dashboard/checkout/${"400"}`}>
                            <button className="btn text-sm  font-bold bg-yellow-400 rounded-full h-10 text-center text-black">Add Package</button>
                        </Link>
                    </div>
                </div>
                <div className="p-2 text-center border-4 border-gray-400 rounded-3xl w-52 h-60">
                    <div className='py-2 text-xl font-bold bg-yellow-400 rounded-full h-10 flex justify-center items-center text-black'>Platinum</div>
                    <div className='pt-4 text-lg font-bold text-black'>$500</div>
                    <div className=' text-sm font-bold text-black'>Per Month</div>
                    <div >
                        <Link to={`/dashboard/checkout/${"500"}`}>
                            <button className="btn text-sm  font-bold bg-yellow-400 rounded-full h-10 text-center text-black">Add Package</button>
                        </Link>
                    </div>
                </div> */}

            </div>

           

        </div>
    );
};

export default Membershipcard;