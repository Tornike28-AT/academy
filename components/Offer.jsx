import React from "react";
import Cards from "./offer-cards/Cards";

const Offer = () => {
  return (
    <section className="pt-20 pb-20   max-w-380 w-full mx-auto">
      <div className="flex flex-col px-5 lg:px-15 xl:px-5 items-center space-y-5 lg:flex-row lg:justify-between gap-5">
        <div className="relative max-w-165 w-full">
            <h2 className="text-gray-500 uppercase  leading-17 text-4xl md:text-6xl  mb-5">რას გთავაზობთ <span className="text-black">აკადემია</span></h2>
            <p className="w-full  text-lg md:text-xl leading-8 text-justify  mb-10">ჩვენთან გელით პროფესიონალური, მეგობრული და დისციპლინირებული გარემო. გუნდური წვრთნისგან განსხვავებით, ჩვენი თითოეული წუთი სრულად ერთი ფეხბურთელის განვითარებას ეთმობა.</p>
           <div className="max-w-165 w-full relative flex  ">
          <img src={"https://placehold.co/572x388"} alt="" className="hidden md:block w-full" />

        </div>
        </div>
        
        <div className="max-w-165 w-full space-y-10 ">
            <Cards/>
        <button className="bg-green-600 px-10 py-4 text-white font-medium">კონტაქტი</button>
        </div>
            <img src="https://placehold.co/572x388" alt="" className="block md:hidden w-full" />
        </div>
      
    </section>
  );
};

export default Offer;
