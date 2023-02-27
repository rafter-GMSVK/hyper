import React from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IconType, SVGIcons } from "@/icons/SVGIcons";

const navigation = [
  { name: "Careers", link: "/careers" },
  { name: "Contact Us", link: "/contact-us" },
];

const socialHandlesList: IconType[] = ["twitter", "facebook", "linked-in"];

const Footer = () => {
  return (
    <div className="flex flex-col bg-black">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="desktop:px-[260px] flex justify-between items-center">
          <div className="w-fit">
            <Image src={Logo} alt="Logo" className="p-4" />
          </div>
          <div className="flex flex-col gap-2">
            {navigation.map((item) => {
              return (
                <div key={item.name}>
                  <Link className="text-white underline" href={item.link}>
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-[70px] justify-around flex items-center border-t border-t-1 border-white border-solid">
          <p className="text-white text-[18px]">
            Designed &nbsp; | &nbsp; Developed &nbsp; | &nbsp; Maintained by
            Hyperzebras
          </p>
          <div className="flex gap-4">
            {socialHandlesList.map((item) => {
              return (
                <Link href={""}>
                  <SVGIcons key={item} type={item} className="text-white" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
