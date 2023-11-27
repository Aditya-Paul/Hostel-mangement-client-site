import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Checkoutform from './Checkoutform';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)

const Payment = () => {
    const [bedge, setbedge] = useState('')
    const { price } = useParams()

    const number = parseInt(price)
    useEffect(() => {
        if (number === 200)
            setbedge("silver")
        if (number === 400)
            setbedge("gold")
        if (number === 500)
            setbedge("platinum")
    }, [number])
    console.log(typeof (number))
    return (
        <div>
            <div className='flex  items-center justify-center pt-5 pb-5'>
                <div className="  grid gap-4 grid-cols-1 md:grid-cols-3 bg-pink-100 text-black ">

                    <div className="stat text-center">
                        <div className="stat-value text-pink-500">Silver</div>
                        <h1 className='font-bold'>Get 10% of on every reuqested meal & soft drinks free</h1>
                        <div className="stat-value">$200</div>
                        <div className="stat-actions">
                            <Link to={`/dashboard/checkout/${"200"}`}>
                                <button className="btn btn-sm btn-success">Add Package</button>
                            </Link>
                        </div>
                    </div>
                    <div className="stat text-center">
                        <div className="stat-value text-pink-500">Gold</div>
                        <h1 className='font-bold'>Get 30% of on every reuqested mea. Soft drinks & chicken fry free</h1>
                        <div className="stat-value">$400</div>
                        <div className="stat-actions">
                            <Link to={`/dashboard/checkout/${"400"}`}>
                                <button className="btn btn-sm btn-success">Add Package</button>
                            </Link>
                        </div>
                    </div>
                    <div className="stat text-center">
                        <div className="stat-value text-pink-500">Platinum</div>
                        <h1 className='font-bold'>Get 40% of on every reuqested mea. Buy 1 get free.</h1>
                        <div className="stat-value">$500</div>
                        <div className="stat-actions">
                            <Link to={`/dashboard/checkout/${"500"}`}>
                                <button className="btn btn-sm btn-success">Add Package</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
            {
                number > 0 ?
                    <>
                        <p className='text-2xl pb-4'>Please pay  : {number}</p>
                        <Elements stripe={stripePromise} className="pb-4">
                            <Checkoutform price={number} bedge={bedge}></Checkoutform>
                        </Elements>

                    </>
                    :
                    <p>You have to select the memeber ship first</p>

            }
        </div>
    );
};

export default Payment;