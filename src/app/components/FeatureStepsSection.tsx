import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface Feature {
  step: string;
  title: string;
  content: string;
  image: string;
  slug: string;
}

const features: Feature[] = [
  {
    step: '01',
    title: 'Wedding',
    content: 'From intimate ceremonies to grand celebrations, we orchestrate every detail of your perfect day with elegance and precision.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1080',
    slug: 'wedding'
  },
  {
    step: '02',
    title: 'Corporate',
    content: 'Sophisticated business events, galas, and conferences designed to elevate your brand and create lasting impressions.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1080',
    slug: 'corporate'
  },
  {
    step: '03',
    title: 'Birthday & Social',
    content: 'Exclusive milestone celebrations and social gatherings crafted with creativity, style, and personalized touches.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1080',
    slug: 'birthday-social'
  },
  {
    step: '04',
    title: 'Destination',
    content: 'Extraordinary events in breathtaking locations around the world, seamlessly managed from concept to completion.',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1080',
    slug: 'destination'
  },
];

export function FeatureStepsSection() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-[#0B0B0D] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C6A75E]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-200px] w-[600px] h-[600px] bg-[#E5C97A]/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] px-6 md:px-16 lg:px-24 xl:px-32 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 relative z-10">
        
        {/* Left Side: Interactive Accordion */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 lg:mb-16"
          >
            <span className="text-[#C6A75E] uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold block mb-4">
              Our Expertise
            </span>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl text-[#F5F5F5] font-light tracking-tight" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Event Portfolios
            </h2>
          </motion.div>

          <div className="flex flex-col w-full relative">
            {features.map((feature, index) => {
              const isActive = index === currentFeature;
              return (
                <div 
                  key={index}
                  onMouseEnter={() => setCurrentFeature(index)}
                  onClick={() => setCurrentFeature(index)}
                  className="group relative flex items-start gap-4 sm:gap-6 md:gap-8 border-t border-white/5 py-6 sm:py-8 cursor-pointer transition-colors duration-500"
                >
                  {/* Animated top line on hover/active */}
                  <div 
                    className={`absolute top-[-1px] left-0 h-[1px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive 
                        ? 'w-full bg-[#C6A75E]' 
                        : 'w-0 bg-[#C6A75E]/50 group-hover:w-1/3'
                    }`} 
                  />
                  
                  {/* Step Number */}
                  <div 
                    className="text-base sm:text-lg md:text-xl font-mono mt-1 sm:mt-2 transition-colors duration-500" 
                    style={{ color: isActive ? '#C6A75E' : 'rgba(255,255,255,0.2)' }}
                  >
                    {feature.step}
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 
                      className={`text-2xl sm:text-3xl md:text-5xl transition-all duration-500 tracking-tight leading-none ${
                        isActive ? 'text-[#F5F5F5] font-light italic' : 'text-white/20 font-light'
                      }`} 
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {feature.title}
                    </h3>
                    
                    {/* Expandable Content */}
                    <motion.div 
                      initial={false}
                      animate={{ 
                        height: isActive ? 'auto' : 0, 
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? 20 : 0
                      }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#B8B8B8] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-[400px]">
                        {feature.content}
                      </p>
                      
                      {/* Mobile Image (Visible only on small screens inside the accordion) */}
                      <div className="block lg:hidden w-full h-[250px] sm:h-[350px] rounded-[16px] overflow-hidden relative mb-6 sm:mb-8 shadow-2xl">
                        <ImageWithFallback 
                          src={feature.image} 
                          alt={feature.title}
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 border border-white/10 rounded-[16px] pointer-events-none mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/60 via-transparent to-transparent pointer-events-none" />
                      </div>

                      <Link 
                        to={`/events/${feature.slug}`}
                        className="inline-flex items-center gap-3 text-[#C6A75E] text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:text-[#E5C97A] transition-colors"
                      >
                        Explore Experience
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              );
            })}
            {/* Final bottom border */}
            <div className="w-full h-[1px] bg-white/5" />
          </div>
        </div>

        {/* Right Side: Elegant Masking Image Stack (Desktop Only) */}
        <div className="hidden lg:block lg:col-span-7 h-[700px] xl:h-[800px] relative w-full">
          <motion.div 
            className="w-full h-full relative rounded-[20px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <AnimatePresence>
              <motion.div
                key={currentFeature}
                className="absolute inset-0 z-10"
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                exit={{ clipPath: 'inset(0% 0 0 0)', zIndex: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="w-full h-full"
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ImageWithFallback 
                    src={features[currentFeature].image} 
                    alt={features[currentFeature].title}
                    className="w-full h-full object-cover" 
                  />
                  {/* Subtle inner shadow/border overlay for premium feel */}
                  <div className="absolute inset-0 border border-white/10 rounded-[20px] pointer-events-none mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/80 via-transparent to-black/20 pointer-events-none" />
                </motion.div>

                {/* Floating Tag Overlay */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-8 right-8 bg-[#0B0B0D]/70 backdrop-blur-md border border-white/10 px-6 py-4 rounded-full flex items-center gap-3 shadow-2xl"
                >
                  <div className="w-2 h-2 rounded-full bg-[#C6A75E] animate-pulse shadow-[0_0_8px_#C6A75E]" />
                  <span className="text-[#F5F5F5] text-xs uppercase tracking-widest font-medium">
                    Bespoke {features[currentFeature].title}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}