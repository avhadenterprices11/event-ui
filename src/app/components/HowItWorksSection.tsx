import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Understanding your vision and requirements in detail',
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Strategic planning and comprehensive timeline creation',
  },
  {
    number: '03',
    title: 'Design & Setup',
    description: 'Bringing your vision to life with exquisite design',
  },
  {
    number: '04',
    title: 'Execution',
    description: 'Flawless delivery and seamless event management',
  },
];

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]);

  return (
    <section ref={sectionRef} className="py-32 bg-[#111114] relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #C6A75E 0%, transparent 70%)',
          scale,
          opacity,
        }}
      />

      <div className="max-w-[1440px] mx-auto px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[#F5F5F5] mb-4">How It Works</h2>
          <p className="text-[#B8B8B8] text-lg">
            Our proven process for exceptional events
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {/* 3D Number Badge */}
              <motion.div
                className="relative mx-auto w-24 h-24 mb-6"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.5,
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                {/* Outer glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C6A75E] to-[#E5C97A] rounded-full blur-xl opacity-40" />

                {/* Badge container */}
                <div
                  className="relative w-full h-full bg-gradient-to-br from-[#C6A75E] to-[#E5C97A] rounded-full flex items-center justify-center shadow-2xl"
                  style={{
                    transform: 'rotateX(10deg)',
                    boxShadow: '0 15px 40px rgba(198, 167, 94, 0.4)',
                  }}
                >
                  <span
                    className="text-3xl font-bold text-[#0B0B0D]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {step.number}
                  </span>

                  {/* Inner ring */}
                  <div className="absolute inset-3 border-2 border-[#0B0B0D]/10 rounded-full" />
                </div>

                {/* Floating particles */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-[#E5C97A] rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3,
                  }}
                />
              </motion.div>

              {/* Glowing connector line effect */}
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute top-12 left-[75%] w-[50%] h-0.5"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  style={{
                    background: 'linear-gradient(90deg, rgba(198, 167, 94, 0.6) 0%, rgba(198, 167, 94, 0) 100%)',
                    transformOrigin: 'left',
                  }}
                >
                  <motion.div
                    className="w-2 h-2 bg-[#C6A75E] rounded-full absolute right-0 top-1/2 -translate-y-1/2"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              )}

              {/* Content */}
              <h3 className="text-[#F5F5F5] mb-3">{step.title}</h3>
              <p className="text-[#B8B8B8] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}