export default function WhyUs() {
  return (
    <section className="max-w-380 mx-auto w-full px-5 h-180 mb-20 flex flex-col items-start gap-10 md:flex md:items-center justify-between md:gap-20 lg:mb-0 lg:flex lg:flex-row ">
      <div className="flex flex-col items-start gap-6 md:mt-18 ">
        <p className="text-gray-500 font-bold md:text-2xl">Why us</p>
        <h2 className="font-bold text-zinc-500 text-2xl md:text-6xl">რატომ ცაავას <span className="font-bold text-black">აკადემია?</span></h2>
        <p className="md:w-145 text-[20px]">
          ინდივიდუალური მიდგომა, პროფესიონალური ცოდნა და შედეგზე ორიენტირებული ვარჯიში <br className="lg:hidden"/>
          ვაფასებთ თითოეული ფეხბურთელის შესაძლებლობებს, ვადგენთ განვითარების სწორ გზას და ვმუშაობთ იმ უნარებზე
        </p>
        
        
        <button className="p-4 bg-green-600 rounded text-white font-bold">დარეგისტრირდი!</button>
      </div>
      <div className="">
        <img src="https://placehold.co/572x388" alt="" className="rounded" />
      </div>   
    </section>
  );
}