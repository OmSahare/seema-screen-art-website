import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const portfolioItems = [
  {
    title: "Political Campaign Flex",
    category: "Flex Printing",
    image: "https://images.unsplash.com/photo-1604161531368-9b11576fd344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljYWwlMjBjYW1wYWlnbiUyMHBvc3RlcnMlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MTY3NjU2MXww"
  },
  {
    title: "Premium Business Cards",
    category: "Digital Printing",
    image: "https://images.unsplash.com/photo-1694878981905-b742a32f8121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwc3RhY2slMjBkZXNpZ258ZW58MXx8fHwxNzcxNjc2NTYxfDA"
  },
  {
    title: "Large Scale Event Banners",
    category: "Banner Printing",
    image: "https://images.unsplash.com/photo-1693031630177-b897fb9d7154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGZvcm1hdCUyMGJhbm5lciUyMHByaW50aW5nfGVufDF8fHx8MTc3MTU4MjQxMnww"
  },
  {
    title: "Custom Printed Apparel",
    category: "T-Shirt Printing",
    image: "https://images.unsplash.com/photo-1740126102414-fee092192258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjB0LXNoaXJ0JTIwcHJpbnRpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzE2NzY1NjF8MA"
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-logo-magenta font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Work</span>
            <h2 className="text-4xl font-black text-black tracking-tight">Vibrant Results, Every Time</h2>
          </div>
          <p className="text-gray-500 max-w-md text-lg italic">
            "Your vision, our colors – a perfect match for your brand's identity."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] cursor-pointer aspect-[3/4] shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-logo-cyan font-black text-[10px] uppercase tracking-[0.2em] mb-2">{item.category}</span>
                <h4 className="text-white text-xl font-black leading-tight">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/919370071275"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-black font-black uppercase tracking-widest text-sm bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Explore More Samples
            <span className="w-8 h-8 bg-logo-magenta rounded-full flex items-center justify-center">
              <span className="text-white">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
