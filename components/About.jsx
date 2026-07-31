"use client"
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
const MotionLink = motion.create(Link);

  return (
    <section className="mt-25 px-5 lg:px-15 xl:px-5 max-w-380 w-full mx-auto overflow-x-clip">
      <div className="flex flex-col items-center space-y-5 lg:flex-row lg:justify-between lg:gap-10">
        <div className="max-w-165 w-full shrink space-y-5 flex flex-col justify-center">
          <motion.p 
          initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}

          className="capitalize  text-zinc-500 text-lg font-medium">ჩვენ შესახებ</motion.p>
          <motion.h2 
          initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          className="text-gray-500 uppercase texxt-justify text-3xl md:text-6xl  mb-7">ინდივიდუალური ფეხბურთის ვარჯიშები <span className='text-black'>პროფესიონალ მწვრთნელთან.</span></motion.h2>
          <motion.p 
          initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          className="w-full  text-lg md:text-xl leading-8 text-justify ">

           <b>Tsaava Individual Academy</b> არის ინდივიდუალური საფეხბურთო აკადემია, რომელიც ფეხბურთელების ტექნიკურ, ფიზიკურ და ტაქტიკურ განვითარებაზეა ორიენტირებული. თითოეული ვარჯიში ინდივიდუალურად იგეგმება ფეხბურთელის შესაძლებლობებისა და მიზნების შესაბამისად.
            <br/><br/>
           აკადემიის დამფუძნებელია ვალერი ცაავა—ყოფილი ფეხბურთელი და მოქმედი მწვრთნელი, რომელსაც სამ წელზე მეტი პრაქტიკული გამოცდილება აქვს. ჩვენი მიზანია, პროფესიონალური მიდგომით, დისციპლინითა და ხარისხიანი ვარჯიშებით დავეხმაროთ თითოეულ ფეხბურთელს საკუთარი პოტენციალის სრულად გამოვლენაში.
          </motion.p>

            <MotionLink
             href="#contact"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="self-start bg-green-600 px-10 py-4 rounded-md  text-white font-medium cursor-pointer hover:bg-green-500 ">
            კონტაქტი
          </MotionLink>

        </div>
        <motion.div 
        initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
        className="max-w-155 w-full relative  flex flex-col items-center ">

          <Image src="/images/IMAGE-1.webp" loading="lazy" alt="Coach photo" width={1920} height={1080} className="z-5  w-full rounded-2xl " />

        </motion.div>
      </div>
    </section>
  );
};

export default About;
