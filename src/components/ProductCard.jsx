import React from 'react';
import { ArrowRight, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ProductCard = ({ name, price, category, image, description, index = 0 }) => {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      className="pos-card overflow-hidden flex flex-col group"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-800 dark:to-slate-700 overflow-hidden rounded-t-[20px]">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span
            className="px-3 py-1 text-xs font-bold rounded-full"
            style={{
              background: 'rgba(37, 99, 235, 0.10)',
              color: '#2563EB',
              border: '1px solid rgba(37, 99, 235, 0.18)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">{name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>
          <span className="text-lg font-bold text-blue-600 dark:text-blue-400 shrink-0">${price}</span>
        </div>

        <div className="flex gap-2 pt-1">
          <Link
            to="/contact"
            className="btn-primary flex-1 py-2.5 text-sm"
          >
            <span>Get a Quote</span>
            <ArrowRight size={15} />
          </Link>
          <Link
            to="/contact"
            className="w-11 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:border-blue-300 hover:text-blue-500 transition-all duration-200 shrink-0"
          >
            <Info size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
