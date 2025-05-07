
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed w-full z-50 py-4 ${scrolled ? 'bg-deviral-blue shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">G2<span className="text-sm align-text-top">◯</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-gray-200 font-medium transition">Home</a>
          <a href="#services" className="text-white hover:text-gray-200 font-medium transition">Services</a>
          <a href="#about" className="text-white hover:text-gray-200 font-medium transition">About Us</a>
          <a href="#contact" className="text-white hover:text-gray-200 font-medium transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-deviral-blue absolute top-full left-0 right-0 p-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-gray-200 font-medium transition" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#services" className="text-white hover:text-gray-200 font-medium transition" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" className="text-white hover:text-gray-200 font-medium transition" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="#contact" className="text-white hover:text-gray-200 font-medium transition" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
