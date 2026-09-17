import { MailsIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import React from "react";
import Link from "next/link";


const Footer = () => {
  return (
    <div className="w-full bg-[#1C1C1C] mt-[7rem] flex items-center justify-center">
      <div className="w-[98%] md:w-[90%] 2xl:w-[80%] mt-[3.5rem] mb-[2rem]">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="left-0 flex gap-1 items-center">
            <img src="/shape-30.png" alt="" className="" />
            <h1 className="text-2xl">GeekPay</h1>
          </div>

          <div className="flex items-center gap-1 mt-[1.2rem] md:mt-[2.5rem]">
            <h1 className="text-lg md:text-xl rounded-full cursor-pointer">
              <Link href="/" className="block px-2 md:px-5 py-2">Home</Link>
            </h1>
            <h1 className="text-lg md:text-xl rounded-full cursor-pointer">
              <Link href="/careers" className="block px-2 md:px-5 py-2">
              Careers
              </Link>
            </h1>
            <h1 className="text-lg md:text-xl rounded-full cursor-pointer">
              <Link href="/about" className="block px-2 md:px-5 py-2">
              About
              </Link>
            </h1>
            <h1 className="text-lg md:text-xl rounded-full cursor-pointer">
              <Link href="/security" className="block px-2 md:px-5 py-2">
              Security
              </Link>
            </h1>
          </div>

          <div className="w-full h-[0.1vh] bg-[#262626] mt-[1.5rem] md:mt-[2.5rem]"></div>

          <div className="flex items-center gap-1 mt-[1.5rem] md:mt-[2.5rem] flex-wrap">
            <h1 className="flex items-center gap-2 text-lg md:text-xl px-2 md:px-5 py-2 rounded-full cursor-pointer">
              <MailsIcon className="w-5 h-5 text-[#CAFF33]" /> pygeekpy456@gmail.com
            </h1>
            <h1 className="flex items-center gap-2 text-lg md:text-xl px-2 md:px-5 py-2 rounded-full cursor-pointer">
              <PhoneIcon className="w-5 h-5 text-[#CAFF33]" /> +234 70380 91 317
            </h1>
            <h1 className="flex items-center gap-2 text-lg md:text-xl px-2 md:px-5 py-2 mx-auto rounded-full cursor-pointer">
              <MapPinIcon className="w-5 h-5 text-[#CAFF33]" /> Lagos, Nigeria
            </h1>
          </div>

          <div className="w-full h-[0.1vh] bg-[#262626] mt-[1.5rem] md:mt-[2.5rem]"></div>

          <div className=" w-full xl:flex items-center justify-between mt-[1.5rem] md:mt-[2.5rem] px-3 py-3 bg-[#1A1A1A] border border-[#262626] rounded-full hidden">
            <div className=" flex items-center ">
                <img src="/Icon-1.png" alt="" className="" />
                <img src="/Icon-1.png" alt="" className="" />
                <img src="/Icon-1.png" alt="" className="" />
            </div>

            <div className="w-fit ">
            <h1 className=" text-base text-[#B3B3B3]">
            GeekPay All Rights Reserved
            </h1>
            </div>

            <div className="w-fit ">
            <h1 className=" text-base text-[#B3B3B3] ">
            Privacy Policy | Terms of Service
            </h1>
            </div>
          </div>

          <div className=" w-[98%] mx-auto md:hidden flex flex-col items-center justify-center bg-[#1A1A1A] border border-[#262626] rounded-[1rem] mt-[3rem] md:mt-[2.5rem]">
            <div className=" flex items-center gap-2 mt-[-5.5%]">
              <img src="/Button.png" alt="" className="" />
              <img src="/Button-1.png" alt="" className="" />
              <img src="/Button-2.png" alt="" className="" />
            </div>
            <h1 className=" text-base text-[#B3B3B3] mt-4.5">
            GeekPay All Rights Reserved
            </h1>
            <h1 className=" text-base text-[#B3B3B3] mt-4.5 mb-7">
            Privacy Policy | Terms of Service
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
