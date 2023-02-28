import React from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

const AppBar = (): JSX.Element => {
  const { push } = useRouter();
  return (
    <div className="bg-[#2B2B2B] sticky top-0 z-10 ">
      <div className="flex mx-auto max-h-[148px] justify-between items-center max-w-[1440px]">
        <Image
          onClick={() => {
            push("/");
          }}
          src={Logo}
          alt="Logo"
          className="p-4 cursor-pointer"
        />
        <button className="flex p-10 text-[16px]  font-Assistant -tracking-[0.3px] text-primary">
          Login
        </button>
      </div>
    </div>
  );
};

export default AppBar;
