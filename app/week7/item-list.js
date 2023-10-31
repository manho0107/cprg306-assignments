"use client";
import Item from "./item.js";
import { useState } from "react";


export default function ItemList({items, onItemSelect}) {
    const [sortBy, setSortBy] = useState("name"); // sorted by name by this default

    if (sortBy === "name") {                                              // sort by name
        items.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === "category") {                                          // sort by category
        items.sort((a, b) => a.category.localeCompare(b.category));
    }
    if (sortBy === "grouped category") {                                  // sort by grouped category
        items.sort((a, b) => a.category.localeCompare(b.category));
    
      const groupedCategory = items.reduce((groupedItem, item) => {
          const category = item.category;
          if (groupedItem[category] == null) groupedItem[category] = [];
          groupedItem[category].push(item);
          return groupedItem;
        }, {});
    
      return (
          <>
            {button(setSortBy)}
            {Object.keys(groupedCategory).map((category) => (
              <div key={category}>
                <h2 className="ml-5 mt-5 mb-3 text-3xl font-bold text-sky-900">{category}</h2>
                {groupedCategory[category].map((item) => (
                  <Item
                    key={item.key}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onSelect={onItemSelect}
                  />
                ))}
              </div>
            ))}
          </>
        );
      }
  
    return (
      <>
        {button(setSortBy)}
        {items.map((item) => (
        <Item
          key={item.key}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          onSelect={onItemSelect}
        />
      ))}
      </>
    );
}

function button(setSortBy) {
    return (
        <div>
            <label className="ml-5 font-bold text-3xl">
                Sort by:
            </label>
            <div className="sm:flex mt-5 ml-5 mb-5 text-3xl w-[40rem]">
                <button
                    id="name"
                    onClick={(e) => setSortBy(e.target.id)}
                    className="bg-emerald-400 font-bold rounded-md p-3 hover:bg-blue-500 active:bg-amber-500"
                >
                    Name
                </button>
                <button
                    id="category"
                    onClick={(e) => setSortBy(e.target.id)}
                    className="ml-5 bg-emerald-400 font-bold rounded-md p-3 hover:bg-blue-500 active:bg-amber-500"
                >
                    Category
                </button>
                <button
                    id="grouped category"
                    onClick={(e) => setSortBy(e.target.id)}
                    className="ml-5 bg-emerald-400 font-bold rounded-md p-3 hover:bg-blue-500 active:bg-amber-500"
                >
                    Grouped Category
                </button>
            </div>
        </div>
    );
}