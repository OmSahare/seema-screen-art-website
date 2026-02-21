import { motion } from "motion/react";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { toast } from "sonner";
import React from "react";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inquiry sent successfully! We will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-logo-yellow/5 rounded-full blur-[100px] -mr-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-logo-magenta font-black uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-4xl font-black text-black mb-8 leading-tight">Let's Discuss Your Project</h2>
            <p className="text-gray-500 text-lg mb-12 font-medium">
              Ready to start your next printing project? Visit our workshop in Nagpur or fill out the form for a quick quote.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-[1.2rem] bg-logo-cyan/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6 text-logo-cyan" />
                </div>
                <div>
                  <h4 className="font-black text-black mb-1 uppercase tracking-tighter">Our Location</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-semibold">
                    Bajrang Chowk, Cement Rd, Near Ram Coolar Sq,<br />
                    New Shukrawari, Mahal, Nagpur, Maharashtra – 440032
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-[1.2rem] bg-logo-magenta/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-6 h-6 text-logo-magenta" />
                </div>
                <div>
                  <h4 className="font-black text-black mb-1 uppercase tracking-tighter">Call Us</h4>
                  <p className="text-gray-500 text-sm font-semibold">093700 71275</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-[1.2rem] bg-logo-yellow/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock className="w-6 h-6 text-logo-orange" />
                </div>
                <div>
                  <h4 className="font-black text-black mb-1 uppercase tracking-tighter">Working Hours</h4>
                  <p className="text-gray-500 text-sm font-semibold">Mon - Sat: 10:00 AM - 08:30 PM</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-12 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl h-64 group relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.268748366524!2d79.10260787595563!3d21.141701383893325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0be76615967%3A0xe7261a868f764720!2sSeema%20Screen%20Art!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 pointer-events-none border-[1px] border-black/5 rounded-[2rem]" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-black p-10 lg:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group"
          >
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-logo-magenta/20 blur-3xl -mr-16 -mt-16 group-hover:bg-logo-magenta/30 transition-colors" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-logo-cyan/20 blur-3xl -ml-16 -mb-16 group-hover:bg-logo-cyan/30 transition-colors" />
            
            <h3 className="text-3xl font-black text-white mb-8 tracking-tight">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-[1.2rem] px-6 py-4 text-white focus:outline-none focus:border-logo-magenta transition-all"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="093700 71275"
                    className="w-full bg-white/5 border border-white/10 rounded-[1.2rem] px-6 py-4 text-white focus:outline-none focus:border-logo-cyan transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Service</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-[1.2rem] px-6 py-4 text-white focus:outline-none focus:border-logo-yellow transition-all appearance-none cursor-pointer">
                    <option className="bg-neutral-900">Digital Printing</option>
                    <option className="bg-neutral-900">Flex/Banner</option>
                    <option className="bg-neutral-900">Political Material</option>
                    <option className="bg-neutral-900">T-Shirt Printing</option>
                    <option className="bg-neutral-900">Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Your Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="What can we print for you today?"
                  className="w-full bg-white/5 border border-white/10 rounded-[1.2rem] px-6 py-4 text-white focus:outline-none focus:border-logo-magenta transition-all resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-logo-cyan via-logo-magenta to-logo-orange hover:shadow-2xl hover:shadow-logo-magenta/30 text-white font-black py-5 rounded-[1.2rem] transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm group/btn active:scale-[0.98]"
              >
                Send Message
                <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
