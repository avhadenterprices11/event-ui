import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function GetQuoteCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-[140px] bg-[#0B0B0D] overflow-hidden"
    >
      {/* Dramatic spotlight effect */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(198, 167, 94, 0.15) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#C6A75E] rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${30 + (i % 3) * 15}%`,
              filter: 'blur(1px)',
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

      <div className="max-w-[900px] mx-auto px-20 text-center relative z-10">
        {/* Label */}
        <motion.div
          className="text-[#C6A75E] text-sm uppercase tracking-[0.3em] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Let's Begin
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="text-[56px] leading-[1.15] mb-8 text-[#F5F5F5]"
          style={{ fontFamily: 'var(--font-heading)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        >
          Let's Design Your Signature Event
        </motion.h2>

        {/* Gold underline - centered */}
        <motion.div
          className="w-[100px] h-[2px] bg-[#C6A75E] mb-10 mx-auto"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <Link to="/quote">
            <motion.div
              className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-full text-[#0B0B0D] font-medium text-base uppercase tracking-wider overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #C6A75E 0%, #E5C97A 100%)',
                boxShadow: '0 8px 32px rgba(198, 167, 94, 0.3)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
            {/* Button glow on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{
                background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
              }}
            />
            
            <span className="relative z-10">Request a Consultation</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </Link>
        </motion.div>

        {/* Subtext */}
        <motion.p
          className="text-[#888888] text-sm mt-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          Our team will reach out within 24 hours to discuss your vision
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          className="mt-16 flex justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-br from-[#C6A75E] to-[#E5C97A]"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
