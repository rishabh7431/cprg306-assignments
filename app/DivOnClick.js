"use client";

export function DivOnClick({ name, link }) {
  return (
    <div
      onClick={() => (window.location.href = link)}
      className="rounded box-content mx-4 py-5 my-3 text-center bg-blue-500 hover:bg-sky-700 cursor-pointer"
    >
      {name}
    </div>
  );
}