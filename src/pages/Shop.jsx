import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    { name: 'Solo Pro X1', price: '599', category: 'Terminals', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400', description: 'Dual-screen POS system with integrated biometric security.' },
    { name: 'Eco-Pay Handheld', price: '450', category: 'Handhelds', image: 'https://images.unsplash.com/photo-1556742205-e3b769206c9a?auto=format&fit=crop&q=80&w=400', description: 'Sleek, lightweight mobile terminal with 4G connectivity.' },
    { name: 'Hub-S2 Controller', price: '299', category: 'Terminals', image: 'https://images.unsplash.com/photo-1512446816042-444d641267d4?auto=format&fit=crop&q=80&w=400', description: 'Centralized management hub for multi-terminal synchronization.' },
    { name: 'Vision-Scan 360', price: '175', category: 'Handhelds', image: 'https://images.unsplash.com/photo-1510511336377-ad96cbdcf9c4?auto=format&fit=crop&q=80&w=400', description: 'Omnidirectional barcode and QR scanner with rapid response.' },
    { name: 'Retail Station V3', price: '1299', category: 'Terminals', image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=400', description: 'The complete counter-top solution for large scale retail.' },
    { name: 'Go-Sync Mini', price: '120', category: 'Handhelds', image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=400', description: 'Pocket-sized card reader for pop-up shops and markets.' }
  ];

  const filteredProducts = products.filter(p => 
    (filter === 'All' || p.category === filter) && 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = ['All', 'Terminals', 'Handhelds'];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold dark:text-white mb-8">Hardware Gallery</h1>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="flex bg-secondary-lighter p-1 rounded-2xl border border-white/5 w-full lg:w-auto overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                    filter === cat 
                      ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                      : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="text" 
                placeholder="Search devices..." 
                className="w-full pl-12 pr-4 py-4 rounded-2xl text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-32">
            <p className="text-gray-500 text-xl font-medium">No products found for "{searchQuery}"</p>
            <button onClick={() => {setFilter('All'); setSearchQuery('')}} className="mt-4 text-primary font-bold">Clear Filters</button>
          </div>
        )}
        
        <div className="mt-24 p-12 glass-morphism dark:glass-morphism-dark rounded-[3rem] flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold dark:text-white">Business Bundle Discounts</h2>
            <p className="text-gray-500 max-w-lg">Ordering more than 5 units? Talk to our sales team for custom volume pricing and migration assistance.</p>
          </div>
          <button className="btn-primary px-10 py-4 whitespace-nowrap">
            Request Volume Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
