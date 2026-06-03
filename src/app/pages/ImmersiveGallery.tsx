import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const mediaItems = [
  { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200', category: 'Table Decor', title: 'Celestial centerpiece with mirrored glass' },
  { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200', category: 'Floral', title: 'Hanging dahlia architecture' },
  { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1520113110599-278553644485?auto=format&fit=crop&q=80&w=1200', category: 'Lighting', title: 'Kinetic chandelier sequence' },
  { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200', category: 'Venue', title: 'Obsidian Gala main stage' },
  { id: 5, type: 'image', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200', category: 'Atmosphere', title: 'Midnight mist at the Lake' },
  { id: 6, type: 'image', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200', category: 'Table Decor', title: 'Bespoke silver service' },
  { id: 7, type: 'image', url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1200', category: 'Details', title: 'Hand-pressed menu embroidery' },
  { id: 8, type: 'image', url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1200', category: 'Floral', title: 'Pastel architecture' },
  { id: 9, type: 'image', url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200', category: 'Atmosphere', title: 'Dusk illumination' },
];

const categories = ['All Media', 'Floral', 'Lighting', 'Table Decor', 'Atmosphere'];

export default function ImmersiveGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [filter, setFilter] = useState('All Media');

  const displayItems = mediaItems.filter(item => filter === 'All Media' || item.category === filter);
  const currentItem = mediaItems.find(item => item.id === selectedId);

  return (
    <div className="min-h-screen bg-[#0B0B0D] selection:bg-[#C6A75E]/30 transition-colors duration-1000 pb-32">
      
      {/* Editorial Header */}
      <section className="pt-40 pb-20 px-8 max-w-[1600px] mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4"
          >
             <div className="w-12 h-[1px] bg-[#C6A75E]" />
             <span className="text-[#C6A75E] text-[10px] font-black uppercase tracking-[0.5em]">Media Archives</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl lg:text-9xl font-thin text-white tracking-tighter leading-none"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The <span className="italic font-serif text-[#C6A75E]">Exhibit.</span>
          </motion.h1>
        </div>

        {/* Smart Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-2"
        >
           {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setFilter(cat)}
               className={`relative px-6 py-3 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all duration-700 border ${filter === cat ? 'border-[#C6A75E] bg-[#C6A75E]/10 text-[#C6A75E]' : 'border-white/10 text-white/40 hover:text-white hover:border-white/30'}`}
             >
               {cat}
             </button>
           ))}
        </motion.div>
      </section>

      {/* Grid Canvas - Uniform Aspect Ratios */}
      <section className="px-8 max-w-[1600px] mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <AnimatePresence>
            {displayItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className="relative group cursor-pointer overflow-hidden rounded-[2rem] bg-[#111114] border border-white/5 transition-all duration-700 hover:border-[#C6A75E]/30 hover:-translate-y-2 shadow-xl hover:shadow-[0_20px_40px_rgba(198,167,94,0.1)] w-full aspect-[4/5]"
              >
                 <ImageWithFallback 
                   src={item.url} 
                   alt={item.title} 
                   className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                 />
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 
                 <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                    <ArrowUpRight size={20} />
                 </div>

                 <div className="absolute bottom-0 left-0 p-8 space-y-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 w-full">
                    <span className="text-[#C6A75E] text-[8px] font-black uppercase tracking-[0.4em]">{item.category}</span>
                    <h3 className="text-white text-sm md:text-base font-light tracking-wide">{item.title}</h3>
                 </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Cinematic Lightbox */}
      <AnimatePresence>
        {selectedId && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0B0B0D]/95 backdrop-blur-3xl flex items-center justify-center p-8 lg:p-16"
          >
            <motion.div className="relative w-full h-full flex flex-col items-center">
               
               {/* Controls */}
               <div className="absolute top-0 left-0 right-0 flex justify-between items-center z-50">
                  <div className="flex items-center gap-6">
                     <span className="text-[#C6A75E] text-[10px] font-black uppercase tracking-[0.4em]">{currentItem.category}</span>
                     <div className="w-12 h-px bg-white/10" />
                     <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">{currentItem.title}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#C6A75E] hover:text-[#0B0B0D] hover:border-[#C6A75E] transition-all duration-500"
                  >
                    <X size={24} />
                  </button>
               </div>

               {/* Center Presentation */}
               <div className="flex-1 w-full max-w-6xl flex items-center justify-center my-20">
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full relative"
                  >
                     <ImageWithFallback 
                       src={currentItem.url} 
                       alt={currentItem.title} 
                       className="w-full h-full object-contain rounded-3xl" 
                     />
                  </motion.div>
               </div>

               {/* Footer Details */}
               <div className="w-full max-w-6xl flex justify-between items-end border-t border-white/5 pt-8">
                  <div className="space-y-2">
                     <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest">Masterperspective Archive</p>
                     <h4 className="text-2xl text-white font-thin italic font-serif tracking-wide">Deep Craftsmanship.</h4>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    className="px-10 py-4 bg-transparent border border-white/20 hover:border-[#C6A75E] text-white hover:text-[#C6A75E] rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-4 transition-all duration-500"
                  >
                    Inquire Details <Sparkles size={14} />
                  </motion.button>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
