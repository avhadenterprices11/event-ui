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
    mainImage: 'https://images.unsplash.com/photo-1767986012154-db9a321c8832?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZGVjb3IlMjBmbG93ZXJzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIyNjQxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    overlayLeft: 'https://images.unsplash.com/photo-1767824122858-a2e0494b6077?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmbG9yYWwlMjBjZW50ZXJwaWVjZSUyMGdvbGR8ZW58MXx8fHwxNzcyMjY0MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    overlayRight: 'https://images.unsplash.com/photo-1571929711205-14aae07834ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYWxhJTIwZXZlbnQlMjBzdGFnZSUyMHNldHVwfGVufDF8fHx8MTc3MjI2NDE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    label: 'Corporate Events',
    title: 'Professional Excellence',
    subtitle: 'Elevating corporate gatherings with precision, prestige, and impeccable attention to detail.',
    mainImage: 'https://images.unsplash.com/photo-1768508950918-c87e2f544573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHZlbnVlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIyNjQxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    overlayLeft: 'https://images.unsplash.com/photo-1769018508631-fe4ebf3fba3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGxpZ2h0aW5nJTIwY2hhbmRlbGllcnxlbnwxfHx8fDE3NzIyNjQxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    overlayRight: 'https://images.unsplash.com/photo-1768777270882-9f74939fee50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBsYW5uaW5nJTIwZWxlZ2FudCUyMHRhYmxlJTIwZGVjb3J8ZW58MXx8fHwxNzcyMjY0MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    label: 'Destination Events',
    title: 'Extraordinary Experiences',
    subtitle: 'Curating breathtaking celebrations in the world\'s most exclusive destinations.',
    mainImage: 'https://images.unsplash.com/photo-1766910701111-9eee02328e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXN0aW5hdGlvbiUyMHdlZGRpbmclMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NzIyNjU2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    overlayLeft: 'https://images.unsplash.com/photo-1766910701111-9eee02328e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXN0aW5hdGlvbiUyMHdlZGRpbmclMjBiZWFjaCUyMHJlc29ydHxlbnwxfHx8fDE3NzIyNjQxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    overlayRight: 'https://images.unsplash.com/photo-1655114987600-74a7e03c9c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwbHV4dXJ5JTIwcGFydHklMjBjaGFtcGFnbmV8ZW58MXx8fHwxNzcyMjY0MTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    label: 'Private Celebrations',
    title: 'Exclusive Gatherings',
    subtitle: 'Designing intimate, luxurious celebrations with personalized sophistication.',
    mainImage: 'https://images.unsplash.com/photo-1766393195987-912865cbb81b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcml2YXRlJTIwcGFydHklMjB2ZW51ZXxlbnwxfHx8fDE3NzIyNjU2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    overlayLeft: 'https://images.unsplash.com/photo-1762918988304-97d4a5840a4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwZ29sZHxlbnwxfHx8fDE3NzIyNjQxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    overlayRight: 'https://images.unsplash.com/photo-1760740921490-017e5ce652e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBldmVudCUyMGV4cGVyaWVuY2UlMjB1bmlxdWV8ZW58MXx8fHwxNzcyMjY0MTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        height: '80vh',
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

              {/* Dark gradient overlays for readability and premium feel */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/70 via-[#0B0B0D]/50 to-[#0B0B0D]/80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/60 via-transparent to-[#0B0B0D]/60" />
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
              className="text-[#C6A75E] text-sm uppercase tracking-[0.3em] mb-6"
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
              className="text-[72px] leading-[1.1] mb-8 text-[#F5F5F5]"
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
              className="text-[#E0E0E0] text-xl leading-relaxed max-w-[700px] mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            >
              {slides[selectedIndex].subtitle}
            </motion.p>
          </AnimatePresence>

          {/* Decorative 3D gold element */}
          <motion.div
            className="mt-12 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-br from-[#C6A75E] to-[#E5C97A]"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
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
