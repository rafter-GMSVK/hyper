import React from "react";
import Image from "next/image";
import { homePageData } from "@/data/homePageData";

const index = () => {
  return (
    <div>
      <div className="flex flex-col bg-[#2B2B2B]">
        <div className="w-full max-w-[1440px] justify-center mx-auto">
          <div className=" relative flex h-[100vh] items-center max-w-[1440px] justify-center w-full">
            <div className="flex gap-4 px-[260px] -mt-[160px]">
              <div className="border-[1px] border-primary"></div>
              <p
                style={{ fontWeight: 100 }}
                className="font-Assistant -tracking-[0.3px] text-white text-[44px] text-justify"
              >
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
        <p className="text-[24px] font-Assistant -tracking-[0.3px] px-[260px] text-center my-10 ">
          {homePageData.whoAreWe}
        </p>
      </div>
    </div>
  );
};

export default index;
