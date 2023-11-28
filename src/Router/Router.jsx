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
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';

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
                path: "profile",
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
            },
            {
                path: "reqmeals",
                element: <PrivateRoute><RequestedMeals></RequestedMeals></PrivateRoute>,
            },
            {
                path: "myreviews",
                element: <PrivateRoute><Myreview></Myreview></PrivateRoute>,
            },
            
            // admin route
            {
                path: "adminprofile",
                element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>,
            },
            {
                path: "manageusers",
                element: <AdminRoute><ManageUser></ManageUser></AdminRoute>,
            },
            {
                path: "addmeal",
                element: <AdminRoute><AddMeal></AddMeal></AdminRoute>,
            },
            {
                path: "allmeals",
                element: <AdminRoute><AllMeal></AllMeal></AdminRoute>,
            },
            {
                path: "allreviews",
                element: <AdminRoute><AllReview></AllReview></AdminRoute>,
            },
            {
                path: "servemeals",
                element: <AdminRoute><ServeMeal></ServeMeal></AdminRoute>,
            },
            {
                path: "adminupcoming",
                element: <AdminRoute><AdminUpcoming></AdminUpcoming></AdminRoute>,
            },
            {
                path: "checkout/:price",
                element: <Payment></Payment>,
            },
        ]
    },
]);
export default Router;