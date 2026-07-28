import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="pt-20 px-5 lg:px-15 max-w-380 w-full mx-auto">
      <div className="flex flex-col items-center space-y-5 lg:flex-row lg:justify-between lg:gap-10">
        <div className="max-w-165 w-full shrink space-y-5 flex flex-col justify-center">
          <p className="capitalize  text-zinc-500 text-lg font-medium">ჩვენ შესახებ</p>
          <h2 className="text-gray-500 uppercase texxt-justify text-3xl md:text-6xl font-extrabold leading-17 mb-7">აიყვანე შენი თამაში ახალ დონეზე <span className='text-black'>შემოგვიერთდი!</span></h2>
          <p className="w-full  text-lg md:text-xl leading-8 text-justify ">

           <b>Tsaava Individual Academy</b> არის ინდივიდუალური საფეხბურთო აკადემია, რომელიც ფეხბურთელების ტექნიკურ, ფიზიკურ და ტაქტიკურ განვითარებაზეა ორიენტირებული. თითოეული ვარჯიში ინდივიდუალურად იგეგმება ფეხბურთელის შესაძლებლობებისა და მიზნების შესაბამისად.
            <br/><br/>
           აკადემიის დამფუძნებელია ვალერი ცაავა—ყოფილი ფეხბურთელი და მოქმედი მწვრთნელი, რომელსაც ერთ წელზე მეტი პრაქტიკული გამოცდილება აქვს. ჩვენი მიზანია, პროფესიონალური მიდგომით, დისციპლინითა და ხარისხიანი ვარჯიშებით დავეხმაროთ თითოეულ ფეხბურთელს საკუთარი პოტენციალის სრულად გამოვლენაში.
          </p>
          <button className="self-start bg-green-600 px-10 py-2  text-white font-medium">Contact Us</button>
        </div>
        <div className="max-w-165 w-full relative space-y-3 flex flex-col items-center ">
          <img src={"https://placehold.co/469x467"} alt="" className="z-5  w-full" />
        

        </div>
      </div>
    </section>
  );
};

export default About;
