import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import Swal from 'sweetalert2';
import UseAxiospublic from '../../Hook/UseAxiospublic';
const AdminUpcoming = () => {
    const axiospublic = UseAxiospublic()
    const { data: upcomings = [], isPending, refetch } = useQuery({
        queryKey: ['upcomings'],
        queryFn: async () => {
            const res = await axiospublic.get('/upcomings')
            return res.data
        }
    })
    const handlepublish = async(id) =>{
        const res = await axiospublic.get(`/upcomings/${id}`)
        console.log("paisi")
        console.log(res.data)
        const mealinfo = {
            title: res.data.title,
            category: res.data.category,
            image: res.data.image,
            ingredients: res.data.ingredients,
            description: res.data.description,
            price: res.data.price,
            rating: res.data.rating,
            date: res.data.date,
            likes: res.data.likes,
            reviews: 0,
            adminName: res.data.adminName,
            adminEmail: res.data.adminEmail,
        }
        const menures = await axiospublic.post('/meals', mealinfo)
        //console.log(menures)
        if (menures.data.insertedId) {
            
            const res = await axiospublic.delete(`/upcomings/${id}`)
            if(res.data.deletedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Data add to the mealcollection and deleted from the upcoming collection`,
                    showConfirmButton: false,
                    timer: 2500
                });
                refetch()
            }
        }
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                            <th></th>
                            <th></th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>ingredients</th>
                            <th>price</th>
                            <th>date</th>
                            <th>likes</th>
                            <th>Review</th>
                            <th>DistributorName</th>
                            <th>DistributorEmail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            upcomings?.map((item,index) => <>
                            <tr key={item._id}>
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
                                <td>{item.category}</td>
                                <td>{item.ingredients}</td>
                                <td>{item.price}</td>
                                <td>{item.date}</td>
                                <td>{item.likes}</td>
                                <td>{item.reviews}</td>
                                <td>{item.adminName}</td>
                                <td>{item.adminEmail}</td>
                                {
                                    item.likes >=10 ?
                                    <th>
                                    <button onClick={()=>handlepublish(item._id)} className="btn btn-ghost btn-xs bg-pink-200">Publish</button>
                                </th>
                                    :
                                    ""

                                }
                            </tr>
                        </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminUpcoming;