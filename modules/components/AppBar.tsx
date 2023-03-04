import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { SVGIcons } from "@/icons/SVGIcons";
import Link from "next/link";

const AppBar = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const { push } = useRouter();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close drawer when clicking outside of it
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [drawerRef]);

  return (
    <div className="bg-[#2B2B2B] flex-col mx-auto sticky top-0 items-center justify-center z-max flex w-full">
      <div className="flex w-full max-h-[148px] justify-between items-center max-w-[1440px] px-10 desktop:px-20">
        <img
          onClick={() => {
            push("/");
          }}
          src="/logo.png"
          alt="Logo"
          className="py-4 cursor-pointer mobile:w-[100px]"
        />

        <div className="cursor-pointer" onClick={() => setOpen(!open)}>
          <SVGIcons type="menu" className="text-primary" />
        </div>
      </div>

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full bg-[#201f1f] max-w-[300px] w-2/3 transform duration-300 ease-in-out z-50 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="p-4">
          <li
            className=" border-b border-gray-300"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Link href="/careers" className="hover:text-gray-500 text-primary">
              Careers
            </Link>
          </li>
          <li
            className="py-2 border-b border-gray-300"
            onClick={() => {
              setOpen(false);
            }}
          >
            <button className="flex tex  font-Assistant -tracking-[0.3px] text-primary">
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppBar;
