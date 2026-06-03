import { motion } from 'motion/react';

interface Step2Props {
  formData: {
    eventDate: string;
    location: string;
    guestCount: string;
  };
  onChange: (field: string, value: string) => void;
}

export function Step2DateLocation({ formData, onChange }: Step2Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="text-center space-y-3">
        <h2 className="text-3xl tracking-tight">Date & Location</h2>
        <p className="text-gray-400">When and where will your event take place?</p>
      </div>

      <div className="space-y-6">
        {/* Event Date and Location - Two Column */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="eventDate" className="text-sm text-gray-400">
              Event Date *
            </label>
            <input
              type="date"
              id="eventDate"
              value={formData.eventDate}
              onChange={(e) => onChange('eventDate', e.target.value)}
              required
              className="w-full bg-[#0B0B0D] border border-[#C6A75E]/40 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#C6A75E] focus:shadow-lg focus:shadow-[#C6A75E]/20 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="location" className="text-sm text-gray-400">
              Location *
            </label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) => onChange('location', e.target.value)}
              required
              placeholder="City or Venue"
              className="w-full bg-[#0B0B0D] border border-[#C6A75E]/40 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#C6A75E] focus:shadow-lg focus:shadow-[#C6A75E]/20 transition-all"
            />
          </div>
        </div>

        {/* Guest Count */}
        <div className="space-y-2">
          <label htmlFor="guestCount" className="text-sm text-gray-400">
            Expected Guest Count *
          </label>
          <input
            type="number"
            id="guestCount"
            value={formData.guestCount}
            onChange={(e) => onChange('guestCount', e.target.value)}
            required
            placeholder="e.g., 150"
            min="1"
            className="w-full bg-[#0B0B0D] border border-[#C6A75E]/40 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#C6A75E] focus:shadow-lg focus:shadow-[#C6A75E]/20 transition-all"
          />
        </div>
      </div>
    </motion.div>
  );
}
