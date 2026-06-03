import { motion } from 'motion/react';
import { Wifi, Car, Music, Coffee, Utensils, Video, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import mapImage from '@/assets/f2e73cf76092d3296f0d627e8861b130deab94ec.png';

const galleryImages = [
  'https://images.unsplash.com/photo-1640672246932-2f21e569d797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMGhvdGVsJTIwYmFsbHJvb20lMjB3ZWRkaW5nfGVufDF8fHx8MTc3MjI3Mjg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1722953062790-94d7b8e01fa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJkZW4lMjB2ZW51ZSUyMG91dGRvb3J8ZW58MXx8fHwxNzcyMjcyODcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1761110787206-2cc164e4913c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjBzcGFjZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MjI3Mjg3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
];

const amenities = [
  { icon: Wifi, label: 'High-Speed WiFi' },
  { icon: Car, label: 'Valet Parking' },
  { icon: Music, label: 'Premium Sound System' },
  { icon: Coffee, label: 'Catering Services' },
  { icon: Utensils, label: 'In-House Kitchen' },
  { icon: Video, label: 'AV Equipment' },
  { icon: Sparkles, label: 'Event Coordinator' },
];

export function VenueDetailPreview() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <section className="py-32 bg-[#111114]">
      <div className="max-w-[1440px] mx-auto px-24">
        <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
        >
              <p className="text-[#C6A75E] text-sm tracking-[0.2em] uppercase mb-4">
                Venue Details
              </p>
              <h2 className="text-4xl tracking-tight">
                Everything You Need to Know
              </h2>
        </motion.div>

        <div className="space-y-16">
          {/* Gallery Slider */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img
                src={galleryImages[currentImage]}
                alt={`Gallery ${currentImage + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/60 to-transparent" />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 justify-center">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative h-24 w-32 rounded-lg overflow-hidden transition-all ${
                    currentImage === index
                      ? 'ring-2 ring-[#C6A75E] scale-105'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Amenities Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0B0B0D] rounded-2xl p-12 border border-[#C6A75E]/20"
          >
            <h3 className="text-2xl tracking-tight mb-8 text-center">Premium Amenities</h3>
            <div className="grid grid-cols-4 gap-8">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col items-center text-center space-y-3 group"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C6A75E]/10 flex items-center justify-center group-hover:bg-[#C6A75E]/20 transition-colors">
                    <amenity.icon className="w-7 h-7 text-[#C6A75E]" />
                  </div>
                  <p className="text-sm text-gray-300">{amenity.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Width Location Map */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full px-6 mt-16"
      >
        <h3 className="text-2xl tracking-tight mb-8 text-center">Location</h3>
        
        {/* Interactive Map Container */}
        <div className="relative w-full max-w-[1600px] mx-auto rounded-3xl overflow-hidden">
          {/* Background Map Image with breathing animation */}
          <motion.img
            src={mapImage}
            alt="Venue Location Map"
            className="w-full h-auto block"
            animate={{ scale: [1, 1.015, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* District Labels */}
          {/* DISTRICT FUJIN - Top Left */}
          <div
            className="absolute left-[15%] top-[21%] -translate-x-1/2 -translate-y-1/2 z-10 text-[13px] tracking-[0.12em] uppercase font-semibold text-white/80 cursor-help select-none p-5 group font-mono"
          >
            DISTRICT FUJIN
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[120px] bg-[radial-gradient(circle,rgba(198,167,94,0.15),rgba(198,167,94,0)_70%)] opacity-0 transition-opacity duration-[250ms] ease-out -z-10 pointer-events-none group-hover:opacity-100" />
            <span className="absolute left-[10%] top-[110%] min-w-[220px] max-w-[280px] px-3 py-2.5 rounded-2xl bg-[rgba(10,10,10,0.85)] backdrop-blur-sm text-white/95 text-[11px] leading-[1.25] font-normal normal-case tracking-normal opacity-0 pointer-events-none transition-all duration-[180ms] ease-out z-[999] group-hover:opacity-100">
              <strong className="block text-[13px] mb-1 font-normal">Points d'intérêt</strong>
              <p className="m-0 opacity-80 font-sans">Sakagura-no-michi, China town, Mont Rokkōsan-Saikōhō, parc botanique, observatoire, plages, cimetière, habitations.</p>
            </span>
          </div>

          {/* DISTRICT KOYANE - Top Right */}
          <div
            className="absolute left-[75%] top-[21%] -translate-x-1/2 -translate-y-1/2 z-10 text-[13px] tracking-[0.12em] uppercase font-semibold text-white/80 cursor-help select-none p-5 group font-mono"
          >
            DISTRICT KOYANE
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[120px] bg-[radial-gradient(circle,rgba(198,167,94,0.15),rgba(198,167,94,0)_70%)] opacity-0 transition-opacity duration-[250ms] ease-out -z-10 pointer-events-none group-hover:opacity-100" />
            <span className="absolute left-[10%] top-[110%] min-w-[220px] max-w-[280px] px-3 py-2.5 rounded-2xl bg-[rgba(10,10,10,0.85)] backdrop-blur-sm text-white/95 text-[11px] leading-[1.25] font-normal normal-case tracking-normal opacity-0 pointer-events-none transition-all duration-[180ms] ease-out z-[999] group-hover:opacity-100">
              <strong className="block text-[13px] mb-1 font-normal">Points d'intérêt</strong>
              <p className="m-0 opacity-80 font-sans">Centre ville, hôpital, Amai Gakuen, musées, librairies, centre sportif, gare, cafés et habitations.</p>
            </span>
          </div>

          {/* DISTRICT INAZAMI - Left Center */}
          <div
            className="absolute left-[24%] top-[48%] -translate-x-1/2 -translate-y-1/2 z-10 text-[13px] tracking-[0.12em] uppercase font-semibold text-white/80 cursor-help select-none p-5 group font-mono"
          >
            DISTRICT INAZAMI
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[120px] bg-[radial-gradient(circle,rgba(198,167,94,0.15),rgba(198,167,94,0)_70%)] opacity-0 transition-opacity duration-[250ms] ease-out -z-10 pointer-events-none group-hover:opacity-100" />
            <span className="absolute left-[10%] top-[110%] min-w-[220px] max-w-[280px] px-3 py-2.5 rounded-2xl bg-[rgba(10,10,10,0.85)] backdrop-blur-sm text-white/95 text-[11px] leading-[1.25] font-normal normal-case tracking-normal opacity-0 pointer-events-none transition-all duration-[180ms] ease-out z-[999] group-hover:opacity-100">
              <strong className="block text-[13px] mb-1 font-normal">Points d'intérêt</strong>
              <p className="m-0 opacity-80 font-sans">Bars, bars à hôtesses, usines désaffectées, terrains vagues, ruelles, habitations.</p>
            </span>
          </div>

          {/* DISTRICT UZUME - Center */}
          <div
            className="absolute left-[50%] top-[66%] -translate-x-1/2 -translate-y-1/2 z-10 text-[13px] tracking-[0.12em] uppercase font-semibold text-white/80 cursor-help select-none p-5 group font-mono"
          >
            DISTRICT UZUME
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[120px] bg-[radial-gradient(circle,rgba(198,167,94,0.15),rgba(198,167,94,0)_70%)] opacity-0 transition-opacity duration-[250ms] ease-out -z-10 pointer-events-none group-hover:opacity-100" />
            <span className="absolute left-[10%] top-[110%] min-w-[220px] max-w-[280px] px-3 py-2.5 rounded-2xl bg-[rgba(10,10,10,0.85)] backdrop-blur-sm text-white/95 text-[11px] leading-[1.25] font-normal normal-case tracking-normal opacity-0 pointer-events-none transition-all duration-[180ms] ease-out z-[999] group-hover:opacity-100">
              <strong className="block text-[13px] mb-1 font-normal">Points d'intérêt</strong>
              <p className="m-0 opacity-80 font-sans">Place Kiku, boîtes de nuit, bars à cocktails, cinéma, théâtres, love hôtels, commissariats, rues Akai et habitations.</p>
            </span>
          </div>

          {/* DISTRICT INARI - Bottom Right */}
          <div
            className="absolute left-[78%] top-[72%] -translate-x-1/2 -translate-y-1/2 z-10 text-[13px] tracking-[0.12em] uppercase font-semibold text-white/80 cursor-help select-none p-5 group font-mono"
          >
            DISTRICT INARI
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[120px] bg-[radial-gradient(circle,rgba(198,167,94,0.15),rgba(198,167,94,0)_70%)] opacity-0 transition-opacity duration-[250ms] ease-out -z-10 pointer-events-none group-hover:opacity-100" />
            <span className="absolute left-[10%] top-[110%] min-w-[220px] max-w-[280px] px-3 py-2.5 rounded-2xl bg-[rgba(10,10,10,0.85)] backdrop-blur-sm text-white/95 text-[11px] leading-[1.25] font-normal normal-case tracking-normal opacity-0 pointer-events-none transition-all duration-[180ms] ease-out z-[999] group-hover:opacity-100">
              <strong className="block text-[13px] mb-1 font-normal">Points d'intérêt</strong>
              <p className="m-0 opacity-80 font-sans">Rues commerçantes, bars et izakayas, le jardin, le temple, place centrale et habitations.</p>
            </span>
          </div>

          {/* Hotspot Points */}
          {/* Red Hotspot - Left side */}
          <div className="absolute left-[28%] top-[59%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-20 cursor-crosshair group/hotspot">
            <div className="absolute inset-0 rounded-full bg-[rgb(255,90,80)] shadow-[0_0_8px_rgba(255,90,80,0.85),0_0_22px_rgba(255,90,80,0.45)] group-hover/hotspot:shadow-[0_0_12px_rgba(255,90,80,0.95),0_0_36px_rgba(255,90,80,0.55)]" />
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[rgba(255,90,80,0.22)] group-hover/hotspot:bg-[rgba(255,90,80,0.30)]"
              animate={{ width: [12, 90, 120], height: [12, 90, 120], opacity: [0.45, 0.14, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
            />
            <span className="absolute left-[18px] top-1/2 -translate-y-1/2 px-2.5 py-2 rounded-xl bg-[rgba(10,10,16,0.92)] border border-[rgba(255,90,80,0.18)] shadow-[0_10px_30px_rgba(0,0,0,0.45)] text-white/95 text-xs leading-[1.15] opacity-0 pointer-events-none transition-all duration-[180ms] ease-out whitespace-nowrap z-20 group-hover/hotspot:opacity-100 group-hover/hotspot:translate-x-1">
              <strong className="block font-semibold mb-0.5">Docks Est</strong>
              <em className="block not-italic opacity-75">Affrontement entre deux clans</em>
            </span>
          </div>

          {/* Blue Hotspot - Center top */}
          <div className="absolute left-[53%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-20 cursor-crosshair group/hotspot">
            <div className="absolute inset-0 rounded-full bg-[rgb(90,190,255)] shadow-[0_0_8px_rgba(90,190,255,0.85),0_0_22px_rgba(90,190,255,0.45)] group-hover/hotspot:shadow-[0_0_12px_rgba(90,190,255,0.95),0_0_36px_rgba(90,190,255,0.55)]" />
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[rgba(90,190,255,0.22)] group-hover/hotspot:bg-[rgba(90,190,255,0.30)]"
              animate={{ width: [12, 90, 120], height: [12, 90, 120], opacity: [0.45, 0.14, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
            />
            <span className="absolute left-[18px] top-1/2 -translate-y-1/2 px-2.5 py-2 rounded-xl bg-[rgba(10,10,16,0.92)] border border-[rgba(90,190,255,0.18)] shadow-[0_10px_30px_rgba(0,0,0,0.45)] text-white/95 text-xs leading-[1.15] opacity-0 pointer-events-none transition-all duration-[180ms] ease-out whitespace-nowrap z-20 group-hover/hotspot:opacity-100 group-hover/hotspot:translate-x-1">
              <strong className="block font-semibold mb-0.5">Gare centrale</strong>
              <em className="block not-italic opacity-75">Surveillance policière accrue</em>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Book Button */}
      <div className="max-w-[1440px] mx-auto px-24 mt-16">
        <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
        >
              <Link
                to="/quote"
                className="px-16 py-5 bg-gradient-to-r from-[#C6A75E] to-[#D4B76E] text-[#0B0B0D] rounded-lg text-lg font-medium hover:shadow-2xl hover:shadow-[#C6A75E]/30 transition-shadow"
              >
                Book This Venue
              </Link>
        </motion.div>
      </div>
    </section>
  );
}