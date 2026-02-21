import React from 'react';
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback.tsx";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,var(--logo-magenta)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,var(--logo-cyan)_0%,transparent_70%)] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-gradient-to-r from-logo-cyan/10 to-logo-magenta/10 border border-white/10 text-white rounded-full text-sm font-bold uppercase tracking-widest mb-6"
            >
              Premium <span className="text-logo-magenta">Digital</span> & <span className="text-logo-cyan">Screen</span> Printing
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Print That <span className="bg-gradient-to-r from-logo-cyan via-logo-magenta to-logo-yellow bg-clip-text text-transparent">Speaks.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
              Nagpur's trusted destination for high-quality printing solutions. From political campaigns to custom apparel, we bring your vision to life with vibrant colors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:09370071275"
                className="flex items-center justify-center gap-3 bg-logo-magenta hover:bg-logo-magenta/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-logo-magenta/30 active:scale-95"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/919370071275"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl text-lg font-bold transition-all active:scale-95 shadow-xl shadow-white/5"
              >
                <MessageCircle className="w-5 h-5 text-green-600" />
                WhatsApp Inquiry
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 grayscale opacity-60">
              <div className="text-center">
                <span className="block text-2xl font-black text-white uppercase">15+</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Years Exp</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-center">
                <span className="block text-2xl font-black text-white uppercase">10k+</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Clients</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-center">
                <span className="block text-2xl font-black text-white uppercase">24h</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Turnaround</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border-8 border-white/5 shadow-2xl group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630327722923-5ebd594ddda9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJpbnRpbmclMjBtYWNoaW5lJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTY3NjU2MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Digital Printing Machine"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-gradient-to-br from-logo-cyan via-transparent to-logo-magenta" />
            </div>
            
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-logo-magenta to-logo-orange p-6 rounded-2xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <ArrowRight className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-black text-lg leading-tight">Same Day</p>
                  <p className="text-white/80 text-xs font-bold uppercase tracking-wider">Delivery</p>
                </div>
              </div>
            </motion.div>

            {/* Accent Circles */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-logo-cyan/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-logo-yellow/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
