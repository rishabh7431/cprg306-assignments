import { DivOnClick } from "./DivOnClick";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="text-[32px] text-center py-3">CPRG 306: Web Development 2 - Assignments</h1>
      </header>
      <div className="grid grid-cols-2">
        <div>
          <DivOnClick name="Week 2" link="week-2"/>
        </div>
        <div>
          <DivOnClick name="Week 3" link="week-3"/>
        </div>
        <div>
          <DivOnClick name="Week 4" link="week-4"/>
        </div>
      </div>
    </main>
  );
}