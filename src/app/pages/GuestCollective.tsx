import { motion } from 'framer-motion';
import { Users, UserPlus, Mail, ShieldCheck, Search, Filter, Wine, Utensils, ClipboardList, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';

const guests = [
  { id: 1, name: 'Julian & Elena Vance', type: 'Primary Hosts', status: 'Confirmed', table: 'Lakeside 01', dietary: 'Vegan, GF' },
  { id: 2, name: 'Countess Sophia M.', type: 'VIP Heritage', status: 'Confirmed', table: 'Lakeside 01', dietary: 'None' },
  { id: 3, name: 'Marco & Sofia Rossi', type: 'Family Lineage', status: 'Pending', table: 'Terrace 04', dietary: 'Nut Allergy' },
  { id: 4, name: 'Dr. Alexander B.', type: 'Academic Inner Circle', status: 'Decined', table: 'N/A', dietary: 'Pescatarian' },
  { id: 5, name: 'Isabella Castellano', type: 'Artisan Collective', status: 'Confirmed', table: 'Artist Node', dietary: 'None' },
  { id: 6, name: 'Gabriel Thorne', type: 'VIP Heritage', status: 'Confirmed', table: 'Lakeside 02', dietary: 'Dairy Free' }
];

export default function GuestCollective() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C6A75E]/30 relative pb-40">
        
        {/* Ambient Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#C6A75E]/5 blur-[250px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/5 blur-[200px] rounded-full" />
        </div>

        <div className="max-w-[2000px] mx-auto pt-40 px-6 md:px-12 lg:px-24 relative z-10">
            
            {/* Editorial Header */}
            <header className="mb-24 flex flex-col xl:flex-row xl:items-end justify-between gap-16 border-b border-white/5 pb-16">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-8"
                >
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-px bg-[#C6A75E]/50" />
                        <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em]">Global Attendance Registry</span>
                    </div>
                    <h1 className="text-6xl md:text-[6rem] lg:text-[7rem] font-serif font-light tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-heading)' }}>
                        Guest <span className="italic text-white/40">Collective.</span>
                    </h1>
                    <p className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase leading-[2] max-w-xl pt-4">
                        Orchestrating the presence of the discerning. A master ledger of all invited entities and their operational status.
                    </p>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <button className="px-8 py-4 bg-[#C6A75E] text-[#050505] rounded-full text-[9px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(198,167,94,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        Invoke Associate <UserPlus size={14} />
                    </button>
                    <button className="px-8 py-4 bg-[#0A0A0C] border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:border-[#C6A75E]/50 hover:text-white transition-all duration-500">
                        Broadcast Directive <Mail size={14} />
                    </button>
                </motion.div>
            </header>

            {/* Telemetry HUD */}
            <div className="flex flex-col xl:flex-row gap-8 mb-24">
                {/* Aggregate Hero Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="xl:w-2/5 bg-[#0A0A0C] border border-white/5 rounded-[3rem] p-12 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6A75E]/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000 pointer-events-none" />
                    <div className="relative z-10 h-full flex flex-col justify-between space-y-12">
                        <div className="flex items-center justify-between text-white/30">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#050505]">
                                <Users size={18} className="text-[#C6A75E]" />
                            </div>
                            <ArrowUpRight size={18} className="text-white/20 group-hover:text-white/50 transition-colors" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C6A75E] mb-4">Aggregate Presence</p>
                            <div className="flex items-baseline gap-6">
                                <h3 className="text-7xl lg:text-[7rem] font-serif text-white tracking-tighter leading-none">142</h3>
                                <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">Nodes Active</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
                
                {/* Micro Stats */}
                <div className="xl:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { label: 'Confirmed', count: '124', icon: <CheckCircle2 size={16} className="text-emerald-400" />, glow: 'bg-emerald-400/5', ring: 'border-emerald-400/20' },
                      { label: 'Awaiting Auth', count: '12', icon: <Clock size={16} className="text-[#C6A75E]" />, glow: 'bg-[#C6A75E]/5', ring: 'border-[#C6A75E]/20' },
                      { label: 'Declined', count: '6', icon: <ClipboardList size={16} className="text-white/20" />, glow: 'bg-white/5', ring: 'border-white/10' }
                    ].map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 + (i * 0.1) }}
                            className="bg-[#0A0A0C] border border-white/5 rounded-[3rem] p-10 relative overflow-hidden group flex flex-col justify-between min-h-[250px]"
                        >
                            <div className={`absolute bottom-0 left-0 w-40 h-40 ${stat.glow} blur-[50px] rounded-full group-hover:scale-150 transition-transform duration-1000 pointer-events-none`} />
                            <div className="relative z-10 flex items-center justify-between text-white/30">
                                <div className={`w-10 h-10 rounded-full border ${stat.ring} flex items-center justify-center bg-[#050505]`}>
                                    {stat.icon}
                                </div>
                                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="relative z-10 space-y-4">
                                <h4 className="text-5xl lg:text-6xl font-serif text-white tracking-tight">{stat.count}</h4>
                                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Master Ledger (Table) */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-transparent border border-white/5 rounded-[3rem] p-6 md:p-12 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[#0A0A0C]/50 backdrop-blur-3xl z-0" />
                
                <div className="relative z-10">
                    {/* Table Controls */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16 pb-12 border-b border-white/5">
                        <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
                            <div className="relative w-full sm:w-96">
                                <Search size={14} className="absolute left-6 top-1/2 -translate-y-1/2 text-[#C6A75E]" />
                                <input 
                                    type="text" 
                                    placeholder="Filter Identity Matrix..." 
                                    className="w-full bg-[#050505] border border-white/10 rounded-full py-4 pl-14 pr-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white focus:outline-none focus:border-[#C6A75E]/50 transition-colors placeholder:text-white/20"
                                />
                            </div>
                            <button className="flex items-center gap-3 px-8 py-4 bg-[#050505] border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white hover:border-[#C6A75E]/30 transition-all w-full sm:w-auto justify-center">
                                <Filter size={14} /> Lineage Filters
                            </button>
                        </div>
                        <div className="flex items-center gap-4 text-white/20 text-[8px] font-bold uppercase tracking-[0.4em] px-6 py-4 bg-emerald-400/5 border border-emerald-400/10 rounded-full">
                            <ShieldCheck size={14} className="text-emerald-400" /> Secure Protocol
                        </div>
                    </div>

                    {/* Ledger Header */}
                    <div className="hidden lg:grid grid-cols-12 gap-6 px-8 pb-6 text-[9px] font-bold uppercase tracking-[0.4em] text-[#C6A75E] border-b border-white/5 mb-6">
                        <div className="col-span-3">Identity Node</div>
                        <div className="col-span-3">Tier / Lineage</div>
                        <div className="col-span-2">Auth Status</div>
                        <div className="col-span-2">Station Assignment</div>
                        <div className="col-span-2">Dietary Alchemy</div>
                    </div>

                    {/* Ledger Rows */}
                    <div className="space-y-4">
                        {guests.map((guest, i) => (
                            <motion.div 
                                key={guest.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-8 py-8 items-center bg-[#050505] border border-white/5 rounded-3xl hover:border-[#C6A75E]/30 transition-all duration-500 group cursor-pointer relative overflow-hidden"
                            >
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#C6A75E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                
                                <div className="lg:col-span-3 relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between lg:justify-start gap-2">
                                    <span className="lg:hidden text-[9px] font-bold uppercase tracking-[0.4em] text-[#C6A75E]">Identity Node</span>
                                    <span className="text-2xl font-serif text-white group-hover:text-[#C6A75E] transition-colors duration-300">{guest.name}</span>
                                </div>
                                
                                <div className="lg:col-span-3 relative z-10 flex items-center justify-between lg:justify-start pt-4 lg:pt-0 border-t border-white/5 lg:border-none">
                                    <span className="lg:hidden text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">Lineage</span>
                                    <div className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#C6A75E] transition-colors" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 group-hover:text-white/80 transition-colors">{guest.type}</span>
                                    </div>
                                </div>

                                <div className="lg:col-span-2 relative z-10 flex items-center justify-between lg:justify-start pt-4 lg:pt-0 border-t border-white/5 lg:border-none">
                                    <span className="lg:hidden text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">Auth Status</span>
                                    <div className="flex items-center gap-3 bg-[#111114] px-4 py-2 rounded-full border border-white/5">
                                        {guest.status === 'Confirmed' && <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />}
                                        {guest.status === 'Pending' && <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] shadow-[0_0_10px_rgba(198,167,94,0.5)]" />}
                                        {guest.status === 'Decined' && <div className="w-1.5 h-1.5 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.5)]" />}
                                        <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${guest.status === 'Confirmed' ? 'text-emerald-400' : guest.status === 'Pending' ? 'text-[#C6A75E]' : 'text-red-400'}`}>
                                            {guest.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="lg:col-span-2 relative z-10 flex items-center justify-between lg:justify-start pt-4 lg:pt-0 border-t border-white/5 lg:border-none">
                                    <span className="lg:hidden text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">Station</span>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-white/80 transition-colors">{guest.table}</span>
                                </div>

                                <div className="lg:col-span-2 relative z-10 flex items-center justify-between lg:justify-start pt-4 lg:pt-0 border-t border-white/5 lg:border-none">
                                    <span className="lg:hidden text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">Alchemy</span>
                                    <div className="flex items-center gap-3">
                                        {guest.dietary === 'None' ? (
                                            <>
                                                <Utensils size={12} className="text-white/20" />
                                                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">Standard</span>
                                            </>
                                        ) : (
                                            <>
                                                <Wine size={12} className="text-[#C6A75E]" />
                                                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#C6A75E]">{guest.dietary}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pagination / Footer */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 mt-12 border-t border-white/5">
                        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20 italic">Rendering 01-06 of 142 Elements</p>
                        <div className="flex items-center gap-4">
                            <button className="px-8 py-4 bg-[#050505] border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors">Previous</button>
                            <button className="px-8 py-4 bg-transparent border border-[#C6A75E]/40 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-[#050505] transition-colors shadow-[0_0_20px_rgba(198,167,94,0.1)]">Next Matrix</button>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    </div>
  );
}
