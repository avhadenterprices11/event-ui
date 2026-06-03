import { motion } from 'motion/react';
import { Sparkles, Users, Calendar, PenTool, Music, Camera } from 'lucide-react';

const services = [
  {
    icon: Calendar,
    title: 'Event Planning',
    description: 'Comprehensive planning from concept to execution with meticulous attention to detail.',
  },
  {
    icon: PenTool,
    title: 'Design & Decor',
    description: 'Bespoke designs that transform venues into extraordinary, immersive experiences.',
  },
  {
    icon: Users,
    title: 'Guest Management',
    description: 'Seamless coordination ensuring every guest feels valued and attended to.',
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Curated performances and entertainment tailored to your event atmosphere.',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Premium documentation capturing every precious moment with artistic precision.',
  },
  {
    icon: Sparkles,
    title: 'Luxury Experiences',
    description: 'Unique touches and exclusive services that elevate your celebration.',
  },
];

export function ServicesSection() {
  return (
    <section className="py-32 bg-[#111114] relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C6A75E]/5 rounded-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[#F5F5F5] mb-4">Our Services</h2>
          <p className="text-[#B8B8B8] text-lg">
            Comprehensive solutions for flawless events
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                {/* 3D Floating Icon Container */}
                <motion.div
                  className="relative mx-auto w-24 h-24 mb-8"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2,
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                  }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C6A75E] to-[#E5C97A] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

                  {/* Icon container */}
                  <div
                    className="relative w-full h-full bg-gradient-to-br from-[#C6A75E] to-[#E5C97A] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-500"
                    style={{
                      transform: 'rotateX(10deg) rotateY(-10deg)',
                      boxShadow: '0 10px 30px rgba(198, 167, 94, 0.3)',
                    }}
                  >
                    <Icon className="w-10 h-10 text-[#0B0B0D]" strokeWidth={1.5} />

                    {/* Inner glow */}
                    <div className="absolute inset-2 border border-[#E5C97A]/30 rounded-xl" />
                  </div>

                  {/* Floating particles */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-[#E5C97A] rounded-full blur-sm opacity-60"
                    animate={{
                      y: [-5, 5, -5],
                      opacity: [0.6, 0.8, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-[#F5F5F5] mb-3 group-hover:text-[#C6A75E] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#B8B8B8] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
