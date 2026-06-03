import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

const featuredEvents = [
  {
    title: 'Royal Wedding Affair',
    location: 'Grand Palace, Monaco',
    image: 'https://images.unsplash.com/photo-1767986012154-db9a321c8832?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIxNzc2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Corporate Excellence Gala',
    location: 'Metropolitan Center, NYC',
    image: 'https://images.unsplash.com/photo-1768508950918-c87e2f544573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY29ycG9yYXRlJTIwZXZlbnQlMjB2ZW51ZXxlbnwxfHx8fDE3NzIxMTk1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Midnight Celebration',
    location: 'Skyline Terrace, Dubai',
    image: 'https://images.unsplash.com/photo-1761164920874-b3bc052f6473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwYXJ0eSUyMGNlbGVicmF0aW9uJTIwbmlnaHR8ZW58MXx8fHwxNzcyMTc3Njc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function FeaturedEventsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32 bg-[#0B0B0D] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-[#F5F5F5] mb-4">Featured Events</h2>
          <p className="text-[#B8B8B8] text-lg">
            A glimpse into our portfolio of excellence
          </p>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {featuredEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative min-w-[500px] h-[600px] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <ImageWithFallback
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent" />

              {/* Gold overlay glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#C6A75E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating 3D decor element */}
              <motion.div
                className="absolute top-8 right-8 w-20 h-20"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.3,
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#C6A75E] to-[#E5C97A] opacity-30 blur-xl" />
                <div className="absolute inset-2 rounded-full border-2 border-[#C6A75E]/40" />
              </motion.div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-[#C6A75E] mb-2 group-hover:text-[#E5C97A] transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-[#B8B8B8]">{event.location}</p>
                  <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-[#C6A75E] to-transparent group-hover:w-32 transition-all duration-500" />
                </motion.div>
              </div>

              {/* Border glow effect */}
              <div className="absolute inset-0 border-2 border-[#C6A75E]/0 group-hover:border-[#C6A75E]/30 rounded-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
