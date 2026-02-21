import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const About = () => {
  const highlights = [
    "Trusted Printing Service in Nagpur",
    "High-Quality Digital & Screen Printing",
    "Vibrant CMYK Gradient Results",
    "Dedicated Professional Design Team",
    "Affordable Pricing for All Businesses",
    "100% Customer Satisfaction Focus"
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-logo-cyan/5 rounded-full blur-[100px] -ml-32" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1745302281184-dfdad65fe6cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBncmFwaGljJTIwZGVzaWduJTIwb2ZmaWNlfGVufDF8fHx8MTc3MTY3NjU2MXww"
                  alt="Graphic Design"
                  className="w-full h-64 object-cover rounded-[2rem] shadow-lg"
                />
                <div className="bg-gradient-to-br from-logo-magenta to-logo-orange p-8 rounded-[2rem] text-white shadow-xl">
                  <p className="text-4xl font-black mb-1">15+</p>
                  <p className="text-xs font-black uppercase tracking-widest opacity-90">Years Experience</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-gradient-to-br from-logo-blue to-logo-cyan p-8 rounded-[2rem] text-white shadow-xl">
                  <p className="text-4xl font-black mb-1">24/7</p>
                  <p className="text-xs font-black uppercase tracking-widest opacity-90">Support Ready</p>
                </div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1694878981905-b742a32f8121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwc3RhY2slMjBkZXNpZ258ZW58MXx8fHwxNzcxNjc2NTYxfDA"
                  alt="Visiting Cards"
                  className="w-full h-64 object-cover rounded-[2rem] shadow-lg"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-logo-magenta font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Story</span>
            <h2 className="text-4xl font-black text-black mb-6 leading-tight">
              Nagpur's Hub for <br /> 
              <span className="bg-gradient-to-r from-logo-cyan to-logo-magenta bg-clip-text text-transparent">Vibrant Printing</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed font-medium">
              Located in Mahal, Nagpur, Seema Screen Art has been delivering excellence for over 15 years. We specialize in bringing your brand's vision to life with precision and vibrant CMYK colors.
            </p>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed font-medium">
              From local businesses to large political campaigns, our commitment to quality has made us a trusted partner for thousands of happy clients across the city.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-logo-cyan flex-shrink-0" />
                  <span className="text-sm font-black text-gray-700 uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
