import React, { useEffect, useState } from "react";
import Style from "./style.module.css";
import { BiDotsVertical } from "react-icons/bi";
import { GiRamProfile } from "react-icons/gi";
import Modal from "../Modal";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { deleteCard, getCard, onDelete } from "@/store/slices/newCardSlice";
import { useAppDispatch } from "@/store";

const Card = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  const { content } = useSelector((state: RootState) => state.newCard);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCard());
  }, [dispatch]);
  console.log("new Area", content);

  const handleModal = (pop: any) => {
    setOpen(true);
    setModalContent([pop as never]);
  };
  const deleteCardItem = (id: string) => {
    console.log("delete", id);
    dispatch(onDelete(id));
    dispatch(deleteCard(id));
    setOpen(false);
  };
  return (
    <>
      {content?.map((item, index) => (
        <div className={Style.card} key={item._id}>
          <div
            className={Style.flexStructure}
            style={{ justifyContent: "space-between" }}
          >
            <div className={Style.flexStructure}>
              <div className={Style.icon}>ŞS</div>
              <span>{item?.title}</span>
            </div>

            <BiDotsVertical size={25} onClick={() => handleModal(item)} />
          </div>
          <div className={Style.imageContainer}>
            <img
              src={item?.file}
              alt="image"
              className=" object-cover w-full h-[550px]"
            />
          </div>
          <div className={Style.flexStructure} style={{ padding: "5px" }}>
            <GiRamProfile size={20} />
            <p className="mx-2">{item?.command}</p>
          </div>
        </div>
      ))}
      <Modal
        open={open}
        close={setOpen}
        modalTitle="Silmek isteginize emin misiniz ?"
      >
        <>
          {modalContent.map((items: any) => {
            return (
              <div key={items._id} className="my-5">
                <div className="my-5">
                  <p className="font-bold">{items.title}</p>
                  card Silinsin mi ?
                </div>
                {/* <Button onCli buttonName="Tamam" /> */}
                <button onClick={() => deleteCardItem(items)}>Tamam</button>
              </div>
            );
          })}
        </>
      </Modal>
      ;
    </>
  );
};

export default Card;
