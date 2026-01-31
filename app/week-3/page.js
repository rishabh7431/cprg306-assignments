import GroceryItemList from "./GroceryItemList";
import { items } from "./GroceryItem";
export default function Page(){
  return(
    <main className="text-center align-middle">
      <h1 className="text-[36px] font-extrabold ">Shopping List</h1>
      <div className="grid h-56 grid-cols-3">
      {items.map((item) => (
        <GroceryItemList
          key={item.name}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
      </div>
    </main>
  );
}