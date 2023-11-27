import React from 'react';
import UseAxiospublic from './UseAxiospublic';
import { useQuery } from '@tanstack/react-query';

const UseReview = () => {
    const axiospublic = UseAxiospublic()
    const {data:userreviews=[], isPending, refetch} = useQuery({
        queryKey:['reviews'],
        queryFn:async()=>{
            const res = await axiospublic.get('/reviews')
            return res.data
        }
    })
    // console.log(userreviews)
    return [userreviews,isPending,refetch]
};

export default UseReview;