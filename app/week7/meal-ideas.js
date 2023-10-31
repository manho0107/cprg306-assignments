"use client";
import { useState, useEffect } from "react";

export default function mealIdea ({ingredient}) {
    const [meals, setMeals] = useState("");

    async function fetchMealIdeas(ingredient) {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
          );
          const data = await response.json();
          setMeals(data.meals);
        } catch (error) {
          console.error("Error fetching meal ideas:", error);
        }
      }

    useEffect(() => {
        if (ingredient) {
            fetchMealIdeas (ingredient);
        }
    }, [ingredient]);

    return (
        <div>
        <ul>
          {ingredient === '' ? (
            <li>Click a product and see its meal recipe.</li>
          ) : meals === null || meals.length === 0 ? (
            <li>No recipe for {ingredient}.</li>
          ) : (
            meals.map((meal) => <li key={meal.idMeal} className="mt-2 mb-2 p-2 bg-teal-50 hover:bg-teal-100 font-medium">{meal.strMeal}</li>)
          )}
        </ul>
      </div>
    );
}