"use client";
import Link from "next/link";
import CardsWhyUs from "./whyUs/CardsWhyUs";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyUs() {
  const MotionLink = motion.create(Link);

  return (
    <section id="whyus" className="max-w-380 mx-auto w-full px-5 lg:px-15 xl:px-5  mb-20 flex flex-col items-start gap-10 md:flex md:items-center justify-between md:gap-20 lg:mb-0 lg:flex lg:flex-row overflow-x-clip">
      <div className="flex flex-col items-start gap-6 md:mt-18 max-w-165 w-full">
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-gray-500 font-bold md:text-2xl"
        >
          Why us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-gray-500 uppercase text-4xl md:text-6xl font-hakuna"
        >
          რატომ ცაავას <span className=" text-black">აკადემია?</span>
        </motion.h2>

        <div>
          <CardsWhyUs />
        </div>

        <MotionLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSetUn0AQz4DNajrt0JncPcD3JOA2lbXlg4gpbM-wwj5rLnJRw/viewform?usp=dialog"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="self-start bg-green-600 px-10 py-4 rounded-md  text-white font-medium cursor-pointer hover:bg-green-500"
        >
          დარეგისტრირდი!
        </MotionLink>
      </div>
      {/* 572 700 */}
      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className=" w-full relative max-w-165"
      >
        <Image
          src="/images/IMAGE-11.webp"
          loading="eager"
          alt="ball and stadium image"
          width={1920}
          height={1080}
          className="rounded-2xl w-full"
        />
      </motion.div>
    </section>
  );
}
