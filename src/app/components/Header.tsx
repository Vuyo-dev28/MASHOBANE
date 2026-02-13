import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200" role="banner">
      <nav className="max-w-7xl mx-auto px-6 py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            aria-label="MASHOBANE Electrical Services Home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img 
              src="/images/logo_2.png" 
              alt="MASHOBANE Electrical Services - Professional Electricians in South Africa" 
              className="h-12 w-auto object-contain"
              width="120"
              height="48"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-6"
          >
            <a 
              href="#services" 
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm font-medium"
            >
              Services
            </a>
            <a 
              href="#about" 
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm font-medium"
            >
              About Us
            </a>
            <a 
              href="#clients" 
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm font-medium"
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm font-medium"
            >
              Contact Us
            </a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 hover:shadow-xl transition-all duration-300 text-sm"
            >
              + Get a Free Quote
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-gray-200 flex flex-col gap-4"
            >
              <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
                About Us
              </a>
              <a href="#clients" className="text-gray-700 hover:text-gray-900 transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contact Us
              </a>
              <button className="px-6 py-2.5 bg-orange-500 text-white font-semibold rounded-full">
                + Get a Free Quote
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
