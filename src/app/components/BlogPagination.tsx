import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function BlogPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-[#111114]"
    >
      <div className="max-w-[1440px] mx-auto px-24">
        <div className="flex items-center justify-center gap-2">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-gray-400 hover:text-[#C6A75E] disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-2 mx-6">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg transition-all ${
                  currentPage === page
                    ? 'bg-[#C6A75E] text-[#0B0B0D] font-medium'
                    : 'text-gray-400 hover:text-[#C6A75E] hover:bg-[#C6A75E]/10'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-gray-400 hover:text-[#C6A75E] disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
