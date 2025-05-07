
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 text-right">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              نحول رؤيتك الى <span className="gradient-text">واقع رقمي</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              نساعدك في بناء تواجدك الرقمي وتنمية عملك من خلال حلول تسويقية متكاملة تناسب احتياجاتك
            </p>
            <div className="flex flex-wrap gap-4 justify-end">
              <Button className="bg-white border border-deviral-purple text-deviral-purple hover:bg-deviral-purple/10 transition-colors">
                المزيد عنا
              </Button>
              <Button className="bg-hero-gradient hover:opacity-90 transition-opacity">
                تواصل معنا الآن
                <ChevronLeft className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative h-72 md:h-96 w-full">
              <div className="absolute inset-0 bg-hero-gradient rounded-full opacity-10 blur-3xl"></div>
              <div className="relative z-10 h-full w-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop" 
                  alt="Digital Marketing Dashboard" 
                  className="rounded-xl shadow-2xl max-w-full max-h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
