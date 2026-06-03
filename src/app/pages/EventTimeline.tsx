import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Clock, Hourglass, Paperclip, ChevronRight, 
  ChevronDown, Calendar, MapPin, Users, FileText, Image as ImageIcon 
} from 'lucide-react';

const timelineStages = [
  {
    id: 1,
    title: "Phase 01: Concept Genesis",
    status: "Completed",
    date: "March 15 - March 22",
    description: "Establishing the core artistic vision and sensory requirements. Initial architectural sketches approved.",
    location: "Studio A, Paris",
    team: 4,
    attachments: [
      { name: "Moodboard_v2.pdf", type: "pdf" },
      { name: "Concept_Sketch.png", type: "image" }
    ]
  },
  {
    id: 2,
    title: "Phase 02: Venue Architectural Integration",
    status: "In Progress",
    date: "March 23 - April 05",
    description: "Mapping technical requirements to the Lake Como site. Lighting rigs and acoustic baffle positioning.",
    location: "Villa Balbiano, Italy",
    team: 12,
    attachments: [
      { name: "Site_Survey.dwg", type: "file" }
    ]
  },
  {
    id: 3,
    title: "Phase 03: Artisan Procurement",
    status: "Pending",
    date: "April 06 - April 20",
    description: "Finalizing contracts with floral scenographers and gourmet alchemists. Custom textile manufacturing.",
    location: "Global Collective",
    team: 8,
    attachments: []
  },
  {
    id: 4,
    title: "Phase 04: Production Deployment",
    status: "Pending",
    date: "April 21 - May 10",
    description: "On-site assembly and technical rehearsal. Culinary dry-runs and sensory calibration.",
    location: "Main Site",
    team: 45,
    attachments: []
  }
];

export default function EventTimeline() {
  const [expandedStage, setExpandedStage] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white pt-32 pb-40 px-8 selection:bg-[#C6A75E]/30">
      
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto mb-20 border-b border-white/5 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="space-y-4">
            <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.8em] block">Live Deployment</span>
            <h1 className="text-6xl md:text-8xl font-serif font-light tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
               Event <br />
               <span className="italic text-[#C6A75E]">Timeline.</span>
            </h1>
          </div>
          <div className="flex items-center gap-6">
             <div className="text-right">
                <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-1">Current Milestone</p>
                <p className="text-[#C6A75E] text-sm font-bold uppercase">Architectural Integration</p>
             </div>
             <div className="w-12 h-12 rounded-full border border-[#C6A75E]/30 flex items-center justify-center animate-pulse">
                <Clock className="text-[#C6A75E] w-5 h-5" />
             </div>
          </div>
        </motion.div>
      </section>

      {/* Main Timeline Experience */}
      <section className="max-w-7xl mx-auto">
        <div className="space-y-6">
           {timelineStages.map((stage, index) => (
             <StageCard 
               key={stage.id} 
               stage={stage} 
               isExpanded={expandedStage === stage.id}
               onToggle={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
               isLast={index === timelineStages.length - 1}
             />
           ))}
        </div>
      </section>

      {/* Quick Visual Stats Footer */}
      <section className="max-w-7xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="p-8 bg-[#111114] border border-white/5 rounded-3xl flex items-center gap-6 group hover:border-[#C6A75E]/20 transition-all">
            <div className="w-12 h-12 bg-[#C6A75E]/10 rounded-2xl flex items-center justify-center text-[#C6A75E]">
               <Calendar size={20} />
            </div>
            <div>
               <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest">Time Elapsed</p>
               <p className="text-xl font-serif">14 Days <span className="text-sm font-sans text-white/10 italic">/ 60</span></p>
            </div>
         </div>
         <div className="p-8 bg-[#111114] border border-white/5 rounded-3xl flex items-center gap-6 group hover:border-[#C6A75E]/20 transition-all">
            <div className="w-12 h-12 bg-[#C6A75E]/10 rounded-2xl flex items-center justify-center text-[#C6A75E]">
               <Users size={20} />
            </div>
            <div>
               <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest">Active Personnel</p>
               <p className="text-xl font-serif">24 Artisans</p>
            </div>
         </div>
         <div className="p-8 bg-[#111114] border border-white/5 rounded-3xl flex items-center gap-6 group hover:border-[#C6A75E]/20 transition-all">
            <div className="w-12 h-12 bg-[#C6A75E]/10 rounded-2xl flex items-center justify-center text-[#C6A75E]">
               <FileText size={20} />
            </div>
            <div>
               <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest">Assets Approved</p>
               <p className="text-xl font-serif">156 Documents</p>
            </div>
         </div>
      </section>

    </div>
  );
}

function StageCard({ stage, isExpanded, onToggle, isLast }: { stage: any, isExpanded: boolean, onToggle: () => void, isLast: boolean }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-[#C6A75E]';
      case 'In Progress': return 'text-blue-400';
      default: return 'text-white/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return <CheckCircle2 className="w-5 h-5 text-[#C6A75E]" />;
      case 'In Progress': return <Clock className="w-5 h-5 text-blue-400 animate-spin-slow" />;
      default: return <Hourglass className="w-5 h-5 text-white/20" />;
    }
  };

  return (
    <div className="relative">
      {/* Connection Line */}
      {!isLast && (
        <div className="absolute left-[39px] top-20 bottom-0 w-[1px] bg-white/5 z-0" />
      )}

      <motion.div 
        layout
        className={`relative z-10 bg-[#111114] border transition-all duration-500 rounded-[32px] overflow-hidden ${isExpanded ? 'border-[#C6A75E]/40 shadow-2xl shadow-[#C6A75E]/10' : 'border-white/5 hover:border-white/10'}`}
      >
        <div 
          onClick={onToggle}
          className="p-8 flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-8">
             <div className="w-12 h-12 rounded-2xl bg-black/40 flex items-center justify-center border border-white/5">
                {getStatusIcon(stage.status)}
             </div>
             <div className="space-y-1">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${getStatusColor(stage.status)}`}>{stage.status}</span>
                <h3 className="text-xl md:text-2xl font-serif font-light">{stage.title}</h3>
             </div>
          </div>
          
          <div className="flex items-center gap-12">
             <div className="hidden md:block text-right">
                <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest">Timeline</p>
                <p className="text-xs font-medium text-white/60">{stage.date}</p>
             </div>
             <div className={`p-2 rounded-full transition-transform duration-500 ${isExpanded ? 'rotate-180 bg-[#C6A75E] text-[#0B0B0D]' : 'bg-white/5 text-white/20'}`}>
                <ChevronDown size={20} />
             </div>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-8 pb-10 border-t border-white/[0.03]"
            >
               <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-8 space-y-8">
                     <div className="space-y-4">
                        <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Detail Summary</p>
                        <p className="text-white/60 text-lg font-light leading-relaxed max-w-2xl">{stage.description}</p>
                     </div>
                     
                     {stage.attachments.length > 0 && (
                       <div className="space-y-4 pt-6">
                          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Network Assets</p>
                          <div className="flex flex-wrap gap-4">
                             {stage.attachments.map((file: any, i: number) => (
                               <div key={i} className="flex items-center gap-3 px-6 py-3 bg-black/40 border border-white/5 rounded-2xl hover:border-[#C6A75E]/30 cursor-pointer transition-all group">
                                  {file.type === 'image' ? <ImageIcon size={14} className="text-[#C6A75E]" /> : <Paperclip size={14} className="text-[#C6A75E]" />}
                                  <span className="text-xs font-medium text-white/40 group-hover:text-white transition-colors">{file.name}</span>
                               </div>
                             ))}
                          </div>
                       </div>
                     )}
                  </div>

                  <div className="lg:col-span-4 space-y-6 bg-black/20 p-8 rounded-3xl border border-white/5 self-start">
                     <div className="space-y-4">
                        <div className="flex items-center gap-4">
                           <MapPin size={16} className="text-[#C6A75E]/40" />
                           <div>
                              <p className="text-[9px] text-white/20 font-bold uppercase">Deployment Site</p>
                              <p className="text-sm">{stage.location}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <Users size={16} className="text-[#C6A75E]/40" />
                           <div>
                              <p className="text-[9px] text-white/20 font-bold uppercase">Assigned Collective</p>
                              <p className="text-sm">{stage.team} Specialists</p>
                           </div>
                        </div>
                     </div>
                     <button className="w-full py-4 mt-4 bg-[#C6A75E]/5 border border-[#C6A75E]/20 text-[#C6A75E] text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#C6A75E] hover:text-[#0B0B0D] transition-all">
                        Full Phase Report
                     </button>
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
