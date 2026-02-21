import { MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.tsx";
import logoImg from "figma:asset/d5f623e359d7b08a42fe286b19599b451d8f5b40.png";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-logo-magenta/5 rounded-full blur-[100px] -ml-48 -mt-48" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 p-0.5 bg-gradient-to-br from-logo-cyan via-logo-magenta to-logo-yellow rounded-full">
                <div className="w-full h-full bg-black rounded-full p-1 overflow-hidden">
                  <ImageWithFallback
                    src={logoImg}
                    alt="Seema Screen Art Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight leading-none block">
                  SEEMA <span className="text-logo-magenta">SCREEN</span> ART
                </span>
                <span className="text-[10px] text-logo-cyan uppercase tracking-[0.2em] font-medium">
                  Complete Printing Solutions
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nagpur's premium printing hub. We bring quality, speed, and vibrant CMYK colors to every project.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-logo-magenta hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-logo-cyan hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-logo-yellow hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-logo-magenta">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-semibold">
              <li><a href="#services" className="hover:text-logo-cyan transition-colors">Digital Printing</a></li>
              <li><a href="#services" className="hover:text-logo-cyan transition-colors">Flex & Banner</a></li>
              <li><a href="#services" className="hover:text-logo-cyan transition-colors">Political Campaign Material</a></li>
              <li><a href="#services" className="hover:text-logo-cyan transition-colors">T-Shirt & Mug Printing</a></li>
              <li><a href="#services" className="hover:text-logo-cyan transition-colors">ID Cards & Stationery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-logo-magenta">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-semibold">
              <li><a href="#about" className="hover:text-logo-cyan transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-logo-cyan transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-logo-cyan transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-logo-cyan transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-logo-cyan transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-logo-magenta">Visit Us</h4>
            <div className="space-y-6 text-gray-400 text-sm font-semibold">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-logo-cyan flex-shrink-0" />
                <p>Bajrang Chowk, Cement Rd, New Shukrawari, Mahal, Nagpur – 440032</p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-logo-cyan flex-shrink-0" />
                <p>093700 71275</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© 2026 Seema Screen Art Nagpur. All Rights Reserved.</p>
          <p className="text-center md:text-right">Digital Printing | Flex Printing | Custom Apparel | Nagpur</p>
        </div>
      </div>
    </footer>
  );
};
