import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Sparkles, Layout, Landmark, Flower2, ArrowRight, ArrowLeft
} from 'lucide-react';

const eventTypes = [
  { id: 'wedding', label: 'Signature Wedding', desc: 'Bespoke matrimony and celebration', icon: <Flower2 className="w-6 h-6" />, basePrice: 15000 },
  { id: 'gala', label: 'Private Gala', desc: 'Exclusive soirées and banquets', icon: <Landmark className="w-6 h-6" />, basePrice: 12000 },
  { id: 'corporate', label: 'Corporate Summit', desc: 'High-level executive retreats', icon: <Layout className="w-6 h-6" />, basePrice: 10000 },
  { id: 'launch', label: 'Brand Launch', desc: 'Immersive product unveilings', icon: <Sparkles className="w-6 h-6" />, basePrice: 8000 }
];

const styles = [
  { id: 'minimal', label: 'Monochrome', desc: 'Stripped back elegance', color: '#FFFFFF', multiplier: 1.0 },
  { id: 'classic', label: 'Imperial', desc: 'Timeless luxury and gold', color: '#C6A75E', multiplier: 1.5 },
  { id: 'modern', label: 'Avant-Garde', desc: 'Dark, edgy, structural', color: '#1A1A1A', multiplier: 1.3 },
  { id: 'opulent', label: 'Celestial', desc: 'Unbounded extravagance', color: '#E5C97A', multiplier: 2.0 }
];

export default function QuoteBuilder() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: 'wedding',
    guests: 150,
    style: 'classic',
    location: 'Paris, France',
    budget: 50000,
    services: ['venue', 'catering', 'design']
  });

  const [totalEstimate, setTotalEstimate] = useState(0);

  useEffect(() => {
    const base = eventTypes.find(t => t.id === formData.type)?.basePrice || 0;
    const styleMult = styles.find(s => s.id === formData.style)?.multiplier || 1;
    const guestCost = formData.guests * 150;
    const servicesCost = formData.services.length * 5000;
    
    setTotalEstimate((base + guestCost + servicesCost) * styleMult);
  }, [formData]);

  const handleNext = () => setStep(s => Math.min(s + 1, 5));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));

  const selectedType = eventTypes.find(t => t.id === formData.type)?.label;
  const selectedStyle = styles.find(s => s.id === formData.style)?.label;

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 md:px-12 relative overflow-hidden font-sans">
      {/* Abstract Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#C6A75E]/5 blur-[150px] rounded-full opacity-50" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#C6A75E]/5 blur-[150px] rounded-full opacity-50" />
         {/* Subtle Grid */}
         <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Left: Interactive Wizard */}
        <div className="flex-1 space-y-12">
          
          <div className="space-y-6 mb-16 relative">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#C6A75E]" />
              <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em]">Phase 0{step} / 05</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-serif font-light tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-heading)' }}>
               {step === 1 && "Choose Your Narrative."}
               {step === 2 && "Scaling the Experience."}
               {step === 3 && "Defining the Aesthetic."}
               {step === 4 && "Locating the Exceptional."}
               {step === 5 && "The Final Blueprint."}
            </h1>
          </div>

          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1" 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {eventTypes.map(type => (
                    <div 
                      key={type.id}
                      onClick={() => setFormData({...formData, type: type.id})}
                      className={`group p-6 md:p-8 rounded-[24px] border transition-all cursor-pointer flex items-center justify-between ${formData.type === type.id ? 'bg-[#111114] border-[#C6A75E] shadow-[0_0_30px_rgba(198,167,94,0.05)]' : 'bg-[#0B0B0D] border-white/5 hover:border-white/20'}`}
                    >
                      <div className="flex items-center gap-6 md:gap-8">
                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-colors ${formData.type === type.id ? 'bg-[#C6A75E]/10 text-[#C6A75E]' : 'bg-white/5 text-white/40 group-hover:text-white'}`}>
                          {type.icon}
                        </div>
                        <div>
                           <h4 className="text-xl md:text-2xl font-serif text-white mb-2">{type.label}</h4>
                           <span className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase block">{type.desc}</span>
                        </div>
                      </div>
                      
                      {/* Custom Radio */}
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${formData.type === type.id ? 'border-[#C6A75E]' : 'border-white/10 group-hover:border-white/30'}`}>
                         <div className={`w-3 h-3 rounded-full transition-colors ${formData.type === type.id ? 'bg-[#C6A75E]' : 'bg-transparent'}`} />
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <div className="flex flex-col items-center justify-center py-20 px-6 md:px-8 border border-white/5 bg-[#111114]/50 backdrop-blur-md rounded-[40px] relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#C6A75E]/10 blur-[100px] rounded-full z-0" />
                    
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 relative z-10 text-center">Estimated Attendance</span>
                    
                    <div className="flex items-end gap-4 md:gap-6 mb-16 relative z-10">
                      <h2 className="text-[100px] md:text-[140px] font-serif leading-none tracking-tighter text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                        {formData.guests}
                      </h2>
                      <span className="text-[#C6A75E] text-2xl md:text-3xl font-light italic mb-6 md:mb-8">Pax.</span>
                    </div>
                    
                    <div className="w-full max-w-md relative z-10 px-4 md:px-0">
                       <input 
                          type="range" 
                          min="50" 
                          max="1000" 
                          step="50"
                          value={formData.guests}
                          onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                          className="w-full accent-[#C6A75E] bg-white/10 h-[4px] md:h-[2px] rounded-full appearance-none cursor-pointer"
                       />
                       <div className="flex justify-between text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mt-6">
                          <span>Intimate (50)</span>
                          <span>Grand (1000+)</span>
                       </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {styles.map(style => (
                    <div 
                      key={style.id}
                      onClick={() => setFormData({...formData, style: style.id})}
                      className={`group p-8 rounded-[32px] border transition-all cursor-pointer flex flex-col h-72 relative overflow-hidden ${formData.style === style.id ? 'bg-[#111114] border-[#C6A75E] shadow-[0_0_40px_rgba(198,167,94,0.05)]' : 'bg-[#111114]/50 border-white/5 hover:border-white/20'}`}
                    >
                      {/* Background Gradient Map */}
                      <div className={`absolute inset-0 opacity-20 transition-opacity duration-500 ${formData.style === style.id ? 'opacity-40' : 'group-hover:opacity-30'}`} 
                           style={{ background: `radial-gradient(circle at bottom right, ${style.color}, transparent 70%)` }} />
                      
                      <div className="flex-1" />
                      
                      <div className="relative z-10 space-y-2">
                        <h4 className="text-3xl font-serif text-white mb-2">{style.label}</h4>
                        <p className="text-white/40 text-[10px] tracking-widest uppercase">{style.desc}</p>
                      </div>

                      <div className={`absolute top-8 right-8 w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${formData.style === style.id ? 'border-[#C6A75E]' : 'border-white/10'}`}>
                         <div className={`w-3 h-3 rounded-full transition-colors ${formData.style === style.id ? 'bg-[#C6A75E]' : 'bg-transparent'}`} />
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="h-full flex items-center justify-center pt-20">
                  <div className="py-16 md:py-24 border-b border-white/5 flex flex-col items-center w-full">
                    <MapPin className="w-12 h-12 text-[#C6A75E] mb-8" />
                    <input 
                      type="text" 
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="Enter City or Venue"
                      className="bg-transparent text-center text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white outline-none w-full placeholder:text-white/10"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    />
                    <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent mt-12" />
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <div className="bg-gradient-to-br from-[#111114] to-[#050505] border border-[#C6A75E]/20 p-12 md:p-24 rounded-[40px] text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent opacity-50" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C6A75E]/5 blur-3xl rounded-full" />
                    
                    <Sparkles className="w-12 h-12 text-[#C6A75E] mx-auto mb-8 relative z-10" />
                    <h3 className="text-5xl md:text-7xl font-serif mb-6 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>Blueprint Compiled.</h3>
                    <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-12 relative z-10">Your specifications have been recorded</p>
                    
                    <button 
                      onClick={() => alert("Deployment Initialized")}
                      className="px-10 py-5 bg-[#C6A75E] text-[#050505] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-4 mx-auto w-full md:w-auto shadow-[0_0_40px_rgba(198,167,94,0.3)] relative z-10"
                    >
                      Initialize Commission <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4 pt-8 md:pt-12 border-t border-white/5">
            {step > 1 && (
              <button 
                onClick={handlePrev}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group shrink-0"
              >
                <ArrowLeft size={20} className="text-white/50 group-hover:text-white transition-colors" />
              </button>
            )}
            {step < 5 && (
              <button 
                onClick={handleNext}
                className="flex-1 h-14 md:h-16 bg-gradient-to-r from-[#C6A75E] to-[#E5C97A] text-[#050505] font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs rounded-full flex items-center justify-center gap-4 hover:shadow-[0_0_30px_rgba(198,167,94,0.3)] transition-all"
              >
                Assemble Next Phase <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Right: Live Preview Receipt */}
        <div className="w-full lg:w-[420px] shrink-0 mt-8 lg:mt-0">
           <div className="bg-[#0A0A0C] border border-white/10 rounded-[32px] p-8 md:p-10 sticky top-32 shadow-2xl relative overflow-hidden">
              {/* Subtle top glare */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-8">
                <div>
                  <span className="text-[#C6A75E] text-[9px] font-bold uppercase tracking-[0.3em] block mb-2">Project Spec</span>
                  <span className="text-white text-xs font-mono opacity-40">REF-0{step}9{Math.floor(formData.guests/10)}X</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                  <Landmark className="text-[#C6A75E] w-5 h-5" />
                </div>
              </div>

              <div className="space-y-6 mb-12 font-mono text-[11px] text-white/50 tracking-wide">
                <div className="flex justify-between items-center border-b border-dashed border-white/10 pb-4">
                  <span>TYPE</span>
                  <span className="text-white text-right uppercase">{selectedType}</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-white/10 pb-4">
                  <span>SCALE</span>
                  <span className="text-white text-right uppercase">{formData.guests} PAX</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-white/10 pb-4">
                  <span>AESTHETIC</span>
                  <span className="text-white text-right uppercase">{selectedStyle}</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-white/10 pb-4">
                  <span>LOCALE</span>
                  <span className="text-white text-right uppercase truncate max-w-[150px]">{formData.location || "TBD"}</span>
                </div>
              </div>

              <div className="bg-[#111114] rounded-2xl p-6 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A75E]/5 blur-2xl rounded-full" />
                <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em] block mb-4 relative z-10">Estimated Investment</span>
                <h3 className="text-4xl font-serif text-[#C6A75E] relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
                  ${totalEstimate.toLocaleString()}
                </h3>
                <span className="text-white/20 text-[9px] italic mt-4 block relative z-10">* Subject to final architectural review</span>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
