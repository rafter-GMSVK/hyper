import { contactUsData } from "@/data/contactUsData";
import Image from "next/image";
import Link from "next/link";

const ContactUS = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center">
      <div className="flex flex-col gap-10 py-20 items-center w-full  max-w-[1440px] mx-auto px-[260px]">
        <h1 className="text-6xl">Contact Us</h1>.
        <div className="flex gap-5 items-center">
          <Image
            src="/location.png"
            alt="contact us image"
            width={80}
            height={80}
          />
          <div className="flex flex-col gap-4">
            <p className=" whitespace-pre-line">{contactUsData.address}</p>
            <Link
              className=" whitespace-pre-line"
              href="mailto:info@hyperzebras.com"
            >
              {contactUsData.email}
            </Link>
            <p className=" whitespace-pre-line">{contactUsData.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
