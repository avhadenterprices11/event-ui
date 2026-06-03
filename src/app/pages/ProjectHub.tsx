import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, Layout, ShieldCheck, CreditCard, Users, Briefcase, Settings, Heart, ShoppingBag, Play, Star, Image, Box, Trophy, Compass, Wallet, Calendar, LayoutGrid, Wind, Grid } from 'lucide-react';

const projectPages = [
  {
    title: 'Login / Register',
    description: 'Minimal + Premium entrance with glassmorphism and cinematic motion.',
    path: '/login',
    icon: <ShieldCheck className="w-6 h-6" />,
    category: 'AUTHENTICATION'
  },
  {
    title: 'Wishlist (Curation)',
    description: 'Pinterest-style masonry grid for emotional event moodboarding and detail expansion.',
    path: '/wishlist',
    icon: <Heart className="w-6 h-6" />,
    category: 'CURATION'
  },
  {
    title: 'Portfolio (Cart)',
    description: 'Luxury procurement interface with real-time summary calculation and item management.',
    path: '/cart',
    icon: <ShoppingBag className="w-6 h-6" />,
    category: 'PROCUREMENT'
  },
  {
    title: 'Cinematic Portfolio',
    description: 'Netflix-style horizontal scroll experience with video motion previews and category chips.',
    path: '/portfolio',
    icon: <Briefcase className="w-6 h-6" />,
    category: 'SHOWCASE'
  },
  {
    title: 'Project Detail',
    description: 'Story-driven documentary scroll featuring heritage case studies and sensory storytelling.',
    path: '/project-detail',
    icon: <Star className="w-6 h-6" />,
    category: 'NARRATIVE'
  },
  {
    title: 'Immersive Gallery',
    description: 'AI-filtered media wall with infinite scroll and cinematic lightbox transitions.',
    path: '/gallery',
    icon: <Image className="w-6 h-6" />,
    category: 'ARCHIVE'
  },
  {
    title: 'Design Lab',
    description: 'Interactive workbench with 3D-card physics and layered architectural controls.',
    path: '/design-lab',
    icon: <Box className="w-6 h-6" />,
    category: 'INTERACTIVE'
  },
  {
    title: 'Signature Weddings',
    description: 'Vogue-style editorial storytelling featuring luxury case studies and cinematic narratives.',
    path: '/signature-weddings',
    icon: <Star className="w-6 h-6" />,
    category: 'EDITORIAL'
  },
  {
    title: 'Press & Media',
    description: 'Authority Wall featuring animated logo grids, article expansion previews, and scroll-based awards.',
    path: '/press-media',
    icon: <Trophy className="w-6 h-6" />,
    category: 'AUTHORITY'
  },
  {
    title: 'Event Process',
    description: 'Interactive journey mapping with scroll-linked progress nodes and cursor-following aesthetics.',
    path: '/event-process',
    icon: <Compass className="w-6 h-6" />,
    category: 'METHODOLOGY'
  },
  {
    title: 'Quote Builder',
    description: 'Immersive multi-step wizard with real-time budget calculations and live "Blueprint" visual feedback.',
    path: '/quote-builder',
    icon: <Wallet className="w-6 h-6" />,
    category: 'PROCUREMENT'
  },
  {
    title: 'Vendor Network',
    description: 'Curated ecosystem of sensory masters and artisans featuring hover-based work previews.',
    path: '/vendor-network',
    icon: <Users className="w-6 h-6" />,
    category: 'ECOSYSTEM'
  },
  {
    title: 'Client Portal',
    description: 'Exclusive gateway experience featuring identity scanning and high-tech initialization sequence.',
    path: '/client-portal',
    icon: <ShieldCheck className="w-6 h-6" />,
    category: 'AUTHENTICATION'
  },
  {
    title: 'Event Timeline',
    description: 'Live experience tracking with scrollable stages, status-linked nodes, and asset management.',
    path: '/event-timeline',
    icon: <Calendar className="w-6 h-6" />,
    category: 'MANAGEMENT'
  },
  {
    title: 'Mission Control',
    description: 'A premium live dashboard for production metrics, artisan collective communication, and strategic objectives.',
    path: '/mission-control',
    icon: <LayoutGrid className="w-6 h-6" />,
    category: 'CONTROL'
  },
  {
    title: 'Sensory Board',
    description: 'Tactile visualizer for layering olfactory, tactile, and sonic signatures into a unified event soul.',
    path: '/sensory-board',
    icon: <Wind className="w-6 h-6" />,
    category: 'ATMOSPHERE'
  },
  {
    title: 'Client Dashboard',
    description: 'The definitive command center featuring glass-morphism cards, live countdowns, and real-time production feeds.',
    path: '/client-dashboard',
    icon: <Layout className="w-6 h-6" />,
    category: 'MANAGEMENT'
  },
  {
    title: 'Wedding Gift Shop',
    description: 'A premium e-commerce experience featuring heritage curations, story-driven banners, and luxury product tiers.',
    path: '/gift-shop',
    icon: <ShoppingBag className="w-6 h-6" />,
    category: 'COMMERCE'
  },
  {
    title: 'Category Grid',
    description: 'A dynamic, high-engagement catalog featuring dual-view modes, sticky architectural filters, and quick-procurement overlays.',
    path: '/category-grid',
    icon: <Grid className="w-6 h-6" />,
    category: 'COMMERCE'
  },
  {
    title: 'Product Detail',
    description: 'A high-conversion artifact showcase with multi-angle galleries, bespoke configuration panels, and provenance storytelling.',
    path: '/product-detail',
    icon: <Box className="w-6 h-6" />,
    category: 'COMMERCE'
  },
  {
    title: 'Guest Collective',
    description: 'A premium RSVP and guest management interface with live attendance metrics, lineage tracking, and station assignments.',
    path: '/guest-collective',
    icon: <Users className="w-6 h-6" />,
    category: 'MANAGEMENT'
  },
  {
    title: 'Shopping Bag',
    description: 'A minimal-friction procurement queue with high-fidelity summary and white-glove service confirmation.',
    path: '/cart',
    icon: <ShoppingBag className="w-6 h-6" />,
    category: 'COMMERCE'
  },
  {
    title: 'Secure Checkout',
    description: 'Bank-grade procurement authorization featuring identity verification, high-limit wire options, and digital signatures.',
    path: '/checkout',
    icon: <ShieldCheck className="w-6 h-6" />,
    category: 'COMMERCE'
  },
  {
    title: 'Seamless Checkout',
    description: 'A multi-step logistics and capital settlement wizard designed for high-end procurement flows.',
    path: '/seamless-checkout',
    icon: <CreditCard className="w-6 h-6" />,
    category: 'COMMERCE'
  },
];

export default function ProjectHub() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] py-40 px-8">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C6A75E]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C6A75E]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/5 pb-12">
          <div className="space-y-6">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.6em] block"
            >
              Development Directory
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-light text-white tracking-tighter"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Project <span className="italic font-serif text-[#C6A75E]">Evolution.</span>
            </motion.h1>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 text-white/30 text-[10px] font-bold uppercase tracking-widest"
          >
            <div className="w-2 h-2 rounded-full bg-[#C6A75E] animate-pulse" />
            Live Build V2.0.4
          </motion.div>
        </div>

        {/* Dynamic Page Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectPages.map((page, index) => (
            <motion.div
              key={page.path}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={page.path} className="group block h-full">
                <div className="bg-[#111114] border border-white/5 p-10 rounded-[32px] h-full transition-all duration-500 hover:border-[#C6A75E]/30 hover:bg-[#111114]/80 group-hover:-translate-y-2 relative overflow-hidden">
                  
                  {/* Category Tag */}
                  <span className="text-[#C6A75E] text-[8px] font-bold uppercase tracking-widest mb-10 block opacity-50 group-hover:opacity-100 transition-opacity">
                    {page.category}
                  </span>

                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 group-hover:text-[#C6A75E] transition-colors border border-white/5 group-hover:border-[#C6A75E]/20">
                      {page.icon}
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/20 group-hover:text-[#C6A75E] transition-all group-hover:rotate-45">
                      <ArrowRight size={18} />
                    </div>
                  </div>

                  <h3 className="text-2xl text-white mb-4 font-light tracking-tight group-hover:text-[#C6A75E] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                    {page.title}
                  </h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">
                    {page.description}
                  </p>

                  {/* Aesthetic Corner Gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C6A75E]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Coming Soon Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="border-2 border-dashed border-white/5 p-10 rounded-[32px] flex flex-col items-center justify-center text-center group cursor-default"
          >
            <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/10 mb-6 group-hover:border-[#C6A75E]/20 transition-colors">
               <Users size={20} />
            </div>
            <span className="text-white/10 text-[10px] font-bold uppercase tracking-[0.4em] group-hover:text-[#C6A75E]/40 transition-colors">
              Future Modules Pending
            </span>
          </motion.div>
        </div>

        {/* Footer Info */}
        <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row gap-8 items-center justify-between text-[#1A1A1A]">
           <span className="text-white/10 text-[80px] font-bold font-serif italic select-none">PORTAL</span>
           <div className="text-right">
             <p className="text-white/20 text-xs uppercase tracking-widest font-bold mb-2">Build Management</p>
             <p className="text-white/40 text-sm font-light">Evolving the digital landscape of event architecture.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
