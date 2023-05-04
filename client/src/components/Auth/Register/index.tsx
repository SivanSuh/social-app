import Input from "@/components/microcomponent/Input/input";
import React, { useState } from "react";
import Style from "./style.module.css";
import Button from "@/components/microcomponent/Button";
import Link from "next/link";
import { useAppDispatch } from "@/store";
import { loginAuth } from "@/store/slices/auth/userSlice";

const Register = () => {
  const INITIAL_STATE = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [userInfo, setUserInfo] = useState(INITIAL_STATE);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const dispatch = useAppDispatch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(loginAuth(userInfo));
    console.log("users ", userInfo);

    setUserInfo(INITIAL_STATE);
  };

  return (
    <div className={Style.container}>
      <h2 className={Style.title}>Register Page</h2>
      <Link href="/auth/login">
        <p className={Style.subTitle}>Hesabınız var mı?</p>
      </Link>
      <form onSubmit={onSubmit} className={Style.register}>
        <Input
          onChange={onChangeValue}
          value={userInfo.userName}
          name="userName"
          placeholder="user name"
        />
        <Input
          onChange={onChangeValue}
          value={userInfo.email}
          name="email"
          placeholder="email"
        />
        {/* <Input placeholder="foto" type="file" /> */}
        <Input
          onChange={onChangeValue}
          name="password"
          value={userInfo.password}
          placeholder="password"
        />
        <Input
          onChange={onChangeValue}
          value={userInfo.confirmPassword}
          name="confirmPassword"
          placeholder="password repeat"
        />
        <Button type="submit" buttonName="Gonder" />
      </form>
    </div>
  );
};

export default Register;
