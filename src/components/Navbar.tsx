
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-transparent z-50 py-4">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="https://placehold.co/100x40/304EA1/FFFFFF.png?text=DEVIRAL" alt="Deviral Logo" className="h-10" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-deviral-yellow font-medium transition">الرئيسية</a>
          <a href="#services" className="text-white hover:text-deviral-yellow font-medium transition">خدماتنا</a>
          <a href="#about" className="text-white hover:text-deviral-yellow font-medium transition">من نحن</a>
          <a href="#testimonials" className="text-white hover:text-deviral-yellow font-medium transition">عملاؤنا</a>
          <a href="#contact" className="text-white hover:text-deviral-yellow font-medium transition">اتصل بنا</a>
          <Button className="bg-deviral-yellow text-deviral-dark hover:bg-white hover:text-deviral-blue transition-colors">
            ابدأ الآن
          </Button>
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
        <nav className="md:hidden bg-deviral-dark absolute top-full left-0 right-0 p-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-deviral-yellow font-medium transition" onClick={() => setMobileMenuOpen(false)}>الرئيسية</a>
            <a href="#services" className="text-white hover:text-deviral-yellow font-medium transition" onClick={() => setMobileMenuOpen(false)}>خدماتنا</a>
            <a href="#about" className="text-white hover:text-deviral-yellow font-medium transition" onClick={() => setMobileMenuOpen(false)}>من نحن</a>
            <a href="#testimonials" className="text-white hover:text-deviral-yellow font-medium transition" onClick={() => setMobileMenuOpen(false)}>عملاؤنا</a>
            <a href="#contact" className="text-white hover:text-deviral-yellow font-medium transition" onClick={() => setMobileMenuOpen(false)}>اتصل بنا</a>
            <Button className="bg-deviral-yellow text-deviral-dark hover:bg-white hover:text-deviral-blue transition-colors w-full">
              ابدأ الآن
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
