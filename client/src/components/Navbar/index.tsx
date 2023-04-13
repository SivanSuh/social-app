import React, { useState } from "react";
import Input from "../microcomponent/Input/input";
import Button from "../microcomponent/Button";

const Navbar = () => {
  const [values, setValues] = useState("");
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto text-white p-4 flex justify-between items-center">
        <h2>LOGO</h2>
        <Input
          placeholder="Bir şeyler yaz"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <Button buttonName="Giriş Yap" />
      </div>
    </div>
  );
};

export default Navbar;
