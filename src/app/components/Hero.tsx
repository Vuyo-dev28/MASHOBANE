import { motion } from 'motion/react';
import { ArrowRight, PhoneCall, Zap, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Electrical-themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-white" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-orange-500/10 rounded-full text-sm text-orange-500 border border-orange-500/20"
              >
                <Zap size={16} />
                We do everything electrical
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight text-gray-900"
              >
                WE DO EVERYTHING
                <br />
                <span className="relative inline-block">
                  <span className="absolute -left-8 top-0 w-12 h-12 rounded-full border-2 border-orange-500/50 flex items-center justify-center bg-orange-500/10">
                    <Zap className="text-orange-500" size={20} />
                  </span>
                  <span className="relative text-orange-500">ELECTRICAL</span>
                  <span className="inline-block w-1 h-12 bg-gray-900 ml-2 animate-pulse"></span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center text-white text-xs font-bold">C</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <span className="text-lg font-bold text-gray-900">4.9</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">GOLD VERIFIED</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed"
              >
                Electrical installation, fault finding, commercial & industrial. Plus UPS backup, CCTV, electric fencing, gate automation & alarm systems. Safe, certified, reliable.
                <br />
                <span className="text-xl md:text-2xl font-bold text-gray-900 mt-3 block">
                  +27 69 573 8655
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                {['Certified Electricians', 'Free Quotes', 'COC Compliant'].map((badge, i) => (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm"
                  >
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm font-medium text-gray-700">{badge}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 items-center"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 hover:shadow-2xl transition-all duration-300 text-lg flex items-center gap-2"
                >
                  Get a Free Quote
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </motion.a>
                <motion.a
                  href="tel:+27784265433"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-gray-900 rounded-full hover:shadow-xl hover:border-orange-500 transition-all duration-300 text-lg border-2 border-gray-200 flex items-center gap-2"
                >
                  <PhoneCall className="group-hover:rotate-12 transition-transform duration-300" size={20} />
                  +27 69 573 8655
                </motion.a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                whileHover={{ boxShadow: "0 25px 60px rgba(0, 0, 0, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/images/electrical/electrical_1.png"
                  alt="Electrician at work"
                  className="w-full h-full object-contain bg-gray-100"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-xs uppercase tracking-wider opacity-90">Projects Done</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">6+</div>
                      <div className="text-xs uppercase tracking-wider opacity-90">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-xs uppercase tracking-wider opacity-90">Compliant</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
