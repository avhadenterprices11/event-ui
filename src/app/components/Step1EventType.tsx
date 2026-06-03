import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Step1Props {
  selectedType: string;
  onSelect: (type: string) => void;
}

const eventTypes = [
  {
    id: 'wedding',
    title: 'Wedding',
    subtitle: 'Timeless celebrations of love',
    image: 'https://images.unsplash.com/photo-1767986012138-d02276728368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjBlbGVnYW50fGVufDF8fHx8MTc3MjE3ODc5OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'corporate',
    title: 'Corporate',
    subtitle: 'Professional & impactful',
    image: 'https://images.unsplash.com/photo-1559223669-d7bb31d71f26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNvbmZlcmVuY2UlMjBwcmVtaXVtfGVufDF8fHx8MTc3MjI3NDkzOXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'birthday',
    title: 'Birthday & Social',
    subtitle: 'Joyful moments, elevated',
    image: 'https://images.unsplash.com/photo-1770460349343-04eecee0f45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwcGFydHklMjBlbGVnYW50fGVufDF8fHx8MTc3MjI2Njk3MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'destination',
    title: 'Destination',
    subtitle: 'Extraordinary locations',
    image: 'https://images.unsplash.com/photo-1766734866261-888879b71ea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXN0aW5hdGlvbiUyMGV2ZW50JTIwdHJvcGljYWwlMjBsdXh1cnl8ZW58MXx8fHwxNzcyMjc0OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Step1EventType({ selectedType, onSelect }: Step1Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-10"
    >
      {/* Section Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#C6A75E]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#C6A75E]">
            Step 01
          </span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#C6A75E]" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[32px] md:text-[40px] text-[#FAFAF8] font-light tracking-tight leading-[1.1]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          What Are We <i className="text-[#C6A75E]">Celebrating?</i>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-[#999] text-sm md:text-[15px] font-light max-w-md mx-auto leading-relaxed"
        >
          Choose the category that best describes your event
        </motion.p>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {eventTypes.map((type, index) => {
          const isSelected = selectedType === type.id;
          const isHovered = hoveredId === type.id;

          return (
            <motion.button
              key={type.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => onSelect(type.id)}
              onMouseEnter={() => setHoveredId(type.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative flex flex-col rounded-2xl overflow-hidden cursor-pointer outline-none group"
              style={{
                background: isSelected
                  ? 'linear-gradient(165deg, rgba(198,167,94,0.12) 0%, rgba(198,167,94,0.04) 100%)'
                  : 'rgba(255,255,255,0.03)',
                border: isSelected
                  ? '1.5px solid rgba(198,167,94,0.5)'
                  : '1.5px solid rgba(255,255,255,0.06)',
                transition: 'border-color 0.4s ease, background 0.4s ease, box-shadow 0.4s ease',
                boxShadow: isSelected
                  ? '0 8px 40px rgba(198,167,94,0.12), 0 0 0 1px rgba(198,167,94,0.1)'
                  : isHovered
                    ? '0 12px 40px rgba(0,0,0,0.3)'
                    : '0 2px 12px rgba(0,0,0,0.15)',
              }}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: isHovered || isSelected ? 1.06 : 1,
                  }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ImageWithFallback
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Soft gradient overlays */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: isSelected
                      ? 'linear-gradient(180deg, transparent 30%, rgba(198,167,94,0.08) 100%)'
                      : 'linear-gradient(180deg, transparent 50%, rgba(11,11,13,0.5) 100%)',
                    transition: 'background 0.4s ease',
                  }}
                />

                {/* Top shimmer on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 40%)',
                  }}
                />

                {/* Selected Indicator */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      className="absolute top-3 right-3 z-10"
                    >
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, #C6A75E 0%, #E5C97A 100%)',
                          boxShadow: '0 2px 12px rgba(198,167,94,0.4)',
                        }}
                      >
                        <motion.svg
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="w-3.5 h-3.5 text-[#0B0B0D]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.35, delay: 0.1 }}
                          />
                        </motion.svg>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Text Content */}
              <div className="px-4 py-4 text-left">
                <motion.h3
                  className="text-[15px] md:text-base font-medium tracking-tight leading-snug"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: isSelected ? '#C6A75E' : '#F5F5F5',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {type.title}
                </motion.h3>
                <p
                  className="text-[11px] md:text-xs mt-1 font-light tracking-wide leading-relaxed"
                  style={{
                    color: isSelected ? 'rgba(198,167,94,0.7)' : 'rgba(255,255,255,0.35)',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {type.subtitle}
                </p>
              </div>

              {/* Bottom accent line for selected */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isSelected ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: 'linear-gradient(90deg, transparent, #C6A75E, transparent)',
                  transformOrigin: 'center',
                }}
              />
            </motion.button>
          );
        })}
      </div>

      {/* Selection feedback */}
      <AnimatePresence>
        {selectedType && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-2.5 pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]" />
            <span className="text-xs font-light tracking-wider text-[#999]">
              <span className="text-[#C6A75E] font-medium">
                {eventTypes.find((t) => t.id === selectedType)?.title}
              </span>
              {' '}selected — continue to next step
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
