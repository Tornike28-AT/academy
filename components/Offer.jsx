"use client"
import React from "react";
import Cards from "./offer-cards/Cards";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";




const Offer = () => {

 const MotionLink = motion.create(Link);

  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="offer" className="mt-28 mb-25   max-w-380 w-full mx-auto overflow-x-clip">
      <div className="flex flex-col px-5 lg:px-15 xl:px-5 items-center space-y-5 lg:flex-row lg:justify-between gap-5">
        <div className="relative max-w-165 w-full">
            <motion.h2
             initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="text-gray-500 uppercase  leading-17 text-4xl md:text-6xl  mb-5">რას გთავაზობთ <span className="text-black">აკადემია</span></motion.h2>
            <motion.p 
             initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="w-full  text-lg md:text-xl leading-8 text-justify  mb-10">ჩვენთან გელით პროფესიონალური, მეგობრული და დისციპლინირებული გარემო. გუნდური წვრთნისგან განსხვავებით, ჩვენი თითოეული წუთი სრულად ერთი ფეხბურთელის განვითარებას ეთმობა.</motion.p>
           <motion.div 
           initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
           className="max-w-165 w-full relative flex  ">
          <Image src="/images/IMAGE-7.webp" alt="" width={4032} height={3024} className="hidden md:block w-full rounded-2xl" />

        </motion.div>
        </div>
        
        <div className=" flex flex-col gap-5 max-w-165 w-full  ">
            <Cards/>

            <MotionLink
             href="#contact"
            onClick={scrollToId("contact")}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="self-start bg-green-600 px-10 py-4 text-white font-medium  cursor-pointer hover:bg-green-500">
            კონტაქტი
          </MotionLink>

        </div>
            <Image src="/images/IMAGE-7.webp" loading="eager" alt="Coach training image" width={1920} height={1080} className="block md:hidden w-full max-w-165 rounded-2xl" />
        </div>
      
    </section>
  );
};

export default Offer;
