import { motion } from 'framer-motion';
import { 
  BarChart3, Users, DollarSign, Calendar, CheckSquare, 
  MessageSquare, FileText, Settings, Shield, Bell, 
  ArrowUpRight, LayoutGrid, Clock, Target
} from 'lucide-react';

const stats = [
  { label: 'Budget Spent', value: '$245,000', change: '+12%', icon: <DollarSign size={18} />, color: '#C6A75E' },
  { label: 'Artisans Active', value: '14 Specialists', change: 'Live', icon: <Users size={18} />, color: '#3B82F6' },
  { label: 'Timeline Progress', value: '68%', change: '+5%', icon: <Target size={18} />, color: '#10B981' },
  { label: 'Days Remaining', value: '42 Days', change: 'On Track', icon: <Calendar size={18} />, color: '#F59E0B' }
];

const messages = [
  { sender: 'Isabella M.', role: 'Floral Architect', text: 'Celestial orchids sourced from Haarlem. Quality check 01 complete.', time: '2m ago' },
  { sender: 'Marco G.', role: 'Production Lead', text: 'Grid calibration for the Lake Como barge starting at 14:00 CET.', time: '14m ago' },
  { sender: 'Elena S.', role: 'Client Relations', text: 'Concierge briefing scheduled for Thursday. Please confirm guest list.', time: '1h ago' }
];

const tasks = [
  { title: 'Acoustic Baffle Calibration', priority: 'High', status: 'In Progress' },
  { title: 'Heritage Villa Site Survey', priority: 'Medium', status: 'Completed' },
  { title: 'Gourmet Alchemy Menu Tasting', priority: 'High', status: 'Pending' },
  { title: 'Kinetic Chandelier Rigging', priority: 'Critical', status: 'Queued' }
];

export default function MissionControl() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white pt-32 pb-40 px-8 selection:bg-[#C6A75E]/30">
      
      {/* Editorial Dashboard Header */}
      <header className="max-w-[1600px] mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/5 pb-10">
         <div className="space-y-4">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-[#C6A75E] animate-pulse" />
               <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em]">Live Production Node</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-serif font-light tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
               Mission <span className="italic text-[#C6A75E]">Control.</span>
            </h1>
         </div>
         
         <div className="flex items-center gap-6">
            <button className="flex items-center gap-3 px-6 py-3 bg-[#111114] border border-white/5 rounded-2xl text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white hover:border-white/20 transition-all">
               <Bell size={16} /> Notifications
            </button>
            <div className="flex items-center gap-4 pl-6 border-l border-white/5">
                <div className="text-right">
                   <p className="text-sm font-bold">Alexander Vance</p>
                   <p className="text-[9px] text-white/20 font-bold uppercase tracking-widest">Heritage Tier Client</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C6A75E] to-[#E5C97A] p-0.5">
                   <div className="w-full h-full rounded-full bg-[#0B0B0D] flex items-center justify-center">
                      <Users size={20} className="text-[#C6A75E]" />
                   </div>
                </div>
            </div>
         </div>
      </header>

      {/* Main Grid Layout */}
      <main className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
         
         {/* Left Column: Metrics & Main View */}
         <div className="lg:col-span-8 space-y-8">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
               {stats.map((stat, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="p-8 bg-[#111114] border border-white/5 rounded-[32px] group hover:border-white/10 transition-all"
                 >
                    <div className="flex items-center justify-between mb-6">
                       <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-white transition-colors" style={{ color: stat.color }}>
                          {stat.icon}
                       </div>
                       <span className="text-[9px] font-bold text-emerald-400 px-2 py-1 bg-emerald-400/10 rounded-full">{stat.change}</span>
                    </div>
                    <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                    <h4 className="text-2xl font-serif">{stat.value}</h4>
                 </motion.div>
               ))}
            </div>

            {/* Immersive View / Blueprint Preview */}
            <div className="relative aspect-video bg-[#111114] border border-white/5 rounded-[48px] overflow-hidden group">
               <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200')] bg-cover opacity-20 grayscale" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/20 to-transparent" />
                  {/* Technical Overlays */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#C6A75E 1px, transparent 1px), linear-gradient(90deg, #C6A75E 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
               </div>

               <div className="absolute inset-0 p-12 flex flex-col justify-between z-10 pointer-events-none">
                  <div className="flex justify-between items-start">
                     <div className="bg-[#0B0B0D]/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 pointer-events-auto cursor-pointer hover:bg-[#111114] transition-all">
                        <LayoutGrid size={18} className="text-[#C6A75E]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Toggle Venue Blueprint</span>
                     </div>
                     <div className="bg-emerald-400/20 backdrop-blur-xl text-emerald-400 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                        Systems Nominal
                     </div>
                  </div>
                  
                  <div className="space-y-6">
                     <h2 className="text-5xl font-serif font-light text-white leading-tight">V3 Architecture <br /><span className="italic text-[#C6A75E] opacity-60">Visual Mockup</span></h2>
                     <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                           <Clock size={16} className="text-white/20" />
                           <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Last Update: 14:24:01</span>
                        </div>
                        <div className="w-px h-4 bg-white/10" />
                        <div className="flex items-center gap-3">
                           <Shield size={16} className="text-white/20" />
                           <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Cloud Encrypted</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Right Column: Interaction & Comms */}
         <div className="lg:col-span-4 space-y-8">
            {/* Live Collective Feed */}
            <div className="bg-[#111114] border border-white/5 rounded-[40px] p-10 space-y-10">
               <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <div className="flex items-center gap-4">
                     <MessageSquare size={18} className="text-[#C6A75E]" />
                     <h3 className="text-[10px] font-bold uppercase tracking-widest">Artisan Collective Feed</h3>
                  </div>
                  <ArrowUpRight size={16} className="text-white/20" />
               </div>

               <div className="space-y-8">
                  {messages.map((msg, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-white/40 border border-white/5 text-[10px] font-bold">
                          {msg.sender.charAt(0)}
                       </div>
                       <div className="space-y-2">
                          <div className="flex justify-between items-center bg-transparent gap-4">
                             <span className="text-[10px] font-bold tracking-tight">{msg.sender}</span>
                             <span className="text-[8px] text-white/20 font-bold uppercase tracking-widest">{msg.time}</span>
                          </div>
                          <p className="text-white/40 text-xs font-light leading-relaxed">{msg.text}</p>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="pt-6">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Send message to collective..." 
                      className="w-full bg-[#0B0B0D] border border-white/5 rounded-2xl py-4 pl-6 pr-12 text-[10px] focus:outline-none focus:border-[#C6A75E]/30 transition-all font-light"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#C6A75E] text-[#0B0B0D] flex items-center justify-center">
                       <ArrowUpRight size={14} />
                    </button>
                  </div>
               </div>
            </div>

            {/* Strategic Task List */}
            <div className="bg-[#111114] border border-white/5 rounded-[40px] p-10 space-y-10">
               <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <div className="flex items-center gap-4">
                     <CheckSquare size={18} className="text-[#C6A75E]" />
                     <h3 className="text-[10px] font-bold uppercase tracking-widest">Active Objectives</h3>
                  </div>
                  <Settings size={16} className="text-white/20" />
               </div>

               <div className="space-y-4">
                  {tasks.map((task, i) => (
                    <div key={i} className="group p-5 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-between hover:border-[#C6A75E]/20 transition-all cursor-pointer">
                       <div className="space-y-2">
                          <div className="flex items-center gap-3">
                             <div className={`w-1.5 h-1.5 rounded-full ${task.status === 'Completed' ? 'bg-emerald-400' : 'bg-[#C6A75E]'}`} />
                             <h5 className="text-[11px] font-medium tracking-tight text-white/80">{task.title}</h5>
                          </div>
                          <div className="flex items-center gap-4 pl-4 text-white/20 text-[8px] font-bold uppercase tracking-widest">
                             <span>Priority: {task.priority}</span>
                             <div className="w-1 h-1 rounded-full bg-white/10" />
                             <span>{task.status}</span>
                          </div>
                       </div>
                       <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <CheckSquare size={14} className="text-[#C6A75E]" />
                       </div>
                    </div>
                  ))}
               </div>

               <button className="w-full py-5 bg-white/5 border border-white/10 text-white/40 text-[9px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-[#C6A75E] hover:text-[#0B0B0D] hover:border-[#C6A75E] transition-all">
                  Request Full Status Report
               </button>
            </div>
         </div>

      </main>

    </div>
  );
}
