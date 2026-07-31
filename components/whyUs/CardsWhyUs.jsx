"use client"
import React from 'react'
import { FaListCheck } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { GiSoccerBall } from "react-icons/gi";
import { MdPersonSearch } from "react-icons/md";
import { motion } from "framer-motion";


const whyUsCards = [
  {
    id: 1,
    icon: FaListCheck, // structured / planned steps
    title: "ინდივიდუალური ფეხბურთის ვარჯიშები",
    text: "თითოეული ვარჯიში წინასწარ დაგეგმილი და კონკრეტულ მიზანზეა ორიენტირებული, ინდივიდუალური ფეხბურთის ვარჯიშების საშუალებით მოთამაშე ეტაპობრივად აუმჯობესებს ტექნიკას, ფიზიკურ შესაძლებლობებს და თამაშის უნარებს.",
  },
  {
    id: 2,
    icon: GiBrain, // mental development
    title: "ფეხბურთელის მენტალური განვითარება",
    text: "ვზრუნავთ არა მხოლოდ ფეხბურთელის ტექნიკურ, არამედ მენტალურ განვითარებაზეც — თავდაჯერებაზე, დისციპლინასა და მოედანზე სწორი გადაწყვეტილებების მიღების უნარზე.",
  },
  {
    id: 3,
    icon: GiSoccerBall, // core football education
    title: "ფეხბურთის უნარების განვითარება",
    text: "ვასწავლით ფეხბურთს სწორად — ტექნიკის, თამაშის გააზრებისა და საფეხბურთო პრინციპების განვითარებით, რაც ფეხბურთელს გრძელვადიან პროგრესში ეხმარება.",
  },
  {
    id: 4,
    icon: MdPersonSearch, // individual focus/attention
    title: "ინდივიდუალური მიდგომა",
    text: "თითოეულ ფეხბურთელს ინდივიდუალურად ვუდგებით, ვითვალისწინებთ მის ასაკს, შესაძლებლობებსა და საჭიროებებს და ვმუშაობთ კონკრეტულად მის განვითარებაზე.",
  },
];






const CardsWhyUs = () => {

 


  return (
    <div className='flex flex-col gap-5'>
        {whyUsCards.map(({ id, icon: Icon, title, text }) => (
            <motion.div 
            key={id} 
            className="flex gap-4 items-center border border-zinc-300 p-4 rounded-lg hover:shadow-md"
             initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            >
                
                <p className='bg-green-800/10 p-3 rounded'><Icon size={32} className="text-[#158F3C]" /></p>
                <div>
                <h3 className='text-2xl lg:text-3xl font-medium'>{title}</h3>
                <p className='max-w-150 text-sm lg:text-lg text-justify'>{text}</p>
                </div>
            </motion.div>
        ))}

    
    </div>
  )
}

export default CardsWhyUs