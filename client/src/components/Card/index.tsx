import React, { useState } from "react";
import Style from "./style.module.css";
import Input from "../microcomponent/Input/input";
import Button from "../microcomponent/Button";
import { BiDotsVertical } from "react-icons/bi";
import { GiRamProfile } from "react-icons/gi";
import Modal from "../Modal";

const Card = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={Style.card}>
      <div
        className={Style.flexStructure}
        style={{ justifyContent: "space-between" }}
      >
        <div className={Style.flexStructure}>
          <div className={Style.icon} />
          <span>Title</span>
        </div>
        <BiDotsVertical size={25} onClick={() => setOpen(true)} />
      </div>
      <div className={Style.imageContainer}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-5552b.appspot.com/o/images%2Fspotify.png?alt=media&token=3007db11-1904-44d9-9401-9614971d82b5"
          alt="image"
          className="h-full object-cover w-full"
        />
      </div>
      <div className={Style.flexStructure}>
        <GiRamProfile size={20} />
        <p className="mx-2">yorum</p>
      </div>
      <div
        className={Style.flexStructure}
        style={{ justifyContent: "space-between", margin: "5px" }}
      >
        <div className={Style.command}>
          <Input placeholder="Commands" />
        </div>
        <Button buttonName="Gonder" />
      </div>
      <Modal open={open} close={setOpen}>
        <h3>nadbad</h3>
      </Modal>
    </div>
  );
};

export default Card;
