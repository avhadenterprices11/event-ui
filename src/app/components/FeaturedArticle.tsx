import { motion, useInView } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FeaturedArticle() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#0B0B0D] relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        <Link to="/blog/designing-perfect-luxury-destination-wedding" className="block group">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-[4/5] md:aspect-[21/9] rounded-[24px] overflow-hidden"
          >
            {/* Immersive Image Canvas */}
            <motion.div 
               className="absolute inset-0 w-full h-full"
               whileHover={{ scale: 1.03 }}
               transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745573674471-e057af420757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGRlY29yYXRpb24lMjBnb2xkfGVufDF8fHx8MTc3MjI3Mjg3NXww&ixlib=rb-4.1.0&q=80&w=1920"
                alt="Featured Article: Luxury Destination Wedding"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Gradient Masking */}
            <div className="absolute inset-0 bg-[#0B0B0D]/20 transition-opacity duration-700 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/90 via-[#0B0B0D]/30 to-transparent md:bg-gradient-to-r md:from-[#0B0B0D]/95 md:via-[#0B0B0D]/50 md:to-transparent" />
            
            {/* Embedded Content Block */}
            <div className="absolute inset-0 p-8 md:p-16 lg:p-24 flex flex-col justify-end md:justify-center w-full md:w-3/5 lg:w-1/2">
              <div className="transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-4 group-hover:translate-y-0">
                
                <div className="flex items-center gap-4 mb-6">
                   <span className="text-[#C6A75E] text-xs tracking-[0.2em] uppercase font-semibold">
                     Featured Publication
                   </span>
                   <div className="h-px w-8 bg-[#C6A75E]/50" />
                </div>

                <h2 
                   className="text-4xl md:text-5xl lg:text-7xl text-[#F5F5F5] font-light leading-[1.05] tracking-tight mb-8"
                   style={{ fontFamily: 'var(--font-heading)' }}
                >
                   Designing the Perfect <br/> Destination Epic.
                </h2>

                <p className="text-[#E0E0E0] md:text-[#B8B8B8] font-light leading-relaxed text-sm md:text-base mb-10 max-w-md">
                   Discover how our master team translates profound dreams into reality through hyper-meticulous logistical planning, exquisite aesthetic staging, and an elite command of international venues.
                </p>

                <div className="inline-flex items-center gap-3">
                   <div className="w-12 h-12 rounded-full border border-[#C6A75E]/30 bg-[#C6A75E]/10 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:bg-[#C6A75E] group-hover:border-[#C6A75E]">
                      <ArrowUpRight className="w-5 h-5 text-[#C6A75E] group-hover:text-[#0B0B0D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                   </div>
                   <span className="text-[#F5F5F5] text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-500 group-hover:text-[#C6A75E]">
                      Read Editorial
                   </span>
                </div>

              </div>
            </div>

            {/* Ambient Border Overlay */}
            <div className="absolute inset-0 border border-white/10 rounded-[24px] pointer-events-none" />
          </motion.div>
        </Link>
        
      </div>
    </section>
  );
}