import { motion } from 'motion/react';
import { Zap, Wrench, FileCheck, LayoutPanelTop, Phone, Battery, Camera, Shield, Lock, Bell } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Electrical Installation',
    description:
      'Protect your property and loved ones with professional electrical installation. Our certified electricians handle new builds, rewires, lighting, and circuits to the highest standards—ensuring safety, compliance, and peace of mind for years to come.',
    image: '/images/electrical/electrical_4.png',
  },
  {
    icon: Wrench,
    title: 'Fault Finding & Repairs',
    description:
      'Don\'t let electrical problems put your safety at risk. Our expert diagnosis quickly identifies issues—from tripping breakers to power failures—and we fix them right the first time, minimizing downtime and keeping your property safe.',
    image: '/images/electrical/electrical_2.png',
  },
  {
    icon: FileCheck,
    title: 'COC & Compliance',
    description:
      'Essential for property sales, rentals, and insurance. Our thorough inspections and certifications ensure your electrical systems meet all legal requirements, protecting your investment and giving buyers, tenants, and insurers confidence.',
    image: '/images/electrical/electrical_3.png',
  },
  {
    icon: LayoutPanelTop,
    title: 'DB & Distribution',
    description:
      'Your distribution board is the heart of your electrical system. We upgrade and maintain DBs to handle modern loads safely, with proper labeling and protection. Future-proof your property and prevent costly failures before they happen.',
    image: '/images/electrical/electrical_4.png',
  },
  {
    icon: Battery,
    title: 'UPS & Backup Power',
    description:
      'Never lose critical systems during outages. Our UPS and backup power solutions keep offices, servers, and essential equipment running smoothly. Protect your business continuity and data with reliable backup power designed for your needs.',
    image: '/images/electrical/electrical_5.png',
  },
  {
    icon: Camera,
    title: 'CCTV Cameras',
    description:
      'Protect what matters most with professional CCTV installation. From single cameras to comprehensive systems with remote viewing, we provide complete security solutions that deter crime and give you peace of mind, day and night.',
    image: '/images/security/security_1.png',
  },
  {
    icon: Shield,
    title: 'Electric Fencing',
    description:
      'Secure your perimeter with compliant electric fencing. We install and maintain energisers, wiring, and warning systems that meet safety standards while providing effective boundary protection for your home or business.',
    image: '/images/security/security_2.png',
  },
  {
    icon: Lock,
    title: 'Gate Automation',
    description:
      'Convenience meets security with automated gate systems. We install, repair, and maintain sliding and swing gates for residential and commercial properties, ensuring reliable access control that enhances both safety and convenience.',
    image: '/images/security/security_7.png',
  },
  {
    icon: Bell,
    title: 'Alarm Systems',
    description:
      'Your first line of defense against intruders. From basic burglar alarms to integrated security systems, we design and install solutions that protect your property and alert you immediately when something\'s wrong.',
    image: '/images/security/security_4.png',
  },
  {
    icon: Phone,
    title: 'Emergency Callouts',
    description:
      'Electrical emergencies can\'t wait. When power fails or safety is compromised, our rapid response team is available 24/7. We arrive quickly, diagnose accurately, and fix safely—because your safety and peace of mind are our priority.',
    image: '/images/security/security_5.png',
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50/30 rounded-full blur-3xl -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-6">
            01 — Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Professional electrical services
            <span className="text-orange-500">
              {' '}you can trust
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Your safety and compliance matter. We provide certified electrical installation, repairs, and security solutions—all backed by registered electricians, transparent pricing, and COC compliance. One trusted team for all your electrical needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <motion.div 
                className="h-full bg-white rounded-3xl border-2 border-gray-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 20px 60px rgba(249, 115, 22, 0.15)",
                  borderColor: "#F97316"
                }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <service.icon className="text-white" size={28} />
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                
                  {/* Animated read more link */}
                  <div className="mt-auto pt-4 border-t border-gray-100 group-hover:border-orange-500/30 transition-colors">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-4 transition-all"
                    >
                      Read more
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
