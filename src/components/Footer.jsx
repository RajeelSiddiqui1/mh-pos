import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin, Zap, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-violet-900/20">
      {/* Deep space background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(160deg, #07091C 0%, #0D1030 40%, #0A0E2A 70%, #07091C 100%)',
        }}
      />
      {/* Dot grid overlay */}
      <div className="absolute inset-0 -z-10 dot-grid opacity-40" />
      {/* Ambient glows */}
      <div className="blob-primary w-[500px] h-[500px] top-0 left-1/3 opacity-15 -z-10" />
      <div className="blob-indigo w-[350px] h-[350px] bottom-0 right-0 opacity-10 -z-10" />

      {/* Top glow border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* ── Brand ── */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-lg"
                style={{
                  background: 'linear-gradient(135deg, #6C3AFF 0%, #2C64F7 100%)',
                  boxShadow: '0 4px 16px rgba(108,58,255,0.45)',
                }}
              >
                <Zap size={18} className="fill-white" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                MH<span className="text-gradient-blue">POS</span>
                <span className="text-gradient-cyan">.</span>
              </span>
            </Link>

            <p className="text-slate-400 leading-relaxed text-sm max-w-xs">
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
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 transition-all duration-200"
                  style={{ border: '1px solid rgba(108,58,255,0.20)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.border = '1px solid rgba(108,58,255,0.60)';
                    e.currentTarget.style.color   = '#A78BFA';
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(108,58,255,0.30)';
                    e.currentTarget.style.background = 'rgba(108,58,255,0.12)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.border = '1px solid rgba(108,58,255,0.20)';
                    e.currentTarget.style.color  = '';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.background = '';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
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
                    className="text-slate-400 hover:text-white text-sm transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 opacity-0 group-hover:opacity-100"
                      style={{ background: 'rgba(108,58,255,0.25)' }}
                    >
                      <ArrowRight size={9} className="text-violet-400" />
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Partner Solutions ── */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
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
                    className="text-slate-400 hover:text-white text-sm transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 opacity-0 group-hover:opacity-100"
                      style={{ background: 'rgba(108,58,255,0.25)' }}
                    >
                      <ArrowRight size={9} className="text-violet-400" />
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(108,58,255,0.15)', color: '#A78BFA' }}
                >
                  <MapPin size={14} />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  100 Queen St W, Toronto, ON M5H 2N2
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(108,58,255,0.15)', color: '#A78BFA' }}
                >
                  <Phone size={14} />
                </div>
                <span className="text-slate-400 text-sm">+1 (416) 555-0198</span>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(108,58,255,0.15)', color: '#A78BFA' }}
                >
                  <Mail size={14} />
                </div>
                <span className="text-slate-400 text-sm">hello@mhpos.solutions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© 2024 MHPOS SOLUTIONS INC. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-slate-300 transition-colors duration-200"
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
