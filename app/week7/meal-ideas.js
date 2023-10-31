"use client";
import { useState, useEffect } from "react";

export default function mealIdea ({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
          );
          const data = await response.json();
          setMeals(data.meals);
        } catch (error) {
          console.error("Unable fetching meal ideas:", error);
        }
      }

    useEffect(() => {
        if (ingredient) {
            fetchMealIdeas (ingredient);
        }
    }, [ingredient]);

    return (
        <div className="item-left h-screen p-4 w-[25rem] bg-blue-50">
            <ul>
            {ingredient === '' ? (
                <li>Click a product and see its meal recipe.</li>
            ) : meals === null || meals.length === 0 ? (
                <li>No recipe for {ingredient}.</li>
            ) : (
                meals.map((meal) => <li key={meal.idMeal} className="mt-2 mb-2 p-1 w-96 hover:bg-sky-200">{meal.strMeal}</li>)
            )}
            </ul>
        </div>
    );
}