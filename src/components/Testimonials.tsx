
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ChevronLeft } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    quote: "تعاونت مع شركة ديفيرال في تطوير موقع الويب الخاص بشركتنا وكانت التجربة ممتازة من جميع النواحي. احترافية عالية ودقة في التنفيذ",
    author: "أحمد محمد",
    position: "مدير عام",
    company: "شركة التقنية للحلول",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    quote: "ساعدنا فريق ديفيرال في تطوير تطبيق الهاتف الخاص بنا وقدموا حلولاً مبتكرة تجاوزت توقعاتنا. أنصح بالتعامل معهم",
    author: "سارة أحمد",
    position: "مديرة التسويق",
    company: "مجموعة النخبة",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    quote: "استراتيجية التسويق الرقمي التي طورتها ديفيرال ساعدتنا في زيادة المبيعات بنسبة 40% خلال ثلاثة أشهر فقط",
    author: "محمد علي",
    position: "المدير التنفيذي",
    company: "شركة المستقبل",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-white text-right">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="section-title text-deviral-dark">
            آراء العملاء
          </h2>
          <p className="section-subtitle">
            نفخر بثقة عملائنا ونسعى دائماً لتقديم أفضل الخدمات التي تلبي احتياجاتهم
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <img 
                    src={testimonialsData[activeIndex].image} 
                    alt={testimonialsData[activeIndex].author}
                    className="w-full h-full object-cover rounded-full border-4 border-deviral-blue/20"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl mb-6 text-gray-700">
                    "{testimonialsData[activeIndex].quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-xl mb-1 text-deviral-dark">
                      {testimonialsData[activeIndex].author}
                    </div>
                    <div className="text-gray-600">
                      {testimonialsData[activeIndex].position} - {testimonialsData[activeIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-deviral-blue hover:bg-deviral-blue hover:text-white transition-colors border border-deviral-blue/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-deviral-blue" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-deviral-blue hover:bg-deviral-blue hover:text-white transition-colors border border-deviral-blue/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
