import React from "react";
import Style from "./style.module.css";
import Input from "../microcomponent/Input/input";
import Button from "../microcomponent/Button";

const NewCard = () => {
  return (
    <form className={Style.form}>
      <Input placeholder="title" />
      <Input placeholder="foto" type="file" />
      <Input placeholder="command" />
      <Button buttonName="Gonder" />
    </form>
  );
};

export default NewCard;
