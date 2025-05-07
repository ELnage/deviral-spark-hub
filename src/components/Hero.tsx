
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-pattern bg-cover bg-center text-right flex items-center">
      <div className="absolute inset-0 bg-deviral-dark bg-opacity-80"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
        <div className="max-w-3xl mr-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            حلول تكنولوجية <br />
            <span className="text-deviral-yellow">لمستقبل أفضل</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-xl">
            نقدم حلول برمجية متكاملة وخدمات تقنية متميزة لمساعدة الشركات على النمو والتطور في العصر الرقمي
          </p>
          <div className="flex flex-wrap gap-4 justify-start">
            <Button className="bg-deviral-yellow text-deviral-dark hover:bg-white transition-colors font-bold text-base px-8 py-6">
              اطلب استشارة مجانية
              <ChevronLeft className="mr-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors font-bold text-base px-8 py-6">
              اكتشف خدماتنا
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
