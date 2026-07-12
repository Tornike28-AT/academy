export default function WhyUs() {
  return (
    <section className="w-full h-screen bg-black flex justify-center items-center flex-col flex-direction:column gap-6">
        <div className="flex justify-center items-center flex-col flex-direction:column">
            <h1 className="text-red-600 text-[40px] font-bold md:text-[65px] lg:text-[55px]">რატომ</h1>
            <h1 className="text-white text-[40px] font-bold md:text-[65px] lg:text-[55px]">ცაავას</h1>
            <h1 className="text-white text-[40px] font-bold md:text-[65px] lg:text-[55px]">აკადემია?</h1>
        </div>
        <div className="flex justify-center items-center flex-col flex-direction:column gap-6 lg:flex-row flex-direction:row">
            <img src="https://placehold.co/300x300" alt="" className="md:w-120 md:h-120 lg:w-100 lg:h-100"/>
            <div>
             <p className="text-white text-[12px] font-bold md:text-[20px] md:w-200 lg:text-[20px]">
                ყველა ფეხბურთელი განსხვავებულია და სწორედ ამიტომ ვქმნით ინდივიდუალურ სავარჯიშო პროგრამებს 
                თითოეული მოთამაშის საჭიროებების მიხედვით. ჩვენი მიზანია არა მხოლოდ ტექნიკური უნარების გაუმჯობესება, 
                არამედ ფეხბურთელის თავდაჯერების, თამაშის აზროვნებისა და მოედანზე სწორი გადაწყვეტილებების მიღების განვითარება.
            </p>
            
            <button className="bg-red-600 p-3 text-[12px] mt-3 text-white font-bold rounded-lg md:text-[20px] lg:mt-6 lg:cursor-pointer">დარეგისტრირდი დღესვე</button>
            </div>
        </div>
      
    </section>
  );
}