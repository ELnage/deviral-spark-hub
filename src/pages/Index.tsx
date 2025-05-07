
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import PreviousWork from '@/components/PreviousWork';
import Expertise from '@/components/Expertise';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
        <WhyChooseUs />
        <PreviousWork />
        <Expertise />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
