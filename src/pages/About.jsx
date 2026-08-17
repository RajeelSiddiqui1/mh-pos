import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Sparkles,
  Building2,
  Clock,
  Layers,
  HeartHandshake,
  Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Partners from '../components/Partners';

const About = () => {
  const pillars = [
    {
      icon: Zap,
      title: 'Wholesale Interchange+ Pricing',
      desc: 'We eliminate bloated bank tier margins and non-cancellable contract traps, passing wholesale processor rates directly to your business.'
    },
    {
      icon: Clock,
      title: '48-Hour Rapid Onboarding',
      desc: 'From initial application to plug-and-play delivery, we configure, test, and ship your terminals within 1 to 2 business days.'
    },
    {
      icon: Headphones,
      title: 'Direct Canadian Tech Helpdesk',
      desc: 'Skip 45-minute corporate hold queues. Reach a dedicated payment specialist in Toronto or Vancouver via direct phone and WhatsApp in under 60 seconds.'
    },
    {
      icon: Layers,
      title: 'Complete Omnichannel Harmony',
      desc: 'Seamlessly link your countertop registers with your mobile staff handhelds and online Shopify/WooCommerce store under one master dashboard.'
    }
  ];

  const onboardingSteps = [
    {
      step: '01',
      title: 'Rate & Workflow Audit',
      desc: 'We review your business model and recent merchant statements to recommend the ideal hardware (Clover, Moneris, or Global Payments) and calculate your savings.'
    },
    {
      step: '02',
      title: 'Fast-Track Underwriting',
      desc: 'Our direct relationship with Canadian acquiring banks ensures your merchant account and direct deposit links are approved within 24 hours.'
    },
    {
      step: '03',
      title: 'Free Menu & SKU Staging',
      desc: 'Our certified technicians upload your product catalogue, tax structures, and menu modifiers onto the hardware before it leaves our staging lab.'
    },
    {
      step: '04',
      title: 'Plug-and-Play Launch',
      desc: 'Unbox your terminal, connect to Wi-Fi or 4G LTE, and start accepting payments immediately with live one-on-one staff training provided.'
    }
  ];

  const team = [
    { 
      name: 'Michael Hernandez', 
      role: 'CEO & Principal Solutions Architect', 
      location: 'Toronto HQ',
      desc: '12+ years in Canadian payment infrastructure and merchant acquiring.'
    },
    { 
      name: 'Sarah Jenkins', 
      role: 'Head of Merchant Success & Onboarding', 
      location: 'Toronto HQ',
      desc: 'Oversees 24/7 client relations, menu programming, and hardware deployment.'
    },
    { 
      name: 'David Chen', 
      role: 'Chief Technology & Integration Lead', 
      location: 'Vancouver Hub',
      desc: 'Expert in Clover App API integrations, Shopify sync, and secure tokenization.'
    },
    { 
      name: 'Emma Wilson', 
      role: 'Regional Director (Quebec & Eastern Canada)', 
      location: 'Montreal Hub',
      desc: 'Leads our bilingual French/English merchant support and restaurant deployments.'
    }
  ];

  const banks = [
    'RBC Royal Bank',
    'TD Canada Trust',
    'Scotiabank',
    'BMO Bank of Montreal',
    'CIBC',
    'National Bank of Canada',
    'Desjardins'
  ];

  return (
    <div className="pt-28 pb-24 overflow-hidden">
      
      {/* Background ambient blobs */}
      <div className="blob-primary w-[550px] h-[550px] -top-20 left-1/4 opacity-40" />
      <div className="blob-indigo w-[450px] h-[450px] top-[700px] right-5 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

        {/* ── Hero Section ─────────────────────────────── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800/40 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider shadow-sm">
                <ShieldCheck size={16} />
                <span>About MHPOS Solutions Canada</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white leading-[1.12] tracking-tight">
                Empowering Canadian Commerce with <br />
                <span className="text-gradient-blue">Intelligent POS Systems</span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                MHPOS is a certified solutions partner and authorized reseller for <strong>Moneris</strong>, <strong>Clover</strong>, and <strong>Global Payments</strong>. We bridge the gap between heavy enterprise payment processors and local Canadian small businesses.
              </p>

              <div className="p-6 rounded-2xl bg-blue-50/60 dark:bg-slate-900/60 border border-blue-100 dark:border-white/5 border-l-4 border-l-blue-600 space-y-2">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed italic">
                  "Our mission is simple: provide Canadian retail and restaurant merchants with world-class payment hardware, honest interchange-plus pricing, and responsive human support without corporate bureaucracy."
                </p>
                <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  — The MHPOS Leadership Team
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/services" className="btn-primary px-8 py-4 text-sm font-bold shadow-lift flex items-center gap-2">
                  <span>Browse POS Hardware Lineup</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-outline px-7 py-4 text-sm font-bold flex items-center gap-2">
                  <PhoneCall size={16} />
                  <span>Talk to an Expert</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Visual Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="pos-card p-3 rounded-[2.5rem] shadow-lift overflow-hidden">
                <img 
                  src="/images/mhpos-office-lab.jpg" 
                  alt="MHPOS Toronto Fintech Office" 
                  className="rounded-[2.2rem] w-full object-cover aspect-[4/3]"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-6 glass-morphism dark:glass-morphism-dark p-4 rounded-2xl shadow-lift border border-white/80 dark:border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-extrabold text-base">
                  99.9%
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900 dark:text-white">Canadian Network Uptime</p>
                  <p className="text-[11px] text-slate-500">Dual SIM & Interac Direct</p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── Core Value Pillars (Replaces Old History) ─── */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">The MHPOS Advantage</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4">
              Built on 4 Foundation Pillars
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Why business owners across Ontario, British Columbia, Alberta, and Quebec trust us to power their day-to-day operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                whileHover={{ y: -5 }}
                className="pos-card p-7 flex flex-col justify-between group hover:border-blue-300 dark:hover:border-blue-500/30"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <pillar.icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Real In-Store Consultation Feature ────────── */}
        <section className="pos-card p-8 lg:p-14 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Personalized Service</span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Real Technicians, Not Distant Call Centers
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                When you partner with MHPOS, you are assigned a dedicated Canadian account representative who understands your retail floor plan, menu modifier complexity, and local tax requirements.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Free on-site or video walkthrough consultation for your store layout',
                  'Pre-configuration of POS categories, modifiers, and staff permission PINs',
                  'Instant hardware replacement dispatch if a terminal is damaged',
                  'Annual complimentary rate review to guarantee you never overpay'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-lift border border-slate-200/80 dark:border-white/10">
                <img 
                  src="/images/mhpos-consultant.jpg" 
                  alt="MHPOS POS Specialist with Canadian Merchant" 
                  className="w-full h-full object-cover aspect-[4/3] hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ── Official Technology Partners ───────────────── */}
        <Partners />

        {/* ── 4-Step Onboarding Process (Replaces Milestones) ─ */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Smooth Transition</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4">
              How We Get You Live in 48 Hours
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Zero downtime for your current operations. We handle the paperwork, bank links, and hardware staging seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {onboardingSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
                className="pos-card p-6 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-blue-600 dark:text-blue-400 tracking-tight">
                      {step.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Direct Canadian Banking Settlements ─────────── */}
        <section className="pos-card p-8 lg:p-12 text-center space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Seamless Direct Deposits</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Compatible with All Major Canadian Financial Institutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-2 leading-relaxed">
              Your daily batches settle automatically next business day directly into your existing business checking account. No need to switch banks.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {banks.map((bank, i) => (
              <span 
                key={i} 
                className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/70 dark:border-white/5 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 shadow-sm"
              >
                🏦 {bank}
              </span>
            ))}
          </div>
        </section>

        {/* ── Regional Canadian Hubs & Leadership ───────── */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Coast to Coast Coverage</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4">
              Our Regional Hubs & Leadership
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {['Toronto HQ & Staging Lab', 'Vancouver West Hub', 'Montreal Bilingual Support Desk'].map((loc) => (
                <span
                  key={loc}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 shadow-sm"
                >
                  <MapPin size={14} className="text-blue-600" /> {loc}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                whileHover={{ y: -4 }}
                className="pos-card p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">{member.name}</h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mt-0.5">{member.role}</p>
                  <span className="inline-block text-[11px] text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded mt-2 font-medium">
                    📍 {member.location}
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-3">
                    {member.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Ready to Switch CTA Banner ────────────────── */}
        <section 
          className="pos-card p-10 lg:p-16 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 50%, #4F46E5 100%)' }}
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-6 text-white">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Start Your Upgrade Today</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Get Better POS Hardware at Lower Processing Rates
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Book a 15-minute discovery consultation with one of our certified Clover, Moneris, and Global Payments specialists today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/contact" className="btn-emerald px-10 py-4 text-sm font-bold shadow-lift">
                <span>Book Free Discovery Call</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="px-8 py-4 rounded-full border border-white/30 text-white font-bold hover:bg-white/10 transition-all text-sm">
                <span>View All 9+ Systems</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
