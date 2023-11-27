import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMeal from '../../Hook/UseMeal';
import CategoryCard from '../CategoryCard/CategoryCard';
import { Link, useParams } from 'react-router-dom';

const MealCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [data,setdata] = useState([])
    const [meals] = UseMeal()
    const All = meals
    const Breakfast = meals.filter(item => item.category === 'Breakfast')
    const Lunch = meals.filter(item => item.category === 'Lunch')
    const Dinner = meals.filter(item => item.category === 'Dinner')
    return (
        <div className='flex flex-col max-w-full items-center' >
            <Tabs className="gap-2 text-purple-400 bg-pink-100" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex">
                    <Tab>All</Tab>
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
            <Link to={'/meals'} className='btn bg-pink-300'><button >See All</button></Link>
        </div>
    );
};

export default MealCategory;