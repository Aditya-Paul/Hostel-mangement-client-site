import axios from 'axios';
import React from 'react';

const axiossecure = axios.create({
    baseURL: 'https://hostel-mangement-server-site.vercel.app'
})

const UseAxiossecure = () => {
    axiossecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log("request token", token)
        config.headers.authorization = `Meal ${token}`
        console.log("header", config.headers.authorization)
        return config
    }, function (error) {
        return Promise.reject(error);
    })


    return axiossecure
};

export default UseAxiossecure;