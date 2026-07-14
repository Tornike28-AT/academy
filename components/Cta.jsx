import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt,  FaTiktok, } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";


const Cta = () => {
  return (
    <section className=" max-w-380 w-full mx-auto px-5   ">
      <div className="flex flex-col items-center space-y-5 lg:flex-row lg:justify-between">
        <div className=" space-y-10 flex flex-col justify-center">
            <h2 className="text-gray-500 uppercase texxt-justify text-3xl md:text-6xl font-extrabold mb-5">
            We Invite You To <br />
            <span className="text-black">Visit our Academy</span>
        
          </h2>
            <p className="w-full max-w-150 text-lg  md:text-xl leading-8 text-justify md:text-start mb-10">Take the first step toward becoming a stronger, smarter, and more confident player. Contact us today to learn more or book your first training session.</p>
            <ul className="text-lg font-medium text-zinc-600">
              <li className="flex items-center gap-2"><FaPhoneAlt size={20}className="text-[#158F3C]"/>+995 555 123 456 789</li>
              <li className="flex items-center gap-2"><IoMdMail size={20}className="text-[#158F3C]"/>Example@gmail.com</li>
              <li className="flex items-center gap-2"><FaLocationDot size={20}className="text-[#158F3C]"/> 182 Davit Aghmashenebeli Ave, Tbilisi</li>
            </ul>

          <div className="flex justify-center lg:justify-start  lg:items-start gap-3">
            <Link href={"#"} className="flex p-2 ring-1 rounded-full transition-colors hover:bg-[#D62976] hover:text-white">
              <FaInstagram  size={20} />
            </Link>
            <Link href={"#"} className="p-2 ring-1 rounded-full transition-colors hover:bg-[#1877F2] hover:text-white">
              <FaFacebookF  size={20} />
            </Link>
             <Link href={"#"} className="p-2 ring-1 rounded-full transition-colors hover:bg-[#FE2C55] hover:text-white">
              <FaTiktok  size={20} />
            </Link>
            <Link href={"#"} className="p-2 ring-1 rounded-full transition-colors hover:bg-[#0A66C2] hover:text-white">
              <FaLinkedinIn  size={20} />
            </Link>
            <Link href={"#"} className="p-2 ring-1 rounded-full transition-colors hover:bg-[#29D487] hover:text-white">
              <IoLogoWhatsapp size={20} />
            </Link>
          </div>
          <button className="self-center lg:self-start bg-green-600 px-10 py-2  text-white font-medium">
            Registration
          </button>
        </div>
        <div className=" flex justify-center relative max-w-120 w-full lg:block">
            <Image src="/mobile.png" alt="instagram mobile screen" width={355} height={711} className="w-[355px] h-"/>
        </div>
      </div>
    </section>
  );
};

export default Cta;
