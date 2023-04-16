import React from "react";
import Style from "./style.module.css";
import { GrClose } from "react-icons/gr";

interface ModalProps {
  open: boolean;
  close: any;
  children: React.ReactNode;
  modalTitle?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  open,
  close,
  modalTitle = "Yeni bir şey oluştur",
}) => {
  return (
    <>
      {open && (
        <div className={Style.modal}>
          <div className={Style.container}>
            <div className={Style.flexStructure}>
              <p>{modalTitle}</p>
              <GrClose onClick={() => close?.(false)} />
            </div>
            <main>{children}</main>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
