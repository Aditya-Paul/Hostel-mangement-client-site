import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/bFcPNST/Banner-bg.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To The Hanagement</h1>
                        <input type="text" placeholder="Type here" className="input w-full max-w-xs bg-transparent border border-gray-300 text-black" />
                        <p className="mb-5">Hmanagement provided room allocation, maintenance, security, and records, ensuring a smooth, secure, and positive living environment for residents.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;