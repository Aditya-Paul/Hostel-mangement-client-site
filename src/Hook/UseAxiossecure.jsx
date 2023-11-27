import axios from 'axios';
import React from 'react';

const axiossecure = axios.create({
    baseURL:'http://localhost:3000'
})

const UseAxiossecure = () => {
    return axiossecure
};

export default UseAxiossecure;