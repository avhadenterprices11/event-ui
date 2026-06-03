import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, Send } from 'lucide-react';

const eventTypes = [
  'Wedding & Celebration',
  'Corporate Gala',
  'Private Party',
  'Product Launch',
  'Fashion Show',
  'Charity Event',
  'Other',
];

export function ServicesGetQuote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      className="relative py-[80px] bg-[#111114] overflow-hidden"
    >
      {/* Atmospheric radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-20"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(198, 167, 94, 0.3) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(198, 167, 94, 0.4) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-[#C6A75E]" />
              <span className="text-[#C6A75E] text-xs font-bold uppercase tracking-[0.4em]">
                Request a Quote
              </span>
            </div>
            <h2
              className="text-[38px] md:text-[48px] lg:text-[56px] text-[#F5F5F5] font-light leading-[0.95] tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ready to Plan{' '}
              <i className="text-[#C6A75E]">Your Event?</i>
            </h2>
            <p className="mt-5 text-[#B8B8B8] text-base md:text-lg font-light leading-relaxed max-w-lg">
              Choose your service and let us handle everything—from planning to execution. Get a personalized quote for your event.
            </p>
          </motion.div>

          <div />
        </div>

        {/* Form Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {/* Name */}
              <div className="group relative">
                <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#C6A75E] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-[#F5F5F5] text-base placeholder:text-white/20 outline-none transition-all duration-500 focus:border-[#C6A75E] focus:placeholder:text-white/10"
                />
              </div>

              {/* Email */}
              <div className="group relative">
                <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#C6A75E] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-[#F5F5F5] text-base placeholder:text-white/20 outline-none transition-all duration-500 focus:border-[#C6A75E] focus:placeholder:text-white/10"
                />
              </div>

              {/* Phone */}
              <div className="group relative">
                <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#C6A75E] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your contact number"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-[#F5F5F5] text-base placeholder:text-white/20 outline-none transition-all duration-500 focus:border-[#C6A75E] focus:placeholder:text-white/10"
                />
              </div>

              {/* Event Type */}
              <div className="group relative">
                <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#C6A75E] mb-2">
                  Event Type
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full bg-[#111114] border-b border-white/20 py-3 text-[#F5F5F5] text-base outline-none transition-all duration-500 focus:border-[#C6A75E] appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#111114]">Select event type</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#111114]">{type}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-0 bottom-4 text-[#C6A75E]">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Date */}
              <div className="group relative">
                <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#C6A75E] mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-[#F5F5F5] text-base outline-none transition-all duration-500 focus:border-[#C6A75E] [color-scheme:dark]"
                />
              </div>

              {/* Guest Count */}
              <div className="group relative">
                <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#C6A75E] mb-2">
                  Expected Guests
                </label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="Approximate guest count"
                  min="1"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-[#F5F5F5] text-base placeholder:text-white/20 outline-none transition-all duration-500 focus:border-[#C6A75E] focus:placeholder:text-white/10"
                />
              </div>

              {/* Message - full width */}
              <div className="md:col-span-2 group relative">
                <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#C6A75E] mb-2">
                  Tell Us Your Vision
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your dream event, budget range, special requirements..."
                  className="w-full bg-transparent border-b border-white/20 py-3 text-[#F5F5F5] text-base placeholder:text-white/20 outline-none transition-all duration-500 focus:border-[#C6A75E] resize-none focus:placeholder:text-white/10"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-t border-white/10">
                <p className="text-[#666] text-xs tracking-wide">
                  Your enquiry is strictly confidential. We respond within 24 hours.
                </p>
                <motion.button
                  type="submit"
                  className="group relative inline-flex items-center gap-3 px-10 py-4 overflow-hidden rounded-full text-[#0B0B0D] font-semibold text-sm uppercase tracking-wider shrink-0"
                  style={{ background: 'linear-gradient(135deg, #C6A75E 0%, #E5C97A 100%)', boxShadow: '0 8px 32px rgba(198, 167, 94, 0.3)' }}
                  whileHover={{ scale: 1.04, boxShadow: '0 12px 48px rgba(198, 167, 94, 0.5)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </form>
          ) : (
            // Success State
            <motion.div
              className="text-center py-24"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full border border-[#C6A75E] flex items-center justify-center mx-auto mb-8">
                <Send className="w-6 h-6 text-[#C6A75E]" />
              </div>
              <h3
                className="text-4xl md:text-5xl text-[#F5F5F5] font-light mb-4 tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Thank You, {formData.name.split(' ')[0]}.
              </h3>
              <p className="text-[#B8B8B8] text-lg font-light max-w-md mx-auto leading-relaxed">
                Your enquiry has been received. Our team will reach out within 24 hours to begin crafting your vision.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
