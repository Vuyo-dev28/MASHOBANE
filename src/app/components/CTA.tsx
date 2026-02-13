import { motion } from 'motion/react';
import { Facebook, Twitter, PhoneCall, Mail } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 relative">
              <span className="absolute -left-6 top-0 w-3 h-3 rounded-full bg-orange-500"></span>
              We would love to hear from you.
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Get a free quote for your electrical job. We’re here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Contact us</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-600 mb-1">Our Email</p>
                    <motion.a 
                    href="mailto:mashobaneelectricaltech@gmail.com" 
                    whileHover={{ x: 5 }}
                    className="text-orange-500 hover:underline inline-block"
                  >
                      mashobaneelectricaltech@gmail.com
                    </motion.a>
                  </div>
                  <div className="text-gray-600">
                    <p>Call Us: +27 69 573 8655</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Follow us</h3>
                <div className="flex flex-col gap-2">
                  <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-2">
                    Facebook <span>→</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-2">
                    Twitter <span>→</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Services</h3>
                <div className="flex flex-col gap-2 text-gray-600">
                  {['Electrical Installation', 'Fault Finding & Repairs', 'COC & Compliance', 'UPS & Backup', 'CCTV', 'Electric Fencing', 'Gate Automation', 'Alarm Systems', 'Emergency Callouts'].map((service, index) => (
                    <motion.a 
                      key={service}
                      href="#services" 
                      whileHover={{ x: 5, color: '#F97316' }}
                      transition={{ delay: index * 0.05 }}
                      className="transition-colors"
                    >
                      {service}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Get a Free Electrical Quote</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name *"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-full bg-orange-500 text-white py-3 text-lg font-semibold hover:bg-orange-600 hover:shadow-xl transition-all duration-300"
                >
                  Get My Free Quote →
                </motion.button>
              </form>
              <p className="mt-4 text-sm text-gray-500">
                Prefer email? Reach us at mashobaneelectricaltech@gmail.com.
              </p>
              <a href="mailto:mashobaneelectricaltech@gmail.com" className="text-orange-500 hover:underline">
                mashobaneelectricaltech@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
