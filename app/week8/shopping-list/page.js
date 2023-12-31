"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemData from "./items";
import MealIdeas from "./meal-ideas";

export default function Page() {

  const [ items, setItems ] = useState(ItemData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.replace(/\p{Emoji}/gu, '').split(',')[0].trim(); // remove emoji, split words with ",'
    setSelectedItemName(cleanedItemName); // Set the sanitized item name as the selected item
  };

  return (
    <main>
      <h1 className="font-bold text-5xl center-text mb-5 mt-5 ml-5">Shopping List</h1>
      <div className="ml-5 mb-3">
        <p>Our shop is designated to provide the best quality of grocery!</p>
        <p>We accept all cashless payments.</p>
      </div>
      <div className="">
        <div className="pr-2">
          <NewItem onAddItem={handleAddItem} />
        </div>
        <div className="flex pt-2 h-[48rem] mr-[48rem]">
          <div>
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div className="ml-5">
            <h1 className="font-bold text-3xl mb-2">Meal Recipe Suggestions</h1>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
  
  /***** The following layout is saved for future use but not for this time *****/
  /*return (
    <main>
      <h1 className="font-bold text-5xl center-text mb-5 mt-5 ml-5">Shopping List</h1>
      <div className="ml-5 mb-3">
        <p>Our shop is designated to provide the best quality of grocery!</p>
        <p>We accept all cashless payments.</p>
      </div>
      <div className="flex flex-row">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect}/>
        </div>
        <div className="pl-2 pt-2 bg-amber-200 h-[48rem]">
          <h1 className="font-bold text-3xl">Meal Recipe Suggestions</h1>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );*/
}