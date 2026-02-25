import items from "./items.json";

export function ItemList (){
  return(
    items.map(item => (
      <div className = "border border-solid rounded box-content w-full max-w-96 my-5 bg-blue-500 hover:bg-sky-700 py-2" key={item.id}>
        <p>Name: {item.name}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Category: {item.category}</p>
      </div>
    )
  ));
}