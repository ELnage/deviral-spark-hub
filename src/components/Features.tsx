
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const featuresData = [
  {
    id: 1,
    title: "ادارة منصات التواصل",
    description: "نساعدك في إدارة حسابات التواصل الاجتماعي بشكل احترافي لتحقيق أهدافك",
    icon: "🚀",
  },
  {
    id: 2,
    title: "تصميم هوية رقمية",
    description: "نساعدك في بناء هوية بصرية فريدة ومميزة تناسب عملك وتجذب عملائك",
    icon: "✨",
  },
  {
    id: 3,
    title: "تصميم المواقع",
    description: "تصميم وتطوير مواقع ويب متجاوبة وسريعة تحقق أهدافك وتناسب عملك",
    icon: "🌐",
  },
  {
    id: 4,
    title: "استراتيجية المحتوى",
    description: "بناء استراتيجية محتوى فعالة تناسب جمهورك المستهدف وتحقق أهدافك",
    icon: "📊",
  },
  {
    id: 5,
    title: "التسويق عبر المؤثرين",
    description: "الوصول إلى جمهور أوسع من خلال التعاون مع المؤثرين في مجال عملك",
    icon: "👥",
  },
  {
    id: 6,
    title: "تحليل البيانات",
    description: "تحليل أداء حملاتك وتقديم تقارير دورية مفصلة لتحسين استراتيجيتك",
    icon: "📈",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white text-right">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">خدماتنا</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات الرقمية لمساعدتك في تحقيق أهدافك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <Card key={feature.id} className="card-shine border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-right">
                <div className="bg-gradient-to-r from-deviral-purple to-deviral-blue w-14 h-14 rounded-full flex items-center justify-center mb-6 text-2xl">
                  <span>{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
