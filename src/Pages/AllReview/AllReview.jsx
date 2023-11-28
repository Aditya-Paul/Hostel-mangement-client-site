import React from 'react';
import UseReview from '../../Hook/UseReview';
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import UseAxiospublic from '../../Hook/UseAxiospublic';
import Swal from 'sweetalert2';

const AllReview = () => {
    const [userreviews, ,refetch] = UseReview()
    const axiospublic  = UseAxiospublic()
    const handledelete = (id)=>{
        console.log("ok")
        axiospublic.delete(`/admin/reviews/${id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.deletedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${id} has been deleted`,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch()
            }
        })
    }
    return (
        <div>
            <h2>All Reviews ( {userreviews.length} )</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Likes</th>
                            <th>Delete</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userreviews?.map((item, index) => <>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{item.meal_title}</td>
                                    <td>{item.meal_likes}</td>
                                    <th>
                                        <button onClick={() => handledelete(item._id)} className="btn btn-ghost btn-xs"><AiFillDelete></AiFillDelete></button>
                                    </th>
                                    <th>
                                        <Link to={`/meals/${item.meal_id}`}><button className='btn btn-ghost btn-xs'><FaEye></FaEye></button></Link>
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

export default AllReview;