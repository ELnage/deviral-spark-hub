
import React from 'react';

const reasons = [
  {
    id: 1,
    title: "Expertise",
    description: "Our team consists of highly skilled professionals with extensive experience in software development and digital solutions."
  },
  {
    id: 2,
    title: "Reliability",
    description: "We are committed to delivering projects on time and within budget, ensuring a smooth and stress-free experience for our clients."
  },
  {
    id: 3,
    title: "Efficiency",
    description: "Our streamlined processes and cutting-edge technologies allow us to work efficiently and deliver high-quality results."
  },
  {
    id: 4,
    title: "Value",
    description: "We provide exceptional value for money, offering competitive pricing without compromising on quality or service."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-deviral-lightBlue bg-opacity-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-deviral-blue text-center">
          Why You Choose Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div key={reason.id} className="flex gap-6 relative">
              <div className="absolute -z-10 w-40 h-40 bg-deviral-lightBlue rounded-full opacity-20"></div>
              <div className="ml-8">
                <h3 className="text-xl font-bold mb-3 text-deviral-darkBlue">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <img 
            src="https://placehold.co/300x200/6da6de/FFFFFF.png?text=Team+Illustration" 
            alt="Team Collaboration" 
            className="max-w-xs"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
