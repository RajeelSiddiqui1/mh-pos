import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-3">
            Let's Talk
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            Get in <span className="text-gradient-blue">Touch.</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Our team at MHPOS is ready to help you optimize your business operations. Reach out today and we'll respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Contact Form ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="pos-card p-8 lg:p-10"
          >
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-7">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  id="contact-name"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  required
                  id="contact-email"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Business Type
                </label>
                <input
                  type="text"
                  placeholder="e.g. Retail, Restaurant, Salon…"
                  id="contact-business"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  required
                  id="contact-message"
                  className="resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-emerald w-full py-4 text-base mt-2"
                id="contact-submit"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* ── Contact Info ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="pos-card p-6 space-y-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}
                >
                  <Phone size={20} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Phone</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">+1 (416) 555-0198</p>
              </div>

              <div className="pos-card p-6 space-y-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}
                >
                  <Mail size={20} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Email</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">hello@mhpos.solutions</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/8 relative group shadow-card h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.263884877797!2d-79.38531102341957!3d43.65107057110221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cd70669ba1%3A0x66c84307ef07e35b!2s100%20Queen%20St%20W%2C%20Toronto%2C%20ON%20M5H%202N2!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="MHPOS Toronto Office"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-t border-slate-100 dark:border-white/8 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-sm font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                  <MapPin size={16} className="text-blue-500 shrink-0" />
                  100 Queen St W, Toronto, ON M5H 2N2
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin,  label: 'LinkedIn'  },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter,   label: 'Twitter'   },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-12 h-12 pos-card rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 dark:hover:text-blue-400 transition-all duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
