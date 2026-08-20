import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home',     path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact',  path: '/contact' },
];

const Navbar = () => {
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const location                  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-400 ${
        scrolled
          ? 'glass-strong shadow-lift'
          : 'glass'
      }`}
    >
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[72px] items-center">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-md transition-shadow duration-300 group-hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #6C3AFF 0%, #2C64F7 100%)',
                boxShadow:  '0 4px 16px rgba(108,58,255,0.45)',
              }}
            >
              <Zap size={18} className="fill-white" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              MH<span className="text-gradient">POS</span>
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg,#6C3AFF,#00D4FF)' }}
              >.</span>
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-violet-600 dark:text-violet-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, rgba(108,58,255,0.10), rgba(44,100,247,0.08))',
                        border: '1px solid rgba(108,58,255,0.18)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* ── Right Controls ── */}
          <div className="hidden md:flex items-center gap-3 pl-5 border-l border-violet-100 dark:border-violet-900/40">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <Link to="/contact" className="btn-primary py-2.5 px-5 text-sm">
              Get a Quote
            </Link>
          </div>

          {/* ── Mobile Controls ── */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-white hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Dropdown ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden glass-strong border-t border-violet-100/60 dark:border-violet-900/30"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-sm font-semibold rounded-2xl transition-all ${
                      isActive
                        ? 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-800/30'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-violet-50/60 dark:hover:bg-violet-900/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3 px-1">
                <Link
                  to="/contact"
                  className="btn-primary w-full py-3 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
