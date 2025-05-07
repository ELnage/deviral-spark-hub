
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">Deviral</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-800 hover:text-deviral-purple font-medium transition">الرئيسية</a>
          <a href="#features" className="text-gray-800 hover:text-deviral-purple font-medium transition">خدماتنا</a>
          <a href="#statistics" className="text-gray-800 hover:text-deviral-purple font-medium transition">إنجازاتنا</a>
          <a href="#testimonials" className="text-gray-800 hover:text-deviral-purple font-medium transition">العملاء</a>
          <Button className="bg-hero-gradient hover:opacity-90 transition-opacity">تواصل معنا</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-800"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white absolute top-full left-0 right-0 p-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-800 hover:text-deviral-purple font-medium transition" onClick={() => setMobileMenuOpen(false)}>الرئيسية</a>
            <a href="#features" className="text-gray-800 hover:text-deviral-purple font-medium transition" onClick={() => setMobileMenuOpen(false)}>خدماتنا</a>
            <a href="#statistics" className="text-gray-800 hover:text-deviral-purple font-medium transition" onClick={() => setMobileMenuOpen(false)}>إنجازاتنا</a>
            <a href="#testimonials" className="text-gray-800 hover:text-deviral-purple font-medium transition" onClick={() => setMobileMenuOpen(false)}>العملاء</a>
            <Button className="bg-hero-gradient hover:opacity-90 transition-opacity w-full">تواصل معنا</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
