import React from 'react'

const whyUsCards = [
    {id: 1, icon:"icon", title:"lorem" , text:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 2, icon:"icon", title:"lorem" , text:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 3, icon:"icon", title:"lorem" , text:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 4, icon:"icon", title:"lorem" , text:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},

]


const CardsWhyUs = () => {
  return (
    <div className='flex flex-col gap-5'>
        {whyUsCards.map((card) => (
            <div key={card.id} className="flex gap-4 items-center border border-zinc-300 p-4 rounded-lg hover:shadow-md">
                <p><span>{card.icon}</span></p>
                <div>
                <h3 className='text-2xl lg:text-3xl font-medium'>{card.title}</h3>
                <p className='max-w-150 text-sm lg:text-lg'>{card.text}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CardsWhyUs