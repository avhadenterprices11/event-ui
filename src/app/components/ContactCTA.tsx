import { motion, useInView } from 'motion/react';
import { Calendar } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router';

export function ContactCTA() {
  const ctaRef = useRef(null);
  const isInView = useInView(ctaRef, { once: true, margin: '-100px' });

  return (
    <section ref={ctaRef} className="relative py-32 md:py-48 bg-[#0B0B0D] overflow-hidden border-t border-white/5">
      
      {/* Immersive Structural Typography Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[300px] font-serif leading-none tracking-tighter text-white/[0.02] whitespace-nowrap select-none pointer-events-none" style={{ fontFamily: 'var(--font-heading)' }}>
         CONNECT
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Aesthetic Motif */}
          <div className="w-1 h-12 bg-gradient-to-b from-[#C6A75E] to-transparent mb-8" />
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-[#F5F5F5] font-light tracking-tight mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            Prefer a Private Consultation?
          </h2>

          <p className="text-[#A0A0A0] text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-12">
            Schedule a confidential, one-on-one dialogue with our executive strategic architects to crystallize your vision and outline logistics securely.
          </p>

          <Link to="/quote">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-6 px-4 py-2 rounded-full border border-white/20 bg-transparent pr-8 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#C6A75E] transform scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              
              <div className="relative z-10 w-12 h-12 rounded-full border border-white/10 group-hover:border-[#0B0B0D]/20 bg-[#111114] group-hover:bg-[#0B0B0D]/10 flex items-center justify-center transition-colors duration-500">
                <Calendar className="w-5 h-5 text-[#C6A75E] group-hover:text-[#0B0B0D] transition-colors duration-500" />
              </div>
              
              <span className="relative z-10 text-white/80 group-hover:text-[#0B0B0D] text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500">
                Book Assignment
              </span>
            </motion.button>
          </Link>

        </motion.div>
      </div>
    </section>
  );
}
