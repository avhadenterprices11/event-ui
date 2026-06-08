import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTASection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="py-0 bg-[#0B0B0D] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20 py-16 md:py-48">
        <div className="relative w-full rounded-[24px] overflow-hidden bg-[#111114]">
          {/* Background Image Parallax */}
          <div className="absolute inset-0 opacity-40">
            <motion.div
               animate={isInView ? { scale: 1.05 } : { scale: 1.15 }}
               transition={{ duration: 4, ease: "easeOut" }}
               className="w-full h-full"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1769018508631-fe4ebf3fba3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlbGVnYW50JTIwZXZlbnQlMjBiYWxscm9vbXxlbnwxfHx8fDE3NzM2NjU0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1920" 
                alt="Luxury event design" 
                className="w-full h-full object-cover mix-blend-luminosity" 
               />
            </motion.div>
            
            {/* Elegant gradient blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-[#111114]/80 to-[#111114]/30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#111114_100%)]" />
          </div>

          <div className="relative z-10 px-6 sm:px-8 py-16 md:py-32 flex flex-col items-center text-center">
             <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
             >
                <div className="flex items-center gap-4 justify-center mb-10">
                  <div className="w-12 h-[1px] bg-[#C6A75E]" />
                  <span className="text-[#C6A75E] text-xs font-semibold uppercase tracking-[0.3em] font-sans">
                     Your Next Chapter
                  </span>
                  <div className="w-12 h-[1px] bg-[#C6A75E]" />
                </div>

                <h2 
                   className="text-4xl sm:text-5xl md:text-[72px] lg:text-[88px] text-[#F5F5F5] font-light leading-[1.1] md:leading-[1.05] tracking-tight mb-8 md:mb-12"
                   style={{ fontFamily: 'var(--font-heading)' }}
                >
                   Let's Create Your<br/>
                   <i className="text-[#C6A75E]">Signature Experience</i>
                </h2>

                <Link
                  to="/quote"
                  className="group inline-flex items-center gap-3 md:gap-4 bg-[#C6A75E] text-[#0B0B0D] px-6 py-4 md:px-10 md:py-5 rounded-full overflow-hidden relative shadow-[0_10px_40px_rgba(198,167,94,0.3)] transition-transform duration-500 hover:scale-105 hover:shadow-[0_10px_60px_rgba(198,167,94,0.5)]"
                >
                   <div className="absolute inset-0 bg-[#E5C97A] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                   <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em]">Request Consultation</span>
                   <ArrowRight className="relative z-10 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <p className="mt-8 text-[#B8B8B8] font-light text-sm max-w-sm mx-auto">
                   Exclusive planning and impeccable execution tailored strictly for elite clients globally.
                </p>
             </motion.div>
          </div>

          {/* Thin internal border */}
          <div className="absolute inset-4 border border-[#F5F5F5]/10 rounded-[16px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
