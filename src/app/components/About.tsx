import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export function About() {
  const features = [
    '96% of our customers say they would refer us to friends and family—we earn trust through quality and transparency.',
    'Electrical installation, fault finding and repairs for residential, commercial and industrial.',
    'CCTV, electric fencing, gate automation, alarm systems and UPS backup—all from one team.',
    'Clear communication from quote through to completion and COC.',
    'There when you need us—repairs, upgrades and emergency callouts.',
    'Registered electricians and quality work so your installation is safe and compliant.',
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            <div className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-6">
              02 — About Us
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              We're here to
              <span className="text-orange-500">
                {' '}get it right
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              MASHOBANE does all electrical—installation, fault finding, commercial and industrial.
              We also do UPS backup, CCTV, electric fencing, gate automation and alarm systems. We believe
              everyone deserves safe, reliable power—no pressure, no hidden costs, just honest
              advice and quality work from certified electricians.
            </p>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              "We started MASHOBANE over 6 years ago to offer trusted electrical work
              you can rely on. We wanted to be the contractor we'd want ourselves: transparent
              pricing, certified work, and COC when you need it. We're not just fixing wiring—we're
              keeping your property safe and compliant."
            </p>
            <p className="text-base font-semibold text-gray-900 mb-6">
              What we stand for:
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-orange-500 flex-shrink-0" size={24} />
                  <span className="text-gray-600 text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 hover:shadow-2xl transition-all duration-300 text-lg inline-block"
            >
              + Become a Client
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-100"
              whileHover={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)" }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1080&h=720&fit=crop"
                alt="MASHOBANE Electrical Services team - Certified electricians providing professional electrical services"
                className="w-full h-full object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Images Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 mb-16"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-gray-100"
              >
                <motion.img
                  src={image}
                  alt={`Electrical work project ${index + 1} by MASHOBANE Electrical Services - Professional electrical installation`}
                  className="w-full h-64 object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-8">Some Number About Us</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Homes and businesses we\'ve wired or repaired' },
              { value: '6+', label: 'Years of electrical experience' },
              { value: '100%', label: 'COC compliant work' },
              { value: '24/7', label: 'Emergency callouts when you need us' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
