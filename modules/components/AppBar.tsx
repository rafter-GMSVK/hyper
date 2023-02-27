import React from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

const AppBar = (): JSX.Element => {
  const { push } = useRouter();
  return (
    <div className="flex mx-auto max-h-[148px] justify-around items-center bg-black">
      <Image
        onClick={() => {
          push("/");
        }}
        src={Logo}
        alt="Logo"
        className="p-4 cursor-pointer"
      />
      <button className="flex p-10 text-4xl text-white font-Din">Log in</button>
    </div>
  );
};

export default AppBar;
