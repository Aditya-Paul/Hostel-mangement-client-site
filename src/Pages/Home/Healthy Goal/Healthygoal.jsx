import React from 'react';

const Healthygoal = () => {
    return (
        <div>
            <div className='text-center pb-10'>
                <h1 className='text-6xl font-semibold py-6'>Hit your Healthy Goal</h1>
            </div>
            <div className=' flex flex-row md:flex-col md:justify-center md:text-center '>
                <div className='flex-col md:flex lg:flex-row '>
                    <div className='w-[60%] flex  items-center justify-end'>
                        <img data-aos="fade-right" className='w-96 h-[90%] rounded-md' src="https://i.ibb.co/fdBP6Dw/Balanced-Nutration.png" alt="" />
                    </div>
                    <div className='w-[40%] flex flex-col items-start justify-center  pl-2'>
                        <h1 className='text-2xl font-bold text-black'>Balanced Nutration</h1>
                        <p className='text-start text-xl text-gray-500'>Prioritize a balanced nutrition by incorporating a variety of colorful fruits, vegetables, whole grains, lean proteins, and healthy fats into your meals. This diverse approach ensures a broad spectrum of essential nutrients, promoting overall health and well-being.</p>
                    </div>
                </div>
                <div className='flex-col md:flex lg:flex-row  '>
                    <div className=' bottom-[100px] w-[50%] flex flex-col items-end justify-center pr-2  '>
                        <h1 className='text-2xl font-bold text-black'>Mindful Eating</h1>
                        <p className='text-end text-xl text-gray-500'>Practice mindful eating by savoring each bite, chewing slowly, and paying attention to hunger and fullness cues. Eliminate distractions during meals to foster a healthier relationship with food and promote better digestion.</p>
                    </div>
                    <div className='w-[50%] flex  items-center justify-start '>
                        <img data-aos="fade-left" className=' lg:relative lg:bottom-[100px]  w-96 h-[500px] rounded-md' src="https://i.ibb.co/Jz31038/Aesthetic-Elegant-Mindful-Habits-Carousel-Social-Media.png" alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Healthygoal;