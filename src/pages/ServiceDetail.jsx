import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  CreditCard, 
  Phone, 
  HelpCircle, 
  Layers, 
  Send,
  Building2,
  ChevronDown,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { servicesData, partners } from '../data/servicesData';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = useMemo(() => {
    return servicesData.find((s) => s.slug === slug) || servicesData[0];
  }, [slug]);

  const partnerInfo = useMemo(() => {
    return partners.find((p) => p.name.toLowerCase() === service.partner.toLowerCase()) || partners[0];
  }, [service]);

  const relatedServices = useMemo(() => {
    return servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);
  }, [service]);

  // Tab State
  const [activeTab, setActiveTab] = useState('overview');
  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);
  // Quote form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    monthlyVolume: '< $25,000',
    notes: ''
  });

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const tabs = [
    { id: 'overview', label: 'Overview & Features', icon: Layers },
    { id: 'specs', label: 'Hardware Specs', icon: Cpu },
    { id: 'benefits', label: 'Why Through MHPOS', icon: ShieldCheck },
    { id: 'industries', label: 'Ideal Industries', icon: Building2 },
    { id: 'faq', label: 'FAQ', icon: HelpCircle }
  ];

  return (
    <div className="pt-28 pb-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="blob-primary w-[550px] h-[550px] -top-24 left-1/3 opacity-40" />
      <div className="blob-indigo w-[400px] h-[400px] top-96 right-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services & Solutions</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-semibold truncate max-w-xs">{service.title}</span>
        </div>

        {/* Hero Section of Detail Page */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Info & Headings */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-3">
              <span 
                className="px-3.5 py-1 text-xs font-bold rounded-full text-white"
                style={{ background: 'linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)' }}
              >
                {service.category}
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {service.badge}
              </span>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/40 px-3 py-1 rounded-full">
                ⚡ Next-Day Deployment
              </span>
            </div>

            {/* Title & Tagline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white leading-[1.15] tracking-tight">
              {service.title}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {service.tagline}
            </p>

            <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-slate-900/60 border border-blue-100 dark:border-white/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
                ✓
              </div>
              <div className="text-sm">
                <p className="font-bold text-slate-900 dark:text-white">Certified Hardware & Direct Underwriting</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">Full manufacturer warranty, pre-configured software, and wholesale Interchange+ processing rates.</p>
              </div>
            </div>

            {/* Pricing Tag & CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <a 
                href="#request-quote"
                className="btn-emerald px-8 py-4 text-base font-bold shadow-lift flex items-center justify-center gap-2"
              >
                <span>Request Custom Pricing</span>
                <ArrowRight size={18} />
              </a>
              <Link
                to="/contact"
                className="btn-outline px-6 py-4 text-base flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                <span>Talk to a POS Specialist</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Visual Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="pos-card p-6 relative overflow-hidden group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50 dark:from-slate-800 dark:to-slate-900 mb-6 flex items-center justify-center p-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 shadow-sm">
                  Certified Hardware
                </div>
              </div>

              {/* Pricing pill */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Estimated Pricing</span>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{service.pricing}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Funding Speed</span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Next Business Day</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="mb-12 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            
            {/* Tab: Overview */}
            {activeTab === 'overview' && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                <div className="pos-card p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Solution Deep Dive</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                    {service.longDesc}
                  </p>
                </div>

                {/* Key Features Grid */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Core Capabilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.keyFeatures.map((feat, i) => (
                      <div key={i} className="pos-card p-6 space-y-3 group hover:border-blue-300 dark:hover:border-blue-500/30 transition-all">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                          {i + 1}
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{feat.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab: Hardware Specs */}
            {activeTab === 'specs' && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="pos-card p-8 space-y-6"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Technical Specifications</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Engineered to meet the highest performance and security standards in North America.
                </p>

                <div className="space-y-4">
                  {Object.entries(service.hardwareSpecs).map(([key, value]) => {
                    const formattedKey = key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, (str) => str.toUpperCase());
                    return (
                      <div 
                        key={key} 
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-white/5 gap-2"
                      >
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{formattedKey}</span>
                        <span className="text-sm text-slate-900 dark:text-white font-medium sm:text-right">{value}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Tab: Why Through MHPOS */}
            {activeTab === 'benefits' && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="pos-card p-8 space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">The MHPOS Reseller Advantage</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Why hundreds of Canadian merchants choose to purchase and onboard {service.partner} hardware through us instead of dealing directly with long corporate phone queues.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {service.partnerBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-blue-50/50 dark:bg-slate-800/40 border border-blue-100 dark:border-white/5">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        ✓
                      </div>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Partner Card Box */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Official Partner</span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold">Verified Account</span>
                  </div>
                  <h4 className="text-xl font-bold">{partnerInfo.name} Authorized Integration</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{partnerInfo.description}</p>
                </div>
              </motion.div>
            )}

            {/* Tab: Ideal Industries */}
            {activeTab === 'industries' && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="pos-card p-8 space-y-6"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Recommended Use Cases</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  This system is configured and field-tested to deliver maximum efficiency in these business environments:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {service.idealFor.map((ind, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-800/40">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
                      <span className="text-base font-bold text-slate-900 dark:text-white">{ind}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tab: FAQ */}
            {activeTab === 'faq' && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="pos-card p-8 space-y-6"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  {service.faqs.map((faq, i) => {
                    const isOpen = openFaq === i;
                    return (
                      <div 
                        key={i} 
                        className="rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? -1 : i)}
                          className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                        >
                          <span className="text-base pr-4">{faq.q}</span>
                          <ChevronDown 
                            size={18} 
                            className={`text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} 
                          />
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Sticky Sidebar: Quick Quote Request Form */}
          <div className="lg:col-span-4" id="request-quote">
            <div className="pos-card p-8 sticky top-28 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">Fast-Track Pricing</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">Get Custom Quote</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Tailored rates for <strong>{service.title}</strong> with zero obligation.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="font-bold text-emerald-900 dark:text-emerald-200">Quote Request Received!</h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">
                    A dedicated Canadian payment specialist will contact you within 2 hours with an itemized rate breakdown.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-emerald-800 dark:text-emerald-200 underline mt-2"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 block mb-1">Business Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Maple Leaf Bakery" 
                      required 
                      value={quoteForm.businessName}
                      onChange={(e) => setQuoteForm({...quoteForm, businessName: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 block mb-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Smith" 
                      required 
                      value={quoteForm.contactName}
                      onChange={(e) => setQuoteForm({...quoteForm, contactName: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 block mb-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@business.ca" 
                      required 
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 block mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="(416) 555-0198" 
                      required 
                      value={quoteForm.phone}
                      onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 block mb-1">Monthly Card Volume</label>
                    <select 
                      value={quoteForm.monthlyVolume}
                      onChange={(e) => setQuoteForm({...quoteForm, monthlyVolume: e.target.value})}
                      className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option value="< $10,000">Under $10,000 / month (New Business)</option>
                      <option value="$10,000 - $50,000">$10,000 - $50,000 / month</option>
                      <option value="$50,000 - $150,000">$50,000 - $150,000 / month</option>
                      <option value="$150,000+">$150,000+ / month (Enterprise Tier)</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="btn-emerald w-full py-4 font-bold text-sm shadow-md mt-2 flex items-center justify-center gap-2"
                  >
                    <span>Get Guaranteed Quote</span>
                    <Send size={16} />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    🔒 No obligation. 100% confidential Canadian underwriting.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Related Services Recommendation Row */}
        <div className="pt-12 border-t border-slate-200 dark:border-white/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">Explore More Solutions</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Other Recommended Hardware & Systems</h3>
            </div>
            <Link to="/services" className="text-sm font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:gap-2 transition-all">
              <span>View All Systems</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div key={rel.slug} className="pos-card p-6 flex flex-col justify-between group">
                <div>
                  <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 p-4 mb-4 flex items-center justify-center">
                    <img src={rel.image} alt={rel.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                  </div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{rel.partner}</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1 mb-2 line-clamp-1">{rel.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">{rel.shortDesc}</p>
                </div>
                <Link 
                  to={`/services/${rel.slug}`} 
                  className="mt-5 text-sm font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 hover:gap-2.5 transition-all"
                >
                  <span>Explore Specs & Pricing</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;
