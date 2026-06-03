import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router';

export function VenueBookingCTA() {
  return (
    <section className="relative py-32 bg-[#0B0B0D] overflow-hidden">
      {/* Subtle Spotlight Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C6A75E]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-10"
        >
          <div className="space-y-6">
            <p className="text-[#C6A75E] text-sm tracking-[0.2em] uppercase">
              Ready to Begin?
            </p>
            <h2 className="text-6xl tracking-tight leading-[1.1]">
              Reserve Your Perfect Venue
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Schedule a private tour and experience the elegance of our venues firsthand
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex justify-center"
          >
            <Link
              to="/quote"
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#C6A75E] to-[#D4B76E] text-[#0B0B0D] rounded-lg text-lg font-medium hover:shadow-2xl hover:shadow-[#C6A75E]/30 transition-shadow"
            >
              <Calendar className="w-5 h-5" />
              Book a Venue Visit
            </Link>
          </motion.div>

          <p className="text-gray-500 text-sm mt-6">
            Our venue specialists are available 24/7 to assist you
          </p>
        </motion.div>
      </div>
    </section>
  );
}
