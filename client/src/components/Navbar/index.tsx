import React, { useState } from "react";
import Input from "../microcomponent/Input/input";
import Button from "../microcomponent/Button";
import Link from "next/link";

const Navbar = () => {
  const [values, setValues] = useState("");
  return (
    <div className="bg-black sticky top-0">
      <div className="max-w-7xl mx-auto text-white p-4 flex justify-between items-center">
        <Link href="/">
          <h2>LOGO</h2>
        </Link>
        <Input
          placeholder="Bir şeyler yaz"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <Link href="/auth/login">
          <Button buttonName="Giriş Yap" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
