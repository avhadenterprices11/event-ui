import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LuxuryEventGallery } from './LuxuryEventGallery';

gsap.registerPlugin(ScrollTrigger);

export function ScrollAnimatedHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animeCardRef = useRef<HTMLDivElement>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {
    const animeCard = animeCardRef.current;
    if (!animeCard) return;

    const ctx = gsap.context(() => {
      // Initial loader animation
      gsap.set(animeCard, {
        rotationY: 90,
        top: '50%',
        left: '50%',
        xPercent: -50,
        yPercent: -50,
        width: '40vh',
        height: '40vh',
        scale: 1,
      });

      // Main card wrapper position
      gsap.set('.anime-card', { x: '50%', y: '50%' });

      // Loader to scale
      const tl = gsap.timeline();
      tl.to(animeCard, {
        rotationY: 0,
        ease: 'expo.in',
        duration: 2.5,
        scale: 1,
        width: '100vw',
        height: '100vh',
      });

      // Banner one image scale down
      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.banner',
          start: 'center center',
          end: '+=600',
          scrub: 1,
        },
      });

      const windowWidth = window.innerWidth;
      if (windowWidth >= 1200 && windowWidth <= 1499) {
        t2.to(animeCard, {
          height: '60vh',
          width: '472.5px',
          left: 'calc(243.75px + (50% - 585px) + 682.5px)',
        });
      } else if (windowWidth >= 992 && windowWidth <= 1199) {
        t2.to(animeCard, {
          height: '60vh',
          width: '465px',
          left: 'calc(240px + (50% - 480px) + 480px)',
        });
      } else if (windowWidth >= 768 && windowWidth <= 991) {
        t2.to(animeCard, {
          height: '60vh',
          width: '345px',
          left: 'calc(180px + (50% - 360px) + 360px)',
        });
      } else if (windowWidth <= 767) {
        t2.to(animeCard, {
          height: 'calc(100vh - 340px)',
          width: '95%',
          left: '50%',
          top: 'calc(100% - 40px)',
          yPercent: -100,
        });
      } else {
        t2.to(animeCard, {
          height: '60vh',
          width: '535px',
          left: 'calc(275px + (50% - 660px) + 770px)',
        });
      }

      // Main wallpaper fade
      gsap.to('.main-wallpaper', {
        opacity: 0,
        scrollTrigger: {
          trigger: '.banner',
          start: 'center+=100 center',
          end: 'bottom center',
          scrub: 1,
        },
      });

      // Banner text animation
      gsap.set('.banner-content', { opacity: 0, yPercent: 50 });
      gsap.to('.banner-content', {
        ease: 'linear',
        yPercent: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.banner',
          start: 'center+=300 center',
          end: '+=200',
          scrub: 1,
        },
      });

      // Banner animation pin
      gsap.to('.banner', {
        ease: 'linear',
        scrollTrigger: {
          trigger: '.banner',
          start: 'center center',
          end: '+=600',
          pin: true,
          pinSpacing: true,
          scrub: 1,
        },
      });

      // Banner two animation pin
      gsap.to('.banner-two', {
        ease: 'linear',
        scrollTrigger: {
          trigger: '.banner-two',
          start: 'center center',
          end: '+=600',
          pin: true,
          pinSpacing: true,
          scrub: 1,
        },
      });

      // Banner two image rotation
      const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: '.banner-two',
          start: 'top center',
          end: '+=600',
          scrub: 1,
        },
      });

      if (windowWidth <= 767) {
        t3.to(animeCard, {
          rotationY: -180,
          height: '100vh',
          width: '100vw',
          left: '50%',
          top: '50%',
          yPercent: -50,
        });
      } else {
        t3.to(animeCard, {
          rotationY: -180,
          height: '100vh',
          width: '100vw',
          left: '50%',
        });
      }

      // Banner two text animation
      gsap.set('.banner-two-content', { opacity: 0, yPercent: 50 });
      gsap.to('.banner-two-content', {
        ease: 'linear',
        yPercent: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.banner-two',
          start: 'center+=300 center',
          end: '+=200',
          scrub: 1,
        },
      });

      // Banner three animation pin
      gsap.to('.banner-three', {
        ease: 'linear',
        scrollTrigger: {
          trigger: '.banner-three',
          start: 'center center',
          end: '+=600',
          pin: true,
          pinSpacing: true,
          scrub: 1,
        },
      });

      // Banner three image rotation
      const t4 = gsap.timeline({
        scrollTrigger: {
          trigger: '.banner-three',
          start: 'top center',
          end: '+=600',
          scrub: 1,
        },
      });

      if (windowWidth >= 1200 && windowWidth <= 1499) {
        t4.to(animeCard, {
          rotationY: -360,
          height: '60vh',
          width: '472.5px',
          left: 'calc((50% - 585px) + 243.75px)',
        });
      } else if (windowWidth >= 992 && windowWidth <= 1199) {
        t4.to(animeCard, {
          rotationY: -360,
          height: '60vh',
          width: '465px',
          left: 'calc((50% - 465px) + 240px)',
        });
      } else if (windowWidth >= 768 && windowWidth <= 991) {
        t4.to(animeCard, {
          rotationY: -360,
          height: '60vh',
          width: '345px',
          left: 'calc((50% - 360px) + 180px)',
        });
      } else if (windowWidth <= 767) {
        t4.to(animeCard, {
          rotationY: -360,
          height: 'calc(100vh - 340px)',
          width: '95%',
          left: '50%',
          top: 'calc(100% - 40px)',
          yPercent: -100,
        });
      } else {
        t4.to(animeCard, {
          rotationY: -360,
          height: '60vh',
          width: '535px',
          left: 'calc((50% - 660px) + 275px)',
        });
      }

      // Banner three text animation
      gsap.set('.banner-three-content', { opacity: 0, yPercent: 50 });
      gsap.to('.banner-three-content', {
        ease: 'linear',
        yPercent: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.banner-three',
          start: 'center+=300 center',
          end: '+=200',
          scrub: 1,
        },
      });

      // Banner four animation pin
      gsap.to('.banner-four', {
        ease: 'linear',
        scrollTrigger: {
          trigger: '.banner-four',
          start: 'center center',
          end: '+=600',
          pin: true,
          pinSpacing: true,
          scrub: 1,
        },
      });

      // Banner four image rotation
      const t5 = gsap.timeline({
        scrollTrigger: {
          trigger: '.banner-four',
          start: 'top center',
          end: '+=600',
          scrub: 1,
        },
      });

      if (windowWidth <= 767) {
        t5.to(animeCard, {
          rotationY: -180,
          height: '100vh',
          width: '100vw',
          left: '50%',
          top: '50%',
          yPercent: -50,
        });
      } else {
        t5.to(animeCard, {
          rotationY: -180,
          height: '100vh',
          width: '100vw',
          left: '50%',
        });
      }

      // Main wrapper card pin
      gsap.to('.anime-card', {
        ease: 'linear',
        scrollTrigger: {
          trigger: '.anime-card',
          start: 'top top',
          end: 'top bottom',
          endTrigger: '.slider-card',
          pin: true,
          pinSpacing: false,
          scrub: 1,
        },
      });

      // Slider card pin
      gsap.to('.slider-card', {
        ease: 'linear',
        scrollTrigger: {
          trigger: '.slider-card',
          start: 'center center',
          end: '+=1000',
          pin: true,
          pinSpacing: true,
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Anime Card Wrapper */}
      <div className="anime-card fixed -translate-x-1/2 -translate-y-1/2 z-0" style={{ perspective: '1000px', width: '100vw', height: '100vh' }}>
        <div ref={animeCardRef} className="anime-card-inner absolute" style={{ transformStyle: 'preserve-3d', minHeight: '348px' }}>
          {/* Main Wallpaper */}
          <div className="main-wallpaper absolute top-0 left-0 w-full h-full z-[2]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1767986012138-d02276728368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjBlbGVnYW50fGVufDF8fHx8MTc3MjE3ODc5OXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="main-wallpaper"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" />
          </div>

          {/* Front Card Face */}
          <div
            className="anime-card-front absolute top-0 left-0 w-full h-full"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1767986012138-d02276728368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjBlbGVnYW50fGVufDF8fHx8MTc3MjE3ODc5OXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="wedding"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" />
          </div>

          {/* Back Card Face */}
          <div
            className="anime-card-back absolute top-0 left-0 w-full h-full"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1766722906733-609eebf3b63a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnYWxhJTIwZXZlbnQlMjBzdGFnZXxlbnwxfHx8fDE3NzIxNzg4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="corporate"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" />
          </div>
        </div>
      </div>

      {/* Banner 1 - Wedding Events */}
      <div className="banner h-screen relative">
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-full pointer-events-auto">
            <div className="banner-content text-center px-6">
              <h2 className="uppercase mb-5">Luxury Wedding Events</h2>
              <p className="hidden md:block text-[22px] leading-8 max-w-3xl mx-auto">
                Transform your special day into an unforgettable celebration of love and elegance. 
                Our luxury wedding services encompass every detail, from stunning floral arrangements 
                to breathtaking venue transformations. We craft extraordinary experiences that reflect 
                your unique love story, ensuring every moment is filled with beauty, sophistication, 
                and timeless memories.
              </p>
              <p className="block md:hidden text-[22px] leading-8 max-w-3xl mx-auto">
                Transform your special day into an unforgettable celebration of love and elegance. 
                Our luxury wedding services encompass every detail from floral to venue design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Banner 2 - Corporate Events */}
      <div className="banner-two h-screen relative">
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-full pointer-events-auto">
            <div className="banner-two-content text-center px-6">
              <h2 className="uppercase mb-5">Corporate Gala Events</h2>
              <p className="text-[22px] leading-8 max-w-3xl mx-auto">
                Elevate your corporate gatherings with sophisticated event experiences that inspire and impress. 
                From high-profile galas to executive conferences, we deliver seamless production with cutting-edge 
                technology, elegant design, and impeccable service. Create lasting impressions that strengthen 
                relationships and celebrate your brand's achievements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Banner 3 - Destination Events */}
      <div className="banner-three h-screen relative">
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-full pointer-events-auto">
            <div className="banner-three-content text-center px-6">
              <h2 className="uppercase mb-5">Destination Celebrations</h2>
              <p className="hidden md:block text-[22px] leading-8 max-w-3xl mx-auto">
                Experience the magic of celebrating in the world's most stunning locations. Our destination 
                event services bring luxury and sophistication to exotic beachfronts, historic estates, and 
                breathtaking landscapes. We handle every logistical detail, allowing you and your guests to 
                fully immerse in an unforgettable journey of celebration.
              </p>
              <p className="block md:hidden text-[22px] leading-8 max-w-3xl mx-auto">
                Experience the magic of celebrating in the world's most stunning locations. Our destination 
                event services bring luxury to exotic beachfronts and historic estates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Banner 4 - Private Celebrations */}
      <div className="banner-four h-screen relative">
      </div>

      {/* Slider Card Section */}
      <div className="slider-card h-screen flex flex-col justify-center relative">
        <h2 className="text-center mb-[60px] uppercase">Luxury Event Gallery</h2>
        <LuxuryEventGallery />
      </div>
    </div>
  );
}