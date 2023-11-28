import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';
import UseUsermail from '../../Hook/UseUsermail';
import UseAxiospublic from '../../Hook/UseAxiospublic';
// import Swal from 'sweetalert2';

const Checkoutform = ({ price, bedge }) => {
    //console.log((bedge))
    const [error, setError] = useState('');
    const [clientSecret, setclientSecret] = useState('');
    const [transactionId, settransactionId] = useState('');
    const [data, setData] = useState('')
    const stripe = useStripe();
    const elements = useElements()
    const axiospublic = UseAxiospublic()
    const { user } = useContext(AuthContext)
    const { refetch } = UseUsermail()

    console.log('dekhi', price, typeof (price))

    useEffect(() => {
        if (price > 0) {
            axiospublic.post('/create-payment-intent', { price: price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setclientSecret(res.data.clientSecret)
                })
        }

    }, [axiospublic, price])

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
                setData("success")
                console.log("transection id", paymentIntent.id)
                settransactionId(paymentIntent.id)
                const info = {
                    badge: bedge
                }
                const res = await axiospublic.patch(`/users/${user?.email}`, info);
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
            {/* <button type='submit' className='btn btn-sm border-t-green-100 my-4' disabled={!stripe || !clientSecret}>Pay</button> */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button type='submit' className='btn btn-sm border-t-green-100 my-4' disabled={!stripe || !clientSecret} onClick={() => document.getElementById('my_modal_5').showModal()}>Pay</button>
            {
                data === 'success' ?
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Yout Payment is succeslly done</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    :
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Something wrong please try again </p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
            }
            <p className='text-2xl text-pink-200'>{error}</p>
            {
                transactionId && <p className='text-3xl text-pink-400'>This is your transaction id: {transactionId}</p>
            }
        </form>
    );
};

export default Checkoutform;