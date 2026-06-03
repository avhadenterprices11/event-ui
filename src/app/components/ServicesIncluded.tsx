import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
}

interface ServicesIncludedProps {
  services: Service[];
}

export function ServicesIncluded({ services }: ServicesIncludedProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative bg-[#0B0B0D] py-32 md:py-48 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#C6A75E]" />
              <span className="text-[#C6A75E] text-xs font-semibold uppercase tracking-[0.3em]">
                Full Spectrum
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-[#F5F5F5] font-light tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Integrated Services.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#B8B8B8] font-light leading-relaxed max-w-sm md:text-right"
          >
            A comprehensive approach to luxury event conception, ensuring every logistical nuance and visual detail is masterfully governed.
          </motion.p>
        </div>

        {/* Expansive Typographic List */}
        <div className="border-t border-white/10">
          {services.map((service, index) => {
             const rowRef = useRef(null);
             const rowInView = useInView(rowRef, { once: true, margin: '-50px' });

             return (
               <motion.div
                 key={service.title}
                 ref={rowRef}
                 initial={{ opacity: 0, y: 20 }}
                 animate={rowInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                 className="group relative flex flex-col md:flex-row md:items-center py-10 md:py-14 border-b border-white/10 cursor-default"
               >
                 {/* Gold Sweep on Hover */}
                 <div className="absolute inset-0 bg-gradient-to-r from-[#C6A75E]/5 to-transparent scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                 
                 <div className="relative z-10 flex flex-col md:flex-row w-full gap-6 md:gap-16">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-8 md:w-5/12">
                       <Check className="w-5 h-5 text-[#C6A75E]/80 group-hover:text-[#C6A75E] transition-colors" />
                       <h3 
                          className="text-2xl md:text-3xl text-white font-light tracking-tight transition-colors duration-500 group-hover:text-[#C6A75E]"
                          style={{ fontFamily: 'var(--font-heading)' }}
                       >
                          {service.title}
                       </h3>
                    </div>

                    {/* Description Block */}
                    <div className="flex items-center justify-between md:w-7/12 pl-12 md:pl-0">
                       <p className="text-[#A0A0A0] text-sm md:text-base font-light leading-relaxed max-w-lg transition-colors duration-500 group-hover:text-white">
                         {service.description}
                       </p>
                       <ArrowRight className="hidden lg:block w-5 h-5 text-[#C6A75E] opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                 </div>
               </motion.div>
             );
          })}
        </div>

      </div>
    </section>
  );
}
