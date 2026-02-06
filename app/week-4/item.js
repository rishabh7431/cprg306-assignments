export function Item(name, quantity, category){
  return(
    <div className=" border border-solid rounded box-content w-full max-w-96 my-5 bg-blue-500 hover:bg-sky-700">
      <ul>
        <li className="text-base">{name}</li>
        <li className="text-base">Quantity: {quantity}</li>
        <li className="text-base">Category: {category}</li>
      </ul>
    </div>
  );
}