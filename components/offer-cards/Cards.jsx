"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "motion/react";

const cards = [
  {
    id: 1,
    title: "ინფრასტრუქტურა და აღჭურვილობა",
    desc: "თანამედროვე სავარჯიშო ინვენტარი, კოორდინაციისა და სისწრაფის აღჭურვილობა. ვარჯიშები ტარდება „იმედის“ სტადიონზე (მუშტაიდის ბაღთან).",
    imgUrl: "/images/IMAGE-3.webp",
    alt:"training equipment"
  },
  {
    id: 2,
    title: "ჯანმრთელობა და უსაფრთხოება",
    desc: "განსაკუთრებულ ყურადღებას ვუთმობთ ტრავმების პრევენციას, სწორ ფიზიკურ დატვირთვასა და ჯანსაღი ცხოვრების წესის ჩამოყალიბებას, რათა სპორტსმენის განვითარება იყოს უსაფრთხო და ჰარმონიული.",
    imgUrl: "/images/IMAGE-8.webp",
    alt:"Coach stretching"

  },
  {
    id: 3,
    title: "მენტალიტეტი და საზოგადოება",
    desc: "ვასწავლით დისციპლინას, პასუხისმგებლობას, შრომისმოყვარეობას, თავდაჯერებულობას, პატივისცემას და გამარჯვებულის მენტალიტეტს — თვისებებს, რომლებიც როგორც სპორტში, ისე ცხოვრებაში ეხმარებათ.",
    imgUrl: "",
    alt:"Mental education"

  },
  {
    id: 4,
    title: "პროგრესი და შედეგები",
    desc: "ფეხბურთელის პროგრესს ვაფასებთ მწვრთნელის მუდმივი დაკვირვებით, ტექნიკური ანალიზითა და რეგულარული შეფასებით. ვადარებთ საწყის და მიმდინარე შედეგებს, რათა ფეხბურთელმა ნათლად დაინახოს საკუთარი განვითარება და შემდეგი მიზნები.",
    imgUrl: "/images/IMAGE-13.webp",
    alt:"Football tactical board"

  },
];



// PHOTO SIZES 
// DESKTOP 154x220
// MOBILE 110x176

const Cards = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div className="  w-full border-t border-zinc-200">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          onClick={() => setActiveCard(card.id)}
          initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center gap-5 w-full justify-between py-6 border-b border-zinc-200 cursor-pointer"
        >
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl lg:text-3xl font-medium">{card.title}</h3>
              <GoArrowUpRight
                size={40}
                className={`bg-zinc-400/20 rounded-full p-2 ml-auto shrink-0 ${activeCard === card.id? "hidden" : ""}`}
              />
            </div>
            {activeCard === card.id && <p className="text-sm lg:text-lg">{card.desc}</p>}
          </div>
                          
          {activeCard === card.id && <Image src={card.imgUrl} width={154} height={220} loading="eager" alt={card.alt} className=" rounded-lg" />}
        </motion.div>
      ))}
    </div>
  );
};


export default Cards;
