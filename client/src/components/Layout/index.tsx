import React from "react";
import Navbar from "../Navbar";

interface LayoutProp {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
