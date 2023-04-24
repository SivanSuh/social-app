import Input from "@/components/microcomponent/Input/input";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Style from "./style.module.css";
import Button from "@/components/microcomponent/Button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  console.log("user", user);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("users ", userInfo);
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
