import { motion } from 'motion/react';

interface Step4Props {
  formData: {
    vision: string;
    needVenue: boolean;
    needCatering: boolean;
    fullDesign: boolean;
  };
  onChange: (field: string, value: string | boolean) => void;
}

export function Step4Details({ formData, onChange }: Step4Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="text-center space-y-3">
        <h2 className="text-3xl tracking-tight">Share Your Vision</h2>
        <p className="text-gray-400">Tell us about your dream event and what services you need</p>
      </div>

      <div className="space-y-6">
        {/* Vision Textarea */}
        <div className="space-y-2">
          <label htmlFor="vision" className="text-sm text-gray-400">
            Describe Your Vision *
          </label>
          <textarea
            id="vision"
            value={formData.vision}
            onChange={(e) => onChange('vision', e.target.value)}
            required
            rows={6}
            placeholder="Share your ideas, theme preferences, special requirements, or any specific details that will help us understand your vision..."
            className="w-full bg-[#0B0B0D] border border-[#C6A75E]/40 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#C6A75E] focus:shadow-lg focus:shadow-[#C6A75E]/20 transition-all resize-none shadow-inner"
          />
        </div>

        {/* Additional Services Toggle */}
        <div className="space-y-4 pt-4">
          <h3 className="text-lg text-gray-300">Additional Services Required</h3>
          
          <div className="space-y-3">
            {/* Venue Assistance */}
            <div className="flex items-center justify-between p-4 bg-[#0B0B0D] border border-[#C6A75E]/30 rounded-lg hover:border-[#C6A75E]/50 transition-all">
              <div>
                <h4 className="text-white font-medium">Need Venue Assistance</h4>
                <p className="text-sm text-gray-500">Help finding and booking the perfect venue</p>
              </div>
              <button
                type="button"
                onClick={() => onChange('needVenue', !formData.needVenue)}
                className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                  formData.needVenue ? 'bg-[#C6A75E]' : 'bg-gray-700'
                }`}
              >
                <motion.div
                  className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                  animate={{ left: formData.needVenue ? '32px' : '4px' }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>

            {/* Catering */}
            <div className="flex items-center justify-between p-4 bg-[#0B0B0D] border border-[#C6A75E]/30 rounded-lg hover:border-[#C6A75E]/50 transition-all">
              <div>
                <h4 className="text-white font-medium">Catering Required</h4>
                <p className="text-sm text-gray-500">Premium culinary services for your event</p>
              </div>
              <button
                type="button"
                onClick={() => onChange('needCatering', !formData.needCatering)}
                className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                  formData.needCatering ? 'bg-[#C6A75E]' : 'bg-gray-700'
                }`}
              >
                <motion.div
                  className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                  animate={{ left: formData.needCatering ? '32px' : '4px' }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>

            {/* Full Event Design */}
            <div className="flex items-center justify-between p-4 bg-[#0B0B0D] border border-[#C6A75E]/30 rounded-lg hover:border-[#C6A75E]/50 transition-all">
              <div>
                <h4 className="text-white font-medium">Full Event Design</h4>
                <p className="text-sm text-gray-500">Complete planning, design, and coordination</p>
              </div>
              <button
                type="button"
                onClick={() => onChange('fullDesign', !formData.fullDesign)}
                className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                  formData.fullDesign ? 'bg-[#C6A75E]' : 'bg-gray-700'
                }`}
              >
                <motion.div
                  className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                  animate={{ left: formData.fullDesign ? '32px' : '4px' }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
