import { motion } from 'motion/react';

const planningSteps = [
  {
    number: '01',
    title: 'Discovery',
  },
  {
    number: '02',
    title: 'Design',
  },
  {
    number: '03',
    title: 'Coordination',
  },
  {
    number: '04',
    title: 'Celebration',
  },
];

export function EventPlanningProcess() {
  return (
    <section className="relative bg-[#0B0B0D] py-32">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C6A75E]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl text-white mb-4">
            Our Planning Process
          </h2>
          <p className="text-[#B8B8B8] text-lg max-w-2xl mx-auto">
            A refined approach to creating exceptional events
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-4 gap-8">
          {planningSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative group text-center"
            >
              {/* Number and Title Only */}
              <div className="flex items-baseline justify-center gap-3">
                <span className="font-serif text-5xl text-[#C6A75E]">
                  {step.number}
                </span>
                <h3 className="text-white text-2xl font-semibold tracking-wide">
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}