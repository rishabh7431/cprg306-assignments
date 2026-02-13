import NewItem from "./NewItem";
export default function Page(){
  return(
    <main>
      <header>
        <h1 className="text-[32px] text-center py-3">Week 5: Creating a Form and using state</h1>
      </header>
      <div className="flex justify-center items-center my-50">
        <NewItem/>
      </div>
    </main>
  );
}