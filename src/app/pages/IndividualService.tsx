import { useParams, Navigate } from 'react-router';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { IndividualEventHero } from '../components/IndividualEventHero';
import { EventOverview } from '../components/EventOverview';
import { EventGallery } from '../components/EventGallery';
import { PlanningProcess } from '../components/PlanningProcess';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { GetQuoteSection } from '../components/GetQuoteSection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const serviceData = {
  'planning-strategy': {
    title: 'Planning & Strategy',
    description: 'The foundation of every masterpiece. We combine visionary thinking with meticulous logistical planning.',
    heroImage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1600',
    overviewImage: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=1200',
    points: [
      'Concept & Theme Ideation',
      'Event Planning & Turnkey Management',
      'Budget Planning & Cost Optimization',
      'Event Timeline & Flow Planning',
      'Guest List Planning & Segmentation',
      'Wedding / Event Branding (Hashtag, Identity)'
    ],
    paragraphs: [
      'At the heart of every successful event lies a robust strategy. Our planning phase is where dreams coalesce into reality, guided by precision and a deep understanding of your personal or corporate narrative.',
      'We don\'t just plan schedules; we engineer experiences. From the initial spark of an idea to the final check on the event day, our strategy team ensures every detail is optimized for impact and elegance.',
    ]
  },
  'venue-destination': {
    title: 'Venue & Destination',
    description: 'Discovering the perfect stage for your story, from local icons to global secrets.',
    heroImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1600',
    overviewImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    points: [
      'Destination & Venue Selection',
      'Venue Booking & Negotiation',
      'Venue Layout Planning & Space Design',
      'Seating & Guest Flow Planning'
    ],
    paragraphs: [
      'The venue sets the soul of the event. Whether you envision a palace in Rajasthan, a loft in New York, or a private island, we leverage our global network to secure exclusive locations that resonate with your vision.',
      'Our team manages the complexities of site inspections, logistics, and legalities, allowing you to focus on the joy of the destination.',
    ]
  },
  'design-decor': {
    title: 'Design & Decor',
    description: 'Transforming spaces into immersive environments through artful design and sensory detailing.',
    heroImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600',
    overviewImage: 'https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=1200',
    points: [
      'Decor Concept & Design',
      'Production Design for Decor',
      'Floral Design & Installations',
      'Stage & Set Design',
      'Entrance & Experience Design',
      'Lighting Design (Ambient + Stage + Mood)',
      'Photo Booths & Experience Zones'
    ],
    paragraphs: [
      'Design is the visual language of your celebration. We specialize in creating high-end aesthetic transformations that captivate from the moment of entry.',
      'Our design philosophy blends contemporary trends with timeless sophistication, ensuring that every floral arrangement and light fixture contributes to a cohesive and breathtaking atmosphere.',
    ]
  },
  'guest-experience': {
    title: 'Guest Experience & Hospitality',
    description: 'Consummate hospitality that anticipates every need and celebrates every guest.',
    heroImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1600',
    overviewImage: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=1200',
    points: [
      'Hospitality Management',
      'Guest Welcome & Check-in',
      'Room Allocation & Hotel Coordination',
      'Guest Travel & Transportation',
      'On-ground Guest Assistance',
      'RSVP Management',
      'Guest Communication (WhatsApp / Email updates)'
    ],
    paragraphs: [
      'Luxury is in the details of how your guests are treated. From seamless airport transfers to bespoke welcome hampers, we ensure a journey of comfort and care.',
      'Our dedicated hospitality team acts as a bridge between your guests and the event, providing round-the-clock assistance and maintaining the highest standards of service.',
    ]
  },
  'entertainment-experience': {
    title: 'Entertainment & Experience',
    description: 'Curating world-class talent and interactive moments that ignite the imagination.',
    heroImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1600',
    overviewImage: 'https://images.unsplash.com/photo-1514525253361-bee8a187499b?auto=format&fit=crop&q=80&w=1200',
    points: [
      'Artist & Celebrity Management',
      'Entertainment Management',
      'Choreography & Dance Management',
      'Anchors / Emcees / Hosts',
      'Live Performances & Shows',
      'Guest Engagement Activities'
    ],
    paragraphs: [
      'Entertainment is the heartbeat of the celebration. We source elite performers, from world-renowned musical acts to avant-garde interactive artists, ensuring a high-energy and memorable experience.',
      'Our team handles everything from technical riders to backstage hospitality, ensuring that the talent can shine and your guests are perpetually entertained.',
    ]
  },
  'logistics-operations': {
    title: 'Logistics & Operations',
    description: 'The invisible engine of excellence, ensuring every component moves with mechanical precision.',
    heroImage: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=1600',
    overviewImage: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1200',
    points: [
      'Logistics Management',
      'Vendor Coordination & Management',
      'Transportation Management',
      'Inventory & Material Handling',
      'On-ground Event Execution Team',
      'Emergency & Contingency Planning'
    ],
    paragraphs: [
      'Operational excellence is the hallmark of a luxury event. We manage the massive complexity of vendor networks, technical builds, and scheduling with unparalleled rigor.',
      'Our contingency planning ensures that no matter what the situation, the show goes on flawlessly, maintaining the illusion of effortless perfection for you and your guests.',
    ]
  },
  'food-beverage': {
    title: 'Food & Beverage',
    description: 'A culinary odyssey curated to delight the palate and celebrate the senses.',
    heroImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1600',
    overviewImage: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1200',
    points: [
      'Catering Selection',
      'Menu Curation & Planning',
      'Food Experience Design (Live Counters, Themes)',
      'Beverage & Bar Management'
    ],
    paragraphs: [
      'We believe dining should be an experience in itself. From bespoke menu design featuring global cuisines to theatrical live counters, we partner with the finest culinary minds.',
      'Our beverage programs are equally sophisticated, featuring expert mixology and curated wine lists that complement the gastronomic journey perfectly.',
    ]
  },
  'media-production': {
    title: 'Media & Content Production',
    description: 'Capturing the ephemeral in cinematic detail to preserve your legacy forever.',
    heroImage: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1600',
    overviewImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200',
    points: [
      'Photography & Cinematography',
      'Pre-wedding Shoots',
      'Drone Coverage',
      'Live Streaming',
      'Same-Day Edits / Wedding Films'
    ],
    paragraphs: [
      'Memories fade, but cinematic content is eternal. We work with award-winning photographers and filmmakers who specialize in capturing the raw emotion and grand scale of high-end events.',
      'From 4K drone videography to same-day edit highlights, we provide a comprehensive suite of media services that turn your event into a timeless narrative.',
    ]
  },
  'invitations-communication': {
    title: 'Invitations & Communication',
    description: 'The first chapter of your story, told through bespoke stationery and digital elegance.',
    heroImage: 'https://images.unsplash.com/photo-1510076857177-747306211832?auto=format&fit=crop&q=80&w=1600',
    overviewImage: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200',
    points: [
      'Wedding Invitation Design (Digital & Physical)',
      'Wedding Invitation Landing Pages',
      'Save-the-Date Campaigns',
      'Guest Communication & Updates'
    ],
    paragraphs: [
      'The invitation is the first glimpse your guests get into the world you are creating. We design bespoke invitations that are as much a gift as they are an announcement.',
      'Our communication strategies also include custom event landing pages and real-time digital updates, ensuring your guests are always informed and excited.',
    ]
  },
  'ritual-ceremony': {
    title: 'Ritual & Ceremony',
    description: 'Honoring tradition with modern grace, ensuring every ritual is performed with dignity and beauty.',
    heroImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1600',
    overviewImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200',
    points: [
      'Ritual Management',
      'Ceremony Planning & Flow',
      'Priest / Pandit Coordination',
      'Multi-cultural Ceremony Customization'
    ],
    paragraphs: [
      'Ceremony is the heart of the celebration. We respect the sanctity of tradition while providing the logistical support needed to make these moments seamless.',
      'Whether it\'s a multicultural union or a strictly traditional ritual, our coordinators ensure that every step is executed with precision and respect.',
    ]
  },
  'gifting-personalization': {
    title: 'Gifting & Personalization',
    description: 'Thoughtful gestures that resonate, from bespoke hampers to personalized tokens of gratitude.',
    heroImage: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1600',
    overviewImage: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=1200',
    points: [
      'Gifting & Hamper Creation & Management',
      'Welcome Kits & Guest Hampers',
      'Personalized Wedding Collaterals',
      'Custom Signage & Branding'
    ],
    paragraphs: [
      'Gifting is an art form. We curate exclusive collections of gifts that reflect your personality and show your guests true appreciation for their presence.',
      'From custom branding on every collateral to hand-picked local treasures, our personalization team ensures that no detail is too small to be meaningful.',
    ]
  },
  'corporate-solutions': {
    title: 'Corporate Event Solutions',
    description: 'Transforming corporate objectives into spectacular live experiences that elevate brands and foster connections.',
    heroImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1600',
    overviewImage: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200',
    points: [
      'Corporate Event Planning & Management',
      'Conferences & Seminars',
      'Product Launches',
      'Team-Building Retreats',
      'Exhibitions & Trade Shows',
      'Brand Activation Events',
      'Award Ceremonies & Recognition Events',
      'Workshops & Training Sessions',
      'Corporate Celebrations & Milestones',
      'Hybrid & Virtual Events'
    ],
    paragraphs: [
      'In the corporate world, the event is the brand. We deliver high-stakes solutions that combine serious operational capability with world-class production values.',
      'From intimate executive retreats to massive public product launches, we ensure your message is delivered with impact, clarity, and sophistication.',
    ]
  },
  'legal-permissions': {
    title: 'Legal & Permissions',
    description: 'Navigating the complex landscape of compliance and authority with ease and transparency.',
    heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600',
    overviewImage: 'https://images.unsplash.com/photo-1450175002320-217440b67484?auto=format&fit=crop&q=80&w=1200',
    points: [
      'Venue Permissions',
      'Sound & Music Licenses',
      'Government / Local Authority Approvals'
    ],
    paragraphs: [
      'We take the weight of regulatory compliance off your shoulders. Our legal team handles all necessary permits, noise licenses, and health and safety requirements.',
      'Our deep understanding of local laws across various destinations ensures a smooth and legally secure setup for your celebration.',
    ]
  },
  'post-event': {
    title: 'Post-Event Services',
    description: 'Closing the chapter with grace, ensuring every settlement is reached and every memory is preserved.',
    heroImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600',
    overviewImage: 'https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=1200',
    points: [
      'Event Wrap-up & Vendor Settlement',
      'Photo & Video Delivery Coordination',
      'Feedback Collection',
      'Memory Archiving (Albums, Digital Storage)'
    ],
    paragraphs: [
      'The event may end, but our commitment doesn\'t. We manage the delicate process of post-event teardown, final vendor payments, and administrative wrap-ups.',
      'We also oversee the post-production phase of your media, ensuring that the final albums and films are delivered in their most exquisite form for your long-term archiving.',
    ]
  }
};

function StickyCard({ point, index, total }: { point: string; index: number; total: number }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const { scrollYProgress: stackProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });
  
  // High-Performance 3D Transforms (Fully Opaque)
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const rotateX = useTransform(stackProgress, [0, 1], [0, -10]);
  const stackScale = useTransform(stackProgress, [0, 1], [1, 0.94]);
  const stackY = useTransform(stackProgress, [0, 1], [0, -40]);
  const brightness = useTransform(stackProgress, [0, 1], [1, 0.6]);

  return (
    <div 
      ref={container} 
      className="h-[100vh] sticky top-0 flex items-center justify-center w-full"
      style={{ perspective: '2500px' }}
    >
      <motion.div
        style={{ 
          scale: index === total - 1 ? scale : stackScale, 
          rotateX: index === total - 1 ? 0 : rotateX,
          y: index === total - 1 ? 0 : stackY,
          filter: `brightness(${index === total - 1 ? 1 : brightness})`,
          top: `${index * 20}px`,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-[85vh] md:h-screen bg-[#111114] border-t border-white/5 flex flex-col lg:flex-row shadow-[0_-50px_100px_rgba(0,0,0,0.8)]"
      >
        {/* Full-Height Visual Anchor */}
        <div className="flex-1 relative overflow-hidden group">
          <ImageWithFallback
            src={`https://images.unsplash.com/${[
              'photo-1505236858219-8359eb29e329',
              'photo-1519167758481-83f550bb49b3',
              'photo-1511795409834-ef04bbd61622',
              'photo-1519225421980-715cb0215aed',
              'photo-1470225620780-dba8ba36b745',
              'photo-1506784365847-bbad939e9335',
              'photo-1555244162-803834f70033'
            ][index % 7]}?auto=format&fit=crop&q=90&w=1600`}
            alt={point}
            className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1500 group-hover:scale-110 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent lg:hidden" />
        </div>

        {/* Cinematic Content Pillar */}
        <div className="flex-1 p-12 md:p-24 lg:p-32 flex flex-col justify-center bg-[#0B0B0D] relative">
          <div className="absolute top-12 right-12 md:top-20 md:right-20">
             <span className="text-white/10 text-8xl md:text-[200px] font-bold leading-none select-none tracking-tighter">
               {String(index + 1).padStart(2, '0')}
             </span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="space-y-12"
          >
            <div className="flex items-center gap-8">
              <span className="w-16 h-px bg-[#C6A75E]" />
              <span className="text-[#C6A75E] text-xs font-bold uppercase tracking-[0.8em]">Core Methodology</span>
            </div>
            
            <h3 className="text-5xl md:text-7xl lg:text-[100px] font-light text-white leading-[0.9] tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
              {point}
            </h3>
            
            <div className="space-y-10 max-w-2xl">
              <div className="grid grid-cols-2 gap-12 pt-10">
                {[
                  { label: 'Strategic Depth', desc: 'Architectural precision' },
                  { label: 'Legacy Impact', desc: 'Measurable excellence' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-3">
                    <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em]">{item.label}</span>
                    <p className="text-white text-sm font-semibold uppercase tracking-widest leading-none">{item.desc}</p>
                    <div className="w-8 h-[1px] bg-white/10" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-12">
                <motion.button 
                  whileHover={{ x: 20 }}
                  className="flex items-center gap-8 text-white group"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.5em] group-hover:text-[#C6A75E] transition-colors">Learn more about our process</span>
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:border-[#C6A75E] group-hover:bg-[#C6A75E]/5">
                    <ChevronRight className="w-6 h-6 text-[#C6A75E]" />
                  </div>
                </motion.button>
            </div>
          </motion.div>
          
          {/* Subtle branding asset */}
          <div className="absolute bottom-12 right-12 opacity-5 pointer-events-none">
             <span className="text-[120px] font-bold uppercase select-none">Elite</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function IndividualService() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  if (!serviceSlug || !(serviceSlug in serviceData)) {
    return <Navigate to="/services" replace />;
  }

  const data = serviceData[serviceSlug as keyof typeof serviceData];

  return (
    <div className="bg-[#0B0B0D] text-white">
      <IndividualEventHero
        eventType="OUR ELITE SERVICES"
        title={data.title}
        description={data.description}
        image={data.heroImage}
      />

      {/* monolithic Sticky Stacking Methodology */}
      <section className="relative bg-[#0B0B0D]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-[#C6A75E] text-xs font-bold uppercase tracking-[0.8em] block">Architectural Flow</span>
            <h2 className="text-6xl md:text-9xl font-light tracking-tighter text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Legacy Execution
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col">
          {data.points.map((point, i) => {
            return <StickyCard key={i} point={point} index={i} total={data.points.length} />;
          })}
        </div>
      </section>

      <EventOverview
        image={data.overviewImage}
        paragraphs={data.paragraphs}
        theme="dark"
      />

      <PlanningProcess />

      <div className="bg-[#111114]">
        <EventGallery />
      </div>

      <TestimonialsSection />
      
      <section className="py-40 bg-[#0B0B0D]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="bg-[#111114] border border-white/5 p-16 md:p-32 rounded-[80px] flex flex-col lg:flex-row justify-between items-center gap-20 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C6A75E]/5 via-transparent to-transparent opacity-50" />
            
            <div className="max-w-3xl text-center lg:text-left relative z-10">
              <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.6em] block mb-8">Take the Next Step</span>
              <h3 className="text-5xl md:text-8xl font-light text-white mb-10 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>Begin Your Legacy</h3>
              <p className="text-gray-400 text-xl font-light leading-relaxed">Engage with our senior directors to discuss a bespoke strategy tailored to your high-stakes requirements and unique vision.</p>
            </div>
            
            <div className="shrink-0 relative z-10">
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-16 py-8 bg-[#C6A75E] text-[#0B0B0D] rounded-full font-bold uppercase tracking-[0.4em] text-xs hover:bg-[#D4B76E] transition-all shadow-2xl shadow-[#C6A75E]/20 flex items-center gap-6"
               >
                 Inquire Privately <ChevronRight className="w-6 h-6" />
               </motion.button>
            </div>
          </div>
        </div>
      </section>

      <GetQuoteSection />
    </div>
  );
}
