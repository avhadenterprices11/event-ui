import { Link } from 'react-router';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] flex items-center justify-center px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="text-9xl mb-6 bg-gradient-to-r from-[#C6A75E] to-[#E5C97A] bg-clip-text text-transparent"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          404
        </h1>
        <h2
          className="text-4xl mb-6 text-[#F5F5F5]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Page Not Found
        </h2>
        <p className="text-[#C6C6C6] text-lg mb-12 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-10 py-4 rounded-[10px] bg-gradient-to-r from-[#C6A75E] to-[#E5C97A] text-[#0B0B0D] font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_30px_rgba(198,167,94,0.5)]"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
