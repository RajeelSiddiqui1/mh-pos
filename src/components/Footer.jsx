import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-white text-xl">M</div>
              <span className="text-2xl font-bold tracking-tight">
                MHPOS<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Empowering Canadian businesses with next-generation POS solutions since 2018. Tailored for growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass-morphism dark:glass-morphism-dark flex items-center justify-center hover:bg-primary transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-morphism dark:glass-morphism-dark flex items-center justify-center hover:bg-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-morphism dark:glass-morphism-dark flex items-center justify-center hover:bg-primary transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Hardwave Shop</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/services" className="hover:text-primary transition-colors">Retail POS Systems</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Restaurant POS</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Inventory Cloud</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Mobile Payments</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <span>100 Queen St W, Toronto, ON M5H 2N2, Canada</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+1 (416) 555-0198</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span>hello@mhpos.solutions</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:row items-center justify-between space-y-4 md:space-y-0 text-sm text-gray-500">
          <p>© 2023 MHPOS SOLUTIONS. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
