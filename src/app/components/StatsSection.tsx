import { motion } from 'motion/react';
import { Award, Users, TrendingUp, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Award-Winning Excellence',
    description:
      'Recognized internationally for creating extraordinary luxury events that set industry standards and exceed expectations.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Seasoned professionals with decades of combined experience in curating prestigious events for elite clientele.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description:
      '250+ flawlessly executed events with 98% client satisfaction rate and countless memorable celebrations.',
  },
  {
    icon: Shield,
    title: 'Uncompromising Quality',
    description:
      'Meticulous attention to detail and unwavering commitment to delivering perfection in every aspect of your event.',
  },
];

export function StatsSection() {
  return (
    <section className="py-32 bg-[#0B0B0D] relative overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Why Choose Us
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Excellence backed by experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ReasonCard reason={reason} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ReasonCardProps {
  reason: typeof reasons[0];
  index: number;
}

function ReasonCard({ reason, index }: ReasonCardProps) {
  const Icon = reason.icon;

  return (
    <motion.div
      className="why-choose-card group"
      whileHover="hover"
      initial="initial"
      animate="initial"
    >
      {/* Subtle glow on hover */}
      <motion.div
        className="why-choose-glow"
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 0.4 },
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      {/* Card content */}
      <motion.div
        className="why-choose-inner"
        variants={{
          initial: { y: 0 },
          hover: { y: -8 },
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Icon container */}
        <motion.div
          className="why-choose-icon-container"
          variants={{
            initial: { scale: 1, rotateY: 0 },
            hover: { scale: 1.1, rotateY: 360 },
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Icon className="why-choose-icon" strokeWidth={1.5} />
        </motion.div>

        {/* Title */}
        <h3 className="why-choose-title">{reason.title}</h3>

        {/* Description */}
        <p className="why-choose-description">{reason.description}</p>

        {/* Decorative bottom line */}
        <motion.div
          className="why-choose-line"
          variants={{
            initial: { scaleX: 0.3 },
            hover: { scaleX: 1 },
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </motion.div>
  );
}