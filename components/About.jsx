import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="pt-20 px-5 lg:px-5 max-w-380 w-full mx-auto">
      <div className="flex flex-col items-center space-y-5 lg:flex-row lg:justify-between">
        <div className=" space-y-5 flex flex-col justify-center">
          <p className="capitalize  text-zinc-500 text-lg font-medium">training for ur success</p>
          <h2 className="text-gray-500 uppercase texxt-justify text-3xl md:text-6xl font-extrabold ">Join our team and <br/><span className='text-black'> elevate your skills</span></h2>
          <p className="w-full max-w-130 text-lg md:text-xl leading-8 text-justify md:text-start">

            Our team is committed to delivering high-quality services tailored
            to your needs. With years of experience and a passion for
            excellence, we focus on creating solutions that truly make a
            difference. We believe in building strong relationships based on
            trust and clear communication.
          </p>
          <button className="self-start bg-green-600 px-10 py-2  text-white font-medium">Contact Us</button>
        </div>
        <div className="relative space-y-3 flex flex-col items-center ">
          <img src={"https://placehold.co/469x467"} alt="" className="z-5 max-w-117.25 w-full" />
          <img src={"https://placehold.co/390x346"} alt="" className="relative max-w-97.5 w-full md:bottom-24 lg:bottom-24 lg:right-20 z-10  border " />

        </div>
      </div>
    </section>
  );
};

export default About;
