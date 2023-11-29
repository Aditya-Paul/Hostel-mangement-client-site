import axios from 'axios';
import React from 'react';

const axiospublic  = axios.create({
    baseURL:'https://hostel-mangement-server-site.vercel.app'
})
const UseAxiospublic = () => {

    return axiospublic
};

export default UseAxiospublic;