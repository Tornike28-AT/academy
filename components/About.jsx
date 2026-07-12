import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className=" pt-20">
      <div className="flex justify-around">
        <div className=" space-y-5 flex flex-col justify-center">
          <p className="capitalize  text-zinc-500 text-lg font-medium">training for ur success</p>
          <h2 className="capitalize text-6xl font-bold">Join our team and <br/> elevate your skills</h2>
          <p className="max-w-130 text-xl leading-8">

            Our team is committed to delivering high-quality services tailored
            to your needs. With years of experience and a passion for
            excellence, we focus on creating solutions that truly make a
            difference. We believe in building strong relationships based on
            trust and clear communication.
          </p>
          <button className="self-start bg-green-600 px-10 py-2  text-white font-medium">Contact Us</button>
        </div>
        <div className="relative">
          <img src={"https://placehold.co/469x467"} alt="" className="z-5 w-full" />
          <img src={"https://placehold.co/390x346"} alt="" className="relative bottom-24 right-16 z-10 border  " />

        </div>
      </div>
    </section>
  );
};

export default About;
