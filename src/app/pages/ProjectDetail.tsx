import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { MoveRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ProjectDetail() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Hero Parallax
  const opacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const yParallax = useTransform(smoothProgress, [0, 0.3], [0, 150]);

  // Image Parallax
  const imageY1 = useTransform(smoothProgress, [0.1, 0.4], [50, -50]);
  const imageY2 = useTransform(smoothProgress, [0.4, 0.7], [50, -50]);

  return (
    <div ref={containerRef} className="bg-[#0B0B0D] selection:bg-white/20 select-none relative">
      
      {/* Ultra-subtle Film Grain */}
      <div 
        className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02] mix-blend-overlay" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* 1. HERO - Absolute Minimalism */}
      <section className="h-[100svh] w-full relative overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: yParallax }} className="absolute inset-[-5%] z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2400"
            alt="Lake Como"
            className="w-full h-full object-cover opacity-[0.65] grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/20 via-transparent to-[#0B0B0D]" />
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="relative z-10 text-center flex flex-col items-center justify-center h-full"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[80px] md:text-[140px] lg:text-[200px] font-thin text-white tracking-[-0.04em] leading-[0.85]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Julian <span className="font-serif italic text-white/50">&</span> <br/><span className="italic font-serif text-white">Elena.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="mt-12 text-white uppercase text-[9px] md:text-[10px] font-bold tracking-[0.6em]"
          >
            Villa del Balbianello, Italy
          </motion.div>
        </motion.div>
      </section>

      {/* 2. THE VISION - Image focused, single quote */}
      <section className="min-h-[100svh] flex items-center px-8 max-w-[1400px] mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center w-full">
          
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
             className="order-2 lg:order-1 max-w-lg"
          >
             <h2 className="text-5xl md:text-6xl text-white font-thin tracking-tighter mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
               The <i className="font-serif">Vision.</i>
             </h2>
             
             <p className="text-white/60 text-2xl md:text-3xl font-light leading-relaxed font-serif italic tracking-wide">
               "We wanted to disappear into the fog of the lake and emerge in a world of pure, white-mirrored light."
             </p>
          </motion.div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
             <motion.div
                style={{ y: imageY1 }}
                className="relative h-[50vh] lg:h-[70vh] aspect-[3/4] rounded-2xl overflow-hidden"
             >
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1600" 
                  alt="Concept" 
                  className="w-full h-full object-cover opacity-90" 
                />
             </motion.div>
          </div>
          
        </div>
      </section>

      {/* 3. METRICS - No icons, clean typography */}
      <section className="py-32 border-y border-white/[0.03]">
        <div className="max-w-[1200px] mx-auto px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 divide-x-0 md:divide-x divide-white/[0.03]">
              {[
                { label: 'Guests', val: '120' },
                { label: 'Days Crafted', val: '430' },
                { label: 'Services', val: '14' },
                { label: 'Scale', val: 'Elite' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-4 py-4"
                >
                  <h4 className="text-5xl md:text-6xl text-white font-thin tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
                    {stat.val}
                  </h4>
                  <p className="text-white/30 text-[9px] uppercase font-bold tracking-[0.4em]">{stat.label}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. THE EXECUTION - One stark sentence */}
      <section className="min-h-[100svh] flex items-center max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center w-full">
          
          <div className="flex justify-center lg:justify-start">
             <motion.div
                style={{ y: imageY2 }}
                className="relative h-[50vh] lg:h-[60vh] aspect-square rounded-2xl overflow-hidden"
             >
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1520113110599-278553644485?auto=format&fit=crop&q=80&w=1600" 
                  alt="Engineering" 
                  className="w-full h-full object-cover opacity-80" 
                />
             </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg"
          >
             <h2 className="text-5xl md:text-6xl text-white font-thin tracking-tighter mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
               The <i className="font-serif">Execution.</i>
             </h2>
             <p className="text-white/60 text-lg md:text-xl font-light leading-loose tracking-wide">
               Deploying over 4 tons of bespoke glass architecture without a single permanent fixture to the 18th-century stone.
             </p>
          </motion.div>
          
        </div>
      </section>

      {/* 5. THE MASTERPIECE - Just the image */}
      <section className="min-h-[100svh] flex items-center max-w-[1600px] mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
          className="space-y-12 w-full"
        >
          <div className="text-center">
             <h2 className="text-6xl md:text-8xl text-white font-thin tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
               The <i className="font-serif">Masterpiece.</i>
             </h2>
          </div>
          
          <div className="relative h-[40vh] lg:h-[60vh] w-full rounded-2xl overflow-hidden">
             <ImageWithFallback 
               src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2400" 
               alt="The Masterpiece" 
               className="w-full h-full object-cover grayscale-[10%]"
             />
          </div>
        </motion.div>
      </section>

      {/* 6. CTA - Stripped to the core */}
      <section className="h-[50vh] flex items-center justify-center mt-20">
        <div className="text-center space-y-12">
           <h2 className="text-6xl md:text-8xl text-white font-thin tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
             Begin <i className="font-serif text-white/50">Yours.</i>
           </h2>
           
           <button className="group flex items-center justify-center mx-auto gap-4 text-white hover:text-[#C6A75E] font-black uppercase tracking-[0.3em] text-[10px] transition-colors duration-500">
              <span className="relative">
                 Inquire Now
                 <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-white/20 group-hover:bg-[#C6A75E] transition-colors duration-500" />
              </span>
              <MoveRight size={14} className="transition-transform duration-500 group-hover:translate-x-2" />
           </button>
        </div>
      </section>

    </div>
  );
}
