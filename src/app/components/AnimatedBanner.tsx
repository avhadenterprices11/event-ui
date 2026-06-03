import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function AnimatedBanner() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden bg-[#0B0B0D]">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1760331339913-da9637154477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGJhbGxyb29tJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzczNjY0OTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          }}
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/90 via-[#0B0B0D]/70 to-[#0B0B0D]/50 z-[1]" />

      {/* Animated Gold Accent */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
      />

      {/* Content Container */}
      <div className="relative z-[2] h-full max-w-[1440px] mx-auto px-20 flex items-center">
        <div className="max-w-3xl space-y-6">
          {/* Small Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C6A75E]/30 bg-[#0B0B0D]/60 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-[#C6A75E]" />
            <span className="text-[#C6A75E] text-sm tracking-wider uppercase">
              Exclusive Luxury Events
            </span>
          </motion.div>

          {/* Main Heading - Slightly Larger */}
          <motion.h2
            className="text-5xl md:text-6xl text-[#F5F5F5] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience Unforgettable
            <br />
            <span className="text-[#C6A75E]">Moments</span>
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            className="text-[#D5D5D5] text-lg leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From intimate gatherings to grand celebrations, we transform your
            vision into reality with meticulous attention to detail and
            unparalleled elegance.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="px-8 py-4 rounded-[10px] bg-gradient-to-r from-[#C6A75E] to-[#E5C97A] text-[#0B0B0D] font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_30px_rgba(198,167,94,0.5)]">
              Discover Our Services
            </button>
          </motion.div>
        </div>
      </div>

      {/* Animated Gold Particles */}
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-[#C6A75E]/20 blur-2xl z-[1]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-20 right-1/3 w-16 h-16 rounded-full bg-[#E5C97A]/20 blur-2xl z-[1]"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      />
    </section>
  );
}
