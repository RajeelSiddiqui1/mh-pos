import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, benefits, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="pos-card p-8 relative overflow-hidden flex flex-col group"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-36 h-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, rgba(37,99,235,0.10) 0%, rgba(79,70,229,0.10) 100%)',
          color: '#2563EB',
        }}
      >
        <Icon size={28} />
      </div>

      {/* Text */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
        {description}
      </p>

      {/* Benefits */}
      <ul className="space-y-2.5 mb-7">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
            <CheckCircle size={15} className="text-blue-500 shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className="flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-200 group/btn">
        <span>Learn More</span>
        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
      </button>
    </motion.div>
  );
};

export default ServiceCard;
