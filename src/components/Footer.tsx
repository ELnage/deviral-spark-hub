
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deviral-blue text-white">
      <div id="contact" className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <img 
                src="https://randomuser.me/api/portraits/women/65.jpg" 
                alt="Contact Person" 
                className="max-w-sm rounded-lg"
              />
            </div>
            
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Name" className="bg-white/10 border-0 text-white placeholder:text-white/60" />
                  <Input placeholder="Email" className="bg-white/10 border-0 text-white placeholder:text-white/60" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Phone" className="bg-white/10 border-0 text-white placeholder:text-white/60" />
                  <select className="bg-white/10 border-0 text-white placeholder:text-white/60 w-full h-10 rounded-md px-3 py-2">
                    <option value="">Select Topic</option>
                    <option value="support">Support</option>
                    <option value="sales">Sales</option>
                    <option value="general">General</option>
                  </select>
                </div>
                <textarea 
                  rows={4} 
                  placeholder="Message" 
                  className="w-full rounded-md bg-white/10 border-0 text-white placeholder:text-white/60 p-3 resize-none"
                ></textarea>
                <Button className="bg-white text-deviral-blue hover:bg-gray-200 transition-colors w-full">
                  Send Message
                </Button>
                <div className="flex justify-end mt-4 gap-4">
                  <a href="#" className="text-white hover:text-gray-200"><Facebook className="h-5 w-5" /></a>
                  <a href="#" className="text-white hover:text-gray-200"><Linkedin className="h-5 w-5" /></a>
                  <a href="#" className="text-white hover:text-gray-200"><Twitter className="h-5 w-5" /></a>
                  <a href="#" className="text-white hover:text-gray-200"><Instagram className="h-5 w-5" /></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Home</a></li>
                <li><a href="#services" className="text-white/70 hover:text-white">Services</a></li>
                <li><a href="#about" className="text-white/70 hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Web Development</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Mobile Apps</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Social</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-white/50 text-sm mt-12">
            © {new Date().getFullYear()} G2 Software Solutions. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
