import { motion, useInView } from 'motion/react';
import { MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const venues = [
  {
    id: 1,
    name: 'Palm Springs',
    location: 'Palm Springs, CA',
    capacity: '300 guests',
    image: '/src/assets/venues/palm-springs.png',
  },
  {
    id: 2,
    name: 'The Haven by Sula',
    location: 'Sula Vineyards, Nashik',
    capacity: '250 guests',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aW5leWFyZCUyMGV2ZW50fGVufDF8fHx8MTc3MjQ1NjAwNXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'The Source by Sula',
    location: 'Sula Vineyards, Nashik',
    capacity: '200 guests',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3aW5lcnklMjBkZWNvciUyMGV2ZW50fGVufDF8fHx8MTc3MjQ1NjAwNXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Radisson Resort',
    location: 'Lonavala',
    capacity: '600 guests',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBiYWxscm9vbXxlbnwxfHx8fDE3NzI0NTYwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    name: 'Radisson Blu',
    location: 'Cavelossim, Goa',
    capacity: '750 guests',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHBvb2wlMjBzaWRlfGVufDF8fHx8MTc3MjQ1NjAwNnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    name: 'Treat Hotel',
    location: 'Silvassa',
    capacity: '400 guests',
    image: '/src/assets/venues/treat-hotel.png',
  },
  {
    id: 7,
    name: 'Radisson Karjat',
    location: 'Karjat',
    capacity: '500 guests',
    image: '/src/assets/venues/radisson-karjat.png',
  },
  {
    id: 8,
    name: 'Hotel W (Goa)',
    location: 'Vagator, Goa',
    capacity: '450 guests',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV2ZW50JTIwdGVycmFjZXxlbnwxfHx8fDE3NzI0NTYwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function VenueCardsGrid() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-[#0B0B0D]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 border-t border-white/5 pt-20">
        
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[#C6A75E] text-xs font-semibold uppercase tracking-[0.3em] block mb-4">
               Our Collection
            </span>
            <h2 className="text-4xl md:text-5xl text-[#F5F5F5] font-light tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
               Exceptional Venues
            </h2>
          </div>
          <span className="hidden md:block text-[#B8B8B8] font-light text-sm tracking-widest uppercase pb-2">
             {venues.length} Locations
          </span>
        </div>

        {/* 2-Column Staggered Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-24">
          {venues.map((venue, index) => {
            const isStaggered = index % 2 !== 0;

            return (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex flex-col ${isStaggered ? 'md:mt-32' : ''}`}
              >
                <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-[#111114]">
                  {/* Subtle Background Glow Line */}
                  <div className="absolute top-0 right-10 w-[1px] h-32 bg-gradient-to-b from-[#C6A75E]/40 to-transparent z-10" />

                  {/* Deep Image Layer */}
                  <motion.div 
                     className="absolute inset-0 w-full h-full"
                     whileHover={{ scale: 1.05 }}
                     transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ImageWithFallback
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Cinematic Overlays */}
                  <div className="absolute inset-0 bg-[#0B0B0D]/20 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/90 via-[#0B0B0D]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#0B0B0D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Nested Card Content */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end pointer-events-none">
                     <div className="transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-4 group-hover:translate-y-0">
                        {/* Title Segment */}
                        <div className="flex justify-between items-end mb-4">
                           <h3 
                              className="text-3xl lg:text-4xl text-white font-light leading-[1.1] tracking-tight"
                              style={{ fontFamily: 'var(--font-heading)' }}
                           >
                              {venue.name}
                           </h3>
                           <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 mb-1 transition-all duration-500 ease-out group-hover:bg-[#C6A75E] group-hover:border-[#C6A75E]">
                              <ArrowRight className="w-4 h-4 text-white group-hover:text-[#0B0B0D] group-hover:-rotate-45 transition-transform duration-500" />
                           </div>
                        </div>

                        {/* Location Details Block */}
                        <div className="border-t border-white/20 pt-4 flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                           <div className="flex items-center gap-2">
                              <MapPin className="w-3.5 h-3.5 text-[#C6A75E]" />
                              <span className="text-white text-sm font-light tracking-wide">{venue.location}</span>
                           </div>
                           <div className="flex items-center gap-2">
                              <Users className="w-3.5 h-3.5 text-[#C6A75E]" />
                              <span className="text-white text-sm font-light tracking-wide">{venue.capacity}</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Invisible Link Wrapper covering the absolute layers */}
                  <Link to={`/venues/${venue.id}`} className="absolute inset-0 z-20" aria-label={`View details for ${venue.name}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
