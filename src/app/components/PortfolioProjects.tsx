import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router';

const projects = [
  {
    index: '01',
    title: 'LUXURY WEDDINGS',
    category: 'Bespoke Ceremonies & Receptions',
    image: 'https://images.unsplash.com/photo-1767986012138-d02276728368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjBlbGVnYW50fGVufDF8fHx8MTc3MzM4Mjc4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'wedding'
  },
  {
    index: '02',
    title: 'CORPORATE EVENTS',
    category: 'Conferences & Brand Activations',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBldmVudHxlbnwxfHx8fDE3NzMzOTE5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'corporate'
  },
  {
    index: '03',
    title: 'PRIVATE GALAS',
    category: 'Exclusive Celebrations & Soirées',
    image: 'https://images.unsplash.com/photo-1768508950719-4d76978fdf44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZ2FsYSUyMGRpbm5lciUyMHBhcnR5fGVufDF8fHx8MTc3MzM5MTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'birthday-social'
  },
  {
    index: '04',
    title: 'DESTINATION EVENTS',
    category: 'International Luxury Experiences',
    image: 'https://images.unsplash.com/photo-1766734866261-888879b71ea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXN0aW5hdGlvbiUyMGV2ZW50JTIwdHJvcGljYWwlMjBsdXh1cnl8ZW58MXx8fHwxNzczMzkxOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'destination'
  }
];

export function PortfolioProjects() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const revealImgRef = useRef<HTMLImageElement>(null);
  const quickToRefs = useRef<{
    xTo: (v: number) => void;
    yTo: (v: number) => void;
    rotateTo: (v: number) => void;
    skewTo: (v: number) => void;
  } | null>(null);

  useEffect(() => {
    const reveal = revealRef.current;
    if (!reveal) return;

    const ctx = gsap.context(() => {
      quickToRefs.current = {
        xTo: gsap.quickTo(reveal, "x", { duration: 0.6, ease: "power3.out" }),
        yTo: gsap.quickTo(reveal, "y", { duration: 0.6, ease: "power3.out" }),
        rotateTo: gsap.quickTo(reveal, "rotation", { duration: 0.6, ease: "power3.out" }),
        skewTo: gsap.quickTo(reveal, "skewX", { duration: 0.6, ease: "power3.out" }),
      };

      let lastX = 0;
      const handleMouseMove = (e: MouseEvent) => {
        if (!quickToRefs.current) return;
        const { clientX, clientY } = e;
        const x = clientX - 190;
        const y = clientY - 240;
        
        const velocity = clientX - lastX;
        lastX = clientX;
        
        quickToRefs.current.xTo(x);
        quickToRefs.current.yTo(y);
        quickToRefs.current.rotateTo(gsap.utils.clamp(-12, 12, velocity * 0.4));
        quickToRefs.current.skewTo(gsap.utils.clamp(-8, 8, velocity * 0.2));
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    });

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (imgUrl: string) => {
    const reveal = revealRef.current;
    const revealImg = revealImgRef.current;
    if (!reveal || !revealImg) return;

    revealImg.src = imgUrl;
    gsap.set(reveal, { visibility: 'visible' });
    
    gsap.fromTo(reveal, 
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "expo.out" }
    );

    gsap.fromTo(revealImg,
      { scale: 1.8, filter: 'blur(20px)' },
      { scale: 1, filter: 'blur(0px)', duration: 1.2, ease: "expo.out" }
    );
  };

  const handleMouseLeave = () => {
    const reveal = revealRef.current;
    const revealImg = revealImgRef.current;
    if (!reveal || !revealImg) return;

    gsap.to(reveal, {
      opacity: 0,
      scale: 0.5,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        gsap.set(reveal, { visibility: 'hidden' });
        revealImg.src = '';
      }
    });
  };

  const handleProjectClick = (slug: string) => {
    navigate(`/events/${slug}`);
  };

  return (
    <section className="portfolio-projects-section bg-[#0B0B0D] relative">
      <style>{`
        .project-list {
          padding: 40px 0 100px;
          display: flex;
          flex-direction: column;
        }

        .project-item {
          position: relative;
          padding: 60px 60px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 2;
          cursor: pointer;
        }

        .project-item:last-child {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .project-item:hover {
          background: rgba(255, 255, 255, 0.03);
        }

        .project-item:hover .project-title {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
          transform: translateX(30px);
        }

        .project-item:hover .project-arrow {
          transform: rotate(-45deg) scale(1.2);
          color: #C6A75E;
        }

        .project-item:hover .project-index {
          color: #C6A75E;
          transform: scale(1.1);
        }

        .project-index {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.2);
          margin-right: 60px;
          transition: all 0.4s ease;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }

        .project-info {
          flex-grow: 1;
        }

        .project-title {
          font-size: 6vw;
          margin: 0;
          text-transform: uppercase;
          font-weight: 900;
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          letter-spacing: -0.02em;
          font-family: 'Playfair Display', serif;
          line-height: 1;
          color: #fff;
        }

        .project-category {
          margin: 12px 0 0 0;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-family: 'Inter', sans-serif;
          transition: all 0.4s ease;
        }

        .project-item:hover .project-category {
          color: rgba(255, 255, 255, 0.7);
          transform: translateX(30px);
        }

        .project-arrow {
          font-size: 2.5rem;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          color: rgba(255, 255, 255, 0.2);
          font-weight: 200;
        }

        .hover-reveal {
          position: fixed;
          top: 0;
          left: 0;
          width: 380px;
          height: 480px;
          pointer-events: none;
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          will-change: transform;
        }

        .reveal-inner {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
          border-radius: 12px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
        }

        .reveal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.1);
        }

        @media (max-width: 1024px) {
           .project-title {
            font-size: 8vw;
          }
        }

        @media (max-width: 768px) {
          .hover-reveal {
            display: none;
          }

          .project-item {
            padding: 40px 24px;
            flex-direction: column;
            align-items: flex-start;
          }
          
          .project-index {
            margin-right: 0;
            margin-bottom: 12px;
            font-size: 0.85rem;
          }

          .project-info {
            width: 100%;
            max-width: 100%;
          }

          .project-title {
            font-size: 8.5vw;
            white-space: normal;
            word-wrap: break-word;
            line-height: 1.1;
          }

          .project-category {
            font-size: 0.75rem;
            margin-top: 8px;
          }
          
          .project-arrow {
            display: none;
          }
          
          .project-item:hover .project-title {
            transform: none;
          }
          .project-item:hover .project-category {
            transform: none;
          }

          .project-mobile-img-container {
            display: block;
            width: 100%;
            height: 250px;
            margin-top: 24px;
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          }

          .project-mobile-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      `}</style>

      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-6 md:px-[60px] pt-[80px] pb-[20px]">
        <h2 className="text-4xl md:text-7xl mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#fff' }}>
          Our Services
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl">
          Discover our curated collection of luxury event experiences
        </p>
      </div>

      {/* Project List */}
      <div className="project-list" ref={containerRef}>
        {projects.map((project, index) => (
          <div
            key={project.index}
            className="project-item"
            data-img={project.image}
            onMouseEnter={() => handleMouseEnter(project.image)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleProjectClick(project.slug)}
          >
            <span className="project-index">{project.index}</span>
            <div className="project-info w-full">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-category">{project.category}</p>
              
              {/* Mobile Image */}
              <div className="project-mobile-img-container">
                <img src={project.image} alt={project.title} className="project-mobile-img" />
                <div className="absolute inset-0 border border-white/10 rounded-[12px] pointer-events-none mix-blend-overlay" />
              </div>
            </div>
            <div className="project-arrow">→</div>
          </div>
        ))}
      </div>

      {/* Hover Reveal */}
      <div ref={revealRef} className="hover-reveal">
        <div className="reveal-inner">
          <img ref={revealImgRef} src="" className="reveal-img" alt="Project Preview" />
        </div>
      </div>
    </section>
  );
}