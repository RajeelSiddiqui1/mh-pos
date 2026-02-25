import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Users, MapPin, Milestone } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2018', title: 'The Foundation', desc: 'MHPOS was founded with a vision to simplify retail hardware integration in Toronto.' },
    { year: '2020', title: 'Cloud Evolution', desc: 'Launched our first fully integrated cloud dashboard for multi-store management.' },
    { year: '2021', title: 'Nationwide Scale', desc: 'Reached 5,000+ active merchants across all Canadian provinces.' },
    { year: '2023', title: 'Next-Gen Launch', desc: 'Introduced the Solo Pro series, setting new standards for mobile processing.' }
  ];

  const team = [
    { name: 'Michael Hernandez', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
    { name: 'Sarah Jenkins', role: 'Head of Customer Success', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
    { name: 'David Chen', role: 'CTO', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { name: 'Emma Wilson', role: 'Regional Manager (Montreal)', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200' }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="flex items-center space-x-2 text-primary font-bold">
                <Target size={24} />
                <span className="uppercase tracking-widest text-sm">Our Mission</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold dark:text-white leading-tight">
                Empowering Local <br /> Businesses to Grow.
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed italic border-l-4 border-primary pl-6">
                "To provide small and medium-sized businesses with robust, intuitive, and scalable POS solutions that streamline operations and enhance customer experiences. We believe technology should be a bridge, not a barrier."
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden mt-12">
                <img src="https://images.unsplash.com/photo-1413808153413-a0e27177747e?auto=format&fit=crop&q=80&w=400" alt="Office" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-primary/20 rounded-3xl overflow-hidden p-1">
                 <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" alt="Meetings" className="w-full h-full object-cover rounded-[1.4rem]" />
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-primary font-bold mb-4">
               <Milestone size={24} />
               <span className="uppercase tracking-widest text-sm">Our History</span>
            </div>
            <h2 className="text-4xl font-bold dark:text-white">Our Milestones</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-white/5 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((ms, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className={`${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-4xl font-bold text-primary mb-2 block">{ms.year}</span>
                      <h4 className="text-2xl font-bold dark:text-white mb-4">{ms.title}</h4>
                      <p className="text-gray-500 max-w-sm mx-auto md:mx-0">{ms.desc}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full border-4 border-black z-10 hidden md:block" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team & Locations */}
        <section>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-primary font-bold mb-4">
               <Users size={24} />
               <span className="uppercase tracking-widest text-sm">The People</span>
            </div>
            <h2 className="text-4xl font-bold dark:text-white mb-6">Expert Team</h2>
            
            <div className="flex flex-wrap justify-center gap-4 text-gray-500 font-medium">
               {['Toronto HQ', 'Vancouver Office', 'Montreal Support Hub'].map(loc => (
                 <span key={loc} className="flex items-center gap-1 border border-white/10 px-4 py-2 rounded-full">
                   <MapPin size={16} className="text-primary" /> {loc}
                 </span>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-morphism dark:glass-morphism-dark p-6 rounded-3xl text-center group"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-primary/20 group-hover:border-primary transition-all">
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-bold dark:text-white">{member.name}</h4>
                <p className="text-primary font-medium text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
