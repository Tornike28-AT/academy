"use client";
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const cards = [
  {
    id: 1,
    title: "Certified Coaches",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    imgUrl: "https://placehold.co/154x220",
  },
  {
    id: 2,
    title: "Modern Training Grounds",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    imgUrl: "https://placehold.co/154x220",
  },
  {
    id: 3,
    title: "Proven Achievements",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    imgUrl: "https://placehold.co/154x220",
  },
  {
    id: 4,
    title: "Communirty & Growth",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    imgUrl: "https://placehold.co/154x220",
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
        <div
          key={index}
          onClick={() => setActiveCard(card.id)}
          className="flex items-center gap-5 w-full justify-between py-6 border-b border-zinc-200 cursor-pointer"
        >
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-xl lg:text-2xl font-medium">{card.title}</h3>
              <GoArrowUpRight
                size={40}
                className={`bg-zinc-400/20 rounded-full p-2 ml-auto shrink-0 ${activeCard ===card.id? "hidden" : ""}`}
              />
            </div>
            {activeCard === card.id && <p className="text-sm lg:text-lg">{card.desc}</p>}
          </div>
                          
          {activeCard === card.id && <img src={card.imgUrl} alt="" />}
        </div>
      ))}
    </div>
  );
};

export default Cards;
