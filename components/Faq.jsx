import React from 'react'
import Accordion from './faq/Accordion'
import MoreQuestions from './faq/MoreQuestions';


const faqItems = [
  {
    id: 1,
    question: "What age groups do you train?",
    answer:
      "We offer individual soccer training for players of all skill levels, typically from ages 6 to adult."
  },
  {
    id: 2,
    question: "How long is each training session?",
    answer:
      "Each session lasts approximately 60 minutes and is tailored to the player's goals and current ability."
  },
  {
    id: 3,
    question: "What should I bring to training?",
    answer:
      "Bring your soccer boots, shin guards, water bottle, and comfortable training clothes. A positive attitude is always welcome!"
  },
  {
    id: 4,
    question: "Can beginners join individual training?",
    answer:
      "Absolutely! Our sessions are personalized, making them ideal for beginners as well as advanced players looking to improve."
  },
  {
    id: 5,
    question: "How can I book a training session?",
    answer:
      "You can book a session by contacting us through our website, social media, or by phone. We'll arrange a time that works best for you."
  }
];



const Faq = () => {
  return (
    <section className='pt-20 pb-20 px-5    max-w-380 w-full mx-auto'>
        <h2 className='text-gray-500 uppercase texxt-justify text-3xl md:text-6xl font-extrabold mb-10 lg:mb-15'>
            Frequently Asked <br/> <span className='text-black'>Questions</span>
        </h2>
        <div className='flex gap-5  flex-col items-center lg:flex-row lg:justify-between lg:gap-15'>
        <Accordion accordionItems={faqItems} />
        <MoreQuestions />
        </div>
    </section>
  )
}

export default Faq