import { motion } from 'motion/react';

export function BlogAuthorBio() {
  return (
    <section className="py-24 bg-[#111114]">
      <div className="max-w-[900px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-8"
        >
          {/* Author Image */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full border-2 border-[#C6A75E] p-1">
              <img
                src="https://images.unsplash.com/photo-1736939666660-d4c776e0532c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBldmVudCUyMHBsYW5uZXIlMjB3b21hbiUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyMjc0MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sarah Mitchell"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Author Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl tracking-tight mb-2">Sarah Mitchell</h3>
              <p className="text-[#C6A75E] text-sm tracking-wide">Senior Event Planner & Creative Director</p>
            </div>
            <p className="text-[#D5D5D5] leading-relaxed">
              With over 15 years of experience in luxury event planning, Sarah has orchestrated some of the most prestigious destination weddings and corporate events worldwide. Her passion for creating unforgettable experiences and attention to perfection has earned her recognition as one of the industry's leading visionaries.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
