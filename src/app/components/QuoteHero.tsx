import { motion } from 'motion/react';

export function QuoteHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient and spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D] via-[#1a1a1d] to-[#0B0B0D]">
        {/* Soft gold spotlight glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-[#C6A75E]/6 rounded-full blur-[130px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-[#C6A75E] text-xs tracking-[0.25em] uppercase font-medium">
            PRIVATE CONSULTATION
          </p>

          <h1 className="text-[62px] leading-[1.1] tracking-tight">
            Begin Your Signature Event
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Tell us about your vision. Our experts will craft a bespoke experience tailored to you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
