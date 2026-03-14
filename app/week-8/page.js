"use client";
import NewItem from "./NewItem";
import { ItemList } from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./MealIdeas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleItemSelect = (item) => {
    let cleanedName = item.name
      .split(",")[0]
      .trim()
      .toLowerCase();
    setSelectedItemName(cleanedName);
  };

  return (
    <main>
      <header>
        <h1 className="text-[32px] text-center py-3">Shopping List</h1>
      </header>

      <div className="flex justify-center gap-10 my-10 items-start">
        <div>
          <div className="flex justify-center items-center mb-10">
            <NewItem onAddItem={handleAddItem} />
          </div>

          <div>
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>

        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}