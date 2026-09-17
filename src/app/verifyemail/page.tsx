'use client';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Testimonials from "@/components/Home/testimonials";

const VerifyEmail = () => {
    const [code, setCode] = useState(Array(6).fill(""));
    const [loading, setLoading] = useState(false);
    const [loadingi, setLoadingi] = useState(false);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return; // allow only 0–9
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const fullCode = code.join("");
    e.preventDefault
      setLoading(true);
      const userString = localStorage.getItem("user")
      const user = userString ? JSON.parse(userString) : null;

      try {
        const response = await fetch('https://bankapi-qks3.onrender.com/verify-email/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            email: user.email,
            code: fullCode
           }),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();

        if (data.detail === "Email verified successfully.") {
          router.replace("/signin");
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle error (e.g., show an error message to the user)
      } finally {
      setLoading(false); // ✅ stop loading after request
    }
  };

  const router = useRouter();

    const handleDelete = async () => {
      setLoadingi(true);
      const userString = localStorage.getItem("user")
      const user = userString ? JSON.parse(userString) : null;

      try {
        const response = await fetch('https://bankapi-qks3.onrender.com/auth/registration/resend-email/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("tokenRegister")}`,
          },
          body: JSON.stringify({ email: user.email }),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        await response.json();
      } catch (error) {
        console.error('Error:', error);
        // Handle error (e.g., show an error message to the user)
      } finally {
      setLoadingi(false); // ✅ stop loading after request
    }
    };
  return (
    <div className="mt-[4rem] md:mt-[6.5rem] mb-[10rem]">
      <section className="w-[97%] md:w-[90%] mx-auto bg-cover bg-center h-fit bg-[#1c1c1c] border border-[#262626] rounded-[1rem] py-[2rem] md:py-[5rem]">
        <div className="w-[88%] md:w-[78%] mx-auto ">
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-center pt-2 text-[#CAFF33]">
            Verify Your Account
          </h1>

          <h1 className="text-base pt-4 md:pt-5 text-[#E4E4E7] text-center">
            Verify your account to complete your registration.
          </h1>

          {/* input circle */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-[3rem]">
            {code.map((digit, i) => (
              <input
                key={i}
                id={`code-${i}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-[#262626] bg-[#1a1a1a] text-center text-xl text-white focus:outline-none focus:border-[#CAFF33]"
              />
            ))}
          </div>

            <div className="w-full flex flex-col items-center justify-center">
          <button disabled={loading} onClick={handleSubmit} className="py-4 w-full md:w-[65%] 2xl:w-[50%] mx-auto rounded-full bg-[#CAFF33] text-black text-xl cursor-pointer mt-[2.5rem]">
            {loading ? (
          <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto"></div>
        ) : (
          "Verify"
        )}
          </button> <br />
          <button disabled={loadingi} onClick={handleDelete} className="py-4 w-full md:w-[65%] 2xl:w-[50%] mx-auto rounded-full bg-[#262626] text-white text-xl cursor-pointer mt-[0.1rem]">
            {loadingi ? (
          <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto"></div>
        ) : (
          "Resend"
        )}
          </button>
          </div>
          <div className="w-full md:w-[65%] 2xl:w-[50%] mx-auto flex items-center justify-between mt-[1.5rem]">
            <div className="w-[28%] md:w-[36%] h-[0.1vh] bg-[#262626]"></div>
            <h1 className="text-base text-[#E4E4E7] text-center">
              Or Continue with
            </h1>
            <div className="w-[28%] md:w-[36%] h-[0.1vh] bg-[#262626]"></div>
          </div>
          <div className="w-[92%] md:w-[45%] 2xl:w-[30%] mx-auto flex items-center justify-between mt-[1.5rem]">
            <img src="/Icon-Container-18.png" alt="" className="" />
            <img src="/Icon-Container-19.png" alt="" className="" />
            <img src="/Icon-Container-20.png" alt="" className="" />
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default VerifyEmail;
