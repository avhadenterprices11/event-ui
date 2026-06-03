import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

const eventCategories = [
  {
    title: 'Wedding Events',
    description: 'Timeless ceremonies crafted with unparalleled elegance, sophisticated design, and precise orchestration ensuring every detail reflects your unique love story.',
    image: 'https://images.unsplash.com/photo-1767986012138-d02276728368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjBlbGVnYW50fGVufDF8fHx8MTc3MjE3ODc5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'wedding',
    number: '01'
  },
  {
    title: 'Corporate Galas',
    description: 'Professional gatherings, high-stakes conferences, and award ceremonies designed to inspire, impress stakeholders, and impeccably elevate your brand.',
    image: 'https://images.unsplash.com/photo-1768508950408-d59387d4dcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMGdhbGElMjBkaW5uZXJ8ZW58MXx8fHwxNzcyMTc3NjI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'corporate',
    number: '02'
  },
  {
    title: 'Milestone & Social',
    description: 'Intimate celebrations and exclusive milestone gatherings enhanced with refined luxury touches, bespoke culinary experiences, and atmospheric styling.',
    image: 'https://images.unsplash.com/photo-1770460349343-04eecee0f45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwcGFydHklMjBlbGVnYW50fGVufDF8fHx8MTc3MjI2Njk3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'birthday-social',
    number: '03'
  },
  {
    title: 'Destination Affairs',
    description: 'Immersive exotic experiences hosted in breathtaking locations worldwide, seamlessly managed from logistical arrangements to grand executions.',
    image: 'https://images.unsplash.com/photo-1766910701111-9eee02328e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXN0aW5hdGlvbiUyMGJlYWNoJTIwd2VkZGluZyUyMGx1eHVyeXxlbnwxfHx8fDE3NzIyNjY5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'destination',
    number: '04'
  },
];

export function EventCategoriesGrid() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative bg-[#0B0B0D] py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Asymmetrical 2-Column Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {eventCategories.map((event, index) => {
            // Apply a top margin to odd index cards on desktop to create a staggered masonry effect
            const isStaggered = index % 2 !== 0;

            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`flex flex-col group ${isStaggered ? 'md:mt-32 lg:mt-48' : ''}`}
              >
                {/* Image Card Container */}
                <Link
                  to={`/events/${event.slug}`}
                  className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl cursor-pointer block bg-[#111114]"
                >
                  {/* Floating Number Overlay */}
                  <div 
                    className="absolute top-6 right-8 text-[120px] font-serif italic leading-none z-10 font-bold transition-all duration-700 ease-out mix-blend-overlay text-white opacity-20 group-hover:opacity-10"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {event.number}
                  </div>

                  {/* Main Image with magnetic zoom */}
                  <div className="absolute inset-0 w-full h-full">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                  </div>

                  {/* Elegant Vignette Overlays */}
                  <div className="absolute inset-0 bg-[#0B0B0D]/20 transition-colors duration-700 group-hover:bg-[#0B0B0D]/40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,11,13,0.95)] via-[#0B0B0D]/40 to-transparent" />
                  <div className="absolute inset-4 border border-white/10 rounded-xl pointer-events-none transition-colors duration-700 group-hover:border-[#C6A75E]/30" />

                  {/* Text Content embedded within card */}
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    <div className="w-10 h-[1px] bg-[#C6A75E] mb-6 transform origin-left transition-all duration-500 ease-out group-hover:w-16 group-hover:bg-[#E5C97A]" />
                    
                    <h3
                      className="text-3xl lg:text-4xl leading-[1.1] text-white mb-4 transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-6 group-hover:translate-y-0"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {event.title}
                    </h3>
                    
                    {/* Excerpt revealing on hover */}
                    <div className="overflow-hidden">
                      <p className="text-[#B8B8B8] text-sm lg:text-base leading-relaxed transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        {event.description}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-3 text-[#C6A75E] text-xs font-semibold uppercase tracking-widest transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-100">
                      <span className="relative">
                        Explore Collection
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C6A75E] transition-all duration-500 group-hover:w-full" />
                      </span>
                      <ArrowRight className="w-4 h-4 transform transition-transform duration-500 group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}