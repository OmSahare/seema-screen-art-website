import React from 'react';
import { Hero } from "../components/Hero.tsx";
import { About } from "../components/About.tsx";
import { Services } from "../components/Services.tsx";
import { WhyChooseUs } from "../components/WhyChooseUs.tsx";
import { Portfolio } from "../components/Portfolio.tsx";
import { Testimonials } from "../components/Testimonials.tsx";
import { Contact } from "../components/Contact.tsx";
import { motion } from "motion/react";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <Contact />
    </motion.div>
  );
};
