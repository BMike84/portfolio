import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="homepage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
        // exit={{ opacity: 0 }}
      >
        <Hero />
        <Services />
        <Projects />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
