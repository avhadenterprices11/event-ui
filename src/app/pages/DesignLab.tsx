import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, Box, Zap, Users, X, Check, MousePointer2, Settings2, Download, Crosshair, Activity, Hexagon } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const designScenes = [
  { 
    id: 'ethereal', 
    title: 'Ethereal Forest', 
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1600',
    description: 'A fusion of organic textures and futuristic crystal architecture.',
    stats: { nodes: 1420, energy: '84%', capacity: 450 }
  },
  { 
    id: 'obsidian', 
    title: 'Obsidian Gala', 
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600',
    description: 'Dark-mode luxury with architectural lighting and velvet seating.',
    stats: { nodes: 3800, energy: '92%', capacity: 1200 }
  },
  { 
    id: 'heritage', 
    title: 'Heritage Palace', 
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600',
    description: 'Classical symmetry reimagined with modern structural engineering.',
    stats: { nodes: 2150, energy: '76%', capacity: 850 }
  }
];

export default function DesignLab() {
  const [activeScene, setActiveScene] = useState<string | null>(null);
  const [layers, setLayers] = useState({
    mandap: true,
    lighting: false,
    seating: true,
    atmospheric: false
  });

  const toggleLayer = (layer: keyof typeof layers) => {
    setLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  const sceneData = designScenes.find(s => s.id === activeScene);

  return (
    <div className="h-[100svh] w-screen bg-[#0B0B0D] overflow-hidden flex flex-col selection:bg-[#C6A75E]/30 relative font-sans">
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* Editorial Header */}
      <header className="px-8 lg:px-12 pt-32 pb-8 shrink-0 relative z-20">
         <div className="space-y-6 max-w-7xl mx-auto w-full">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4"
            >
               <div className="w-12 h-[1px] bg-[#C6A75E]" />
               <span className="text-[#C6A75E] text-[10px] font-black uppercase tracking-[0.5em]">Interactive Playground</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl lg:text-[100px] font-thin text-white tracking-tighter leading-none"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Design <span className="italic font-serif text-[#C6A75E]">Lab.</span>
            </motion.h1>
         </div>
      </header>

      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {!activeScene ? (
            /* SCENE SELECTION MATRIX */
            <motion.div 
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98, filter: 'blur(20px)' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-full flex items-center justify-center p-12"
            >
              <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                {designScenes.map((scene, index) => (
                  <motion.div
                    key={scene.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setActiveScene(scene.id)}
                    className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer border border-white/5 bg-[#111114] shadow-2xl block"
                  >
                    <ImageWithFallback 
                      src={scene.image} 
                      className="w-full h-full object-cover opacity-50 grayscale-[50%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" 
                      alt={scene.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                    
                    {/* Targeting Reticle */}
                    <div className="absolute inset-0 p-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100 pointer-events-none">
                       <Crosshair size={48} className="text-[#C6A75E]/50 animate-[spin_10s_linear_infinite]" strokeWidth={1} />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col gap-4">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-[1px] bg-[#C6A75E]" />
                          <span className="text-[#C6A75E] text-[9px] font-mono uppercase tracking-[0.4em]">Initialize Workspace 0{index + 1}</span>
                       </div>
                       <h3 className="text-4xl lg:text-5xl text-white font-thin tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>{scene.title}</h3>
                       <p className="text-white/40 text-xs font-light leading-relaxed max-w-[280px] h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-700 mt-2">{scene.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* WORKBENCH INTERFACE */
            <motion.div 
              key="workbench"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="h-full flex p-8 gap-8"
            >
               {/* MAIN CANVAS */}
               <div className="flex-1 relative bg-[#0B0B0D] rounded-3xl border border-white/10 overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,1)]">
                  
                  {/* The Base Scene Image */}
                  <motion.div
                    layoutId={`image-${activeScene}`}
                    className="absolute inset-0"
                  >
                     <ImageWithFallback 
                       src={sceneData?.image || ''} 
                       className="w-full h-full object-cover opacity-80 mix-blend-screen" 
                       alt="Canvas"
                     />
                  </motion.div>

                  {/* Canvas Overlays (The CAD Simulation) */}
                  <div className="absolute inset-0 pointer-events-none">
                     
                     {/* 1. Structural Architecture (Mandap) */}
                     <AnimatePresence>
                        {layers.mandap && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0"
                          >
                             {/* Wireframe Grid SVG */}
                             <svg width="100%" height="100%" className="absolute inset-0 opacity-40">
                               <defs>
                                 <pattern id="wireframe" width="100" height="100" patternUnits="userSpaceOnUse">
                                   <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#C6A75E" strokeWidth="0.5"/>
                                 </pattern>
                               </defs>
                               <rect width="100%" height="100%" fill="url(#wireframe)" />
                               {/* Central Focal Architecture */}
                               <rect x="30%" y="20%" width="40%" height="60%" fill="none" stroke="#C6A75E" strokeWidth="1" strokeDasharray="4 4" />
                               <circle cx="50%" cy="50%" r="20%" fill="none" stroke="#C6A75E" strokeWidth="0.5" />
                               <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#C6A75E" strokeWidth="0.5" strokeOpacity="0.5" />
                               <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#C6A75E" strokeWidth="0.5" strokeOpacity="0.5" />
                             </svg>
                             <div className="absolute top-[20%] left-[30%] -translate-y-full -translate-x-4 bg-[#C6A75E]/20 text-[#C6A75E] text-[8px] font-mono px-2 py-1 backdrop-blur-md border border-[#C6A75E]/30">
                               STRUC_VOL: 142.4M3
                             </div>
                          </motion.div>
                        )}
                     </AnimatePresence>

                     {/* 2. Cinematic Lighting */}
                     <AnimatePresence>
                        {layers.lighting && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 mix-blend-screen"
                          >
                             {/* Simulated Light Nodes */}
                             <div className="absolute top-[30%] left-[40%] w-32 h-32 bg-[#C6A75E] rounded-full blur-[60px] opacity-60 animate-pulse" />
                             <div className="absolute top-[40%] right-[30%] w-40 h-40 bg-white rounded-full blur-[80px] opacity-40 animate-pulse delay-100" />
                             <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_40px_20px_rgba(255,255,255,0.4)] flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full border border-white/50 animate-ping" />
                             </div>
                             <div className="absolute top-[25%] left-1/2 text-white text-[8px] font-mono bg-black/50 px-2 py-1 ml-6 border border-white/20 backdrop-blur-md">
                               LUMEN: 4500K
                             </div>
                          </motion.div>
                        )}
                     </AnimatePresence>

                     {/* 3. Seating Topology */}
                     <AnimatePresence>
                        {layers.seating && (
                          <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute bottom-0 inset-x-0 h-[40%] perspective-[1000px]"
                          >
                             <div className="w-full h-full border-t border-white/20" style={{ transform: 'rotateX(60deg)', backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#0B0B0D]" />
                             </div>
                             <div className="absolute bottom-[20%] right-[20%] bg-white/10 text-white text-[8px] font-mono px-3 py-1.5 backdrop-blur-md border border-white/20 flex items-center gap-2">
                               <Users size={10} /> CAPACITY: {sceneData?.stats.capacity} PAX
                             </div>
                          </motion.div>
                        )}
                     </AnimatePresence>

                     {/* 4. Atmospheric Fog */}
                     <AnimatePresence>
                        {layers.atmospheric && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 mix-blend-screen opacity-30"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.01' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, animation: 'drift 20s linear infinite' }}
                          />
                        )}
                     </AnimatePresence>
                  </div>

                  {/* Canvas Overlays - UI Chrome */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                     <button 
                       onClick={() => setActiveScene(null)}
                       className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                     >
                       <X size={16} />
                     </button>
                  </div>

                  {/* Scene Title Overlay */}
                  <div className="absolute top-6 right-6 text-right">
                     <span className="text-[#C6A75E] text-[9px] font-mono uppercase tracking-[0.4em] bg-black/50 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">Active Simulation</span>
                     <h2 className="text-white text-3xl font-light tracking-tighter mt-4" style={{ fontFamily: 'var(--font-heading)' }}>{sceneData?.title}</h2>
                  </div>
               </div>

               {/* CONTROL PANEL */}
               <div className="w-[360px] flex flex-col gap-6">
                  
                  {/* Layer Toggles */}
                  <div className="bg-[#111114] border border-white/[0.05] p-6 rounded-3xl shadow-2xl flex-1 flex flex-col">
                     <div className="flex items-center gap-4 text-white pb-6 border-b border-white/[0.05] mb-6">
                        <Layers size={18} className="text-[#C6A75E]" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Environment Layers</span>
                     </div>
                     
                     <div className="space-y-3 flex-1">
                        {[
                          { id: 'mandap', label: 'Structural Matrix', icon: <Box size={14} />, detail: 'Render wireframes' },
                          { id: 'lighting', label: 'Cinematic Lighting', icon: <Zap size={14} />, detail: 'Calculate lumens' },
                          { id: 'seating', label: 'Seating Topology', icon: <Users size={14} />, detail: 'Map spatial flow' },
                          { id: 'atmospheric', label: 'Atmospheric Density', icon: <Sparkles size={14} />, detail: 'Inject particulates' },
                        ].map((layer) => (
                          <button
                            key={layer.id}
                            onClick={() => toggleLayer(layer.id as keyof typeof layers)}
                            className={`w-full p-4 rounded-2xl flex items-center justify-between transition-all duration-300 border text-left group ${layers[layer.id as keyof typeof layers] ? 'bg-[#C6A75E]/10 border-[#C6A75E]/30' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
                          >
                            <div className="flex items-center gap-4">
                               <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${layers[layer.id as keyof typeof layers] ? 'bg-[#C6A75E] text-black' : 'bg-white/5 text-white/40 group-hover:text-white'}`}>
                                  {layer.icon}
                               </div>
                               <div>
                                  <span className={`text-xs font-semibold block transition-colors ${layers[layer.id as keyof typeof layers] ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>{layer.label}</span>
                                  <span className="text-white/30 text-[9px] font-mono tracking-widest uppercase mt-1 block">{layer.detail}</span>
                               </div>
                            </div>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${layers[layer.id as keyof typeof layers] ? 'border-[#C6A75E] bg-[#C6A75E]' : 'border-white/20 bg-transparent'}`}>
                               {layers[layer.id as keyof typeof layers] && <Check size={10} className="text-black" />}
                            </div>
                          </button>
                        ))}
                     </div>

                     {/* Scene Diagnostics */}
                     <div className="mt-6 pt-6 border-t border-white/[0.05] grid grid-cols-2 gap-4">
                        <div className="bg-black/50 p-3 rounded-xl border border-white/5">
                           <span className="text-white/30 text-[8px] font-mono uppercase tracking-widest block mb-1">Total Nodes</span>
                           <span className="text-white text-lg font-light tracking-tight">{sceneData?.stats.nodes.toLocaleString()}</span>
                        </div>
                        <div className="bg-black/50 p-3 rounded-xl border border-white/5">
                           <span className="text-white/30 text-[8px] font-mono uppercase tracking-widest block mb-1">Energy Draw</span>
                           <span className="text-[#C6A75E] text-lg font-light tracking-tight">{sceneData?.stats.energy}</span>
                        </div>
                     </div>
                  </div>

                  {/* Actions */}
                  <div className="bg-gradient-to-br from-[#111114] to-black border border-white/[0.05] p-6 rounded-3xl relative overflow-hidden group">
                     <div className="absolute -right-10 -top-10 text-[#C6A75E]/5 group-hover:text-[#C6A75E]/10 transition-colors duration-700 pointer-events-none">
                        <Settings2 size={160} className="animate-[spin_20s_linear_infinite]" />
                     </div>
                     <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-2 relative z-10">Blueprint Sync</h5>
                     <p className="text-white/40 text-[10px] leading-relaxed mb-6 font-mono relative z-10">Compile current architectural layers into a downloadable schema.</p>
                     <button className="w-full py-4 bg-white text-black rounded-xl text-[9px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all hover:bg-[#C6A75E] hover:shadow-[0_0_30px_rgba(198,167,94,0.3)] relative z-10">
                        <Download size={14} /> Export Render
                     </button>
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
