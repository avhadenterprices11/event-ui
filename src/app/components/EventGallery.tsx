import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExpandingArrow } from 'lucide-react'; // Let's just use standard image behavior, or a generic zoom icon. Actually, we will just rely on the hover text.

const galleryData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1712314947761-a8d718bd8c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwdmVudWV8ZW58MXx8fHwxNzcyNDM1NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Luxury Wedding Reception",
    title: "The Grand Reception",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1727931301188-55b23fa9672e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjBiYWxscm9vbSUyMHNldHVwfGVufDF8fHx8MTc3MjQzNTY1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Elegant Event Ballroom",
    title: "Elegant Ballroom",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1769812343316-c5b123243f0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZmxvcmFsJTIwY2VudGVycGllY2V8ZW58MXx8fHwxNzcyNDM1NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Luxury Floral Centerpiece",
    title: "Floral Artistry",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1766637837128-59a7677b155f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZXZlbnQlMjBsaWdodGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NzI0MzU2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Premium Event Lighting",
    title: "Ambient Production",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1770140304098-46700a5c45c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYWxhJTIwZGlubmVyJTIwdGFibGV8ZW58MXx8fHwxNzcyNDM1NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Luxury Gala Dinner",
    title: "Gala Dining",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1769812344337-ec16a1b7cef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwb3V0ZG9vciUyMHdlZGRpbmclMjBjZXJlbW9ueXxlbnwxfHx8fDE3NzI0MzU2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Elegant Outdoor Wedding",
    title: "Botanical Settings",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1764448473153-963e176d25a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHN0YWdlJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NzI0MzU2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Luxury Event Stage",
    title: "Stage Architecture",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1764380746818-18c01e96df12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNha2UlMjBkaXNwbGF5fGVufDF8fHx8MTc3MjQzNTY2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Elegant Wedding Cake",
    title: "Culinary Art",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1761499101631-92cde2434bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNlcmVtb255JTIwbHV4dXJ5JTIwdmVudWV8ZW58MXx8fHwxNzcyMjcwOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Ceremony Setup",
    title: "Ceremonial Perfection",
  },
];

export function EventGallery() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalImage(null);
    };
    if (modalImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [modalImage]);

  return (
    <section className="bg-[#0B0B0D] py-32 md:py-48 relative border-t border-white/5">
      
      {/* Title Section */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-20 text-center flex flex-col items-center">
         <span className="text-[#C6A75E] text-xs font-semibold tracking-[0.3em] uppercase block mb-6">
           Visual Portfolio
         </span>
         <h2 className="text-4xl md:text-5xl lg:text-7xl text-[#F5F5F5] font-light tracking-tight mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
           Our Masterpieces
         </h2>
         <p className="text-[#B8B8B8] font-light max-w-2xl text-base md:text-lg mx-auto">
           A carefully curated exhibition of our most majestic and visually arresting installations across the globe.
         </p>
      </div>

      {/* Proper Masonry Layout Array */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryData.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative cursor-pointer overflow-hidden rounded-[16px] break-inside-avoid bg-[#111114] inline-block w-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(198,167,94,0.15)]"
              onClick={() => setModalImage(img.src)}
            >
              {/* Image Base */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover opacity-90 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-100"
              />
              
              {/* Elegant Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Text Hover Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <span className="text-white text-xl md:text-2xl font-light tracking-wide block" style={{ fontFamily: 'var(--font-heading)' }}>
                  {img.title}
                </span>
                <div className="w-12 h-[2px] bg-[#C6A75E] mt-4" />
              </div>

              {/* Decorative Glass Border */}
              <div className="absolute inset-0 border border-white/10 rounded-[16px] pointer-events-none group-hover:border-[#C6A75E]/40 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cinematic Modal Experience */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#0B0B0D]/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-12 cursor-pointer"
            onClick={() => setModalImage(null)}
          >
            <button
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors p-4 z-50 text-xs tracking-widest uppercase flex items-center gap-2"
              onClick={(e) => { e.stopPropagation(); setModalImage(null); }}
            >
              <span>Close</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              src={modalImage}
              alt="Expanded view"
              className="max-w-full max-h-full w-auto h-auto object-contain cursor-default rounded-md shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
