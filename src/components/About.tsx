
import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 bg-deviral-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-deviral-blue">
              About Us
            </h2>
            <p className="text-gray-700 mb-6">
              We are a leading software development company with a passion for innovation and excellence. 
              Our team of experts is dedicated to delivering high-quality solutions that help our clients 
              achieve their business goals and drive growth.
            </p>
            <Button className="bg-deviral-blue text-white hover:bg-deviral-darkBlue rounded-full px-6">
              Learn More
            </Button>
          </div>
          
          <div className="md:w-1/2 flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-1/4">
                <span className="text-2xl font-bold text-deviral-blue">Age</span>
              </div>
              <div className="w-3/4">
                <p className="text-gray-700">
                  With over 10 years of experience in the industry, we have developed a deep understanding 
                  of the challenges facing businesses today.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-1/4">
                <span className="text-2xl font-bold text-deviral-blue">Mission</span>
              </div>
              <div className="w-3/4">
                <p className="text-gray-700">
                  Our mission is to provide innovative software solutions that enable businesses to thrive 
                  in an increasingly digital world.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-1/4">
                <span className="text-2xl font-bold text-deviral-blue">Progress</span>
              </div>
              <div className="w-3/4">
                <p className="text-gray-700">
                  We're constantly evolving and improving our services to meet the changing needs of our 
                  clients and stay ahead of industry trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
