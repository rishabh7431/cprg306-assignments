"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "@/contexts/AuthContext";
import NewItem from "./NewItem";
import { ItemList } from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./MealIdeas";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");


  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);


  if (!user) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p className="text-xl">Redirecting to login...</p>
      </main>
    );
  }

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleItemSelect = (item) => {
    let cleanedName = item.name
      .split(",")[0]
      .trim()
      .toLowerCase();
    setSelectedItemName(cleanedName);
  };

  return (
    <main>
      <header>
        <h1 className="text-[32px] text-center py-3">Shopping List</h1>
        <p className="text-center text-sm">Welcome, {user.displayName}</p>
      </header>

      <div className="flex justify-center gap-10 my-10 items-start">
        <div>
          <div className="flex justify-center items-center mb-10">
            <NewItem onAddItem={handleAddItem} />
          </div>
          <div>
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}