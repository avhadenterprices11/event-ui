import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FullImageBannerProps {
  image: string;
  title?: string;
  subtitle?: string;
}

export function FullImageBanner({ image, title, subtitle }: FullImageBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section ref={containerRef} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-[-20%] bottom-[-20%] z-0"
      >
        <ImageWithFallback
          src={image}
          alt="Full Banner"
          className="w-full h-full object-cover"
        />
        {/* Overlay for cinematic depth */}
        <div className="absolute inset-0 bg-[#0B0B0D]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/40 via-transparent to-[#0B0B0D]/40" />
      </motion.div>

      {(title || subtitle) && (
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {subtitle && (
              <span className="text-[#C6A75E] text-xs font-bold tracking-[0.6em] uppercase block mb-4">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 
                className="text-4xl md:text-6xl lg:text-8xl text-white font-light tracking-tighter"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {title}
              </h2>
            )}
            <div className="w-12 h-px bg-[#C6A75E] mx-auto mt-10" />
          </motion.div>
        </div>
      )}
    </section>
  );
}
