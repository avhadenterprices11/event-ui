import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We initiate the process with a profound exploration of your desires, understanding your aesthetic preferences, narrative, and overarching logistical requirements to build a foundational brief.',
  },
  {
    number: '02',
    title: 'Concept Architecture',
    description: 'Our design house orchestrates a comprehensive master proposal containing breathtaking mood boards, spatial renderings, structural timelines, and meticulous budget architectures.',
  },
  {
    number: '03',
    title: 'Precision Sourcing',
    description: 'Operating strictly with global elite partners, we secure and manage every venue, master artisan, culinary expert, and technical team to construct your event ecosystem.',
  },
  {
    number: '04',
    title: 'Flawless Execution',
    description: 'Your masterpiece comes to life. Our directors silently govern the venue environment and flow of operations, allowing you to bask in the celebration entirely unburdened.',
  },
];

export function HowItWorks() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-[#0B0B0D] relative border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Side: Sticky Title */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-[#C6A75E]" />
                <span className="text-[#C6A75E] text-xs font-semibold uppercase tracking-[0.3em]">
                  The Process
                </span>
              </div>
              <h2 
                className="text-[56px] md:text-[72px] lg:text-[88px] text-[#F5F5F5] font-light leading-[0.95] tracking-tight mb-8"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                How It <br/>
                <i className="text-[#C6A75E]">Works</i>
              </h2>
              <p className="text-[#B8B8B8] text-lg font-light leading-relaxed max-w-md">
                Our approach is deeply systematic, ensuring absolute transparency, control, and peace of mind from conception to completion.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Flowing Editorial List */}
        <div className="lg:col-span-7 relative">
          
          <div className="flex flex-col">
            {steps.map((step, index) => {
              const stepRef = useRef(null);
              const stepInView = useInView(stepRef, { once: true, margin: '-50px' });

              return (
                <div 
                  key={step.number} 
                  ref={stepRef}
                  className="group relative flex flex-col sm:flex-row gap-8 sm:gap-16 py-12 md:py-16 border-t border-white/10 first:border-0"
                >
                   {/* Gold Hover Bar Overlay */}
                   <div className="absolute top-[-1px] left-0 h-px bg-[#C6A75E] w-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />

                   {/* Number Marker */}
                   <motion.div 
                     initial={{ opacity: 0, x: -20 }}
                     animate={stepInView ? { opacity: 1, x: 0 } : {}}
                     transition={{ duration: 0.6, delay: index * 0.1 }}
                     className="shrink-0"
                   >
                     <span className="text-[#C6A75E]/30 text-5xl md:text-6xl font-serif italic transition-colors duration-500 group-hover:text-[#C6A75E]">
                       {step.number}
                     </span>
                   </motion.div>

                   {/* Text Block */}
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={stepInView ? { opacity: 1, y: 0 } : {}}
                     transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                     className="flex flex-col gap-4"
                   >
                     <h3 
                       className="text-3xl md:text-4xl text-[#F5F5F5] font-light tracking-wide transition-colors duration-500 group-hover:text-white"
                       style={{ fontFamily: 'var(--font-heading)' }}
                     >
                       {step.title}
                     </h3>
                     <p className="text-[#B8B8B8] font-light leading-relaxed text-sm md:text-base max-w-lg">
                       {step.description}
                     </p>
                   </motion.div>
                </div>
              );
            })}
            
            {/* Final closing border */}
            <div className="w-full h-px border-t border-white/10 relative group">
              <div className="absolute top-[-1px] left-0 h-px bg-[#C6A75E] w-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}