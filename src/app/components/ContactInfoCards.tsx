import { motion, useInView } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useRef } from 'react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Headquarters',
    details: 'The Maison Studio\nMumbai, India',
    actionText: 'Get Directions',
  },
  {
    icon: Phone,
    title: 'Direct Line',
    details: '+91 98765 43210\nConcierge Available 24/7',
    actionText: 'Connect Now',
  },
  {
    icon: Mail,
    title: 'Correspondence',
    details: 'inquiries@luxuryevents.com\nexec@luxuryevents.com',
    actionText: 'Compose Email',
  },
];

export function ContactInfoCards() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-24 bg-[#0B0B0D] relative z-20 -mt-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5 bg-[#111114]">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative p-12 md:p-16 flex flex-col items-center text-center cursor-pointer overflow-hidden ${
                index !== contactInfo.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/5' : ''
              }`}
            >
               {/* Hover Gradient Illumination */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,167,94,0.05)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               
               {/* Vertical Expanding Hover Line */}
               <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#C6A75E] transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />

               {/* Icon Container */}
               <div className="mb-10 relative">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-[#C6A75E] group-hover:bg-[#C6A75E]/5 relative z-10">
                    <item.icon className="w-6 h-6 text-[#C6A75E] opacity-70 group-hover:opacity-100 transition-opacity duration-300" strokeWidth={1.5} />
                  </div>
                  {/* Subtle Icon Glow */}
                  <div className="absolute inset-0 bg-[#C6A75E]/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               </div>

               <h3 
                 className="text-2xl text-[#F5F5F5] font-light mb-6 transition-colors duration-500 group-hover:text-[#C6A75E]"
                 style={{ fontFamily: 'var(--font-heading)' }}
               >
                 {item.title}
               </h3>

               <p className="text-[#A0A0A0] text-sm font-light leading-relaxed whitespace-pre-line mb-10 flex-grow group-hover:text-[#E0E0E0] transition-colors duration-500">
                 {item.details}
               </p>

               {/* Action Prompt */}
               <div className="mt-auto flex items-center gap-3 overflow-hidden">
                  <div className="w-0 h-px bg-[#C6A75E] transition-all duration-500 group-hover:w-8" />
                  <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-semibold transition-all duration-500 group-hover:text-[#C6A75E]">
                    {item.actionText}
                  </span>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}