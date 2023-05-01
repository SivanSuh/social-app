import React, { useState } from "react";
import Input from "@/components/microcomponent/Input/input";
import Style from "./style.module.css";
import Button from "@/components/microcomponent/Button";
import Link from "next/link";
import { useAppDispatch } from "@/store";
import { registerAuth } from "@/store/slices/auth/userSlice";

const Login = () => {
  const [values, setValues] = useState({
    userName: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("values register", values);
    dispatch(registerAuth(values));
    setValues({
      userName: "",
      password: "",
    });
  };
  return (
    <div className={Style.login}>
      <h2 className={Style.title}>Login Page</h2>
      <Link href="/auth/register">
        <p className={Style.register}>Kayıt olun</p>
      </Link>
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <Input
          value={values.userName}
          name="userName"
          placeholder="user name"
          onChange={changeHandler}
        />
        <Input
          value={values.password}
          onChange={changeHandler}
          name="password"
          placeholder="password"
        />
        <Button buttonName="Gonder" />
      </form>
    </div>
  );
};
export default Login;
