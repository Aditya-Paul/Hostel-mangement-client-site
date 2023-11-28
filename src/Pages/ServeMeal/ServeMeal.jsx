import axios from 'axios';
import React, { useEffect } from 'react';
import UseAxiossecure from '../../Hook/UseAxiossecure';
import { useQuery } from '@tanstack/react-query';
import { AiFillDelete } from "react-icons/ai";
import Swal from 'sweetalert2';

const ServeMeal = () => {
    const axiossecure = UseAxiossecure()

    const { data: reqmeals = [], isPending, refetch } = useQuery({
        queryKey: ['reqmeals'],
        queryFn: async () => {
            const res = await axiossecure.get('/reqmeals')
            return res.data
        }
    })
    const handlestatuschange = (id) => {
        const newstatus = {
            status: "delivered"
        }
        axiossecure.patch(`/change/remeals/${id}`, newstatus)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'Your food is delivered',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }
    return (
        <div>
            <h2>All request meals ( {reqmeals.length} )</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reqmeals?.map((item, index) => <>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{item.item_title}</td>
                                    <td>{item.request_usermail}</td>
                                    <td>{item.request_username}</td>
                                    
                                        {
                                            item.status === "delivered" ?
                                            <td className='bg-green-300'>
                                                {item.status}
                                            </td>
                                            :
                                            <td>
                                                {item.status}
                                            </td>
                                            
                                    }
                                    <th>
                                        <button onClick={() => handlestatuschange(item._id)} className="btn bg-pink-200 btn-ghost btn-xs">Serve</button>
                                    </th>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServeMeal;