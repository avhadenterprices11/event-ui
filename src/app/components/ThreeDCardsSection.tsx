import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    title: 'Corporate Events',
    description: 'Elevate your brand with meticulously crafted corporate gatherings that inspire and engage',
    icon: '🏢',
    accent: '#C6A75E',
  },
  {
    title: 'Luxury Weddings',
    description: 'Transform your special day into an unforgettable celebration of love and elegance',
    icon: '💍',
    accent: '#C6A75E',
  },
  {
    title: 'Private Galas',
    description: 'Experience sophistication with exclusive events designed to captivate and delight',
    icon: '✨',
    accent: '#C6A75E',
  },
  {
    title: 'Destination Events',
    description: 'Create extraordinary memories in breathtaking locations around the world',
    icon: '🌍',
    accent: '#C6A75E',
  },
];

export default function ThreeDCardsSection() {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!cardsContainerRef.current || cardsRef.current.length === 0) return;

    const cards = cardsRef.current.filter(Boolean);

    gsap.from(cards, {
      rotationX: -25,
      rotationY: 10,
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.12,
      ease: 'power4.out',
      transformPerspective: 1000,
      scrollTrigger: {
        trigger: cardsContainerRef.current,
        start: 'top 80%',
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="bg-[#0B0B0D] py-24 px-4 overflow-hidden">
      <style>{`
        .cards-container {
          perspective: 2000px;
        }

        .card {
          transform-style: preserve-3d;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card:hover {
          transform: translateY(-10px) rotateX(5deg) rotateY(-5deg);
        }

        .card-inner {
          background: rgba(198, 167, 94, 0.03);
          border: 1px solid rgba(198, 167, 94, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 40px;
          height: 100%;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .card:hover .card-inner {
          border-color: rgba(198, 167, 94, 0.4);
          background: rgba(198, 167, 94, 0.05);
          box-shadow: 0 20px 60px rgba(198, 167, 94, 0.15);
        }

        .card-icon {
          font-size: 4rem;
          margin-bottom: 24px;
          display: block;
          filter: grayscale(0.3);
          transition: all 0.4s ease;
        }

        .card:hover .card-icon {
          filter: grayscale(0);
          transform: scale(1.1);
        }

        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: #fff;
          margin-bottom: 16px;
          transition: color 0.3s ease;
        }

        .card:hover .card-title {
          color: #C6A75E;
        }

        .card-description {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
          line-height: 1.7;
        }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(198, 167, 94, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .card:hover .card-glow {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .card {
            margin-bottom: 24px;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          Our Expertise
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Discover our premium event management services crafted for excellence
        </p>
      </div>

      <div
        ref={cardsContainerRef}
        className="cards-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="card"
          >
            <div className="card-inner">
              <div className="card-glow" />
              <span className="card-icon">{card.icon}</span>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
