import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Wind, Music, Scissors, ArrowRight, SlidersHorizontal, Hexagon
} from 'lucide-react';

const sensoryElements = {
  aroma: [
    { id: 'oudh', label: 'Vintage Oudh', description: 'Deep, resinous wood and smoked amber', color: '#C6A75E' },
    { id: 'jasmine', label: 'Tuscan Jasmine', description: 'Night-blooming florals with crisp citrus', color: '#FDFCF0' },
    { id: 'sea', label: 'Aegean Mist', description: 'Ozone, crushed sea salt, and white musk', color: '#3B82F6' }
  ],
  texture: [
    { id: 'velvet', label: 'Midnight Velvet', description: 'Heavy, light-absorbing textile', color: '#1A1A1A' },
    { id: 'silk', label: 'Imperial Silk', description: 'Liquid, high-sheen drape', color: '#E5C97A' },
    { id: 'stone', label: 'Raw Basalt', description: 'Porous, brutalist volcanic rock', color: '#4B5563' }
  ],
  sonic: [
    { id: 'classic', label: 'Orchestral String', description: 'Live quartets and grand piano', color: '#C6A75E' },
    { id: 'lofi', label: 'Ambient Pulse', description: 'Sub-bass and atmospheric synth', color: '#6B7280' },
    { id: 'nature', label: 'Lake Rhythms', description: 'Water movement and wind chimes', color: '#10B981' }
  ]
};

const backgroundMap = {
  oudh: 'https://images.unsplash.com/photo-1605651586523-289b4f9812cc?q=80&w=2070&auto=format&fit=crop',
  jasmine: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop',
  sea: 'https://images.unsplash.com/photo-1518182170546-076616fdcbdd?q=80&w=2070&auto=format&fit=crop'
};

export default function SensoryBoard() {
  const [selections, setSelections] = useState({
    aroma: 'oudh',
    texture: 'silk',
    sonic: 'classic'
  });

  const activeAromaColor = sensoryElements.aroma.find(a => a.id === selections.aroma)?.color || '#C6A75E';

  const sections = [
    { id: 'aroma', icon: <Wind size={16} />, title: "Olfactory Note", items: sensoryElements.aroma },
    { id: 'texture', icon: <Scissors size={16} />, title: "Tactile Texture", items: sensoryElements.texture },
    { id: 'sonic', icon: <Music size={16} />, title: "Sonic Profile", items: sensoryElements.sonic }
  ];

  return (
    <div className="h-screen w-full bg-[#050505] text-white flex relative overflow-hidden font-sans">
      
      {/* Fullscreen Background Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
           <motion.img 
             key={selections.aroma}
             src={backgroundMap[selections.aroma as keyof typeof backgroundMap]}
             initial={{ opacity: 0, scale: 1.05 }}
             animate={{ opacity: 0.3, scale: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 1.5, ease: "easeInOut" }}
             className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
             alt="Sensory Atmosphere"
           />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-[#050505]/20" />
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row h-full">
         
         {/* Sidebar - Control Panel */}
         <aside className="w-full lg:w-[450px] xl:w-[500px] shrink-0 border-r border-white/5 flex flex-col bg-[#050505]/80 backdrop-blur-3xl h-full overflow-y-auto no-scrollbar relative z-20">
            <div className="p-10 lg:p-14 xl:p-16 flex-1 flex flex-col">
               
               {/* Title */}
               <div className="space-y-6 mb-16">
                 <div className="flex items-center gap-4">
                    <SlidersHorizontal size={14} className="text-[#C6A75E]" />
                    <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em]">Atmospheric Engine</span>
                 </div>
                 <h1 className="text-5xl lg:text-6xl font-serif font-light tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
                    Sensory <br />
                    <span className="italic text-[#C6A75E]">Architecture.</span>
                 </h1>
                 <p className="text-white/40 text-sm font-light leading-relaxed max-w-[300px]">
                    Layer the invisible. Select the olfactory, tactile, and sonic signatures to define your event's soul.
                 </p>
               </div>

               {/* Controls */}
               <div className="space-y-16 flex-1">
                  {sections.map(section => (
                    <div key={section.id} className="space-y-6">
                       <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                          <div className="text-white/40">{section.icon}</div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">{section.title}</span>
                       </div>
                       <div className="space-y-3">
                          {section.items.map(item => {
                            const isActive = selections[section.id as keyof typeof selections] === item.id;
                            return (
                               <div 
                                 key={item.id}
                                 onClick={() => setSelections({...selections, [section.id]: item.id})}
                                 className={`group relative p-5 rounded-[20px] border cursor-pointer transition-all duration-500 overflow-hidden ${isActive ? 'border-[#C6A75E] bg-[#C6A75E]/5' : 'border-white/5 hover:border-white/20 hover:bg-white/5'}`}
                               >
                                  <div className="relative z-10 flex justify-between items-center">
                                     <div className="flex flex-col gap-1.5">
                                        <span className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-[#C6A75E]' : 'text-white'}`}>{item.label}</span>
                                        <span className="text-[10px] text-white/40 font-light">{item.description}</span>
                                     </div>
                                     <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${isActive ? 'border-[#C6A75E]' : 'border-white/20'}`}>
                                        {isActive && <motion.div layoutId={`dot-${section.id}`} className="w-2 h-2 rounded-full bg-[#C6A75E]" />}
                                     </div>
                                  </div>
                               </div>
                            );
                          })}
                       </div>
                    </div>
                  ))}
               </div>

               {/* CTA */}
               <div className="mt-16 pt-8 border-t border-white/5">
                 <button className="w-full py-5 bg-[#C6A75E] text-[#050505] rounded-[20px] font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 hover:bg-white transition-colors duration-500 shadow-[0_0_30px_rgba(198,167,94,0.15)] group">
                    Finalise Sensory Map <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </button>
               </div>

            </div>
         </aside>

         {/* Immersive View */}
         <main className="flex-1 h-full flex items-center justify-center relative p-12 lg:p-24 overflow-hidden">
            
            {/* Central Artifact HUD */}
            <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center">
               
               {/* Architectural Crosshairs */}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-px h-full bg-white/40" />
                  <div className="h-px w-full bg-white/40 absolute" />
                  {/* Center Dot */}
                  <div className="absolute w-2 h-2 rounded-full bg-white" />
               </div>

               {/* Orbital Rings */}
               <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-white/10 rounded-full"
               />
               <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[15%] border border-[#C6A75E]/20 rounded-full border-dashed"
               />
               <div className="absolute inset-[30%] border border-white/5 rounded-full" />

               {/* The Core */}
               <motion.div
                 key={selections.texture + selections.aroma}
                 initial={{ scale: 0.8, opacity: 0, filter: 'blur(20px)' }}
                 animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                 transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                 className="w-[50%] h-[50%] rounded-full relative flex items-center justify-center z-10"
               >
                 {/* Dynamic Glow based on Aroma Color */}
                 <div 
                   className="absolute inset-0 rounded-full blur-[60px] opacity-60 mix-blend-screen transition-colors duration-1000"
                   style={{ backgroundColor: activeAromaColor }}
                 />
                 
                 {/* Texture Visual HUD */}
                 <div className="absolute inset-6 rounded-full border border-white/20 bg-[#050505]/40 backdrop-blur-xl overflow-hidden flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <div 
                       className="absolute inset-0 opacity-30 transition-all duration-1000"
                       style={{
                          backgroundImage: 'radial-gradient(circle, #C6A75E 1px, transparent 1px)',
                          backgroundSize: selections.texture === 'silk' ? '8px 8px' : selections.texture === 'velvet' ? '3px 3px' : '30px 30px',
                       }}
                    />
                    <Hexagon size={48} className="text-white/40 animate-[spin_10s_linear_infinite]" />
                 </div>
               </motion.div>

               {/* Floating Labels */}
               <div className="absolute bottom-8 left-0 right-0 flex justify-between px-8 z-20">
                  <div className="space-y-1">
                     <span className="block text-[#C6A75E] text-[8px] font-bold uppercase tracking-[0.3em]">Status</span>
                     <span className="block text-white text-[10px] tracking-widest font-mono">CALIBRATED</span>
                  </div>
                  <div className="space-y-1 text-right">
                     <span className="block text-[#C6A75E] text-[8px] font-bold uppercase tracking-[0.3em]">Signature</span>
                     <span className="block text-white text-[10px] tracking-widest font-mono uppercase">{selections.aroma}-{selections.texture}</span>
                  </div>
               </div>
            </div>
            
            {/* Cinematic Indicator (Top Right) */}
            <div className="absolute top-12 right-12 text-right space-y-4">
               <div className="flex items-center gap-3 justify-end text-white/40">
                  <div className="w-2 h-2 rounded-full bg-[#C6A75E] animate-pulse shadow-[0_0_10px_rgba(198,167,94,1)]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Live Matrix</span>
               </div>
               <p className="text-white text-xs font-mono tracking-widest opacity-60">ENG v2.04</p>
            </div>

         </main>
      </div>
    </div>
  );
}
