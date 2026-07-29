import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black flex justify-center items-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        poster="/poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className=" z-10 flex justify-center items-center flex-col  gap-6 ">
        <div className="flex justfy-center items-center flex-col  gap-1.5">
          <h1 className=" text-center text-white text-[30px]  md:text-[40px] lg:text-[55px]">
            პირადი მიდგომა. <br/>
            რეალური შედეგები. <br/>
            შენი სეზონი <span className="text-green-400">იწყება აქ!</span>
          </h1>      
        </div>
        <div className="flex justify-center items-center text-center flex-col">
          <p className="text-white  font-bold text-[16px] md:text-[18px] lg:text-[20px] px-3">
            პროფესიონალური ინდივიდუალური ვარჯიში
          </p>
          <p className="text-white  font-bold text-[16px]  md:text-[18px] lg:text-[20px] px-3">
            ყველა ასაკისთვის & ყველა დონისთვის
          </p>
        </div>
        <div className="flex justify-center items-center gap-6 mt-6">
        <Link 
    href="#contact" 
    className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-7 rounded-full font-bold text-base md:text-xl lg:text-lg transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0"
  >
    კონტაქტი
  </Link>

  {/* Secondary Button */}
  <button 
    className="bg-white/90 hover:bg-white text-gray-800 hover:text-black border border-gray-200/80 backdrop-blur-sm py-3 px-7 rounded-full font-bold text-base md:text-xl lg:text-lg transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
  >
    გაიგე მეტი
  </button>
        </div>
        <Image
          src="/logo.webp"
          loading="lazy"
          alt="Tsaava Individual Academy"
          width={879}
          height={414}
          className="w-50.75 lg:w-60.75 lg:h-28.5 absolute bottom-2 lg:bottom-10 lg:right-10"
        />
      </div>
    </section>
  );
};

export default Hero;