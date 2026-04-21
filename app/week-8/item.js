export function Item({ name, quantity, category, onSelect }) {
  return (
    <div onClick={onSelect}>
      <p className="text-base">{name}</p>
      <p className="text-base">Quantity: {quantity}</p>
      <p className="text-base">Category: {category}</p>
    </div>
  );
}