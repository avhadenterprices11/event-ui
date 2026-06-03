import { useParams, Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, MapPin, Users, Calendar, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const venuesData = [
  {
    id: 1,
    name: 'Palm Springs',
    location: 'Palm Springs, CA',
    capacity: '300 guests',
    image: '/src/assets/venues/palm-springs.png',
    description: 'A desert oasis of mid-century modern perfection. Surrounded by shifting sands and majestic mountains, this venue offers a sleek, sun-drenched sanctuary for avant-garde events.',
    features: ['Desert Vistas', 'Architectural Infinity Pool', 'Mid-century Design', 'Outdoor Firepits', 'Private Helipad']
  },
  {
    id: 2,
    name: 'The Haven by Sula',
    location: 'Sula Vineyards, Nashik',
    capacity: '250 guests',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aW5leWFyZCUyMGV2ZW50fGVufDF8fHx8MTc3MjQ1NjAwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Nestled deep within India\'s premier wine country, The Haven is a rustic-modern retreat. Experience starlit dinners overlooking emerald vineyards with some of the finest vintages on earth.',
    features: ['Vineyard Panorama', 'Bespoke Wine Cellar', 'Open-air Amphitheater', 'Organic Catering', 'Luxury Eco-suites']
  },
  {
    id: 3,
    name: 'The Source by Sula',
    location: 'Sula Vineyards, Nashik',
    capacity: '200 guests',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3aW5lcnklMjBkZWNvciUyMGV2ZW50fGVufDF8fHx8MTc3MjQ1NjAwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'An architectural tribute to the art of winemaking. The Source features industrial-chic interiors, ancient barrel rooms, and a sunset deck that defines the Nashik experience.',
    features: ['Industrial Chic', 'Ancient Barrel Rooms', 'Sunset Deck', 'Vineyard Expeditions', 'Curated Tastings']
  },
  {
    id: 4,
    name: 'Radisson Resort',
    location: 'Lonavala',
    capacity: '600 guests',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBiYWxscm9vbXxlbnwxfHx8fDE3NzI0NTYwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A majestic hideaway in the Sahyadri mountains. This sprawling resort combines grand-scale ballroom luxury with the tranquility of misty hill-station mornings.',
    features: ['Mountain Views', 'Grand Ballroom', 'Spa Sanctuary', 'Heated Outdoor Pool', 'Multi-cuisine Catering']
  },
  {
    id: 5,
    name: 'Radisson Blu',
    location: 'Cavelossim, Goa',
    capacity: '750 guests',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHBvb2wlMjBzaWRlfGVufDF8fHx8MTc3MjQ1NjAwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Coastal opulence at its peak. Located on the pristine sands of Cavelossim, this venue offers Portuguese-inspired architecture and an unmatched beachfront ceremony experience.',
    features: ['Private Beach Access', 'Portuguese Architecture', 'Olympic-size Pool', 'Exotic Garden Lawns', 'World-class Spa']
  },
  {
    id: 6,
    name: 'Treat Hotel',
    location: 'Silvassa',
    capacity: '400 guests',
    image: '/src/assets/venues/treat-hotel.png',
    description: 'A blend of modern comfort and natural serenity. Set amidst lush greenery, Treat Hotel provides a versatile setting for both grand weddings and focused corporate retreats.',
    features: ['Garden Courtyards', 'Versatile Event Spaces', 'Modern Fitness Center', 'Children\'s Play Zones', 'Extensive Buffet Service']
  },
  {
    id: 7,
    name: 'Radisson Karjat',
    location: 'Karjat',
    capacity: '500 guests',
    image: '/src/assets/venues/radisson-karjat.png',
    description: 'A tranquil riverbank retreat. Radisson Karjat offers a peaceful escape from the metropolis, with contemporary design that harmonizes perfectly with the surrounding natural beauty.',
    features: ['Riverbank Setting', 'Contemporary Design', 'Adventure Activities', 'State-of-the-art Gym', 'Scenic Event Lawns']
  },
  {
    id: 8,
    name: 'Hotel W (Goa)',
    location: 'Vagator, Goa',
    capacity: '450 guests',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV2ZW50JTIwdGVycmFjZXxlbnwxfHx8fDE3NzI0NTYwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The epicenter of high-octane luxury and bohemian spirit. Perched on the cliffs of Vagator, W Goa provides a breathtaking backdrop of the Arabian Sea for those who demand the extraordinary.',
    features: ['Cliff-side Altar', 'Iconic W Lounge', 'Rock Pool Deck', 'Sublime Spa Beats', 'Bespoke Nightlife Access']
  },
];

export default function IndividualVenue() {
  const { venueId } = useParams();
  const venue = venuesData.find(v => v.id === Number(venueId));
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!venue) {
    return (
      <div className="min-h-screen bg-[#0B0B0D] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl mb-4 font-serif">Venue Not Found</h1>
          <Link to="/venues" className="text-[#C6A75E] hover:text-white transition-colors">
             Return to Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0B0B0D] min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-[#0B0B0D]/50 mix-blend-overlay z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-[#0B0B0D]/80 z-10" />
          <img 
            src={venue.image} 
            alt={venue.name}
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>

        <div className="relative z-20 container mx-auto px-6 text-center mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/venues" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 uppercase tracking-[0.3em] text-xs font-semibold">
              <ArrowLeft className="w-4 h-4" />
              Back to Venues
            </Link>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl text-white font-light tracking-tight mb-8 drop-shadow-2xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {venue.name}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#C6A75E]" />
              <span className="text-lg font-light tracking-wide">{venue.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#C6A75E]" />
              <span className="text-lg font-light tracking-wide">{venue.capacity}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-32 relative z-20 bg-[#0B0B0D] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Description */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-12"
            >
              <div>
                <span className="text-[#C6A75E] text-xs font-bold uppercase tracking-[0.3em] block mb-6">The Atmosphere</span>
                <p className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed">
                  {venue.description}
                </p>
              </div>

              <div className="flex gap-6 pt-8 border-t border-white/10">
                <button className="flex-1 bg-[#C6A75E] text-black px-8 py-4 uppercase text-xs font-bold tracking-widest hover:bg-white transition-colors duration-500">
                  Request Pricing
                </button>
                <button className="flex-1 bg-transparent border border-white/20 text-white px-8 py-4 uppercase text-xs font-bold tracking-widest hover:border-white transition-colors duration-500">
                  Schedule Tour
                </button>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#111114] p-12 lg:p-16 rounded-[24px] border border-white/5"
            >
              <h3 className="text-2xl text-white font-light tracking-wide mb-12 flex items-center gap-4" style={{ fontFamily: 'var(--font-heading)' }}>
                <Sparkles className="w-5 h-5 text-[#C6A75E]" />
                Signature Features
              </h3>
              
              <ul className="space-y-8">
                {venue.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                    className="flex justify-between items-center text-white/70"
                  >
                    <span className="text-lg font-light tracking-wide">{feature}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]/50" />
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Embedded Quote Section Alternative */}
      <section className="py-40 relative bg-[#060608] border-t border-white/5 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C6A75E]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-6xl text-white font-light tracking-tighter mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
               Ready to claim this space?
            </h2>
            <p className="text-gray-400 text-xl font-light mb-12">
               Our concierges are available to discuss availability, aesthetic alignment, and tailored architectural planning for {venue.name}.
            </p>
            <Link 
              to="/quote"
              className="inline-flex items-center justify-center gap-4 bg-white text-black px-12 py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#C6A75E] hover:text-white transition-all duration-500"
            >
              <Calendar className="w-4 h-4" />
              Check Availability
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
