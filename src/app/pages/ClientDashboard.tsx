import { motion } from 'framer-motion';
import { 
  Calendar, Users, FileText, CreditCard,
  ArrowRight, Clock, Search, Shield,
  ChevronRight, ExternalLink, SlidersHorizontal, Activity
} from 'lucide-react';

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C6A75E]/30 relative pb-32">
      
      {/* Background Decorative Auras & Noise */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C6A75E]/5 blur-[200px] rounded-full" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[200px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* Header / Command Center Overview */}
        <header className="pt-40 pb-16 px-6 md:px-12 lg:px-16 max-w-[1800px] mx-auto border-b border-white/5">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
               <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#C6A75E]/10 border border-[#C6A75E]/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] animate-pulse" />
                  </div>
                  <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em]">Live Command Center</span>
               </div>
               <h1 className="text-6xl md:text-[5rem] lg:text-[6rem] font-serif font-light tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-heading)' }}>
                  The Vance <br />
                  <span className="italic text-[#C6A75E] pr-6">Residence</span> Gala.
               </h1>
            </motion.div>

            {/* Telemetry / HUD */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-auto flex flex-col sm:flex-row gap-12 lg:gap-20 backdrop-blur-md bg-[#111114]/60 border border-white/5 rounded-[2rem] p-8 lg:p-12 shadow-2xl"
            >
               <div className="space-y-4">
                  <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em] block">Countdown to Inception</span>
                  <div className="flex items-end gap-4">
                     <div className="flex items-baseline gap-1.5">
                       <span className="text-5xl font-serif text-white">24</span>
                       <span className="text-[10px] uppercase text-white/40 tracking-[0.2em] font-bold">Days</span>
                     </div>
                     <span className="text-white/10 text-4xl font-light pb-1">/</span>
                     <div className="flex items-baseline gap-1.5">
                       <span className="text-5xl font-serif text-[#C6A75E]">08</span>
                       <span className="text-[10px] uppercase text-[#C6A75E]/60 tracking-[0.2em] font-bold">Hrs</span>
                     </div>
                  </div>
               </div>

               <div className="hidden sm:block w-px bg-white/5" />

               <div className="space-y-5 min-w-[220px]">
                  <div className="flex justify-between items-end">
                     <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em]">Resource Allocation</span>
                     <span className="text-[#C6A75E] text-xs font-mono font-bold tracking-widest">64%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 overflow-hidden rounded-full">
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: '64%' }}
                       transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                       className="h-full bg-[#C6A75E]" 
                     />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono tracking-widest text-white/20">
                     <span>$1.2M</span>
                     <span>$1.85M</span>
                  </div>
               </div>
            </motion.div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <main className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 py-16 grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 relative z-10">
           
           {/* Sidebar Navigation & Feed */}
           <aside className="col-span-1 xl:col-span-3 space-y-8">
              
              {/* Navigation Modules */}
              <div className="bg-[#0A0A0C] border border-white/5 rounded-[2rem] p-6 space-y-2">
                 <h3 className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C6A75E] mb-6 px-4">Modules</h3>
                 <nav className="space-y-1">
                    {[
                      { label: 'Chronology', icon: <Calendar size={14} />, active: true },
                      { label: 'Artisan Collective', icon: <Users size={14} /> },
                      { label: 'Blueprint Vault', icon: <FileText size={14} /> },
                      { label: 'Procurement', icon: <CreditCard size={14} /> },
                      { label: 'Sensory Engine', icon: <SlidersHorizontal size={14} /> }
                    ].map((item, i) => (
                      <button 
                        key={i}
                        className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-500 group ${item.active ? 'bg-[#C6A75E]/5 border border-[#C6A75E]/20 text-[#C6A75E]' : 'border border-transparent text-white/40 hover:bg-white/5 hover:text-white'}`}
                      >
                         <div className="flex items-center gap-4">
                            <div className={`transition-transform duration-500 ${item.active ? 'scale-110' : 'group-hover:scale-110'}`}>{item.icon}</div>
                            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
                         </div>
                         {item.active && <ChevronRight size={14} className="opacity-50" />}
                      </button>
                    ))}
                 </nav>
              </div>

              {/* Live Feed */}
              <div className="bg-[#111114] border border-white/5 rounded-[2rem] p-8 space-y-8 relative overflow-hidden group min-h-[350px]">
                 <Activity size={160} className="absolute -bottom-10 -right-10 text-white/[0.02] group-hover:text-[#C6A75E]/5 transition-colors duration-700 pointer-events-none" />
                 
                 <div className="flex items-center justify-between relative z-10">
                    <h3 className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/40">Live Feed</h3>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] animate-pulse shadow-[0_0_10px_#C6A75E]" />
                 </div>
                 
                 <div className="space-y-6 relative z-10">
                    {[
                      { msg: 'Floral Architecture Signed', detail: 'Artisanal Alchemy', time: '12m ago', status: 'verified' },
                      { msg: 'Lighting Plot Uploaded', detail: 'Technical Sync', time: '1h ago', status: 'pending' },
                      { msg: 'Deposit Auth Requested', detail: 'Procurement', time: '4h ago', status: 'action' }
                    ].map((notif, i) => (
                      <div key={i} className={`border-l hover:border-l-2 pl-5 py-1.5 transition-all duration-300 cursor-pointer ${notif.status === 'action' ? 'border-[#C6A75E]' : 'border-white/10 hover:border-white/30'}`}>
                         <p className="text-[11px] font-bold tracking-wide text-white/80 group-hover:text-white transition-colors">{notif.msg}</p>
                         <p className="text-[8px] text-white/40 uppercase font-bold tracking-[0.2em] mt-1.5">
                            {notif.detail} <span className="opacity-30 mx-2">•</span> {notif.time}
                         </p>
                      </div>
                    ))}
                 </div>
              </div>
           </aside>

           {/* Main Interface Modules */}
           <div className="col-span-1 xl:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* The Vault (Spans full width) */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="lg:col-span-2 bg-[#111114] border border-white/5 p-10 lg:p-14 rounded-[2rem] flex flex-col md:flex-row items-start md:items-center justify-between gap-12 group transition-all duration-500 hover:border-white/10"
              >
                 <div className="space-y-6 max-w-xl">
                    <div className="w-12 h-12 rounded-[1rem] bg-white/5 border border-white/10 flex items-center justify-center text-[#C6A75E]">
                       <FileText size={20} />
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-serif text-white tracking-tight">Blueprint Vault.</h3>
                    <p className="text-white/40 text-sm font-light leading-relaxed max-w-md">Access heritage site surveys, immersive technical plots, and countersigned artisan agreements.</p>
                 </div>
                 
                 <div className="w-full md:w-auto flex-1 md:pl-16 md:border-l border-white/5 space-y-4">
                    {[
                      { name: 'Vance_Master_Plot_v4.dwg', date: 'Oct 24', size: '14.2 MB' },
                      { name: 'Menu_Tasting_Notes.pdf', date: 'Oct 22', size: '2.1 MB' }
                    ].map((doc, idx) => (
                       <div key={idx} className="flex items-center justify-between p-5 rounded-2xl bg-[#050505] border border-white/5 hover:border-[#C6A75E]/30 transition-all cursor-pointer group/doc">
                          <div className="flex items-center gap-5">
                             <div className="text-white/20 group-hover/doc:text-[#C6A75E] transition-colors"><FileText size={16} /></div>
                             <div>
                                <p className="text-[11px] font-mono tracking-widest text-white">{doc.name}</p>
                                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mt-1">{doc.date} <span className="opacity-30 mx-2">•</span> {doc.size}</p>
                             </div>
                          </div>
                          <ExternalLink size={14} className="text-white/20 group-hover/doc:text-white transition-colors" />
                       </div>
                    ))}
                 </div>
              </motion.div>

              {/* Chronology Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#111114] border border-white/5 p-10 lg:p-12 rounded-[2rem] flex flex-col justify-between min-h-[420px] group relative overflow-hidden transition-all duration-500 hover:border-white/10"
              >
                 <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C6A75E]/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                 <div className="space-y-6 relative z-10">
                    <div className="flex justify-between items-start">
                       <div className="w-12 h-12 rounded-[1rem] bg-white/5 border border-white/10 flex items-center justify-center text-[#C6A75E]">
                          <Calendar size={20} />
                       </div>
                       <ArrowRight size={20} className="text-white/10 group-hover:text-white transition-all" />
                    </div>
                    <div className="space-y-4 pt-4">
                       <h3 className="text-4xl lg:text-5xl font-serif text-white tracking-tight">Chronology.</h3>
                       <p className="text-white/40 text-sm font-light leading-relaxed">Tracking 14 concurrent production nodes across global zones.</p>
                    </div>
                 </div>
                 
                 <div className="pt-10 border-t border-white/5 mt-auto relative z-10">
                    <div className="flex items-center justify-between mb-5">
                       <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/40">Next Milestone</span>
                       <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#C6A75E]">Technical Rehearsal</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <Clock size={16} className="text-[#C6A75E]" />
                       <p className="text-sm font-light text-white tracking-wide">Wednesday, April 24 <span className="text-white/20 mx-3">|</span> 14:00 CET</p>
                    </div>
                 </div>
              </motion.div>

              {/* Right Side Stack: Procurement & Artisans */}
              <div className="space-y-8 lg:space-y-12 flex flex-col">
                 
                 {/* Procurement Card (Black Card style) */}
                 <motion.div 
                   whileHover={{ y: -5 }}
                   className="flex-1 bg-gradient-to-br from-[#111114] to-[#050505] border border-white/5 p-10 lg:p-12 rounded-[2rem] flex flex-col justify-between group relative overflow-hidden shadow-2xl transition-all duration-500"
                 >
                    {/* Subtle Card Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full" />
                    
                    <div className="flex justify-between items-start relative z-10">
                       <div className="w-12 h-12 rounded-[1rem] bg-[#C6A75E]/10 border border-[#C6A75E]/20 flex items-center justify-center text-[#C6A75E]">
                          <CreditCard size={20} />
                       </div>
                    </div>
                    <div className="space-y-3 mt-10 mb-10 relative z-10">
                       <h3 className="text-4xl lg:text-5xl font-serif text-white tracking-tight">Procurement.</h3>
                       <p className="text-white/40 text-[11px] font-light tracking-wide">Encrypted high-limit processing.</p>
                    </div>
                    <div className="space-y-5 mt-auto relative z-10">
                       <p className="text-[9px] text-[#C6A75E] font-bold uppercase tracking-[0.4em]">Awaiting Auth</p>
                       <div className="flex items-end justify-between">
                          <span className="text-4xl lg:text-5xl font-serif text-white tracking-tighter">$42,500<span className="text-white/40 text-2xl">.00</span></span>
                          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#050505] hover:scale-110 hover:bg-[#C6A75E] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] group/btn">
                             <Shield size={18} className="group-hover/btn:animate-pulse" />
                          </button>
                       </div>
                    </div>
                 </motion.div>

                 {/* Artisans Card */}
                 <motion.div 
                   whileHover={{ y: -5 }}
                   className="bg-[#111114] border border-white/5 p-8 lg:p-10 rounded-[2rem] flex items-center justify-between group cursor-pointer transition-all duration-500 hover:border-white/10"
                 >
                    <div className="space-y-3">
                       <h3 className="text-2xl font-serif text-white">Artisan Collective</h3>
                       <p className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold">15 Active Masters</p>
                    </div>
                    <div className="flex -space-x-5">
                       {[
                         'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2070&auto=format&fit=crop',
                         'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070&auto=format&fit=crop',
                         'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop'
                       ].map((img, i) => (
                         <div key={i} className="w-14 h-14 rounded-full border-4 border-[#111114] overflow-hidden relative z-10 shadow-lg">
                            <img src={img} alt="Artisan" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                         </div>
                       ))}
                       <div className="w-14 h-14 rounded-full border-4 border-[#111114] bg-[#C6A75E] flex items-center justify-center text-[#050505] text-[10px] font-bold z-20 shadow-xl relative overflow-hidden group/count">
                          <div className="absolute inset-0 bg-white opacity-0 group-hover/count:opacity-20 transition-opacity" />
                          +12
                       </div>
                    </div>
                 </motion.div>

              </div>
           </div>

        </main>
      </div>

      {/* Persistence Controls Footer (HUD style) */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 w-full max-w-[600px] px-8">
         <motion.div 
           initial={{ y: 100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
           className="bg-[#050505]/80 backdrop-blur-3xl border border-white/10 p-2 pl-8 rounded-full flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
         >
            <div className="flex items-center gap-8 py-2">
               <div className="flex items-center gap-3 text-white/40 hover:text-[#C6A75E] transition-colors cursor-pointer">
                  <Shield size={14} />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] hidden sm:block">Secured</span>
               </div>
               <div className="w-px h-4 bg-white/10" />
               <div className="flex items-center gap-3 text-white/40 hover:text-white transition-colors cursor-pointer">
                  <Search size={14} />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] hidden sm:block">Search Vault</span>
               </div>
            </div>
            <button className="px-8 py-4 bg-white text-[#050505] text-[9px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-[#C6A75E] transition-colors duration-500 shadow-xl">
               Sync Specialist
            </button>
         </motion.div>
      </div>
    </div>
  );
}
