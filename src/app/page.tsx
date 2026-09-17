import Cases from "@/components/Home/cases";
import FAQ from "@/components/Home/faq";
import Features from "@/components/Home/features";
import Products from "@/components/Home/products";
import Testimonials from "@/components/Home/testimonials";
import CTA from "@/components/cta";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-[4rem] md:mt-[6.5rem] mb-[10rem]">
      <section className="w-full flex items-start flex-wrap justify-between">
        <div className="w-[97%] mx-auto md:w-[47%] text-center md:text-left">
          <div className="w-fit flex items-center mx-auto md:mx-0 gap-2 px-3 py-2.5 md:py-1.5 bg-[#262626] rounded-full">
            <img src="/Icon-1.png" alt="" className="" />
            <h1 className="text-base">No LLC Required, No Credit Check.</h1>
          </div>

          <h1 className="text-3xl md:text-4xl xl:text-5xl pt-4">
            Welcome to GeekPay Empowering Your <span className="text-[#CAFF33]"> Financial Journey </span>
          </h1>

          <h1 className="text-base pt-5 text-[#E4E4E7]">
            At GeekPay, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.
          </h1>

          <Link href="/waitlist">
          <button className='px-7 py-3 rounded-full bg-[#CAFF33] text-black text-xl cursor-pointer mt-[2rem]'>Join the Waitlist</button>
          </Link>
        </div>

        <div className="relative w-full md:w-[47%] mt-[3.5rem] md:mt-0">
          <img src="/Abstract-Design-1.png" alt="" className="absolute -z-10 right-[0%] top-0 overflow-hidden" />
          <img src="/Container.png" alt="" className="w-[99%] h-[60vh] md:w-[34vw] md:h-[84vh] 2xl:w-[27vw] 2xl:h-[60vh] z-50" />
        </div>
      </section>

      <Products />

      <Cases />

      <Features />

      <FAQ />

      <Testimonials />

      {/* CTA Section */}

      <CTA />

      {/* Footer Section */}
    </div>
  );
}
