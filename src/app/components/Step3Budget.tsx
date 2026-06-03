import { motion } from 'motion/react';

interface Step3Props {
  selectedBudget: string;
  onSelect: (budget: string) => void;
}

const budgetOptions = [
  { id: '1-3', label: '₹1L - 3L', description: 'Intimate & Elegant' },
  { id: '3-7', label: '₹3L - 7L', description: 'Premium Experience' },
  { id: '7-15', label: '₹7L - 15L', description: 'Luxury Celebration' },
  { id: '15+', label: '₹15L+', description: 'Ultra-Exclusive' },
];

export function Step3Budget({ selectedBudget, onSelect }: Step3Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="text-center space-y-3">
        <h2 className="text-3xl tracking-tight">Select Your Budget Range</h2>
        <p className="text-gray-400">Choose the range that aligns with your vision</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {budgetOptions.map((option, index) => (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => onSelect(option.id)}
            className={`relative p-8 rounded-xl border-2 transition-all duration-300 text-left ${
              selectedBudget === option.id
                ? 'bg-[#C6A75E] border-[#C6A75E] text-[#0B0B0D] shadow-2xl shadow-[#C6A75E]/30'
                : 'bg-[#0B0B0D] border-[#C6A75E]/40 text-white hover:border-[#C6A75E]/70'
            }`}
          >
            <div className="space-y-2">
              <h3 className={`text-2xl font-medium tracking-tight ${
                selectedBudget === option.id ? 'text-[#0B0B0D]' : 'text-[#C6A75E]'
              }`}>
                {option.label}
              </h3>
              <p className={`text-sm ${
                selectedBudget === option.id ? 'text-[#0B0B0D]/80' : 'text-gray-400'
              }`}>
                {option.description}
              </p>
            </div>

            {/* Selected Indicator */}
            {selectedBudget === option.id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-4 right-4 w-7 h-7 bg-[#0B0B0D] rounded-full flex items-center justify-center"
              >
                <svg className="w-4 h-4 text-[#C6A75E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Optional: Custom budget input */}
      <div className="pt-6 border-t border-[#C6A75E]/20">
        <p className="text-sm text-gray-500 text-center">
          Have a different budget in mind? Our team will discuss custom options with you.
        </p>
      </div>
    </motion.div>
  );
}
