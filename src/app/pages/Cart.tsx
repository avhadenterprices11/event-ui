import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Plus, Minus, CreditCard, ShieldCheck, ArrowRight, Trash2 } from 'lucide-react';
import { Link } from 'react-router';

const initialItems = [
  {
    id: 1,
    name: 'Bespoke Lighting Orchestration',
    category: 'Production',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400',
    quantity: 1
  },
  {
    id: 2,
    name: 'Crystal Chandelier Rental (Large)',
    category: 'Decor',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=400',
    quantity: 2
  }
];

export default function CartPage() {
  const [items, setItems] = useState(initialItems);

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const serviceFee = subtotal * 0.1;
  const total = subtotal + serviceFee;

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] pt-40 pb-24 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="mb-20 border-b border-white/5 pb-12">
           <motion.span 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.6em] block mb-6"
           >
             Investment Summary
           </motion.span>
           <h1 className="text-6xl md:text-8xl font-light text-white tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
             Your <span className="italic font-serif text-[#C6A75E]">Portfolio.</span>
           </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Cart Items */}
          <div className="lg:col-span-8 space-y-10">
            <AnimatePresence mode="popLayout">
              {items.length > 0 ? (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="flex flex-col md:flex-row gap-10 bg-[#111114] border border-white/5 p-8 rounded-[32px] group hover:border-[#C6A75E]/20 transition-all shadow-2xl shadow-black/40"
                  >
                    <div className="w-full md:w-32 h-32 rounded-3xl overflow-hidden shrink-0 border border-white/5">
                       <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                       <div className="flex justify-between items-start">
                          <div>
                             <span className="text-[#C6A75E] text-[8px] font-bold uppercase tracking-widest block mb-2">{item.category}</span>
                             <h3 className="text-xl text-white font-light tracking-tight mb-2">{item.name}</h3>
                          </div>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-white/20 hover:text-red-400 transition-colors p-2"
                          >
                             <Trash2 size={20} />
                          </button>
                       </div>

                       <div className="flex items-center justify-between mt-6">
                          <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-2 border border-white/5">
                             <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 rounded-xl hover:bg-white/10 flex items-center justify-center text-white transition-colors"><Minus size={14} /></button>
                             <span className="text-sm text-white font-bold w-4 text-center">{item.quantity}</span>
                             <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 rounded-xl hover:bg-white/10 flex items-center justify-center text-white transition-colors"><Plus size={14} /></button>
                          </div>
                          <span className="text-xl text-white font-light">
                             ${(item.price * item.quantity).toLocaleString()}
                          </span>
                       </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="py-20 text-center space-y-8">
                   <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto text-white/10">
                      <ShoppingBag size={40} />
                   </div>
                   <p className="text-white/20 uppercase tracking-[0.4em] text-[10px] font-bold">Portfolio is empty</p>
                   <Link to="/services">
                      <button className="px-10 py-4 bg-[#C6A75E] text-[#0B0B0D] rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">Explore Collections</button>
                   </Link>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Luxury Checkout Summary */}
          <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
             <div className="bg-[#111114] border border-[#C6A75E]/10 p-10 rounded-[40px] shadow-2xl shadow-black relative overflow-hidden group">
                
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A75E]/5 blur-[60px] rounded-full" />

                <h2 className="text-2xl text-white mb-10 font-serif italic" style={{ fontFamily: 'var(--font-heading)' }}>Executive Summary</h2>
                
                <div className="space-y-6 mb-10">
                   <div className="flex justify-between items-center text-sm font-light">
                      <span className="text-white/40">Portfolio Value</span>
                      <span className="text-white">${subtotal.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between items-center text-sm font-light">
                      <span className="text-white/40">Curation & Service Fee</span>
                      <span className="text-white">${serviceFee.toLocaleString()}</span>
                   </div>
                   <div className="h-px bg-white/5 my-4" />
                   <div className="flex justify-between items-end">
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Grand Total</span>
                      <span className="text-4xl text-[#C6A75E] font-light tracking-tighter">${total.toLocaleString()}</span>
                   </div>
                </div>

                <div className="space-y-4">
                   <button className="w-full bg-[#C6A75E] hover:bg-[#D4B76E] text-[#0B0B0D] rounded-2xl py-5 font-bold uppercase tracking-[0.4em] text-[10px] transition-all flex items-center justify-center gap-4 shadow-xl shadow-[#C6A75E]/10 group/btn">
                      Begin Procurement
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                   <div className="flex items-center justify-center gap-3 text-white/20 text-[8px] font-bold uppercase tracking-widest mt-6">
                      <ShieldCheck size={12} className="text-[#C6A75E]" />
                      Secured by Quantum Verification
                   </div>
                </div>

                {/* Aesthetic Detail */}
                <div className="mt-12 pt-8 border-t border-white/5">
                   <div className="flex justify-between items-center">
                      <div className="flex -space-x-3">
                         {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />)}
                      </div>
                      <span className="text-white/20 text-[8px] font-bold uppercase tracking-widest">+12 Premium Partners</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Background Graphic */}
      <div className="fixed top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 text-white/[0.01] text-[500px] font-bold rotate-90 pointer-events-none select-none">
        LEGACY
      </div>
    </div>
  );
}
