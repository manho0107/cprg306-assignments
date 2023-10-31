"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemData from "./items";
import MealIdea from "./meal-ideas";
import Link from "next/link";

export default function Page() {

  const [ items, setItems ] = useState(ItemData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    console.log('Cleaned item name:', cleanedItemName);
    setSelectedItemName(cleanedItemName);
  };

  
  return (
    <main>
      <h1 className="font-bold text-5xl center-text mb-5 mt-5 ml-5">Shopping List</h1>
        <div className="ml-5 mb-3">
          <p>Our shop is designated to provide the best quality of grocery!</p>
          <p>We accept all cashless payments.</p>
        </div>
        <div className="flex">
          <div className="flex-1">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect}/>
          </div>
          <div className="flex-1 pl-2 pt-2 bg-amber-200 h-80">
            <h1 className="font-bold text-3xl">Meal Recipe</h1>
            <MealIdea ingredient={selectedItemName} />
          </div>
        </div>
    </main>
  );
}