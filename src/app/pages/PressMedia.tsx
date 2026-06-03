import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, Trophy, ArrowUpRight, ExternalLink, Calendar } from 'lucide-react';
import { Link } from 'react-router';

const pressLogos = [
  { name: 'Vogue', logo: 'VOGUE' },
  { name: 'Forbes', logo: 'FORBES' },
  { name: 'Harper\'s Bazaar', logo: 'BAZAAR' },
  { name: 'Elle', logo: 'ELLE' },
  { name: 'Brides', logo: 'BRIDES' },
  { name: 'Architectural Digest', logo: 'AD' }
];

const articles = [
  {
    publisher: 'VOGUE',
    title: 'Architecting the Unforgettable: Inside the World of High-Concept Weddings',
    date: 'March 2024',
    description: 'A deep dive into the sensory-first approach that is redefining luxury event planning in the digital age.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop'
  },
  {
    publisher: 'FORBES',
    title: 'The Business of Emotion: How Luxury Events are The New Portfolio Asset',
    date: 'January 2024',
    description: 'How high-net-worth individuals are moving from material luxury to experiential immortality.',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop'
  },
  {
    publisher: 'ELLE',
    title: 'Monochrome & Minimalism: The New Aesthetic Guard of Paris Life',
    date: 'November 2023',
    description: 'Inside the ultra-exclusive private gala that set the trend for 2024 design palettes.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop'
  }
];

const awards = [
  {
    year: '2024',
    title: 'International Event of the Year',
    organization: 'Global Excellence Awards',
    description: 'Recognized for the "Celestial Heritage" series in Lake Como.'
  },
  {
    year: '2023',
    title: 'Best Bespoke Scenography',
    organization: 'Architectural Design Summit',
    description: 'Awarded for revolutionary use of light and space in temporary structures.'
  },
  {
    year: '2022',
    title: 'Cultural Impact Award',
    organization: 'European Heritage Trust',
    description: 'For the preservation of site-specific history through immersive storytelling.'
  }
];

export default function PressMedia() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="bg-[#0B0B0D] text-white min-h-screen pt-32 pb-40 px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-32 border-b border-white/5 pb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.8em] block mb-8"
        >
          Authority Wall
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-7xl md:text-9xl font-serif font-light tracking-tighter"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Press <br />
          <span className="italic text-[#C6A75E]">& Media.</span>
        </motion.h1>
      </section>

      {/* Animated Logo Grid */}
      <section className="max-w-7xl mx-auto mb-40 overflow-hidden px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 border-y border-white/5 py-12">
          {pressLogos.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="h-24 flex items-center justify-center group cursor-pointer"
            >
              <span className="text-white/20 text-3xl font-serif italic tracking-widest group-hover:text-[#C6A75E] transition-all duration-500 group-hover:scale-110">
                {brand.logo}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Articles Grid with Hover Expansion */}
      <section className="max-w-7xl mx-auto mb-60">
        <div className="space-y-32">
          {articles.map((article, index) => (
            <ArticleRow key={index} article={article} index={index} />
          ))}
        </div>
      </section>

      {/* Awards Timeline (Scroll-based) */}
      <section className="max-w-5xl mx-auto relative border-t border-white/5 pt-40">
        <h2 className="text-4xl md:text-6xl font-serif font-light mb-32 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
          Awards <span className="italic text-[#C6A75E]">& Recognition.</span>
        </h2>
        
        <div className="space-y-40 relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C6A75E] via-white/10 to-transparent" />
          
          {awards.map((award, index) => (
            <AwardItem key={index} award={award} index={index} />
          ))}
        </div>
      </section>

      {/* Media Kit CTA */}
      <section className="mt-60 max-w-4xl mx-auto text-center bg-[#111114] border border-white/5 rounded-[40px] p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 bg-[#C6A75E]/5 blur-[80px] rounded-full" />
        <div className="relative z-10 space-y-8">
          <span className="text-[#C6A75E] text-[10px] uppercase tracking-widest font-bold">Inquiries</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light" style={{ fontFamily: 'var(--font-heading)' }}>Media & Partnership Kits</h2>
          <p className="text-white/40 max-w-lg mx-auto leading-relaxed">
            Access our high-resolution imagery, brand guidelines, and executive biographies for press coverage.
          </p>
          <button className="px-10 py-4 border border-[#C6A75E]/30 text-[#C6A75E] rounded-full hover:bg-[#C6A75E] hover:text-[#0B0B0D] transition-all duration-500 font-bold uppercase tracking-widest text-[10px] flex items-center gap-4 mx-auto group">
            Download Press Kit
            <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}

function ArticleRow({ article, index }: { article: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center cursor-pointer"
    >
      {/* Info Part */}
      <div className="md:col-span-7 space-y-6">
        <div className="flex items-center gap-4">
          <span className="text-[#C6A75E] text-[10px] font-bold tracking-widest border-l-2 border-[#C6A75E] pl-3">{article.publisher}</span>
          <span className="text-white/20 text-[10px] font-medium tracking-widest uppercase">{article.date}</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-light tracking-tight group-hover:text-[#C6A75E] transition-colors duration-500 leading-tight">
          {article.title}
        </h3>
        <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
          {article.description}
        </p>
      </div>

      {/* Preview Part */}
      <div className="md:col-span-5 relative">
        <motion.div 
          animate={{ scale: isHovered ? 1.05 : 1, rotate: isHovered ? -2 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative"
        >
          <img src={article.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={article.title} />
          
          {/* Video Overlay Hint */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Play size={24} className="text-white fill-white" />
            </div>
          </div>
        </motion.div>
        
        {/* Floating Abstract Element */}
        <motion.div 
          animate={{ y: isHovered ? -20 : 0 }}
          className="absolute -top-6 -right-6 w-12 h-12 bg-white flex items-center justify-center text-[#0B0B0D] rounded-full shadow-2xl z-20"
        >
          <ArrowUpRight size={18} />
        </motion.div>
      </div>
    </motion.div>
  );
}

function AwardItem({ award, index }: { award: any, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -100 : 100, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, x }}
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 ${index % 2 === 1 ? 'md:text-right' : ''}`}
    >
      {/* Side Part */}
      <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
        <div className={`flex items-center gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
           <span className="text-[120px] font-serif italic text-white/5 leading-none select-none">{award.year}</span>
           <div className={`w-12 h-12 rounded-full border border-[#C6A75E]/30 flex items-center justify-center text-[#C6A75E]`}>
              <Trophy size={18} />
           </div>
        </div>
      </div>

      {/* Content Part */}
      <div className={`flex flex-col justify-center space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
        <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-widest">{award.organization}</span>
        <h4 className="text-3xl md:text-4xl font-serif" style={{ fontFamily: 'var(--font-heading)' }}>{award.title}</h4>
        <p className="text-white/40 text-sm font-light leading-relaxed max-w-sm">
          {award.description}
        </p>
      </div>

      {/* Indicator Dot on Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#C6A75E] shadow-[0_0_20px_#C6A75E] hidden md:block" />
    </motion.div>
  );
}
