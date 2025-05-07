
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ChevronLeft } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    quote: "ساعدتنا ديفيرال في زيادة مبيعاتنا بنسبة 200% من خلال حملات التسويق الرقمي المستهدفة",
    author: "أحمد محمد",
    company: "شركة التقنية العربية",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    quote: "استراتيجية المحتوى التي طورتها ديفيرال ساعدتنا في الوصول إلى جمهور جديد وزيادة التفاعل",
    author: "سارة أحمد",
    company: "مجموعة الأفق",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 3,
    quote: "تصميم موقعنا الجديد ساهم في تحسين تجربة المستخدم وزيادة معدلات التحويل بشكل ملحوظ",
    author: "محمد علي",
    company: "شركة المستقبل",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
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
    <section id="testimonials" className="py-24 bg-white text-right">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">ماذا يقول عملاؤنا</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                    className="w-full h-full object-cover rounded-full border-4 border-deviral-purple/20"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl mb-6 text-gray-700">
                    "{testimonialsData[activeIndex].quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-xl mb-1">{testimonialsData[activeIndex].author}</div>
                    <div className="text-deviral-purple">{testimonialsData[activeIndex].company}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-deviral-purple hover:bg-deviral-purple hover:text-white transition-colors border border-deviral-purple/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-deviral-purple" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-deviral-purple hover:bg-deviral-purple hover:text-white transition-colors border border-deviral-purple/20"
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
