import React from "react";
import Input from "@/components/microcomponent/Input/input";
import Style from "./style.module.css";
import Button from "@/components/microcomponent/Button";
import Link from "next/link";

const Login = () => {
  return (
    <div className={Style.login}>
      <h2 className={Style.title}>Login Page</h2>
      <Link href="/auth/register">
        <p className={Style.register}>Kayıt olun</p>
      </Link>
      <form className="flex flex-col gap-5">
        <Input placeholder="user name" />
        <Input placeholder="password" />
        <Button buttonName="Gonder" />
      </form>
    </div>
  );
};
export default Login;
