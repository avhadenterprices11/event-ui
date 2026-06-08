import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Award, Target, Users, Star, Globe } from 'lucide-react';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { AboutHeroBanner } from '../components/AboutHeroBanner';

export default function About() {
  return (
    <>
      <AboutHeroBanner />
      <StoryVisionSlider />
      <Achievements />
      <TeamSection />
      <WhyTrustUs />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

// === PREMIUM CODEPEN-INSPIRED FULL SCREEN SLIDER ===
const SLIDES = [
  {
    title: "Our Story",
    desc: "Founded over a decade ago, our journey began with a singular vision: to transform ordinary moments into extraordinary memories, setting new standards in luxury.",
    color: "#09090B", // Super dark onyx 
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1080"
  },
  {
    title: "Our Mission",
    desc: "To deliver unparalleled event experiences that exceed expectations through meticulous planning, awe-inspiring design, and unwavering creative excellence.",
    color: "#111114", // Subtle shift to slate/black
    image: "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?auto=format&fit=crop&q=80&w=1080"
  },
  {
    title: "Our Vision",
    desc: "To be recognized globally as the premier luxury event management firm, authoring impossible architectural spectacles in the most remote, exclusive locations.",
    color: "#1A1A18", // Dark sepia/brown tint
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1080"
  }
];

const getSlideProps = (step: number) => {
  const absStep = Math.abs(step);
  const positions = [
    { x: "-35vh", y: "-95vh", rot: -30, s: 1.35, b: 16, o: 0 },
    { x: "-18vh", y: "-50vh", rot: -15, s: 1.15, b: 8, o: 0.55 },
    { x: "0vh", y: "0vh", rot: 0, s: 1, b: 0, o: 1 },
    { x: "-6vh", y: "50vh", rot: 15, s: 0.75, b: 6, o: 0.55 },
    { x: "-12vh", y: "95vh", rot: 30, s: 0.55, b: 14, o: 0 }
  ];
  const idx = Math.max(0, Math.min(4, step + 2));
  const p = positions[idx];

  return {
    x: p.x,
    y: p.y,
    rotate: p.rot,
    scale: p.s,
    filter: `blur(${p.b}px)`,
    opacity: p.o,
    zIndex: absStep === 0 ? 3 : absStep === 1 ? 2 : 1
  };
};

function StoryVisionSlider() {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  // Derive active index effortlessly via native scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const totalSlides = SLIDES.length;
      let newIdx = Math.round(latest * (totalSlides - 1));
      newIdx = Math.max(0, Math.min(newIdx, totalSlides - 1));
      if (newIdx !== current) {
        setDirection(newIdx > current ? 1 : -1);
        setCurrent(newIdx);
      }
    });
  }, [current, scrollYProgress]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[300vh] bg-[#0B0B0D]"
    >
      <div 
        className="sticky top-0 w-full h-screen overflow-hidden flex flex-col lg:flex-row transition-colors duration-[1.2s] ease-in-out"
        style={{ backgroundColor: SLIDES[current].color }}
      >
        {/* Left Side Typography Module */}
        <div className="w-full h-[55%] lg:h-full lg:flex-1 lg:w-[55%] flex flex-col justify-end lg:justify-center px-6 md:px-16 lg:px-24 pt-16 md:pt-24 pb-0 lg:py-16 relative z-10">
          
          {/* Header indicator */}
          <div className="flex justify-between items-center hidden lg:flex mt-8 mb-auto">
             <div className="flex gap-[4px] flex-col opacity-60">
                <span className="w-6 h-[1px] bg-white pointer-events-none" />
                <span className="w-6 h-[1px] bg-white pointer-events-none" />
                <span className="w-6 h-[1px] bg-white pointer-events-none" />
             </div>
             <span className="text-[11px] tracking-[0.2em] text-[#C6A75E] uppercase border-b border-[#C6A75E]/30 pb-1 font-semibold">
                Boutique Excellence
             </span>
          </div>

          {/* Typography Group (Title + Description) */}
          <div className="mt-auto lg:my-auto w-full flex flex-col justify-end lg:justify-center pb-2 lg:pb-0">
            {/* Staggered Pop-Up Character Title Area */}
            <div className="relative h-[80px] sm:h-[120px] lg:h-[300px] w-full flex items-end pb-2 lg:pb-4 overflow-hidden">
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                  key={current}
                  className="absolute whitespace-nowrap w-[120%] lg:w-[130%] text-[13vw] sm:text-[64px] md:text-[90px] lg:text-[min(11vw,140px)] text-[#F5F5F5] leading-[0.95] tracking-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {SLIDES[current].title.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      custom={direction}
                      variants={{
                        enter: (dir) => ({ y: dir > 0 ? "100%" : "-100%", opacity: 0 }),
                        center: { y: "0%", opacity: 1 },
                        exit: (dir) => ({ y: dir > 0 ? "-100%" : "100%", opacity: 0 })
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1], // Expo out equivalent
                        delay: i * 0.04
                      }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer Subtext Area relocated beneath title */}
            <div className="relative h-[80px] lg:h-[150px] w-full mt-2 lg:mt-6 z-20">
              <AnimatePresence mode="popLayout" custom={direction}>
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={{
                        enter: (dir) => ({ opacity: 0, y: dir > 0 ? 30 : -30 }),
                        center: { opacity: 1, y: 0 },
                        exit: (dir) => ({ opacity: 0, y: dir > 0 ? -30 : 30 })
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-0 left-0"
                  >
                    <p className="text-[12px] md:text-sm tracking-[0.15em] text-white/60 leading-[1.8] uppercase max-w-[90%] md:max-w-[450px]">
                      {SLIDES[current].desc}
                    </p>
                  </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Side: Flowing Image Layout */}
        <div className="relative lg:static top-auto left-auto w-full h-[45%] lg:h-full lg:w-[45%] flex items-start lg:items-center justify-center pt-2 lg:pt-0 pointer-events-none z-0 overflow-hidden lg:overflow-visible">
           <div className="relative w-full h-full"> 
             {SLIDES.map((slide, i) => {
               const step = i - current;
               const props = getSlideProps(step);
               return (
                 <div
                   key={i}
                   className="absolute top-2 lg:top-1/2 left-1/2 w-[85%] lg:w-[68%] aspect-[1.4] -translate-x-1/2 lg:-translate-y-1/2"
                   style={{ 
                       zIndex: props.zIndex
                   }}
                 >
                   <motion.div
                     className="w-full h-full rounded-[2px] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden bg-[#111114]"
                     animate={{
                       x: props.x,
                       y: props.y,
                       rotate: props.rotate,
                       scale: props.scale,
                       filter: props.filter,
                       opacity: props.opacity,
                     }}
                     transition={{
                       duration: 1.2,
                       ease: [0.16, 1, 0.3, 1]
                     }}
                   >
                     <ImageWithFallback
                       src={slide.image}
                       alt={slide.title}
                       className="w-full h-full object-cover brightness-90 grayscale-[10%]"
                     />
                     <div className="absolute inset-0 border border-white/10 rounded-[2px] mix-blend-overlay" />
                   </motion.div>
                 </div>
               );
             })}
           </div>
        </div>
      </div>
    </section>
  );
}

// === ACHIEVEMENTS SECTION ===
function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '250+', label: 'Events Delivered' },
    { number: '10+', label: 'Years of Excellence' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Luxury Venues' },
  ];

  return (
    <section ref={ref} className="py-16 md:py-[100px] bg-[#0B0B0D] relative overflow-hidden">
      {/* Abstract 3D shapes background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[#C6A75E]/10 to-transparent blur-3xl"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-2 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-1 md:mb-4 bg-gradient-to-r from-[#C6A75E] to-[#E5C97A] bg-clip-text text-transparent"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.number}
              </div>
              <div className="text-[#C6C6C6] text-xs sm:text-sm lg:text-lg tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// === TEAM SECTION ===
function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const team = [
    {
      name: 'Isabella Vance',
      role: 'Creative Director',
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Marcus Thorne',
      role: 'Principal Architect',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Elena Castellano',
      role: 'Head of Experiences',
      img: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Julian Rossi',
      role: 'Production Lead',
      img: 'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <section ref={ref} className="py-24 md:py-[160px] bg-[#111114] text-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6 md:gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 max-w-2xl"
          >
            <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em] block">
              Our People
            </span>
            <h2 className="text-4xl md:text-7xl font-light tracking-tighter text-[#F5F5F5]" style={{ fontFamily: 'var(--font-heading)' }}>
              Meet <br />
              <span className="italic font-serif text-[#C6A75E]">The Team.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-white/60 text-sm leading-relaxed max-w-md font-light">
              An elite collective of visionaries, architects, and detail-obsessed creators. We don’t just plan events; we architect memories with surgical precision and effortless grace.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-3 md:mb-6 bg-[#0B0B0D] rounded-sm">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 md:grayscale-[30%] group-hover:grayscale-0 opacity-100 md:opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/90 via-transparent to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-700 md:translate-y-4 md:group-hover:translate-y-0">
                  <span className="text-[#C6A75E] text-[8px] md:text-[10px] font-bold uppercase tracking-widest border-b border-[#C6A75E]/40 pb-0.5 md:pb-1">
                    <span className="hidden md:inline">View </span>Portfolio
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base md:text-xl font-serif text-white tracking-tight group-hover:text-[#C6A75E] transition-colors">{member.name}</h3>
                <p className="text-white/40 text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-widest">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// === WHY TRUST US SECTION ===
function WhyTrustUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef, { once: false, margin: '0px' });

  const features = [
    {
      icon: Award,
      title: 'Award-Winning Excellence',
      description: 'Recognized globally for outstanding event design and execution.',
      subtitle: 'premium quality',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1080',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned professionals with decades of combined experience.',
      subtitle: 'dedicated experts',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1080',
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Uncompromising standards in every detail, every time.',
      subtitle: 'luxury service',
      image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1080',
    },
  ];

  return (
    <>
      <section ref={ref} className="py-24 md:py-[120px] bg-[#111114]">
        <style>{`
          .trust-card {
            width: 100%;
            height: 100%;
            min-height: 440px;
            background: rgba(255, 255, 255, 0.02);
            position: relative;
            display: flex;
            flex-direction: column;
            border-radius: 8px;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .trust-card-img-wrapper {
            width: 100%;
            height: 220px;
            overflow: hidden;
            position: relative;
          }
          
          .trust-card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
            filter: grayscale(40%) brightness(0.8);
          }
          
          .trust-card-content {
            padding: 32px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            position: relative;
            z-index: 10;
            text-align: left;
          }
          
          .trust-card-icon {
            width: 24px;
            height: 24px;
            color: #C6A75E;
            margin-bottom: 24px;
            transition: transform 0.5s ease;
          }
          
          .trust-card-title {
            font-size: 24px;
            color: #F5F5F5;
            margin-bottom: 12px;
            font-weight: 300;
            transition: color 0.5s ease;
            letter-spacing: -0.02em;
          }
          
          .trust-card-desc {
            color: rgba(255, 255, 255, 0.5);
            font-size: 14px;
            line-height: 1.6;
            font-weight: 300;
            transition: color 0.5s ease;
          }
          
          .trust-card-footer {
            margin-top: auto;
            padding-top: 24px;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            color: #C6A75E;
            font-weight: 600;
            opacity: 0.6;
            transition: opacity 0.5s ease;
          }
          
          /* Hover States */
          .trust-card:hover {
            border-color: rgba(198, 167, 94, 0.3);
            background: rgba(255, 255, 255, 0.04);
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          }
          
          .trust-card:hover .trust-card-img {
            transform: scale(1.05);
            filter: grayscale(0%) brightness(1);
          }
          
          .trust-card:hover .trust-card-icon {
            transform: scale(1.1);
          }
          
          .trust-card:hover .trust-card-title {
            color: #C6A75E;
          }
          
          .trust-card:hover .trust-card-desc {
            color: rgba(255, 255, 255, 0.7);
          }
          
          .trust-card:hover .trust-card-footer {
            opacity: 1;
          }
        `}</style>
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-[1px] bg-[#C6A75E]" />
              <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em]">Our Standards</span>
              <div className="w-8 h-[1px] bg-[#C6A75E]" />
            </motion.div>
            <motion.h2
              className="text-4xl md:text-6xl text-[#F5F5F5] font-light tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Why Clients <span className="italic font-serif text-[#C6A75E]">Trust Us</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="h-full"
              >
                <div className={`trust-card group`}>
                  <div className="trust-card-img-wrapper">
                    <img src={feature.image} alt={feature.title} className="trust-card-img" />
                  </div>
                  
                  <div className="trust-card-content">
                    <feature.icon className="trust-card-icon" />
                    <h3
                      className="trust-card-title"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {feature.title}
                    </h3>
                    <p className="trust-card-desc">
                      {feature.description}
                    </p>
                    <div className="trust-card-footer">
                      {feature.subtitle}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div ref={footerRef} className="h-px" />
    </>
  );
}

// === CTA SECTION ===
function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-[120px] bg-[#0B0B0D] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C6A75E]/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl mb-6 text-[#F5F5F5] tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Let's Create Something Extraordinary
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/quote" 
            className="mt-8 inline-block px-12 py-5 rounded-[12px] bg-gradient-to-r from-[#C6A75E] to-[#E5C97A] text-[#0B0B0D] text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(198,167,94,0.6)]"
          >
            Start Planning With Us
          </Link>
        </motion.div>

        <motion.p
          className="mt-6 text-[#999999] text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Private consultations available.
        </motion.p>
      </div>
    </section>
  );
}