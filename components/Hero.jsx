import Image from "next/image";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black flex justify-center items-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/intro.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className=" z-10 flex justify-center items-center flex-col  gap-6 ">
        <div className="flex justfy-center items-center flex-col  gap-1.5">
          <h1 className=" text-center text-white text-[30px] font-bold md:text-[40px] lg:text-[55px]">
            პირადი მიდგომა <br/>
            რეალური შედეგები <br/>
            შენი სეზონი <span className="text-green-400">იწყება აქ!</span>
          </h1>      
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="text-white font-bold md:text-[27px] lg:text-[22px]">
            პროფესიონალური ინდივიდუალური ვარჯიში
          </p>
          <p className="text-white font-bold md:text-[27px] lg:text-[22px]">
            ყველა ასაკისთვის & ყველა დონისთვის
          </p>
        </div>
        <div className="flex justify-center items-center gap-6 mt-6">
          <button className="bg-green-500 pt-2.5 pb-2.5 pl-6 pr-6 rounded-3xl font-bold md:text-[23px] lg:text-[18px] cursor-pointer">
            კონტაქტი
          </button>
          <button className="bg-white pt-2.5 pb-2.5 pl-6 pr-6 rounded-3xl font-bold md:text-[23px] lg:text-[18px] cursor-pointer">
            გაიგე მეტი
          </button>
        </div>
        <Image
          src="/logo.png"
          alt="Tsaava Individual Academy"
          width={879}
          height={414}
          className="w-60.75 h-28.5 absolute bottom-10 right-10"
        />
      </div>
    </section>
  );
};

export default Hero;