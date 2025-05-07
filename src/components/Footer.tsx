
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-deviral-dark text-white pt-16 pb-8 text-right">
      <div className="container mx-auto px-4 md:px-6">
        <div id="contact" className="bg-deviral-blue rounded-2xl p-8 mb-16 -mt-24 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">تواصل معنا الآن</h3>
              <p className="mb-6 text-white/80">
                نحن هنا لمساعدتك في تحقيق أهدافك التقنية. أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.
              </p>
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="الاسم" className="bg-white/10 border-0 text-white placeholder:text-white/60" />
                  <Input placeholder="البريد الإلكتروني" className="bg-white/10 border-0 text-white placeholder:text-white/60" />
                </div>
                <Input placeholder="الموضوع" className="bg-white/10 border-0 text-white placeholder:text-white/60" />
                <textarea 
                  rows={4} 
                  placeholder="الرسالة" 
                  className="w-full rounded-md bg-white/10 border-0 text-white placeholder:text-white/60 p-3 resize-none"
                ></textarea>
                <Button className="bg-deviral-yellow text-deviral-dark hover:bg-white hover:text-deviral-blue transition-colors w-full">
                  إرسال الرسالة
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="mb-6">
              <img src="https://placehold.co/180x60/304EA1/FFFFFF.png?text=DEVIRAL" alt="Deviral Logo" className="h-12" />
            </div>
            <p className="mb-6 text-white/70">
              شركة رائدة في مجال الحلول الرقمية والتطوير التقني تساعد الشركات على تحقيق أهدافها.
            </p>
            <div className="flex gap-4 justify-end">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-deviral-yellow/80 hover:text-deviral-dark transition-colors">
                <span>X</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-deviral-yellow/80 hover:text-deviral-dark transition-colors">
                <span>F</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-deviral-yellow/80 hover:text-deviral-dark transition-colors">
                <span>In</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-deviral-yellow">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-deviral-yellow transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="text-white/70 hover:text-deviral-yellow transition-colors">خدماتنا</a></li>
              <li><a href="#about" className="text-white/70 hover:text-deviral-yellow transition-colors">من نحن</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-deviral-yellow transition-colors">عملاؤنا</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-deviral-yellow transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-deviral-yellow">خدماتنا</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-deviral-yellow transition-colors">تطوير المواقع</a></li>
              <li><a href="#" className="text-white/70 hover:text-deviral-yellow transition-colors">تطوير التطبيقات</a></li>
              <li><a href="#" className="text-white/70 hover:text-deviral-yellow transition-colors">الهوية البصرية</a></li>
              <li><a href="#" className="text-white/70 hover:text-deviral-yellow transition-colors">التسويق الرقمي</a></li>
              <li><a href="#" className="text-white/70 hover:text-deviral-yellow transition-colors">تحسين محركات البحث</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-deviral-yellow">معلومات الاتصال</h3>
            <div className="space-y-4">
              <p className="flex items-center justify-end text-white/70">
                <span className="mr-2">info@deviral.com</span>
                <span>✉️</span>
              </p>
              <p className="flex items-center justify-end text-white/70">
                <span className="mr-2">+966 55 123 4567</span>
                <span>📱</span>
              </p>
              <p className="flex items-center justify-end text-white/70">
                <span className="mr-2">الرياض، المملكة العربية السعودية</span>
                <span>📍</span>
              </p>
            </div>
          </div>
        </div>
        
        <hr className="border-white/10 mb-6" />
        
        <div className="text-center text-white/50 text-sm">
          © {new Date().getFullYear()} ديفيرال. جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
};

export default Footer;
