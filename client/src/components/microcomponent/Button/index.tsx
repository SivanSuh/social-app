import React from "react";
import Style from "./style.module.css";

interface ButtonProps {
  buttonName: string;
  type?: "submit" | "button";
}

const Button: React.FC<ButtonProps> = ({ buttonName, type }) => {
  return (
    <button type={type} className={Style.button}>
      {buttonName}
    </button>
  );
};
export default Button;
