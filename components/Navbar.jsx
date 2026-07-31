"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const navLinks = [
  { title: "მთავარი", href: "#home" },
  { title: "ჩვენ შესახებ", href: "#about" },
  { title: "რას გთავაზობთ", href: "#offer" },
  { title: "რატომ ჩვენ", href: "#whyus" },
  { title: "FAQ", href: "#faq" },
  { title: "კონტაქტი", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      className="fixed top-0 z-50 max-md:h-20 md:h-22 w-full text-white font-hakuna"
      animate={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(8px)" : "blur(0px)",
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-between w-full h-full max-md:px-5 md:px-20">
        <Link href="#home" className="shrink-0 z-10">
          <Image
            src="/logo-resized.webp"
            alt="Tsaava Individual Academy Logo"
            width={195}
            height={120}
            className="max-md:w-35.75 w-40"
            priority
          />
        </Link>

        {/* --- Desktop --- */}
        <nav className="max-lg:hidden lg:space-x-7 xl:space-x-10">
          {navLinks.map(({ title, href }) => (
            <Link
              key={title}
              href={href}
              className="text-2xl hover:text-green-400 transition-colors"
            >
              {title}
            </Link>
          ))}
        </nav>

        {/* --- Mobile hamburger --- */}
        <button
          type="button"
          aria-label={menuOpen ? "დახურვა" : "მენიუ"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5"
        >
          
          {menuOpen ? <IoMdClose size={30} /> :  <IoMenu size={30} /> }

        </button>
      </div>

      {/* --- Mobile menu overlay --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 top-0 z-5 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 h-screen"
          >
            {navLinks.map(({ title, href }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.25 }}
              >
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl hover:text-green-400 transition-colors"
                >
                  {title}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;