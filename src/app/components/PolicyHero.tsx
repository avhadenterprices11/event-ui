import { motion } from 'motion/react';

interface PolicyHeroProps {
  title: string;
  lastUpdated?: string;
}

export function PolicyHero({ title, lastUpdated }: PolicyHeroProps) {
  return (
    <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D] via-[#111114] to-[#0B0B0D]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className="text-[#C6A75E] text-xs tracking-[0.25em] uppercase font-medium">
            LEGAL INFORMATION
          </p>

          <div className="space-y-6">
            <h1 className="text-[56px] leading-[1.1] tracking-tight">
              {title}
            </h1>

            {/* Decorative divider */}
            <div className="flex justify-center">
              <div className="w-20 h-px bg-[#C6A75E]" />
            </div>

            {lastUpdated && (
              <p className="text-sm text-gray-500">
                Last updated: {lastUpdated}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
