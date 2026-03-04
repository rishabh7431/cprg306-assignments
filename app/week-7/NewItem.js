"use client";
import { useState } from "react";

export default function NewItem( {onAddItem} ){

  //Initialize State
  const [item, setItem] = useState({
  name: "",
  quantity: 1,
  category: "produce",
});
  
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

  function handleSubmit(){
  
  // Create Object: Create an item object with the current name, quantity, and category.
  const newItem = { ...item, id: crypto.randomUUID()};

  // Log the Item: console.log the item object to the console.
  //alert(`Added: ${item.title}, quantity: ${item.number}, category: ${item.cat}`);
  onAddItem(newItem);
  
  // Reset State: Reset name to "", quantity to 1, and category to "produce".
  const initialState = { name: "", quantity: 1, category: "produce" };
  setItem(initialState);
}

const handleChange = (e) => {
  const { name, value } = e.target;
  setItem((prev) => ({ ...prev, [name]: value }));
};


  return(
     <div className="flex justify-center items-center rounded-md py-5 px-2.5 bg-amber-50/5 max-w-xl">
      <form onSubmit={(e) => {e.preventDefault(); handleSubmit(); 
      }}>
        <div>
          <label className="mx-3.75 text-lg">Name:</label><br/>
          <input type="text" className="border-2 border-amber-50 rounded-sm py-3.75 w-120 mx-3.75 bg-black" name = "name" value={item.name} onChange = {handleChange}/>
        </div>
        <div className="grid grid-cols-2 my-2.5">
          <label className="mx-3.75 text-lg">Quantity:</label>
          <label className="mx-3.75 text-lg">Category:</label>
          <select className="border-2 border-amber-50 rounded-sm py-3.75 mx-3.75 bg-black" name ="quantity" value={item.quantity} onChange = {handleChange}>
            {
              quantityOptions.map(num => (
        <option key={num} value={num}>{num}
                </option>
            ))}
          </select>
          <select className="border-2 border-amber-50 rounded-sm py-3.75 mx-3.75 bg-black" name = "category" value={item.category} onChange = {handleChange}>
            {
              categories.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
            ))}
          </select>
        </div>
        <div>
          <button className="border-blue-700 bg-blue-700 hover:bg-blue-400 py-1.25 px-6.25 mx-3.75" type="submit">  +  </button>
        </div>
      </form>
     </div>
  );
}