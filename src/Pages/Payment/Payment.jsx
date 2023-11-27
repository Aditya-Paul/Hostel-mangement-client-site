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
    useEffect(()=>{
        if(number === 200)
        setbedge("silver")
        if(number === 400)
        setbedge("gold")
        if(number === 500)
        setbedge("platinum")
    },[number])
    console.log(typeof (number))
    return (
        <div>
            {
                number > 0 ?
                    <>
                        <p>this is price : {number}</p>
                        <Elements stripe={stripePromise}>
                            <Checkoutform price={number} bedge={bedge}></Checkoutform>
                        </Elements>

                    </>
                    :
                    <p>You have to <Link to={"/"} className='btn text-xl text-pink-300'>Purchase</Link> first</p>

            }
        </div>
    );
};

export default Payment;