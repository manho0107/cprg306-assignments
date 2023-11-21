"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
//import ItemData from "./items"; // used in previous work which is not needed this time.
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { useEffect } from "react";
import { getItems, addItems, deleteItems } from "../_service/shopping-list-service.js";

export default function Page() {
  const { user } = useUserAuth();
  const [ items, setItems ] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.replace(/\p{Emoji}/gu, '').split(',')[0].trim(); // remove emoji, split words with ",'
    setSelectedItemName(cleanedItemName); // Set the sanitized item name as the selected item
  };

  // handle adding a new item
  const handleAddItem = async (newItem) => {
    try {
      if (user) {
        const newItemId = await addItems(user.uid, newItem); // assign an ID to a new item
        newItem.id = newItemId;
        setItems([...items, newItem]); // update the item state to include the new item
      }
    } catch (error) { // error message during 'add' operation
      console.error("Error in adding item: ", error);
    }
  };

  // load items
  const loadItems = async () => {
    try {
      if (user) {
        const shoppingListItems = await getItems(user.uid); // function to get the items
        setItems(shoppingListItems); // update the items state with the fetched items
      }
    } catch (error) {
      console.error("Error in loading items: ", error);
    }
  };

  useEffect (() => {
    if (user)
      loadItems();
    }, [user]
  );

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
}