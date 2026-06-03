import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    title: 'Venue Design & Décor',
    description: 'Transform any space into a breathtaking masterpiece with our bespoke design solutions, from elegant florals to stunning installations.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwdmVudWUlMjBkZWNvcnxlbnwxfHx8fDE3NzIxMTQxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Catering & Culinary Excellence',
    description: 'Indulge in world-class cuisine crafted by renowned chefs, featuring personalized menus and impeccable presentation.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXRlcmluZyUyMGdhbGF8ZW58MXx8fHwxNzcyMTE0MTcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Event Planning & Coordination',
    description: 'Seamless execution from concept to completion, ensuring every detail is perfectly orchestrated for an unforgettable experience.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBsYW5uaW5nJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjExNDE3MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Entertainment & Production',
    description: 'Elevate your event with cutting-edge technology, live performances, and immersive entertainment experiences.',
    image: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwZW50ZXJ0YWlubWVudCUyMGV2ZW50fGVufDF8fHx8MTc3MjExNDE3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function OurServices() {
  return (
    <section className="py-32 bg-[#111114] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A75E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C6A75E]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[#F5F5F5] mb-4">Our Services</h2>
          <p className="text-[#B8B8B8] text-lg max-w-2xl mx-auto">
            Discover our comprehensive suite of luxury event services, each meticulously crafted to transform your vision into an extraordinary reality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <div className="relative h-[400px] overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-px bg-[#C6A75E]" />
                  <span className="text-[#C6A75E] text-sm uppercase tracking-widest">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <h3 className="text-3xl text-white mb-3 font-serif">
                  {service.title}
                </h3>
                
                <p className="text-[#B8B8B8] leading-relaxed">
                  {service.description}
                </p>

                {/* Hover line indicator */}
                <div className="mt-6 w-0 h-0.5 bg-[#C6A75E] group-hover:w-20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}