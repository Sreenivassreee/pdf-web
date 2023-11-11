"use client";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([
    { id: 1, title: "item #1" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
  ]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <h1>Sree</h1>
    </main>
  );
}
