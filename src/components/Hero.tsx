
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] bg-deviral-blue text-left flex items-center">
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
        <div className="max-w-3xl ml-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Implementing <br />
            Software <br />
            Solutions
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-xl">
            Innovating Tomorrow's Solutions, Today <br />
            Your Trusted Software Partner
          </p>
          <div className="flex flex-wrap gap-4 justify-start">
            <Button className="bg-white text-deviral-blue hover:bg-gray-100 transition-colors font-bold text-base px-8 py-6 rounded-md">
              Learn More
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full hidden md:flex items-center justify-center">
          <img 
            src="/lovable-uploads/2e8d1091-2869-471a-935a-a46497c95a48.png" 
            alt="Professional with laptop" 
            className="max-h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
