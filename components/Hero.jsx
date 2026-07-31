"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Hero = () => {
 
const MotionLink = motion.create(Link);


  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section id="home" className="relative w-full h-screen bg-black flex justify-center items-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        poster="/poster.webp"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className=" z-10 flex justify-center items-center flex-col  gap-6 ">
        <div className="flex justfy-center items-center flex-col  gap-1.5">
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center text-white text-[30px] md:text-[40px] lg:text-[55px]"
          >
            <motion.span  initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }} className="block">
              პირადი მიდგომა.
            </motion.span>
            <motion.span  initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }} className="block">
              რეალური შედეგები.
            </motion.span>
            <motion.span  initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }} className="block">
              შენი სეზონი <span className="text-green-400">იწყება აქ!</span>
            </motion.span>
          </motion.h1>
        </div>
        <div className="flex justify-center items-center text-center flex-col">
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white  font-bold text-[16px] md:text-[18px] lg:text-[20px] px-3"
          >
            პროფესიონალური ინდივიდუალური ვარჯიშები
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white  font-bold text-[16px]  md:text-[18px] lg:text-[20px] px-3"
          >
            ყველა ასაკისთვის & ყველა დონისთვის
          </motion.p>
        </div>
        <div className="flex justify-center items-center gap-6 mt-6">
          <MotionLink
            href="#contact"
            onClick={scrollToId("contact")}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-5  md:py-3 md:px-7 rounded-full font-bold text-base md:text-xl lg:text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
          >
            დაიწყე ახლავე
          </MotionLink>

          <motion.button
            onClick={scrollToId("about")}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white/90 hover:bg-white text-gray-800 hover:text-black border border-gray-200/80 backdrop-blur-sm  py-3 px-5  md:py-3 md:px-7 rounded-full font-bold text-base md:text-xl lg:text-lg shadow-sm hover:shadow-md cursor-pointer"
          >
            გაიგე მეტი
          </motion.button>
        </div>
        <Image
          src="/logo.webp"
          loading="eager"
          alt="Tsaava Individual Academy Logo"
          width={879}
          height={414}
          className="w-50.75 lg:w-60.75 lg:h-28.5 absolute bottom-2 lg:bottom-10 lg:right-10"
        />
      </div>
    </section>
  );
};

export default Hero;
