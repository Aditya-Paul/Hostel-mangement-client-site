import React, { useState } from 'react';
import UseAxiospublic from '../../Hook/UseAxiospublic';
import { useQuery } from '@tanstack/react-query';
import Upcomingcards from './upcomingcards';

const UpcomingMeals = () => {
    const axiospublic = UseAxiospublic()
    const { data: meals = [] } = useQuery({
        queryKey: ['meals'],
        queryFn: async () => {
            const res = await axiospublic.get('/upcomings')
            return res.data
        }
    })
    return (
        <div className='flex justify-center '>
            <div className='pt-20 grid gap-4 grid-cols-1 md:grid-cols-2'>
                {
                    meals.map(item => <Upcomingcards key={item._id} item={item}></Upcomingcards>)
                }
            </div>
        </div>
    );
};

export default UpcomingMeals;