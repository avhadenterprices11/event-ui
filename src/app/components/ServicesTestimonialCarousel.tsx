import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const testimonials = [
  {
    quote: 'They orchestrated our wedding with absolute perfection.',
    author: 'Charlotte Wellington',
    role: 'Bride',
    company: 'Royal Garden Wedding',
  },
  {
    quote: 'The most exquisite corporate gala we have ever hosted.',
    author: 'James Harrington',
    role: 'CEO',
    company: 'Global Summit 2025',
  },
  {
    quote: 'Unparalleled elegance and flawless execution throughout.',
    author: 'Sophia Beaumont',
    role: 'Event Chair',
    company: 'Charity Foundation Gala',
  },
];

export function ServicesTestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform for parallax on the large number
  const numberX = useTransform(x, [-200, 200], [-20, 20]);
  const numberY = useTransform(y, [-200, 200], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section className="relative py-32 bg-[#0B0B0D] overflow-hidden">
      {/* Background subtle gradient */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, #C6A75E 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-20 relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-4xl md:text-5xl font-light tracking-tight text-[#F5F5F5]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Why Choose Our Services
            </h2>
          </motion.div>
        </div>

        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto" onMouseMove={handleMouseMove}>
          {/* Oversized index number - positioned to bleed off left edge */}
          <motion.div
            className="absolute -left-8 top-1/2 -translate-y-1/2 text-[28rem] font-bold text-[#C6A75E]/[0.03] select-none pointer-events-none leading-none tracking-tighter"
            style={{ x: numberX, y: numberY, fontFamily: 'var(--font-heading)' }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {String(activeIndex + 1).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Main content - asymmetric layout */}
          <div className="relative flex">
            {/* Left column - vertical layout */}
            <div className="flex flex-col items-center justify-center pr-16 border-r border-[#C6A75E]/20">
              {/* Vertical progress line */}
              <div className="relative h-48 w-px bg-[#C6A75E]/20">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-[#C6A75E] origin-top"
                  animate={{
                    height: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Center - main content */}
            <div className="flex-1 pl-16 py-12">
              {/* Company badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="mb-8"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-[#C6A75E] border border-[#C6A75E]/20 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]" />
                    {current.company}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Quote with character reveal */}
              <div className="relative mb-12 min-h-[140px]">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={activeIndex}
                    className="text-4xl md:text-5xl font-light text-[#F5F5F5] leading-[1.15] tracking-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {current.quote.split(' ').map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-[0.3em]"
                        variants={{
                          hidden: { opacity: 0, y: 20, rotateX: 90 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            transition: {
                              duration: 0.5,
                              delay: i * 0.05,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                          exit: {
                            opacity: 0,
                            y: -10,
                            transition: { duration: 0.2, delay: i * 0.02 },
                          },
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Author row */}
              <div className="flex items-end justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    {/* Animated line before name */}
                    <motion.div
                      className="w-8 h-px bg-[#C6A75E]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      style={{ originX: 0 }}
                    />
                    <div>
                      <p className="text-base font-medium text-[#F5F5F5]">{current.author}</p>
                      <p className="text-sm text-[#B8B8B8]">{current.role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={goPrev}
                    className="group relative w-12 h-12 rounded-full border border-[#C6A75E]/30 flex items-center justify-center overflow-hidden hover:border-[#C6A75E] transition-colors duration-300"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-[#C6A75E]"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="relative z-10 text-[#F5F5F5] group-hover:text-[#0B0B0D] transition-colors"
                    >
                      <path
                        d="M10 12L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>

                  <motion.button
                    onClick={goNext}
                    className="group relative w-12 h-12 rounded-full border border-[#C6A75E]/30 flex items-center justify-center overflow-hidden hover:border-[#C6A75E] transition-colors duration-300"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-[#C6A75E]"
                      initial={{ x: '100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="relative z-10 text-[#F5F5F5] group-hover:text-[#0B0B0D] transition-colors"
                    >
                      <path
                        d="M6 4L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom ticker - subtle repeating company names */}
          <div className="absolute -bottom-20 left-0 right-0 overflow-hidden opacity-[0.08] pointer-events-none">
            <motion.div
              className="flex whitespace-nowrap text-6xl font-bold tracking-tight text-[#C6A75E]"
              style={{ fontFamily: 'var(--font-heading)' }}
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              {[...Array(10)].map((_, i) => (
                <span key={i} className="mx-8">
                  {testimonials.map((t) => t.company).join(' • ')} •
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
