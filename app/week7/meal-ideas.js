"use client";
import { useState, useEffect } from "react";

export default function mealIdea ({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`    // API
          );
          const data = await response.json();
          setMeals(data.meals);
        } catch (error) {   // handle error occurred during API request
          console.error("Unable fetching meal ideas:", error);
        }
      }

    useEffect(() => {
        if (ingredient) {
            fetchMealIdeas (ingredient); // call fetch Mealideas function to fetch meal ideas from 'ingredient'
        }
    }, [ingredient]);

    return (
        <div className="p-2 w-[25rem] bg-blue-50">
            <ul>
            {ingredient === '' ? (  // display message when ingredient is unavailable
                <li>Click a product and see its meal recipe.</li>
            ) : meals === null || meals.length === 0 ? ( // display message when no recipe for selected product
                <li>No recipe for {ingredient}.</li>
            ) : (
                meals.map((meal) => <li key={meal.idMeal} className="p-2 w-96 hover:bg-sky-200">{meal.strMeal}</li>)    // map and display meal recipe when available
            )}
            </ul>
        </div>
    );
}