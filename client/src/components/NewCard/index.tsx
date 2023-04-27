import React, { useState } from "react";
import Style from "./style.module.css";
import Input from "../microcomponent/Input/input";
import Button from "../microcomponent/Button";
import { onAdd, postCard } from "@/store/slices/newCardSlice";
import { useAppDispatch } from "@/store";
import { useForm, SubmitHandler } from "react-hook-form";

interface Forms {
  example: string;
  exampleRequired: string;
}

const NewCard = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Forms>();

  const [values, setValues] = useState({
    title: "",
    command: "",
    file: "",
  });

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // const handleFileUpload = (e: any) => {
  //   setValues({ ...values, file: e.target.files[0] });
  // };

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.title.trim() === "" || values.command.trim() === "") {
      return;
    }

    dispatch(onAdd(values as any));
    dispatch(postCard(values));
    setValues({
      title: "",
      command: "",
      file: "",
    });
  };
  return (
    <form onSubmit={handleClick} className={Style.form}>
      <Input
        value={values.title}
        name="title"
        onChange={onChangeValue}
        placeholder="title"
      />
      <Input
        placeholder="foto image url"
        name="file"
        type="text"
        value={values.file}
        onChange={onChangeValue}
      />

      <Input
        name="command"
        value={values.command}
        onChange={onChangeValue}
        placeholder="command"
      />
      <Button type="submit" buttonName="Gonder" />
    </form>
  );
};

export default NewCard;
