import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const partners = [
  { id: 1, name: 'Partner 1', svg: <path d="M20.504 24.71c-1.113.196-2.246.255-3.418.411l-3.574-10.469V25.57c-1.114.117-2.13.274-3.184.43V6h2.969l4.062 11.348V6h3.145z" fill="currentColor"/> },
  { id: 2, name: 'Partner 2', svg: <path d="M54.48 5.6v16.8h-2.91V9.217h-.04L46.332 22.4h-1.94L39.075 9.217h-.039V22.4H36.36V5.6h4.19l4.812 12.445h.078L50.522 5.6zm2.406 1.283c0-.466.155-.855.504-1.166.35-.311.737-.467 1.203-.467" fill="currentColor"/> },
  { id: 3, name: 'Partner 3', svg: <path d="M4.488.446H0v4.488h4.488zM4.375 23.828V7.666H.127v16.162z" fill="currentColor"/> },
  { id: 4, name: 'Partner 4', svg: <path d="M61.4656 8.65929H63.9925V15.6884C63.9925 19.2563 62.0261 21.3028 58.6006 21.3028C55.2106 21.3028 53.262 19.2919 53.262 15.7863V8.66819H55.7889" fill="currentColor"/> },
  { id: 5, name: 'Partner 5', svg: <path d="M91.0255 8.29182C91.6027 8.29182 92.0777 7.99174 92.1419 7.60405L92.7117 1.15984" fill="currentColor"/> },
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
              <svg 
                width="60" 
                height="30" 
                viewBox="0 0 100 32" 
                className="w-auto h-8 md:h-10 transition-transform duration-500 group-hover:scale-105"
              >
                {partner.svg}
              </svg>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
