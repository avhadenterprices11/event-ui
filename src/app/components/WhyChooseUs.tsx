import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

const reasons = [
  {
    title: 'Uncompromising Excellence',
    description: 'Award-winning luxury event curation with meticulous attention to every refined detail.',
    category: 'Quality Assurance',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Bespoke Event Design',
    description: 'Exclusively tailored experiences crafted to reflect your unique vision and sophisticated taste.',
    category: 'Personalization',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Elite Industry Network',
    description: 'Access to premier venues, world-class vendors, and exclusive partnerships worldwide.',
    category: 'Connections',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Flawless Execution',
    description: 'Seamless orchestration of every element ensuring a stress-free, memorable celebration.',
    category: 'Precision',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=1200',
  },
];

export function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform for parallax on the large number
  const numberX = useTransform(x, [-200, 200], [-20, 20]);
  const numberY = useTransform(y, [-200, 200], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const goNext = () => setActiveIndex((prev) => (prev + 1) % reasons.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + reasons.length) % reasons.length);

  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = reasons[activeIndex];

  return (
    <section className="relative py-32 lg:py-60 bg-[#0B0B0D] overflow-hidden">
      {/* Background subtle gradient */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, #C6A75E 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-white">
        {/* Section Header */}
        <div className="mb-16 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#C6A75E]" />
              <span className="text-[#C6A75E] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Distinctive Edge</span>
            </div>
            <h2 className="text-5xl md:text-[80px] lg:text-[100px] text-[#F5F5F5] font-light leading-[1.1] lg:leading-[1] tracking-tighter" 
                style={{ fontFamily: 'var(--font-heading)' }}>
              WHY <span className="italic font-serif text-[#C6A75E]">Choose</span> US.
            </h2>
          </motion.div>
        </div>

        <div ref={containerRef} className="relative w-full" onMouseMove={handleMouseMove}>
          {/* Oversized background index */}
          <motion.div
            className="absolute -left-4 lg:-left-12 -top-10 lg:top-10 text-[15rem] md:text-[28rem] font-bold text-[#C6A75E]/[0.03] select-none pointer-events-none leading-none tracking-tighter z-0"
            style={{ x: numberX, y: numberY, fontFamily: 'var(--font-heading)' }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="block"
              >
                {String(activeIndex + 1).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content Pillar */}
            <div className="relative z-10 flex flex-col gap-10 lg:gap-12">
               {/* Progress & Category */}
               <div className="flex items-center gap-6 lg:gap-8">
                  <div className="flex-1 h-px bg-white/10 relative overflow-hidden">
                     <motion.div 
                        className="absolute left-0 top-0 h-full bg-[#C6A75E]"
                        animate={{ width: `${((activeIndex + 1) / reasons.length) * 100}%` }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                     />
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={activeIndex}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="text-[#C6A75E] text-[10px] uppercase font-bold tracking-[0.4em] text-right"
                    >
                      {current.category}
                    </motion.span>
                  </AnimatePresence>
               </div>

               {/* Title & Description */}
               <div className="space-y-6 lg:space-y-8 min-h-[480px] lg:min-h-[300px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6 }}
                      className="space-y-6 lg:space-y-8"
                    >
                      <h3 className="text-[10vw] sm:text-5xl lg:text-7xl font-light text-white leading-[1.1] lg:leading-[0.95] tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
                        {current.title}
                      </h3>
                      
                      {/* Mobile Image (Visible only on small screens inside the text block) */}
                      <div className="block lg:hidden w-full h-[250px] sm:h-[350px] rounded-[16px] overflow-hidden relative shadow-2xl border border-white/10">
                        <ImageWithFallback 
                          src={current.image} 
                          alt={current.title} 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 border border-white/10 rounded-[16px] pointer-events-none mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/60 via-transparent to-transparent pointer-events-none" />
                      </div>

                      <p className="text-gray-400 text-base sm:text-lg lg:text-2xl font-light leading-relaxed max-w-xl italic opacity-80">
                         "{current.description}"
                      </p>
                    </motion.div>
                  </AnimatePresence>
               </div>

               {/* Controls */}
               <div className="flex items-center gap-6 lg:gap-8">
                  <div className="flex gap-4">
                     <NavButton onClick={goPrev} direction="prev" />
                     <NavButton onClick={goNext} direction="next" />
                  </div>
                  <div className="flex gap-2">
                     {reasons.map((_, i) => (
                       <div 
                         key={i} 
                         className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? "bg-[#C6A75E] w-8" : "bg-white/10"}`} 
                       />
                     ))}
                  </div>
               </div>
            </div>

            {/* Right: Interactive Image Stack (Desktop Only) */}
            <div className="hidden lg:flex relative h-[600px] items-center justify-center">
               <div className="relative w-full h-full flex flex-col justify-between gap-3 lg:gap-0">
                  {reasons.map((reason, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: i === activeIndex ? 1.02 : 0.95,
                        opacity: i === activeIndex ? 1 : 0.4,
                        x: i === activeIndex ? 0 : 20,
                        filter: i === activeIndex ? "grayscale(0)" : "grayscale(1)",
                        zIndex: i === activeIndex ? 10 : 0
                      }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="relative h-[22%] w-full rounded-[16px] lg:rounded-2xl overflow-hidden border border-white/10 cursor-pointer shadow-lg"
                      onClick={() => setActiveIndex(i)}
                    >
                       <ImageWithFallback 
                         src={reason.image} 
                         alt={reason.title} 
                         className="w-full h-full object-cover"
                       />
                       {/* Spotlight sweep */}
                       {i === activeIndex && (
                         <motion.div 
                           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                           animate={{ x: ["-100%", "200%"] }}
                           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                         />
                       )}
                    </motion.div>
                  ))}
               </div>
               
               {/* Featured Accent (Large backdrop circle) */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#C6A75E]/5 rounded-full -z-10" />
            </div>
          </div>

          <div className="mt-20 lg:mt-40 pt-10 lg:pt-12 border-t border-white/5 opacity-40">
             <div className="flex flex-wrap gap-x-8 lg:gap-x-20 gap-y-6 uppercase text-[9px] lg:text-[10px] font-bold tracking-[0.4em] lg:tracking-[0.5em] text-white">
                {reasons.map(r => (
                  <span key={r.title} className={r === current ? "text-[#C6A75E]" : ""}>
                    {r.category}
                  </span>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NavButton({ onClick, direction }: { onClick: () => void; direction: 'next' | 'prev' }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group hover:border-[#C6A75E] transition-all"
    >
       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white group-hover:text-[#C6A75E] transition-colors">
          {direction === 'next' ? (
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          )}
       </svg>
    </motion.button>
  );
}
