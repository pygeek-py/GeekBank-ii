"use client";

import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ for active link

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ current route

  const links = [
    { href: "/", label: "Home" },
    { href: "/careers", label: "Careers" },
    { href: "/about", label: "About" },
    { href: "/security", label: "Security" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden xl:block">
        <section className="w-full bg-[#1C1C1C] rounded-full flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="left-0 flex gap-1 items-center">
            <img src="/shape-30.png" alt="" />
            <h1 className="text-2xl">GeekPay</h1>
          </div>

          {/* Nav Links */}
          <div className="flex items-center left-1/2">
            {links.map((link) => (
              <h1
                key={link.href}
                className={`text-xl rounded-full cursor-pointer transition-colors ${
                  pathname === link.href ? "bg-[#262626]" : ""
                }`}
              >
                <Link href={link.href} className="block px-5 py-2">{link.label}</Link>
              </h1>
            ))}
          </div>

          {/* Waitlist CTA */}
          <div className="flex items-center gap-8">
            <Link href="/waitlist" className="block px-7 py-3 rounded-full bg-[#CAFF33] text-black text-xl cursor-pointer">
              Join the Waitlist
            </Link>
          </div>
        </section>
      </div>

      {/* Mobile & Tablet Navbar */}
      <div className="xl:hidden w-[97%] mx-auto bg-[#1C1C1C] px-6 py-4 flex justify-between items-center rounded-full">
        <div className="flex items-center gap-2">
          <img src="/shape-30.png" alt="Logo" className="w-6 h-6" />
          <h1 className="text-xl">GeekPay</h1>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="text-black text-3xl z-[100] px-3 py-2 rounded-full bg-[#CAFF33]"
        >
          <Bars3BottomRightIcon className="w-7 h-7" />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 z-[1000] right-0 h-full w-64 bg-[#1C1C1C] text-white px-6 py-6 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="text-white text-3xl mb-6"
        >
          <HiOutlineX />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <h1
              key={link.href}
              className={`text-lg cursor-pointer rounded-full ${
                pathname === link.href ? "bg-[#262626]" : ""
              }`}
            >
              <Link href={link.href} onClick={() => setMenuOpen(false)} className="block px-3 py-2">{link.label}</Link>
            </h1>
          ))}

          <hr className="border-gray-700 my-4" />
          <Link href="/waitlist" onClick={() => setMenuOpen(false)} className="block w-full py-3 rounded-full bg-[#CAFF33] text-black text-lg text-center">
            Join the Waitlist
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
