import React from 'react';

import CategoryCardDetails from './CategoryCardFDetails/CategoryCardDetails';

const CategoryCard = ({ items }) => {
    console.log(items)
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
            {
                items.map(item => <CategoryCardDetails key={item._id} item={item}></CategoryCardDetails>)
            }
        </div>
    );
};

export default CategoryCard;