import React, { ReactNode } from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

const BasicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-w-[500px] min-h-[800px]">
      <AppBar />
      {children}
      <Footer />
    </div>
  );
};

export default BasicLayout;
