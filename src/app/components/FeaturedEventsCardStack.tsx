import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowUpRight, MoveRight, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface EventItem {
  id: number;
  title: string;
  category: string;
  location: string;
  date: string;
  description: string;
  imageSrc: string;
  href: string;
}

const featuredEvents: EventItem[] = [
  {
    id: 1,
    title: "VILLA AURORA GALA",
    category: "Corporate Elegance",
    location: "Lake Como, Italy",
    date: "Autumn 2024",
    description: "An architectural symphony of light and shadows, redefining the essence of prestigious international gatherings.",
    imageSrc: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1080",
    href: "/events/wedding",
  },
  {
    id: 2,
    title: "NOIR ANNUAL SOIRÉE",
    category: "Elite Social",
    location: "Paris, France",
    date: "Winter 2024",
    description: "Immersive sensory mechanics and opulent design, capturing the timeless spirit of Parisian high-nightlife.",
    imageSrc: "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?auto=format&fit=crop&q=80&w=1080",
    href: "/events/corporate",
  },
  {
    id: 3,
    title: "THE SILK PAVILION",
    category: "Cultural Milestone",
    location: "Kyoto, Japan",
    date: "Spring 2024",
    description: "A delicate immersion into Japanese minimalism, where ancient traditions encounter the vanguard of luxury planning.",
    imageSrc: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1080",
    href: "/events/birthday-social",
  },
  {
    id: 4,
    title: "AZURE HORIZON",
    category: "Destination Wedding",
    location: "Santorini, Greece",
    date: "Summer 2024",
    description: "Breathtaking seaside curation, suspended between the cerulean infinity of the Mediterranean and volcanic stone.",
    imageSrc: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1080",
    href: "/events/destination",
  },
];

export function FeaturedEventsCardStack() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], isMobile ? ["0vw", "-400vw"] : ["0vw", "-280vw"]);
  
  const introOpacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0]);
  const introX = useTransform(scrollYProgress, [0.85, 0.95], ["0%", "-100%"]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#0B0B0D]">
      <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-hidden flex flex-col lg:flex-row items-start lg:items-center">
        
        <motion.div
          style={{ 
            opacity: introOpacity,
            x: isMobile ? 0 : introX,
          }}
          className="relative z-20 bg-[#0B0B0D]/95 backdrop-blur-md lg:bg-[#0B0B0D] border-b lg:border-b-0 lg:border-r border-white/5 shrink-0 w-full lg:w-[30vw] h-[25vh] lg:h-full flex flex-row lg:flex-col items-center lg:justify-center px-6 lg:px-12 xl:px-24"
        >
          <div className="flex flex-col justify-center h-full w-full">
             <div className="flex items-center gap-4 mb-4 lg:mb-8">
               <div className="w-8 h-[1px] bg-[#C6A75E]" />
               <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em]">Portfolio</span>
             </div>
             <h2 className="text-3xl lg:text-7xl font-light text-white tracking-tighter leading-[0.9] mb-4 lg:mb-12">
               THE <span className="italic font-serif text-[#C6A75E]">Excellence</span> <br />
               CHRONICLES.
             </h2>
             <p className="hidden lg:block text-[#A0A0A0] text-sm lg:text-base font-light max-w-xs leading-relaxed mb-12 opacity-60">
               A curated anthology of architectural symphonies and cinematic milestones across the globe.
             </p>
             <Link to="/events" className="hidden lg:flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#C6A75E] transition-all duration-500">
                   <MoveRight className="w-5 h-5 text-white group-hover:text-black transition-transform group-hover:translate-x-1" />
                </div>
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em]">Curated Series</span>
             </Link>
          </div>
        </motion.div>

        <motion.div
          style={{ x }}
          className="flex h-[75vh] lg:h-full items-center will-change-transform pl-0 lg:pl-[30vw]"
        >
          {featuredEvents.map((event, index) => (
            <EventSlide key={event.id} event={event} index={index} />
          ))}

          <div className="w-screen shrink-0 h-full flex flex-col justify-center relative bg-[#0B0B0D] border-l border-white/5 px-8 lg:px-20 overflow-hidden">
             <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-serif italic text-white whitespace-nowrap">
                   
                </div>
             </div>
             <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
             >
                <h2 className="text-[12vw] lg:text-[10vw] leading-[0.8] font-light tracking-tighter text-white">
                   SCROLL TO <br />
                   <span className="italic font-serif text-[#C6A75E]">Redefine</span> <br />
                   EVERYTHING.
                </h2>
                <div className="mt-12 flex items-center gap-6">
                   <span className="h-[1px] w-24 bg-white/20" />
                   <span className="text-lg lg:text-2xl font-light text-[#A0A0A0] italic">Explore Service Spectrum</span>
                </div>
             </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function EventSlide({ event, index }: { event: EventItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-screen lg:w-[55vw] shrink-0 h-full flex flex-col justify-center relative px-6 lg:px-20 border-r border-white/5 group overflow-hidden bg-[#0B0B0D]"
    >
      <div className="absolute top-4 right-4 lg:top-12 lg:right-12 pointer-events-none select-none opacity-[0.03] lg:opacity-[0.05]" aria-hidden="true">
        <span className="text-[10rem] lg:text-[25rem] font-serif italic leading-none text-white tracking-tighter">
          0{index + 1}
        </span>
      </div>

      <div className="relative z-10 flex flex-col gap-8 lg:gap-12">
         <div className="relative w-full aspect-[16/9] lg:aspect-[3/2] overflow-hidden lg:w-[32vw]">
            <motion.div
               animate={{ scale: isHovered ? 1.05 : 1 }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               className="w-full h-full"
            >
               <ImageWithFallback 
                  src={event.imageSrc}
                  alt={event.title}
                  className="w-full h-full object-cover brightness-[0.8] group-hover:brightness-100 transition-all duration-1000"
               />
            </motion.div>
            <div className="absolute inset-0 border border-white/10 group-hover:border-[#C6A75E]/30 transition-colors duration-700 pointer-events-none" />
         </div>

         <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-4 lg:mb-6">
               <span className="text-[#C6A75E] text-[10px] lg:text-xs font-bold uppercase tracking-[0.3em]">{event.category}</span>
               <div className="h-px w-8 bg-white/10" />
               <span className="text-[#A0A0A0] text-[10px] lg:text-xs font-light tracking-widest">{event.location}</span>
            </div>

            <h3 className="text-4xl lg:text-7xl font-light text-white mb-6 lg:mb-8 tracking-tighter leading-[0.95] group-hover:text-[#C6A75E] transition-colors duration-500">
              {event.title}
            </h3>

            <p className="text-[#A0A0A0] text-sm lg:text-base font-light leading-relaxed max-w-md opacity-60 group-hover:opacity-100 transition-opacity">
              {event.description}
            </p>
         </div>

         <Link to={event.href} className="flex items-center gap-3 text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.3em] group/link">
            READ NARRATIVE <MoveRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
         </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] lg:h-2 bg-gradient-to-r from-transparent via-[#C6A75E]/40 to-transparent lg:via-[#C6A75E] opacity-0 group-hover:opacity-100 transition-all duration-700" />
    </div>
  );
}
