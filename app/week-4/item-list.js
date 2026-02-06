import { Item } from "./item";
import items from "./items.json";

export function ItemList (){
  return(
    items.map(item => (
      <ul className = "border border-solid rounded box-content w-full max-w-96 my-5 bg-blue-500 hover:bg-sky-700 py-2" key={item.id}>
        <li>Name: {item.name}</li>
        <li>Quantity: {item.quantity}</li>
        <li>Category: {item.category}</li>
      </ul>
    )
  ));
}