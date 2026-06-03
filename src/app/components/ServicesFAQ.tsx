import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'How far in advance should I book your services?',
    answer: 'We recommend booking 6-12 months in advance for weddings and major events to ensure availability and ample time for planning. However, we can accommodate shorter timelines based on our availability.',
  },
  {
    id: 2,
    question: 'Do you handle destination events?',
    answer: 'Absolutely. We specialize in destination events worldwide, managing all logistics including venue sourcing, vendor coordination, and guest accommodations to create seamless experiences.',
  },
  {
    id: 3,
    question: 'What is included in your event planning packages?',
    answer: 'Our packages are customized to your needs and can include full-service planning, design and decor, vendor management, day-of coordination, and technical production. We tailor each package to your specific requirements.',
  },
  {
    id: 4,
    question: 'Can I customize my event package?',
    answer: 'Yes, we pride ourselves on creating bespoke experiences. Every package is tailored to your vision, budget, and requirements to ensure your event is uniquely yours.',
  },
  {
    id: 5,
    question: 'What types of events do you specialize in?',
    answer: 'We specialize in luxury weddings, corporate galas, private parties, destination celebrations, and custom experiences. Our team has expertise across all event types with a focus on premium, high-end occasions.',
  },
];

export function ServicesFAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      ref={ref}
      className="relative py-[140px] bg-[#111114]"
    >
      <div className="max-w-[1440px] mx-auto px-24">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="text-[#C6A75E] text-sm uppercase tracking-[0.3em] mb-4">
            Common Questions
          </div>
          <h2
            className="text-[48px] leading-[1.2] text-[#F5F5F5]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Two Column Layout: Image + FAQ */}
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left: Event Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-[700px] rounded-2xl overflow-hidden border border-[#C6A75E]/20 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1759519238029-689e99c6d19e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZXZlbnQlMjBlbGVnYW50JTIwYmFsbHJvb218ZW58MXx8fHwxNzczNjY4OTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Luxury Event Setup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/80 via-[#0B0B0D]/20 to-transparent" />
          </motion.div>

          {/* Right: FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
              >
                <div
                  className="group relative overflow-hidden rounded-lg border border-[#C6A75E]/10 backdrop-blur-sm transition-all duration-400"
                  style={{
                    background: openId === faq.id
                      ? 'linear-gradient(135deg, rgba(198, 167, 94, 0.08) 0%, rgba(11, 11, 13, 0.6) 100%)'
                      : 'linear-gradient(135deg, rgba(198, 167, 94, 0.03) 0%, rgba(11, 11, 13, 0.4) 100%)',
                  }}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left transition-all duration-400"
                  >
                    <span className="text-[#F5F5F5] text-lg pr-8">
                      {faq.question}
                    </span>
                    
                    <motion.div
                      className="flex-shrink-0"
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                      {openId === faq.id ? (
                        <Minus className="w-5 h-5 text-[#C6A75E]" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#C6A75E]" />
                      )}
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 pt-2">
                          <div className="w-12 h-[1px] bg-[#C6A75E]/30 mb-4" />
                          <p className="text-[#B8B8B8] text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(198, 167, 94, 0.05) 0%, transparent 70%)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}