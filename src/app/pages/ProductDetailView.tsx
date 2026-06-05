import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Star, Share2, Heart, Shield, Check, ArrowRight, Minus, Plus, Info, ChevronDown } from 'lucide-react';

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

      <div className="max-w-[2000px] mx-auto px-6 md:px-12 lg:px-24 pt-40 relative z-10">
         
         <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            
            {/* Left: Scrollable Image Stack (Desktop) / Carousel (Mobile) */}
            <div className="lg:w-[55%] flex flex-col gap-6 lg:gap-12">
               {product.images.map((img, idx) => (
                  <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                     className="w-full aspect-[4/5] bg-[#0A0A0C] border border-white/5 rounded-[2rem] overflow-hidden group relative"
                  >
                     <img 
                        src={img} 
                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                        alt={`Product View ${idx + 1}`} 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </motion.div>
               ))}
            </div>

            {/* Right: Sticky Details Panel */}
            <div className="lg:w-[45%] relative">
               <div className="lg:sticky lg:top-40 space-y-12 pb-32">
                  
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
                     
                     <h1 className="text-5xl lg:text-[4rem] xl:text-[5rem] font-serif font-light tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-heading)' }}>
                        {product.name.split(' ').map((word, i) => {
                           if(i === 1) return <span key={i} className="italic text-white/50 block my-2">{word}</span>
                           return <span key={i} className="block">{word}</span>
                        })}
                     </h1>
                     
                     <div className="flex items-end gap-6 pt-2">
                        <span className="text-4xl font-serif text-white">{product.price}</span>
                        <div className="flex items-center gap-1 mb-2">
                           {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-[#C6A75E] fill-[#C6A75E]" />)}
                           <span className="text-[9px] text-white/40 ml-4 font-bold uppercase tracking-[0.4em] translate-y-[1px]">(Authentic)</span>
                        </div>
                     </div>
                  </motion.div>

                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] leading-[2.2] max-w-md">
                     {product.description}
                  </p>

                  <div className="w-full h-px bg-white/5" />

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
                                className={`py-4 rounded-xl text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border ${finish === f ? 'bg-[#C6A75E] text-[#050505] border-[#C6A75E] shadow-[0_0_20px_rgba(198,167,94,0.15)]' : 'bg-transparent border-white/10 text-white/30 hover:text-white hover:border-white/30'}`}
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
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-2xl py-5 px-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white focus:outline-none focus:border-[#C6A75E]/50 transition-all placeholder:text-white/10 hover:border-white/20" 
                        />
                     </div>

                     {/* Action Row */}
                     <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                        <div className="flex items-center justify-between sm:justify-center gap-8 bg-[#0A0A0C] px-8 py-5 rounded-full border border-white/10">
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
      <section className="mt-20 border-t border-white/5 bg-[#0A0A0C]">
         <div className="max-w-[2000px] mx-auto px-6 md:px-12 lg:px-24 py-32 lg:py-48">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               
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
                        <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em]">The Provenance</span>
                     </div>
                     <h2 className="text-5xl md:text-[5.5rem] font-serif font-light tracking-tighter leading-[0.85]" style={{ fontFamily: 'var(--font-heading)' }}>
                        Crafted by <br /><span className="italic text-white/40">Diamond-Breath.</span>
                     </h2>
                  </div>
                  
                  <p className="text-white/50 text-[11px] font-bold uppercase tracking-[0.3em] leading-[2.5] max-w-xl italic border-l border-[#C6A75E]/30 pl-8">
                     "{product.story}"
                  </p>
               </motion.div>
               
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 group"
               >
                  <div className="absolute inset-0 bg-[#C6A75E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 pointer-events-none" />
                  <img 
                     src={product.images[0]} 
                     className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-105" 
                     alt="Artisan Story"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent pointer-events-none z-10" />
                  
                  <div className="absolute bottom-12 left-12 z-20">
                     <div className="px-6 py-3 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 text-[9px] font-bold uppercase tracking-[0.4em] text-white">
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
