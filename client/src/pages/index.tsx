import React, { useState } from "react";
import Card from "@/components/Card";
import NewCard from "@/components/NewCard";
import Modal from "@/components/Modal";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="my-5 ">
      <AiOutlinePlusCircle onClick={() => setOpen(true)} size={30} />
      <Modal open={open} close={setOpen}>
        <NewCard />
      </Modal>
      <Card />
    </main>
  );
}
