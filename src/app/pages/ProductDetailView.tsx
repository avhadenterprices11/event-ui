import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Star, Share2, Heart, Shield, Check, ArrowRight, Minus, Plus, ChevronDown } from 'lucide-react';

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

const Accordion = ({ title, children, isOpen, onClick }: any) => (
  <div className="border-b border-white/5">
    <button onClick={onClick} className="w-full flex items-center justify-between py-6 group">
      <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/60 group-hover:text-white transition-colors">{title}</span>
      <ChevronDown size={14} className={`text-[#C6A75E] transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="pb-8 text-[11px] font-light tracking-wide text-white/40 leading-[2] uppercase">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function ProductDetailView() {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [finish, setFinish] = useState('Classic');
  const [engraving, setEngraving] = useState('');
  const [openAccordion, setOpenAccordion] = useState<string | null>('details');

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C6A75E]/30 relative pb-0">
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C6A75E]/5 blur-[200px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-32 lg:pt-48 relative z-10">
         
         <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Left: Interactive Image Gallery */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:sticky lg:top-32">
               <div className="w-full aspect-[4/5] bg-[#0A0A0C] border border-white/5 rounded-2xl lg:rounded-3xl overflow-hidden relative shadow-2xl group">
                 <AnimatePresence mode="wait">
                   <motion.img 
                     key={activeImage}
                     initial={{ opacity: 0, scale: 1.05 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                     src={product.images[activeImage]} 
                     className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000" 
                     alt={`Product View ${activeImage + 1}`} 
                   />
                 </AnimatePresence>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               </div>

               {/* Thumbnail Selector */}
               <div className="flex items-center gap-4">
                  {product.images.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative w-20 md:w-24 aspect-[4/5] rounded-xl overflow-hidden border transition-all duration-500 ${activeImage === idx ? 'border-[#C6A75E] opacity-100 shadow-[0_0_15px_rgba(198,167,94,0.3)]' : 'border-white/5 opacity-40 hover:opacity-100 hover:border-white/20'}`}
                    >
                      <img src={img} className="w-full h-full object-cover grayscale-[30%]" alt={`Thumbnail ${idx+1}`} />
                    </button>
                  ))}
               </div>
            </div>

            {/* Right: Scrollable Details Panel */}
            <div className="w-full lg:w-1/2 relative lg:pl-10">
               <div className="space-y-12 pb-32">
                  
                  {/* Header & Title */}
                  <motion.div 
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                     className="space-y-6"
                  >
                     <div className="flex items-center justify-between">
                        <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em]">{product.collection}</span>
                        <div className="flex items-center gap-6">
                           <button className="text-white/30 hover:text-white transition-colors group">
                              <Share2 size={18} className="group-hover:scale-110 transition-transform" />
                           </button>
                           <button className="text-white/30 hover:text-[#C6A75E] transition-colors group">
                              <Heart size={18} className="group-hover:scale-110 transition-transform" />
                           </button>
                        </div>
                     </div>
                     
                     <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-light tracking-tight leading-[0.9]" style={{ fontFamily: 'var(--font-heading)' }}>
                        {product.name.split(' ').map((word, i) => {
                           if(i === 1) return <span key={i} className="italic text-white/50 block my-2">{word}</span>
                           return <span key={i} className="block">{word}</span>
                        })}
                     </h1>
                     
                     <div className="flex items-end gap-6 pt-2">
                        <span className="text-3xl md:text-4xl font-serif text-white">{product.price}</span>
                        <div className="flex items-center gap-1 mb-2">
                           {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-[#C6A75E] fill-[#C6A75E]" />)}
                           <span className="text-[9px] text-white/40 ml-4 font-bold uppercase tracking-[0.4em] translate-y-[1px]">(Authentic)</span>
                        </div>
                     </div>
                  </motion.div>

                  <p className="text-[#A0A0A0] text-xs md:text-sm font-light leading-relaxed max-w-md">
                     {product.description}
                  </p>

                  <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent" />

                  {/* Configuration UI */}
                  <div className="space-y-10">
                     
                     {/* Hardware Finish */}
                     <div className="space-y-6">
                        <div className="flex justify-between items-end">
                           <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/50">Hardware Finish</span>
                           <span className="text-[9px] text-[#C6A75E] font-bold tracking-[0.2em]">{finish}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                           {['Classic', 'Gold Rimmed', 'Etched'].map(f => (
                              <button 
                                key={f}
                                onClick={() => setFinish(f)} 
                                className={`py-4 rounded-xl text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border ${finish === f ? 'bg-[#C6A75E] text-[#050505] border-[#C6A75E] shadow-[0_0_20px_rgba(198,167,94,0.15)]' : 'bg-transparent border-white/10 text-white/30 hover:text-white hover:border-white/30 hover:bg-white/5'}`}
                              >
                                 {f}
                              </button>
                           ))}
                        </div>
                     </div>

                     {/* Engraving */}
                     <div className="space-y-6">
                        <div className="flex justify-between items-end">
                           <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/50">Bespoke Engraving</span>
                           <span className="text-[9px] text-[#C6A75E] font-bold tracking-[0.2em]">+$120.00</span>
                        </div>
                        <input 
                          type="text" 
                          placeholder="Enter Monogram (e.g. EB & JV)" 
                          value={engraving} 
                          onChange={e => setEngraving(e.target.value)} 
                          className="w-full bg-transparent border border-white/10 rounded-xl py-5 px-6 text-xs font-light text-white focus:outline-none focus:border-[#C6A75E]/50 transition-all placeholder:text-white/20 hover:border-white/20" 
                        />
                     </div>

                     {/* Action Row */}
                     <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                        <div className="flex items-center justify-between sm:justify-center gap-8 bg-transparent px-8 py-5 rounded-full border border-white/10">
                           <button onClick={() => setQuantity(Math.max(1, quantity-1))} className="text-white/30 hover:text-white transition-colors"><Minus size={14} /></button>
                           <span className="text-[11px] font-bold w-4 text-center">{quantity}</span>
                           <button onClick={() => setQuantity(quantity+1)} className="text-white/30 hover:text-white transition-colors"><Plus size={14} /></button>
                        </div>
                        <button className="flex-1 py-5 bg-[#C6A75E] text-[#050505] rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(198,167,94,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                           Procure Artifact <ArrowRight size={14} />
                        </button>
                     </div>
                  </div>

                  {/* Accordion Details */}
                  <div className="pt-6">
                     <Accordion 
                       title="Technical Details" 
                       isOpen={openAccordion === 'details'} 
                       onClick={() => setOpenAccordion(openAccordion === 'details' ? null : 'details')}
                     >
                        <ul className="space-y-3">
                           {product.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center gap-4">
                                 <div className="w-1 h-1 rounded-full bg-[#C6A75E]" />
                                 {detail}
                              </li>
                           ))}
                        </ul>
                     </Accordion>
                     <Accordion 
                       title="White Glove Logistics" 
                       isOpen={openAccordion === 'shipping'} 
                       onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                     >
                        Complimentary white glove delivery available for all heritage tier clients. Secure transit via bonded courier. Average fabrication lead time: 14 business days.
                     </Accordion>
                     <Accordion 
                       title="Provenance & Care" 
                       isOpen={openAccordion === 'care'} 
                       onClick={() => setOpenAccordion(openAccordion === 'care' ? null : 'care')}
                     >
                        Each artifact includes a cryptographic certificate of authenticity. Hand wash only with ambient temperature water and provided microfiber chamois.
                     </Accordion>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-8 pt-4">
                     <div className="flex items-center gap-3 text-white/40">
                        <Shield size={14} className="text-[#C6A75E]" />
                        <span className="text-[8px] font-bold uppercase tracking-[0.3em]">Heritage Guarantee</span>
                     </div>
                     <div className="flex items-center gap-3 text-white/40">
                        <Check size={14} className="text-[#C6A75E]" />
                        <span className="text-[8px] font-bold uppercase tracking-[0.3em]">Authenticity Verified</span>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>

      {/* The Provenance Narrative (Full Width Story) */}
      <section className="mt-20 border-t border-white/5 bg-[#080808]">
         <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-32 lg:py-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
               
               <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-12"
               >
                  <div className="space-y-6">
                     <div className="flex items-center gap-6">
                        <div className="w-16 h-px bg-[#C6A75E]/50" />
                        <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em]">The Provenance</span>
                     </div>
                     <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight leading-[1]" style={{ fontFamily: 'var(--font-heading)' }}>
                        Crafted by <br /><span className="italic text-white/40">Diamond-Breath.</span>
                     </h2>
                  </div>
                  
                  <p className="text-[#A0A0A0] text-sm font-light leading-relaxed max-w-xl italic border-l border-[#C6A75E]/30 pl-8">
                     "{product.story}"
                  </p>
               </motion.div>
               
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-square rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/5 group shadow-2xl"
               >
                  <div className="absolute inset-0 bg-[#C6A75E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 pointer-events-none" />
                  <img 
                     src={product.images[0]} 
                     className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-105" 
                     alt="Artisan Story"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none z-10 opacity-80" />
                  
                  <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 z-20">
                     <div className="px-6 py-3 bg-[#0B0B0D]/60 backdrop-blur-md rounded-full border border-white/10 text-[9px] font-bold uppercase tracking-[0.4em] text-[#C6A75E]">
                        Czech Republic Workshop, 2024
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

    </div>
  );
}
