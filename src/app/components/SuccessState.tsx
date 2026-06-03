import { motion } from 'motion/react';
import { CheckCircle2, Home } from 'lucide-react';
import { Link } from 'react-router';

export function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center py-20 space-y-8"
    >
      {/* Success Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
        className="flex justify-center"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#C6A75E]/20 to-[#C6A75E]/5 flex items-center justify-center border-2 border-[#C6A75E]">
          <CheckCircle2 className="w-12 h-12 text-[#C6A75E]" strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Success Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="space-y-4"
      >
        <h2 className="text-5xl tracking-tight">
          Your Request Has Been Received
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Thank you for sharing your vision with us. Our team will contact you within 24 hours to discuss your event in detail.
        </p>
      </motion.div>

      {/* Confirmation Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="max-w-md mx-auto bg-[#111114] border border-[#C6A75E]/30 rounded-xl p-8 space-y-4"
      >
        <h3 className="text-lg text-gray-400">What Happens Next?</h3>
        <ul className="space-y-3 text-left">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#C6A75E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[#C6A75E] text-xs">1</span>
            </div>
            <p className="text-gray-300">Our team reviews your requirements</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#C6A75E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[#C6A75E] text-xs">2</span>
            </div>
            <p className="text-gray-300">We'll call you to discuss details</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#C6A75E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[#C6A75E] text-xs">3</span>
            </div>
            <p className="text-gray-300">Receive a personalized proposal</p>
          </li>
        </ul>
      </motion.div>

      {/* Return Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C6A75E] to-[#A88E50] text-[#0B0B0D] px-10 py-5 rounded-full font-medium text-lg hover:shadow-2xl hover:shadow-[#C6A75E]/40 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            <span>Return to Home</span>
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
