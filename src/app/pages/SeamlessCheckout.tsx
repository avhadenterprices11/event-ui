import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  MapPin, CreditCard, ClipboardCheck, ArrowRight, 
  ArrowLeft, ShieldCheck, Truck, Lock, CheckCircle 
} from 'lucide-react';

const steps = [
  { id: 'address', label: 'Logistics', icon: <MapPin size={16} /> },
  { id: 'payment', label: 'Capital', icon: <CreditCard size={16} /> },
  { id: 'review', label: 'Verification', icon: <ClipboardCheck size={16} /> }
];

export default function SeamlessCheckout() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    else setIsCompleted(true);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-8 relative overflow-hidden selection:bg-[#C6A75E]/30">
         {/* Ambient Lighting Background */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[250px] rounded-full pointer-events-none z-0" />
         
         <motion.div 
           initial={{ opacity: 0, scale: 0.95, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
           className="relative z-10 text-center space-y-12 max-w-2xl w-full bg-[#0A0A0C]/80 backdrop-blur-3xl border border-white/5 p-16 md:p-24 rounded-[4rem] shadow-2xl"
         >
            <motion.div 
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
               className="w-32 h-32 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mx-auto text-emerald-400 relative"
            >
               <div className="absolute inset-0 rounded-full border border-emerald-400/30 animate-[ping_3s_ease-in-out_infinite]" />
               <CheckCircle size={48} />
            </motion.div>
            
            <div className="space-y-6">
               <h2 className="text-5xl md:text-6xl font-serif text-white tracking-tight">Authorization <br/><span className="italic text-emerald-400">Secured.</span></h2>
               <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] leading-loose max-w-md mx-auto">
                  Your procurement has been authorized. A heritage consultant will contact you within 2 hours for white-glove logistics confirmation.
               </p>
            </div>
            
            <button className="px-12 py-5 bg-white text-[#050505] rounded-full text-[9px] font-black uppercase tracking-[0.4em] hover:bg-[#C6A75E] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(198,167,94,0.3)] mt-8">
               Return to Dossier
            </button>
         </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-40 flex flex-col items-center px-6 selection:bg-[#C6A75E]/30 relative overflow-hidden">
      
      {/* Ambient Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#C6A75E]/5 blur-[250px] rounded-full pointer-events-none z-0" />

      {/* Step Indicator HUD */}
      <div className="w-full max-w-3xl mb-16 flex items-center justify-between relative z-10">
         {steps.map((step, i) => (
           <div key={step.id} className="flex flex-col items-center gap-4 relative z-10">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 ${currentStep >= i ? 'bg-[#C6A75E] text-[#050505] shadow-[0_0_20px_rgba(198,167,94,0.2)]' : 'bg-[#0A0A0C] border border-white/5 text-white/20'}`}>
                 {step.icon}
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-[0.4em] transition-opacity duration-700 ${currentStep === i ? 'opacity-100 text-[#C6A75E]' : 'opacity-40 text-white'}`}>
                 {step.label}
              </span>
              
              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+28px)] top-7 w-[calc(100vw/3-28px*2)] sm:w-40 md:w-56 lg:w-64 h-[1px] -translate-y-1/2 overflow-hidden bg-white/5">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: currentStep > i ? '100%' : '0%' }}
                     transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                     className="h-full bg-[#C6A75E]" 
                   />
                </div>
              )}
           </div>
         ))}
      </div>

      {/* Wizard Form Container */}
      <div className="w-full max-w-3xl bg-[#0A0A0C]/80 backdrop-blur-3xl border border-white/5 p-10 md:p-16 lg:p-20 rounded-[3rem] relative z-10 shadow-2xl">
         
         <AnimatePresence mode="wait">
            <motion.div
               key={currentStep}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20, filter: 'blur(5px)' }}
               transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
               className="space-y-16"
            >
               {currentStep === 0 && (
                 <div className="space-y-12">
                    <div className="space-y-6 text-center pb-8 border-b border-white/5">
                       <h2 className="text-5xl md:text-6xl font-serif tracking-tight">Logistics Destination.</h2>
                       <p className="text-white/40 text-[9px] md:text-[10px] uppercase font-bold tracking-[0.5em]">Where the Masterpiece Resides</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-4">
                          <label className="text-[8px] uppercase font-bold text-white/40 tracking-[0.4em] pl-1">Legal Entity Name</label>
                          <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-xl py-5 px-6 text-[10px] font-bold uppercase tracking-[0.3em] focus:border-[#C6A75E]/50 focus:outline-none transition-colors placeholder:text-white/10" placeholder="Julian Vance" />
                       </div>
                       <div className="space-y-4">
                          <label className="text-[8px] uppercase font-bold text-white/40 tracking-[0.4em] pl-1">Neural Link (Email)</label>
                          <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-xl py-5 px-6 text-[10px] font-bold uppercase tracking-[0.3em] focus:border-[#C6A75E]/50 focus:outline-none transition-colors placeholder:text-white/10" placeholder="vance@heritage.com" />
                       </div>
                       <div className="md:col-span-2 space-y-4">
                          <label className="text-[8px] uppercase font-bold text-white/40 tracking-[0.4em] pl-1">Primary Estate / Venue Protocol</label>
                          <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-xl py-5 px-6 text-[10px] font-bold uppercase tracking-[0.3em] focus:border-[#C6A75E]/50 focus:outline-none transition-colors placeholder:text-white/10" placeholder="Villa del Balbianello, Lake Como" />
                       </div>
                       <div className="space-y-4">
                          <label className="text-[8px] uppercase font-bold text-white/40 tracking-[0.4em] pl-1">Regional Sector</label>
                          <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-xl py-5 px-6 text-[10px] font-bold uppercase tracking-[0.3em] focus:border-[#C6A75E]/50 focus:outline-none transition-colors placeholder:text-white/10" placeholder="Tremezzina" />
                       </div>
                       <div className="space-y-4">
                          <label className="text-[8px] uppercase font-bold text-white/40 tracking-[0.4em] pl-1">Territory Code</label>
                          <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-xl py-5 px-6 text-[10px] font-bold uppercase tracking-[0.3em] focus:border-[#C6A75E]/50 focus:outline-none transition-colors placeholder:text-white/10" placeholder="22016" />
                       </div>
                    </div>
                 </div>
               )}

               {currentStep === 1 && (
                 <div className="space-y-12">
                    <div className="space-y-6 text-center pb-8 border-b border-white/5">
                       <h2 className="text-5xl md:text-6xl font-serif tracking-tight">Capital Settlement.</h2>
                       <p className="text-white/40 text-[9px] md:text-[10px] uppercase font-bold tracking-[0.5em]">High-Limit Procurement Protocol</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       {['Black Card', 'Treasury Wire', 'Digital Asset'].map((m) => (
                         <button key={m} className={`flex flex-col items-center gap-4 p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${m === 'Black Card' ? 'bg-[#C6A75E] text-[#050505] border-[#C6A75E] shadow-[0_10px_30px_rgba(198,167,94,0.15)]' : 'bg-[#050505] border-white/10 text-white/40 hover:text-white hover:border-[#C6A75E]/30'}`}>
                            <CreditCard size={20} />
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-center">{m}</span>
                         </button>
                       ))}
                    </div>

                    <div className="space-y-8 pt-8 border-t border-white/5">
                       <div className="relative">
                          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#C6A75E]"><Lock size={16} /></div>
                          <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-2xl py-6 px-16 text-[11px] font-bold uppercase tracking-[0.4em] focus:outline-none focus:border-[#C6A75E]/50 transition-colors placeholder:text-white/20" placeholder="**** **** **** 8824" />
                       </div>
                       <div className="grid grid-cols-2 gap-8">
                          <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-2xl py-5 px-6 text-[10px] font-bold uppercase tracking-[0.4em] text-center focus:outline-none focus:border-[#C6A75E]/50 transition-colors placeholder:text-white/20" placeholder="MM/YY" />
                          <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-2xl py-5 px-6 text-[10px] font-bold uppercase tracking-[0.4em] text-center focus:outline-none focus:border-[#C6A75E]/50 transition-colors placeholder:text-white/20" placeholder="SEC (CVV)" />
                       </div>
                    </div>
                 </div>
               )}

               {currentStep === 2 && (
                 <div className="space-y-12">
                    <div className="space-y-6 text-center pb-8 border-b border-white/5">
                       <h2 className="text-5xl md:text-6xl font-serif tracking-tight">Final Verification.</h2>
                       <p className="text-white/40 text-[9px] md:text-[10px] uppercase font-bold tracking-[0.5em]">Review Your Heritage Artifacts</p>
                    </div>
                    
                    <div className="bg-[#050505] border border-white/5 rounded-[2rem] p-10 md:p-12 space-y-8 relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A75E]/5 blur-[50px] rounded-full pointer-events-none" />
                       
                       <div className="flex justify-between items-center pb-6 border-b border-white/5 relative z-10">
                          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C6A75E]">Artifact</span>
                          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C6A75E]">Investment</span>
                       </div>
                       
                       <div className="space-y-6 relative z-10">
                          <div className="flex justify-between items-center">
                             <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">Celestial Crystal Flute <span className="text-white/30">(x2)</span></span>
                             <span className="text-2xl font-serif text-white">$1,700.00</span>
                          </div>
                          <div className="flex justify-between items-center">
                             <span className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/40">Logistics (White Glove)</span>
                             <span className="text-[9px] uppercase font-bold tracking-[0.4em] text-emerald-400">Complimentary</span>
                          </div>
                       </div>
                       
                       <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 relative z-10">
                          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">Final Ledger Commitment</span>
                          <span className="text-5xl font-serif tracking-tighter text-white">$1,700.00</span>
                       </div>
                    </div>
                    
                    <div className="p-8 bg-[#C6A75E]/5 border border-[#C6A75E]/20 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                       <ShieldCheck size={28} className="text-[#C6A75E] shrink-0" />
                       <p className="text-[10px] text-[#C6A75E] uppercase font-bold tracking-[0.3em] leading-loose">
                          By authorizing, you command the immediate allocation of these artifacts from our global artisan collective network.
                       </p>
                    </div>
                 </div>
               )}
            </motion.div>
         </AnimatePresence>

         {/* Navigation Actions */}
         <div className="mt-16 flex flex-col-reverse sm:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5">
            <button 
              onClick={prevStep}
              className={`w-full sm:w-auto flex items-center justify-center gap-3 text-white/40 text-[9px] font-black uppercase tracking-[0.4em] hover:text-white transition-colors py-4 ${currentStep === 0 ? 'invisible' : 'visible'}`}
            >
               <ArrowLeft size={14} /> Revert Step
            </button>
            <button 
              onClick={nextStep}
              className="w-full sm:w-auto sm:flex-1 max-w-sm py-5 bg-[#C6A75E] text-[#050505] rounded-full text-[9px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(198,167,94,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
               {currentStep === 2 ? 'Authorize Protocol' : 'Proceed Forward'} <ArrowRight size={14} />
            </button>
         </div>

      </div>

      {/* Trust Footer HUD */}
      <div className="mt-24 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40 relative z-10">
         <div className="flex items-center gap-3">
            <ShieldCheck size={14} className="text-[#C6A75E]" />
            <span className="text-[8px] font-bold uppercase tracking-[0.4em]">Heritage Secure Node</span>
         </div>
         <div className="flex items-center gap-3">
            <Truck size={14} className="text-[#C6A75E]" />
            <span className="text-[8px] font-bold uppercase tracking-[0.4em]">Global Escrow Logistics</span>
         </div>
         <div className="flex items-center gap-3">
            <Lock size={14} className="text-[#C6A75E]" />
            <span className="text-[8px] font-bold uppercase tracking-[0.4em]">RSA-4096 Encrypted</span>
         </div>
      </div>

    </div>
  );
}
