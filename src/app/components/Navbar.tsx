import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback.tsx";
import logoImg from "figma:asset/d5f623e359d7b08a42fe286b19599b451d8f5b40.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 p-0.5 bg-gradient-to-br from-logo-cyan via-logo-magenta to-logo-yellow rounded-full">
              <div className="w-full h-full bg-black rounded-full p-1 overflow-hidden">
                <ImageWithFallback
                  src={logoImg}
                  alt="Seema Screen Art Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <span className="text-xl font-black text-white tracking-tight leading-none block">
                SEEMA <span className="text-logo-magenta">SCREEN</span> ART
              </span>
              <span className="text-[10px] text-logo-cyan uppercase tracking-[0.2em] font-medium">
                A Complete Printing Solution
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-300 hover:text-logo-magenta transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:09370071275"
              className="flex items-center gap-2 bg-logo-magenta hover:bg-logo-magenta/90 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-logo-magenta/20"
            >
              <Phone className="w-4 h-4" />
              093700 71275
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-semibold text-gray-300 hover:text-white hover:bg-logo-magenta/10 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="tel:09370071275"
                  className="flex items-center justify-center gap-2 bg-logo-magenta text-white px-5 py-4 rounded-lg text-lg font-bold shadow-lg shadow-logo-magenta/20"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
