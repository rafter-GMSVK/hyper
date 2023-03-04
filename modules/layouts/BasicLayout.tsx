import React, { ReactNode } from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

const BasicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-w-[375px]">
      <AppBar />
      {children}
      <Footer />
    </div>
  );
};

export default BasicLayout;
