import { jobData } from "@/data/jobData";
import Link from "next/link";
import React from "react";

const Careers = () => {
  const renderJobCards = (): JSX.Element[] => {
    return jobData.map((job, index) => {
      return (
        <div
          key={index}
          className=" flex flex-col bg-[#F5F5DC] shadow-md rounded-md p-4 gap-5"
        >
          <h3 className="text-2xl font-medium mb-2">{job.title}</h3>
          <p className="  mb-4 text-lg text-din">{job.description}</p>
          <ul className="list-disc list-inside mb-4 flex gap-2 flex-col">
            {job.skills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
          <Link
            href="mailto:info@hyperzebras.com"
            className="bg-[#3A98B9] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end"
          >
            Apply to this job
          </Link>
        </div>
      );
    });
  };
  return (
    <div className="flex min-h-[100vh] bg-black flex-col items-center desktop:px-[260px] px-4 gap-10">
      <h1 className="text-Din text-2xl text-white">
        Get in touch with us at &nbsp;
        <span className="text-primary">info@hyperzebras.com</span>
      </h1>
      <div className="flex flex-col gap-10">{renderJobCards()}</div>
    </div>
  );
};

export default Careers;
