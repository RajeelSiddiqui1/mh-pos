import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Clock,
  Headphones,
  Layers,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  MapPin,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Partners from '../components/Partners';

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const About = () => {
  const pillars = [
    {
      icon:  Zap,
      title: 'Wholesale Interchange+ Pricing',
      desc:  'We eliminate bloated bank tier margins and non-cancellable contract traps, passing wholesale processor rates directly to your business.',
      color: '#6C3AFF',
    },
    {
      icon:  Clock,
      title: '48-Hour Rapid Onboarding',
      desc:  'From initial application to plug-and-play delivery, we configure, test, and ship your terminals within 1 to 2 business days.',
      color: '#00D4FF',
    },
    {
      icon:  Headphones,
      title: 'Direct Canadian Tech Helpdesk',
      desc:  'Skip 45-minute corporate hold queues. Reach a dedicated payment specialist in Toronto or Vancouver via direct phone and WhatsApp in under 60 seconds.',
      color: '#00E888',
    },
    {
      icon:  Layers,
      title: 'Complete Omnichannel Harmony',
      desc:  'Seamlessly link your countertop registers with your mobile staff handhelds and online Shopify/WooCommerce store under one master dashboard.',
      color: '#F59E0B',
    },
  ];

  const onboardingSteps = [
    {
      step:  '01',
      title: 'Rate & Workflow Audit',
      desc:  'We review your business model and recent merchant statements to recommend the ideal hardware and calculate your savings.',
    },
    {
      step:  '02',
      title: 'Fast-Track Underwriting',
      desc:  'Our direct relationship with Canadian acquiring banks ensures your merchant account and direct deposit links are approved within 24 hours.',
    },
    {
      step:  '03',
      title: 'Free Menu & SKU Staging',
      desc:  'Our certified technicians upload your product catalogue, tax structures, and menu modifiers onto the hardware before it leaves our staging lab.',
    },
    {
      step:  '04',
      title: 'Plug-and-Play Launch',
      desc:  'Unbox your terminal, connect to Wi-Fi or 4G LTE, and start accepting payments immediately with live one-on-one staff training provided.',
    },
  ];

  const team = [
    {
      name:     'Michael Hernandez',
      role:     'CEO & Principal Solutions Architect',
      location: 'Toronto HQ',
      desc:     '12+ years in Canadian payment infrastructure and merchant acquiring.',
      init:     'MH',
    },
    {
      name:     'Sarah Jenkins',
      role:     'Head of Merchant Success & Onboarding',
      location: 'Toronto HQ',
      desc:     'Oversees 24/7 client relations, menu programming, and hardware deployment.',
      init:     'SJ',
    },
    {
      name:     'David Chen',
      role:     'Chief Technology & Integration Lead',
      location: 'Vancouver Hub',
      desc:     'Expert in Clover App API integrations, Shopify sync, and secure tokenization.',
      init:     'DC',
    },
    {
      name:     'Emma Wilson',
      role:     'Regional Director (Quebec & Eastern Canada)',
      location: 'Montreal Hub',
      desc:     'Leads our bilingual French/English merchant support and restaurant deployments.',
      init:     'EW',
    },
  ];

  const banks = [
    'RBC Royal Bank', 'TD Canada Trust', 'Scotiabank',
    'BMO Bank of Montreal', 'CIBC', 'National Bank of Canada', 'Desjardins',
  ];

  const avatarGradients = [
    'linear-gradient(135deg, #6C3AFF, #4A6CF7)',
    'linear-gradient(135deg, #00D4FF, #4A6CF7)',
    'linear-gradient(135deg, #00E888, #00D4FF)',
    'linear-gradient(135deg, #F59E0B, #EF4444)',
  ];

  return (
    <div className="page-bg pt-28 pb-24 overflow-hidden">

      {/* Ambient blobs */}
      <div className="blob-primary w-[550px] h-[550px] -top-20 left-1/4 opacity-30" />
      <div className="blob-indigo w-[450px] h-[450px] top-[800px] right-5 opacity-20" />
      <div className="dot-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

        {/* ══════════════════════════════════════════════
            HERO
           ══════════════════════════════════════════════ */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7 space-y-7"
            >
              <div className="badge-violet inline-flex items-center gap-2">
                <ShieldCheck size={16} />
                <span>About MHPOS Solutions Canada</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-950 dark:text-white leading-[1.10] tracking-tight">
                Empowering Canadian Commerce with{' '}
                <br />
                <span className="text-gradient">Intelligent POS Systems</span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                MHPOS is a certified solutions partner and authorized reseller for{' '}
                <strong className="text-slate-800 dark:text-white">Moneris</strong>,{' '}
                <strong className="text-slate-800 dark:text-white">Clover</strong>, and{' '}
                <strong className="text-slate-800 dark:text-white">Global Payments</strong>.
                We bridge the gap between heavy enterprise payment processors and local Canadian small businesses.
              </p>

              {/* Quote */}
              <div
                className="p-6 rounded-2xl relative overflow-hidden"
                style={{
                  background:  'rgba(108,58,255,0.04)',
                  border:      '1.5px solid rgba(108,58,255,0.15)',
                  borderLeft:  '4px solid #6C3AFF',
                  boxShadow:   '0 0 32px rgba(108,58,255,0.06)',
                }}
              >
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed italic">
                  "Our mission is simple: provide Canadian retail and restaurant merchants with world-class payment hardware,
                  honest interchange-plus pricing, and responsive human support without corporate bureaucracy."
                </p>
                <p className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider mt-3">
                  — The MHPOS Leadership Team
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-1">
                <Link to="/services" className="btn-primary px-8 py-4 text-sm">
                  Browse POS Hardware Lineup
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-outline px-7 py-4 text-sm">
                  <PhoneCall size={16} />
                  Talk to an Expert
                </Link>
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              {/* Outer glow */}
              <div
                className="absolute -inset-4 rounded-[2.8rem] opacity-30 blur-xl"
                style={{ background: 'linear-gradient(135deg, rgba(108,58,255,0.45), rgba(0,212,255,0.20))' }}
              />
              <div
                className="relative pos-card p-3 rounded-[2.5rem] overflow-hidden"
                style={{ boxShadow: '0 24px 64px rgba(108,58,255,0.22)' }}
              >
                <img
                  src="/images/mhpos-office-lab.jpg"
                  alt="MHPOS Toronto Fintech Office"
                  className="rounded-[2.2rem] w-full object-cover aspect-[4/3]"
                />
              </div>

              {/* Floating stat badge */}
              <div
                className="absolute -bottom-6 -left-6 glass px-4 py-3 rounded-2xl flex items-center gap-3"
                style={{ boxShadow: '0 8px 32px rgba(108,58,255,0.18)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl text-white flex items-center justify-center font-extrabold text-sm"
                  style={{ background: 'linear-gradient(135deg, #00E888, #00D4FF)', boxShadow: '0 4px 16px rgba(0,232,136,0.35)' }}
                >
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


        {/* ══════════════════════════════════════════════
            4 PILLARS
           ══════════════════════════════════════════════ */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
              The MHPOS Advantage
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
              Built on{' '}
              <span className="text-gradient">4 Foundation Pillars</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Why business owners across Ontario, British Columbia, Alberta, and Quebec trust us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.09, duration: 0.48 }}
                whileHover={{ y: -6 }}
                className="glow-card p-7 flex flex-col"
              >
                <div
                  className="neu-icon w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shrink-0"
                  style={{ color: pillar.color }}
                >
                  <pillar.icon size={28} />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>


        {/* ══════════════════════════════════════════════
            CONSULTATION FEATURE
           ══════════════════════════════════════════════ */}
        <section
          className="glass-strong rounded-[2.5rem] p-8 lg:p-14 overflow-hidden relative border border-violet-100/40 dark:border-violet-900/25"
          style={{ boxShadow: '0 8px 48px rgba(108,58,255,0.08)' }}
        >
          <div className="absolute top-0 right-0 blob-primary w-72 h-72 opacity-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
                Personalized Service
              </span>
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                Real Technicians,
                <br />
                <span className="text-gradient">Not Distant Call Centers</span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                When you partner with MHPOS, you are assigned a dedicated Canadian account representative who understands
                your retail floor plan, menu modifier complexity, and local tax requirements.
              </p>

              <div className="space-y-3 pt-1">
                {[
                  'Free on-site or video walkthrough consultation for your store layout',
                  'Pre-configuration of POS categories, modifiers, and staff permission PINs',
                  'Instant hardware replacement dispatch if a terminal is damaged',
                  'Annual complimentary rate review to guarantee you never overpay',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200 font-medium">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="rounded-3xl overflow-hidden"
                style={{ boxShadow: '0 16px 48px rgba(108,58,255,0.18), 0 4px 16px rgba(0,0,0,0.10)' }}
              >
                <img
                  src="/images/mhpos-consultant.jpg"
                  alt="MHPOS POS Specialist with Canadian Merchant"
                  className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════
            PARTNERS
           ══════════════════════════════════════════════ */}
        <Partners />


        {/* ══════════════════════════════════════════════
            ONBOARDING STEPS
           ══════════════════════════════════════════════ */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
              Smooth Transition
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
              How We Get You Live in{' '}
              <span className="text-gradient">48 Hours</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Zero downtime for your current operations. We handle the paperwork, bank links, and hardware staging seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div
              className="absolute hidden lg:block top-10 left-[12.5%] right-[12.5%] h-[1px] -z-0"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(108,58,255,0.30), rgba(0,212,255,0.30), rgba(108,58,255,0.30), transparent)' }}
            />

            {onboardingSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.10, duration: 0.48 }}
                className="glow-card p-6 relative z-10 flex flex-col"
              >
                {/* Step number node */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-display font-bold text-lg mb-5 shrink-0"
                  style={{
                    background:  'linear-gradient(135deg, #6C3AFF, #2C64F7)',
                    boxShadow:   '0 0 20px rgba(108,58,255,0.40), 0 4px 12px rgba(108,58,255,0.25)',
                  }}
                >
                  {step.step}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>


        {/* ══════════════════════════════════════════════
            BANKING INSTITUTIONS
           ══════════════════════════════════════════════ */}
        <section
          className="glass-strong rounded-3xl p-8 lg:p-12 text-center space-y-6 border border-violet-100/40 dark:border-violet-900/25"
          style={{ boxShadow: '0 8px 40px rgba(108,58,255,0.07)' }}
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
              Seamless Direct Deposits
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2">
              Compatible with All Major{' '}
              <span className="text-gradient">Canadian Financial Institutions</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-3 leading-relaxed">
              Your daily batches settle automatically next business day directly into your existing business checking account.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {banks.map((bank, i) => (
              <span
                key={i}
                className="px-4 py-2.5 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 transition-all hover:scale-105"
                style={{
                  background:  'rgba(108,58,255,0.05)',
                  border:      '1px solid rgba(108,58,255,0.12)',
                  boxShadow:   '0 2px 8px rgba(108,58,255,0.06)',
                }}
              >
                🏦 {bank}
              </span>
            ))}
          </div>
        </section>


        {/* ══════════════════════════════════════════════
            TEAM
           ══════════════════════════════════════════════ */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
              Coast to Coast Coverage
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
              Our Regional Hubs &{' '}
              <span className="text-gradient-blue">Leadership</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mt-5">
              {['Toronto HQ & Staging Lab', 'Vancouver West Hub', 'Montreal Bilingual Support Desk'].map((loc) => (
                <span
                  key={loc}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-700 dark:text-slate-300 glass border border-violet-100/50 dark:border-violet-900/30"
                >
                  <MapPin size={13} className="text-violet-500" /> {loc}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.09, duration: 0.48 }}
                whileHover={{ y: -5 }}
                className="glow-card p-6 flex flex-col"
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-2xl text-white flex items-center justify-center font-display font-bold text-lg mb-5 shrink-0"
                  style={{ background: avatarGradients[idx], boxShadow: '0 4px 20px rgba(108,58,255,0.30)' }}
                >
                  {member.init}
                </div>
                <h3 className="font-display font-bold text-slate-900 dark:text-white text-base leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs font-bold mt-1 text-violet-600 dark:text-violet-400">{member.role}</p>
                <span
                  className="inline-block text-[11px] text-slate-400 px-2.5 py-0.5 rounded-lg mt-2 font-medium w-fit"
                  style={{ background: 'rgba(108,58,255,0.06)', border: '1px solid rgba(108,58,255,0.10)' }}
                >
                  📍 {member.location}
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-3">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>


        {/* ══════════════════════════════════════════════
            CTA BANNER
           ══════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden rounded-[3rem] p-10 lg:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, #3B0FBF 0%, #4A2FE0 35%, #2C64F7 70%, #00A8CC 100%)',
            boxShadow:  '0 32px 80px rgba(108,58,255,0.40)',
          }}
        >
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.30) 0%, transparent 70%)', filter: 'blur(50px)' }} />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-25 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,232,136,0.50) 0%, transparent 70%)', filter: 'blur(55px)' }} />
          <div className="dot-grid absolute inset-0 opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6 text-white">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200">
              Start Your Upgrade Today
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
              Get Better POS Hardware at Lower Processing Rates
            </h2>
            <p className="text-violet-100 text-sm leading-relaxed">
              Book a 15-minute discovery consultation with one of our certified Clover, Moneris, and Global Payments specialists.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link to="/contact" className="btn-emerald px-10 py-4 text-sm font-bold">
                Book Free Discovery Call
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 rounded-full font-bold text-sm transition-all hover:bg-white/10 flex items-center gap-2"
                style={{ border: '1.5px solid rgba(255,255,255,0.28)', color: 'white' }}
              >
                View All 9+ Systems
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
