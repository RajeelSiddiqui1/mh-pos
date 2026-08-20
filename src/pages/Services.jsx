import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  CheckCircle2,
  ArrowRight,
  SlidersHorizontal,
  Cpu,
  Wifi,
  Sparkles,
  PhoneCall,
  CreditCard,
  XCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData, serviceCategories } from '../data/servicesData';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Solutions');
  const [searchQuery,      setSearchQuery]      = useState('');

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchCategory =
        selectedCategory === 'All Solutions' ||
        service.category === selectedCategory;

      const matchSearch =
        searchQuery.trim() === '' ||
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.idealFor.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="page-bg pt-28 pb-24 overflow-hidden">

      {/* Ambient blobs */}
      <div className="blob-primary w-[600px] h-[600px] -top-24 left-1/4 opacity-30" />
      <div className="blob-indigo w-[450px] h-[450px] top-[700px] right-0 opacity-25" />
      <div className="dot-grid absolute inset-0 opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Page Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 badge-violet mb-5"
          >
            <Sparkles size={15} />
            <span>Complete Hardware & Payment Infrastructure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.08]"
          >
            Next-Generation
            <br />
            <span className="text-gradient">POS & Payment Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Explore our curated lineup of smart touchscreen registers, wireless mobile terminals,
            restaurant management systems, and omnichannel eCommerce gateways.
          </motion.p>
        </div>

        {/* ── Search & Filter ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="glass-strong rounded-3xl p-6 mb-14 border border-violet-100/50 dark:border-violet-900/30"
          style={{ boxShadow: '0 8px 40px rgba(108,58,255,0.08)' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-5">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-400" />
              <input
                type="text"
                placeholder="Search systems, features, or business type…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 pr-10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-violet-500 transition-colors"
                >
                  <XCircle size={18} />
                </button>
              )}
            </div>

            {/* Stats pills */}
            <div className="flex items-center gap-3 text-xs font-bold">
              <span className="px-3 py-1.5 rounded-lg bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 border border-violet-100 dark:border-violet-800/30">
                📦 {filteredServices.length} Systems Available
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/30">
                ⚡ 24-48h Setup
              </span>
            </div>
          </div>

          {/* Category pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 border-t border-violet-100/60 dark:border-violet-900/20 scrollbar-hide">
            {serviceCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-violet-50 dark:hover:bg-violet-900/15'
                  }`}
                  style={isActive ? {
                    background: 'linear-gradient(135deg, #6C3AFF, #2C64F7)',
                    boxShadow:  '0 4px 16px rgba(108,58,255,0.35)',
                  } : {}}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Services Grid ── */}
        {filteredServices.length === 0 ? (
          <div className="pos-card p-16 text-center space-y-5 mb-24">
            <SlidersHorizontal size={48} className="mx-auto text-violet-300" />
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              No solutions found
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn't find any systems matching your search. Try a different term or category.
            </p>
            <button
              onClick={() => { setSelectedCategory('All Solutions'); setSearchQuery(''); }}
              className="btn-primary py-3 px-8 text-sm"
            >
              Show All Systems
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0  }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.38, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="glow-card flex flex-col justify-between overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-violet-50/60 via-white to-blue-50/40 dark:from-violet-950/30 dark:via-slate-900 dark:to-slate-900 rounded-t-[22px] overflow-hidden p-5 flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className="px-3 py-1 text-[11px] font-bold rounded-full text-white"
                        style={{ background: 'linear-gradient(135deg, #6C3AFF, #2C64F7)', boxShadow: '0 4px 12px rgba(108,58,255,0.35)' }}
                      >
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 flex flex-col flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                        {service.category}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-800/30">
                        Next-Day Funding
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-gradient-blue transition-all">
                      <Link to={`/services/${service.slug}`}>{service.title}</Link>
                    </h3>

                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {service.shortDesc}
                    </p>

                    {/* Spec pills */}
                    <div className="flex flex-wrap gap-2 text-[11px] font-medium pt-1">
                      <span className="flex items-center gap-1.5 bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300 px-2.5 py-1 rounded-lg border border-violet-100 dark:border-violet-800/30">
                        <Cpu size={11} />
                        {service.hardwareSpecs.merchantScreen.split('(')[0]}
                      </span>
                      <span className="flex items-center gap-1.5 bg-cyan-50 dark:bg-cyan-950/20 text-cyan-700 dark:text-cyan-400 px-2.5 py-1 rounded-lg border border-cyan-100 dark:border-cyan-800/30">
                        <Wifi size={11} />
                        4G LTE + Wi-Fi
                      </span>
                    </div>

                    {/* Key features */}
                    <div className="pt-3 space-y-1.5 border-t border-violet-50 dark:border-violet-900/20">
                      {service.keyFeatures.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                          <span className="truncate font-medium">{feat.title}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing + CTA */}
                    <div className="mt-auto pt-4 border-t border-violet-50 dark:border-violet-900/20 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-medium">Pricing Model</span>
                        <span className="font-bold text-slate-900 dark:text-white truncate max-w-[180px]">
                          {service.pricing}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Link
                          to={`/services/${service.slug}`}
                          className="btn-primary flex-1 py-2.5 text-xs font-bold flex items-center justify-center gap-2"
                        >
                          Explore Specs & Pricing
                          <ArrowRight size={13} />
                        </Link>
                        <Link
                          to={`/services/${service.slug}#request-quote`}
                          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors shrink-0"
                          style={{ border: '1.5px solid rgba(108,58,255,0.18)' }}
                          title="Request Instant Quote"
                        >
                          <CreditCard size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* ── Comparison Table ── */}
        <div
          className="glass-strong rounded-3xl p-8 lg:p-14 mb-24 border border-violet-100/40 dark:border-violet-900/25"
          style={{ boxShadow: '0 8px 48px rgba(108,58,255,0.07)' }}
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
              Transparent Economics
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
              MHPOS vs{' '}
              <span className="text-gradient">Traditional Bank</span> Processing
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Why thousands of Canadian merchants switch to MHPOS for their daily payments.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full text-left text-sm">
              <thead>
                <tr
                  className="text-xs uppercase tracking-wider font-bold"
                  style={{ borderBottom: '1px solid rgba(108,58,255,0.12)' }}
                >
                  <th className="py-4 px-5 text-slate-400">Feature / Term</th>
                  <th className="py-4 px-5 text-violet-600 dark:text-violet-400 font-extrabold">
                    MHPOS Solutions ✦
                  </th>
                  <th className="py-4 px-5 text-slate-400">Direct Bank / Corporate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: 'Processing Rates',
                    mhpos:   'True Wholesale Interchange-Plus (as low as 0.15% margin)',
                    bank:    'Inflated Tiered / Blended Rates with hidden tier surcharges',
                  },
                  {
                    feature: 'Hardware Setup & Programming',
                    mhpos:   'FREE full menu, inventory & tax programming included',
                    bank:    '$150 - $350 initial technician programming fee',
                  },
                  {
                    feature: 'Support Wait Time',
                    mhpos:   'Instant direct Canadian phone & WhatsApp (under 60s)',
                    bank:    '35 - 60 min corporate call center hold times',
                  },
                  {
                    feature: 'Cancellation & Contracts',
                    mhpos:   'No cancellation penalties. Month-to-month flexibility',
                    bank:    '3 to 5 year non-cancellable equipment lease lock-ins',
                  },
                  {
                    feature: 'Funding Speed',
                    mhpos:   'Next Business Day to ANY Canadian financial institution',
                    bank:    '2 - 3 business days (unless you bank with their branch)',
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="transition-colors hover:bg-violet-50/40 dark:hover:bg-violet-900/10"
                    style={{ borderBottom: '1px solid rgba(108,58,255,0.06)' }}
                  >
                    <td className="py-4 px-5 font-bold text-slate-900 dark:text-white text-sm">{row.feature}</td>
                    <td className="py-4 px-5">
                      <div className="flex items-start gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                        <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                        <span>{row.mhpos}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-slate-500 dark:text-slate-400 text-sm">{row.bank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div
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
              Free Rate Review & Guarantee
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
              Ready to Upgrade Your Checkout Infrastructure?
            </h2>
            <p className="text-violet-100 text-sm leading-relaxed">
              Email us your latest merchant processing statement and our analysts will show you your exact savings breakdown.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link to="/contact" className="btn-emerald px-10 py-4 text-sm font-bold">
                Request a Free Statement Analysis
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+14165550198"
                className="px-8 py-4 rounded-full font-bold text-sm flex items-center gap-2 transition-all hover:bg-white/10"
                style={{ border: '1.5px solid rgba(255,255,255,0.28)', color: 'white' }}
              >
                <PhoneCall size={16} />
                Call (416) 555-0198
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
