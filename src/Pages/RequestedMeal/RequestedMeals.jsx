import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import UseAxiospublic from '../../Hook/UseAxiospublic';

const RequestedMeals = () => {
    const { user } = useContext(AuthContext)
    const axiospublic = UseAxiospublic()
    const [reqmeals, setReqmeals] = useState([])
    useEffect(() => {
        axiospublic.get(`/reqmeals/${user?.email}`)
            .then(res => {
                console.log(res.data)
                setReqmeals(res.data)
            })
    }, [user?.email])
    return (
        <div>
            this is requested meals
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Likes</th>
                            <th>Review</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            reqmeals.map((item,index) => <>
                                <tr >
                                    <td>
                                       {index + 1}
                                    </td>
                                    <td>
                                       {item.item_title}
                                    </td>
                                    <td>
                                        {item.item_likes}
                                    </td>
                                    <td>
                                        {item.item_reviews}
                                    </td>
                                    <td>
                                        {item.status}
                                    </td>
                                    <td>
                                        <button className='btn '>cancle</button>
                                    </td>

                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestedMeals;