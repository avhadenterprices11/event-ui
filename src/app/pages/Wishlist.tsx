import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Plus, Sparkles, Wand2, Share2, Filter, Layers, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const wishlistItems = [
  {
    id: 1,
    title: 'Crystal Ballroom Setup',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
    collection: 'Dream Wedding',
    details: 'Hand-cut crystal chandeliers and floor-to-ceiling mirror installations.'
  },
  {
    id: 2,
    title: 'Midnight Garden Lounge',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
    collection: 'Guest Experience',
    details: 'Scented candle pathways with velvet lounge seating in deep emerald.'
  },
  {
    id: 3,
    title: 'Floral Waterfall Arch',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    collection: 'Dream Wedding',
    details: 'Cascading orchids and white roses designed by world-renowned florists.'
  },
  {
    id: 4,
    title: 'Molecular Mixology Bar',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    collection: 'Guest Experience',
    details: 'Custom cocktail experiences using liquid nitrogen and edible gold.'
  },
  {
    id: 5,
    title: 'Art Deco TableScape',
    image: 'https://images.unsplash.com/photo-1531058021387-32305bad899a?auto=format&fit=crop&q=80&w=800',
    collection: 'Dream Wedding',
    details: 'Geometric gold flatware paired with obsidian ceramic plates.'
  },
  {
    id: 6,
    title: 'Immersive Mapping Projection',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    collection: 'Guest Experience',
    details: 'Bespoke architectural lighting that shifts with the musical tempo.'
  }
];

const collections = ['All Inspirations', 'Dream Wedding', 'Guest Experience'];

export default function Wishlist() {
  const [activeCollection, setActiveCollection] = useState('All Inspirations');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredItems = wishlistItems.filter(item => 
    activeCollection === 'All Inspirations' || item.collection === activeCollection
  );

  return (
    <div className="min-h-screen bg-[#0B0B0D] pt-40 pb-32 px-8 overflow-hidden">
      
      {/* Editorial Navigation */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/5 pb-16">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#C6A75E]/20 bg-[#C6A75E]/5 text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em]"
            >
              <Sparkles size={12} />
              Curation Studio
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-9xl font-light text-white tracking-tighter leading-none"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              The <span className="italic font-serif text-[#C6A75E]">Wishlist.</span>
            </motion.h1>
          </div>

          {/* Collection Filters */}
          <div className="flex flex-wrap gap-3">
            {collections.map((col) => (
              <button
                key={col}
                onClick={() => setActiveCollection(col)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${activeCollection === col ? 'bg-[#C6A75E] text-[#0B0B0D] shadow-xl shadow-[#C6A75E]/20' : 'bg-white/5 text-white/40 hover:text-white border border-white/5'}`}
              >
                {col}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modern High-Key Grid */}
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-[#0B0B0D] border border-white/5 transition-all duration-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:border-[#C6A75E]/30">
                  <div className="aspect-[3/4] overflow-hidden bg-[#111114]">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 opacity-85 group-hover:opacity-100"
                    />
                  </div>
                  
                  {/* Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Subtle Wash Expansion Overlay */}
                  <div className={`absolute inset-0 bg-[#0B0B0D]/80 backdrop-blur-sm p-8 flex flex-col justify-between transition-all duration-700 ease-[0.22, 1, 0.36, 1] ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex justify-between items-start">
                      <span className="text-[#C6A75E] text-[9px] font-bold uppercase tracking-[0.3em]">{item.collection}</span>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-[#C6A75E] group-hover:border-[#C6A75E] group-hover:text-[#0B0B0D] transition-all">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    <div className="space-y-4 transform transition-transform duration-700 ease-[0.22, 1, 0.36, 1] translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-2xl lg:text-3xl text-white font-serif italic leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                      <p className="text-white/50 text-[13px] font-light leading-relaxed">{item.details}</p>
                      
                      <div className="flex items-center gap-5 pt-4">
                        <button className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-[#C6A75E]/40 pb-1 hover:border-[#C6A75E] hover:text-[#C6A75E] transition-colors">
                          Add to Board
                        </button>
                        <button className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Minimal Caption (Visible when not hovered) */}
                  <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                    <h3 className="text-white text-[15px] font-light tracking-wide">{item.title}</h3>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-[#0B0B0D]/40 backdrop-blur-md">
                       <Plus size={14} className="text-[#C6A75E]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Premium Light CTA */}
      <motion.button 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 pl-8 pr-3 py-3 bg-gradient-to-r from-[#C6A75E] to-[#E5C97A] rounded-full shadow-[0_20px_40px_rgba(198,167,94,0.25)] flex items-center gap-6 group hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(198,167,94,0.35)] transition-all duration-500 cursor-pointer"
      >
        <div className="flex flex-col items-start pt-[2px]">
          <span className="text-[#0B0B0D] text-[8px] font-black uppercase tracking-[0.4em] mb-0.5 opacity-60">Manifest Vision</span>
          <span className="text-[#0B0B0D] text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]">Turn Wishlist into Event</span>
        </div>
        <div className="w-10 h-10 bg-[#0B0B0D] rounded-full flex items-center justify-center text-[#C6A75E] shadow-xl shadow-black/20 group-hover:rotate-12 transition-transform duration-500 flex-shrink-0">
          <Wand2 size={16} />
        </div>
      </motion.button>

      {/* Architectural Background Watermark */}
      <div className="fixed bottom-[-10%] left-[-5%] text-white/[0.02] text-[400px] font-serif italic leading-none pointer-events-none select-none">
        CURATOR
      </div>
    </div>
  );
}
