import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaFacebookSquare, FaInstagram, FaInstagramSquare, FaLinkedin, FaLinkedinIn, FaPhoneSquare, FaTiktok } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";


const socialLinks = [
  { icon: FaInstagram, href: "https://instagram.com/tsaava_individual_academy", hoverClass: "hover:bg-[#D62976]" },
  { icon: FaFacebookF, href: "https://www.facebook.com/share/17ypWf1JnS/", hoverClass: "hover:bg-[#1877F2]" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@tsaavaindividualacademy", hoverClass: "hover:bg-[#FE2C55]" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/tsaava-individual-academy-6282a0378/", hoverClass: "hover:bg-[#0A66C2]" },
  { icon: IoLogoWhatsapp, href: "https://wa.me/995551079346", hoverClass: "hover:bg-[#29D487]" },
];

const navLinks = [
  { title: "მთავარი", href: "#home" },
  { title: "ჩვენ შესახებ", href: "#about" },
  { title: "რას გთავაზობთ", href: "#offer" },
  { title: "რატომ ჩვენ", href: "#whyus" },
  { title: "FAQ", href: "#faq" },
  { title: "კონტაქტი", href: "#contact" },
];

const SocialLinks = ({ links = socialLinks, size = 20 }) => {
  return (
    <div className="flex justify-center lg:justify-start lg:items-start gap-3">
      {links.map(({ icon: Icon, href, hoverClass }, index) => (
        <Link
          key={index}
          href={href}
          target="_blank"
          className={`flex p-2 ring-1 rounded-full transition-colors text-white ${hoverClass}`}
        >
          <Icon size={size} />
        </Link>
      ))}
    </div>
  );
};


export default function Footer() {
  return (
    <section className=" w-full h-auto flex flex-col justify-center items-center space-y-12 bg-black ">
        <div className="mt-5 relative">
            <Image src="/logo.webp" loading="eager" alt="Tsaava Individual Academy"
              fetchPriority="high"
             width={355}
             height={167}
             sizes="(max-width: 1024px) 213px, 355px" 
             className=" w-50.75 lg:w-60.75 lg:h-28.5" />
        </div>
        <div className="flex flex-col justify-center items-center gap-6 md:flex md:flex-row md:gap-10">
             {navLinks.map(({ title, href }) => (
            <Link
              key={title}
              href={href}
              className="text-xl text-white  font-hakuna hover:text-green-400 transition-colors active:text-green-400"
            >
              {title}
            </Link>
          ))}
        </div>
        <SocialLinks />
        <div className=" w-full flex flex-col justify-center items-center  pb-2 md:flex md:flex-row md:justify-between md:px-10 lg:px-30">
            <p className="text-gray-400 flex">Created by <span className="text-white ml-2">AT Studio</span></p>
            <p className="text-gray-400 ">© 2026 All Rights Reserved</p>
        </div>
    </section>
  );
}
