'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';

interface SlideData {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  imageUrl: string;
}

const slides: SlideData[] = [
  {
    title: 'Opulent Weddings',
    subtitle: 'Luxury Wedding Collection',
    description:
      'Where timeless romance meets unparalleled elegance — meticulously crafted celebrations that transform your special day into an extraordinary masterpiece of love and sophistication.',
    accent: '#C6A75E',
    imageUrl:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&h=1200&fit=crop&q=80',
  },
  {
    title: 'Executive Galas',
    subtitle: 'Corporate Excellence Series',
    description:
      'Prestigious corporate events designed to inspire and impress — seamless production, cutting-edge technology, and refined elegance that elevates your brand to extraordinary heights.',
    accent: '#8BA7B8',
    imageUrl:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=1200&fit=crop&q=80',
  },
  {
    title: 'Destination Luxury',
    subtitle: 'Exotic Celebration Series',
    description:
      'Breathtaking celebrations in the world\'s most stunning locations — from pristine beaches to historic estates, we orchestrate unforgettable journeys of elegance and wonder.',
    accent: '#7A9E7E',
    imageUrl:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&h=1200&fit=crop&q=80',
  },
  {
    title: 'Private Soirées',
    subtitle: 'Exclusive Milestone Collection',
    description:
      'Intimate celebrations crafted with extraordinary attention to detail — from lavish anniversaries to elegant birthday galas, every moment becomes a cherished memory of sophistication.',
    accent: '#D4A955',
    imageUrl:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&h=1200&fit=crop&q=80',
  },
];

export default function ElegantCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const SLIDE_DURATION = 6000;
  const TRANSITION_DURATION = 800;

  const goToSlide = useCallback(
    (index: number, dir?: 'next' | 'prev') => {
      if (isTransitioning || index === currentIndex) return;
      setDirection(dir || (index > currentIndex ? 'next' : 'prev'));
      setIsTransitioning(true);
      setProgress(0);

      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, TRANSITION_DURATION / 2);
    },
    [isTransitioning, currentIndex]
  );

  const goNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex, 'next');
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex, 'prev');
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    if (isPaused) return;

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    intervalRef.current = setInterval(() => {
      goNext();
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, isPaused, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="py-32 bg-[#0B0B0D] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        {/* Section Title */}
        <h2 className="text-center mb-20 uppercase">Featured Events</h2>
      </div>

      <div
        className="carousel-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background accent wash */}
        <div
          className="carousel-bg-wash"
          style={{
            background: `radial-gradient(ellipse at 70% 50%, ${currentSlide.accent}18 0%, transparent 70%)`,
          }}
        />

        <div className="carousel-inner">
          {/* Left: Text Content */}
          <div className="carousel-content">
            <div className="carousel-content-inner">
              {/* Collection number */}
              <div
                className={`carousel-collection-num ${isTransitioning ? 'transitioning' : 'visible'}`}
              >
                <span className="carousel-num-line" />
                <span className="carousel-num-text">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </span>
              </div>

              {/* Title */}
              <h2
                className={`carousel-title ${isTransitioning ? 'transitioning' : 'visible'}`}
              >
                {currentSlide.title}
              </h2>

              {/* Subtitle */}
              <p
                className={`carousel-subtitle ${isTransitioning ? 'transitioning' : 'visible'}`}
                style={{ color: currentSlide.accent }}
              >
                {currentSlide.subtitle}
              </p>

              {/* Description */}
              <p
                className={`carousel-description ${isTransitioning ? 'transitioning' : 'visible'}`}
              >
                {currentSlide.description}
              </p>

              {/* Navigation Arrows */}
              <div className="carousel-nav-arrows">
                <button
                  onClick={goPrev}
                  className="carousel-arrow-btn"
                  aria-label="Previous slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goNext}
                  className="carousel-arrow-btn"
                  aria-label="Next slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="carousel-image-container">
            <div
              className={`carousel-image-frame ${isTransitioning ? 'transitioning' : 'visible'}`}
            >
              <img
                src={currentSlide.imageUrl}
                alt={currentSlide.title}
                className="carousel-image"
              />
              <div
                className="carousel-image-overlay"
                style={{
                  background: `linear-gradient(135deg, ${currentSlide.accent}22 0%, transparent 50%)`,
                }}
              />
            </div>

            {/* Decorative frame corner */}
            <div className="carousel-frame-corner carousel-frame-corner--tl" style={{ borderColor: currentSlide.accent }} />
            <div className="carousel-frame-corner carousel-frame-corner--br" style={{ borderColor: currentSlide.accent }} />
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="carousel-progress-bar">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-progress-item ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="carousel-progress-label">{slide.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}