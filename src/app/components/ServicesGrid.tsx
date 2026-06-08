import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Event Planning & Coordination',
    description: 'We orchestrate every precise detail of your celebration, operating as your dedicated conduit for flawless execution. From initial concepts to the final goodbye, our team manages timelines, curates vendors, and ensures your vision remains paramount and uncompromised.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1080',
    slug: 'planning-strategy',
    points: ['Concept & Theme Ideation', 'Event Planning & Turnkey Management', 'Budget Planning & Cost Optimization', 'Event Timeline & Flow Planning', 'Guest List Planning & Segmentation', 'Wedding / Event Branding (Hashtag, Identity)']
  },
  {
    id: '02',
    title: 'Venue & Destination Scoping',
    description: 'Exclusive access to the worlds most breathtaking locations and iconic venues. We handle the intricacies of international contracting, local permits, and global logistics, ensuring your selected backdrop is as flawless as it is stunning.',
    image: 'https://images.unsplash.com/photo-1766910701111-9eee02328e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2ZW51ZSUyMHZpZXclMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NzIyNjQxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'venue-destination',
    points: ['Destination & Venue Selection', 'Venue Booking & Negotiation', 'Venue Layout Planning & Space Design', 'Seating & Guest Flow Planning']
  },
  {
    id: '03',
    title: 'High-End Design & Decor',
    description: 'Immersive aesthetic experiences that transform spaces into living works of art. From custom floral scaping and architectural lighting to bespoke furniture sourcing, our design team ensures every visual element reflects your distinct legacy.',
    image: 'https://images.unsplash.com/photo-1767986012154-db9a321c8832?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGRlY29yJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NzIyNjQxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'design-decor',
    points: ['Decor Concept & Design', 'Production Design for Decor', 'Floral Design & Installations', 'Stage & Set Design', 'Entrance & Experience Design', 'Lighting Design (Ambient + Stage + Mood)', 'Photo Booths & Experience Zones']
  },
  {
    id: '04',
    title: 'Culinary & Beverage Curation',
    description: 'Exquisite culinary journeys curated by world-renowned chefs and sommeliers. We build bespoke menus that tell a story, paired with heritage wines and signature mixology to deliver an unforgettable dining experience for your discerning guests.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1080',
    slug: 'food-beverage',
    points: ['Catering Selection', 'Menu Curation & Planning', 'Food Experience Design (Live Counters, Themes)', 'Beverage & Bar Management']
  },
  {
    id: '05',
    title: 'Entertainment & Performances',
    description: 'World-class performances and interactive moments that captivate and inspire. We source globally recognized talent, from operatic symphonies and theatrical performers to celebrity DJs, ensuring the energy is perfectly calibrated.',
    image: 'https://images.unsplash.com/photo-1770045517842-5a5c801be34c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGVudGVydGFpbm1lbnQlMjBwcmVtaXVtfGVufDF8fHx8MTc3MjQzNTk1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'entertainment-experience',
    points: ['Artist & Celebrity Management', 'Entertainment Management', 'Choreography & Dance Management', 'Anchors / Emcees / Hosts', 'Live Performances & Shows', 'Guest Engagement Activities']
  },
  {
    id: '06',
    title: 'Cinematic Media & Production',
    description: 'Cinematic storytelling and high-fidelity content capture for eternal memories. Our award-winning production teams utilize drone cinematography and editorial photography to document your celebration with unparalleled artistry.',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1080',
    slug: 'media-production',
    points: ['Photography & Cinematography', 'Pre-wedding Shoots', 'Drone Coverage', 'Live Streaming', 'Same-Day Edits / Wedding Films']
  },
  {
    id: '07',
    title: 'Invitations & Communication',
    description: 'Bespoke stationery and digital reach that sets the tone for your event. We design exquisite invitations, manage RSVPs, and ensure seamless communication with your guests, setting expectations for a monumental gathering.',
    image: 'https://images.unsplash.com/photo-1758307390525-46a0825d4e50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwaW52aXRhdGlvbnxlbnwxfHx8fDE3NzIyNzA5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'invitations-communication',
    points: ['Wedding Invitation Design (Digital & Physical)', 'Wedding Invitation Landing Pages', 'Save-the-Date Campaigns', 'Guest Communication & Updates']
  },
  {
    id: '08',
    title: 'Ritual & Ceremony Mgmt',
    description: 'Graceful management of tradition and solemnity for significant milestones. We choreograph every step of the ceremony, honoring cultural traditions while introducing modern elegance to your sacred rituals.',
    image: 'https://images.unsplash.com/photo-1761499101631-92cde2434bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNlcmVtb255fGVufDF8fHx8MTc3MjI3MDk0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'ritual-ceremony',
    points: ['Ritual Management', 'Ceremony Planning & Flow', 'Priest / Pandit Coordination', 'Multi-cultural Ceremony Customization']
  },
  {
    id: '09',
    title: 'Gifting & Personalization',
    description: 'Curated favors and unique touches that leave a lasting impression. Every guest leaves with a bespoke memento, rigorously sourced and beautifully packaged to serve as a physical memory of an unforgettable moment.',
    image: 'https://images.unsplash.com/photo-1764380746818-18c01e96df12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnaWZ0JTIwYm94JTIwZWxlZ2FudHxlbnwxfHx8fDE3NzI0MzU5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'gifting-personalization',
    points: ['Gifting & Hamper Creation & Management', 'Welcome Kits & Guest Hampers', 'Personalized Wedding Collaterals', 'Custom Signage & Branding']
  },
  {
    id: '10',
    title: 'Corporate Event Solutions',
    description: 'Strategic planning and flawless execution for high-stakes business gatherings. We engineer sophisticated summits, galas, and executive retreats that reflect your brand\'s power and foster profound networking opportunities.',
    image: 'https://images.unsplash.com/photo-1609189123897-42db027571c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3Jwb3JhdGUlMjBnYWxhfGVufDF8fHx8MTc3MjQzNTk0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'corporate-solutions',
    points: ['Corporate Event Planning & Management', 'Conferences & Seminars', 'Product Launches', 'Team-Building Retreats', 'Exhibitions & Trade Shows', 'Brand Activation Events', 'Award Ceremonies & Recognition Events', 'Workshops & Training Sessions', 'Corporate Celebrations & Milestones', 'Hybrid & Virtual Events']
  },
  {
    id: '11',
    title: 'Legal & Permissions',
    description: 'Comprehensive handling of compliance, permits, and international regulations. We dissolve the bureaucratic friction of large-scale events, securing the necessary authorizations to build the impossible in exclusive locations.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1080',
    slug: 'legal-permissions',
    points: ['Venue Permissions', 'Sound & Music Licenses', 'Government / Local Authority Approvals']
  },
  {
    id: '12',
    title: 'Guest Experience & Hospitality',
    description: 'Seamless concierge-level care ensuring every guest feels valued and pampered. From exclusive airport transfers to 24/7 dedicated concierges, we insulate your guests in unparalleled comfort throughout their stay.',
    image: 'https://images.unsplash.com/photo-1768508950918-c87e2f544573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3NwaXRhbGl0eSUyMGRpbm5lciUyMHNldHRpbmd8ZW58MXx8fHwxNzcyMjY0MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'guest-experience',
    points: ['Hospitality Management', 'Guest Welcome & Check-in', 'Room Allocation & Hotel Coordination', 'Guest Travel & Transportation', 'On-ground Guest Assistance', 'RSVP Management', 'Guest Communication (WhatsApp / Email updates)']
  },
  {
    id: '13',
    title: 'Logistics & Operations',
    description: 'Precision-engineered coordination for a flawless, stress-free execution. Operating like a military command center, our backstage operations control the exact flow of vehicles, talent, and production schedules without being seen.',
    image: 'https://images.unsplash.com/photo-1726384780582-40353de8d036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25mZXJlbmNlJTIwaGFsbCUyMGx1eHVyeXxlbnwxfHx8fDE3NzIyNzI4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'logistics-operations',
    points: ['Logistics Management', 'Vendor Coordination & Management', 'Transportation Management', 'Inventory & Material Handling', 'On-ground Event Execution Team', 'Emergency & Contingency Planning']
  },
  {
    id: '14',
    title: 'Post-Event Restitution',
    description: 'Post-celebration wrap-up and memory preservation to close with grace. We efficiently return venues to pristine condition while managing the curation, packaging, and high-security delivery of your media and heirlooms.',
    image: 'https://images.unsplash.com/photo-1763553113332-800519753e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZW5kJmVsZWdhbnR8ZW58MXx8fHwxNzcyMjcwOTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'post-event',
    points: ['Event Wrap-up & Vendor Settlement', 'Photo & Video Delivery Coordination', 'Feedback Collection', 'Memory Archiving (Albums, Digital Storage)']
  }
];

// Sub-component for individual scrolling row logic tailored for the definitive Dark Theme
function ServiceRow({ service, index }: { service: any; index: number }) {
  const isReversed = index % 2 !== 0;
  const rowRef = useRef(null);
  
  // Exquisite mapping for an airy, floating parallax
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <div
      ref={rowRef}
      className={`flex flex-col lg:flex-row gap-16 lg:gap-32 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Dark Theme Image Module */}
      <div className="w-full lg:w-[45%] relative z-10 group">
        <motion.div 
          className="relative w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden flex items-center justify-center bg-[#111114]"
          initial={{ clipPath: isReversed ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)' }}
          whileInView={{ clipPath: 'inset(0 0 0 0)' }}
          transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }} 
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div style={{ y: yImage, width: '100%', height: '115%' }}>
            <ImageWithFallback
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-[2.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
            />
          </motion.div>
          {/* Subtle dark grading to preserve pure imagery while maintaining contrast over dark canvas */}
          <div className="absolute inset-0 bg-[#0B0B0D]/20 mix-blend-overlay pointer-events-none" />
        </motion.div>

        {/* Elegant architectural floating border typical of high-end design */}
        <div 
          className={`absolute -bottom-6 w-full h-full border border-[#C6A75E]/30 z-[-1] pointer-events-none transition-transform duration-[1s] ease-out ${isReversed ? '-left-6 group-hover:-translate-x-3 group-hover:translate-y-3' : '-right-6 group-hover:translate-x-3 group-hover:translate-y-3'}`} 
        />
      </div>

      {/* Elegant Typography & Text Module */}
      <motion.div 
        className="w-full lg:w-[55%] relative z-10 flex flex-col justify-center space-y-10"
        initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Number Indicator */}
        <div className="flex items-center gap-6">
          <span className="text-[#C6A75E] font-serif text-3xl italic">
            {service.id}
          </span>
          <div className="flex-1 h-px max-w-[150px] bg-gradient-to-r from-[#C6A75E]/40 to-transparent" />
        </div>
        
        {/* Main Heading */}
        <h3 
          className="text-[40px] md:text-[56px] lg:text-[72px] font-serif text-[#F5F5F5] leading-[1.05] tracking-tight font-light"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {service.title}
        </h3>
        
        {/* Description Paragraph */}
        <p className="text-[#A0A0A0] leading-relaxed text-base md:text-[17px] font-light lg:pr-16 max-w-lg">
          {service.description}
        </p>

        {/* Sophisticated List Layout - Notice typographical contrast */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 pt-6 border-t border-white/10">
          {service.points.map((pt: string, i: number) => (
            <motion.div 
              key={pt} 
              className="flex items-start gap-4 group/point"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1), duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-[4px] h-[4px] rounded-full bg-[#C6A75E] mt-2 shrink-0 opacity-70 transition-transform duration-300 group-hover/point:scale-150" />
              <span className="text-[#E0E0E0] text-[12px] tracking-[0.15em] uppercase font-semibold leading-tight">
                {pt}
              </span>
            </motion.div>
          ))}
        </div>
        {/* Explore Service CTA Button */}
        <div>
          <Link to={`/services/${service.slug}`}>
            <motion.div
              className="group inline-flex items-center gap-3 relative"
              whileHover="hover"
            >
              {/* Animated underline track */}
              <span className="relative text-[11px] font-bold uppercase tracking-[0.3em] text-[#C6A75E] pb-1">
                Explore Service
                <motion.span
                  className="absolute bottom-0 left-0 h-px bg-[#C6A75E] block"
                  variants={{ hover: { width: '100%' }, rest: { width: '0%' } }}
                  initial="rest"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
              <motion.div
                variants={{ hover: { x: 6 }, rest: { x: 0 } }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <ArrowRight className="w-4 h-4 text-[#C6A75E]" />
              </motion.div>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-[#0B0B0D] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Dark Theme Section Header */}
        <motion.div
          className="text-center mb-32 md:mb-48 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-[#C6A75E] text-xs font-semibold uppercase tracking-[0.35em] mb-6 border-b border-[#C6A75E]/30 pb-2 inline-block">
            Curated Excellence
          </div>
          <h2
            className="text-[48px] md:text-[72px] lg:text-[90px] leading-[1.05] font-light text-[#F5F5F5] tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our <i className="text-[#C6A75E]">Services.</i>
          </h2>
        </motion.div>

        {/* Fully Componentized Alternating Grid tailored for Dark Theme */}
        <div className="space-y-48 md:space-y-64">
          {services.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
