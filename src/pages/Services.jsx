import React from 'react';
import { Store, Utensils, Cloud, ArrowRight, CheckCircle2, Layout, Database, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const mainServices = [
    {
      icon: Store,
      title: 'Retail POS Systems',
      description: 'Built for high-volume retail environments. Manage inventory, process returns, and capture customer data seamlessly.',
      benefits: ['Real-time inventory sync', 'Multi-store management', 'Loyalty program integration', 'Advanced reporting']
    },
    {
      icon: Utensils,
      title: 'Restaurant Systems',
      description: 'Streamline your kitchen and dining room operations. Table management, split bills, and online ordering integration.',
      benefits: ['Floor plan customization', 'Kitchen Display System (KDS)', 'QR code ordering', 'Tip management']
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Sync your physical store with your online presence. Unified inventory and customer profiles across all channels.',
      benefits: ['Shopify & WooCommerce sync', 'Automated cloud backups', 'API access for custom tools', 'Mobile dashboard app']
    }
  ];

  const additionalFeatures = [
    { icon: Layout, title: 'Intuitive UI', desc: 'Minimal training required for staff.' },
    { icon: Database, title: 'Safe Data', desc: 'All data is stored in secure Canadian servers.' },
    { icon: Smartphone, title: 'Go Mobile', desc: 'Accept payments anywhere on the floor.' },
    { icon: CheckCircle2, title: '24/7 Support', desc: 'Expert help available whenever you need it.' }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-bold tracking-widest uppercase mb-4">Our Expertise</motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold dark:text-white mb-6"
          >
            Solutions Tailored to <br /> Your Industry
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            We don't believe in one-size-fits-all. Our experts help you choose the right combination of hardware and software for your unique needs.
          </motion.p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Feature Grid */}
        <div className="glass-morphism dark:glass-morphism-dark p-12 lg:p-20 rounded-[4rem] relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <feature.icon size={24} />
                </div>
                <h4 className="text-xl font-bold dark:text-white">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Industry Focus Section */}
        <div className="mt-32 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-bold dark:text-white mb-8">Serving Every Sector</h2>
            <div className="space-y-6">
              {[
                { title: 'Beauty & Wellness', items: ['Salons', 'Spas', 'Fitness Centers'] },
                { title: 'Specialty Retail', items: ['Boutiques', 'Gift Shops', 'Pet Stores'] },
                { title: 'Quick Service', items: ['Cafes', 'Bakeries', 'Food Trucks'] }
              ].map((sector, idx) => (
                <div key={idx} className="p-6 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all cursor-default group">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-bold dark:text-white">{sector.title}</h4>
                    <span className="text-xs text-gray-500">{sector.items.join(' • ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-primary/10 p-1 rounded-[3rem]">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" 
              alt="Retail Environment" 
              className="rounded-[2.8rem] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
