import { motion, AnimatePresence, useInView } from 'motion/react';
import { useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const planningSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Uncovering your vision, desires, and the unique narrative of your celebration.',
    image: 'https://images.unsplash.com/photo-1763553113391-a659bee36e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZWxlZ2FudCUyMHZlbnVlJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NzM0MDA2MTN8MA&ixlib=rb-4.1.0&q=80&w=1920',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Crafting bespoke aesthetic concepts that perfectly translate your dreams to reality.',
    image: 'https://images.unsplash.com/photo-1638275559239-82bfdb0d68c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNvbmZlcmVuY2UlMjBzZXR1cCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM0MDA2MTR8MA&ixlib=rb-4.1.0&q=80&w=1920',
  },
  {
    number: '03',
    title: 'Review',
    description: 'Meticulously reviewing logistics, vendors, and precise timelines for flawless execution.',
    image: 'https://images.unsplash.com/photo-1755704282977-340323fa52df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb24lMjBlbGVnYW50JTIwZGVjb3J8ZW58MXx8fHwxNzczNDAwNjE1fDA&ixlib=rb-4.1.0&q=80&w=1920',
  },
  {
    number: '04',
    title: 'Realize',
    description: 'The moment your masterpiece unfolds. You celebrate; we handle everything else.',
    image: 'https://images.unsplash.com/photo-1768488292764-8da1562789b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXN0aW5hdGlvbiUyMHdlZGRpbmclMjBiZWFjaCUyMHRyb3BpY2FsJTIwdmVudWV8ZW58MXx8fHwxNzczNDAwNjE2fDA&ixlib=rb-4.1.0&q=80&w=1920',
  },
];

export function RevealImagesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative bg-[#0B0B0D] py-24 md:py-32 min-h-[75vh] flex items-center overflow-hidden">
      
      {/* Background Image Crossfade System */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <ImageWithFallback 
                src={planningSteps[hoveredIndex].image} 
                alt={planningSteps[hoveredIndex].title}
                className="w-full h-full object-cover" 
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Elegant Gradient Overlays for contrast */}
        <div className="absolute inset-0 bg-[#0B0B0D]/50 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Header Block */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#C6A75E] uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
              Our Methodology
            </span>
            <h2 
              className="text-5xl md:text-6xl text-[#F5F5F5] font-light mb-6 leading-[1.1] tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Architecting<br /><i className="text-[#C6A75E]">Perfection</i>
            </h2>
            <p className="text-[#B8B8B8] text-lg leading-relaxed max-w-sm">
              We employ a meticulous four-step methodology to ensure your celebration transcends expectations.
            </p>
          </motion.div>
        </div>

        {/* Interactive List */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <div className="w-full">
            {planningSteps.map((step, index) => {
              const isActive = hoveredIndex === index;
              return (
                <div
                  key={step.number}
                  className="group cursor-pointer border-b border-white/10 overflow-hidden"
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-8 py-8 md:py-10 transition-transform duration-500"
                  >
                    <span 
                      className="text-2xl md:text-3xl font-mono font-light transition-colors duration-500"
                      style={{ color: isActive ? '#C6A75E' : 'rgba(255,255,255,0.2)' }}
                    >
                      {step.number}
                    </span>
                    
                    <div className="flex-1 transition-transform duration-[0.8s] ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col md:flex-row md:items-center justify-between group-hover:translate-x-4">
                      <h3 
                        className={`text-4xl md:text-6xl lg:text-7xl transition-colors duration-500 tracking-tight leading-none ${isActive ? 'text-white' : 'text-white/40'}`}
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {step.title}
                      </h3>

                      <motion.div 
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, width: isActive ? 'auto' : 0 }}
                        className="hidden md:block max-w-[280px] pl-8 overflow-hidden"
                      >
                        <p className="text-[#F5F5F5]/80 text-sm leading-relaxed truncate whitespace-normal line-clamp-2">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}