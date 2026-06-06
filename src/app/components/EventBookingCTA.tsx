import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';

export function EventBookingCTA() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative bg-[#0B0B0D] py-20 md:py-28 overflow-hidden">
      {/* Immersive Dark Ambience Overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] opacity-20"
             style={{
               background: 'radial-gradient(ellipse at center, rgba(198,167,94,0.4) 0%, transparent 60%)',
             }}
        />
      </div>
      


      <div className="relative max-w-[1440px] mx-auto px-6 md:px-20 text-center z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center w-full"
        >
          {/* Tag */}
          <span className="text-[#C6A75E] text-xs font-semibold uppercase tracking-[0.4em] mb-8">
            Your Invitation Awaits
          </span>

          {/* Majestic Typography */}
          <h2
            className="text-[56px] md:text-[80px] lg:text-[100px] text-[#F5F5F5] mb-12 leading-[1.05] tracking-tight font-light"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to Design the <br />
            <i className="text-[#C6A75E]">Extraordinary?</i>
          </h2>

          {/* Premium CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <Link
              to="/quote"
              className="group relative inline-flex items-center justify-center px-14 py-6 rounded-full overflow-hidden"
            >
              {/* Background gradient block */}
              <div className="absolute inset-0 bg-[#111114] border border-[#C6A75E]/30 rounded-full transition-colors duration-500 group-hover:border-[#C6A75E]" />
              
              {/* Hover highlight wipe */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#C6A75E] to-[#E5C97A] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              
              {/* Button text */}
              <span className="relative z-10 text-[#C6A75E] font-medium text-sm tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-[#0B0B0D]">
                Request a Consultation
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >

            <p className="text-[#B8B8B8] text-sm uppercase tracking-widest font-light">
              Securing dates for exclusively curated 2026 events
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
