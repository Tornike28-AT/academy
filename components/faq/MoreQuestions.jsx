import Link from 'next/link'
import React from 'react'
import { AiFillMessage } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaPhone } from 'react-icons/fa'
import { FaPhoneFlip } from 'react-icons/fa6'

const MoreQuestions = () => {
  return (
    <div className='max-w-105 w-full border border-zinc-400 px-5  py-10 flex flex-col space-y-7  rounded-lg'>
        <div className='flex flex-col items-center space-y-10'>
        <AiFillMessage size={50}  className='text-emerald-700'/> 
        <div className='space-y-4'>
        <h3 className='text-2xl text-center font-bold'>გაქვთ კითხვები?</h3>
        <p className='text-center'>ჩვენი სამწვრთნელო გუნდი მზადაა, დაგეხმაროთ და მოგაწოდოთ ნებისმიერი დამატებითი ინფორმაცია ვარჯიშებთან, განრიგსა და რეგისტრაციასთან დაკავშირებით.</p>
        </div>
        </div>
        <Link href={"tel:"} className='self-center flex items-center gap-1 bg-emerald-700 p-6 text-white rounded-lg'><BsTelephoneFill />555 123 456 789</Link>
    </div>
  )
}

export default MoreQuestions