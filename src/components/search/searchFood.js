import React, { useEffect, useState } from 'react';
import "./searchFood.css";

function SearchFood() {
    const [food, setFood] = useState("");
    const [foodResult, setFoodResult] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fetchNutritionData = async () => {
            const url = `https://bonhappetee-food-nutrition-api.p.rapidapi.com/Prod/search?confidence=.9&value=${food}&page=1`;
            const options = {
                method: 'GET',
                headers: {
                    'x-api-key': `${food}`, // Replace 'YOUR-API-KEY' with your actual RapidAPI key
                    'X-RapidAPI-Key': 'a09455f271msh2c87042c87251bcp1c2b55jsned7f19a6a9d3',
                    'X-RapidAPI-Host': 'bonhappetee-food-nutrition-api.p.rapidapi.com',
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setFoodResult(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchNutritionData();
    };

    console.log(foodResult);

    return (
        <div className='searchPage_Wrapper'>
            <div className='searchPage_Container'>
                <form
                    className='searchFood_FormField'
                    onSubmit={handleSubmit}
                >
                    <input
                        className='searchFood_Input'
                        type='text'
                        required
                        value={food}
                        onChange={(e) => setFood(e.target.value)}
                    />

                    <button type='submit'>
                        Search Food
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SearchFood;
