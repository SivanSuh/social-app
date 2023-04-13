import React from "react";
import Style from "./style.module.css";

interface ButtonProps {
  buttonName: string;
}

const Button: React.FC<ButtonProps> = ({ buttonName }) => {
  return <button className={Style.button}>{buttonName}</button>;
};
export default Button;
