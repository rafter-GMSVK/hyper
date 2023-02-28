import { contactUsData } from "@/data/contactUsData";
import Image from "next/image";
import Link from "next/link";

const ContactUS = () => {
  return (
    <div>
      <div className="flex h-[100vh] flex-col justify-center items-center bg-[#2B2B2B]">
        <div className="flex flex-col gap-10  justify-center -mt-[] items-center w-full  max-w-[1440px] mx-auto px-[260px]">
          <h1 className=" text-[44px] text-white">Contact Us</h1>.
          <div className="flex gap-5 items-center">
            <div className="flex  gap-4">
              <div className="border-[1px] border-primary"></div>
              <div className="flex flex-col">
                <p className=" text-white whitespace-pre-line">
                  {contactUsData.address}
                </p>
                <Link
                  className=" whitespace-pre-line text-white"
                  href="mailto:info@hyperzebras.com"
                >
                  {contactUsData.email}
                </Link>
                <p className="text-white whitespace-pre-line">
                  {contactUsData.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[200px]"></div>
    </div>
  );
};

export default ContactUS;
