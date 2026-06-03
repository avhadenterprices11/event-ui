import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Star, Camera, Utensils, Flower2, Music, Scissors, ArrowRight } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Artisans', icon: <Star className="w-4 h-4" /> },
  { id: 'floral', label: 'Floral Scenography', icon: <Flower2 className="w-4 h-4" /> },
  { id: 'catering', label: 'Gourmet Alchemy', icon: <Utensils className="w-4 h-4" /> },
  { id: 'photo', label: 'Visual Archives', icon: <Camera className="w-4 h-4" /> },
  { id: 'music', label: 'Sonic Architecture', icon: <Music className="w-4 h-4" /> },
  { id: 'design', label: 'Styling & Decór', icon: <Scissors className="w-4 h-4" /> }
];

const vendors = [
  {
    id: 1,
    name: "L'Art de Fleur",
    category: 'floral',
    style: 'Opulent',
    budget: '$$$',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop',
    preview: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2070&auto=format&fit=crop',
    rating: 4.9
  },
  {
    id: 2,
    name: "Savor & Silk",
    category: 'catering',
    style: 'Minimal',
    budget: '$$',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop',
    preview: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop',
    rating: 4.8
  },
  {
    id: 3,
    name: "Noir Cinema",
    category: 'photo',
    style: 'Modern',
    budget: '$$$',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop',
    preview: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070&auto=format&fit=crop',
    rating: 5.0
  },
  {
    id: 4,
    name: "Eclipse Sounds",
    category: 'music',
    style: 'Classic',
    budget: '$$',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop',
    preview: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop',
    rating: 4.7
  },
  {
    id: 5,
    name: "Bespoke Aura",
    category: 'design',
    style: 'Opulent',
    budget: '$$$',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    preview: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop',
    rating: 4.9
  }
];

export default function VendorNetwork() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [hoveredVendor, setHoveredVendor] = useState<number | null>(null);

  const toggleStyle = (style: string) => {
    setSelectedStyles(prev => 
      prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
    );
  };

  const filteredVendors = vendors.filter(v => 
    (activeCategory === 'all' || v.category === activeCategory) &&
    (selectedStyles.length === 0 || selectedStyles.includes(v.style)) &&
    v.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryLabel = (id: string) => categories.find(c => c.id === id)?.label || id;

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-40 px-6 md:px-12 font-sans relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C6A75E]/5 blur-[150px] rounded-full opacity-40" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Editorial Header */}
        <section className="mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start lg:items-end justify-between border-b border-white/5 pb-16"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <span className="w-12 h-[1px] bg-[#C6A75E]" />
                 <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em]">Curated Ecosystem</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif font-light tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-heading)' }}>
                The Artisan <br />
                <span className="italic text-[#C6A75E] pr-8">Network.</span>
              </h1>
            </div>

            <div className="w-full lg:w-[400px] space-y-8 shrink-0">
               <p className="text-white/40 text-sm font-light leading-relaxed">
                 An exclusive collective of sensory masters, from floral architects to sonic designers. Each hand-vetted for their contribution to the extraordinary.
               </p>
               <div className="relative group">
                 <div className="absolute inset-0 bg-[#C6A75E]/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#C6A75E] opacity-50 group-hover:opacity-100 transition-opacity" size={18} />
                 <input 
                   type="text" 
                   placeholder="Search Artisans..."
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full bg-[#111114] border border-white/10 rounded-full py-5 pl-14 pr-6 text-sm text-white focus:outline-none focus:border-[#C6A75E]/50 transition-all font-light relative z-10"
                 />
               </div>
            </div>
          </motion.div>
        </section>

        {/* Categories & Directory */}
        <section className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0 space-y-16">
             {/* Categories */}
             <div className="space-y-8">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C6A75E]">Disciplines</h3>
                <div className="flex flex-col">
                   {categories.map(cat => (
                     <button 
                       key={cat.id}
                       onClick={() => setActiveCategory(cat.id)}
                       className="w-full flex items-center justify-between py-4 group border-b border-white/5 last:border-0"
                     >
                       <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-500 ${activeCategory === cat.id ? 'border-[#C6A75E] text-[#C6A75E] bg-[#C6A75E]/10' : 'border-white/10 text-white/30 group-hover:border-[#C6A75E]/50 group-hover:text-[#C6A75E]'}`}>
                             {cat.icon}
                          </div>
                          <span className={`text-[10px] uppercase tracking-widest transition-colors duration-500 ${activeCategory === cat.id ? 'text-white font-bold' : 'text-white/40 group-hover:text-white'}`}>
                            {cat.label}
                          </span>
                       </div>
                       {activeCategory === cat.id && (
                         <motion.div layoutId="activeCat" className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]" />
                       )}
                     </button>
                   ))}
                </div>
             </div>

             {/* Refinement */}
             <div className="space-y-8 pt-12 border-t border-white/5">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C6A75E]">Architectural Style</h3>
                <div className="space-y-2">
                   {['Minimal', 'Opulent', 'Classic', 'Modern'].map(style => {
                     const isActive = selectedStyles.includes(style);
                     return (
                       <div 
                         key={style} 
                         onClick={() => toggleStyle(style)}
                         className="w-full flex items-center justify-between py-3 group cursor-pointer"
                       >
                         <span className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-white font-bold' : 'text-white/40 group-hover:text-white'}`}>
                           {style}
                         </span>
                         <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${isActive ? 'border-[#C6A75E] bg-[#C6A75E]/10' : 'border-white/10 group-hover:border-[#C6A75E]/50'}`}>
                            {isActive && <div className="w-2 h-2 bg-[#C6A75E] rounded-[1px]" />}
                         </div>
                       </div>
                     )
                   })}
                </div>
             </div>
          </aside>

          {/* The Grid */}
          <div className="flex-1">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredVendors.map((vendor) => (
                    <motion.div
                      key={vendor.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 20 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      onMouseEnter={() => setHoveredVendor(vendor.id)}
                      onMouseLeave={() => setHoveredVendor(null)}
                      className="group relative bg-[#0B0B0D] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#C6A75E]/30 transition-colors duration-500 h-[450px] md:h-[550px]"
                    >
                      {/* Image Cross-fade */}
                      <div className="absolute inset-0">
                        <img 
                          src={vendor.image} 
                          alt={vendor.name}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1.5s] ease-in-out ${hoveredVendor === vendor.id ? 'opacity-0' : 'opacity-100'}`} 
                        />
                        <img 
                          src={vendor.preview} 
                          alt={`${vendor.name} preview`}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1.5s] ease-in-out ${hoveredVendor === vendor.id ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} 
                        />
                      </div>

                      {/* Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
                         <div className="px-3 py-1.5 bg-[#050505]/60 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                            <Star size={10} className="text-[#C6A75E] fill-[#C6A75E]" />
                            <span className="text-[10px] font-bold">{vendor.rating}</span>
                         </div>
                         <div className="w-10 h-10 rounded-full bg-[#C6A75E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0 shadow-[0_0_20px_rgba(198,167,94,0.3)]">
                            <ArrowRight size={14} className="text-[#050505]" />
                         </div>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end z-10">
                         <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]">
                            <span className="text-[#C6A75E] text-[9px] font-bold uppercase tracking-[0.3em] block mb-3">
                              {getCategoryLabel(vendor.category)} • {vendor.style}
                            </span>
                            <h3 className="text-3xl md:text-4xl font-serif text-white mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                              {vendor.name}
                            </h3>
                            
                            <div className="flex justify-between items-center pt-6 border-t border-white/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                               <span className="text-[10px] uppercase tracking-widest text-white/60">Investment</span>
                               <span className="text-[#C6A75E] text-xs font-bold tracking-[0.2em]">{vendor.budget}</span>
                            </div>
                         </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
             </div>
             
             {filteredVendors.length === 0 && (
               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 className="flex flex-col items-center justify-center py-32 border border-dashed border-white/10 rounded-[2rem]"
               >
                 <Search className="w-8 h-8 text-white/20 mb-4" />
                 <p className="text-white/40 text-xs uppercase tracking-widest">No artisans found matching criteria.</p>
               </motion.div>
             )}
          </div>

        </section>
      </div>
    </div>
  );
}
