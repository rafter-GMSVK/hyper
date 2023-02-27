import Image from "next/image";
import styles from "../../styles/vibrate.module.css";
import React from "react";
import { SVGIcons } from "@/icons/SVGIcons";

const officeAddress = [{ address: "" }];

const ContactUS = () => {
  return (
    <div className="flex bg-black h-[100vh] flex-col items-center">
      <div className="flex flex-col gap-10 items-center w-full  max-w-[1440px] mx-auto px-[260px]">
        <h1 className="text-white text-6xl">Contact Us</h1>.
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-5 items-center text-center">
            <Image
              src="/location.png"
              alt="contact us image"
              className="animate-bounce"
              width={80}
              height={80}
            />
            <p className="text-white">
              106 5 2nd Cross Tata Silk Farm, Basavanagudi,
              <br /> Bangalore, Karnataka 560004
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center text-center">
            <Image
              src="/telephone.png"
              alt="contact us image"
              className={styles.vibrate}
              width={80}
              height={80}
            />
            <p className="text-white">
              (+91) 80 4371 1314 <br /> (+91) 89714 43434
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
