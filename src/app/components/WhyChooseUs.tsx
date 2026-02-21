import { motion } from "motion/react";
import { Award, Truck, DollarSign, Package, Users2 } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "High Quality Printing",
    desc: "We use premium inks and materials to ensure vibrant, long-lasting results."
  },
  {
    icon: Truck,
    title: "Same Day Delivery",
    desc: "Urgent orders? We prioritize speed without compromising on quality."
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Competitive rates that provide the best value for your marketing budget."
  },
  {
    icon: Package,
    title: "Bulk Order Discounts",
    desc: "Special pricing for political campaigns and large-scale business needs."
  },
  {
    icon: Users2,
    title: "Experienced Team",
    desc: "A decade of expertise in managing complex printing projects with ease."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full -mr-48 -mt-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4 block">The Advantage</span>
            <h2 className="text-4xl font-extrabold mb-8 leading-tight">
              Why Businesses in Nagpur <br />
              <span className="text-red-500 font-black">Choose Us</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg">
              We aren't just printers; we are your branding partners. We understand the local market and the urgency of your business needs.
            </p>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-red-500/50 transition-all">
                    <reason.icon className="w-7 h-7 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{reason.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-red-600 p-8 rounded-3xl aspect-square flex flex-col justify-end">
                  <span className="text-5xl font-black block mb-2">99%</span>
                  <span className="text-sm font-bold uppercase tracking-tighter opacity-80">Repeat Clients</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl aspect-[4/5] flex flex-col justify-between">
                  <Truck className="w-10 h-10 text-red-500" />
                  <div>
                    <p className="text-2xl font-bold mb-1">Express</p>
                    <p className="text-sm text-gray-500">Shipping Nagpur Wide</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-white p-8 rounded-3xl aspect-[4/5] flex flex-col justify-between text-black">
                   <Award className="w-10 h-10 text-red-600" />
                   <div>
                     <p className="text-2xl font-black mb-1">Gold Standard</p>
                     <p className="text-sm text-gray-500">Quality Inspection</p>
                   </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl aspect-square flex flex-col justify-end">
                  <span className="text-5xl font-black block mb-2">1M+</span>
                  <span className="text-sm font-bold uppercase tracking-tighter opacity-80">Pages Printed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
