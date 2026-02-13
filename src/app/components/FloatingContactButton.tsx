import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, X } from 'lucide-react';

export function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+27695738655';
  const whatsappNumber = '27695738655'; // Without + for WhatsApp link

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden min-w-[200px]"
          >
            <div className="p-2">
              <motion.a
                href={`tel:${phoneNumber}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <Phone size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Call Us</div>
                  <div className="text-sm text-gray-600">+27 69 573 8655</div>
                </div>
              </motion.a>
              
              <motion.a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-50 transition-colors group mt-2"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <MessageCircle size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">WhatsApp</div>
                  <div className="text-sm text-gray-600">Message us</div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          delay: 1,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-3 bg-orange-500 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-orange-600 transition-all duration-300 font-semibold"
      >
        {isOpen ? (
          <X size={20} />
        ) : (
          <>
            <motion.div
              animate={{ 
                rotate: isOpen ? 0 : [0, 10, -10, 10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: isOpen ? 0 : Infinity,
                repeatDelay: 3
              }}
            >
              <Phone size={20} />
            </motion.div>
            <span className="hidden sm:inline-block">Contact Us</span>
            <MessageCircle size={20} className="sm:hidden" />
          </>
        )}
      </motion.button>
    </div>
  );
}
