import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import UseAxiossecure from '../../Hook/UseAxiossecure';
import Swal from 'sweetalert2';
import UseUsermail from '../../Hook/UseUsermail';
// import Swal from 'sweetalert2';

const Checkoutform = ({ price,bedge }) => {
    //console.log((bedge))
    const [error, setError] = useState('');
    const [clientSecret, setclientSecret] = useState('');
    const [transactionId, settransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements()
    const axiosSecure = UseAxiossecure()
    const {user} = useContext(AuthContext)
    const { refetch} = UseUsermail()

    console.log('dekhi', price, typeof (price))

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price: price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setclientSecret(res.data.clientSecret)
                })
        }

    }, [axiosSecure,price])

    const hadlesubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error)
             setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod)
             setError(' ')
        }
        // //  confirm payment
        const { paymentIntent, error: confirmerror } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,// from line 32
                    billing_details: {
                        email: user?.email || "anonymous",
                        name: user?.displayName || "anonymous",
                    },
                },
            })
        if (confirmerror) {
            console.log('confirm error')
        }
        else {
            console.log("success", paymentIntent)
            if (paymentIntent.status === "succeeded") {
                console.log("transection id", paymentIntent.id)
                settransactionId(paymentIntent.id)
                const info={
                    badge:bedge
                }
                const res = await axiosSecure.patch(`/users/${user?.email}`, info);
                console.log(res.data)
                refetch()
                Swal.fire("Good job!", `Puchase ${bedge} badge Successfully & Posted to the database, Welcome`, "success");
            }
        }
    }
    return (
        <form onSubmit={hadlesubmit}>
            <CardElement
             options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4'
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    }
                }
            }} />
            <button type='submit' className='btn btn-sm btn-primary my-4' disabled={!stripe || !clientSecret}>Pay</button>
            <p className='text-2xl text-pink-200'>{error}</p>
            {
                transactionId && <p className='text-3xl text-pink-400'>This is your transaction id: {transactionId}</p>
            }
        </form>
    );
};

export default Checkoutform;