import React from 'react';
import Banner from '../Banner/Banner';
import MealCategory from '../../../Component/MealCategory/MealCategory';
import Membershipcard from '../Membershipcard/Membershipcard';
import HowWebsiteWorks from '../HowWebsiteWorks/HowWebsiteWorks';
import Healthygoal from '../Healthy Goal/Healthygoal';
import HowToOrder from '../How to order/HowToOrder';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Healthygoal></Healthygoal>
            <MealCategory></MealCategory>
            <Membershipcard></Membershipcard>
            <HowToOrder></HowToOrder>
            
            {/* <HowWebsiteWorks></HowWebsiteWorks> */}
            <Review></Review>
        </div>
    );
};

export default Home;