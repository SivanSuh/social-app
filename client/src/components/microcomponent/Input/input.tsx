import React from "react";
import Style from "./style.module.css";

interface InputProps {
  placeholder: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "file";
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  type,
}) => {
  return (
    <input
      className={Style.input}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
