import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Play, ArrowUpRight, ExternalLink } from 'lucide-react';
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="bg-[#0B0B0D] text-white min-h-screen font-sans selection:bg-[#C6A75E]/30 pb-20">
      
      {/* Proper Full-Bleed Hero Banner */}
      <section className="relative h-[70svh] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          {/* Subtle bottom fade to transition cleanly into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B0B0D] to-transparent z-10 pointer-events-none" />
          
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Press and Media Editorial"
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
              Authority Wall
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
            Press <br />
            <span className="italic text-[#C6A75E] pr-8">& Media.</span>
          </motion.h1>
        </div>
      </section>

      {/* Animated Logo Grid */}
      <section className="w-full bg-[#050505] py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {pressLogos.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-center justify-center group cursor-pointer"
              >
                <span className="text-[#A0A0A0] text-xl md:text-2xl font-serif italic tracking-widest group-hover:text-[#C6A75E] transition-colors duration-500">
                  {brand.logo}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Articles List */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 border-b border-white/10 pb-10">
           <div>
             <span className="text-[#C6A75E] text-[10px] uppercase tracking-[0.3em] font-semibold block mb-4">Coverage</span>
             <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
               Featured <i className="text-[#C6A75E]">Editorials.</i>
             </h2>
           </div>
           <p className="text-[#A0A0A0] max-w-md text-sm font-light leading-relaxed">
             Insights, interviews, and features detailing our approach to institutional luxury and design-led experiences.
           </p>
        </div>

        <div className="space-y-12">
          {articles.map((article, index) => (
            <ArticleRow key={index} article={article} index={index} />
          ))}
        </div>
      </section>

      {/* Awards Section (Editorial Grid) */}
      <section className="w-full bg-[#050505] py-32 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Industry <i className="text-[#C6A75E]">Recognition.</i>
            </h2>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#C6A75E] to-transparent mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {awards.map((award, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="flex flex-col space-y-6"
              >
                <div className="flex justify-between items-start border-b border-white/10 pb-6">
                  <span className="text-[#C6A75E] text-xs font-bold uppercase tracking-widest">{award.organization}</span>
                  <span className="text-white/40 text-sm font-serif italic">{award.year}</span>
                </div>
                <h4 className="text-2xl font-serif font-light leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>{award.title}</h4>
                <p className="text-[#A0A0A0] text-sm font-light leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit CTA */}
      <section className="mt-20 max-w-4xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden bg-[#111114] border border-white/5 p-10 md:p-14"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A75E]/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-[#C6A75E] text-[10px] uppercase tracking-[0.3em] font-semibold mb-6">Partnerships</span>
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Media Kit <i className="text-[#C6A75E]">& Assets.</i></h2>
            <p className="text-[#A0A0A0] max-w-lg mx-auto leading-relaxed font-light text-sm mb-12">
              Access high-resolution architectural photography, brand guidelines, and executive biographies for press coverage and collaboration.
            </p>
            <button className="group relative inline-flex items-center justify-center">
              <div className="absolute inset-0 bg-[#C6A75E]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative px-8 py-4 border border-[#C6A75E]/30 bg-transparent text-[#F5F5F5] font-semibold uppercase tracking-[0.2em] text-[10px] hover:border-[#C6A75E] hover:bg-[#C6A75E]/5 transition-all duration-500 flex items-center gap-4">
                Download Assets
                <ExternalLink size={14} className="text-[#C6A75E] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </div>
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function ArticleRow({ article, index }: { article: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group grid grid-cols-1 md:grid-cols-12 gap-10 items-center cursor-pointer pb-12 border-b border-white/5"
    >
      {/* Preview Image */}
      <div className="md:col-span-5 relative order-2 md:order-1">
        <div className="aspect-[4/3] overflow-hidden bg-[#111114] relative">
          <img 
            src={article.image} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
            alt={article.title} 
          />
          <div className="absolute inset-0 flex items-center justify-center bg-[#0B0B0D]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm text-white">
              <Play size={18} className="fill-white translate-x-[1px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="md:col-span-7 space-y-6 order-1 md:order-2">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-4">
            <div className="w-4 h-[1px] bg-[#C6A75E]" />
            <span className="text-[#C6A75E] text-[10px] font-bold tracking-[0.2em] uppercase">{article.publisher}</span>
          </div>
          <span className="text-[#606060] text-[10px] font-medium tracking-[0.2em] uppercase">{article.date}</span>
        </div>
        
        <h3 className="text-2xl md:text-4xl font-serif font-light tracking-tight group-hover:text-[#F5F5F5] text-white transition-colors duration-500 leading-[1.2]" style={{ fontFamily: 'var(--font-heading)' }}>
          {article.title}
        </h3>
        
        <p className="text-[#A0A0A0] text-sm md:text-base font-light leading-relaxed max-w-2xl">
          {article.description}
        </p>

        <div className="pt-2 flex items-center gap-3 text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.2em]">
          Read Feature
          <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
        </div>
      </div>
    </motion.div>
  );
}
