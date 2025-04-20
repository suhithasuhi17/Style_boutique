import React from "react";
import { motion } from "framer-motion";

const Help = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-indigo-300 min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Title Animation */}
      <motion.h1 
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Need Help? We're Here!
      </motion.h1>

      {/* Description */}
      <motion.p 
        className="mt-6 text-lg text-gray-800 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Have questions about StyleBoutique? Whether it's about orders, customization, or styling, we're here to assist you.
      </motion.p>

      {/* Contact Info */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div className="bg-white p-6 rounded-lg shadow-lg text-center" whileHover={{ scale: 1.1 }}>
          <h3 className="text-xl font-bold text-blue-500">📧 Email Support</h3>
          <p className="text-gray-700 mt-2">contact@styleboutique.com</p>
        </motion.div>

        <motion.div className="bg-white p-6 rounded-lg shadow-lg text-center" whileHover={{ scale: 1.1 }}>
          <h3 className="text-xl font-bold text-indigo-500">📞 Call Us</h3>
          <p className="text-gray-700 mt-2">+123 456 7890</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Help;
