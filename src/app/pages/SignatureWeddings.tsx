import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

const weddings = [
  {
    title: "Celestial Heritage",
    location: "Lake Como, Italy",
    description: "An ethereal union where classical architecture meets contemporary minimalism. A three-day journey through the senses, featuring a floating crystal pavilion and a 4,000-candle evening gala.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    stat: "4000 Candles",
    year: "2024"
  },
  {
    title: "Monochrome Noir",
    location: "Paris, France",
    description: "A bold exploration of contrast. Geometric floral architecture set against the historic stone of a private chateau. An editorial masterpiece that redefined modern wedding aesthetics.",
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2070&auto=format&fit=crop",
    stat: "Bespoke Design",
    year: "2025"
  },
  {
    title: "Desert Mirage",
    location: "Agafay, Morocco",
    description: "An oasis of luxury amidst the vast dunes. Sculptural installations and woven textures created a sensory mirage. A celebration illuminated entirely by starlight and fire.",
    image: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=2070&auto=format&fit=crop",
    stat: "Immersive Oasis",
    year: "2025"
  }
];

export default function SignatureWeddings() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="bg-[#0B0B0D] text-white min-h-screen font-sans selection:bg-[#C6A75E]/30">
      {/* Hero Section */}
      <section className="relative h-[70svh] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          {/* Removed the heavy black gradient overlays, kept a very light fade at the bottom for text readability */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B0B0D] to-transparent z-10 pointer-events-none" />
          
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Luxury Wedding Hero"
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
              The Exclusive Collection
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
            Signature <br />
            <span className="italic text-[#C6A75E] pr-8">Weddings.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-[#E0E0E0] text-lg md:text-xl font-medium tracking-wide leading-relaxed drop-shadow-md">
              Curating architectural, cinematic, and timeless celebrations across the globe. We explore the alchemy of space, emotion, and heritage.
            </p>
          </motion.div>
        </div>

        {/* Professional Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
        >
          <span className="text-[#C6A75E] text-[10px] uppercase tracking-[0.3em] font-semibold">Discover</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-[#C6A75E] to-transparent"
          />
        </motion.div>
      </section>

      {/* Editorial Content - Premium Showcase Gallery */}
      <PremiumShowcaseGallery weddings={weddings} />

      {/* Final CTA */}
      <section className="py-16 md:py-20 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-[#050505]">
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
            Begin Your <br className="md:hidden" />
            <span className="italic text-[#C6A75E]">Narrative.</span>
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
              Inquire Now
              <ArrowRight size={14} className="text-[#C6A75E] group-hover:translate-x-1 transition-transform duration-500" />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

function PremiumShowcaseGallery({ weddings }: { weddings: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-[#050505] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/10 z-20">
      {/* Section Header for clear separation */}
      <div className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div>
           <div className="flex items-center gap-4 mb-6">
             <div className="w-8 h-[1px] bg-[#C6A75E]" />
             <span className="text-[#C6A75E] text-xs uppercase tracking-[0.3em] font-semibold">Archive</span>
           </div>
           <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight text-[#F5F5F5]" style={{ fontFamily: 'var(--font-heading)' }}>
             Featured <br className="hidden md:block" />
             <i className="text-[#C6A75E]">Commissions.</i>
           </h2>
        </div>
        <p className="text-[#A0A0A0] max-w-sm text-sm md:text-base leading-relaxed font-light">
          Explore our most distinguished celebrations. Each event is a masterclass in custom design, curated for the world's most discerning families and visionaries.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Left: Interactive Editorial List */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <div className="flex flex-col border-t border-white/10">
            {weddings.map((wedding, idx) => (
              <div 
                key={idx} 
                onMouseEnter={() => setActiveIndex(idx)}
                className={`group py-8 md:py-10 border-b border-white/10 cursor-pointer transition-all duration-500 ${activeIndex === idx ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <div className="flex items-start">
                  <span className={`text-[#C6A75E] text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] mt-2 transition-transform duration-500 ${activeIndex === idx ? 'translate-x-2' : ''}`}>
                    0{idx + 1}
                  </span>
                  <div className="flex-1 ml-8 md:ml-12">
                    <h3 
                      className={`text-3xl md:text-4xl lg:text-5xl font-serif text-[#F5F5F5] font-light tracking-tight mb-4 transition-transform duration-500 ${activeIndex === idx ? 'translate-x-2' : ''}`} 
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {wedding.title}
                    </h3>
                    
                    <AnimatePresence>
                      {activeIndex === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pl-2 border-l border-[#C6A75E]/30 mt-6 mb-2">
                            <p className="text-[#A0A0A0] text-sm md:text-base font-light leading-relaxed mb-6 max-w-md pl-4">
                              {wedding.description}
                            </p>
                            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[10px] md:text-xs uppercase tracking-widest text-white/50 pl-4">
                              <span className="flex items-center gap-2"><MapPin size={14} className="text-[#C6A75E]"/> {wedding.location}</span>
                              <span className="flex items-center gap-2"><Sparkles size={14} className="text-[#C6A75E]"/> {wedding.stat}</span>
                              <span className="text-[#C6A75E]">{wedding.year}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Link to="/portfolio" className="inline-flex items-center gap-3 text-[#C6A75E] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors group">
              View Full Portfolio
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right: Massive Pristine Image Frame */}
        <div className="w-full lg:w-7/12 relative h-[50vh] md:h-[60vh] lg:h-[80vh] bg-[#111114] overflow-hidden rounded-sm group">
           <AnimatePresence mode="wait">
             <motion.img
               key={activeIndex}
               src={weddings[activeIndex].image}
               initial={{ opacity: 0, scale: 1.05 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.8, ease: "easeInOut" }}
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
               alt={weddings[activeIndex].title}
             />
           </AnimatePresence>
           
           {/* Subtle Inner Shadow and lighting for premium framing */}
           <div className="absolute inset-0 border border-white/10 pointer-events-none rounded-sm z-10" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/40 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
