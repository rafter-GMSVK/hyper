import React from "react";
import Image from "next/image";
import { homePageData } from "@/data/homePageData";

const index = () => {
  return (
    <div>
      <div className="flex flex-col bg-black">
        <div className="w-full max-w-[1440px] justify-center mx-auto">
          <div className=" relative flex h-[100vh] items-center max-w-[1440px] justify-center w-full">
            <div className="flex gap-3 px-[260px]">
              <div className="border-l-2 border-primary"></div>
              <p className="font-Din text-white text-[44px] ">
                {homePageData.mission}
              </p>
            </div>
            <button
              onClick={(): void => {
                const ourMission = document.getElementById("ourmission");
                console.log(ourMission);
                ourMission?.scrollIntoView({ behavior: "smooth" });
              }}
              className="absolute bottom-[10%] left-5 text-white"
            >
              <Image
                src="/arrow.png"
                alt="arrow-down"
                className="animate-bounce"
                width={50}
                height={50}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        id="ourmission"
        className="w-full max-w-[1440px] justify-center mx-auto"
      >
        <p className="text-[24px] px-[260px] text-center my-10 font-Din">
          {homePageData.whoAreWe}
        </p>
      </div>
    </div>
  );
};

export default index;
