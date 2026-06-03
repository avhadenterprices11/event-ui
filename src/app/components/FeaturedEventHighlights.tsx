import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FeaturedEventHighlights() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="relative bg-[#0B0B0D] py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[14px] overflow-hidden"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative h-full"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1755795652039-c95221cc55fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaCUyMHdlZGRpbmclMjBtYW5kYXAlMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NzIyNjY5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Destination Luxury Event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Gold Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="text-[#C6A75E] text-sm tracking-[0.2em] uppercase font-light">
                Exotic Celebration Series
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-serif text-5xl text-white mb-6"
            >
              Destination Luxury
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-[#B8B8B8] text-lg leading-relaxed mb-8"
            >
              Experience the extraordinary at the world's most stunning venues. Our destination events blend cultural authenticity with refined luxury, creating moments that transcend traditional celebrations. From beachfront ceremonies to mountain retreats, every detail reflects uncompromising elegance.
            </motion.p>

            {/* Navigation Arrows */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-[#C6A75E]/40 flex items-center justify-center text-[#C6A75E] hover:bg-[#C6A75E]/10 hover:border-[#C6A75E] transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-[#C6A75E]/40 flex items-center justify-center text-[#C6A75E] hover:bg-[#C6A75E]/10 hover:border-[#C6A75E] transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
