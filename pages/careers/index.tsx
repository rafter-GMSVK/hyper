import { jobData } from "@/data/jobData";
import Link from "next/link";
import React from "react";

const Careers = () => {
  const renderJobCards = (): JSX.Element[] => {
    return jobData.map((job, index) => {
      return (
        <div
          key={index}
          className=" flex flex-col bg-[#D3D3D3] shadow-md rounded-md p-4 gap-5"
        >
          <h3 className="text-2xl font-medium mb-2 font-Assistant -tracking-[0.3px]">
            {job.title}
          </h3>
          <p className="  mb-4 text-lg font-Assistant -tracking-[0.3px]">
            {job.description}
          </p>
          <ul className="list-disc list-inside mb-4 flex gap-2 flex-col">
            {job.skills.map((skill, index) => {
              return (
                <li className="font-Assistant -tracking-[0.3px]" key={index}>
                  {skill}
                </li>
              );
            })}
          </ul>
          <div className="flex  justify-between">
            <h1 className="font-Assistant -tracking-[0.3px] text-[10px] font-bold text-black ">
              For more information &nbsp;
              <span className="text-primary">info@hyperzebras.com</span>
            </h1>
            <Link
              href="mailto:info@hyperzebras.com"
              className="bg-[#67a3b8] hover:bg-primary text-white font-bold py-2 px-4 rounded self-end"
            >
              Apply to this job
            </Link>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="">
      <div className="flex min-h-[100vh] bg-[#2B2B2B] flex-col items-center desktop:px-[260px] px-4 gap-10">
        <div className="flex flex-col gap-10 my-20">{renderJobCards()}</div>
      </div>
      <div className="h-[200px] w-full bg-white"></div>
    </div>
  );
};

export default Careers;
