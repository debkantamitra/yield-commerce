import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Banner />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
