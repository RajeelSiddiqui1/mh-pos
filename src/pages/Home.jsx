import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, ArrowRight, Play, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Partners from '../components/Partners';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'High Performance',
      desc: 'Ultra-low latency processing ensures your checkout lines never slow down.',
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      desc: 'Every transaction is encrypted with the latest industry standards to protect your data.',
    },
    {
      icon: Globe,
      title: 'Born in Canada',
      desc: 'Headquartered in Toronto, we understand local tax compliance and regulations.',
    },
  ];

  const stats = [
    { value: '5,000+', label: 'Active Merchants' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '< 0.3s', label: 'Avg. Transaction' },
  ];

  return (
    <div className="pt-20 overflow-hidden">

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative py-24 lg:py-36">
        {/* Ambient blobs */}
        <div className="blob-primary w-[560px] h-[560px] -top-20 left-1/4 opacity-60" />
        <div className="blob-indigo w-[400px] h-[400px] top-40 right-0 opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left — Copy */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex-1 space-y-8 text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism dark:glass-morphism-dark">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Serving Canadian Businesses Coast to Coast
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="text-5xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-slate-900 dark:text-white"
              >
                Next-Generation
                <br />
                <span className="text-gradient-blue">POS Solutions</span>
                <br />
                for Small Business.
              </motion.h1>

              {/* Subtext */}
              <motion.p
                variants={fadeUp}
                className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed mx-auto lg:mx-0"
              >
                Streamline your operations with our robust, secure, and modern payment terminals — designed for the evolving retail landscape.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
              >
                <Link to="/contact" className="btn-emerald px-8 py-4 text-base">
                  <span>Get Started Now</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn-outline px-8 py-4 text-base">
                  <Play size={17} className="fill-current" />
                  <span>See How It Works</span>
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-2"
              >
                {stats.map(({ value, label }) => (
                  <div key={label} className="text-center lg:text-left">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
              className="flex-1 relative max-w-lg w-full"
            >
              <div className="animate-float pos-card p-4 rounded-[2.5rem] shadow-lift">
                <img
                  src="/images/clover-station-duo.jpg"
                  alt="POS Terminal"
                  className="rounded-[2rem] w-full"
                />
              </div>

              {/* Floating trust badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -bottom-5 -left-6 glass-morphism dark:glass-morphism-dark px-4 py-3 rounded-2xl flex items-center gap-3 shadow-card"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Star size={14} className="text-emerald-600 fill-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">Rated 4.9 / 5</p>
                  <p className="text-xs text-slate-400">by 5,000+ merchants</p>
                </div>
              </motion.div>

              {/* Ambient glow behind image */}
              <div className="blob-primary w-72 h-72 -bottom-10 right-0 opacity-40" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Featured Systems Strip ─────────────────────── */}
      <section className="py-16 border-y border-slate-200/60 dark:border-white/5 bg-white/40 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Smart Payment Hardware</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Featured Point of Sale Terminals</h2>
            </div>
            <Link to="/services" className="btn-primary py-2.5 px-5 text-xs font-bold shrink-0">
              View All Systems →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Station Duo Countertop POS',
                tag: 'Dual-Screen POS',
                desc: '14" staff touchscreen + 8" customer display for seamless orders and tipping.',
                slug: 'clover-station-duo',
                img: '/images/clover-station-duo.jpg'
              },
              {
                title: 'Go Wireless Smart Terminal',
                tag: 'Wireless 4G LTE',
                desc: 'Canada’s benchmark Android terminal with instant Interac debit and all-day battery.',
                slug: 'moneris-go-terminal',
                img: '/images/moneris-go-terminal.jpg'
              },
              {
                title: 'Cloud Restaurant POS & KDS',
                tag: 'Hospitality Cloud',
                desc: 'Table mapping, kitchen display systems (KDS), and commission-free online ordering.',
                slug: 'heartland-restaurant-pos',
                img: '/images/heartland-restaurant-pos.jpg'
              }
            ].map((item, idx) => (
              <div key={idx} className="pos-card p-6 flex flex-col justify-between group hover:border-blue-300 dark:hover:border-blue-500/30">
                <div>
                  <div className="aspect-[16/10] rounded-xl bg-slate-100 dark:bg-slate-800 p-3 mb-4 flex items-center justify-center overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-0.5 rounded-md">{item.tag}</span>
                    <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">Next-Day Setup</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">{item.desc}</p>
                </div>
                <Link
                  to={`/services/${item.slug}`}
                  className="mt-5 text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 hover:gap-2.5 transition-all"
                >
                  <span>Explore Specs & Pricing</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Official Technology Partners Component ─────── */}
      <Partners />

      {/* ── Feature Strip ─────────────────────────────── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-3">
              Why MHPOS
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Built for Success, Designed for Growth
            </h2>
            <div className="section-divider mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="pos-card p-8 text-center group hover:shadow-lift transition-shadow duration-300"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.10) 0%, rgba(79,70,229,0.10) 100%)',
                    color: '#2563EB',
                  }}
                >
                  <feature.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative overflow-hidden rounded-[3rem] p-12 lg:p-20 text-center"
            style={{
              background: 'linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 40%, #4F46E5 100%)',
            }}
          >
            {/* Ambient overlays */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)', filter: 'blur(40px)' }}
            />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-15"
              style={{ background: 'radial-gradient(circle, rgba(16,163,74,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }}
            />

            <div className="relative z-10">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-200 mb-4">Trusted by 5,000+ merchants</p>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to upgrade your system?
              </h2>
              <p className="text-lg text-blue-100/80 mb-10 max-w-xl mx-auto italic leading-relaxed">
                "Joining MHPOS was the best decision for my bakery. The setup was seamless and the support is unmatched."
                <span className="not-italic font-semibold text-white"> — Sarah, Toronto</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-emerald text-base px-10 py-4">
                  Contact Our Experts
                </Link>
                <Link to="/contact" className="text-blue-200 font-semibold hover:text-white transition-colors">
                  Learn about pricing →
                </Link>
              </div>

              {/* Payment logos */}
              <div className="mt-14 flex flex-wrap justify-center gap-10 opacity-40">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6 brightness-0 invert" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8 brightness-0 invert" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Interac_logo.svg" alt="Interac" className="h-6 brightness-0 invert" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg" alt="Apple Pay" className="h-6 brightness-0 invert" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
