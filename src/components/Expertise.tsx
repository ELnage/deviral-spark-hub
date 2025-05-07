
import React from 'react';

const partners = [
  { id: 1, name: "Google", logo: "https://placehold.co/100x50/FFFFFF/000000.png?text=Google" },
  { id: 2, name: "Microsoft", logo: "https://placehold.co/100x50/FFFFFF/000000.png?text=Microsoft" },
  { id: 3, name: "Amazon", logo: "https://placehold.co/100x50/FFFFFF/000000.png?text=Amazon" },
  { id: 4, name: "Nikon", logo: "https://placehold.co/100x50/FFFFFF/000000.png?text=Nikon" },
  { id: 5, name: "Shopify", logo: "https://placehold.co/100x50/FFFFFF/000000.png?text=Shopify" }
];

const Expertise = () => {
  return (
    <section className="py-16 bg-deviral-blue">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-white text-center">
          Expertise
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map(partner => (
            <div key={partner.id} className="flex items-center justify-center">
              <img src={partner.logo} alt={partner.name} className="h-12" />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/70 max-w-2xl mx-auto">
            We work with leading technology partners to deliver cutting-edge solutions for our clients.
            Our partnerships enable us to stay at the forefront of innovation and provide the best possible service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
