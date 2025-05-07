
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonialsData = [
  {
    id: 1,
    quote: "Working with this team has been an excellent experience. They delivered our project on time and exceeded our expectations in terms of quality and functionality.",
    author: "John Smith",
    position: "CEO",
    company: "Tech Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    quote: "The software solution they developed for us has significantly improved our operational efficiency. Their expertise and professionalism are truly commendable.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "Digital Innovations",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    quote: "Highly professional team with excellent technical skills. They understood our requirements perfectly and delivered a solution that perfectly meets our needs.",
    author: "Michael Brown",
    position: "Director",
    company: "Future Systems",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-deviral-blue text-center">
          Customers Talk About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-200">
              <CardContent className="p-6">
                <blockquote className="text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-medium text-deviral-blue">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
