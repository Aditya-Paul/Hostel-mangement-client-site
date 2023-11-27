import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import UseAxiospublic from './UseAxiospublic';
import { AuthContext } from '../Provider/Authprovider';

const UseUsermail = () => {
    const axiospublic = UseAxiospublic()
    const { user } = useContext(AuthContext)
    const { data: users = {}, refetch } = useQuery({
        queryKey: ["users", user?.email],
        enable: !!user?.email,
        queryFn: async () => {
            const res = await axiospublic.get(`/users/${user.email}`)
            return res.data
        }
    })
    //console.log(users)
    return {users, refetch}
};

export default UseUsermail;
// enable: !!user?.email
// queryKey: ["users", user?.email]