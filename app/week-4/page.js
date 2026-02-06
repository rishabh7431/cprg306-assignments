import { ItemList } from "./item-list";

export default function Page(){
  return(
    <main className="text-center align-middle">
      <h1 className="text-[36px] font-extrabold ">Shopping List</h1>
      <div className="grid h-56 grid-cols-3 place-content-evenly">
        <ItemList/>
      </div>
    </main>
  );
}