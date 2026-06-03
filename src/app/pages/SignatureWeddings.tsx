import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Star, Sparkles, MapPin } from 'lucide-react';
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

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#C6A75E]/30">
      {/* Hero Section */}
      <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/20 to-[#050505] z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(5,5,5,0.8)_100%)] z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-[30%] opacity-70"
            alt="Luxury Wedding Hero"
          />
        </motion.div>

        <div className="relative z-20 flex flex-col items-center justify-center w-full px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[1px] bg-[#C6A75E]/50" />
            <span className="text-[#C6A75E] text-[9px] uppercase tracking-[0.4em] font-medium">
              The Exclusive Collection
            </span>
            <div className="w-12 h-[1px] bg-[#C6A75E]/50" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[14vw] md:text-[9vw] font-serif font-light leading-[0.85] tracking-tight mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Signature <br />
            <span className="italic text-[#C6A75E] pr-8">Weddings.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="max-w-xl mx-auto backdrop-blur-sm bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-3xl"
          >
            <p className="text-white/60 text-sm md:text-base font-light tracking-wide leading-relaxed">
              Curating architectural, cinematic, and timeless celebrations across the globe. We explore the alchemy of space, emotion, and heritage.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 z-20"
        >
          <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-medium" style={{ writingMode: 'vertical-rl' }}>Scroll to Explore</span>
          <motion.div 
            animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#C6A75E] to-transparent relative overflow-hidden"
          />
        </motion.div>
      </section>

      {/* Editorial Content - Hover Gallery (One Frame) */}
      <HoverGallery weddings={weddings} />

      {/* Final CTA */}
      <section className="h-[100svh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(198,167,94,0.08)_0%,rgba(0,0,0,0)_70%)]" />
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
            Begin Your <br />
            <span className="italic text-[#C6A75E]">Narrative.</span>
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
                Inquire Now
              </span>
              <ArrowRight size={16} className="relative z-10 text-[#C6A75E] group-hover:text-[#050505] transition-colors duration-500" />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

function HoverGallery({ weddings }: { weddings: any[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section className="relative h-[100svh] w-full bg-[#050505] overflow-hidden flex flex-col md:flex-row z-20">
      {weddings.map((wedding, index) => {
        const isActive = hoveredIndex === index;
        
        return (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onClick={() => setHoveredIndex(index)}
            animate={{ flex: isActive ? 3 : 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full overflow-hidden border-b md:border-b-0 md:border-r border-white/10 last:border-0 cursor-pointer group"
          >
            {/* Image */}
            <motion.div 
              animate={{ scale: isActive ? 1.05 : 1.15 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={wedding.image} 
                alt={wedding.title} 
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? 'opacity-50' : 'opacity-80'} bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/20`} />
            </motion.div>

            {/* Content Container */}
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end z-10">
               <div className="flex flex-col gap-4">
                  {/* Header / Meta */}
                  <div className="flex items-center gap-4">
                    <span className="text-[#C6A75E] text-[10px] font-medium uppercase tracking-[0.3em]">
                      0{index + 1}
                    </span>
                    <div className="h-[1px] w-6 md:w-12 bg-white/20" />
                    <div className="flex items-center gap-2 text-white/60 text-[10px] uppercase tracking-widest whitespace-nowrap">
                      <Star size={10} className="fill-[#C6A75E] text-[#C6A75E]" />
                      <span className="hidden md:inline">{wedding.stat}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className={`text-3xl md:text-5xl lg:text-7xl font-serif font-light tracking-tighter text-white leading-[1.0] transition-all duration-700 ease-[0.22,1,0.36,1] ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-60'}`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {wedding.title}
                  </h3>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-6 pb-2">
                          <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-md">
                            {wedding.description}
                          </p>
                          
                          <div className="flex items-center gap-4 text-white/40 text-[10px] uppercase tracking-widest">
                            <MapPin size={12} />
                            {wedding.location}
                          </div>

                          <div className="inline-flex items-center gap-4 mt-4 group/btn cursor-pointer">
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-[#C6A75E] group-hover/btn:bg-[#C6A75E]/10 transition-colors">
                              <ArrowRight size={14} className="text-white group-hover/btn:text-[#C6A75E] transition-colors" />
                            </div>
                            <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] group-hover/btn:text-[#C6A75E] transition-colors">
                              Explore Archive
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
            </div>

            {/* Giant Year in Background (visible when active) */}
            <motion.div 
              animate={{ 
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : 50,
                scale: isActive ? 1 : 0.95
              }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="absolute top-1/2 -translate-y-1/2 right-0 text-[12vh] md:text-[20vh] font-serif italic text-white/[0.03] select-none pointer-events-none z-0 pr-8 md:pr-12 hidden sm:block leading-none whitespace-nowrap" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {wedding.year}
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
}
