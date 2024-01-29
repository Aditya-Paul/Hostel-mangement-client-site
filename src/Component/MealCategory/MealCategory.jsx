import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMeal from '../../Hook/UseMeal';
import CategoryCard from '../CategoryCard/CategoryCard';
import { Link, useParams } from 'react-router-dom';

const MealCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [meals] = UseMeal()
    const All = meals
    const Breakfast = meals.filter(item => item.category === 'Breakfast')
    const Lunch = meals.filter(item => item.category === 'Lunch')
    const Dinner = meals.filter(item => item.category === 'Dinner')
    return (
        <div className='' >
            <Tabs data-aos="fade-up" className="flex flex-col items-center justify-center pt-4 text-lg   italic" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex">
                    <Tab>All Meals</Tab>
                    <Tab>Breakfast</Tab>
                    <Tab>Lunch</Tab>
                    <Tab>Dinner</Tab>
                </TabList>
                <TabPanel >
                    <CategoryCard items={All}></CategoryCard>
                </TabPanel>
                <TabPanel>
                    <CategoryCard items={Breakfast}></CategoryCard>
                </TabPanel>
                <TabPanel>
                    <CategoryCard items={Lunch}></CategoryCard>
                </TabPanel>
                <TabPanel>
                    <CategoryCard items={Dinner}></CategoryCard>
                </TabPanel>
            </Tabs>
            {/* <div className='flex items-center justify-center'>
            <Link to={'/meals'} className='btn bg-pink-300 '><button >See All</button></Link>
            </div> */}
        </div>
    );
};

export default MealCategory;