import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ContactHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={containerRef} className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0B0B0D]">
      {/* Cinematic Ambient Glow */}
      <motion.div style={{ y: yParallax }} className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(198,167,94,0.15)_0%,transparent_70%)] blur-[100px]" />
      </motion.div>

      {/* Decorative architectural tracking lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-[#C6A75E]/50 to-transparent" />
        <div className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-[#C6A75E]/50 to-transparent" />
        <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent" />
      </div>

      {/* Typography Composition */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-20 text-center flex flex-col items-center pt-24">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-[#C6A75E]" />
          <span className="text-[#C6A75E] text-xs font-semibold uppercase tracking-[0.4em]">
            Connect
          </span>
          <div className="w-12 h-px bg-[#C6A75E]" />
        </motion.div>

        <motion.div
          style={{ opacity: yOpacity }}
          className="relative mb-10 flex flex-col items-center"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[56px] md:text-[80px] lg:text-[110px] text-[#F5F5F5] font-light leading-[0.95] tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Initiate
            </motion.h1>
          </div>
          <div className="overflow-hidden -mt-2 md:-mt-4">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[56px] md:text-[80px] lg:text-[110px] text-[#C6A75E] italic leading-[0.95] tracking-tight pr-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Dialogue.
            </motion.h1>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[#B8B8B8] max-w-xl text-center text-sm md:text-base font-light leading-relaxed tracking-wide"
        >
          To orchestrate the extraordinary requires absolute synergy. Reach out to our executive design team to commence the meticulous planning of your vision.
        </motion.p>
      </div>

    </section>
  );
}
