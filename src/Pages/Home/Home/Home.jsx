import React from 'react';
import Banner from '../Banner/Banner';
import MealCategory from '../../../Component/MealCategory/MealCategory';
import Membershipcard from '../Membershipcard/Membershipcard';
import HowWebsiteWorks from '../HowWebsiteWorks/HowWebsiteWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MealCategory></MealCategory>
            <Membershipcard></Membershipcard>
            <HowWebsiteWorks></HowWebsiteWorks>
        </div>
    );
};

export default Home;