export default function GroceryItemList({name, quantity, category}){
  return(
    <div className=" border border-solid rounded box-content w-full max-w-96 my-5 bg-blue-500 hover:bg-sky-700">
      <p className="text-base">{name}</p>
      <p className="text-base">Quantity: {quantity}</p>
      <p className="text-base">Category: {category}</p>
    </div>
  );
}