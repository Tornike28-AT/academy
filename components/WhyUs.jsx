import Link from "next/link";
import CardsWhyUs from "./whyUs/CardsWhyUs";
import Image from "next/image";

export default function WhyUs() {

  return (


    <section className="max-w-380 mx-auto w-full px-5 lg:px-15 xl:px-5  mb-20 flex flex-col items-start gap-10 md:flex md:items-center justify-between md:gap-20 lg:mb-0 lg:flex lg:flex-row ">
      <div className="flex flex-col items-start gap-6 md:mt-18 max-w-165 w-full">
        <p className="text-gray-500 font-bold md:text-2xl">Why us</p>
        <h2 className="text-gray-500 uppercase text-4xl md:text-6xl ">რატომ ცაავას <span className=" text-black">აკადემია?</span></h2>
       
       <div>
        <CardsWhyUs />
       </div>
        
        
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSetUn0AQz4DNajrt0JncPcD3JOA2lbXlg4gpbM-wwj5rLnJRw/viewform?usp=dialog" className="p-4 bg-green-600 rounded text-white font-bold cursor-pointer hover:bg-green-500 hover:-translate-y-0.5 transition-all duration-300">დარეგისტრირდი!</Link>
      </div>
      {/* 572 700 */}
      <div className=" w-full relative max-w-165">
        <Image src="/images/IMAGE-11.webp" loading="lazy" alt="" width={4284} height={5712} className="rounded-2xl w-full" />
      </div>   
    </section>
  );
}