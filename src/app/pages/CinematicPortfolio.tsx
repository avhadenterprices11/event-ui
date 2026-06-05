import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Play, ArrowUpRight, Filter, PlayCircle, X, Volume2, MoveRight, Layers, Sparkles, Plus } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const categories = ['All Projects', 'Luxury Weddings', 'Corporate Events', 'Private Galas', 'Destination Events'];

const works = [
  {
    id: 1,
    title: 'VILLA AURORA GALA',
    category: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200',
    stats: 'Lake Como, Italy',
    description: 'An architectural symphony of light and shadows, redefining the essence of prestigious international gatherings.'
  },
  {
    id: 2,
    title: 'AZURE HORIZON',
    category: 'Destination Events',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1766734866261-888879b71ea4?auto=format&fit=crop&q=80&w=1200',
    stats: 'Santorini, Greece',
    description: 'Breathtaking seaside curation, suspended between the cerulean infinity of the Mediterranean and volcanic stone.'
  },
  {
    id: 3,
    title: 'NOIR ANNUAL SOIRÉE',
    category: 'Private Galas',
    image: 'https://images.unsplash.com/photo-1525268771113-32d9e9021a97?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1768508950719-4d76978fdf44?auto=format&fit=crop&q=80&w=1200',
    stats: 'Paris, France',
    description: 'Immersive sensory mechanics and opulent design, capturing the timeless spirit of Parisian high-nightlife.'
  },
  {
    id: 4,
    title: 'THE SILK PAVILION',
    category: 'Luxury Weddings',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1767986012138-d02276728368?auto=format&fit=crop&q=80&w=1200',
    stats: 'Kyoto, Japan',
    description: 'A delicate immersion into Japanese minimalism, where ancient traditions encounter the vanguard of luxury planning.'
  }
];

const montageImages = [
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1600'
];

export default function CinematicPortfolio() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [reelIndex, setReelIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20, restDelta: 0.001 });

  const filteredWorks = works.filter(work => 
    activeCategory === 'All Projects' || work.category === activeCategory
  );

  // Montage auto-cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setReelIndex((prev) => (prev + 1) % montageImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0B0B0D] relative pb-32">
      
      {/* Cinematic Top Nav (Filters) - Positioned below Header */}
      <div className="fixed top-32 left-1/2 -translate-x-1/2 z-40">
        <motion.div 
          initial={{ y: -50, opacity: 0, filter: 'blur(10px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 p-2 bg-[#1A1A1A]/80 backdrop-blur-3xl rounded-full border border-white/10 shadow-2xl"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${activeCategory === cat ? 'bg-[#C6A75E] text-[#0B0B0D] shadow-lg shadow-[#C6A75E]/20' : 'text-white/40 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="w-full flex flex-col items-center">
        {/* Entry Cinematic Intro */}
        <div className="h-screen w-full relative flex items-center justify-center overflow-hidden mb-32">
          <AnimatePresence mode="wait">
            <motion.div 
              key={reelIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.4, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 w-full h-full"
            >
              <ImageWithFallback src={montageImages[reelIndex]} alt="Montage" className="w-full h-full object-cover blur-[2px]" />
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/80 to-[#0B0B0D]" />
          
          <div className="relative z-10 text-center space-y-8 max-w-4xl px-8">
            <motion.div
               initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
               animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
               transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 shadow-2xl"
            >
              <Sparkles size={12} />
              Featured Case Studies
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-8xl md:text-[140px] font-light text-white tracking-tighter leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our <span className="italic font-serif text-[#C6A75E]">Portfolio.</span>
            </motion.h1>

            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 0.6, y: 0 }}
               transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
               className="text-white text-sm font-light tracking-widest uppercase max-w-2xl mx-auto leading-relaxed"
            >
              A curated showcase of our most prestigious luxury events, corporate galas, and immersive experiences. 
              Explore the pinnacle of event design.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
               className="flex items-center justify-center gap-8 pt-10"
            >
               <div className="w-24 h-px bg-[#C6A75E]/30" />
               <div className="w-2 h-2 rounded-full bg-[#C6A75E] animate-pulse" />
               <div className="w-24 h-px bg-[#C6A75E]/30" />
            </motion.div>
            
            <div className="flex items-center justify-center gap-4 text-white/40 text-[10px] uppercase font-bold tracking-[0.4em] pt-8 group">
               Scroll to Explore <div className="w-[1px] h-4 bg-white/20 relative overflow-hidden ml-2"><motion.div animate={{ y: [0, 16, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="w-full h-full bg-[#C6A75E]" /></div>
            </div>
          </div>
        </div>

        {/* Dynamic Project Cards */}
        <div className="w-full flex flex-col items-center">
          <AnimatePresence mode="popLayout">
          {filteredWorks.map((work, index) => (
            <motion.div
              layout
              key={work.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 mb-32 md:mb-48 w-full max-w-7xl px-6 relative group`}
              onMouseEnter={() => setHoveredId(work.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Side */}
              <div className="w-full lg:w-[55%] aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] max-h-[80vh] relative rounded-[2rem] overflow-hidden bg-[#111114] border border-white/5 group-hover:shadow-[0_40px_100px_rgba(198,167,94,0.15)] group-hover:border-[#C6A75E]/30 transition-all duration-700 cursor-pointer">
                
                {/* Background State */}
                <div className="absolute inset-0 z-0">
                  <ImageWithFallback src={work.image} alt={work.title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-0" />
                </div>

                {/* Hover Reveal Image */}
                <div className={`absolute inset-0 z-10 transition-opacity duration-1000 ease-in-out ${hoveredId === work.id ? 'opacity-100' : 'opacity-0'}`}>
                  <ImageWithFallback src={work.hoverImage} alt={work.title} className="w-full h-full object-cover transition-all duration-[2s] scale-105 group-hover:scale-100" />
                  <div className="absolute inset-0 bg-[#0B0B0D]/20" />
                </div>
                
                {/* Always show a soft gradient for the badge overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/80 via-transparent to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />

                {/* Stats badge overlay on image */}
                <div className="absolute bottom-8 left-8 z-20">
                   <div className="px-6 py-2 rounded-full border border-white/10 bg-[#0B0B0D]/50 backdrop-blur-md inline-block">
                      <p className="text-[#C6A75E] text-[9px] font-bold uppercase tracking-[0.3em]">{work.stats}</p>
                   </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-8 lg:px-8">
                <motion.div className="flex items-center gap-4">
                   <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em] block">{work.category}</span>
                   <div className="w-8 h-px bg-[#C6A75E]/50" />
                </motion.div>
                
                <h2 className="text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-tighter leading-[0.9] group-hover:text-[#C6A75E] transition-colors duration-700" style={{ fontFamily: 'var(--font-heading)' }}>
                  {work.title}
                </h2>
                
                <p className={`text-white/60 text-sm md:text-base font-light leading-relaxed max-w-md transition-all duration-700 ${hoveredId === work.id ? 'text-white/90' : ''}`}>
                  {work.description}
                </p>

                <div className="pt-8">
                   <div className="w-full h-px bg-white/10 relative overflow-hidden mb-8">
                      <motion.div 
                        className="absolute left-0 top-0 h-full bg-[#C6A75E]" 
                        initial={{ width: 0 }}
                        animate={{ width: hoveredId === work.id ? '100%' : '15%' }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                      />
                   </div>
                   <div className="flex items-center justify-between">
                       <div className="flex items-center gap-4 text-white/40 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] group-hover:text-white transition-colors duration-500 cursor-pointer">
                          <Layers size={14} className="text-[#C6A75E]" />
                          View Case Study
                       </div>
                       <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-[#C6A75E] group-hover:text-[#0B0B0D] group-hover:border-[#C6A75E] group-hover:rotate-45 transition-all duration-700 cursor-pointer shadow-2xl">
                          <ArrowUpRight size={24} />
                       </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>
        
        {/* Cinematic Outro */}
        <div className="w-full flex items-center justify-center py-32">
           <div className="text-center group cursor-pointer p-16 hover:bg-[#111114] rounded-[40px] border border-transparent hover:border-white/5 transition-all duration-700">
             <div className="w-24 h-24 mx-auto rounded-full border-2 border-dashed border-white/10 flex items-center justify-center text-white/20 mb-8 group-hover:border-[#C6A75E]/50 group-hover:text-[#C6A75E] transition-all duration-700 group-hover:rotate-90 group-hover:scale-110">
                <Plus size={40} />
             </div>
             <p className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.6em] mb-4">Ready for yours?</p>
             <h4 className="text-3xl text-white font-serif italic" style={{ fontFamily: 'var(--font-heading)' }}>Start Your Project</h4>
           </div>
        </div>
      </div>

        {/* Persistence Bar (Netflix Style Bottom) */}
        <div className="fixed bottom-12 left-12 right-12 md:left-20 md:right-20 h-[2px] bg-white/10 z-50 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#C6A75E] shadow-[0_0_20px_rgba(198,167,94,0.8)]" 
            style={{ scaleX: smoothProgress, originX: 0 }} 
          />
          <div className="absolute top-4 left-0 right-0 flex justify-between text-[#C6A75E] text-[9px] font-black uppercase tracking-[0.4em] opacity-50">
             <div className="flex items-center gap-3"> <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] animate-pulse" /> Live Anthology</div>
             <span>End of Sequence</span>
          </div>
        </div>

        {/* Background Ambience UI */}
        <div className="fixed top-1/2 left-8 md:left-12 -translate-y-1/2 -rotate-90 text-white/[0.02] text-xs md:text-sm font-bold tracking-[1em] whitespace-nowrap select-none pointer-events-none">
           CURATING THE EXTRAORDINARY SINCE 2012
        </div>
    </div>
  );
}
