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
import UpcomingMeals from '../Pages/UpcomingMeals/UpcomingMeals';
import Myreview from '../Pages/Myreview/Myreview';
import ManageUser from '../Pages/ManageUser/ManageUser';
import AllMeal from '../Pages/AllMeal/AllMeal';
import AllReview from '../Pages/AllReview/AllReview';
import ServeMeal from '../Pages/ServeMeal/ServeMeal';
import AdminUpcoming from '../Pages/AdminUpcoming/AdminUpcoming';
import AdminProfile from '../Pages/AdminProfile/AdminProfile';

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
                path: "/userupcoming",
                element: <UpcomingMeals></UpcomingMeals>,
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
                path: "myreviews",
                element: <Myreview></Myreview>,
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
                path: "adminprofile",
                element: <AdminProfile></AdminProfile>,
            },
            {
                path: "manageusers",
                element: <ManageUser></ManageUser>,
            },
            {
                path: "allmeals",
                element: <AllMeal></AllMeal>,
            },
            {
                path: "allreviews",
                element: <AllReview></AllReview>,
            },
            {
                path: "servemeals",
                element: <ServeMeal></ServeMeal>,
            },
            {
                path: "adminupcoming",
                element: <AdminUpcoming></AdminUpcoming>,
            },
            {
                path: "checkout/:price",
                element: <Payment></Payment>,
            },
        ]
    },
]);
export default Router;