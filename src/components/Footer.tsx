
import React from 'react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-deviral-dark text-white py-16 text-right">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-deviral-purple to-deviral-blue">
              ديفيرال
            </div>
            <p className="mb-6 text-gray-300">
              شركة رائدة في مجال الحلول الرقمية والتسويق الإلكتروني تساعد الشركات على تحقيق أهدافها.
            </p>
            <div className="flex gap-4 justify-end">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-deviral-purple/80 transition-colors">
                <span>X</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-deviral-purple/80 transition-colors">
                <span>F</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-deviral-purple/80 transition-colors">
                <span>In</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">خدماتنا</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">عملاؤنا</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">من نحن</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">إدارة منصات التواصل</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">تصميم المواقع</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">تصميم الهوية الرقمية</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">استراتيجية المحتوى</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">تواصل معنا</h3>
            <div className="space-y-4">
              <p className="flex items-center justify-end text-gray-300">
                <span className="ml-2">info@deviral.com</span>
                <span>✉️</span>
              </p>
              <p className="flex items-center justify-end text-gray-300">
                <span className="ml-2">+966 55 123 4567</span>
                <span>📱</span>
              </p>
              <p className="flex items-center justify-end text-gray-300">
                <span className="ml-2">الرياض، المملكة العربية السعودية</span>
                <span>📍</span>
              </p>
            </div>
          </div>
        </div>
        
        <hr className="border-white/10 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 order-2 md:order-1">© 2025 ديفيرال. جميع الحقوق محفوظة</p>
          <div className="order-1 md:order-2">
            <Button className="bg-hero-gradient hover:opacity-90 transition-opacity">احصل على استشارة مجانية</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
