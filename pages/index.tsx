import React from "react";
import Image from "next/image";
import { homePageData } from "@/data/homePageData";
import Drawer from "@/modules/components/Drawer";

const index = () => {
  return (
    <div>
      <div className="flex flex-col bg-[#2B2B2B]">
        <div className="w-full max-w-[1440px] justify-center mx-auto">
          <div className=" relative flex h-[100vh] items-center max-w-[1440px] justify-center w-full">
            <div className="flex gap-4 desktop:px-[260px] px-4 -mt-[160px]">
              <div className="border-[1px] border-primary"></div>
              <p className="text-white desktop:h1   mobile:h3 text-justify">
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
            ></button>
          </div>
        </div>
      </div>
      <div
        id="ourmission"
        className="w-full max-w-[1440px] justify-center mx-auto"
      >
        <p className="text-[24px] font-Assistant -tracking-[0.3px] desktop:px-[260px] px-4  text-center my-10 ">
          {homePageData.whoAreWe}
        </p>
      </div>
      <Drawer />
    </div>
  );
};

export default index;
