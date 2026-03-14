"use client";
import NewItem from "./NewItem";
import { ItemList } from "./item-list";
import itemsData from "./items.json";
import {useState} from "react";

export default function Page(){

  const [items, setItems] = useState(itemsData);
  
  const handleAddItem = (newItem) => {
  setItems((prev) => [...prev, newItem]);
};


  return(
    <main>
      <header>
        <h1 className="text-[32px] text-center py-3">Shopping List</h1>
      </header>
      <div className="flex justify-center items-center my-10">
        <NewItem onAddItem={handleAddItem}/>
      </div>
      <div className="grid h-56 grid-cols-3 place-items-center my-10">
              <ItemList items={items}/>
      </div>
    </main>
  );
}