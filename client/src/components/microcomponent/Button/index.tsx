import React from "react";
import Style from "./style.module.css";

interface ButtonProps {
  buttonName: string;
  type?: "submit" | "button";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttonName, type, onClick }) => {
  return (
    <button type={type} className={Style.button} onClick={onClick}>
      {buttonName}
    </button>
  );
};
export default Button;
