import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, ArrowRight, Play, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Partners from '../components/Partners';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'High Performance',
      desc:  'Ultra-low latency processing ensures your checkout lines never slow down.',
      color: '#6C3AFF',
      glow:  'rgba(108,58,255,0.25)',
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      desc:  'Every transaction is encrypted with the latest industry standards to protect your data.',
      color: '#00D4FF',
      glow:  'rgba(0,212,255,0.20)',
    },
    {
      icon: Globe,
      title: 'Born in Canada',
      desc:  'Headquartered in Toronto, we understand local tax compliance and regulations.',
      color: '#00E888',
      glow:  'rgba(0,232,136,0.20)',
    },
  ];

  const stats = [
    { value: '5,000+', label: 'Active Merchants' },
    { value: '99.9%',  label: 'Uptime SLA' },
    { value: '< 0.3s', label: 'Avg. Transaction' },
  ];

  const terminals = [
    {
      title: 'Station Duo Countertop POS',
      tag:   'Dual-Screen POS',
      desc:  '14″ staff touchscreen + 8″ customer display for seamless orders and tipping.',
      slug:  'clover-station-duo',
      img:   '/images/clover-station-duo.jpg',
    },
    {
      title: 'Go Wireless Smart Terminal',
      tag:   'Wireless 4G LTE',
      desc:  "Canada's benchmark Android terminal with instant Interac debit and all-day battery.",
      slug:  'moneris-go-terminal',
      img:   '/images/moneris-go-terminal.jpg',
    },
    {
      title: 'Cloud Restaurant POS & KDS',
      tag:   'Hospitality Cloud',
      desc:  'Table mapping, kitchen display systems (KDS), and commission-free online ordering.',
      slug:  'heartland-restaurant-pos',
      img:   '/images/heartland-restaurant-pos.jpg',
    },
  ];

  return (
    <div className="page-bg overflow-hidden">

      {/* ══════════════════════════════════════════════════
          HERO
         ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-20">

        {/* Aurora background */}
        <div className="aurora-bg" />

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* ── Left Copy ── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex-1 space-y-8 text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div variants={fadeUp}>
                <span className="badge-violet">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
                  </span>
                  Serving Canadian Businesses Coast to Coast
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="font-display text-5xl lg:text-7xl font-bold leading-[1.06] tracking-tight text-slate-900 dark:text-white"
              >
                Next-Generation
                <br />
                <span className="text-gradient">POS Solutions</span>
                <br />
                <span className="text-slate-700 dark:text-slate-200">for Small Business.</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                variants={fadeUp}
                className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed mx-auto lg:mx-0"
              >
                Streamline your operations with our robust, secure, and modern payment terminals —
                designed for the evolving retail landscape.
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

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-2"
              >
                {stats.map(({ value, label }) => (
                  <div key={label} className="text-center lg:text-left">
                    <p className="font-display text-2xl font-bold text-gradient">{value}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right — Hero Image ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 70 }}
              className="flex-1 relative max-w-lg w-full"
            >
              {/* Outer glow ring */}
              <div
                className="absolute -inset-4 rounded-[2.8rem] opacity-40 blur-xl"
                style={{ background: 'linear-gradient(135deg, rgba(108,58,255,0.40), rgba(0,212,255,0.25))' }}
              />

              <div
                className="relative animate-float pos-card p-4 rounded-[2.5rem]"
                style={{ boxShadow: '0 24px 80px rgba(108,58,255,0.25), 0 8px 32px rgba(0,0,0,0.12)' }}
              >
                <img
                  src="/images/clover-station-duo.jpg"
                  alt="POS Terminal"
                  className="rounded-[2rem] w-full"
                />
              </div>

              {/* Floating trust badge */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0  }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -bottom-5 -left-6 glass px-4 py-3 rounded-2xl flex items-center gap-3"
                style={{ boxShadow: '0 8px 32px rgba(108,58,255,0.18)' }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(0,232,136,0.20), rgba(0,212,255,0.15))', border: '1px solid rgba(0,232,136,0.30)' }}
                >
                  <Star size={15} className="text-emerald-500 fill-emerald-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">Rated 4.9 / 5</p>
                  <p className="text-xs text-slate-400">by 5,000+ merchants</p>
                </div>
              </motion.div>

              {/* Live badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1,  y: 0  }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl flex items-center gap-2"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-bold text-slate-800 dark:text-white">Live Processing</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="rgba(108,58,255,0.04)" />
          </svg>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          FEATURED TERMINALS
         ══════════════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="blob-primary w-96 h-96 top-0 right-10 opacity-25" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400 mb-2">
                Smart Payment Hardware
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Featured{' '}
                <span className="text-gradient-blue">POS Terminals</span>
              </h2>
              <div className="section-divider mt-4" />
            </div>
            <Link to="/services" className="btn-primary py-2.5 px-6 text-sm shrink-0">
              View All Systems <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {terminals.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.10, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glow-card flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-t-[22px] overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50/30 to-blue-50/20 dark:from-slate-900 dark:via-violet-950/20 dark:to-slate-900 p-4 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Tag */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="px-3 py-1 text-[11px] font-bold rounded-full text-white"
                      style={{ background: 'linear-gradient(135deg, #6C3AFF, #2C64F7)', boxShadow: '0 4px 12px rgba(108,58,255,0.35)' }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-full text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/30">
                      Next-Day Setup
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-5">
                    {item.desc}
                  </p>
                  <Link
                    to={`/services/${item.slug}`}
                    className="mt-auto flex items-center gap-2 text-sm font-bold text-violet-600 dark:text-violet-400 hover:gap-3 transition-all duration-200 group"
                  >
                    <span>Explore Specs & Pricing</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          PARTNERS
         ══════════════════════════════════════════════════ */}
      <Partners />


      {/* ══════════════════════════════════════════════════
          FEATURES
         ══════════════════════════════════════════════════ */}
      <section className="py-28 relative">
        <div className="blob-emerald w-80 h-80 bottom-0 left-0 opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400 mb-3">
              Why MHPOS
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Built for{' '}
              <span className="text-gradient">Success</span>
              {', Designed for '}
              <span className="text-gradient-cyan">Growth</span>
            </h2>
            <div className="section-divider mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="glow-card p-8 text-center flex flex-col items-center"
              >
                {/* Neumorphic icon */}
                <div
                  className="neu-icon w-18 h-18 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110"
                  style={{ width: 72, height: 72, color: feature.color }}
                >
                  <feature.icon size={34} />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          CTA BANNER
         ══════════════════════════════════════════════════ */}
      

    </div>
  );
};

export default Home;
