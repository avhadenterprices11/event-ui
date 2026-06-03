import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ShoppingBag, Star, ArrowRight, Search, Filter } from 'lucide-react';

const categories = ['All Collections', 'Heritage Crystal', 'Bespoke Textiles', 'Fine Art Pieces', 'Olfactory Kits'];

const products = [
  {
    id: 1,
    title: 'Celestial Crystal Vase',
    collection: 'Heritage Crystal',
    price: '$2,450',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop',
    rating: 5.0
  },
  {
    id: 2,
    title: 'Midnight Velvet Throw',
    collection: 'Bespoke Textiles',
    price: '$1,800',
    image: 'https://images.unsplash.com/photo-1595428774751-fe83478e762c?q=80&w=2070&auto=format&fit=crop',
    rating: 4.9
  },
  {
    id: 3,
    title: 'Antique Gold Decanter',
    collection: 'Heritage Crystal',
    price: '$3,200',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop',
    rating: 5.0
  },
  {
    id: 4,
    title: 'Tuscan Jasmine Diffuser',
    collection: 'Olfactory Kits',
    price: '$450',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1932&auto=format&fit=crop',
    rating: 4.8
  },
  {
    id: 5,
    title: 'Abstract Heritage Print',
    collection: 'Fine Art Pieces',
    price: '$5,500',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983&auto=format&fit=crop',
    rating: 5.0
  },
  {
    id: 6,
    title: 'Silk Embroidered Runner',
    collection: 'Bespoke Textiles',
    price: '$1,200',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    rating: 4.9
  }
];

export default function GiftShop() {
  const [activeCategory, setActiveCategory] = useState('All Collections');

  const filteredProducts = products.filter(p => 
    activeCategory === 'All Collections' || p.collection === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C6A75E]/30 relative pb-20">
      
      {/* Background Decorative Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-24 max-w-[2000px] mx-auto z-10 flex flex-col justify-center min-h-[70vh]">
         {/* Right side abstract image (desktop only) */}
         <div className="absolute top-0 right-0 w-1/2 h-[80vh] opacity-20 pointer-events-none overflow-hidden hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#050505]/50 to-[#050505] z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10" />
            <img 
               src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop" 
               className="w-full h-full object-cover grayscale-[70%]" 
               alt="Hero abstract"
            />
         </div>

         <div className="relative z-20 max-w-4xl space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-6"
            >
               <div className="h-px w-16 bg-[#C6A75E]/50" />
               <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em]">The Artisan Archive</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-[7rem] lg:text-[8rem] font-serif font-light tracking-tighter leading-[0.9]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
               Curated <br />
               <span className="italic text-white/40 pr-8">Artifacts.</span>
            </motion.h1>
            
            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.3 }}
               className="text-white/40 text-[11px] font-bold tracking-[0.3em] max-w-xl leading-loose uppercase"
            >
               Bespoke sensory triggers, heritage crystal, and fine art pieces procured exclusively for our private collective.
            </motion.p>
         </div>
      </section>

      {/* Sticky Filters */}
      <div className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-3xl border-y border-white/5 py-6 mt-10">
         <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12 w-full lg:w-auto">
               {categories.map((cat) => (
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`relative text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 py-2 ${activeCategory === cat ? 'text-[#C6A75E]' : 'text-white/30 hover:text-white'}`}
                 >
                   {cat}
                   {activeCategory === cat && (
                     <motion.div 
                       layoutId="shopFilterActive"
                       className="absolute bottom-0 left-0 right-0 h-px bg-[#C6A75E]" 
                       transition={{ type: "spring", stiffness: 300, damping: 30 }}
                     />
                   )}
                 </button>
               ))}
            </div>
            
            <div className="flex items-center gap-8 w-full lg:w-auto justify-between lg:justify-end">
               <button className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group">
                  <Filter size={14} className="group-hover:text-[#C6A75E] transition-colors" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Refinement</span>
               </button>
               <div className="w-px h-4 bg-white/10" />
               <button className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group">
                  <Search size={14} className="group-hover:text-[#C6A75E] transition-colors" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] hidden sm:block">Search</span>
               </button>
            </div>
         </div>
      </div>

      {/* Product Grid */}
      <main className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-24 pt-20">
         <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 lg:gap-x-20 gap-y-24">
            <AnimatePresence mode="popLayout">
               {filteredProducts.map((product) => (
                 <motion.div
                   key={product.id}
                   layout
                   initial={{ opacity: 0, y: 50 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                   className="group cursor-pointer flex flex-col"
                 >
                    {/* Visual Container */}
                    <div className="aspect-[4/5] relative overflow-hidden rounded-[2rem] bg-[#0A0A0C] border border-white/5 transition-colors duration-700 group-hover:border-[#C6A75E]/30">
                       <img 
                         src={product.image} 
                         className="w-full h-full object-cover opacity-60 grayscale-[40%] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[0.22,1,0.36,1]" 
                         alt={product.title} 
                       />
                       
                       {/* Overlay gradient */}
                       <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                       
                       {/* Hover Actions */}
                       <div className="absolute top-6 right-6 flex flex-col gap-3 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                          <button className="w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/60 hover:bg-[#C6A75E] hover:text-[#050505] hover:border-[#C6A75E] transition-all duration-300">
                             <ShoppingBag size={18} />
                          </button>
                       </div>

                       {/* Price Reveal */}
                       <div className="absolute bottom-8 left-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                          <span className="text-3xl font-serif text-white tracking-tight">{product.price}</span>
                       </div>
                    </div>

                    {/* Meta Information */}
                    <div className="mt-8 flex justify-between items-start">
                       <div className="space-y-3">
                          <span className="text-[#C6A75E] text-[9px] font-bold uppercase tracking-[0.3em] block">{product.collection}</span>
                          <h3 className="text-2xl font-serif text-white group-hover:text-white/80 transition-colors duration-500">{product.title}</h3>
                       </div>
                       <div className="flex items-center gap-2 pt-1">
                          <Star size={12} className="text-[#C6A75E] fill-[#C6A75E]" />
                          <span className="text-[11px] font-mono text-white/60">{product.rating}</span>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </AnimatePresence>
         </motion.div>
      </main>

      {/* Featured Newsletter CTA */}
      <section className="mt-40 max-w-[1400px] mx-auto px-6 relative z-10">
         <div className="absolute inset-0 bg-gradient-to-r from-[#111114] to-[#0A0A0C] border border-white/5 rounded-[3rem] overflow-hidden mx-6">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A75E]/5 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px]" />
         </div>
         
         <div className="relative py-24 md:py-32 px-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-[#C6A75E]/30 flex items-center justify-center mb-8 text-[#C6A75E]">
               <ShoppingBag size={20} />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-8">Private <span className="italic text-[#C6A75E] pr-2">Acquisitions.</span></h2>
            
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] max-w-xl mb-14 leading-relaxed">
               Join the inner circle for privileged access to seasonal collections, unlisted artifacts, and private auctions.
            </p>
            
            <div className="w-full max-w-md relative flex items-center border-b border-white/20 group hover:border-[#C6A75E]/50 transition-colors pb-4">
               <input 
                 type="email" 
                 placeholder="Enter Neural Identity (Email)" 
                 className="w-full bg-transparent text-xs font-light tracking-widest outline-none placeholder:text-white/20 text-white" 
               />
               <button className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#C6A75E] hover:text-white transition-colors flex items-center gap-3 shrink-0">
                  Authenticate <ArrowRight size={14} />
               </button>
            </div>
         </div>
      </section>

    </div>
  );
}
