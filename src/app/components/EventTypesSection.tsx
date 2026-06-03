import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Link } from 'react-router';

const eventTypes = [
  {
    title: 'Wedding',
    slug: 'wedding',
    image: 'https://images.unsplash.com/photo-1767986012154-db9a321c8832?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZWxlZ2FudCUyMHNldHVwfGVufDF8fHx8MTc3MjE3NzYyNnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Corporate',
    slug: 'corporate',
    image: 'https://images.unsplash.com/photo-1768508950408-d59387d4dcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMGdhbGElMjBkaW5uZXJ8ZW58MXx8fHwxNzcyMTc3NjI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Birthday & Social',
    slug: 'birthday-social',
    image: 'https://images.unsplash.com/photo-1770460349343-04eecee0f45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwZWxlZ2FudCUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3MjE3NzYyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Destination',
    slug: 'destination',
    image: 'https://images.unsplash.com/photo-1771570992951-6db6cdd8e76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXN0aW5hdGlvbiUyMGJlYWNoJTIwd2VkZGluZyUyMHNldHVwfGVufDF8fHx8MTc3MjE3NzYyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

function EventCard({ event, index }: { event: typeof eventTypes[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/events/${event.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative overflow-hidden rounded-xl cursor-pointer"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        <motion.div
          animate={{
            y: isHovered ? -12 : 0,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative h-[400px] bg-gradient-to-br from-[#1a1a1d] to-[#111114] rounded-xl overflow-hidden"
        >
          {/* Border wrapper with glow */}
          <motion.div
            className="absolute inset-0 rounded-xl border"
            animate={{
              borderColor: isHovered ? 'rgba(198, 167, 94, 0.8)' : 'rgba(198, 167, 94, 0.2)',
              boxShadow: isHovered 
                ? '0 8px 40px rgba(198, 167, 94, 0.3), 0 0 80px rgba(198, 167, 94, 0.15)'
                : '0 0 0 rgba(198, 167, 94, 0)',
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Image */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="w-full h-full"
              animate={{
                scale: isHovered ? 1.15 : 1,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <motion.div
                animate={{
                  opacity: isHovered ? 0.9 : 0.6,
                }}
                transition={{ duration: 0.5 }}
              >
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t"
            animate={{
              background: isHovered
                ? 'linear-gradient(to top, rgba(11, 11, 13, 0.95), rgba(11, 11, 13, 0.4), transparent)'
                : 'linear-gradient(to top, rgba(11, 11, 13, 1), rgba(11, 11, 13, 0.5), transparent)',
            }}
            transition={{ duration: 0.5 }}
          />

          {/* 3D decorative element */}
          <motion.div
            className="absolute top-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-[#C6A75E] to-[#E5C97A] blur-xl"
            animate={{
              scale: isHovered ? 1.5 : [1, 1.2, 1],
              opacity: isHovered ? 0.5 : [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: isHovered ? 0.4 : 3,
              repeat: isHovered ? 0 : Infinity,
              ease: 'easeInOut',
              delay: index * 0.2,
            }}
          />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <motion.h3
              className="text-[#F5F5F5] mb-2"
              animate={{
                color: isHovered ? '#C6A75E' : '#F5F5F5',
              }}
              transition={{ duration: 0.3 }}
            >
              {event.title}
            </motion.h3>
            <motion.div
              className="h-0.5 bg-gradient-to-r from-[#C6A75E] to-transparent"
              animate={{
                width: isHovered ? '6rem' : '3rem',
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>

          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#C6A75E]/15 to-transparent"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Top shine effect on hover */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent"
            animate={{
              x: isHovered ? '100%' : '-100%',
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </Link>
  );
}

export function EventTypesSection() {
  return (
    <section className="py-32 bg-[#0B0B0D] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#F5F5F5] mb-4">Event Types</h2>
          <p className="text-[#B8B8B8] text-lg">
            Curated celebrations tailored to your vision
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-8">
          {eventTypes.map((event, index) => (
            <EventCard key={event.title} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}