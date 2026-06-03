import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface IndividualEventHeroProps {
  eventType: string;
  title: string;
  description: string;
  image: string;
  detailImage?: string;
}

export function IndividualEventHero({
  eventType,
  title,
  description,
  image,
  detailImage,
}: IndividualEventHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  
  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 40);
      mouseY.set((clientY / innerHeight - 0.5) * 40);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const blurValue = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  // Split title for character animation
  const titleWords = title.split(' ');

  return (
    <section ref={heroRef} className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden bg-[#0B0B0D]">
      {/* Immersive Background Layer */}
      <motion.div
        className="absolute inset-x-[-10%] inset-y-[-10%] z-0"
        style={{ 
          scale: imageScale,
          x: springX,
          y: springY,
          filter: `blur(${blurValue}px)`
        }}
      >
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Advanced Multi-layer Gradients */}
        <div className="absolute inset-0 bg-[#0B0B0D]/20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/90 via-transparent to-transparent opacity-70" />
        
        {/* Dynamic Lens Flare / Light Leak Effect */}
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-gradient-radial from-[#C6A75E]/10 to-transparent blur-[120px] pointer-events-none" 
        />
      </motion.div>

      {/* Hero Content Architecture */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center"
      >
        {/* High-End Label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="px-6 py-2 rounded-full border border-[#C6A75E]/30 bg-[#C6A75E]/5 backdrop-blur-md">
            <span className="text-[#C6A75E] text-[10px] font-bold tracking-[0.6em] uppercase">
              {eventType}
            </span>
          </div>
        </motion.div>

        {/* Monumental Headline with Character Reveal */}
        <div className="relative mb-12 text-center flex flex-col items-center lg:items-center">
          {detailImage && (
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 12 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-12 md:-right-24 -top-20 hidden lg:block w-64 h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-20"
            >
              <ImageWithFallback src={detailImage} alt="Detail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#0B0B0D]/20" />
            </motion.div>
          )}

          <h1 
            className="text-[60px] md:text-[100px] lg:text-[140px] text-white font-light leading-[0.9] tracking-tighter"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {titleWords.map((word, wordIdx) => (
              <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.2em]">
                {word.split('').map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    initial={{ opacity: 0, y: 100, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 0.3 + (wordIdx * 0.1) + (charIdx * 0.03), 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
          
          {/* Typographic Mask Placeholder / Glow */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute -inset-x-20 -inset-y-10 bg-[#C6A75E]/5 blur-[80px] -z-10 rounded-full pointer-events-none"
          />
        </div>

        {/* Narrative Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="text-gray-300 max-w-3xl text-lg md:text-2xl font-light leading-relaxed mb-16 text-center"
        >
          {description}
        </motion.p>

        {/* Intersection Controls */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-8 items-center"
        >
          <Link
            to="/quote"
            className="group relative px-12 py-6 rounded-full overflow-hidden bg-transparent border border-[#C6A75E] min-w-[260px] text-center"
          >
            <div className="absolute inset-0 bg-[#C6A75E] transform scale-y-0 origin-top transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
            <span className="relative z-10 text-[#C6A75E] group-hover:text-[#0B0B0D] uppercase tracking-[0.3em] text-xs font-bold transition-colors duration-600">
              Personal Inquiry
            </span>
          </Link>
          
          <a
            href="#gallery"
            className="group flex items-center gap-4 text-white/70 uppercase tracking-[0.2em] text-xs font-semibold hover:text-[#C6A75E] transition-all duration-300"
          >
            <div className="relative w-14 h-14 rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
               <motion.div 
                 animate={{ y: [0, 4, 0] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="w-[1px] h-4 bg-current" 
               />
               <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            Explore Gallery
          </a>
        </motion.div>
      </motion.div>

      {/* Modern Vertical Scroll Narrative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-10 z-10"
      >
        <span className="text-[#C6A75E] text-[10px] uppercase tracking-[0.4em] font-bold [writing-mode:vertical-lr] mb-4">
          Scroll to explore
        </span>
        <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden">
           <motion.div 
             className="absolute top-0 left-0 w-full h-[30%] bg-[#C6A75E]"
             animate={{ top: ['-30%', '100%'] }}
             transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
           />
        </div>
      </motion.div>
      
      {/* Decorative Branding Asset */}
      <div className="absolute top-12 left-12 opacity-20 hidden lg:block">
         <span className="text-[10px] text-white tracking-[0.8em] font-light uppercase">Legacy of Excellence</span>
      </div>
    </section>
  );
}
