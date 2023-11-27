import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const CategoryCardDetails = ({ item }) => {

    return (
        <div className='p-2'>
            <div class="bg-white rounded-lg shadow-2xl md:flex">
                <img src={item.image} alt="Laptop on Desk" class="md:w-1/3 w-full h-52 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                <div class="p-4 space-y-2">
                    <h2 class="font-bold text-xl md:text-xl  text-orange-300">{item.title}</h2>

                    <p class="text-orange-700">Price:
                        <span className='text-black'> {item.price}</span>
                    </p>
                    <p class="text-orange-700">
                        <Rating
                            initialRating={item.rating}
                            readonly
                        />
                    </p>
                    <Link to={`/meals/${item._id}`}><button className='btn'>Details</button></Link>
                </div>

            </div>
        </div>
    );
};

export default CategoryCardDetails;