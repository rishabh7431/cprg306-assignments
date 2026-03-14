export function Item({name, quantity, category, onSelect}){
  return(
    <div onClick={onSelect}>
        <li className="text-base list-none">{name}</li>
        <li className="text-base list-none">Quantity: {quantity}</li>
        <li className="text-base list-none">Category: {category}</li>
    </div>
  );
}