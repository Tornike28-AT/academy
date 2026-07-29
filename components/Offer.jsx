import React from "react";
import Cards from "./offer-cards/Cards";
import Link from "next/link";
import Image from "next/image";

const Offer = () => {
  return (
    <section className="mt-28 mb-25   max-w-380 w-full mx-auto">
      <div className="flex flex-col px-5 lg:px-15 xl:px-5 items-center space-y-5 lg:flex-row lg:justify-between gap-5">
        <div className="relative max-w-165 w-full">
            <h2 className="text-gray-500 uppercase  leading-17 text-4xl md:text-6xl  mb-5">რას გთავაზობთ <span className="text-black">აკადემია</span></h2>
            <p className="w-full  text-lg md:text-xl leading-8 text-justify  mb-10">ჩვენთან გელით პროფესიონალური, მეგობრული და დისციპლინირებული გარემო. გუნდური წვრთნისგან განსხვავებით, ჩვენი თითოეული წუთი სრულად ერთი ფეხბურთელის განვითარებას ეთმობა.</p>
           <div className="max-w-165 w-full relative flex  ">
          <Image src="/images/IMAGE-7.jpeg" alt="" width={4032} height={3024} className="hidden md:block w-full rounded-2xl" />

        </div>
        </div>
        
        <div className="max-w-165 w-full space-y-10 ">
            <Cards/>
        <Link  href="#contact" className="bg-green-600 px-10 py-4 text-white font-medium  cursor-pointer hover:bg-green-500 hover:-translate-y-0.5 transition-all duration-300">კონტაქტი</Link>
        </div>
            <Image src="/images/IMAGE-7.jpeg" alt="" width={4032} height={3024} className="block md:hidden w-full max-w-165 rounded-2xl" />
        </div>
      
    </section>
  );
};

export default Offer;
