import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-lg"
                style={{ background: 'linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)' }}
              >
                M
              </div>
              <span className="text-xl font-bold tracking-tight">
                MHPOS<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs text-sm">
              Empowering Canadian businesses with next-generation POS solutions since 2018. Tailored for growth and efficiency.
            </p>
            <div className="flex space-x-3">
              {[Linkedin, Instagram, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Quick Links</h4>
            <ul className="space-y-3.5">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact Us', path: '/contact' },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-blue-500">→</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Partner Solutions</h4>
            <ul className="space-y-3.5">
              {[
                { name: 'Clover Station Duo', path: '/services/clover-station-duo' },
                { name: 'Moneris Go Smart Terminal', path: '/services/moneris-go-terminal' },
                { name: 'Clover Flex Handheld', path: '/services/clover-flex' },
                { name: 'Heartland Restaurant POS', path: '/services/heartland-restaurant-pos' },
                { name: 'Moneris Total Commerce', path: '/services/moneris-total-commerce' },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-blue-500">→</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-500 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">100 Queen St W, Toronto, ON M5H 2N2</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-500 shrink-0" />
                <span className="text-slate-400 text-sm">+1 (416) 555-0198</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-500 shrink-0" />
                <span className="text-slate-400 text-sm">hello@mhpos.solutions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2024 MHPOS SOLUTIONS INC. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="hover:text-slate-300 transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
