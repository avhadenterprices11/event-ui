import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function VenuesHeroBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[70vh] overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#0B0B0D]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1769018508631-fe4ebf3fba3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYWxscm9vbSUyMGNoYW5kZWxpZXIlMjBlbGVnYW50fGVufDF8fHx8MTc3MjI3Mjg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury Venue"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 h-full flex items-center justify-center"
      >
        <div className="max-w-[1440px] mx-auto px-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-[#C6A75E] text-sm tracking-[0.2em] uppercase font-medium">
              OUR VENUES
            </p>
            <h1 className="text-[64px] leading-[1.1] tracking-tight">
              Iconic Spaces for Iconic Celebrations
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Handpicked luxury venues curated for unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
