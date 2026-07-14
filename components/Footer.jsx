import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaFacebookSquare, FaInstagram, FaInstagramSquare, FaLinkedin, FaLinkedinIn, FaPhoneSquare, FaTiktok } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <section className=" w-full h-auto flex flex-col justify-center items-center gap-4 bg-black md:gap-8">
        <div className="mt-5 relative">
            <Image src="/logo.png" alt="Tsaava Individual Academy" width={879} height={414} className="w-60.75 h-[114px]" />
        </div>
        <div className="flex flex-col justify-center items-center gap-6 md:flex md:flex-row md:gap-10">
            <Link href="" className="text-white font-bold">Home</Link>
            <Link href="" className="text-white font-bold">About</Link>
            <Link href="" className="text-white font-bold">Offer</Link>
            <Link href="" className="text-white font-bold">FAQ</Link>
            <Link href="" className="text-white font-bold">Contact</Link>
        </div>
        <div className="flex items-start gap-3">
            <Link href={"#"} className="text-white flex p-2 ring-1 rounded-full transition-colors hover:bg-[#D62976]">
              <FaInstagram size={20} />
            </Link>
            <Link href={"#"} className=" text-white p-2 ring-1 rounded-full transition-colors hover:bg-[#1877F2]">
              <FaFacebookF  size={20} />
            </Link>
             <Link href={"#"} className=" text-white p-2 ring-1 rounded-full transition-colors hover:bg-[#FE2C55]">
              <FaTiktok  size={20} />
            </Link>
            <Link href={"#"} className="text-white p-2 ring-1 rounded-full transition-colors hover:bg-[#0A66C2]">
              <FaLinkedinIn  size={20} />
            </Link>
            <Link href={"#"} className="text-white p-2 ring-1 rounded-full transition-colors hover:bg-[#29D487]">
              <IoLogoWhatsapp size={20} />
            </Link>
          </div>
        <div className=" w-full flex flex-col justify-center items-center gap-1 pb-2 md:flex md:flex-row md:justify-between md:px-10 lg:px-30">
            <p className="text-gray-400">Created by <span className="text-white ml-2">AT Studio</span></p>
            <p className="text-gray-400"><span className="mr-2">2026</span> All Rights Reserved</p>
        </div>
    </section>
  );
}
