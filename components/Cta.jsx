"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTiktok,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";


const socialLinks = [
  { icon: FaInstagram, href: "https://instagram.com/tsaava_individual_academy", hoverClass: "hover:bg-[#D62976]" },
  { icon: FaFacebookF, href: "https://www.facebook.com/share/17ypWf1JnS/", hoverClass: "hover:bg-[#1877F2]" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@tsaavaindividualacademy", hoverClass: "hover:bg-[#FE2C55]" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/tsaava-individual-academy-6282a0378/", hoverClass: "hover:bg-[#0A66C2]" },
  { icon: IoLogoWhatsapp, href: "https://wa.me/995551079346", hoverClass: "hover:bg-[#29D487]" },
];
const SocialLinks = ({ links = socialLinks, size = 20 }) => {
  return (
    <div className="flex justify-center lg:justify-start lg:items-start gap-3">
      {links.map(({ icon: Icon, href, hoverClass }, index) => (
        <Link
          key={index}
          href={href}
          target="_blank"
          className={`flex p-2 ring-1 rounded-full transition-colors hover:text-white ${hoverClass}`}
        >
          <Icon size={size} />
        </Link>
      ))}
    </div>
  );
};



const Cta = () => {

const MotionLink = motion.create(Link);

  return (
    <section id="contact" className=" max-w-380 w-full mx-auto px-5  mb-10 overflow-x-clip">
      <div className="flex flex-col items-center space-y-5 lg:flex-row lg:justify-between gap-5">
        <motion.div 
         initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
        className=" space-y-10 flex flex-col justify-center">
          <h2 className="text-gray-500 uppercase  text-4xl md:text-6xl mb-5 font-hakuna">
            გამოავლინე შენი პოტენციალი{" "}
            <span className="text-black">ივარჯიშე ჩვენთან!</span>
          </h2>
          <p className="w-full max-w-150 text-lg  md:text-xl leading-8 text-justify mb-10">
            გადადგი პირველი ნაბიჯი მიზნისკენ, რომ გახდე უფრო ძლიერი, ჭკვიანი და
            თავდაჯერებული მოთამაშე. დაგვიკავშირდი დღესვე, რათა მიიღოთ
            დამატებითი ინფორმაცია ან დაჯავშნო პირველი ვარჯიში.
          </p>
          <ul className="text-lg font-medium space-y-3 text-zinc-600">
            <Link
              href="tel:+995 551 07 93 46"
              className="flex items-center gap-2 hover:underline"
            >
              <FaPhoneAlt size={20} className="text-[#158F3C]" />
              +995 551 07 93 46
            </Link>
            <Link
              href="mailTo:tsaava.individual.academy@gmail.com"
              className="flex items-center gap-2 hover:underline"
            >
              <IoMdMail size={20} className="text-[#158F3C]" />
              tsaava.individual.academy@gmail.com
            </Link>
            <Link
              href="https://maps.app.goo.gl/fnBh1RUQjbe3dyaz7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <FaLocationDot size={20} className="text-[#158F3C]" />
              182 Davit Aghmashenebeli Ave, Tbilisi
            </Link>
          </ul>

          <SocialLinks />

          <MotionLink
            href="https://docs.google.com/forms/d/e/1FAIpQLSetUn0AQz4DNajrt0JncPcD3JOA2lbXlg4gpbM-wwj5rLnJRw/viewform?usp=dialog"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="self-center lg:self-start bg-green-600 px-10 py-4  text-white font-medium cursor-pointer hover:bg-green-500 "
          >
            დაიწყე ახლავე
          </MotionLink>
        </motion.div>
        {/* 550 450 */}
        <motion.div 
        initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
        className=" flex justify-center relative max-w-165 w-full lg:block">
          <Image
            src="/images/IMAGE-10.webp"
            loading="eager"
            alt="stadium with players image"
            width={651}
            height={434}
            sizes="(max-width: 768px) 100vw, 651px"
            className="z-5  w-full rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;