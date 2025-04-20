import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/image.png";


const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-pink-200 to-purple-300 min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Title Animation */}
      <motion.h1 
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to StyleBoutique
      </motion.h1>

      {/* Description Animation */}
      <motion.p 
        className="mt-6 text-lg text-gray-800 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        StyleBoutique is your one-stop destination for <strong>custom fashion</strong>. We bring your <strong>dream outfits to life</strong>, combining <strong>traditional craftsmanship</strong> with <strong>modern elegance</strong>. Design, customize, and embrace your unique style with us!
      </motion.p>

      {/* Logo Animation */}
      <motion.img
        src={image}
        alt="StyleBoutique Logo"
        className="mt-10 w-40 h-40 rounded-full shadow-lg border-4 border-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Animated Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg text-center"
          whileHover={{ scale: 1.1 }}
        >
          <h3 className="text-xl font-bold text-pink-500">Custom Designs</h3>
          <p className="text-gray-700 mt-2">Create outfits tailored just for you.</p>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg text-center"
          whileHover={{ scale: 1.1 }}
        >
          <h3 className="text-xl font-bold text-purple-500">Premium Fabrics</h3>
          <p className="text-gray-700 mt-2">Handpicked materials from skilled artisans.</p>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg text-center"
          whileHover={{ scale: 1.1 }}
        >
          <h3 className="text-xl font-bold text-blue-500">AI Style Guide</h3>
          <p className="text-gray-700 mt-2">Get AI-powered recommendations for your perfect look.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
