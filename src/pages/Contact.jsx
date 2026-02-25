import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold dark:text-white mb-6">Get in Touch.</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Our team at MHPOS SOLUTIONS is ready to help you optimize your business operations. Reach out today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-morphism dark:glass-morphism-dark p-8 lg:p-12 rounded-[3rem]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold dark:text-gray-400 uppercase tracking-tight">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold dark:text-gray-400 uppercase tracking-tight">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold dark:text-gray-400 uppercase tracking-tight">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="How can we help?" 
                  className="w-full resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full py-5 flex items-center justify-center space-x-2 text-lg"
              >
                <span>SEND MESSAGE</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 glass-morphism dark:glass-morphism-dark rounded-3xl space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold dark:text-white">Phone</h4>
                <p className="text-gray-500">+1 (416) 555-0198</p>
              </div>
              <div className="p-8 glass-morphism dark:glass-morphism-dark rounded-3xl space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold dark:text-white">Email</h4>
                <p className="text-gray-500 whitespace-nowrap">hello@mhpos.solutions</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-80 rounded-[3rem] overflow-hidden border border-white/5 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.263884877797!2d-79.38531102341957!3d43.65107057110221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cd70669ba1%3A0x66c84307ef07e35b!2s100%20Queen%20St%20W%2C%20Toronto%2C%20ON%20M5H%202N2!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-black/60 backdrop-blur-md border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  100 Queen St W, Toronto, ON M5H 2N2
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              {[Linkedin, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
