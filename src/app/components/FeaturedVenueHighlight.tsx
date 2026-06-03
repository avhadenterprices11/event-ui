import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Users, Star, Check } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router';

export function FeaturedVenueHighlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section ref={containerRef} className="py-32 bg-[#0B0B0D] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-24">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <motion.img
              style={{ y: imageY }}
              src="https://images.unsplash.com/photo-1761110787206-2cc164e4913c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjBzcGFjZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MjI3Mjg3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="The Royal Palace Ballroom"
              className="w-full h-[120%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/20 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#C6A75E] fill-[#C6A75E]" />
                <span className="text-[#C6A75E] text-sm tracking-[0.2em] uppercase">Featured Venue</span>
              </div>
              
              <h2 className="text-5xl tracking-tight leading-[1.1]">
                The Royal Palace Ballroom
              </h2>

              <div className="h-[1px] w-20 bg-gradient-to-r from-[#C6A75E] to-transparent" />
              
              <p className="text-gray-400 text-lg leading-relaxed">
                An architectural masterpiece combining classic European elegance with modern luxury amenities. This iconic venue has hosted royalty, celebrities, and the most prestigious events in the city.
              </p>
            </div>

            {/* Venue Details */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C6A75E] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Capacity</p>
                    <p className="text-gray-400 text-sm">Up to 500 guests</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C6A75E] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400 text-sm">Historic Quarter</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C6A75E] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Amenities</p>
                    <p className="text-gray-400 text-sm">Full catering, AV system</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C6A75E] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Ideal For</p>
                    <p className="text-gray-400 text-sm">Weddings, Galas, Corporate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8"
            >
              <Link
                to="/quote"
                className="inline-block px-10 py-4 bg-gradient-to-r from-[#C6A75E] to-[#D4B76E] text-[#0B0B0D] rounded-lg font-medium hover:shadow-lg hover:shadow-[#C6A75E]/20 transition-shadow text-center"
              >
                Book a Venue Visit
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
