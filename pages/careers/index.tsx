import { jobData } from "@/data/jobData";
import Link from "next/link";
import React from "react";

const Careers = () => {
  const renderJobCards = (): JSX.Element[] => {
    return jobData.map((job, index) => {
      return (
        <div
          key={index}
          className=" flex flex-col bg-[#D3D3D3] shadow-md rounded-md p-4 gap-5 mobile:gap-1"
        >
          <h3 className="h2 mobile:h3 font-[800] ">{job.title}</h3>
          <p className="  mb-4 h3 mobile:h4  font-[800]">{job.description}</p>
          <ul className=" pl-4 list-disc mb-4 flex gap-2 flex-col">
            {job.skills.map((skill, index) => {
              return (
                <li className="h4 mobile:h5 font-[800]" key={index}>
                  {skill}
                </li>
              );
            })}
          </ul>
          <div className="flex  justify-between">
            <h1 className=" -tracking-[0.3px] text-[10px] font-bold text-black ">
              For more information &nbsp;
              <span className="text-primary">info@hyperzebras.com</span>
            </h1>
            <Link
              href="mailto:info@hyperzebras.com"
              className="bg-[#67a3b8] hover:bg-primary mobile:text-[12px] whitespace-nowrap text-white font-bold py-2 px-4 rounded self-end"
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
      <div className="flex min-h-[100vh] bg-[#2B2B2B] flex-col items-center desktop:px-[260px] px-10 gap-10">
        <div className="flex flex-col gap-10 my-10">{renderJobCards()}</div>
      </div>
      <p className="h2 desktop:text-[30px]   desktop:px-[260px] px-10  text-center my-10 ">
        With growth comes value. we value growth
      </p>
    </div>
  );
};

export default Careers;
