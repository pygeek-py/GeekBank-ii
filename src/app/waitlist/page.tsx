'use client';

import React, { useState } from "react";
import Testimonials from "@/components/Home/testimonials";
import { API_BASE_URL } from "@/components/utils/api";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "w-full bg-[#1a1a1a] rounded-full py-5 px-5 text-xl border border-[#262626] focus:outline-none focus:border-[#CAFF33]";

const Waitlist = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const clearErrorOnEdit = () => {
    if (status === "error") {
      setStatus("idle");
      setMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const first = firstName.trim();
    const last = lastName.trim();
    const mail = email.trim();

    if (!first || !last) {
      setStatus("error");
      setMessage("Please enter your first and last name.");
      return;
    }
    if (!mail) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }
    if (!EMAIL_REGEX.test(mail)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/waitlist/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: first,
          last_name: last,
          email: mail,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus("success");
        setMessage(data.detail || "You're on the list! We'll be in touch soon.");
        setFirstName("");
        setLastName("");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(
          data.first_name?.[0] ||
            data.last_name?.[0] ||
            data.email?.[0] ||
            data.detail ||
            "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setMessage("Unable to reach the server. Please try again.");
    }
  };

  return (
    <div className="mt-[4rem] md:mt-[6.5rem] mb-[10rem]">
      <section className="w-[97%] md:w-[90%] mx-auto bg-cover bg-center h-fit bg-[#1c1c1c] border border-[#262626] rounded-[1rem] py-[2rem] md:py-[5rem]">
        <div className="w-[88%] md:w-[78%] mx-auto">
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-center pt-2 text-[#CAFF33]">
            Join the Waitlist
          </h1>

          <h1 className="text-base pt-4 md:pt-5 text-[#E4E4E7] text-center">
            GeekPay is launching soon. Add your details to reserve your spot and
            be the first to know when we go live.
          </h1>

          <form onSubmit={handleSubmit} noValidate>
            <div className="w-full md:w-[80%] 2xl:w-[60%] mx-auto flex flex-col items-center mt-[3rem] md:mt-[4rem]">
              <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    clearErrorOnEdit();
                  }}
                  placeholder="First Name"
                  aria-label="First name"
                  className={`md:w-[49%] ${inputClass}`}
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    clearErrorOnEdit();
                  }}
                  placeholder="Last Name"
                  aria-label="Last name"
                  className={`md:w-[49%] ${inputClass}`}
                />
              </div>

              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearErrorOnEdit();
                }}
                placeholder="Enter your Email"
                aria-label="Email address"
                className={`mt-[1rem] ${inputClass}`}
              />

              {message && (
                <p
                  role={status === "error" ? "alert" : "status"}
                  className={`w-full text-base text-center mt-4 ${
                    status === "success" ? "text-[#CAFF33]" : "text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="py-4 w-full md:w-[65%] 2xl:w-[50%] mx-auto rounded-full bg-[#CAFF33] text-black text-xl cursor-pointer mt-[2rem] disabled:opacity-70"
              >
                {status === "loading" ? (
                  <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto"></div>
                ) : (
                  "Join the Waitlist"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Waitlist;
