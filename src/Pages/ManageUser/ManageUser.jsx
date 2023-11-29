import React, { useContext, useEffect, useState } from 'react';
import UseAxiospublic from '../../Hook/UseAxiospublic';
import { useQuery } from '@tanstack/react-query';
import { RiAdminFill } from "react-icons/ri";
import { AuthContext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';
const ManageUser = () => {
    const { loading } = useContext(AuthContext)
    const [data, setData] = useState()
    const axiospublic = UseAxiospublic()
    const { data: allusers = [], refetch } = useQuery({
        queryKey: ['users'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiospublic.get("/users")
            return res.data
        }
    })
    // useEffect(() => {
    //     fetch('https://hostel-mangement-server-site.vercel.app/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])
    console.log(allusers, "this is")
    const hanldeadmin = (id, email) => {
        axiospublic.patch(`/users/admin/${id}`)
            .then(res => {
                console.log("see", res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire("Good job!", ` ${email}, You are admin now, Welcome`, "success");
                }
            })
    }
    return (
        <div className=''>
            {/* this is mange users{data.length} */}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Package</th>
                            <th>Make admin Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allusers?.map((item, index) => <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.bagde}</td>
                                    {item?.role === "admin" ?
                                        "Admin"
                                        :
                                        <td>
                                            <button onClick={() => hanldeadmin(item._id, item.email)} className="btn btn-ghost btn-xs "><RiAdminFill className='h-8 w-8'></RiAdminFill></button>
                                        </td>
                                    }
                                </tr>
                            </>

                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUser;