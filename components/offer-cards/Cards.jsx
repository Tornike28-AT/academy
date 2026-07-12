"use client"
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const cards = [
  {
    title: "Certified Coaches",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    imgUrl: "https://placehold.co/154x220",
  },
  {
    title: "Modern Training Grounds",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    imgUrl: "https://placehold.co/154x220",
  },
  {
    title: "Proven Achievements",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    imgUrl: "https://placehold.co/154x220",
  },
  {
    title: "Communirty & Growth",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    imgUrl: "https://placehold.co/154x220",
  },
];

const Cards = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="max-w-150 mx-auto w-full border-t border-zinc-200">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => setActiveCard(index)}
          className="flex items-center justify-between py-6 border-b border-zinc-200 cursor-pointer"
        >
          <h3 className="text-2xl font-medium">{card.title}</h3>
          <GoArrowUpRight
            size={40}
            className="bg-zinc-400/20 rounded-full p-2 shrink-0"
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;