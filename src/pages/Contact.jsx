import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Twitter, CheckCircle2, Zap } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-bg pt-32 pb-24 relative overflow-hidden">

      {/* Ambient blobs */}
      <div className="blob-primary w-[500px] h-[500px] top-0 left-1/4 opacity-25" />
      <div className="blob-emerald w-[350px] h-[350px] bottom-0 right-10 opacity-20" />
      <div className="dot-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400 mb-3">
            Let's Talk
          </p>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-5">
            Get in{' '}
            <span className="text-gradient">Touch.</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed text-lg">
            Our team at MHPOS is ready to help you optimize your business operations.
            Reach out today — we'll respond within one business day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1,  x: 0  }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong rounded-3xl p-8 lg:p-10 border border-violet-100/40 dark:border-violet-900/25"
            style={{ boxShadow: '0 12px 48px rgba(108,58,255,0.10)' }}
          >
            {submitted ? (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, scale: 0.90 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center space-y-5"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background:  'linear-gradient(135deg, rgba(0,232,136,0.15), rgba(0,212,255,0.12))',
                    border:      '2px solid rgba(0,232,136,0.30)',
                    boxShadow:   '0 0 40px rgba(0,232,136,0.25)',
                  }}
                >
                  <CheckCircle2 size={40} className="text-emerald-500" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  Message Sent! 🎉
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  Thank you for reaching out. Our team will get back to you within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', business: '', message: '' }); }}
                  className="btn-primary py-2.5 px-6 text-sm mt-2"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-7">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Business Type
                    </label>
                    <input
                      type="text"
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      placeholder="e.g. Retail, Restaurant, Salon…"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-emerald w-full py-4 text-base mt-2">
                    <span>Send Message</span>
                    <Send size={18} />
                  </button>

                  <p className="text-center text-xs text-slate-400 pt-1">
                    We'll respond within 1 business day. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </motion.div>

          {/* ── Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1,  x: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Phone, label: 'Phone',   value: '+1 (416) 555-0198', color: '#6C3AFF' },
                { icon: Mail,  label: 'Email',   value: 'hello@mhpos.solutions', color: '#00D4FF' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  className="glass-strong rounded-2xl p-6 space-y-3 border border-violet-100/40 dark:border-violet-900/25 group hover:scale-[1.02] transition-transform duration-200"
                  style={{ boxShadow: '0 4px 24px rgba(108,58,255,0.07)' }}
                >
                  <div
                    className="neu-icon w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ color }}
                  >
                    <Icon size={20} />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">{label}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{value}</p>
                </div>
              ))}
            </div>

            {/* Why choose us mini-card */}
            <div
              className="glass-strong rounded-2xl p-6 border border-violet-100/40 dark:border-violet-900/25"
              style={{ boxShadow: '0 4px 24px rgba(108,58,255,0.07)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Zap size={16} className="text-violet-500" />
                <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wide">
                  Why Choose MHPOS?
                </h4>
              </div>
              <div className="space-y-2.5">
                {[
                  'Response within 1 business day',
                  'Free consultation — no obligation',
                  'Next-day hardware setup available',
                  'Bilingual French/English support',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div
              className="rounded-3xl overflow-hidden relative group"
              style={{
                boxShadow: '0 8px 32px rgba(108,58,255,0.12)',
                border:    '1.5px solid rgba(108,58,255,0.12)',
                height:    '260px',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.263884877797!2d-79.38531102341957!3d43.65107057110221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cd70669ba1%3A0x66c84307ef07e35b!2s100%20Queen%20St%20W%2C%20Toronto%2C%20ON%20M5H%202N2!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="MHPOS Toronto Office"
              />
              <div
                className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                style={{
                  background:   'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(8px)',
                  borderTop:    '1px solid rgba(108,58,255,0.10)',
                }}
              >
                <p className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                  <MapPin size={15} className="text-violet-500 shrink-0" />
                  100 Queen St W, Toronto, ON M5H 2N2
                </p>
              </div>
            </div>

            {/* Social links */}
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
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200 hover:scale-110"
                  style={{ border: '1.5px solid rgba(108,58,255,0.15)' }}
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
