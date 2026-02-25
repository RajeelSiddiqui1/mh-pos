import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, ArrowRight, Play } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const topProducts = [
    {
      name: 'Solo Pro X1',
      price: '599',
      category: 'Mobile Solution',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400',
      description: 'Ultra-fast wireless processing with all-day battery life and 5G support.'
    },
    {
      name: 'Retail Station V3',
      price: '1299',
      category: 'Desktop POS',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=400',
      description: 'The complete counter-top solution with integrated thermal printer and customer display.'
    },
    {
      name: 'Mobile Go',
      price: '299',
      category: 'Handheld',
      image: 'https://images.unsplash.com/photo-1556742205-e3b769206c9a?auto=format&fit=crop&q=80&w=400',
      description: 'Compact Bluetooth reader that pairs perfectly with your tablet or smartphone app.'
    }
  ];

  const features = [
    { icon: Zap, title: 'High Performance', desc: 'Ultra-low latency processing ensures your checkout lines never slow down.' },
    { icon: Shield, title: 'Bank-Grade Security', desc: 'Every transaction is encrypted with the latest industry standards to protect your data.' },
    { icon: Globe, title: 'Born in Canada', desc: 'Headquartered in Toronto, we understand the local tax compliance and regulations.' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full -z-10 animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-morphism dark:glass-morphism-dark border border-white/10"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
                <span className="text-sm font-medium dark:text-gray-300">Serving Canadian Businesses Coast to Coast</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold leading-tight dark:text-white"
              >
                Next-Generation <br />
                <span className="text-primary italic">POS Solutions</span> <br />
                for Small Businesses.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-500 max-w-2xl leading-relaxed mx-auto lg:mx-0"
              >
                Streamline your operations with our robust, secure, and modern payment terminals designed for the evolving retail landscape.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:row items-center justify-center lg:justify-start gap-4"
              >
                <button className="btn-primary flex items-center space-x-2 px-8 py-4">
                  <span>Get Started Now</span>
                  <ArrowRight size={20} />
                </button>
                <button className="btn-outline flex items-center space-x-2 px-8 py-4">
                  <Play size={20} className="fill-current" />
                  <span>See How it Works</span>
                </button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="flex-1 relative"
            >
              <div className="relative z-10 p-4 glass-morphism dark:glass-morphism-dark rounded-[3rem] rotate-3 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800" 
                  alt="POS Solution" 
                  className="rounded-[2.5rem]"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/30 blur-3xl rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>


      
      {/* Featured Products */}
      <section className="py-24 bg-surface-variant dark:bg-dark-surface-variant/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 space-y-4 md:space-y-0 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-bold dark:text-white text-on-surface mb-4">Top POS Systems</h2>
              <p className="text-on-surface-variant dark:text-dark-on-surface-variant max-w-xl font-medium">Choose from our curated selection of industry-leading hardware designed for every business environment.</p>
            </div>
            <button className="text-primary font-bold flex items-center space-x-2 hover:translate-x-2 transition-transform">
              <span>View All Devices</span>
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden bg-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold dark:text-white text-on-surface mb-6">Built for Success, Designed for Growth</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-6"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-[24px] flex items-center justify-center text-primary mx-auto">
                  <feature.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold dark:text-white text-on-surface">{feature.title}</h3>
                <p className="text-on-surface-variant dark:text-dark-on-surface-variant leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-morphism dark:glass-morphism-dark p-12 lg:p-20 rounded-[4rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[150px] -z-10" />
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 dark:text-white">Ready to upgrade your system?</h2>
            <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto italic">
              "Joining MHPOS was the best decision for my bakery. The setup was seamless and the support is unmatched." - Sarah, Toronto
            </p>
            <div className="flex flex-col sm:row items-center justify-center gap-6">
              <button className="btn-primary text-lg px-12 py-5">
                Contact Our Experts
              </button>
              <button className="text-gray-400 font-bold hover:text-white">
                Learn more about pricing →
              </button>
            </div>
            <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-30 grayscale">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-10" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Interac_logo.svg" alt="Interac" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg" alt="Apple Pay" className="h-8" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
