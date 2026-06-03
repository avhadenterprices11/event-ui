import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Smooth scroll animations
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  // Mouse parallax springs
  const springConfig = { damping: 25, stiffness: 120 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 50;
      const moveY = (clientY - window.innerHeight / 2) / 50;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const transitionConfig = { duration: 1.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen bg-[#0B0B0D] overflow-hidden flex items-center justify-center selection:bg-[#C6A75E]/30"
    >
      {/* Abstract Animated Glows (Dark Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <motion.div
          className="absolute top-[15%] left-[5%] w-[600px] h-[600px] rounded-full bg-[#C6A75E]/10 blur-[130px]"
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[10%] w-[700px] h-[700px] rounded-full bg-[#E5C97A]/5 blur-[160px]"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="max-w-[1728px] w-full mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full pt-20 lg:pt-0"
      >
        {/* Left Side: Typography */}
        <div className="lg:col-span-7 xl:col-span-6 z-20 flex flex-col justify-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transitionConfig, delay: 0.1 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-[1px] bg-[#C6A75E]" />
            <span className="text-[#C6A75E] uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">
              Bespoke Event Architecture
            </span>
          </motion.div>

          {/* Headline */}
          <div className="relative mb-10">
            <div className="overflow-hidden py-10 px-10 -my-10 -mx-10">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ ...transitionConfig, delay: 0.2 }}
                className="text-[64px] md:text-[90px] lg:text-[110px] xl:text-[130px] leading-[1.2] text-[#F5F5F5] font-light tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Curating
              </motion.h1>
            </div>
            <div className="overflow-hidden py-10 px-10 -my-10 -mx-10 -mt-6 lg:-mt-10">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ ...transitionConfig, delay: 0.3 }}
                className="text-[64px] md:text-[90px] lg:text-[110px] xl:text-[130px] leading-[1.2] text-[#C6A75E] italic tracking-tight flex items-center gap-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span>Masterpieces</span>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden md:block h-[1px] flex-grow bg-[#C6A75E]/30 origin-left"
                />
              </motion.h1>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionConfig, delay: 0.5 }}
            className="text-[#A0A0A0] max-w-[500px] text-lg lg:text-xl leading-relaxed mb-14 font-light italic"
          >
            Luxury events crafted with unparalleled attention to detail, orchestrating the extraordinary so you can celebrate without limits.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionConfig, delay: 0.6 }}
            className="flex flex-col sm:row gap-8 items-start sm:items-center"
          >
            <Link
              to="/quote"
              className="group relative px-10 py-5 overflow-hidden border border-[#C6A75E]/30"
            >
              <div className="absolute inset-0 bg-[#C6A75E] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 text-white group-hover:text-[#0B0B0D] tracking-widest uppercase text-[10px] font-bold transition-colors duration-500">
                Start Planning
              </span>
            </Link>
            
            <Link
              to="/services"
              className="group flex items-center gap-4 text-[#F5F5F5] tracking-widest uppercase text-[10px] font-bold transition-all"
            >
              <span className="relative">
                Explore The Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C6A75E] transition-all duration-500 group-hover:w-full" />
              </span>
              <motion.div 
                whileHover={{ x: 5 }}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C6A75E]/50 group-hover:bg-[#C6A75E]/5 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Editorial Image Collage */}
        <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 relative h-[700px] xl:h-[800px] items-center justify-center pointer-events-none">
          
          {/* Main Portrait Image */}
          <motion.div
            className="relative w-[380px] xl:w-[460px] aspect-[4/5] overflow-hidden rounded-[4px] shadow-[0_40px_100px_rgba(0,0,0,0.6)] z-10"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ ...transitionConfig, delay: 0.4 }}
            style={{ y: y1, x: mouseX }}
          >
            <motion.div
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ ...transitionConfig, delay: 0.4 }}
              className="w-full h-full"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1767986012138-d02276728368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjBlbGVnYW50fGVufDF8fHx8MTc3MzM4Mjc4NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury wedding ceremony"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 border border-white/10" />
          </motion.div>

          {/* Secondary Landscape Image */}
          <motion.div
            className="absolute -left-16 xl:-left-24 bottom-16 xl:bottom-24 w-[280px] xl:w-[360px] aspect-[4/3] overflow-hidden rounded-[2px] shadow-[0_30px_80px_rgba(0,0,0,0.5)] z-20"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ ...transitionConfig, delay: 0.6 }}
            style={{ y: y2, x: useTransform(mouseX, x => x * -1.2) }}
          >
            <motion.div
              className="w-full h-full"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759519238029-689e99c6d19e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwYmFsbHJvb20lMjBjaGFuZGVsaWVyJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIyNjM4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Elegant ballroom"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Glass Detail Point */}
          <motion.div
            className="absolute top-20 right-0 xl:right-[-20px] w-48 xl:w-56 p-6 bg-white/5 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...transitionConfig, delay: 1 }}
            style={{ y: y3, x: useTransform(mouseY, y => y * 0.8) }}
          >
            <div className="w-8 h-[1px] bg-[#C6A75E] mb-4" />
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C6A75E] mb-2">Excellence</p>
            <p className="text-xs text-[#B8B8B8] leading-relaxed font-light">Meticulously curated experiences for the discerning host.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C6A75E] to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.5em] text-[#C6A75E] font-bold">Scroll</span>
      </motion.div>
    </section>
  );
}