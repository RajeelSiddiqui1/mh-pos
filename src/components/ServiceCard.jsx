import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, benefits }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-morphism dark:glass-morphism-dark p-8 rounded-[2.5rem] relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[80px] group-hover:bg-primary/20 transition-all rounded-full" />
      
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
        <Icon size={32} />
      </div>
      
      <h3 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-3 mb-8">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-sm dark:text-gray-300 text-gray-600">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>
      
      <button className="flex items-center space-x-2 text-primary font-bold hover:translate-x-2 transition-transform">
        <span>Learn More</span>
        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
};

export default ServiceCard;
