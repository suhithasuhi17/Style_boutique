import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import image from "../../assets/image.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link to="/logo" className="cursor-pointer">
            <img
              src={image}
              alt="Logo"
              className="h-12 w-12 rounded-full shadow-md"
            />
          </Link>
          <span className="text-white text-xl font-bold">StyleBoutique</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <ChevronDown size={24} />
        </button>

        {/* Navigation Section */}
        <nav
          className={`lg:flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 absolute lg:relative top-16 lg:top-auto left-0 lg:left-auto bg-white lg:bg-transparent w-full lg:w-auto z-50 p-4 lg:p-0 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="text-gray-800 lg:text-white font-medium hover:text-purple-600 transition block"
            onClick={handleNavLinkClick}
          >
            Home
          </Link>

          <Link
            to="/kurta"
            className="text-gray-800 lg:text-white font-medium hover:text-purple-600 transition block"
            onClick={handleNavLinkClick}
          >
            Explore
          </Link>

          <Link
            to="/about"
            className="text-gray-800 lg:text-white font-medium hover:text-purple-600 transition block"
            onClick={handleNavLinkClick}
          >
            About Us
          </Link>
          <Link
            to="/help"
            className="text-gray-800 lg:text-white font-medium hover:text-purple-600 transition block"
            onClick={handleNavLinkClick}
          >
            Help
          </Link>

          {!isLoggedIn && (
            <Link
              to="/signin"
              className="text-gray-800 lg:text-white font-medium hover:text-purple-600 transition block"
              onClick={handleNavLinkClick}
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
