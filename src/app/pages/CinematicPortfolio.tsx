import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Play, ArrowUpRight, Filter, PlayCircle, X, Volume2, MoveRight, Layers, Sparkles, Plus } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const categories = ['All Projects', 'Luxury Weddings', 'Corporate Galas', 'Private Soirées', 'Art Installations'];

const works = [
  {
    id: 1,
    title: 'The Obsidian Gala',
    category: 'Corporate Galas',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
    stats: '2,500 Guests • Monaco',
    description: 'An architectural take on traditional gala aesthetics, featuring 40ft obsidian-mirrored walls and bespoke kinetic lighting sculptures.'
  },
  {
    id: 2,
    title: 'Ethereal Forest',
    category: 'Luxury Weddings',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200',
    stats: 'Bespoke Floral Architecture',
    description: 'A transformative wedding experience where 10,000 hanging orchids moved in synchronization with an original orchestral score.'
  },
  {
    id: 3,
    title: 'Neon Zenith 2024',
    category: 'Private Soirées',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1549451371-64aa18a64bbb?auto=format&fit=crop&q=80&w=1200',
    stats: 'Immersive Laser Experience',
    description: 'A future-forward private celebration utilizing multi-sensory laser mapping and volumetric lighting designs.'
  },
  {
    id: 4,
    title: 'Celestial Banquet',
    category: 'Luxury Weddings',
    image: 'https://images.unsplash.com/photo-1520113110599-278553644485?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1533134486753-c833f0edde8c?auto=format&fit=crop&q=80&w=1200',
    stats: 'Digital Table Mapping',
    description: 'Standardizing the art of the dinner, where every plate became a canvas for digital storytelling and interactive art nodes.'
  },
  {
    id: 5,
    title: 'Silk & Shadows',
    category: 'Art Installations',
    image: 'https://images.unsplash.com/photo-1601666687007-88ccb1cce8a8?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200',
    stats: 'Avant-Garde Exhibition',
    description: 'A deeply emotional spatial installation playing with the dichotomy of heavy shadows and translucent silk drapery.'
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

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

  // Map vertical mouse wheel to horizontal scrolling
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 1.5;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="h-screen w-screen bg-[#0B0B0D] overflow-hidden relative">
      
      {/* Cinematic Top Nav (Filters) - Positioned below Header */}
      <div className="fixed top-32 left-1/2 -translate-x-1/2 z-40">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
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

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="h-screen w-screen overflow-x-auto overflow-y-hidden flex items-center scrollbar-none"
      >
        {/* Entry Cinematic Intro */}
        <div className="shrink-0 h-full w-screen relative flex items-center justify-center overflow-hidden">
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
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 shadow-2xl"
            >
              <Sparkles size={12} />
              Featured Case Studies
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-8xl md:text-[140px] font-light text-white tracking-tighter leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our <span className="italic font-serif text-[#C6A75E]">Portfolio.</span>
            </motion.h1>

            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.6 }}
               transition={{ delay: 0.4 }}
               className="text-white text-sm font-light tracking-widest uppercase max-w-2xl mx-auto leading-relaxed"
            >
              A curated showcase of our most prestigious luxury events, corporate galas, and immersive experiences. 
              Explore the pinnacle of event design.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="flex items-center justify-center gap-8 pt-10"
            >
               <div className="w-24 h-px bg-[#C6A75E]/30" />
               <div className="w-2 h-2 rounded-full bg-[#C6A75E] animate-pulse" />
               <div className="w-24 h-px bg-[#C6A75E]/30" />
            </motion.div>
            
            <div className="flex items-center justify-center gap-4 text-white/40 text-[10px] uppercase font-bold tracking-[0.4em] pt-8 group">
               Scroll horizontally to Explore <MoveRight size={14} className="group-hover:translate-x-2 transition-transform duration-500 text-[#C6A75E]" />
            </div>
          </div>
        </div>

        {/* Dynamic Project Cards */}
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((work, index) => (
            <motion.div
              layout
              key={work.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 h-[75vh] w-[85vw] md:w-[55vw] lg:w-[45vw] px-4 md:px-6 relative group"
              onMouseEnter={() => setHoveredId(work.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-full w-full rounded-[32px] overflow-hidden bg-[#111114] border border-white/5 transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-[0_40px_100px_rgba(198,167,94,0.15)] group-hover:border-[#C6A75E]/30 cursor-pointer">
                
                {/* Background State */}
                <div className="absolute inset-0 z-0">
                  <ImageWithFallback src={work.image} alt={work.title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-0" />
                </div>

                {/* Hover Reveal Image */}
                <div className={`absolute inset-0 z-10 transition-opacity duration-1000 ease-in-out ${hoveredId === work.id ? 'opacity-100' : 'opacity-0'}`}>
                  <ImageWithFallback src={work.hoverImage} alt={work.title} className="w-full h-full object-cover transition-all duration-[2s] scale-105 group-hover:scale-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/40 to-transparent" />
                </div>
                
                {/* Always show a soft gradient so text is readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-[#0B0B0D]/50 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />

                {/* Immersive Content Overlay */}
                <div className="absolute inset-0 z-20 p-10 md:p-16 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="space-y-4 max-w-xl">
                      <motion.div className="flex items-center gap-4">
                         <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em] block">{work.category}</span>
                         <div className="w-8 h-px bg-[#C6A75E]/50" />
                      </motion.div>
                      <h2 className="text-4xl md:text-[64px] lg:text-[80px] text-white font-light tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-heading)' }}>{work.title}</h2>
                      <p className={`text-white/60 text-xs md:text-sm font-light leading-relaxed max-w-md transition-all duration-700 delay-100 ${hoveredId === work.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {work.description}
                      </p>
                    </div>
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-[#C6A75E] group-hover:text-[#0B0B0D] group-hover:border-[#C6A75E] group-hover:rotate-45 transition-all duration-700 pointer-events-auto shadow-2xl">
                      <ArrowUpRight size={32} />
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div className="space-y-4 w-1/2">
                       <div className="px-6 py-2 rounded-full border border-white/10 bg-[#0B0B0D]/50 backdrop-blur-md inline-block">
                          <p className="text-[#C6A75E] text-[9px] font-bold uppercase tracking-[0.3em]">{work.stats}</p>
                       </div>
                       <div className="w-full h-px bg-white/10 relative overflow-hidden">
                          <motion.div 
                            className="absolute left-0 top-0 h-full bg-[#C6A75E]" 
                            initial={{ width: 0 }}
                            animate={{ width: hoveredId === work.id ? '100%' : '15%' }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                          />
                       </div>
                    </div>
                    <div className="flex items-center gap-4 text-white/40 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] translate-y-2 group-hover:text-white transition-colors duration-500">
                       <Layers size={14} className="text-[#C6A75E]" />
                       View Case Study
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Cinematic Outro */}
        <div className="shrink-0 w-[40vw] flex items-center justify-center pl-10 pr-20">
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
          style={{ scaleX, originX: 0 }} 
        />
        <div className="absolute top-4 left-0 right-0 flex justify-between text-[#C6A75E] text-[9px] font-black uppercase tracking-[0.4em] opacity-50">
           <div className="flex items-center gap-3"> <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] animate-pulse" /> Live Anthology</div>
           <span>End of Sequence</span>
        </div>
      </div>

      {/* Background Ambience UI */}
      <div className="absolute top-1/2 left-8 md:left-12 -translate-y-1/2 -rotate-90 text-white/[0.02] text-xs md:text-sm font-bold tracking-[1em] whitespace-nowrap select-none pointer-events-none">
         CURATING THE EXTRAORDINARY SINCE 2012
      </div>
    </div>
  );
}
