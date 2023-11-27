import React from 'react';
import Banner from '../Banner/Banner';
import MealCategory from '../../../Component/MealCategory/MealCategory';
import Membershipcard from '../Membershipcard/Membershipcard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MealCategory></MealCategory>
            <Membershipcard></Membershipcard>
        </div>
    );
};

export default Home;