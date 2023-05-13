import React, { useEffect, useState } from "react";
import Input from "../microcomponent/Input/input";
import Button from "../microcomponent/Button";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Navbar = () => {
  const [values, setValues] = useState("");

  const { formContent } = useSelector((state: RootState) => state.user);

  return (
    <div className="border-b-2 bg-white sticky top-0">
      <div className="max-w-7xl mx-auto  p-4 flex justify-between items-center">
        <Link href="/">
          <h2>LOGO</h2>
        </Link>
        <Input
          placeholder="Bir şeyler yaz"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <div>
          {formContent ? (
            <span>{formContent.email}</span>
          ) : (
            <Link href="/auth/login">
              <Button buttonName="Giriş Yap" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
