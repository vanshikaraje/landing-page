'use client';
import Image from "next/image";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="bg-black text-white py-[72px] bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative">
      <div className="container relative max-w-screen-lg mx-auto text-center px-6">
        {/* Radial Gradient Circle */}
        <div className="absolute h-[375px] w-[750px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-1/2 -translate-y-1/2 opacity-30"></div>

        {/* Version Update Banner */}
        <a
          href="#"
          className="relative inline-flex items-center gap-2 bg-white bg-opacity-20 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-opacity-30 transition"
        >
          <span>🚀 Version 2.0 is here</span>
          <span className="underline">Read More</span>
        </a>

        {/* Heading */}
        <div className="flex justify-center">
          <div className="inline-flex relative mt-8">
            <h1 className="relative mt-6 text-6xl md:text-8xl lg:text-8xl font-extrabold leading-tight">
            Crafted to Assist  <br />  Designed to Impress<br /> 
            </h1>
            <motion.div className="absolute right-[550px] top-[108px] hidden sm:inline" drag>
              <Image
                src={cursorImage}
                height="200"
                width="200"
                alt=""
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div className="absolute top-[56px] left-[550px] hidden sm:inline" drag>
              <Image
                src={messageImage}
                height="200"
                width="200"
                alt=""
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>

        {/* Subtext */}
        <p className="relative mt-4 text-lg text-white text-opacity-80 max-w-2xl mx-auto">
       "Where stunning design meets seamless experience."
        </p>

        {/* ✅ FINAL FIX: Use <a> for external link */}
        <a
          href="http://localhost:3001/login"
          className="relative inline-block mt-6 bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
        >
          Login
        </a>
      </div>
    </div>
  );
};
