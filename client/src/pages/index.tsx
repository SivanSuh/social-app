import React from "react";
import Card from "@/components/Card";
import NewCard from "@/components/NewCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Login from "@/components/Auth/Login";

export default function Home() {
  const { isLoggin } = useSelector((state: RootState) => state.user);
  return (
    <main className="my-5 ">
      {isLoggin ? (
        <>
          <NewCard />
          <Card />
        </>
      ) : (
        <Login />
      )}
    </main>
  );
}
