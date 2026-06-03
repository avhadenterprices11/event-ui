import { motion } from 'motion/react';

export function GetQuoteSection() {
  return (
    <section className="relative bg-[#0B0B0D] py-32 overflow-hidden">
      {/* Dramatic center spotlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[700px] bg-[#C6A75E]/15 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Additional subtle glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C6A75E]/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#C6A75E]/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-serif text-6xl text-white mb-8 leading-[1.2]"
          >
            Let's Begin Planning
            <br />
            Your Celebration
          </motion.h2>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center px-12 py-5 rounded-full bg-gradient-to-r from-[#C6A75E] to-[#B89750] text-white font-semibold text-lg overflow-hidden group"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4B56E] to-[#C6A75E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Button glow */}
              <div className="absolute inset-0 blur-xl bg-[#C6A75E]/50 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="relative z-10">Request a Private Consultation</span>
            </motion.button>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-[#B8B8B8] text-sm"
          >
            Complimentary consultation for luxury events · Available 24/7
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
