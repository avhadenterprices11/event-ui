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
    image: "https://images.unsplash.com/photo-1767986012154-db9a321c8832?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwc2V0dXAlMjBlbGVnYW50fGVufDF8fHx8MTc3MjE5MTE4NXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Our Mission",
    desc: "To deliver unparalleled event experiences that exceed expectations through meticulous planning, awe-inspiring design, and unwavering creative excellence.",
    color: "#111114", // Subtle shift to slate/black
    image: "https://images.unsplash.com/photo-1768488292837-775c756627c5?w=1080&q=80"
  },
  {
    title: "Our Vision",
    desc: "To be recognized globally as the premier luxury event management firm, authoring impossible architectural spectacles in the most remote, exclusive locations.",
    color: "#1A1A18", // Dark sepia/brown tint
    image: "https://images.unsplash.com/photo-1766910701111-9eee02328e95?w=1080&q=80"
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
        <div className="flex-1 w-full lg:w-[55%] flex flex-col px-8 md:px-16 lg:px-24 pt-24 pb-12 lg:py-16 relative z-10 h-full">
          
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
          <div className="my-auto w-full flex flex-col justify-center">
            {/* Staggered Pop-Up Character Title Area */}
            <div className="relative h-[180px] sm:h-[220px] lg:h-[300px] w-full flex items-end pb-4 overflow-hidden">
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                  key={current}
                  className="absolute w-[120%] lg:w-[130%] text-[64px] md:text-[90px] lg:text-[min(11vw,140px)] text-[#F5F5F5] leading-[0.95] tracking-tight"
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
            <div className="relative h-[120px] lg:h-[150px] w-full mt-4 lg:mt-6 z-20">
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
        <div className="absolute lg:static top-0 left-0 w-full lg:w-[45%] h-full flex items-center justify-center pointer-events-none z-0">
           <div className="relative w-full h-full"> 
             {SLIDES.map((slide, i) => {
               const step = i - current;
               const props = getSlideProps(step);
               return (
                 <div
                   key={i}
                   className="absolute top-1/2 left-1/2 w-[70%] lg:w-[68%] aspect-[1.4]"
                   style={{ 
                       transform: "translate(-50%, -50%)",
                       zIndex: props.zIndex,
                       opacity: props.opacity // Pre-fade wrapper to dodge mounting z-index popping
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
    <section ref={ref} className="py-[100px] bg-[#0B0B0D] relative overflow-hidden">
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

      <div className="max-w-[1440px] mx-auto px-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-[#C6A75E] to-[#E5C97A] bg-clip-text text-transparent"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.number}
              </div>
              <div className="text-[#C6C6C6] text-sm lg:text-lg tracking-wide">{stat.label}</div>
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
    <section ref={ref} className="py-[160px] bg-[#111114] text-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 max-w-2xl"
          >
            <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em] block">
              Our People
            </span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#F5F5F5]" style={{ fontFamily: 'var(--font-heading)' }}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-[#0B0B0D] rounded-sm">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-widest border-b border-[#C6A75E]/40 pb-1">
                    View Portfolio
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-serif text-white tracking-tight group-hover:text-[#C6A75E] transition-colors">{member.name}</h3>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{member.role}</p>
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
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned professionals with decades of combined experience.',
      subtitle: 'dedicated experts',
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Uncompromising standards in every detail, every time.',
      subtitle: 'luxury service',
    },
  ];

  return (
    <>
      <section ref={ref} className="py-[100px] bg-[#111114]">
        <style>{`
          .trust-card {
            width: 100%;
            height: 280px;
            background: #0B0B0D;
            position: relative;
            display: grid;
            place-content: center;
            border-radius: 10px;
            overflow: hidden;
            transition: all 0.5s ease-in-out;
          }
          .trust-card-border {
            position: absolute;
            inset: 0px;
            border: 2px solid #C6A75E;
            opacity: 0;
            transform: rotate(10deg);
            transition: all 0.5s ease-in-out;
          }
          .trust-card-bottom-text {
            position: absolute;
            left: 50%;
            bottom: 18px;
            transform: translateX(-50%);
            font-size: 8px;
            text-transform: uppercase;
            padding: 0px 5px 0px 8px;
            color: #C6A75E;
            background: #0B0B0D;
            opacity: 0;
            letter-spacing: 7px;
            transition: all 0.5s ease-in-out;
          }
          .trust-card-content {
            transition: all 0.5s ease-in-out;
            text-align: center;
          }
          .trust-card-icon-wrapper {
            height: 80px;
            position: relative;
            width: 80px;
            margin: 0 auto;
            overflow: hidden;
            transition: all 1s ease-in-out;
            border-radius: 50%;
            background: linear-gradient(135deg, #C6A75E 0%, #E5C97A 100%);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .trust-card-icon {
            width: 40px;
            height: 40px;
            color: #0B0B0D;
          }
          .trust-card-trail {
            position: absolute;
            inset: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            border-radius: 50%;
          }
          .trust-card-subtitle {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            margin-top: 140px;
            color: #C6A75E;
            padding-left: 8px;
            font-size: 12px;
            opacity: 0;
            transition: all 0.5s ease-in-out 0.5s;
          }
          .trust-card:hover, .trust-card.active {
            border-radius: 0;
            transform: scale(1.05);
          }
          .trust-card:hover .trust-card-icon-wrapper, .trust-card.active .trust-card-icon-wrapper {
            animation: icon-glow 1s ease-in-out;
          }
          .trust-card:hover .trust-card-border, .trust-card.active .trust-card-border {
            inset: 20px;
            opacity: 1;
            transform: rotate(0);
          }
          .trust-card:hover .trust-card-bottom-text, .trust-card.active .trust-card-bottom-text {
            letter-spacing: 4px;
            opacity: 1;
            transform: translateX(-50%);
          }
          .trust-card:hover .trust-card-subtitle, .trust-card.active .trust-card-subtitle {
            opacity: 1;
            letter-spacing: 6px;
          }
          .trust-card:hover .trust-card-trail, .trust-card.active .trust-card-trail {
            animation: icon-trail 1s ease-in-out;
          }
          @keyframes icon-glow {
            0% { box-shadow: 0 0 0 rgba(198, 167, 94, 0); }
            50% { box-shadow: 0 0 30px rgba(198, 167, 94, 0.8); }
            100% { box-shadow: 0 0 0 rgba(198, 167, 94, 0); }
          }
          @keyframes icon-trail {
            0% { background: radial-gradient(circle, rgba(198, 167, 94, 0) 60%, rgba(198, 167, 94, 0.8) 100%); opacity: 0; }
            30% { background: radial-gradient(circle, rgba(198, 167, 94, 0) 40%, rgba(198, 167, 94, 0.8) 100%); opacity: 1; }
            70% { background: radial-gradient(circle, rgba(198, 167, 94, 0) 40%, rgba(198, 167, 94, 0.8) 100%); opacity: 1; }
            95% { background: radial-gradient(circle, rgba(198, 167, 94, 0) 60%, rgba(198, 167, 94, 0.8) 100%); opacity: 0; }
          }
        `}</style>
        <div className="max-w-[1440px] mx-auto px-20">
          <motion.h2
            className="text-4xl md:text-5xl text-center mb-16 text-[#F5F5F5]"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Why Clients Trust Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className={`trust-card ${isFooterInView ? 'active' : ''}`}>
                  <div className="trust-card-border"></div>
                  <div className="trust-card-content">
                    <div className="trust-card-icon-wrapper">
                      <feature.icon className="trust-card-icon" />
                      <span className="trust-card-trail"></span>
                    </div>
                    <h3
                      className="text-xl md:text-2xl mt-6 mb-3 text-[#F5F5F5]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-[#C6C6C6] leading-relaxed px-8 text-sm">{feature.description}</p>
                    <span className="trust-card-subtitle">{feature.subtitle}</span>
                  </div>
                  <span className="trust-card-bottom-text">trusted excellence</span>
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
    <section ref={ref} className="py-[120px] bg-[#0B0B0D] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C6A75E]/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-20 text-center relative z-10">
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