import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ShoppingBag, Minus, Plus, ShieldCheck, Truck, ArrowRight, Trash2, Zap } from 'lucide-react';

const initialItems = [
  { id: 1, name: 'Marquise Crystal Flute', price: 850, quantity: 2, image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600', finish: 'Gold Rimmed' },
  { id: 2, name: 'Silk Napkin Set', price: 450, quantity: 1, image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600', finish: 'Mulberry Silk' },
  { id: 3, name: 'Heritage Candelabra', price: 3400, quantity: 1, image: 'https://images.unsplash.com/photo-1533134486753-c833f0edde8c?auto=format&fit=crop&q=80&w=600', finish: 'Sterling Silver' },
];

export default function CartPage() {
  const [items, setItems] = useState(initialItems);

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const formatting = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C6A75E]/30 relative pb-40">
      
      {/* Ambient Lighting Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[#C6A75E]/5 blur-[250px] rounded-full pointer-events-none z-0" />
      
      <div className="max-w-[2000px] mx-auto pt-40 px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Editorial Header */}
        <header className="mb-20 flex flex-col items-center text-center space-y-8">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
               className="flex items-center gap-6"
            >
               <div className="w-16 h-px bg-[#C6A75E]/50" />
               <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em]">Procurement Queue</span>
               <div className="w-16 h-px bg-[#C6A75E]/50" />
            </motion.div>
            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
               className="text-6xl md:text-[6rem] lg:text-[7rem] font-serif font-light tracking-tighter leading-[0.9]" 
               style={{ fontFamily: 'var(--font-heading)' }}
            >
               Your <span className="italic text-white/40">Selections.</span>
            </motion.h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
           
           {/* Items List */}
           <div className="lg:col-span-7 space-y-8">
              
              {/* Header Titles */}
              {items.length > 0 && (
                  <div className="hidden md:grid grid-cols-12 gap-8 text-[9px] font-bold uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-6">
                      <div className="col-span-6">Artifact</div>
                      <div className="col-span-3 text-center">Volume</div>
                      <div className="col-span-3 text-right">Investment</div>
                  </div>
              )}

              <AnimatePresence mode="popLayout">
                 {items.length > 0 ? (
                   items.map((item, i) => (
                     <motion.div
                       layout
                       key={item.id}
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                       transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                       className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-8 border-b border-white/5 hover:border-[#C6A75E]/30 transition-colors duration-500"
                     >
                        {/* Artifact Col */}
                        <div className="md:col-span-6 flex items-center gap-8">
                            <div className="w-32 h-40 shrink-0 overflow-hidden border border-white/5 bg-black rounded-2xl relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                                <img src={item.image} className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[0.22,1,0.36,1]" alt={item.name} />
                            </div>
                            <div className="space-y-3">
                                <span className="text-[#C6A75E] text-[9px] font-bold uppercase tracking-[0.4em] block">{item.finish}</span>
                                <h3 className="text-2xl font-serif text-white group-hover:text-[#C6A75E] transition-colors">{item.name}</h3>
                                <button onClick={() => removeItem(item.id)} className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-red-400 transition-colors pt-3">
                                    <Trash2 size={12} /> Remove
                                </button>
                            </div>
                        </div>

                        {/* Volume Col */}
                        <div className="md:col-span-3 flex md:justify-center">
                            <div className="flex items-center gap-6 bg-[#0A0A0C] px-6 py-3 rounded-full border border-white/5 group-hover:border-white/20 transition-colors">
                                <button onClick={() => updateQuantity(item.id, -1)} className="text-white/30 hover:text-white transition-colors"><Minus size={12} /></button>
                                <span className="text-[10px] font-bold w-4 text-center text-white">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)} className="text-white/30 hover:text-white transition-colors"><Plus size={12} /></button>
                            </div>
                        </div>

                        {/* Investment Col */}
                        <div className="md:col-span-3 text-left md:text-right space-y-2">
                            <p className="text-3xl font-serif text-white">{formatting.format(item.price * item.quantity)}</p>
                            <p className="text-[9px] text-white/30 font-bold uppercase tracking-[0.3em]">{formatting.format(item.price)} ea.</p>
                        </div>
                     </motion.div>
                   ))
                 ) : (
                   <motion.div 
                     initial={{ opacity: 0 }} 
                     animate={{ opacity: 1 }} 
                     className="py-32 flex flex-col items-center justify-center text-center space-y-8 border border-white/5 rounded-[3rem] bg-[#0A0A0C]"
                   >
                      <ShoppingBag size={48} className="text-[#C6A75E]/20" />
                      <div className="space-y-4">
                          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">Queue Empty</p>
                          <h2 className="text-4xl font-serif text-white">Your dossier is awaiting selections.</h2>
                      </div>
                      <button className="text-[#C6A75E] text-[9px] font-bold uppercase tracking-[0.4em] border-b border-[#C6A75E]/30 pb-2 hover:text-white hover:border-white transition-colors mt-8">
                          Return to Catalog
                      </button>
                   </motion.div>
                 )}
              </AnimatePresence>
           </div>

           {/* Sticky Summary */}
           <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                 
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="bg-[#0A0A0C]/80 backdrop-blur-3xl border border-white/5 p-10 md:p-14 rounded-[3rem] relative overflow-hidden"
                 >
                    {/* Decorative Flare */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A75E]/5 blur-[80px] rounded-full pointer-events-none" />
                    
                    <h3 className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#C6A75E] mb-12 border-b border-white/5 pb-6">Ledger Summary</h3>
                    
                    <div className="space-y-6">
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Subtotal</span>
                          <span className="font-serif text-2xl text-white">{formatting.format(subtotal)}</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">White Glove Logistics</span>
                          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">Complimentary</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Provenance Protocol</span>
                          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#C6A75E]">Verified</span>
                       </div>
                    </div>

                    <div className="mt-12 pt-10 border-t border-white/5">
                       <div className="flex justify-between items-end mb-12">
                          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">Total Commitment</span>
                          <span className="text-5xl font-serif tracking-tighter text-white">{formatting.format(subtotal)}</span>
                       </div>
                       
                       <button className="w-full py-5 bg-[#C6A75E] text-[#050505] rounded-full text-[9px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 flex items-center justify-center gap-4 shadow-[0_0_30px_rgba(198,167,94,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed" disabled={items.length === 0}>
                          Authorize Procurement <ArrowRight size={14} />
                       </button>
                    </div>
                 </motion.div>

                 {/* Trust Modules */}
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 px-6 pt-6 border-t border-white/5"
                 >
                    <div className="flex items-center gap-3">
                       <ShieldCheck size={14} className="text-[#C6A75E]" />
                       <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/30">Encrypted Transport</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Truck size={14} className="text-[#C6A75E]" />
                       <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/30">Global Discretion</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Zap size={14} className="text-[#C6A75E]" />
                       <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/30">Priority Node</span>
                    </div>
                 </motion.div>
              </div>
           </div>

        </div>
      </div>

    </div>
  );
}
