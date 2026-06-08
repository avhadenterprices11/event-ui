import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const partners = [
  { 
    id: 1, 
    name: 'Aria Venues', 
    logo: (
      <svg viewBox="0 0 140 40" fill="currentColor" className="w-auto h-8 md:h-10 transition-transform duration-500 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10 L10 30 L15 30 L20 20 L25 30 L30 30 Z" fill="currentColor"/>
        <text x="40" y="26" fontFamily="inherit" fontSize="20" letterSpacing="0.1em" fontWeight="300">ARIA VENUES</text>
      </svg>
    )
  },
  { 
    id: 2, 
    name: 'Lumière Events', 
    logo: (
      <svg viewBox="0 0 180 40" fill="currentColor" className="w-auto h-8 md:h-10 transition-transform duration-500 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
        <text x="40" y="25" fontFamily="inherit" fontSize="16" letterSpacing="0.25em" fontWeight="300">LUMIÈRE EVENTS</text>
      </svg>
    )
  },
  { 
    id: 3, 
    name: 'Vogue Events', 
    logo: (
      <svg viewBox="0 0 170 40" fill="currentColor" className="w-auto h-8 md:h-10 transition-transform duration-500 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="28" fontFamily="Georgia, serif" fontSize="24" letterSpacing="0.05em" fontWeight="400">VOGUE</text>
        <text x="100" y="26" fontFamily="inherit" fontSize="14" letterSpacing="0.1em" fontWeight="300">EVENTS</text>
      </svg>
    )
  },
  { 
    id: 4, 
    name: 'Opulence', 
    logo: (
      <svg viewBox="0 0 160 40" fill="currentColor" className="w-auto h-8 md:h-10 transition-transform duration-500 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="16" height="16" transform="rotate(45 16 20)" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <text x="40" y="25" fontFamily="inherit" fontSize="16" letterSpacing="0.3em" fontWeight="300">OPULENCE</text>
      </svg>
    )
  },
  { 
    id: 5, 
    name: 'The Ritz', 
    logo: (
      <svg viewBox="0 0 150 40" fill="currentColor" className="w-auto h-8 md:h-10 transition-transform duration-500 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 10 L15 30 M15 10 L25 10 A5 5 0 0 1 25 20 L15 20 M20 20 L27 30" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <text x="40" y="25" fontFamily="Georgia, serif" fontSize="20" letterSpacing="0.15em" fontWeight="300">THE RITZ</text>
      </svg>
    )
  },
  { 
    id: 6, 
    name: 'Elysium Catering', 
    logo: (
      <svg viewBox="0 0 190 40" fill="currentColor" className="w-auto h-8 md:h-10 transition-transform duration-500 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20 Q20 5 30 20 T50 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <text x="60" y="25" fontFamily="inherit" fontSize="14" letterSpacing="0.2em" fontWeight="300">ELYSIUM CATERING</text>
      </svg>
    )
  },
  { 
    id: 7, 
    name: 'Four Seasons', 
    logo: (
      <svg viewBox="0 0 200 40" fill="currentColor" className="w-auto h-8 md:h-10 transition-transform duration-500 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 10 L15 30 M15 10 L25 10 M15 20 L22 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <text x="40" y="25" fontFamily="inherit" fontSize="16" letterSpacing="0.1em" fontWeight="300">FOUR SEASONS</text>
      </svg>
    )
  },
];

export function PartnersSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  // Repeat partners array for smooth infinite scrolling
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section ref={containerRef} className="bg-[#0B0B0D] py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <h3 className="text-sm tracking-[0.3em] uppercase text-[#C6A75E] font-semibold">
            Trusted Partners
          </h3>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C6A75E]/30 to-transparent max-w-[200px]" />
          <p className="text-[#888888] text-sm font-light max-w-sm">
            Collaborating with the world's most prestigious luxury brands and iconic venues.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden">
        {/* Shadow overlays for seamless fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0B0D] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0B0D] to-transparent z-10" />

        <motion.div
          className="flex gap-16 md:gap-32 items-center flex-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {marqueeItems.map((partner, idx) => (
            <div 
              key={`${partner.id}-${idx}`} 
              className="group flex-shrink-0 flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity duration-500 cursor-pointer text-white hover:text-[#C6A75E]"
            >
              {partner.logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
