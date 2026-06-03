import { motion, useInView } from 'motion/react';
import { ThreeDImageRing } from './ThreeDImageRing';
import { useRef } from 'react';

const planningImages = [
  'https://images.unsplash.com/photo-1609189123897-42db027571c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHBsYW5uaW5nJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc3MjQzNTAxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1698582468284-fd9161f4176b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZGVzaWduJTIwY29uY2VwdHxlbnwxfHx8fDE3NzI0MzUwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1772127822525-7eda37383b9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHZlbnVlJTIwc2V0dXB8ZW58MXx8fHwxNzcyNDM1MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1763553113332-800519753e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGRlY29yJTIwZGV0YWlsc3xlbnwxfHx8fDE3NzI0MzUwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1768508948990-f5866f800fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjZWxlYnJhdGlvbiUyMHBhcnR5fGVufDF8fHx8MTc3MjQzNTAxOXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1747115275646-49725fb5a003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGZsb3JhbHMlMjBhcnJhbmdlbWVudHxlbnwxfHx8fDE3NzI0MzUwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
];

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'An intimate architectural discussion defining your vision, legacy, and aesthetic parameters.',
  },
  {
    number: '02',
    title: 'Visual Architecture',
    description: 'We orchestrate comprehensive design schematics, material boards, and immersive space renderings.',
  },
  {
    number: '03',
    title: 'Venue Acquisition',
    description: 'Securing world-class spaces globally, mapping their structural nuances to your celebration.',
  },
  {
    number: '04',
    title: 'Elite Curation',
    description: 'Deploying our network of international master artisans, culinary experts, and production teams.',
  },
  {
    number: '05',
    title: 'Meticulous Polishing',
    description: 'Refining every micro-interaction, ensuring infinite cohesive luxury from arrival to departure.',
  },
  {
    number: '06',
    title: 'Execution',
    description: 'Absolute invisible governance. Your masterpiece comes alive flawlessly orchestrated.',
  },
];

export function PlanningProcess() {
  const processRef = useRef(null);
  
  return (
    <section className="relative bg-[#0B0B0D] py-40 md:py-60 overflow-hidden">
      {/* Atmosphere Layer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(198,167,94,0.08)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="relative w-full px-6 md:px-20">
        {/* Editorial Header */}
        <div className="text-center mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.6em] block mb-8">
              Mastering the Journey
            </span>
            <h2 
              className="text-7xl md:text-8xl lg:text-9xl font-light text-white mb-10 tracking-tighter leading-[0.9]" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our <i className="text-[#C6A75E] not-italic font-serif italic">Process</i>
            </h2>
            <div className="w-16 h-[1px] bg-[#C6A75E] mx-auto mb-10" />
            <p className="text-gray-400 max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed">
              From the initial visionary spark to the final standing ovation, we manifest world-class events through precise architectural stages.
            </p>
          </motion.div>
        </div>

        {/* Process Roadmap */}
        <div ref={processRef} className="relative">
          {/* Central Filament */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

          <div className="space-y-32 md:space-y-48">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className={`flex flex-col lg:flex-row items-center gap-16 md:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual Half */}
                <div className="flex-1 w-full group relative">
                  <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden border border-white/5 shadow-2xl">
                     <img 
                       src={planningImages[index % planningImages.length]}
                       alt={step.title}
                       className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                     />
                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />
                  </div>

                </div>

                {/* Content Half */}
                <div className={`flex-1 space-y-8 ${index % 2 !== 0 ? 'lg:text-right lg:items-end' : ''} flex flex-col`}>
                   <div className="space-y-4">
                     <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em]">Phase {step.number}</span>
                     <h3 className="text-3xl md:text-5xl font-light text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                       {step.title}
                     </h3>
                   </div>
                   
                   <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                     {step.description}
                   </p>

                   <div className="pt-6">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-white/60 hover:text-[#C6A75E] cursor-pointer transition-colors"
                      >
                         Discovery Brief <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center transition-colors hover:border-[#C6A75E] group"><div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]" /></div>
                      </motion.div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
