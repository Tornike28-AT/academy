import React from "react";
import Cards from "./offer-cards/Cards";

const Offer = () => {
  return (
    <section className="pt-20 pb-20   max-w-380 w-full mx-auto">
      <div className="flex flex-col px-5 items-center space-y-5 lg:flex-row lg:justify-between gap-5">
        <div className="lg:flex-1">
            <h2 className="text-gray-500 uppercase texxt-justify text-4xl md:text-5xl font-extrabold mb-5">Step inside Our <br/> <span className="text-black">Academy</span></h2>
            <p className="w-full max-w-130 text-lg md:text-xl leading-8 text-justify md:text-start mb-10">Experience our cutting-edge facilities designed to nurture talent, improve performance, giving every player the tools to succeed on and off the pitch.</p>
            <img src="https://placehold.co/572x388" alt="" className="hidden md:block" />
        </div>
        <div className="max-w-130 lg:max-w-170 w-full space-y-10 mx-auto lg:flex-1">
            <Cards/>
                 
        <button className="bg-green-600 px-10 py-2  text-white font-medium">Contact</button>
        </div>
            <img src="https://placehold.co/572x388" alt="" className="block md:hidden" />
        </div>
      
    </section>
  );
};

export default Offer;
