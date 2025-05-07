
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const servicesData = [
  {
    id: 1,
    title: "تطوير المواقع",
    description: "تصميم وبرمجة مواقع الويب المتجاوبة باستخدام أحدث التقنيات لتعكس هوية علامتك التجارية",
    icon: "🌐",
    iconBg: "bg-blue-600"
  },
  {
    id: 2,
    title: "تطوير التطبيقات",
    description: "تطوير تطبيقات الهواتف الذكية لنظامي Android و iOS بتقنيات متقدمة وتصاميم عصرية",
    icon: "📱",
    iconBg: "bg-purple-600"
  },
  {
    id: 3,
    title: "الهوية البصرية",
    description: "تصميم هوية بصرية متكاملة تساعد على بناء صورة احترافية ومميزة لعلامتك التجارية",
    icon: "✨",
    iconBg: "bg-pink-600"
  },
  {
    id: 4,
    title: "التسويق الرقمي",
    description: "استراتيجيات تسويقية متكاملة لزيادة الوصول وتحسين التحويلات وتنمية الأعمال",
    icon: "📊",
    iconBg: "bg-green-600"
  },
  {
    id: 5,
    title: "تحسين محركات البحث",
    description: "تحسين ظهور موقعك في نتائج البحث وزيادة الزيارات العضوية من خلال تقنيات SEO المتقدمة",
    icon: "🔍",
    iconBg: "bg-yellow-600"
  },
  {
    id: 6,
    title: "الدعم الفني",
    description: "خدمات دعم فني متكاملة لضمان استمرارية عمل موقعك وتطبيقاتك بكفاءة عالية",
    icon: "🛠️",
    iconBg: "bg-red-600"
  },
];

const Features = () => {
  return (
    <section id="services" className="section-padding bg-gray-50 text-right">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="section-title text-deviral-dark">
            خدماتنا
          </h2>
          <p className="section-subtitle">
            نقدم باقة متكاملة من الخدمات التقنية لمساعدتك على تحقيق أهدافك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Card key={service.id} className="grid-card border-0">
              <CardContent className="p-6 text-right">
                <div className={`service-icon ${service.iconBg}`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-deviral-dark">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
