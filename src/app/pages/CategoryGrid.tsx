import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Filter as FilterIcon, Check, X, ArrowRight, SlidersHorizontal, Grid, List as ListIcon } from 'lucide-react';

const products = [
  { id: 1, name: 'Marquise Crystal Flute', collection: 'Tabletop', price: 850, material: 'Hand-blown Crystal', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600' },
  { id: 2, name: 'Obsidian Tray', collection: 'Decor', price: 1200, material: 'Polished Stone', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600' },
  { id: 3, name: 'Silk Napkin Set', collection: 'Tabletop', price: 450, material: 'Mulberry Silk', image: 'https://images.unsplash.com/photo-1595428774751-fe83478e762c?q=80&w=600' },
  { id: 4, name: 'Heritage Candelabra', collection: 'Lighting', price: 3400, material: 'Sterling Silver', image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=600' },
  { id: 5, name: 'Velvet Ottoman', collection: 'Furniture', price: 2800, material: 'Italian Velvet', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600' },
  { id: 6, name: 'Golden Decanter', collection: 'Tabletop', price: 1800, material: '24k Gold Leaf', image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=600' },
  { id: 7, name: 'Alabaster Sculpture', collection: 'Decor', price: 5200, material: 'Aged Alabaster', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600' },
  { id: 8, name: 'Linen Throw', collection: 'Textiles', price: 650, material: 'French Linen', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600' },
];

const collections = ['All', 'Tabletop', 'Decor', 'Lighting', 'Furniture', 'Textiles'];

export default function CollectionPage() {
  const [activeCollection, setActiveCollection] = useState('All');
  const [priceRange, setPriceRange] = useState(6000);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = products.filter(p => 
    (activeCollection === 'All' || p.collection === activeCollection) &&
    (p.price <= priceRange)
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C6A75E]/30 relative pb-40">
      
      {/* Background Decorative Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C6A75E]/5 blur-[200px] rounded-full" />
      </div>

      <div className="max-w-[2000px] mx-auto pt-40 px-6 md:px-12 lg:px-24 relative z-10">
         
         {/* Premium Header */}
         <header className="mb-20 space-y-8 flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/5 pb-10">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
               className="space-y-8"
            >
               <div className="flex items-center gap-6">
                  <div className="w-16 h-px bg-[#C6A75E]/50" />
                  <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em]">Masterpiece Portfolios</span>
               </div>
               <h1 className="text-6xl md:text-[6rem] lg:text-[7rem] font-serif font-light tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-heading)' }}>
                  The <span className="italic text-white/40">Curated</span> <br /> Collection.
               </h1>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.3 }}
               className="flex items-center gap-6"
            >
               <div className="flex bg-[#0A0A0C] border border-white/10 rounded-full p-1">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-full transition-all duration-500 ${viewMode === 'grid' ? 'bg-[#111114] text-[#C6A75E] shadow-lg' : 'text-white/30 hover:text-white'}`}
                  >
                     <Grid size={16} />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-full transition-all duration-500 ${viewMode === 'list' ? 'bg-[#111114] text-[#C6A75E] shadow-lg' : 'text-white/30 hover:text-white'}`}
                  >
                     <ListIcon size={16} />
                  </button>
               </div>
               
               <div className="w-px h-6 bg-white/10" />
               
               <button 
                 onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                 className={`flex items-center gap-3 px-6 py-3 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${isSidebarOpen ? 'bg-[#C6A75E] text-[#050505]' : 'bg-transparent border border-white/20 text-white hover:border-[#C6A75E]/50'}`}
               >
                  <SlidersHorizontal size={14} /> {isSidebarOpen ? 'Active Filters' : 'Refine'}
               </button>
            </motion.div>
         </header>

         <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Sidebar Navigation */}
            <AnimatePresence>
               {isSidebarOpen && (
                 <motion.aside 
                   initial={{ opacity: 0, x: -20, width: 0 }}
                   animate={{ opacity: 1, x: 0, width: 'auto' }}
                   exit={{ opacity: 0, x: -20, width: 0 }}
                   transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                   className="w-full lg:w-72 shrink-0 space-y-16 lg:sticky lg:top-40 h-fit"
                 >
                    {/* Collections */}
                    <div className="space-y-6">
                       <h3 className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C6A75E] mb-8">Collections</h3>
                       <div className="space-y-1 border-t border-white/5">
                          {collections.map((col) => (
                            <button
                              key={col}
                              onClick={() => setActiveCollection(col)}
                              className={`w-full flex items-center justify-between py-4 transition-all duration-500 border-b border-white/5 group ${activeCollection === col ? 'text-white' : 'text-white/30 hover:text-white/80'}`}
                            >
                               <span className="text-[10px] font-bold uppercase tracking-[0.3em]">{col}</span>
                               {activeCollection === col ? (
                                 <Check size={14} className="text-[#C6A75E]" />
                               ) : (
                                 <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                               )}
                            </button>
                          ))}
                       </div>
                    </div>

                    {/* Price Parameter */}
                    <div className="space-y-8 bg-[#0A0A0C] border border-white/5 rounded-[2rem] p-8 relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A75E]/5 blur-[50px] rounded-full pointer-events-none" />
                       <div className="flex justify-between items-center relative z-10">
                          <h3 className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/50">Investment</h3>
                          <span className="text-[11px] text-[#C6A75E] font-bold tracking-widest">${priceRange.toLocaleString()}</span>
                       </div>
                       
                       <div className="relative pt-4 pb-2 z-10">
                          <input 
                            type="range" 
                            min="400" 
                            max="6000" 
                            step="100"
                            value={priceRange}
                            onChange={(e) => setPriceRange(parseInt(e.target.value))}
                            className="w-full h-px bg-white/10 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#C6A75E] [&::-webkit-slider-thumb]:shadow-[0_0_15px_#C6A75E]"
                          />
                       </div>
                       <div className="flex justify-between text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 relative z-10">
                          <span>$400</span>
                          <span>$6k+</span>
                       </div>
                    </div>

                    {/* Active Refinements */}
                    {activeCollection !== 'All' && (
                       <div className="space-y-4">
                          <div className="flex items-center gap-3">
                             <FilterIcon size={12} className="text-[#C6A75E]" />
                             <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">Active Collection</span>
                          </div>
                          <div className="px-4 py-2 bg-white/5 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] border border-white/10 flex items-center justify-between w-fit gap-4 group cursor-pointer hover:bg-white/10 transition-colors" onClick={() => setActiveCollection('All')}>
                             {activeCollection} <X size={12} className="text-white/40 group-hover:text-white" />
                          </div>
                       </div>
                    )}
                 </motion.aside>
               )}
            </AnimatePresence>

            {/* Dynamic Content Area */}
            <main className="flex-1 min-w-0">
               <motion.div 
                  layout
                  className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-20' : 'grid-cols-1 gap-y-12'}`}
               >
                  <AnimatePresence mode="popLayout">
                     {filteredProducts.map((product) => (
                       <motion.div
                         layout
                         key={product.id}
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, scale: 0.95 }}
                         transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                         className={`group relative overflow-hidden bg-transparent transition-all duration-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16 border-b border-white/5 pb-12 hover:border-white/20' : 'flex flex-col'}`}
                       >
                          {/* Image Container */}
                          <div className={`relative overflow-hidden rounded-[2rem] bg-[#0A0A0C] border border-white/5 group-hover:border-[#C6A75E]/30 transition-colors duration-700 shrink-0 ${viewMode === 'list' ? 'w-full md:w-64 aspect-square' : 'w-full aspect-[3/4]'}`}>
                             <img 
                               src={product.image} 
                               alt={product.name} 
                               className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                             />
                             
                             {/* Overlay gradient */}
                             <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                             
                             {/* Top Material Tag */}
                             <div className="absolute top-6 left-6 px-4 py-2 bg-[#050505]/40 backdrop-blur-xl rounded-full border border-white/10 text-[8px] font-bold uppercase tracking-[0.3em] shadow-lg">
                                {product.material}
                             </div>

                             {/* Grid View Hover Actions */}
                             {viewMode === 'grid' && (
                                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                   <button className="px-6 py-3 rounded-full bg-white text-[#050505] text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-3 hover:bg-[#C6A75E] transition-colors duration-300 shadow-xl">
                                      Acquire Piece <ArrowRight size={12} />
                                   </button>
                                </div>
                             )}
                          </div>

                          {/* Content Container */}
                          <div className={`pt-8 space-y-4 ${viewMode === 'list' ? 'pt-0 flex-1' : ''}`}>
                             <div className="flex items-center justify-between">
                                <span className="text-[#C6A75E] text-[9px] font-bold uppercase tracking-[0.4em]">{product.collection}</span>
                                <span className={`font-serif transition-colors duration-500 ${viewMode === 'list' ? 'text-3xl text-white' : 'text-xl text-white group-hover:text-[#C6A75E]'}`}>
                                   ${product.price}
                                </span>
                             </div>
                             
                             <h3 className={`font-serif text-white tracking-tight leading-none group-hover:text-white/80 transition-colors duration-500 ${viewMode === 'list' ? 'text-4xl lg:text-5xl' : 'text-3xl'}`}>
                                {product.name}
                             </h3>
                             
                             {viewMode === 'list' && (
                               <>
                                 <p className="text-white/40 text-[11px] font-bold tracking-[0.2em] leading-relaxed max-w-2xl uppercase mt-6 mb-8">
                                    A masterwork of heritage craftsmanship, the {product.name} features {product.material} sourced exclusively for our global artisan private collective.
                                 </p>
                                 <div className="flex flex-wrap items-center gap-8 mt-8">
                                    <button className="px-8 py-3 rounded-full border border-white/20 text-white text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-3 hover:bg-white hover:text-[#050505] hover:border-white transition-all duration-300">
                                       Acquire Piece <ArrowRight size={12} />
                                    </button>
                                    <div className="flex items-center gap-3">
                                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                       <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-400">Available</span>
                                    </div>
                                 </div>
                               </>
                             )}
                          </div>
                       </motion.div>
                     ))}
                  </AnimatePresence>
               </motion.div>

               {/* Empty State */}
               {filteredProducts.length === 0 && (
                 <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="h-[50vh] flex flex-col items-center justify-center text-center space-y-8"
                 >
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/20">
                       <X size={24} />
                    </div>
                    <p className="text-white/40 text-xl font-serif">No artifacts match your refined criteria.</p>
                    <button 
                      onClick={() => {setActiveCollection('All'); setPriceRange(6000);}}
                      className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.3em] border-b border-[#C6A75E]/30 pb-1 hover:text-white hover:border-white transition-colors"
                    >
                      Reset Refinement
                    </button>
                 </motion.div>
               )}
            </main>
         </div>
      </div>
    </div>
  );
}
