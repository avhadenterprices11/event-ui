import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutHeroBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        height: '70vh',
      }}
    >
      {/* Full-width main background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury wedding ballroom"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Premium layered background images */}
      <div className="absolute inset-0">
        {/* Left side luxury decor overlay */}
        <motion.div
          className="absolute left-0 top-0 w-1/3 h-full opacity-20"
          animate={{
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1080"
            alt="Luxury event decor"
            className="w-full h-full object-cover"
            style={{
              mixBlendMode: 'soft-light',
            }}
          />
        </motion.div>

        {/* Right side celebration venue overlay */}
        <motion.div
          className="absolute right-0 top-0 w-1/3 h-full opacity-15"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?auto=format&fit=crop&q=80&w=1080"
            alt="Premium celebration venue"
            className="w-full h-full object-cover"
            style={{
              mixBlendMode: 'overlay',
            }}
          />
        </motion.div>
      </div>

      {/* Dark gradient overlays for readability and premium feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/70 via-[#0B0B0D]/50 to-[#0B0B0D]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/60 via-transparent to-[#0B0B0D]/60" />

      {/* Subtle gold glow accents */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C6A75E]/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#E5C97A]/15 blur-[180px] rounded-full" />
      </div>

      {/* Floating gold particles for atmosphere */}
      <div className="absolute inset-0 opacity-25">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#C6A75E] rounded-full"
            style={{
              left: `${5 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
              filter: 'blur(0.5px)',
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Main Content - Centered Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          className="text-center px-20 max-w-[1200px]"
          style={{ opacity: textOpacity }}
        >
          {/* Breadcrumb */}
          <motion.div
            className="text-sm text-[#C6C6C6] mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Home / About Us
          </motion.div>

          {/* Label */}
          <motion.div
            className="text-[#C6A75E] text-sm uppercase tracking-[0.3em] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            About Our Company
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-[72px] leading-[1.1] mb-8 text-[#F5F5F5]"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            Crafting Timeless Celebrations
          </motion.h1>

          {/* Gold underline - centered */}
          <motion.div
            className="w-[100px] h-[2px] bg-[#C6A75E] mb-8 mx-auto"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          />

          {/* Subtext */}
          <motion.p
            className="text-[#E0E0E0] text-xl leading-relaxed max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            We design extraordinary experiences with precision, passion, and an uncompromising
            commitment to luxury.
          </motion.p>


        </motion.div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0D] to-transparent" />
    </section>
  );
}
