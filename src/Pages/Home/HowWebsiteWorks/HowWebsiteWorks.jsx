import React from 'react';

const HowWebsiteWorks = () => {
    return (
        <div className='bg-pink-100'>
            <div className="collapse bg-pink-200">
                <input type="radio" name="my-accordion-1" checked="checked" />
                <div className="collapse-title text-xl font-medium text-center">
                How Hmanagement Works 
                </div>
            </div>
            <div className="collapse bg-pink-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                Display Part
                </div>
                <div className="collapse-content">
                    <p>A user can see all the meals by category, if any user want to see his/her activity on this website, they have to go on the dashboard but if user do not login he / she won`t be able to see </p>
                </div>
            </div>
            <div className="collapse bg-pink-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                Data request by user
                </div>
                <div className="collapse-content">
                    <p>In our website a user can request for any meal but user have to purchase any package among silver,gold,platinum  them. Any user can post like and review each of the meal items.</p>
                </div>
            </div>
            <div className="collapse bg-pink-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                Admin Vs User
                </div>
                <div className="collapse-content">
                    <p>Admin have full access all the data callected from the user on the other hand user have acces only his/her data. Admin dashboard is fully different from the users.</p>
                </div>
            </div>
            <div className="collapse bg-pink-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                Data collection
                </div>
                <div className="collapse-content">
                    <p>Our site is fully connected to the mongodb .</p>
                </div>
            </div>
            
        </div>
    );
};

export default HowWebsiteWorks;