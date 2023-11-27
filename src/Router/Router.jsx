import React from 'react';
import {
    createBrowserRouter
} from "react-router-dom";
import Main from '../Layout/Main';
import Error from '../Pages/Error/Error';
import Signup from '../Pages/Signup/Signup';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home/Home';
import AddMeal from '../Pages/AddMeal/AddMeal';
import Dashboard from '../Layout/Dashboard';
import Meals from '../Pages/Meals/Meals';
import MealDetails from '../Pages/MealDetails/MealDetails';
import Payment from '../Pages/Payment/Payment';
import UserProfile from '../Pages/UserProfile/UserProfile';
import RequestedMeals from '../Pages/RequestedMeal/RequestedMeals';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/meals",
                element: <Meals></Meals>,
            },
            {
                path: "/meals/:id",
                element: <MealDetails></MealDetails>,
                loader: ({params})=>fetch(`http://localhost:3000/meals/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Signup></Signup>,
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "addmeal",
                element: <AddMeal></AddMeal>,
            },
            {
                path: "reqmeals",
                element: <RequestedMeals></RequestedMeals>,
            },
            {
                path: "profile",
                element: <UserProfile></UserProfile>,
            },
            {
                path: "checkout/:price",
                element: <Payment></Payment>,
            },
        ]
    },
]);
export default Router;