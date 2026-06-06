import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const features = [
  {
    number: '01',
    title: 'Unmatched Excellence',
    description: 'An award-winning team committed to anticipating your needs, delivering the highest standards of luxury event architecture and discreet, flawless execution.',
  },
  {
    number: '02',
    title: 'Bespoke Artistry',
    description: 'Through an intimately personalized discovery process, our dedicated experts curate deeply bespoke experiences completely tailored to your unique signature style.',
  },
  {
    number: '03',
    title: 'Exquisite Details',
    description: 'We believe perfection lives within the nuances. Our hyper-meticulous attention to every auditory, visual, and culinary element ensures an unforgettable sensory journey.',
  },
];

export function WhyChooseEventsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative bg-[#111114] py-16 md:py-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C6A75E]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[#C6A75E] uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
            The Event Difference
          </span>
          <h2 
            className="text-5xl md:text-7xl mb-6 text-[#F5F5F5] font-light leading-tight" 
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Why Choose Us
          </h2>
          <div className="w-12 h-[1px] bg-[#C6A75E] mx-auto opacity-50" />
        </motion.div>

        {/* Features Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-b border-white/10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="py-8 md:py-12 md:px-12 flex flex-col items-center md:items-start text-center md:text-left group"
            >
              <div 
                className="text-[#C6A75E] text-8xl md:text-9xl font-light opacity-20 mb-8 font-serif transform transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:opacity-40"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {feature.number}
              </div>

              <h3 
                className="text-2xl md:text-3xl text-[#F5F5F5] font-light mb-6 tracking-wide"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {feature.title}
              </h3>

              <p className="text-[#B8B8B8] leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}