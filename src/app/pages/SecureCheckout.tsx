import { motion } from 'framer-motion';
import { ShieldCheck, Lock, CreditCard, PenTool, CheckCircle, ArrowLeft, Globe, Zap, FileText } from 'lucide-react';

export default function SecureCheckout() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C6A75E]/30 relative pb-40">
      
      {/* Ambient Lighting Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[#C6A75E]/5 blur-[250px] rounded-full pointer-events-none z-0" />
      
      <div className="max-w-[2000px] mx-auto pt-40 px-6 md:px-12 lg:px-24 relative z-10 flex flex-col xl:flex-row gap-16 lg:gap-24">
         
         {/* Left Side: Authorization Form */}
         <div className="flex-1 space-y-16">
            
            <header className="space-y-8">
               <motion.button 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4 text-white/30 text-[9px] font-bold uppercase tracking-[0.4em] hover:text-[#C6A75E] transition-colors"
               >
                  <ArrowLeft size={14} /> Back to Procurement Queue
               </motion.button>
               
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
               >
                  <h1 className="text-6xl md:text-[6rem] lg:text-[7rem] font-serif font-light tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-heading)' }}>
                     Secure <br /><span className="italic text-[#C6A75E]">Authorization.</span>
                  </h1>
                  <div className="flex items-center gap-4 text-emerald-400 text-[9px] font-bold uppercase tracking-[0.4em] bg-emerald-400/5 border border-emerald-400/10 px-5 py-3 rounded-full w-fit">
                     <Lock size={12} /> Military-Grade Encryption Active
                  </div>
               </motion.div>
            </header>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
               className="space-y-16 lg:bg-[#0A0A0C]/50 lg:backdrop-blur-3xl lg:border border-white/5 p-0 lg:p-16 rounded-[3rem]"
            >
               {/* Identity Verification */}
               <div className="space-y-8">
                  <div className="flex items-center gap-6 border-b border-white/5 pb-4">
                     <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em]">01</span>
                     <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">Identity Node</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-4">
                        <label className="text-[8px] text-white/40 uppercase font-bold tracking-[0.4em]">Legal Entity Name</label>
                        <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-xl py-5 px-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white focus:outline-none focus:border-[#C6A75E]/50 transition-colors placeholder:text-white/10" placeholder="E.g. Alexander Vance" />
                     </div>
                     <div className="space-y-4">
                        <label className="text-[8px] text-white/40 uppercase font-bold tracking-[0.4em]">Neural Link (Email)</label>
                        <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-xl py-5 px-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white focus:outline-none focus:border-[#C6A75E]/50 transition-colors placeholder:text-white/10" placeholder="vance@heritage.com" />
                     </div>
                  </div>
               </div>

               {/* Procurement Method */}
               <div className="space-y-8">
                  <div className="flex items-center gap-6 border-b border-white/5 pb-4">
                     <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em]">02</span>
                     <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">Capital Routing</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                     {[
                       { id: 'wire', label: 'Treasury Wire', icon: <Globe size={16} /> },
                       { id: 'card', label: 'Black Card', icon: <CreditCard size={16} />, active: true },
                       { id: 'crypto', label: 'Digital Asset', icon: <Zap size={16} /> }
                     ].map(method => (
                       <button key={method.id} className={`flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${method.active ? 'bg-[#C6A75E] border-[#C6A75E] text-[#050505] shadow-[0_10px_30px_rgba(198,167,94,0.15)]' : 'bg-[#050505] border-white/10 text-white/40 hover:text-white hover:border-[#C6A75E]/30'}`}>
                          {method.icon}
                          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-center">{method.label}</span>
                       </button>
                     ))}
                  </div>

                  <div className="relative mt-8">
                     <div className="absolute left-6 top-1/2 -translate-y-1/2"><ShieldCheck size={16} className="text-[#C6A75E]" /></div>
                     <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-2xl py-6 pl-14 pr-6 text-[11px] font-bold uppercase tracking-[0.4em] text-white focus:outline-none focus:border-[#C6A75E]/50 transition-colors placeholder:text-white/20" placeholder="**** **** **** 8824" />
                     <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/30">CVV</span>
                        <input type="text" className="w-16 bg-transparent border-b border-white/20 text-center py-1 text-[10px] font-bold text-white focus:outline-none focus:border-[#C6A75E]" placeholder="***" />
                     </div>
                  </div>
               </div>

               {/* Digital Signature */}
               <div className="space-y-8">
                  <div className="flex items-center gap-6 border-b border-white/5 pb-4">
                     <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em]">03</span>
                     <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">Cryptographic Signature</h3>
                  </div>
                  
                  <div className="h-40 w-full bg-[#050505] border border-dashed border-white/10 hover:border-[#C6A75E]/50 transition-colors duration-500 rounded-3xl flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden">
                     <PenTool size={24} className="text-[#C6A75E] mb-4 group-hover:scale-110 transition-transform duration-500" />
                     <span className="text-[9px] font-bold text-white/30 tracking-[0.4em] group-hover:text-white/60 transition-colors uppercase">Acknowledge Terms & Provide Signature</span>
                     
                     <motion.div initial={{ width: 0 }} whileInView={{ width: '40%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="absolute h-[2px] bg-[#C6A75E]/40 bottom-12 left-1/2 -translate-x-1/2" />
                  </div>
               </div>
            </motion.div>
         </div>

         {/* Right Side: Ledger Summary */}
         <div className="w-full xl:w-[500px]">
            <div className="xl:sticky xl:top-32 bg-[#0A0A0C]/80 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 lg:p-14 space-y-12 relative overflow-hidden">
               {/* Decorative Flare */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A75E]/5 blur-[80px] rounded-full pointer-events-none" />
               
               <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <h3 className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#C6A75E]">Final Ledger</h3>
                  <FileText size={14} className="text-white/20" />
               </div>
               
               <div className="space-y-8 relative z-10">
                  {[
                    { label: 'Artifact Selections', val: '$6,950.00', color: 'text-white' },
                    { label: 'Bespoke Engraving', val: '$320.00', color: 'text-white' },
                    { label: 'White Glove Logistics', val: 'Complimentary', color: 'text-emerald-400' },
                    { label: 'Provenance Auth', val: '$140.00', color: 'text-white' }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em]">
                       <span className="text-white/40">{item.label}</span>
                       <span className={item.color}>{item.val}</span>
                    </div>
                  ))}
               </div>

               <div className="pt-12 border-t border-white/5 space-y-12 relative z-10">
                  <div className="flex justify-between items-end">
                     <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">Total Commitment</span>
                     <span className="text-5xl font-serif tracking-tighter text-white">$7,410.00</span>
                  </div>
                  
                  <button className="w-full py-6 bg-[#C6A75E] text-[#050505] rounded-full text-[9px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(198,167,94,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                     Procure Masterpiece <CheckCircle size={16} />
                  </button>

                  <div className="flex items-center justify-center gap-8 py-6 bg-[#050505] rounded-2xl border border-white/5">
                     <div className="flex flex-col items-center gap-2">
                        <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-white/30">Protocol</span>
                        <span className="text-[8px] font-bold tracking-[0.2em] text-[#C6A75E]">AES-256</span>
                     </div>
                     <div className="h-8 w-px bg-white/5" />
                     <div className="flex flex-col items-center gap-2">
                        <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-white/30">Node Auth</span>
                        <span className="text-[8px] font-bold tracking-[0.2em] text-[#C6A75E]">HT-4482-X</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>

    </div>
  );
}
