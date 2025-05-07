
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Boost your online presence with our comprehensive digital marketing strategies tailored to your business needs and goals.",
    icon: "🌐",
    iconBg: "bg-gray-200"
  },
  {
    id: 2,
    title: "Software Services",
    description: "Custom software development and solutions designed to optimize your business processes and enhance operational efficiency.",
    icon: "💻",
    iconBg: "bg-gray-200"
  }
];

const Features = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Services
          </h2>
          <p className="text-gray-600 max-w-3xl">
            We provide a wide range of digital services to help businesses grow and succeed in today's competitive market. Our expert team delivers tailored solutions to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <Card key={service.id} className="border border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-md ${service.iconBg} flex items-center justify-center text-xl`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black uppercase">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-deviral-blue hover:text-deviral-lightBlue flex items-center text-sm font-medium">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
