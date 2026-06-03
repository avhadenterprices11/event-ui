import { motion } from 'motion/react';
import { Calendar, Clock, User } from 'lucide-react';

export function BlogArticleHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/60 via-transparent to-[#0B0B0D] z-10" />
        <img
          src="https://images.unsplash.com/photo-1538677859585-f8d2193ffa2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkZXN0aW5hdGlvbiUyMHdlZGRpbmclMjB2ZW51ZSUyMHN1bnNldHxlbnwxfHx8fDE3NzIyNzQxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Blog Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[900px] mx-auto px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-[#C6A75E] text-xs tracking-[0.25em] uppercase font-medium">
            WEDDING TRENDS
          </p>

          <h1 className="text-[56px] leading-[1.1] tracking-tight">
            Designing the Perfect Luxury Destination Wedding
          </h1>

          {/* Metadata */}
          <div className="flex items-center justify-center gap-8 text-[#B8B8B8] text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Sarah Mitchell</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>February 15, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
