import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin, Zap, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#07091C] text-slate-300 border-t border-violet-500/20 z-10">
      {/* Background Deep Space Gradient & Grid */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(108,58,255,0.18) 0%, rgba(7,9,28,1) 80%)'
        }}
      />
      <div className="absolute inset-0 -z-10 dot-grid opacity-30 pointer-events-none" />

      {/* Top vivid glow border */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-violet-500 via-cyan-400 to-transparent shadow-[0_0_15px_rgba(108,58,255,0.8)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* ── Brand ── */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-lg transition-transform group-hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #6C3AFF 0%, #2C64F7 100%)',
                  boxShadow: '0 4px 20px rgba(108,58,255,0.5)',
                }}
              >
                <Zap size={20} className="fill-white" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                MH<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">POS</span>
                <span className="text-cyan-400">.</span>
              </span>
            </Link>

            <p className="text-slate-300 leading-relaxed text-sm max-w-xs font-normal">
              Empowering Canadian businesses with next-generation POS solutions since 2018. Tailored for growth and efficiency.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin,  href: '#', label: 'LinkedIn' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Twitter,   href: '#', label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-300 transition-all duration-300 bg-slate-900/80 border border-violet-500/30 hover:border-violet-400 hover:text-white hover:bg-violet-600/40 hover:shadow-[0_0_20px_rgba(108,58,255,0.5)] hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-violet-400 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: 'Home',       path: '/' },
                { label: 'Services',   path: '/services' },
                { label: 'About Us',   path: '/about' },
                { label: 'Contact Us', path: '/contact' },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-slate-300 hover:text-white text-sm transition-all duration-200 flex items-center gap-2 group font-medium"
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 opacity-0 group-hover:opacity-100 bg-violet-500/30"
                    >
                      <ArrowRight size={10} className="text-violet-300" />
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Partner Solutions ── */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-violet-400 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
              Partner Solutions
            </h4>
            <ul className="space-y-3.5">
              {[
                { name: 'Clover Station Duo',        path: '/services/clover-station-duo' },
                { name: 'Moneris Go Smart Terminal',  path: '/services/moneris-go-terminal' },
                { name: 'Clover Flex Handheld',       path: '/services/clover-flex' },
                { name: 'Heartland Restaurant POS',   path: '/services/heartland-restaurant-pos' },
                { name: 'Moneris Total Commerce',     path: '/services/moneris-total-commerce' },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-slate-300 hover:text-white text-sm transition-all duration-200 flex items-center gap-2 group font-medium"
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 opacity-0 group-hover:opacity-100 bg-violet-500/30"
                    >
                      <ArrowRight size={10} className="text-violet-300" />
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-violet-400 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 bg-violet-900/40 text-violet-300 border border-violet-500/30 shadow-inner"
                >
                  <MapPin size={16} />
                </div>
                <span className="text-slate-300 text-sm leading-relaxed font-medium">
                  100 Queen St W, Toronto, ON M5H 2N2
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-violet-900/40 text-violet-300 border border-violet-500/30 shadow-inner"
                >
                  <Phone size={16} />
                </div>
                <span className="text-slate-300 text-sm font-medium">+1 (416) 555-0198</span>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-violet-900/40 text-violet-300 border border-violet-500/30 shadow-inner"
                >
                  <Mail size={16} />
                </div>
                <span className="text-slate-300 text-sm font-medium">hello@mhpos.solutions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2024 MHPOS SOLUTIONS INC. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-violet-300 transition-colors duration-200"
              >
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
