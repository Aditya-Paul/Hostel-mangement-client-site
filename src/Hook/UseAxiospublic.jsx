import axios from 'axios';
import React from 'react';

const axiospublic  = axios.create({
    baseURL:'http://localhost:3000'
})
const UseAxiospublic = () => {

    return axiospublic
};

export default UseAxiospublic;