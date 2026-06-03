import { useEffect, useRef } from 'react';

const timelineEvents = [
  {
    year: '2015',
    event: 'First Luxury Gala',
    description: 'Launched premier event management services',
  },
  {
    year: '2016',
    event: 'Royal Wedding',
    description: 'Orchestrated exclusive royal celebration',
  },
  {
    year: '2017',
    event: 'Fortune 500 Summit',
    description: 'Managed international corporate gathering',
  },
  {
    year: '2018',
    event: 'Celebrity Benefit',
    description: 'Produced star-studded charity event',
  },
  {
    year: '2019',
    event: 'Destination Excellence',
    description: 'Expanded to exotic venue experiences',
  },
  {
    year: '2020',
    event: 'Virtual Innovation',
    description: 'Pioneered hybrid luxury events',
  },
  {
    year: '2021',
    event: 'Global Expansion',
    description: 'Opened offices in 12 countries',
  },
  {
    year: '2022',
    event: 'Sustainability Award',
    description: 'Recognized for eco-luxury initiatives',
  },
  {
    year: '2023',
    event: 'Tech Integration',
    description: 'Launched AI-powered event planning',
  },
  {
    year: '2024',
    event: 'Metaverse Events',
    description: 'First luxury metaverse gala experience',
  },
  {
    year: '2025',
    event: 'Industry Leader',
    description: 'Named #1 luxury event management firm',
  },
  {
    year: '2026',
    event: 'Innovation Hub',
    description: 'Opened experiential design center',
  },
];

export function TimelineSection() {
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    function isElementInViewport(el: HTMLElement) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      itemsRef.current.forEach((item) => {
        if (!item) return;
        
        if (isElementInViewport(item)) {
          if (!item.classList.contains('in-view')) {
            item.classList.add('in-view');
          }
        } else if (item.classList.contains('in-view')) {
          item.classList.remove('in-view');
        }
      });
    }

    window.addEventListener('load', callbackFunc);
    window.addEventListener('scroll', callbackFunc);
    callbackFunc(); // Initial check

    return () => {
      window.removeEventListener('load', callbackFunc);
      window.removeEventListener('scroll', callbackFunc);
    };
  }, []);

  return (
    <section className="timeline-section bg-[#0B0B0D] py-24 overflow-hidden">
      <style>{`
        .timeline ul {
          padding: 50px 0;
        }

        .timeline ul li {
          list-style-type: none;
          position: relative;
          width: 6px;
          margin: 0 auto;
          padding-top: 50px;
          background: rgba(198, 167, 94, 0.3);
        }

        .timeline ul li::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%) rotate(45deg);
          width: 20px;
          height: 20px;
          z-index: 2;
          background: #C6A75E;
        }

        .timeline ul li div {
          position: relative;
          bottom: 0;
          width: 400px;
          padding: 30px;
          background: rgba(198, 167, 94, 0.05);
          border: 1px solid rgba(198, 167, 94, 0.2);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(10px);
        }

        .timeline ul li div time {
          position: absolute;
          background: #C6A75E;
          color: #0B0B0D;
          width: 80px;
          height: 35px;
          top: -17px;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          letter-spacing: 2px;
          font-weight: 600;
        }

        .timeline ul li div .event-title {
          margin-top: 15px;
          font-size: 1.5rem;
          font-family: 'Playfair Display', serif;
          color: #fff;
          margin-bottom: 8px;
        }

        .timeline ul li div .event-description {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .timeline ul li:nth-of-type(odd) > div {
          left: 45px;
        }

        .timeline ul li:nth-of-type(even) > div {
          left: -439px;
        }

        /* Animation */
        .timeline ul li div {
          visibility: hidden;
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline ul li:nth-of-type(odd) div {
          transform: translate3d(100px, -10px, 0) rotate(5deg);
        }

        .timeline ul li:nth-of-type(even) div {
          transform: translate3d(-100px, -10px, 0) rotate(-5deg);
        }

        .timeline ul li.in-view div {
          transform: none;
          visibility: visible;
          opacity: 1;
        }

        @media screen and (max-width: 900px) {
          .timeline ul li div {
            width: 300px;
          }

          .timeline ul li:nth-of-type(even) > div {
            left: -339px;
          }
        }

        @media screen and (max-width: 600px) {
          .timeline ul li {
            margin-left: 20px;
          }

          .timeline ul li div {
            width: calc(100vw - 91px);
          }

          .timeline ul li:nth-of-type(even) > div {
            left: 45px;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          Our Journey
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          A timeline of excellence, innovation, and unforgettable moments
        </p>
      </div>

      <div className="timeline">
        <ul>
          {timelineEvents.map((item, index) => (
            <li
              key={index}
              ref={(el) => { itemsRef.current[index] = el; }}
            >
              <div>
                <time>{item.year}</time>
                <h3 className="event-title">{item.event}</h3>
                <p className="event-description">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
