import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaPhoneSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className=" w-full h-auto flex flex-col justify-center items-center gap-4 bg-black md:gap-8">
        <div className="mt-5 relative">
            <Image src="/logo.png" alt="Tsaava Individual Academy" width={879} height={414} className="w-60.75 h-[114px]" />
        </div>
        <div className="flex flex-col justify-center items-center gap-6 md:flex md:flex-row md:gap-10">
            <Link href="" className="text-white font-bold">Home</Link>
            <a href="" className="text-white font-bold">About</a>
            <a href="" className="text-white font-bold">Offer</a>
            <a href="" className="text-white font-bold">FAQ</a>
            <a href="" className="text-white font-bold">Contact</a>
        </div>
        <div className="flex gap-2">
            <FaSquareInstagram className="text-white w-8 h-8"/>
            <FaFacebookSquare className="text-white w-8 h-8"/>
            <FaLinkedin className="text-white w-8 h-8"/>
            <FaPhoneSquare className="text-white w-8 h-8"/>
        </div>
        <div className=" w-full flex flex-col justify-center items-center gap-1 pb-2 md:flex md:flex-row md:justify-between md:px-10 lg:px-30">
            <p className="text-gray-400">Created by <span className="text-white ml-2">AT Studio</span></p>
            <p className="text-gray-400"><span className="mr-2">2026</span> All Rights Reserved</p>
        </div>
    </section>
  );
}
