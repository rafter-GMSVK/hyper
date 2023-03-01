import React from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IconType, SVGIcons } from "@/icons/SVGIcons";
import { useRouter } from "next/router";
import { contactUsData } from "@/data/contactUsData";

const navigation = [{ name: "Careers", link: "/careers" }];

const socialHandlesList: IconType[] = ["twitter", "facebook", "linked-in"];

const Footer = () => {
  const { push } = useRouter();

  return (
    <div className="bg-black ">
      <div className="flex flex-col  max-w-[1440px] mx-auto">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex justify-between items-center">
            <div className="w-fit">
              <Image
                onClick={() => {
                  push("/");
                }}
                src={Logo}
                alt="Logo"
                className="p-4 cursor-pointer"
              />
            </div>

            <div className="flex gap-10">
              <div className="flex flex-col gap-[2px]">
                <p className="text-[10px] font-Assistant -tracking-[0.3px] text-white whitespace-pre-line">
                  {contactUsData.address}
                </p>
                <Link
                  className="text-[10px] font-Assistant -tracking-[0.3px] whitespace-pre-line text-white"
                  href="mailto:info@hyperzebras.com"
                >
                  {contactUsData.email}
                </Link>
                <p className="text-[10px] font-Assistant -tracking-[0.3px] text-white whitespace-pre-line">
                  {contactUsData.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="h-[70px] justify-between flex items-center border-t border-t-1 border-primary border-solid">
            <p className="text-white font-Assistant -tracking-[0.3px]  text-[12px] mx-auto">
              Designed &nbsp; | &nbsp; Developed &nbsp;| &nbsp; Maintained by
              Hyperzebras &#169; 2023
            </p>
            <div className="flex gap-4">
              {socialHandlesList.map((item) => {
                return (
                  <Link href={""} key={item}>
                    <SVGIcons
                      type={item}
                      width={14}
                      height={14}
                      className="text-white"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
