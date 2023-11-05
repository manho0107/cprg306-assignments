"use client";
import { useState } from "react";

export default function NewItem({onAddItem}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");
    const [itemCreated, setItemCreated] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const NewItem = {
            name,
            quantity,
            category,
        };
        onAddItem(NewItem);
    
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
            <div className="flex flex-col w-[40rem] mt-1 mb-2 ml-5 p-2 bg-white">
                <div className="flex flex-col max-w-s bg-blue-300 rounded-md">
                    <h1 className="font-bold text-3xl mt-4 mb-4 text-center">
                        Shopping Cart
                    </h1>
                    <form onSubmit={handleSubmit} className="p-2">
                        <input
                            type="text"
                            placeholder="Item Name"
                            required value={name}
                            onChange={handleNameChange}
                            className="mb-3 h-10 border-2 w-full p-1 bg-orange-50 border-gray-400 text-gray-500 rounded-md"
                        />

                        <div className="flex flex-row justify-between mb-3">
                            <input
                                type="number"
                                min="1"
                                max="99"
                                value={quantity}
                                required onChange={handleQuantityChange}
                                className="w-full h-10 border-2 p-1 bg-orange-50 border-gray-400 text-gray-500 rounded-md"
                            />

                            <select 
                                type="category"
                                className="w-full ml-4 h-10 border-2 bg-orange-50 border-gray-400 text-gray-500 rounded-md"
                                required value={category} onChange={handleCategoryChange}
                                >
                                <option value disable>
                                    Category
                                </option>
                                <option value="Electronics">Produce</option>
                                <option value="Accessories">Dairy</option>
                                <option value="Jewelry">Bakery</option>
                                <option value="Filming Device">Meat</option>
                                <option value="Communication">Frozen Foods</option>
                                <option value="Communication">Canned Goods</option>
                                <option value="Communication">Dry Goods</option>
                                <option value="Communication">Beverages</option>
                                <option value="Communication">Snacks</option>
                                <option value="Communication">Household</option>
                                <option value="Communication">Other</option>
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