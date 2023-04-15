import Input from "@/components/microcomponent/Input/input";
import React from "react";
import Style from "./style.module.css";
import Button from "@/components/microcomponent/Button";
import Link from "next/link";

const Register = () => {
  return (
    <div className={Style.container}>
      <h2 className={Style.title}>Register Page</h2>
      <Link href="/auth/login">
        <p className={Style.subTitle}>Hesabınız var mı?</p>
      </Link>
      <form className={Style.register}>
        <Input placeholder="user name" />
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Input placeholder="password repeat" />
        <Button buttonName="Gonder" />
      </form>
    </div>
  );
};

export default Register;
