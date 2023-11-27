import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='h-screen flex flex-col space-y-6 justify-center items-center'>
                <img src="https://i.ibb.co/YyP0Fwy/error.png" alt="" />
                <Link to='/'><button className="btn btn-primary">Home</button></Link>
            </div>
            
        </div>
    );
};

export default Error;