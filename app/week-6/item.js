export function Item({name, quantity, category}){
  return(
    <div>
        <li className="text-base list-none">{name}</li>
        <li className="text-base list-none">Quantity: {quantity}</li>
        <li className="text-base list-none">Category: {category}</li>
    </div>
  );
}