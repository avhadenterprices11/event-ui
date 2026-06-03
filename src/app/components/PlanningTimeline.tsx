import { motion } from 'motion/react';

const timelineSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin with an in-depth conversation to understand your vision, preferences, and the unique story you want to tell.',
  },
  {
    number: '02',
    title: 'Concept Design',
    description: 'Our creative team develops a bespoke concept that brings your ideas to life with stunning visual presentations.',
  },
  {
    number: '03',
    title: 'Detailed Planning',
    description: 'Every element is carefully coordinated, from vendor selection to timeline creation, ensuring flawless execution.',
  },
  {
    number: '04',
    title: 'Execution Day',
    description: 'Relax and enjoy your celebration while our expert team manages every detail behind the scenes with precision.',
  },
];

export function PlanningTimeline() {
  return (
    <section className="relative bg-[#0B0B0D] py-32">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[800px] bg-[#C6A75E]/5 blur-[120px] rounded-full pointer-events-none" />

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
            Planning Process
          </h2>
          <p className="text-[#B8B8B8] text-lg">
            A refined journey from concept to celebration
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C6A75E]/30 to-transparent transform -translate-x-1/2" />

          {/* Timeline Steps */}
          <div className="space-y-24">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, margin: '-50px' }}
                className="relative"
              >
                {/* Number Circle - Centered */}
                <div className="flex justify-center mb-6">
                  <div className="relative inline-flex items-center justify-center">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-[#C6A75E]/20 blur-xl rounded-full scale-150" />
                    
                    {/* Number with outline */}
                    <div className="relative w-20 h-20 rounded-full border-2 border-[#C6A75E] bg-[#0B0B0D] flex items-center justify-center">
                      <span className="font-serif text-3xl text-[#C6A75E]">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content - Centered */}
                <div className="text-center">
                  <h3 className="text-white text-2xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#B8B8B8] leading-relaxed max-w-xl mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
