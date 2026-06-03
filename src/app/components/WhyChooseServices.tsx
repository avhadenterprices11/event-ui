import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Users, Sparkles } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Award,
    title: 'Unmatched Expertise',
    description: 'Over a decade of experience crafting extraordinary events for discerning clients worldwide.',
  },
  {
    id: 2,
    icon: Users,
    title: 'Personalized Service',
    description: 'Dedicated event managers who understand your vision and bring it to life with precision.',
  },
  {
    id: 3,
    icon: Sparkles,
    title: 'Luxury Partnerships',
    description: 'Exclusive access to premium vendors, venues, and resources for truly exceptional experiences.',
  },
];

export function WhyChooseServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-[140px] bg-[#0B0B0D]"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C6A75E]/5 blur-[150px] rounded-full" />

      <div className="max-w-[1440px] mx-auto px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Why Choose Us
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Excellence in every detail
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.id}
                className="text-center"
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
              >
                {/* Icon Container */}
                <motion.div
                  className="relative inline-flex items-center justify-center w-24 h-24 mb-8"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                >
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(198, 167, 94, 0.2) 0%, transparent 70%)',
                      filter: 'blur(20px)',
                    }}
                  />
                  
                  {/* Icon background */}
                  <div
                    className="relative flex items-center justify-center w-full h-full rounded-full border border-[#C6A75E]/30"
                    style={{
                      background: 'linear-gradient(135deg, rgba(198, 167, 94, 0.1) 0%, rgba(11, 11, 13, 0.5) 100%)',
                      boxShadow: '0 8px 32px rgba(198, 167, 94, 0.1)',
                    }}
                  >
                    <Icon className="w-10 h-10 text-[#C6A75E]" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Title */}
                <h3
                  className="text-[28px] leading-[1.3] mb-4 text-[#F5F5F5]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {feature.title}
                </h3>

                {/* Gold underline */}
                <div className="w-12 h-[1px] bg-[#C6A75E] mb-6 mx-auto" />

                {/* Description */}
                <p className="text-[#B8B8B8] text-base leading-relaxed max-w-[340px] mx-auto">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}