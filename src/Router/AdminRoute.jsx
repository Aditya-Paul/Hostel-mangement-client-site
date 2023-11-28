import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import UseAdmin from '../Hook/UseAdmin';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin,isAdminLoading] = UseAdmin()
    const location = useLocation()

    if(loading || isAdminLoading){
        return  <span className="loading loading-spinner loading-lg"></span>
      }

    if(user && isAdmin){
        return children
    }
    return <Navigate state={{form: location}} to={'/login'} replace></Navigate>
};

export default AdminRoute;