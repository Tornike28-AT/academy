import React from 'react'
import { FaListCheck } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { GiSoccerBall } from "react-icons/gi";
import { MdPersonSearch } from "react-icons/md";

const whyUsCards = [
  {
    id: 1,
    icon: FaListCheck, // structured / planned steps
    title: "სტრუქტურირებული ვარჯიშები",
    text: "თითოეული ვარჯიში წინასწარ დაგეგმილი და კონკრეტულ მიზანზეა ორიენტირებული, რათა ფეხბურთელმა ეტაპობრივად და სწორად განავითაროს საკუთარი შესაძლებლობები.",
  },
  {
    id: 2,
    icon: GiBrain, // mental development
    title: "მენტალური განვითარება",
    text: "ვზრუნავთ არა მხოლოდ ფეხბურთელის ტექნიკურ, არამედ მენტალურ განვითარებაზეც — თავდაჯერებაზე, დისციპლინასა და მოედანზე სწორი გადაწყვეტილებების მიღების უნარზე.",
  },
  {
    id: 3,
    icon: GiSoccerBall, // core football education
    title: "სწორი საფეხბურთო განათლება",
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
            <div key={id} className="flex gap-4 items-center border border-zinc-300 p-4 rounded-lg hover:shadow-md">
                
                <p className='bg-green-800/10 p-3 rounded'><Icon size={32} className="text-[#158F3C]" /></p>
                <div>
                <h3 className='text-2xl lg:text-3xl font-medium'>{title}</h3>
                <p className='max-w-150 text-sm lg:text-lg text-justify'>{text}</p>
                </div>
            </div>
        ))}

    
    </div>
  )
}

export default CardsWhyUs