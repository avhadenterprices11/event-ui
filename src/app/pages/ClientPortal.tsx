import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ShieldCheck, Cpu, Network, Lock, ArrowRight, User } from 'lucide-react';

export default function ClientPortal() {
  const [initStage, setInitStage] = useState(0);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setInitStage(1), 1000), // Scanning identity
      setTimeout(() => setInitStage(2), 2500), // Establishing secure link
      setTimeout(() => setInitStage(3), 4000), // Ready
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white flex flex-col items-center justify-center relative overflow-hidden selection:bg-[#C6A75E]/30">
      
      {/* Background Technical Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#C6A75E 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      {/* Moving Technical Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div 
           animate={{ y: ['-100%', '100%'] }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent"
         />
      </div>

      <div className="relative z-10 w-full max-w-xl px-8 flex flex-col items-center">
        
        {/* The Central Visual Node */}
        <div className="relative w-40 h-40 mb-16">
           <AnimatePresence>
             {initStage < 3 && (
               <motion.div 
                 key="loader"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="absolute inset-0"
               >
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 border-2 border-dashed border-[#C6A75E]/20 rounded-full"
                 />
                 <motion.div 
                   animate={{ rotate: -360 }}
                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-4 border border-[#C6A75E]/40 rounded-full border-t-transparent"
                 />
               </motion.div>
             )}
           </AnimatePresence>

           <div className="absolute inset-0 flex items-center justify-center">
              {initStage < 3 ? (
                <Cpu className="w-10 h-10 text-[#C6A75E] animate-pulse" />
              ) : (
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-24 h-24 bg-[#C6A75E] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(198,167,94,0.4)]"
                >
                   <User className="text-[#0B0B0D] w-10 h-10" />
                </motion.div>
              )}
           </div>
        </div>

        {/* Messaging Area */}
        <div className="text-center space-y-4 mb-20">
           <AnimatePresence mode="wait">
             {initStage === 0 && (
               <motion.div key="s0" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                 <p className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em]">Initialising Gateway...</p>
               </motion.div>
             )}
             {initStage === 1 && (
               <motion.div key="s1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                 <p className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em]">Scanning Identity Matrix...</p>
               </motion.div>
             )}
             {initStage === 2 && (
               <motion.div key="s2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                 <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.5em]">Establishing Secure Neural Link...</p>
               </motion.div>
             )}
             {initStage === 3 && (
               <motion.div key="s3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
                 <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.8em] block">Access Granted</span>
                 <h1 className="text-5xl font-serif font-light tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
                    Welcome, <br />
                    <span className="italic">Alexander.</span>
                 </h1>
                 <p className="text-white/20 text-xs font-medium uppercase tracking-[0.3em] max-w-xs mx-auto leading-relaxed">
                    Your event architecture is waiting in the control room.
                 </p>
               </motion.div>
             )}
           </AnimatePresence>
        </div>

        {/* Final CTA */}
        <AnimatePresence>
           {initStage === 3 && (
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="w-full space-y-6"
             >
                <button 
                  className="w-full py-6 bg-white text-[#0B0B0D] font-bold uppercase tracking-[0.2em] text-[10px] rounded-2xl flex items-center justify-center gap-6 hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)] transition-all group"
                  onClick={() => setIsAuthorized(true)}
                >
                   Enter Control Room <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
                
                <div className="flex items-center justify-between px-2 opacity-30 text-[8px] font-bold uppercase tracking-widest">
                   <div className="flex items-center gap-2">
                      <Lock size={10} />
                      Terminal Secured
                   </div>
                   <div className="flex items-center gap-2">
                      <Network size={10} />
                      Cloud Sync: Active
                   </div>
                </div>
             </motion.div>
           )}
        </AnimatePresence>

      </div>

      {/* Decorative Technical Overlay */}
      <div className="fixed bottom-12 left-12 opacity-10 pointer-events-none hidden lg:block">
         <div className="text-[10px] font-mono leading-relaxed overflow-hidden h-20">
            {`> IDENTITY_SCAN: SUCCESS\n> LINK_STABILITY: 99.8%\n> ENCRYPTION: MIL-SPEC 256\n> SYSTEM_READY: TRUE`}
         </div>
      </div>

    </div>
  );
}
