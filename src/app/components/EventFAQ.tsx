import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface EventFAQProps {
  faqs: FAQ[];
}

export function EventFAQ({ faqs }: EventFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#111114] py-32">
      <div className="max-w-[1440px] mx-auto px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#B8B8B8] text-lg">
            Everything you need to know about our event services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: '-50px' }}
              className="border border-white/10 rounded-[14px] overflow-hidden bg-[#0B0B0D]/50 backdrop-blur-sm hover:border-[#C6A75E]/30 transition-colors duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="text-white text-lg font-semibold pr-8 group-hover:text-[#C6A75E] transition-colors duration-300">
                  {faq.question}
                </span>
                
                {/* Icon */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#C6A75E]/30 flex items-center justify-center text-[#C6A75E] group-hover:bg-[#C6A75E]/10 group-hover:border-[#C6A75E] transition-all duration-300">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" strokeWidth={2} />
                  ) : (
                    <Plus className="w-4 h-4" strokeWidth={2} />
                  )}
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="h-px bg-gradient-to-r from-transparent via-[#C6A75E]/20 to-transparent mb-4" />
                      <p className="text-[#B8B8B8] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
