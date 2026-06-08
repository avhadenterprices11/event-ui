import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import useEmblaCarousel from 'embla-carousel-react';

const slides = [
  {
    id: 1,
    label: 'Wedding Events',
    title: 'Timeless Celebrations',
    subtitle: 'Creating unforgettable moments with elegance, sophistication, and flawless execution.',
    mainImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000',
    overlayLeft: 'https://images.unsplash.com/photo-1465495976222-4a7b7389ab4e?auto=format&fit=crop&q=80&w=1000',
    overlayRight: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 2,
    label: 'Corporate Events',
    title: 'Professional Excellence',
    subtitle: 'Elevating corporate gatherings with precision, prestige, and impeccable attention to detail.',
    mainImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2000',
    overlayLeft: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1000',
    overlayRight: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 3,
    label: 'Destination Events',
    title: 'Extraordinary Experiences',
    subtitle: 'Curating breathtaking celebrations in the world\'s most exclusive destinations.',
    mainImage: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=2000',
    overlayLeft: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000',
    overlayRight: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 4,
    label: 'Private Celebrations',
    title: 'Exclusive Gatherings',
    subtitle: 'Designing intimate, luxurious celebrations with personalized sophistication.',
    mainImage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=2000',
    overlayLeft: 'https://images.unsplash.com/photo-1530103862676-de30951f28b2?auto=format&fit=crop&q=80&w=1000',
    overlayRight: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000',
  },
];

export function ServicesHeroBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        height: '70vh',
      }}
    >
      {/* Carousel Container */}
      <div className="embla absolute inset-0" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {slides.map((slide, index) => (
            <div key={slide.id} className="embla__slide flex-[0_0_100%] min-w-0 relative">
              {/* Full-width main background image with parallax */}
              <motion.div
                className="absolute inset-0"
                style={{ y: index === selectedIndex ? y : 0 }}
              >
                <ImageWithFallback
                  src={slide.mainImage}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Premium layered background images */}
              <div className="absolute inset-0">
                {/* Left side luxury decor overlay */}
                <motion.div
                  className="absolute left-0 top-0 w-1/3 h-full opacity-20"
                  animate={{
                    opacity: [0.15, 0.25, 0.15],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <ImageWithFallback
                    src={slide.overlayLeft}
                    alt="Luxury event decor"
                    className="w-full h-full object-cover"
                    style={{
                      mixBlendMode: 'soft-light',
                    }}
                  />
                </motion.div>

                {/* Right side celebration venue overlay */}
                <motion.div
                  className="absolute right-0 top-0 w-1/3 h-full opacity-15"
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                >
                  <ImageWithFallback
                    src={slide.overlayRight}
                    alt="Premium celebration venue"
                    className="w-full h-full object-cover"
                    style={{
                      mixBlendMode: 'overlay',
                    }}
                  />
                </motion.div>
              </div>

              {/* Dark gradient overlays removed to show images clearly */}
            </div>
          ))}
        </div>
      </div>

      {/* Subtle gold glow accents */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C6A75E]/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#E5C97A]/15 blur-[180px] rounded-full" />
      </div>

      {/* Floating gold particles for atmosphere */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#C6A75E] rounded-full"
            style={{
              left: `${5 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
              filter: 'blur(0.5px)',
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Main Content - Centered Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          className="text-center px-20 max-w-[1200px]"
          style={{ opacity: textOpacity }}
        >
          {/* Breadcrumb */}
          <motion.div
            className="text-sm text-[#C6C6C6] mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Home / Services
          </motion.div>

          {/* Animated Label */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              className="text-[#C6A75E] text-sm uppercase tracking-[0.3em] mb-6 drop-shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {slides[selectedIndex].label}
            </motion.div>
          </AnimatePresence>

          {/* Animated Main Heading */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${selectedIndex}`}
              className="text-[72px] leading-[1.1] mb-8 text-[#F5F5F5] drop-shadow-lg"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {slides[selectedIndex].title}
            </motion.h1>
          </AnimatePresence>

          {/* Gold underline - centered */}
          <motion.div
            className="w-[100px] h-[2px] bg-[#C6A75E] mb-8 mx-auto"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          />

          {/* Animated Subtext */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${selectedIndex}`}
              className="text-[#E0E0E0] text-xl leading-relaxed max-w-[700px] mx-auto drop-shadow-md font-medium"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            >
              {slides[selectedIndex].subtitle}
            </motion.p>
          </AnimatePresence>

        </motion.div>
      </div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === selectedIndex
                  ? 'bg-[#C6A75E] w-8'
                  : 'bg-[#C6A75E]/30 hover:bg-[#C6A75E]/50'
              }`}
            />
            {index === selectedIndex && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: '0 0 15px rgba(198, 167, 94, 0.6)',
                }}
                layoutId="activeDot"
              />
            )}
          </button>
        ))}
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0D] to-transparent pointer-events-none" />
    </section>
  );
}
