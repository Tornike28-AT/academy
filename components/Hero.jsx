import React from 'react'

const Hero = () => {
  return (
    <section className='w-full h-screen bg-gray-300 flex justify-center items-center'>
      <div className='flex justflexify-center items-center flex-col flex-direction: column; gap-6'>
        <div className='flex justflexify-center items-center flex-col flex-direction: column; gap-1.5'>
          <h1 className='text-white text-[30px] font-bold md:text-[55px] lg:text-[40px]'>პირადი მიდგომა</h1>
          <h1 className='text-white text-[30px] font-bold md:text-[55px] lg:text-[40px]'>რეალური შედეგები</h1>
          <h1 className='text-white text-[30px] font-bold md:text-[55px] lg:text-[40px]'>შენი სეზონი <span className='text-green-500'>იწყება აქ!</span></h1>
        </div>
        <div className='flex justify-center items-center flex-col flex-direction: column;'>
          <p className='text-white font-bold md:text-[27px] lg:text-[22px]'>პროფესიონალური ინდივიდუალური ვარჯიში</p>
          <p className='text-white font-bold md:text-[27px] lg:text-[22px]'>ყველა ასაკისთვის & ყველა დონისთვის</p>
        </div>
        <div className='flex justify-center items-center gap-6 mt-6'>
          <button className='bg-green-500 pt-2.5 pb-2.5 pl-6 pr-6 rounded-3xl font-bold md:text-[23px] lg:text-[18px] cursor-pointer'>კონტაქტი</button>
          <button className='bg-white pt-2.5 pb-2.5 pl-6 pr-6 rounded-3xl font-bold md:text-[23px] lg:text-[18px] cursor-pointer'>გაიგე მეტი</button>
        </div>
        <img src="https://placehold.co/200x50" alt="" className='mt-6 md:w-70 lg:w-60' />
      </div>   
    </section>
  )
}

export default Hero