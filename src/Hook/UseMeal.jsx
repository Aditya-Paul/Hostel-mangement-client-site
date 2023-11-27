import React from 'react';
import UseAxiospublic from './UseAxiospublic';
import { useQuery } from '@tanstack/react-query';

const UseMeal = () => {
    const axiospublic = UseAxiospublic()
    const {data:meals=[], isPending, refetch} = useQuery({
        queryKey:['meals'],
        queryFn:async()=>{
            const res = await axiospublic.get('/meals')
            return res.data
        }
    })
    // console.log(meals)
    return [meals,isPending,refetch]
};

export default UseMeal;