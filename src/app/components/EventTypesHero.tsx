import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EventTypesHero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const transitionConfig = { duration: 1.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0B0B0D]"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 w-full h-full"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1920"
          alt="Premium venue background"
          className="w-full h-full object-cover"
        />
        {/* Premium Dark Gradient Overlays for readability and consistency */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/80 via-[#0B0B0D]/40 to-[#0B0B0D]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/70 via-transparent to-[#0B0B0D]/70" />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ opacity: opacityText, y: yText }}
        className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 text-center flex flex-col items-center pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionConfig, delay: 0.1 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-8 h-[1px] bg-[#C6A75E]" />
          <span className="text-[#C6A75E] text-xs md:text-sm tracking-[0.3em] uppercase font-semibold">
            Our Typologies
          </span>
          <div className="w-8 h-[1px] bg-[#C6A75E]" />
        </motion.div>

        <div className="relative mb-8 flex flex-col items-center">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ ...transitionConfig, delay: 0.2 }}
              className="text-[64px] md:text-[96px] lg:text-[120px] leading-[0.95] text-[#F5F5F5] font-light tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Signature
            </motion.h1>
          </div>
          <div className="overflow-hidden -mt-2 md:-mt-4">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ ...transitionConfig, delay: 0.3 }}
              className="text-[64px] md:text-[96px] lg:text-[120px] leading-[0.95] text-[#C6A75E] italic tracking-tight pr-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Celebrations.
            </motion.h1>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionConfig, delay: 0.5 }}
          className="text-[#B8B8B8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
        >
          From intimate gatherings to grand luxury affairs, we design unforgettable experiences tailored precisely to your vision.
        </motion.p>
      </motion.div>

      {/* Decorative base line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
