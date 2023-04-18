import React from "react";
import Card from "@/components/Card";
import NewCard from "@/components/NewCard";

export default function Home() {
  return (
    <main className="my-5 ">
      <NewCard />
      <Card />
    </main>
  );
}
