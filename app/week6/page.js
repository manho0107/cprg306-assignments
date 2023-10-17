"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemData from "./items";

export default function Page() {

  const [ items, setItems ] = useState(ItemData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  
  return (
    <main>
      <h1 className="font-bold text-5xl center-text mb-5 mt-5 ml-5">Shopping List</h1>
        <div className="ml-5 mb-3">
          <p>Our shop is designated to provide the best quality of technological devices, from accessories, to laptops, to phones, and more!</p>
          <p>We accept all cashless payments.</p>
        </div>
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items}/>
        </div>
    </main>
  );
}