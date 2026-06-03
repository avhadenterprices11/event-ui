import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Star, Share2, Heart, Shield, Check, ArrowRight, Minus, Plus, Info } from 'lucide-react';

const product = {
  name: 'Celestial Crystal Flute',
  collection: 'Marquise Collection',
  price: '$850.00',
  description: 'A masterwork of hand-blown crystal, architectural in its stems and ethereal in its clarity. Designed for moments of profound celebration and exclusive gatherings.',
  details: [
    '24% Lead Crystal Formulation',
    'Hand-cut in Bohemia',
    'Gold-rimmed base option',
    'Architectural Height: 28cm'
  ],
  story: 'In the heart of the Czech Republic, our artisans still practice the 14th-century "Diamond-Breath" technique. This flute isn\'t just glass; it is a frozen moment of Tuscan sunrise, captured in the clarity of Alpine water.',
  images: [
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200',
    'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200'
  ]
};

export default function ProductDetailView() {
  const [activeImg, setActiveImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [finish, setFinish] = useState('Classic');
  const [engraving, setEngraving] = useState('');

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C6A75E]/30 relative pb-20">
      
      {/* Split Viewport Layout */}
      <main className="max-w-[2000px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-white/5 lg:h-[100svh] lg:overflow-hidden">
         
         {/* Left: Cinematic Media Viewer */}
         <div className="lg:col-span-6 relative bg-[#0A0A0C] border-r border-white/5 p-6 lg:p-12 flex flex-col justify-center h-full pt-32 lg:pt-0">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6A75E]/5 blur-[150px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-lg mx-auto">
               <AnimatePresence mode="wait">
                  <motion.div 
                     key={activeImg}
                     initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                     animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                     exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                     transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                     className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl bg-black"
                  >
                     <img 
                        src={product.images[activeImg]} 
                        className="w-full h-full object-cover grayscale-[20%]" 
                        alt={`${product.name} View ${activeImg + 1}`} 
                     />
                     
                     {/* Interactive HUD */}
                     <div className="absolute bottom-6 right-6 bg-[#050505]/60 backdrop-blur-2xl border border-white/10 px-5 py-2 rounded-full text-[8px] font-bold uppercase tracking-[0.3em] flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] animate-pulse" />
                         Interactive Viewer
                     </div>
                  </motion.div>
               </AnimatePresence>
               
               {/* Editorial Thumbnails */}
               <div className="flex gap-4 justify-center mt-8">
                  {product.images.map((img, i) => (
                     <button 
                       key={i}
                       onClick={() => setActiveImg(i)} 
                       className={`relative overflow-hidden w-16 h-16 rounded-xl border transition-all duration-500 ease-[0.22,1,0.36,1] ${activeImg === i ? 'border-[#C6A75E] scale-110 shadow-[0_0_20px_rgba(198,167,94,0.2)]' : 'border-white/10 opacity-30 hover:opacity-100 hover:border-white/30'}`}
                     >
                        <img src={img} className="w-full h-full object-cover grayscale" alt={`Thumbnail ${i + 1}`} />
                     </button>
                  ))}
               </div>
            </div>
         </div>

         {/* Right: Acquisition Details */}
         <div className="lg:col-span-6 relative p-6 lg:p-16 flex flex-col justify-center h-full">
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
               className="w-full max-w-2xl mx-auto"
            >
               {/* Header Section */}
               <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between">
                     <span className="text-[#C6A75E] text-[9px] font-bold uppercase tracking-[0.5em]">{product.collection}</span>
                     <div className="flex items-center gap-6">
                        <button className="text-white/20 hover:text-white transition-colors"><Share2 size={16} /></button>
                        <button className="text-white/20 hover:text-[#C6A75E] transition-colors"><Heart size={16} /></button>
                     </div>
                  </div>
                  
                  {/* Stacked Editorial Typography */}
                  <h1 className="text-5xl lg:text-[4.5rem] font-serif font-light tracking-tighter leading-[0.85]" style={{ fontFamily: 'var(--font-heading)' }}>
                     {product.name.split(' ').map((word, i) => {
                        if(i === 1) return <span key={i} className="italic text-white/40 block my-1">{word}</span>
                        return <span key={i} className="block">{word}</span>
                     })}
                  </h1>
                  
                  <div className="flex items-center gap-6 pt-4">
                     <span className="text-3xl font-serif text-white">{product.price}</span>
                     <div className="w-px h-6 bg-white/10" />
                     <div className="flex items-center gap-1">
                        {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-[#C6A75E] fill-[#C6A75E]" />)}
                        <span className="text-[9px] text-white/30 ml-4 font-bold uppercase tracking-[0.4em] pt-1">(42 Dossiers)</span>
                     </div>
                  </div>
               </div>

               <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em] leading-[2] mb-10 max-w-md">
                  {product.description}
               </p>

               {/* Configuration Panel */}
               <div className="space-y-8">
                  
                  {/* Hardware Finish */}
                  <div className="space-y-4">
                     <div className="flex items-center justify-between border-b border-white/5 pb-3">
                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/40">Hardware Finish</span>
                        <span className="text-[9px] text-[#C6A75E] font-bold tracking-[0.2em]">{finish}</span>
                     </div>
                     <div className="grid grid-cols-3 gap-3">
                        {['Classic', 'Gold Rimmed', 'Etched'].map(f => (
                           <button 
                             key={f}
                             onClick={() => setFinish(f)} 
                             className={`py-3 rounded-xl text-[8px] font-bold uppercase tracking-[0.2em] border transition-all duration-500 ${finish === f ? 'bg-[#C6A75E] text-[#050505] border-[#C6A75E]' : 'bg-[#0A0A0C] border-white/5 text-white/30 hover:text-white hover:border-white/20'}`}
                           >
                              {f}
                           </button>
                        ))}
                     </div>
                  </div>

                  {/* Bespoke Engraving */}
                  <div className="space-y-4">
                     <div className="flex items-center justify-between border-b border-white/5 pb-3">
                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/40">Bespoke Engraving</span>
                        <span className="text-[9px] text-[#C6A75E] font-bold tracking-[0.2em]">+$120.00</span>
                     </div>
                     <input 
                       type="text" 
                       placeholder="Enter Monogram (e.g. EB & JV)" 
                       value={engraving} 
                       onChange={e => setEngraving(e.target.value)} 
                       className="w-full bg-[#0A0A0C] border border-white/5 rounded-xl py-4 px-5 text-[9px] font-bold uppercase tracking-[0.3em] text-white focus:outline-none focus:border-[#C6A75E]/50 transition-colors placeholder:text-white/10" 
                     />
                  </div>

                  {/* Acquisition Actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                     <div className="flex items-center justify-between sm:justify-center gap-6 bg-[#0A0A0C] px-6 py-3 rounded-full border border-white/5">
                        <button onClick={() => setQuantity(Math.max(1, quantity-1))} className="text-white/30 hover:text-white transition-colors"><Minus size={12} /></button>
                        <span className="text-[10px] font-bold w-4 text-center">{quantity}</span>
                        <button onClick={() => setQuantity(quantity+1)} className="text-white/30 hover:text-white transition-colors"><Plus size={12} /></button>
                     </div>
                     <button className="flex-1 py-4 bg-[#C6A75E] text-[#050505] rounded-full text-[9px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(198,167,94,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        Procure Artifact <ArrowRight size={12} />
                     </button>
                  </div>

                  {/* Assurance Badges */}
                  <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/5">
                     <div className="flex items-center gap-2 text-white/40">
                        <Shield size={12} className="text-[#C6A75E]" />
                        <span className="text-[7px] font-bold uppercase tracking-[0.3em]">Heritage Guarantee</span>
                     </div>
                     <div className="flex items-center gap-2 text-white/40">
                        <Check size={12} className="text-[#C6A75E]" />
                        <span className="text-[7px] font-bold uppercase tracking-[0.3em]">White Glove Logistics</span>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </main>

      {/* The Provenance (Story Section) */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-40">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            {/* Provenance Narrative */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
               className="space-y-16"
            >
               <div className="space-y-8">
                  <div className="flex items-center gap-6">
                     <div className="w-16 h-px bg-[#C6A75E]/50" />
                     <span className="text-[#C6A75E] text-[9px] font-bold uppercase tracking-[0.5em]">The Provenance</span>
                  </div>
                  <h2 className="text-6xl md:text-[5.5rem] font-serif font-light tracking-tighter leading-[0.85]" style={{ fontFamily: 'var(--font-heading)' }}>
                     Crafted by <br /><span className="italic text-white/40">Diamond-Breath.</span>
                  </h2>
               </div>
               
               <p className="text-white/40 text-[13px] font-light leading-[2.5] max-w-xl italic border-l border-[#C6A75E]/30 pl-8">
                  "{product.story}"
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                  {product.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-4">
                       <div className="w-1 h-1 rounded-full bg-[#C6A75E] mt-2 shrink-0" />
                       <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.3em] leading-relaxed">{d}</span>
                    </div>
                  ))}
               </div>
            </motion.div>
            
            {/* Visual Anchor */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
               className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 group"
            >
               <div className="absolute inset-0 bg-[#C6A75E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 pointer-events-none" />
               <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200" 
                  className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-105" 
                  alt="Artisan Story"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent pointer-events-none z-10" />
               
               <div className="absolute bottom-12 left-12 z-20">
                  <div className="px-6 py-3 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 text-[8px] font-bold uppercase tracking-[0.4em] text-white">
                     Czech Republic Workshop, 2024
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Floating Info HUD */}
      <div className="fixed bottom-12 left-12 z-50 pointer-events-none">
         <div className="flex items-center gap-4 p-4 bg-[#050505]/80 backdrop-blur-3xl border border-white/10 rounded-full">
            <div className="w-8 h-8 rounded-full bg-[#C6A75E]/10 flex items-center justify-center">
               <Info size={14} className="text-[#C6A75E]" />
            </div>
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] pr-4 text-white/50">14 Days for bespoke fabrication</span>
         </div>
      </div>

    </div>
  );
}
