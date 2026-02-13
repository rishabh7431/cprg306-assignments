"use client";
import { useState } from "react"

export default function NewItem(){

  //Initialize State
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  
  //Create option tags for categories
  const categories = [
    {value: 'produce', label: 'Produce'},
    {value: 'dairy', label: 'Dairy'},
    {value: 'bakery', label: 'Bakery'},
    {value: 'meat', label: 'Meat'},
    {value: 'frozen', label: 'Frozen'},
    {value: 'foods', label: 'Foods'},
    {value: 'cannedGoods', label: 'Canned Goods'},
    {value: 'dryGoods', label: 'Dry Goods'},
    {value: 'beverages', label: 'Beverages'},
    {value: 'snacks', label: 'Snacks'},
    {value: 'household', label: 'Household'},
    {value: 'other', label: 'Other'},
  ];

  // Create options for quantity
  const quantityOptions = Array.from({length: 99}, (_,i) => i+1);

  return(
     <div className="flex justify-center items-center rounded-md py-[20px] px-[10px] bg-amber-50/5 max-w-xl">
      <form onSubmit={(e) => {e.preventDefault(); handleSubmit(name, category, quantity, setName, setQuantity, setCategory); 
      }}>
        <div>
          <label className="mx-[15px] text-lg">Name:</label><br/>
          <input type="text" className="border-2 border-amber-50 rounded-sm py-[15px] w-120 mx-[15px] bg-black" onChange={e => (setName(e.target.value))}/>
        </div>
        <div className="grid grid-cols-2 my-[10px]">
          <label className="mx-[15px] text-lg">Quantity:</label>
          <label className="mx-[15px] text-lg">Category:</label>
          <select className="border-2 border-amber-50 rounded-sm py-[15px] mx-[15px] bg-black" value={quantity} onChange={num => (setQuantity(Number(num.target.value)))}>
            {
              quantityOptions.map(num => (
        <option key={num} value={num}>{num}
                </option>
            ))}
          </select>
          <select className="border-2 border-amber-50 rounded-sm py-[15px] mx-[15px] bg-black" value={category} onChange={e => (setCategory(e.target.value))}>
            {
              categories.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
            ))}
          </select>
        </div>
        <div>
          <button className="border-blue-700 bg-blue-700 hover:bg-blue-400 py-[5px] px-[25px] mx-[15px]" type="submit">  +  </button>
        </div>
      </form>
     </div>
  );
}

function handleSubmit(name, category, quantity, setName, setQuantity, setCategory){
  
  // Create Object: Create an item object with the current name, quantity, and category.
  const item = {
  title: name,
  cat: category,
  number: quantity
  };

  // Log the Item: console.log the item object to the console.
  console.log(item);

  // User Feedback: Call alert() to display the details of the created item (e.g., "Added: Bread, quantity: 2, category: bakery").
  alert(`Added: ${item.title}, quantity: ${item.number}, category: ${item.cat}`);
  
  // Reset State: Reset name to "", quantity to 1, and category to "produce".
  setName("");
  setCategory("produce");
  setQuantity(1);
}