import React from "react";
import Style from "./style.module.css";

interface InputProps {
  placeholder: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
  return (
    <input
      className={Style.input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
