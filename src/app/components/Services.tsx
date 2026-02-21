import { motion } from "motion/react";
import { 
  CreditCard, 
  Flag, 
  Shirt, 
  Users, 
  Maximize, 
  Contact, 
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    title: "Digital Printing",
    description: "High-quality Visiting Cards, Flyers, Brochures with premium finish.",
    icon: CreditCard,
    color: "bg-logo-cyan/10",
    iconColor: "text-logo-cyan",
    accent: "group-hover:border-logo-cyan/30"
  },
  {
    title: "Flex & Banner Printing",
    description: "Weather-resistant large banners and flex for shops and events.",
    icon: Flag,
    color: "bg-logo-magenta/10",
    iconColor: "text-logo-magenta",
    accent: "group-hover:border-logo-magenta/30"
  },
  {
    title: "Political Campaigns",
    description: "Mass-scale posters, flags, and banners for election visibility.",
    icon: Users,
    color: "bg-logo-yellow/10",
    iconColor: "text-logo-orange",
    accent: "group-hover:border-logo-yellow/30"
  },
  {
    title: "Custom Apparel",
    description: "Professional T-shirt and Cap printing for teams and promotions.",
    icon: Shirt,
    color: "bg-logo-blue/10",
    iconColor: "text-logo-blue",
    accent: "group-hover:border-logo-blue/30"
  },
  {
    title: "Large Format Printing",
    description: "Huge hoardings and indoor/outdoor signage for high impact.",
    icon: Maximize,
    color: "bg-logo-magenta/10",
    iconColor: "text-logo-magenta",
    accent: "group-hover:border-logo-magenta/30"
  },
  {
    title: "ID Cards & Stationery",
    description: "Professional ID cards, letterheads, and custom office stationery.",
    icon: Contact,
    color: "bg-logo-cyan/10",
    iconColor: "text-logo-cyan",
    accent: "group-hover:border-logo-cyan/30"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-logo-magenta/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-logo-cyan/5 rounded-full blur-[100px] -ml-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-logo-magenta font-black uppercase tracking-[0.3em] text-xs mb-4 block">What We Do</span>
          <h2 className="text-4xl font-black text-black mb-4">Comprehensive Printing Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Nagpur's trusted hub for professional printing solutions tailored for every business need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl transition-all group cursor-pointer border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 bg-white ${service.accent}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-black mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all ${service.iconColor}`} />
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
