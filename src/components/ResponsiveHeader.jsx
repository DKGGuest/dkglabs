import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DKGLogo } from "../assets";

const ResponsiveHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50
      bg-white/40 backdrop-blur-lg
      border-b border-white/20
      shadow-md py-3 px-4 md:px-7
      flex justify-between items-center">
      
      {/* Logo and Title */}
      <div className="flex items-center space-x-1">
        <img
          src={DKGLogo}
          alt="Logo"
          className="h-12 w-20 md:h-16 md:w-28"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4">
        <Link to="/" className="font-serif hover:text-black transition-colors duration-300 rounded-xl m-2 p-1">
          Home
        </Link>
        <Link to="/About" className="font-serif hover:text-black transition-colors duration-300  rounded-xl m-2 p-1">
          About Us
        </Link>
        <Link to="/product" className="font-serif hover:text-black transition-colors duration-300  rounded-xl m-2 p-1">
          Product
        </Link>
        <Link to="/Consulting" className="font-serif hover:text-black transition-colors duration-300  rounded-xl m-2 p-1">
          Consulting
        </Link>
        <Link to="/Home" className="font-serif hover:text-black transition-colors duration-300 rounded-xl m-2 p-1">
          AI CoE
        </Link>
        <Link to="/Innovation" className="font-serif hover:text-black transition-colors duration-300  rounded-xl m-2 p-1">
          Innovation
        </Link>
        <Link to="/Contact" className="font-serif hover:text-black transition-colors duration-300  rounded-xl m-2 p-1">
          Contact Us
        </Link>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed top-[72px] left-0 w-full bg-white/95 backdrop-blur-lg border-b border-white/20 shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col py-4">
          <Link 
            to="/" 
            className="font-serif text-gray-800 hover:text-black hover:bg-gray-100 transition-colors duration-300 px-6 py-3 border-b border-gray-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/About" 
            className="font-serif text-gray-800 hover:text-black hover:bg-gray-100 transition-colors duration-300 px-6 py-3 border-b border-gray-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/product" 
            className="font-serif text-gray-800 hover:text-black hover:bg-gray-100 transition-colors duration-300 px-6 py-3 border-b border-gray-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Product
          </Link>
          <Link 
            to="/Consulting" 
            className="font-serif text-gray-800 hover:text-black hover:bg-gray-100 transition-colors duration-300 px-6 py-3 border-b border-gray-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Consulting
          </Link>
          <Link 
            to="/Home" 
            className="font-serif text-gray-800 hover:text-black hover:bg-gray-100 transition-colors duration-300 px-6 py-3 border-b border-gray-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            AI CoE
          </Link>
          <Link 
            to="/Innovation" 
            className="font-serif text-gray-800 hover:text-black hover:bg-gray-100 transition-colors duration-300 px-6 py-3 border-b border-gray-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Innovation
          </Link>
          <Link 
            to="/Contact" 
            className="font-serif text-gray-800 hover:text-black hover:bg-gray-100 transition-colors duration-300 px-6 py-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default ResponsiveHeader;
