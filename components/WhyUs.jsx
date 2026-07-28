import CardsWhyUs from "./whyUs/CardsWhyUs";

export default function WhyUs() {

  return (


    <section className="max-w-380 mx-auto w-full px-5 lg:px-15 xl:px-5  mb-20 flex flex-col items-start gap-10 md:flex md:items-center justify-between md:gap-20 lg:mb-0 lg:flex lg:flex-row ">
      <div className="flex flex-col items-start gap-6 md:mt-18 max-w-165 w-full">
        <p className="text-gray-500 font-bold md:text-2xl">Why us</p>
        <h2 className="text-gray-500 uppercase text-4xl md:text-6xl ">რატომ ცაავას <span className=" text-black">აკადემია?</span></h2>
       
       <div>
        <CardsWhyUs />
       </div>
        
        
        <button className="p-4 bg-green-600 rounded text-white font-bold">დარეგისტრირდი!</button>
      </div>
      <div className=" w-full relative max-w-165">
        <img src="https://placehold.co/572x700" alt="" className="rounded w-full" />
      </div>   
    </section>
  );
}