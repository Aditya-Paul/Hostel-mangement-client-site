import React from 'react';
import UseMeal from '../../Hook/UseMeal';
import { FaEye } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { Link } from 'react-router-dom';
import UseAxiospublic from '../../Hook/UseAxiospublic';
import Swal from 'sweetalert2';
const AllMeal = () => {
    const [meals, ,refetch] = UseMeal()
    const axiospublic =  UseAxiospublic()
    console.log(meals)
    const handledelete = (id)=>{
        axiospublic.delete(`/meals/${id}`)
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
            <h2>All Meals ( {meals.length} )</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Title</th>
                            <th>Likes</th>
                            <th>Reviews</th>
                            <th>Distributor Name</th>
                            <th>Distributor Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            meals?.map((item,index) => <>
                                <tr>
                                    <th>{index + 1 }</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.likes}</td>
                                    <td>{item.reviews}</td>
                                    <td>{item.adminName}</td>
                                    <td>{item.adminEmail}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs"><MdOutlineSystemUpdateAlt></MdOutlineSystemUpdateAlt></button>
                                    </th>
                                    <th>
                                        <button onClick={()=>handledelete(item._id)} className="btn btn-ghost btn-xs"><AiFillDelete></AiFillDelete></button>
                                    </th>
                                    <th>
                                        <Link to={`/meals/${item._id}`}><button className='btn btn-ghost btn-xs'><FaEye></FaEye></button></Link>
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

export default AllMeal;
