import React, { useState } from 'react';
import UseAxiospublic from '../../Hook/UseAxiospublic';
import Swal from 'sweetalert2';

const Upcomingcards = ({ item }) => {
    const axiospublic = UseAxiospublic()
    const [Like, setLike] = useState(item.likes)
    const handlelike = async(id) => {
        const newlikes = item.likes + 1
        const incrlike = {
            likes: newlikes
        }
        const res = await axiospublic.patch(`/upcomings/${id}`, incrlike)
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
            setLike(newlikes)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `is updated to the upcoming meals database`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={item.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.ingredients}</p>
                <div className="card-actions">
                    <button onClick={() => handlelike(item._id)} className="btn btn-primary">Like {Like}</button>
                </div>
            </div>
        </div>
    );
};

export default Upcomingcards;