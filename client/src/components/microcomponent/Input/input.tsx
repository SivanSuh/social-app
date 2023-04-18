import React from "react";
import Style from "./style.module.css";

interface InputProps {
  placeholder: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "file";
  name?: string | any;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  type,
  name,
}) => {
  return (
    <input
      className={Style.input}
      value={value}
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
