import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EventOverviewProps {
  image: string;
  paragraphs: string[];
  theme?: 'dark' | 'light';
}

export function EventOverview({ image, paragraphs, theme = 'dark' }: EventOverviewProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isLight = theme === 'light';
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section 
      ref={sectionRef} 
      className={`relative py-32 md:py-48 lg:py-60 overflow-hidden z-20 transition-colors duration-1000 ${
        isLight ? 'bg-[#FFFFFF]' : 'bg-[#0B0B0D]'
      }`}
    >
      {/* Decorative Light Theme Accent */}
      {isLight && (
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C6A75E]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      )}

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          
          {/* Left: Refined Photographic Pillar */}
          <div className="lg:col-span-5 relative">
             <motion.div 
               style={{ y: imageY }}
               className={`relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl z-10 ${
                 isLight ? 'shadow-black/10' : 'shadow-black/80'
               }`}
             >
               <ImageWithFallback
                 src={image}
                 alt="Experience Overview"
                 className="w-full h-full object-cover"
               />
               <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-${isLight ? 'black/20' : 'black/60'}`} />
             </motion.div>
             
             {/* Abstract Floating Frame */}
             <div className={`absolute -inset-6 border-2 rounded-[2.5rem] -z-0 transform translate-x-12 translate-y-12 transition-colors duration-1000 ${
               isLight ? 'border-[#C6A75E]/10' : 'border-white/5'
             }`} />
          </div>

          {/* Right: Modern Typographic Layout */}
          <div className="lg:col-span-7 relative z-10">
            <motion.div
              style={{ y: textY }}
              className="space-y-16"
            >
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 mb-10"
                >
                  <span className={`text-[10px] font-bold uppercase tracking-[0.5em] ${
                    isLight ? 'text-[#C6A75E]' : 'text-[#C6A75E]'
                  }`}>
                    Defining Excellence
                  </span>
                  <div className={`flex-1 h-px ${isLight ? 'bg-[#C6A75E]/30' : 'bg-white/10'}`} />
                </motion.div>
                
                <h2 
                  className={`text-[56px] md:text-[80px] lg:text-[100px] font-light leading-[0.95] tracking-tight transition-colors duration-1000 ${
                    isLight ? 'text-[#0B0B0D]' : 'text-[#F5F5F5]'
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Crafting The <br/>
                  <span className="italic font-serif text-[#C6A75E]">Extraordinary</span>
                </h2>
              </div>

              <div className="space-y-12 relative">
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.2 }}
                    className={`font-light leading-relaxed transition-colors duration-1000 ${
                      index === 0 
                        ? `text-2xl md:text-3xl lg:text-4xl ${isLight ? 'text-[#1A1A1A]' : 'text-white'}` 
                        : `text-lg md:text-xl ${isLight ? 'text-[#444444]' : 'text-gray-400'}`
                    }`}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pt-10"
              >
                <div className={`w-24 h-[1px] ${isLight ? 'bg-[#C6A75E]' : 'bg-[#C6A75E]'}`} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
