
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "Project Name",
    description: "Start out of a vision: a single-minded objective that puts sales teams ahead of shifting market dynamics – allowing them to be future-ready. But it wasn't a smooth run in the beginning due to several technological issues and unmanaged teams of developers working remotely.",
    image: "https://placehold.co/600x400/1e5283/FFFFFF.png?text=Project+Screenshot"
  },
  {
    id: 2,
    name: "Project Name",
    description: "Start out of a vision: a single-minded objective that puts sales teams ahead of shifting market dynamics – allowing them to be future-ready. But it wasn't a smooth run in the beginning due to several technological issues and unmanaged teams of developers working remotely.",
    image: "https://placehold.co/600x400/1e5283/FFFFFF.png?text=Project+Screenshot"
  }
];

const PreviousWork = () => {
  return (
    <section className="py-16 bg-deviral-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Previous Work
        </h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
              <div className="md:w-1/2">
                {index % 2 === 0 ? (
                  <img src="/lovable-uploads/2e8d1091-2869-471a-935a-a46497c95a48.png" alt={project.name} className="max-w-xs mx-auto" />
                ) : (
                  <div className="relative">
                    <img src={project.image} alt={project.name} className="rounded-md w-full" />
                    <div className="absolute -top-4 -right-4 bg-deviral-blue p-4 rounded-md">
                      <span className="text-sm font-bold">Implementing Solutions</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                <p className="mb-4 text-white/80">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-8">
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreviousWork;
