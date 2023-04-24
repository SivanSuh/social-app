import React, { useEffect, useState } from "react";
import Style from "./style.module.css";
import { BiDotsVertical } from "react-icons/bi";
import { GiRamProfile } from "react-icons/gi";
import Modal from "../Modal";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { getCard } from "@/store/slices/newCardSlice";
import { useAppDispatch } from "@/store";

const Card = () => {
  const [open, setOpen] = useState(false);
  const { content } = useSelector((state: RootState) => state.newCard);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCard());
  }, [dispatch]);
  console.log("new Area", content);

  return (
    <>
      {content.map((item, index) => (
        <div className={Style.card} key={index}>
          <div
            className={Style.flexStructure}
            style={{ justifyContent: "space-between" }}
          >
            <div className={Style.flexStructure}>
              <div className={Style.icon} />
              <span>{item?.title}</span>
            </div>
            <BiDotsVertical size={25} onClick={() => setOpen(true)} />
          </div>
          <div className={Style.imageContainer}>
            <img
              src={item?.file}
              alt="image"
              className=" object-cover w-full h-[600px]"
            />
          </div>
          <div className={Style.flexStructure} style={{ padding: "5px" }}>
            <GiRamProfile size={20} />
            <p className="mx-2">{item?.command}</p>
          </div>
        </div>
      ))}
      <Modal open={open} close={setOpen}>
        <h3>merhaba</h3>
      </Modal>
    </>
  );
};

export default Card;
