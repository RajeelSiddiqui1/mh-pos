import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const partnersList = [
  {
    name: 'Clover',
    badge: 'Certified Clover Dealer',
    image: '/images/partner-clover.jpg',
    color: '#22B14C',
    bgLight: 'bg-emerald-50 dark:bg-emerald-950/40',
    borderCol: 'border-emerald-200 dark:border-emerald-800/40',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    tagline: 'Smart Cloud POS & Hardware',
    desc: 'Official certified reseller for Clover Station Duo, Clover Flex handhelds, and Clover Mini registers with direct Canadian underwriting.',
    highlights: ['14" & 8" Dual-screen POS', 'Tableside ordering & dining sync', '500+ Clover App Market plugins'],
    svgLogo: (
      <svg className="h-7 w-auto" viewBox="0 0 120 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="6" fill="#22B14C" />
        <circle cx="22" cy="10" r="6" fill="#22B14C" />
        <circle cx="10" cy="22" r="6" fill="#22B14C" />
        <circle cx="22" cy="22" r="6" fill="#22B14C" />
        <text x="36" y="22" fill="currentColor" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="20" letterSpacing="-0.5px">clover</text>
      </svg>
    )
  },
  {
    name: 'Moneris',
    badge: 'Authorized Canadian Partner',
    image: '/images/partner-moneris.jpg',
    color: '#0079C1',
    bgLight: 'bg-sky-50 dark:bg-sky-950/40',
    borderCol: 'border-sky-200 dark:border-sky-800/40',
    badgeText: 'text-sky-700 dark:text-sky-300',
    tagline: 'Canada’s #1 Payment Processor',
    desc: 'Direct banking integration with RBC and BMO heritage. Sub-second Interac debit, bilingual terminals, and Moneris Total Commerce.',
    highlights: ['Sub-second Interac Flash taps', 'Bilingual French/English interface', 'Direct deposits to any Canadian bank'],
    svgLogo: (
      <svg className="h-7 w-auto" viewBox="0 0 130 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 24V10L14 19L22 10V24" stroke="#0079C1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="30" y="22" fill="currentColor" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="19" letterSpacing="-0.5px">moneris</text>
      </svg>
    )
  },
  {
    name: 'Global Payments',
    badge: 'Enterprise Solutions Partner',
    image: '/images/partner-global-payments.jpg',
    color: '#004B87',
    bgLight: 'bg-blue-50 dark:bg-blue-950/40',
    borderCol: 'border-blue-200 dark:border-blue-800/40',
    badgeText: 'text-blue-700 dark:text-blue-300',
    tagline: 'Worldwide Merchant Infrastructure',
    desc: 'Fortune 500 enterprise payment technology, Heartland restaurant software, Telium TETRA security, and wholesale Interchange+ optimization.',
    highlights: ['Heartland restaurant floor maps', 'Wholesale Interchange+ pricing', 'Multi-currency 140+ FX settlement'],
    svgLogo: (
      <svg className="h-7 w-auto" viewBox="0 0 170 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="17" r="11" stroke="#004B87" strokeWidth="3.5" fill="none" />
        <path d="M11 17H21M16 12V22" stroke="#004B87" strokeWidth="3" strokeLinecap="round" />
        <text x="36" y="16" fill="currentColor" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="13" letterSpacing="-0.3px">GLOBAL</text>
        <text x="36" y="27" fill="#004B87" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="11" letterSpacing="0.5px">PAYMENTS</text>
      </svg>
    )
  }
];

const Partners = ({ subtitle = "We partner directly with leading payment networks to deliver official hardware, bank-grade reliability, and wholesale rates." }) => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800/40 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck size={16} />
            <span>Official Strategic Technology Partners</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Backed by Industry <br />
            <span className="text-gradient-blue">Payment Giants</span>
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 3 Visual Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnersList.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.45 }}
              whileHover={{ y: -6 }}
              className="pos-card overflow-hidden flex flex-col justify-between group hover:shadow-lift transition-all"
            >
              <div>
                {/* Visual Image with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img 
                    src={partner.image} 
                    alt={`${partner.name} Authorized Partner`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  {/* Badge on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full backdrop-blur-md bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white border border-white/40 shadow-sm`}>
                      {partner.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Logo header */}
                  <div className="flex items-center justify-between mb-3 text-slate-900 dark:text-white">
                    {partner.svgLogo}
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <ShieldCheck size={14} /> Authorized
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-1">
                    {partner.name} POS & Processing
                  </h3>
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-3">
                    {partner.tagline}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {partner.desc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-white/5">
                    {partner.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0">
                <Link
                  to="/services"
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200"
                >
                  <span>Explore {partner.name} Systems</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;
