import { motion } from 'motion/react';

const testimonials = [
  {
    quote:
      'MASHOBANE did a wonderful job from start to finish. Professional, on time, and the rewire was done to standard. We got our COC with no issues. Highly recommend.',
    name: 'John Smith',
    project: 'Full House Rewire & COC',
  },
  {
    quote:
      'We use MASHOBANE for all our electrical work. They\'ve done repairs, DB upgrades, and COCs for our rentals. Always reliable and the quotes are fair.',
    name: 'Sarah Johnson',
    project: 'Repairs & Compliance',
  },
];

export function Projects() {
  return (
    <section id="clients" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-6">
            06 — What Our Clients Say
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Trusted by
            <span className="text-orange-500">
              {' '}homeowners & businesses
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from customers who chose MASHOBANE for their electrical work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-white border-2 border-gray-200 shadow-lg hover:border-orange-500 transition-all duration-500 p-10"
            >
              <motion.div 
                className="text-5xl text-orange-500 leading-none mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: index * 0.15 + 0.2,
                  type: "spring",
                  stiffness: 200
                }}
              >
                "
              </motion.div>
              <p className="text-base text-gray-700 leading-relaxed mb-6">{testimonial.quote}</p>
              
              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.project}</div>
                </div>
              </div>
              
              <motion.div 
                className="mt-6 h-1 bg-orange-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ 
                  delay: index * 0.15 + 0.4,
                  duration: 0.5
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
