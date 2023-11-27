import React, { useEffect, useState } from 'react';
import UseMeal from '../../Hook/UseMeal';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import UseAxiospublic from '../../Hook/UseAxiospublic';
import CategoryCardDetails from '../../Component/CategoryCard/CategoryCardFDetails/CategoryCardDetails';

const Meals = () => {
    // f
    const [MealCategory, setCategory] = useState('All');
    const [data, setData] = useState([])
    const [meals] = UseMeal()

    // category
    const categorychange = e => {
        e.preventDefault();
        const data = e.target.value
        console.log(data)
        setCategory(data)
    }
    const Mealscategory = meals.filter(item => item.category === `${MealCategory}`)


    return (
        <div>
            <div className=" flex flex-wrap space-y-5 items-center justify-between pt-20">
                <div className="">
                    Available Meals
                    <select onChange={categorychange}
                        value={MealCategory}
                        className="bordered border-2 rounded-lg h-12 ml-2"
                    >
                        <option value="All">All</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>

                    </select>
                </div>
                {/* <div className=" flex items-center">
                    <input onChange={handlechange} placeholder="Meal title" type="text" className="peer  h-10 w-full rounded-md bg-purple-200 pl-4 pr-20 font-thin" />
                </div> */}
            </div>

            {/* meals card */}
            <div className='grid md:grid-cols-2 grid-cols-1 gap-2 '>
                {MealCategory === "All" ?
                    meals.map(item => <CategoryCardDetails key={item._id} item={item}></CategoryCardDetails>)

                    : Mealscategory.map(item => <CategoryCardDetails key={item._id} item={item}></CategoryCardDetails>)
                }
            </div>
        </div>
    );
};

export default Meals;