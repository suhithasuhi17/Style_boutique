import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold mb-4">Follow Us</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <Facebook className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm">&copy; 2025 StyleBoutique. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
