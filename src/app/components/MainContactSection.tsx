import { ContactForm } from './ContactForm';
import { ContactMapSocial } from './ContactMapSocial';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function MainContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#0B0B0D] border-t border-white/5 relative">
      
      {/* Abstract Structural Lines */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-24 bg-gradient-to-b from-[#C6A75E]/50 to-transparent" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left: Contact Form Pipeline (7 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-[#111114] border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Elegant Header for Form */}
            <div className="mb-12 border-b border-white/5 pb-8">
               <span className="text-[#C6A75E] text-[10px] tracking-[0.3em] uppercase font-bold mb-4 block">
                 Direct Inquiry
               </span>
               <h3 className="text-3xl md:text-4xl text-[#F5F5F5] font-light tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                 Send a Secure Message
               </h3>
            </div>
            
            <div className="relative z-10">
              <ContactForm />
            </div>

            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C6A75E]/10 to-transparent pointer-events-none" />
          </motion.div>

          {/* Right: Map + Social Connections (5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
             <div className="w-full h-full bg-[#111114] border border-white/5 rounded-2xl overflow-hidden min-h-[500px] relative group">
                {/* Visual Header Overlay */}
                <div className="absolute top-0 left-0 w-full p-8 z-10 bg-gradient-to-b from-[#111114] to-transparent">
                   <h3 className="text-xl md:text-2xl text-[#F5F5F5] font-light tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                     Global Presence
                   </h3>
                </div>

                {/* Container for imported MapSocial Component */}
                <div className="w-full h-full pt-20">
                   <ContactMapSocial />
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
