import React from "react";
import Link from "next/link";
import { IconType, SVGIcons } from "@/icons/SVGIcons";
import { useRouter } from "next/router";
import { contactUsData } from "@/data/contactUsData";

const navigation = [{ name: "Careers", link: "/careers" }];

const socialHandlesList: { title: IconType; href: string }[] = [
  { title: "twitter", href: "https://twitter.com/hyperzebras" },
  { title: "facebook", href: "https://www.facebook.com/HyperZebrasAnalytics" },
  { title: "linked-in", href: "https://www.linkedin.com/company/hyperzebras/" },
];

const Footer = () => {
  const { push } = useRouter();

  return (
    <div className="bg-black ">
      <div className="flex flex-col  max-w-[1440px] mx-auto">
        <div className="w-full max-w-[1440px] mx-auto desktop:px-20 px-10">
          <div className="flex justify-between items-center py-4">
            <div className="w-fit">
              <img
                onClick={() => {
                  push("/");
                }}
                src="/logo.png"
                alt="Logo"
                className="p-4 cursor-pointer mobile:w-[120px]"
              />
            </div>

            <div className="flex gap-10 w-fit">
              <div className="flex flex-col gap-[2px]">
                <p className="text-[10px] -tracking-[0.3px] w-[160px] text-white whitespace-pre-line">
                  {contactUsData.address}
                </p>
                <Link
                  className="text-[10px] -tracking-[0.3px]  whitespace-pre-line text-white"
                  href="mailto:info@hyperzebras.com"
                >
                  {contactUsData.email}
                </Link>
                <p className="text-[10px] w-fit -tracking-[0.3px] text-white whitespace-pre-line">
                  {contactUsData.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="h-[70px] justify-center flex flex-col mobile:justify-around items-center border-t border-t-1 border-primary border-solid gap-2">
            <div className="flex gap-4 desktop:self-end">
              {socialHandlesList.map((item) => {
                return (
                  <Link href={item.href} key={item.title}>
                    <SVGIcons
                      type={item.title}
                      width={14}
                      height={14}
                      className="text-white"
                    />
                  </Link>
                );
              })}
            </div>
            <div>
              <p className="text-white text-[12px] text-center -tracking-[0.3px] mx-auto">
                Designed &nbsp; | &nbsp; Developed &nbsp;| &nbsp; Maintained by
                Hyperzebras <br className="desktop:hidden" /> &#169; 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
