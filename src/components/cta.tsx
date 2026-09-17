import React from 'react'
import Link from "next/link";


const CTA = () => {
  return (
    <div className=" mt-[7rem] w-[97%] mx-auto md:mx-0 md:w-full bg-[#1c1c1c] py-[3rem] relative border border-[#262626] rounded-[1rem]">
        <img
            src="/Abstract-Design-2.png"
            alt=""
            className="absolute top-0 left-0 z-0"
          />
        <div className="w-[86%] md:w-[90%] mx-auto flex items-center flex-wrap justify-between">
        <div className="w-[96%] md:w-[67%] left-0">
          <h1 className="text-3xl md:text-3xl xl:text-4xl text-center md:text-left">
            Start your financial journey with <span className="text-[#CAFF33]">GeekPay today! </span>
          </h1>
          <h1 className="text-base pt-3.5 text-[#B3B3B3] text-center md:text-left">
            Ready to take control of your finances? Join GeekPay now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service
          </h1>
        </div>
        <div className="w-fit right-0 mt-4 md:mt-0 mx-auto md:mx-0">
          <Link href="/waitlist">
          <button className='px-7 py-3 rounded-full bg-[#CAFF33] text-black text-xl cursor-pointer mt-[2rem]'>Join the Waitlist</button>
          </Link>
        </div>
      </div>
      </div>
  )
}

export default CTA