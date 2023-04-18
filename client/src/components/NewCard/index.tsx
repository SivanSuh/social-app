import React, { useState } from "react";
import Style from "./style.module.css";
import Input from "../microcomponent/Input/input";
import Button from "../microcomponent/Button";
import { onAdd } from "@/store/slices/newCardSlice";
import { useDispatch } from "react-redux";

const NewCard = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    title: "",
    commant: "",
  });

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(onAdd([values]));
  };
  return (
    <form onSubmit={handleClick} className={Style.form}>
      <Input
        value={values.title}
        name="title"
        onChange={onChangeValue}
        placeholder="title"
      />
      <Input placeholder="foto" type="file" />
      <Input
        name="commant"
        value={values.commant}
        onChange={onChangeValue}
        placeholder="command"
      />
      <Button type="submit" buttonName="Gonder" />
    </form>
  );
};

export default NewCard;
