import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Compass, Hammer, Sparkles, Flag, ArrowRight } from 'lucide-react';
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
    images: [
      "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2070&auto=format&fit=crop"
    ],
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
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: pageProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end bottom"]
  });

  const heroY = useTransform(pageProgress, [0, 0.2], ["0%", "40%"]);
  const heroOpacity = useTransform(pageProgress, [0, 0.15], [1, 0]);
  const scaleY = useTransform(timelineProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="bg-[#050505] text-white overflow-hidden relative selection:bg-[#C6A75E]/30 font-sans pb-20">
      
      {/* Proper Full-Bleed Hero Banner */}
      <section className="relative h-[70svh] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          {/* Subtle bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
          
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Process and Methodology"
          />
        </motion.div>

        <div className="relative z-20 flex flex-col items-center justify-center w-full px-6 text-center mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#C6A75E]" />
            <span className="text-[#C6A75E] text-xs uppercase tracking-[0.4em] font-medium drop-shadow-md">
              The Methodology
            </span>
            <div className="w-12 h-[1px] bg-[#C6A75E]" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] md:text-[8vw] font-serif font-light leading-[0.9] tracking-tight mb-8 text-[#F5F5F5] drop-shadow-xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Design <br />
            <span className="italic text-[#C6A75E] pr-8">Genesis.</span>
          </motion.h1>
        </div>
      </section>

      {/* Interactive Journey Section */}
      <section ref={timelineRef} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-40 relative z-10">
        <div className="text-center mb-24 md:mb-40 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#C6A75E] text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">The Process</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight mb-6 md:mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              Your Curated <i className="text-[#C6A75E]">Journey.</i>
            </h2>
            <p className="text-[#A0A0A0] text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed mb-12">
              From the genesis of a concept to the final breathtaking moment, our methodology ensures your event is architected with absolute precision and emotional resonance.
            </p>
            <div className="w-[1px] h-24 md:h-32 bg-gradient-to-b from-[#C6A75E] via-[#C6A75E]/20 to-transparent mx-auto" />
          </motion.div>
        </div>

        {/* Architectural Progress Line */}
        <div className="absolute left-6 md:left-1/2 top-[400px] bottom-32 w-[1px] bg-white/[0.03] md:-translate-x-1/2 hidden md:block z-0">
          <motion.div 
            style={{ scaleY, transformOrigin: 'top' }}
            className="w-full h-full bg-gradient-to-b from-[#C6A75E] via-[#C6A75E]/80 to-transparent shadow-[0_0_20px_rgba(198,167,94,0.4)]"
          />
        </div>

        {/* Steps Grid */}
        <div className="space-y-24 md:space-y-64 relative z-10">
          {steps.map((step, index) => (
            <JourneyStep key={step.id} step={step} index={index} />
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-[#050505] border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(198,167,94,0.06)_0%,rgba(0,0,0,0)_70%)]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center w-full max-w-3xl mx-auto"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-[#C6A75E]/50 mb-8" />
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight leading-[0.9] text-[#F5F5F5] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Commence Your <br className="md:hidden" />
            <span className="italic text-[#C6A75E]">Odyssey.</span>
          </h2>
          
          <p className="text-[#A0A0A0] text-sm md:text-base font-light max-w-md tracking-wide leading-relaxed mb-10">
            Commission us to design your legacy. We accept a limited number of commissions each year to ensure uncompromising excellence.
          </p>

          <Link to="/contact" className="group relative inline-flex items-center justify-center">
            <div className="absolute inset-0 bg-[#C6A75E]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-10 py-5 border border-[#C6A75E]/30 bg-transparent text-[#F5F5F5] font-semibold uppercase tracking-[0.25em] text-[10px] rounded-full hover:border-[#C6A75E] hover:bg-[#C6A75E]/5 transition-all duration-500 flex items-center gap-4"
            >
              Initialize Project
              <ArrowRight size={14} className="text-[#C6A75E] group-hover:translate-x-1 transition-transform duration-500" />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

function JourneyStep({ step, index }: { step: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "center center"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={ref} 
      style={{ opacity, y }}
      className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-32 relative w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      
      {/* Visual Side */}
      <div className="w-full md:w-1/2 relative group">
        {/* Decorative Offset Frame */}
        <div className={`absolute inset-0 border border-[#C6A75E]/20 translate-y-4 md:translate-y-6 ${isEven ? 'md:-translate-x-6' : 'md:translate-x-6'} transition-transform duration-700 ease-out group-hover:translate-x-0 group-hover:translate-y-0`} />
        
        <div className="aspect-square md:aspect-[4/5] relative overflow-hidden bg-[#111114]">
          <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-[130%] top-[-15%]">
            {step.images ? (
              <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-1 p-2 bg-[#050505]">
                {step.images.map((img: string, i: number) => (
                  <div key={i} className="relative overflow-hidden w-full h-full">
                    <img 
                      src={img} 
                      alt={`${step.title} detail ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <img 
                 src={step.image} 
                 alt={step.title}
                 className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
            )}
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60 pointer-events-none transition-opacity duration-700 group-hover:opacity-30" />
          
          {/* Floating Icon inside image */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 bg-[#0B0B0D]/80 backdrop-blur-md flex items-center justify-center text-[#C6A75E] shadow-2xl transition-transform duration-700 group-hover:scale-110">
            {step.icon}
          </div>
        </div>
      </div>

      {/* Center Node on Timeline Line */}
      <div className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:flex items-center justify-center z-20 hidden">
         <div className="w-6 h-6 bg-[#050505] border-[2px] border-[#C6A75E] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(198,167,94,0.3)]">
           <div className="w-2 h-2 bg-[#C6A75E] rounded-full" />
         </div>
      </div>

      {/* Text Side */}
      <div className={`w-full md:w-1/2 relative z-10 flex flex-col justify-center ${isEven ? 'md:pl-12 lg:pl-24' : 'md:pr-12 lg:pr-24'}`}>
         
         {/* Giant Background Number */}
         <div 
           className="absolute -top-10 -left-2 md:-top-24 md:-left-8 text-[100px] md:text-[200px] font-serif italic font-light text-transparent select-none pointer-events-none z-0" 
           style={{ WebkitTextStroke: '1px rgba(255,255,255,0.04)', fontFamily: 'var(--font-heading)' }}
         >
           {step.id}
         </div>

         {/* Content Box */}
         <div className="relative z-10 space-y-6 md:space-y-8 bg-[#0B0B0D]/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-2xl border border-white/5 md:border-transparent mt-0 md:mt-0">
            <div className="flex items-center gap-4">
              <span className="w-8 md:w-12 h-[1px] bg-[#C6A75E]" />
              <span className="text-[#C6A75E] text-[10px] font-bold tracking-[0.4em] uppercase">{step.label}</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-[1.1] text-[#F5F5F5]" style={{ fontFamily: 'var(--font-heading)' }}>
              {step.title}
            </h3>
            
            <p className="text-[#A0A0A0] text-sm md:text-base font-light leading-relaxed max-w-lg">
              {step.description}
            </p>
         </div>
      </div>
    </motion.div>
  )
}
