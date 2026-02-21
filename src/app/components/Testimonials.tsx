import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Political Campaign Manager",
    text: "Seema Screen Art delivered 500+ banners for our local rally in just 2 days. The color quality and durability were exceptional even in the rain.",
    rating: 5
  },
  {
    name: "Sunita Deshmukh",
    role: "Coaching Class Owner",
    text: "We've been getting our study materials and student ID cards printed here for years. Their attention to detail and professional approach is unmatched in Nagpur.",
    rating: 5
  },
  {
    name: "Anand Sharma",
    role: "Local Shop Owner",
    text: "Best place for shop signage and visiting cards. They helped with the design and the final print was perfect. Highly recommended for small businesses.",
    rating: 4
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4 block">Feedback</span>
          <h2 className="text-4xl font-extrabold text-black mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-xl shadow-black/5 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} />
                  ))}
                </div>
                <Quote className="w-12 h-12 text-red-100 absolute top-8 right-8" />
                <p className="text-gray-600 leading-relaxed italic mb-8 relative z-10">
                  "{item.text}"
                </p>
              </div>
              <div>
                <h5 className="text-black font-bold text-lg">{item.name}</h5>
                <p className="text-red-600 text-sm font-medium">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
