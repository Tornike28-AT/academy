"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { MdKeyboardArrowRight } from "react-icons/md";

const Accordion = ({ accordionItems }) => {
  const [activeAccordion, setActiveAccordion] = useState(1);

  return (
    <div className="space-y-4 ">
      {accordionItems.map((item) => {
        const isActive = activeAccordion === item.id;
        return (
          <div
            key={item.id}
            className={clsx(
              "rounded-lg overflow-hidden transition-colors duration-300",
              isActive ? "bg-[#1C7C3A]" : "border border-zinc-400"
            )}
          >
           
            <button
              type="button"
              onClick={() => setActiveAccordion(item.id)}
             
              className={clsx(
                "w-full flex items-center justify-between gap-4 text-left text-2xl font-bold py-5 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                isActive
                  ? "text-white focus-visible:ring-white"
                  : "text-black hover:bg-black/3 focus-visible:ring-black"
              )}
            >
              <span className="flex items-center gap-3 text-lg lg:text-xl">
                <span
                  className={clsx(
                    "shrink-0 rounded-full w-8 h-8 flex items-center justify-center text-base transition-colors duration-300",
                    isActive
                      ? "bg-white text-[#1C7C3A]"
                      : "bg-black/5 text-black"
                  )}
                >
                  {item.id}
                </span>
                {item.question}
              </span>

              <MdKeyboardArrowRight
                className={clsx(
                  "shrink-0 text-3xl transition-transform duration-300",
                  isActive && "rotate-90"
                )}
              />
            </button>

            {/* answer */}
            <div
              className={clsx(
                "grid transition-all duration-300 ease-in-out",
                isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="text-lg text-white px-4 pb-5 pt-0 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;