import { useState } from "react";
import { Item } from "./item";

export function ItemList ({items, onItemSelect}){

  const [sortBy, setSortBy] = useState("name");
  let sortedItems = sortBy;
  if (sortBy === "name"){
      sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
  }
  else if(sortBy === "category"){
      sortedItems = [...items].sort((a, b) => a.category.localeCompare(b.category));
  }

  return(
    sortedItems.map(item => (
      <div className = "border border-solid rounded box-content w-full max-w-96 my-5 bg-blue-500 hover:bg-sky-700 py-2 px-2" key={item.id}>
        <Item name={item.name} quantity={item.quantity} category={item.category} onSelect={() => onItemSelect(item)}/>
      </div>
    )
  )
);
}