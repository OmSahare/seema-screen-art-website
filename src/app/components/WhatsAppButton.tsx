import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919370071275"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap hidden md:block">
        Need Help? WhatsApp Us!
      </div>
      <MessageCircle className="w-8 h-8 fill-current" />
    </motion.a>
  );
};
