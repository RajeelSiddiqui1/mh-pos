import React from 'react';
import { ShoppingCart, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCard = ({ name, price, category, image, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="m3-card group overflow-hidden"
    >
      <div className="relative aspect-square mb-6 bg-surface-variant dark:bg-dark-surface-variant rounded-[24px] overflow-hidden flex items-center justify-center p-8">
        <motion.img 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          src={image} 
          alt={name} 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full backdrop-blur-md border border-primary/20">
            {category}
          </span>
        </div>
      </div>
      
      <div className="space-y-3 px-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold dark:text-white text-on-surface">{name}</h3>
            <p className="text-sm text-on-surface-variant dark:text-dark-on-surface-variant line-clamp-2 mt-1">{description}</p>
          </div>
          <span className="text-xl font-bold text-primary">${price}</span>
        </div>
        
        <div className="flex gap-2 pt-2">
          <button className="flex-1 btn-primary py-2.5 flex items-center justify-center space-x-2 text-sm">
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
          <button className="w-12 h-11 border border-on-surface-variant/20 dark:border-white/10 rounded-full flex items-center justify-center text-on-surface-variant dark:text-dark-on-surface-variant hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <Info size={18} />
          </button>
        </div>
      </div>
    </motion.div>

  );
};

export default ProductCard;
