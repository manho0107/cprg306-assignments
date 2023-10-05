"use client";
import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Electronics");
    const [itemCreated, setItemCreated] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
            "Added Item: " + name + "\n" +
            "Quantity: " + quantity + "\n" +
            "Category: " + category
        );
        
        const newEvent = {
            name,
            quantity,
            category,
        };
        console.log(newEvent);

        setItemCreated(true);
        setName("");
        setQuantity("");
        setCategory("");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                <div className="flex flex-col justify-center items-center w-full max-w-xs h-60 bg-sky-100 rounded-md">
                    <h1 className="font-bold text-3xl mt-4 mb-4 text-center">
                        Shopping Cart
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder=" Item Name"
                            required value={name}
                            onChange={handleNameChange}
                            className="mb-3 h-10 border-2 w-full bg-orange-50 border-gray-400 text-gray-500 rounded-md"
                        />

                        <div className="flex flex-row justify-between mb-3">
                            <input
                                type="number"
                                min="1"
                                max="99"
                                value={quantity}
                                required onChange={handleQuantityChange}
                                className="w-full h-10 border-2 bg-orange-50 border-gray-400 text-gray-500 rounded-md"
                            />

                            <select 
                                type="category"
                                className="w-full ml-4 h-10 border-2 bg-orange-50 border-gray-400 text-gray-500 rounded-md"
                                required value={category} onChange={handleCategoryChange}
                                >
                                <option value disable>
                                    Category
                                </option>
                                <option value="Electronics">Electronics</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Jewelry">Jewelry</option>
                                <option value="Filming Device">Filming Device</option>
                                <option value="Communication">Communication</option>
                            </select>
                        </div>
                        <div className="flex justify-center mb-4">
                            <button
                                type="add"
                                className="w-full flex items-center justify-center py-2 border-2 border-gray-400 text-gray-500 bg-orange-50 rounded-md"
                            >
                                +
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}