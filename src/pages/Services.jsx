import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Globe, 
  SlidersHorizontal, 
  ChevronRight, 
  CreditCard, 
  Cpu, 
  Wifi, 
  Sparkles,
  PhoneCall,
  Layers,
  ShoppingBag,
  Utensils,
  Store
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData, serviceCategories } from '../data/servicesData';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Solutions');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered services based solely on category and search query (no external partner labels)
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
    <div className="pt-28 pb-24 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="blob-primary w-[600px] h-[600px] -top-24 left-1/4 opacity-40" />
      <div className="blob-indigo w-[450px] h-[450px] top-[600px] right-5 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Page Header ───────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800/40 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm"
          >
            <Sparkles size={15} />
            <span>Complete Hardware & Payment Infrastructure</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white mb-6 tracking-tight leading-[1.1]"
          >
            Next-Generation <br />
            <span className="text-gradient-blue">POS & Payment Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal"
          >
            Explore our curated lineup of smart touchscreen registers, wireless mobile terminals, restaurant management systems, and omnichannel eCommerce gateways.
          </motion.p>
        </div>

        {/* ── Search & Category Filter Controls ───────────── */}
        <div className="pos-card p-6 mb-12 space-y-5">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative w-full md:w-96">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search systems, features, or business type…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 pr-4 py-3 text-sm w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
              />
            </div>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-3 text-xs font-bold text-slate-500 dark:text-slate-400">
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800">
                📦 {filteredServices.length} Systems Available
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                ⚡ 24-48h Setup
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-3 border-t border-slate-100 dark:border-white/5 scrollbar-hide">
            {serviceCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Services Grid ──────────────────────────────── */}
        {filteredServices.length === 0 ? (
          <div className="pos-card p-16 text-center space-y-4 mb-24">
            <SlidersHorizontal size={44} className="mx-auto text-slate-400" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">No solutions found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn't find any systems matching your search criteria. Try a different search term or category.
            </p>
            <button 
              onClick={() => { setSelectedCategory('All Solutions'); setSearchQuery(''); }}
              className="btn-primary py-3 px-8 text-xs font-bold"
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="pos-card flex flex-col justify-between overflow-hidden group shadow-card hover:shadow-lift transition-all"
                >
                  {/* Top Image Section */}
                  <div>
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 via-white to-blue-50 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 rounded-t-[22px] overflow-hidden p-4 flex items-center justify-center">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Badge Tag */}
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 bg-blue-600 text-white text-[11px] font-bold rounded-full shadow-sm">
                          {service.badge}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                          {service.category}
                        </span>
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-md">
                          Next-Day Funding
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        <Link to={`/services/${service.slug}`}>
                          {service.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {service.shortDesc}
                      </p>

                      {/* Quick Hardware Spec Pills */}
                      <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                        <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                          <Cpu size={12} className="text-blue-500" />
                          {service.hardwareSpecs.merchantScreen.split('(')[0]}
                        </span>
                        <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                          <Wifi size={12} className="text-blue-500" />
                          4G LTE + Wi-Fi
                        </span>
                      </div>

                      {/* Key Features List */}
                      <div className="pt-3 space-y-1.5 border-t border-slate-100 dark:border-white/5">
                        {service.keyFeatures.slice(0, 2).map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                            <span className="truncate font-medium">{feat.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Section */}
                  <div className="p-6 pt-0 space-y-3">
                    <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 font-medium">Pricing Model</span>
                      <span className="font-bold text-slate-900 dark:text-white truncate max-w-[180px]">{service.pricing}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        to={`/services/${service.slug}`}
                        className="btn-primary flex-1 py-3 text-xs font-bold flex items-center justify-center gap-2"
                      >
                        <span>Explore Specs & Pricing</span>
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        to={`/services/${service.slug}#request-quote`}
                        className="w-11 h-11 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:border-emerald-300 dark:hover:text-emerald-400 transition-colors shrink-0"
                        title="Request Instant Quote"
                      >
                        <CreditCard size={17} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* ── Transparent Economics Matrix ───────────────── */}
        <div className="pos-card p-8 lg:p-14 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Transparent Economics</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4">
              MHPOS Solutions vs Traditional Bank Processing
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Why thousands of Canadian merchants switch to MHPOS for their daily in-store and online payments.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 text-xs uppercase tracking-wider text-slate-400 font-bold">
                  <th className="py-4 px-4">Feature / Term</th>
                  <th className="py-4 px-4 text-blue-600 dark:text-blue-400 font-extrabold">MHPOS Solutions</th>
                  <th className="py-4 px-4 text-slate-400">Direct Bank Branch / Corporate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {[
                  {
                    feature: 'Processing Rates',
                    mhpos: 'True Wholesale Interchange-Plus (as low as 0.15% margin)',
                    bank: 'Inflated Tiered / Blended Rates with hidden tier surcharges'
                  },
                  {
                    feature: 'Hardware Setup & Programming',
                    mhpos: 'FREE full menu, inventory & tax programming included',
                    bank: '$150 - $350 initial technician programming fee'
                  },
                  {
                    feature: 'Support Wait Time',
                    mhpos: 'Instant direct Canadian phone & WhatsApp support (under 60s)',
                    bank: '35 - 60 minutes corporate call center hold times'
                  },
                  {
                    feature: 'Cancellation & Contracts',
                    mhpos: 'No cancellation penalties. Month-to-month flexibility',
                    bank: '3 to 5 year non-cancellable equipment lease lock-ins'
                  },
                  {
                    feature: 'Funding Speed',
                    mhpos: 'Next Business Day to ANY Canadian financial institution',
                    bank: '2 - 3 business days (unless you bank with their branch)'
                  }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900 dark:text-white">{row.feature}</td>
                    <td className="py-4 px-4 font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>{row.mhpos}</span>
                    </td>
                    <td className="py-4 px-4 text-slate-500 dark:text-slate-400">{row.bank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Bottom Quote & Consultation CTA ───────────── */}
        <div 
          className="pos-card p-10 lg:p-16 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 50%, #4F46E5 100%)' }}
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-6 text-white">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Free Rate Review & Guarantee</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Ready to Upgrade Your Checkout Infrastructure?
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Email us your latest merchant processing statement and our analysts will show you your exact savings breakdown with our modern hardware systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/contact" className="btn-emerald px-10 py-4 text-sm font-bold shadow-lift">
                <span>Request a Free Statement Analysis</span>
                <ArrowRight size={16} />
              </Link>
              <a 
                href="tel:+14165550198" 
                className="px-8 py-4 rounded-full border border-white/30 text-white font-bold hover:bg-white/10 transition-all text-sm flex items-center gap-2"
              >
                <PhoneCall size={16} />
                <span>Call (416) 555-0198</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
