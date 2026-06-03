import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Compass, Hammer, Sparkles, Flag, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

const steps = [
  {
    id: '01',
    title: "Visionary Consultation",
    label: "CONCEPT",
    description: "Our journey begins with an intimate dialogue to extract the essence of your vision. We don't just plan; we dream with you, bridging the gap between imagination and atmospheric reality.",
    icon: <Compass className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    color: '#C6A75E'
  },
  {
    id: '02',
    title: "Architectural Mapping",
    label: "BLUEPRINT",
    description: "Every event is an architectural masterpiece. We map the sensory flow of your chosen space, calculating sightlines, lighting physics, and acoustic resonance to ensure total immersion.",
    icon: <MapPin className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    color: '#C6A75E'
  },
  {
    id: '03',
    title: "Curation of Heritage",
    label: "ARTISANAL",
    description: "We assemble a global collective of artisans. From bespoke scents to heritage textiles, every element is curated to tell a singular story through sensory textures and rhythmic design.",
    icon: <Hammer className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=2070&auto=format&fit=crop",
    color: '#C6A75E'
  },
  {
    id: '04',
    title: "Production Alchemy",
    label: "EXECUTION",
    description: "Precision meets passion. In this phase, we transform blueprints into physical reality. Our production teams work with surgical accuracy to manifest the extraordinary.",
    icon: <Sparkles className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    color: '#C6A75E'
  },
  {
    id: '05',
    title: "The Immersion",
    label: "MOMENT",
    description: "The culmination of our journey. We oversee every heartbeat of the event, managing the invisible variables so you can simply exist within the masterpiece we have created together.",
    icon: <Flag className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    color: '#C6A75E'
  }
];

export default function EventProcess() {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end bottom"]
  });

  const scaleY = useTransform(timelineProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-[#050505] text-white overflow-hidden relative selection:bg-[#C6A75E]/30 font-sans">
      
      {/* Background Cinematic Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#C6A75E]/5 blur-[160px] rounded-full opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#C6A75E]/5 blur-[160px] rounded-full opacity-40" />
      </div>

      {/* Hero Section */}
      <section className="h-[100svh] flex flex-col items-center justify-center text-center px-10 relative z-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
             className="w-full h-full object-cover opacity-20 grayscale-[50%]"
             alt="Background"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/80 to-[#050505]" />
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
           className="space-y-8 relative z-10 mt-20"
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: '0.4em' }}
            animate={{ opacity: 1, letterSpacing: '1em' }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-[1px] bg-[#C6A75E]/50" />
            <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em] ml-2">
              The Methodology
            </span>
            <div className="w-8 h-[1px] bg-[#C6A75E]/50" />
          </motion.div>
          
          <h1 className="text-[14vw] md:text-[9vw] font-serif font-light leading-[0.85] tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
            Design <br />
            <span className="italic text-[#C6A75E] pr-8">Genesis.</span>
          </h1>
          
          <div className="flex flex-col items-center gap-6 mt-12">
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.4em] max-w-xs mx-auto">
              Scroll to explore the architecture of transition
            </p>
            <motion.div 
               animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#C6A75E] to-transparent relative overflow-hidden mt-8"
            />
          </div>
        </motion.div>
      </section>

      {/* Interactive Timeline Section */}
      <section ref={timelineRef} className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 relative z-10">
        {/* Architectural Progress Line */}
        <div className="absolute left-6 md:left-1/2 top-32 bottom-32 w-[1px] bg-white/[0.05] md:-translate-x-1/2">
          <motion.div 
            style={{ scaleY, transformOrigin: 'top' }}
            className="w-full h-full bg-gradient-to-b from-[#C6A75E] to-[#C6A75E]/20 shadow-[0_0_30px_rgba(198,167,94,0.3)]"
          />
        </div>

        {/* Steps Grid */}
        <div className="space-y-32 md:space-y-48">
          {steps.map((step, index) => (
            <StepItem key={step.id} step={step} index={index} />
          ))}
        </div>
      </section>

      {/* Journey Completion Section */}
      <section className="h-[100svh] bg-[#050505] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden border-t border-white/[0.03]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/10 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#C6A75E]/10 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#C6A75E]/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#C6A75E]/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(198,167,94,0.05)_0%,rgba(0,0,0,0)_70%)]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center space-y-10 w-full max-w-4xl mx-auto"
        >
          <Sparkles className="text-[#C6A75E] w-8 h-8 opacity-50" />
          
          <h2 className="text-6xl md:text-8xl font-serif font-light tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-heading)' }}>
            Commence Your <br />
            <span className="italic text-[#C6A75E]">Own Odyssey.</span>
          </h2>
          
          <p className="text-white/40 text-lg font-light max-w-lg">
            Commission us to design your legacy. We accept a limited number of commissions each year.
          </p>

          <Link to="/contact" className="mt-8 group">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-10 py-5 bg-transparent border border-[#C6A75E]/30 overflow-hidden rounded-full flex items-center gap-4 transition-colors hover:border-[#C6A75E]"
            >
              <div className="absolute inset-0 bg-[#C6A75E] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
              <span className="relative z-10 text-white group-hover:text-[#050505] text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500">
                Initialize Project
              </span>
              <ArrowRight size={16} className="relative z-10 text-[#C6A75E] group-hover:text-[#050505] transition-colors duration-500" />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

function StepItem({ step, index }: { step: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const nodeOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 relative w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      
      {/* Visual Side */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full md:w-5/12 h-[50vh] md:h-[70vh] relative overflow-hidden border border-white/5 ${isEven ? 'rounded-[40px] md:rounded-[60px]' : 'rounded-t-[200px] rounded-b-[40px] md:rounded-t-[300px] md:rounded-b-[60px]'} group ml-8 md:ml-0`}
      >
        <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-[130%] top-[-15%]">
          <img 
             src={step.image} 
             alt={step.title}
             className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />
        
        {/* Floating Icon inside image */}
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center text-[#C6A75E]">
          {step.icon}
        </div>
      </motion.div>

      {/* Center Node (Responsive) */}
      <div className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
         <motion.div 
           initial={{ scale: 0, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ margin: "-50% 0px -50% 0px" }}
           className="w-4 h-4 bg-[#050505] border-[2px] border-[#C6A75E] rounded-full relative"
         >
           <motion.div 
             style={{ opacity: nodeOpacity }}
             className="absolute inset-0 rounded-full bg-[#C6A75E] blur-sm" 
           />
         </motion.div>
      </div>

      {/* Text Side */}
      <div className="w-full md:w-5/12 relative z-10 flex flex-col justify-center pl-16 md:pl-0">
         {/* Giant Background Number */}
         <motion.div 
           initial={{ opacity: 0, x: isEven ? 50 : -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-20%" }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="absolute -top-16 -left-8 md:-top-32 md:-left-16 text-[150px] md:text-[250px] font-serif italic font-bold text-transparent select-none pointer-events-none z-0" 
           style={{ WebkitTextStroke: '1px rgba(255,255,255,0.03)', fontFamily: 'var(--font-heading)' }}
         >
           {step.id}
         </motion.div>

         <div className="relative z-10 space-y-6 md:space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-[#C6A75E]" />
              <span className="text-[#C6A75E] text-[10px] font-bold tracking-[0.4em] uppercase">{step.label}</span>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-light tracking-tighter leading-[1.0] text-white" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {step.title}
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-white/40 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-lg"
            >
              {step.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.div 
                whileHover={{ x: 10 }}
                className="mt-4 md:mt-8 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-[#C6A75E] transition-colors group cursor-pointer w-fit"
              >
                <span className="w-10 h-10 rounded-full border border-white/20 group-hover:border-[#C6A75E] group-hover:bg-[#C6A75E]/10 flex items-center justify-center transition-all">
                  <ArrowRight size={14} />
                </span>
                Discover Methodology
              </motion.div>
            </motion.div>
         </div>
      </div>
    </div>
  )
}
