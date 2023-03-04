import React from "react";
import Image from "next/image";
import { homePageData } from "@/data/homePageData";
import Drawer from "@/modules/components/Drawer";

const index = () => {
  return (
    <div>
      <div className="flex flex-col bg-[#2B2B2B]">
        <div className="w-full max-w-[1440px] justify-center mx-auto">
          <div className=" relative flex h-[100vh]  items-center max-w-[1440px] justify-center w-full">
            <div className="flex gap-4 desktop:px-[260px] px-10 -mt-[160px] ">
              <div className="border-[1px] border-primary"></div>
              <p className="text-white h1 mobile:h2 text-justify">
                {homePageData.mission}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1440px] justify-center mx-auto">
        <p className="h2 desktop:text-[30px]  desktop:px-[260px] px-10  text-justify my-10 ">
          {homePageData.whoAreWe}
        </p>
      </div>
      <Drawer />
    </div>
  );
};

export default index;
