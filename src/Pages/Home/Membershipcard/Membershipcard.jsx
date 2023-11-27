import React from 'react';
import { Link } from 'react-router-dom';

const Membershipcard = () => {
    return (
        <div className='flex items-center justify-center pt-5 pb-5'>
            <div className="stats bg-pink-100 text-black">

                <div className="stat text-center">
                    <div className="stat-value text-pink-500">Silver</div>
                    <div className="stat-value">$200</div>
                    <div className="stat-actions">
                        <Link to={`/dashboard/checkout/${"200"}`}>
                            <button className="btn btn-sm btn-success">Add Package</button>
                        </Link>
                    </div>
                </div>
                <div className="stat text-center">
                    <div className="stat-value text-pink-500">Gold</div>
                    <div className="stat-value">$400</div>
                    <div className="stat-actions">
                        <Link to={`/dashboard/checkout/${"400"}`}>
                            <button className="btn btn-sm btn-success">Add Package</button>
                        </Link>
                    </div>
                </div>
                <div className="stat text-center">
                    <div className="stat-value text-pink-500">Platinum</div>
                    <div className="stat-value">$500</div>
                    <div className="stat-actions">
                        <Link to={`/dashboard/checkout/${"500"}`}>
                            <button className="btn btn-sm btn-success">Add Package</button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Membershipcard;