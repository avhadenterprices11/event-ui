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

  // Parallax Values
  const yHero = useTransform(smoothProgress, [0, 0.2], [0, 200]);
  const imageY1 = useTransform(smoothProgress, [0.1, 0.4], [50, -50]);
  const imageY2 = useTransform(smoothProgress, [0.3, 0.6], [50, -50]);
  const imageY3 = useTransform(smoothProgress, [0.6, 0.9], [50, -50]);
  const imageY4 = useTransform(smoothProgress, [0.6, 0.9], [-50, 50]);

  return (
    <div ref={containerRef} className="bg-[#0B0B0D] selection:bg-white/20 relative pb-32">
      
      {/* Ultra-subtle Film Grain */}
      <div 
        className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02] mix-blend-overlay" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* 1. HERO - Editorial Style */}
      <section className="h-[70svh] w-full relative overflow-hidden flex items-end p-8 md:p-16 lg:p-24">
        <motion.div style={{ y: yHero }} className="absolute inset-[-5%] z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2400"
            alt="Lake Como Wedding"
            className="w-full h-full object-cover opacity-[0.75] grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/20 to-[#0B0B0D]/40" />
        </motion.div>

        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end pb-12">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
             className="max-w-4xl"
           >
              <div className="flex items-center gap-4 mb-8">
                 <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em] block">Case Study 01</span>
                 <div className="w-12 h-px bg-[#C6A75E]/50" />
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[140px] text-white font-thin tracking-tighter leading-[0.85]" style={{ fontFamily: 'var(--font-heading)' }}>
                Julian <span className="font-serif italic text-white/50">&</span> <br className="hidden md:block" /> Elena.
              </h1>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1.5, delay: 0.5 }}
             className="hidden md:flex flex-col items-end text-right space-y-4"
           >
              <p className="text-white/40 text-[9px] uppercase font-bold tracking-[0.4em]">Location</p>
              <p className="text-white text-sm font-light tracking-widest leading-relaxed">VILLA DEL BALBIANELLO<br/>LAKE COMO, ITALY</p>
           </motion.div>
        </div>
      </section>

      {/* 2. SYNOPSIS & METRICS */}
      <section className="py-32 md:py-48 px-8 md:px-16 lg:px-24 max-w-[1800px] mx-auto border-t border-white/[0.05]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
           <div className="lg:col-span-5">
              <h3 className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em] mb-12">The Synopsis</h3>
              <p className="text-3xl md:text-5xl text-white font-thin leading-[1.2] tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
                 A masterclass in ephemeral architecture, suspending modern luxury above historic waters.
              </p>
           </div>
           
           <div className="lg:col-start-8 lg:col-span-5 grid grid-cols-2 gap-y-16">
              {[
                { label: 'Guests', val: '120', desc: 'Global Attendees' },
                { label: 'Budget', val: '$2.4M', desc: 'Curation Scale' },
                { label: 'Days Crafted', val: '430', desc: 'Planning Duration' },
                { label: 'Duration', val: '72h', desc: 'Event Lifecycle' },
              ].map((stat, i) => (
                 <div key={i} className="flex flex-col space-y-4">
                    <p className="text-white/40 text-[9px] uppercase font-bold tracking-[0.4em] border-b border-white/10 pb-4 w-1/2">{stat.label}</p>
                    <h4 className="text-4xl md:text-5xl text-white font-light tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>{stat.val}</h4>
                    <p className="text-[#C6A75E] text-[10px] uppercase tracking-widest font-bold">{stat.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. THE VISION (Pull Quote) */}
      <section className="min-h-[80svh] flex items-center justify-center px-8 py-32 relative overflow-hidden">
        <motion.div style={{ y: imageY1 }} className="absolute inset-[-10%] z-0 opacity-20">
           <ImageWithFallback src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=2400" alt="Lake Como" className="w-full h-full object-cover grayscale-[50%]" />
           <div className="absolute inset-0 bg-[#0B0B0D]/80" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
          className="relative z-10 max-w-5xl text-center"
        >
           <h3 className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em] mb-12">The Vision</h3>
           <p className="text-4xl md:text-6xl lg:text-8xl text-white font-serif italic font-light leading-[1.1] tracking-tight text-white/90">
             "We wanted to disappear into the fog of the lake and emerge in a world of pure, white-mirrored light."
           </p>
        </motion.div>
      </section>

      {/* 4. THE CHALLENGE */}
      <section className="py-32 md:py-48 px-8 md:px-16 lg:px-24 max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
           <div className="w-full lg:w-1/2">
              <motion.div style={{ y: imageY2 }} className="relative aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl">
                 <ImageWithFallback src="https://images.unsplash.com/photo-1533134486753-c833f0edde8c?auto=format&fit=crop&q=80&w=1600" alt="Engineering" className="w-full h-full object-cover opacity-80" />
              </motion.div>
           </div>
           
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1.5 }}
             className="w-full lg:w-1/2 space-y-12"
           >
              <h3 className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em]">The Challenge</h3>
              <h2 className="text-5xl md:text-7xl lg:text-8xl text-white font-thin tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
                Defying <i className="font-serif">Gravity.</i>
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Deploying over 4 tons of bespoke glass architecture across uneven, 18th-century stone terraces—all without a single permanent fixture. Every piece was hand-carried to preserve the historic grounds, battling unpredictable coastal winds to create a seamless floating illusion.
              </p>
           </motion.div>
        </div>
      </section>

      {/* 5. THE TRANSFORMATION (Cinematic Grid) */}
      <section className="py-20 md:py-32 px-8">
        <div className="max-w-[1800px] mx-auto space-y-12 md:space-y-32">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1 }}
             className="text-center space-y-8"
           >
              <h3 className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em]">The Transformation</h3>
              <h2 className="text-6xl md:text-8xl lg:text-[120px] text-white font-thin tracking-tighter leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                The <i className="font-serif text-white/50">Masterpiece.</i>
              </h2>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              <motion.div style={{ y: imageY3 }} className="md:col-span-8 relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl">
                 <ImageWithFallback src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2400" alt="Result Wide" className="w-full h-full object-cover grayscale-[20%]" />
              </motion.div>
              <motion.div style={{ y: imageY4 }} className="md:col-span-4 relative aspect-[4/5] md:aspect-auto overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl">
                 <ImageWithFallback src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1600" alt="Result Detail" className="w-full h-full object-cover grayscale-[10%]" />
              </motion.div>
           </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="h-[60vh] flex flex-col items-center justify-center mt-32 border-t border-white/[0.05] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C6A75E]/[0.02]" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center space-y-12"
        >
           <h2 className="text-6xl md:text-8xl lg:text-[100px] text-white font-thin tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
             Create <i className="font-serif text-white/50">Your Story.</i>
           </h2>
           
           <button className="group flex items-center justify-center mx-auto gap-4 text-white hover:text-[#C6A75E] font-black uppercase tracking-[0.3em] text-[10px] transition-colors duration-500">
              <span className="relative">
                 Inquire Now
                 <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-white/20 group-hover:bg-[#C6A75E] transition-colors duration-500" />
              </span>
              <MoveRight size={14} className="transition-transform duration-500 group-hover:translate-x-2" />
           </button>
        </motion.div>
      </section>

    </div>
  );
}
