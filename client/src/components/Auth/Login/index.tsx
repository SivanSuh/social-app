import React, { useEffect, useState } from "react";
import Input from "@/components/microcomponent/Input/input";
import Style from "./style.module.css";
import Button from "@/components/microcomponent/Button";
import Link from "next/link";
import { RootState, useAppDispatch } from "@/store";
import { loginAuth } from "@/store/slices/auth/userSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { isLoggin } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(loginAuth(values));
    setValues({
      email: "",
      password: "",
    });
    setTimeout(() => {
      if (isLoggin) {
        router.push("/");
      }
    }, 1000);
  };

  return (
    <div className={Style.login}>
      <h2 className={Style.title}>Login Page</h2>
      <Link href="/auth/register">
        <p className={Style.register}>Kayıt olun</p>
      </Link>
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <Input
          value={values.email}
          name="email"
          placeholder="Email"
          onChange={changeHandler}
        />
        <Input
          value={values.password}
          onChange={changeHandler}
          name="password"
          placeholder="password"
        />
        <Button type="submit" buttonName="Gonder" />
      </form>
    </div>
  );
};
export default Login;
