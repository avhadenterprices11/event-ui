import { motion } from 'motion/react';
import { MapPin, Users, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

export interface VenueFilters {
  location: string;
  capacity: string;
  venueType: 'all' | 'indoor' | 'outdoor';
}

interface VenueFilterBarProps {
  filters: VenueFilters;
  setFilters: (filters: VenueFilters) => void;
}

export function VenueFilterBar({ filters, setFilters }: VenueFilterBarProps) {
  const handleFilterChange = (key: keyof VenueFilters, value: any) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-20 -mt-12 md:-mt-16 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20"
    >
      <div className="bg-[#0B0B0D]/80 backdrop-blur-2xl border border-white/10 rounded-[24px] p-6 lg:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-end">
          
          {/* Location Selection */}
          <div className="relative group">
            <label className="block text-[#C6A75E] text-xs font-semibold uppercase tracking-[0.2em] mb-3 ml-1">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-hover:text-[#C6A75E] transition-colors" />
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full bg-[#111114] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm text-[#F5F5F5] font-light appearance-none cursor-pointer outline-none transition-all hover:border-[#C6A75E]/40 focus:border-[#C6A75E]"
              >
                <option value="">Any Location</option>
                <option value="downtown">Downtown District</option>
                <option value="waterfront">Waterfront Views</option>
                <option value="hills">Hills & Gardens</option>
                <option value="historic">Historic Quarter</option>
              </select>
              {/* Custom Select Arrow */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 border-b border-r border-[#C6A75E] transform rotate-45 pointer-events-none" />
            </div>
          </div>

          {/* Capacity Selection */}
          <div className="relative group">
            <label className="block text-[#C6A75E] text-xs font-semibold uppercase tracking-[0.2em] mb-3 ml-1">
              Capacity
            </label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-hover:text-[#C6A75E] transition-colors" />
              <select
                value={filters.capacity}
                onChange={(e) => handleFilterChange('capacity', e.target.value)}
                className="w-full bg-[#111114] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm text-[#F5F5F5] font-light appearance-none cursor-pointer outline-none transition-all hover:border-[#C6A75E]/40 focus:border-[#C6A75E]"
              >
                <option value="">Guest Count</option>
                <option value="50">Intimate (Up to 50)</option>
                <option value="100">Medium (50 - 100)</option>
                <option value="200">Large (100 - 200)</option>
                <option value="500">Grand (200 - 500)</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 border-b border-r border-[#C6A75E] transform rotate-45 pointer-events-none" />
            </div>
          </div>

          {/* Environment Toggle */}
          <div className="relative">
            <label className="block text-[#C6A75E] text-xs font-semibold uppercase tracking-[0.2em] mb-3 ml-1">
              Environment
            </label>
            <div className="flex bg-[#111114] border border-white/10 rounded-xl p-1.5 h-[54px] relative">
              <button
                onClick={() => handleFilterChange('venueType', 'all')}
                className={`flex-1 rounded-lg text-sm transition-all duration-300 font-light relative z-10 ${
                  filters.venueType === 'all' ? 'text-[#0B0B0D]' : 'text-white hover:text-[#C6A75E]'
                }`}
              >
                 All
              </button>
              <button
                onClick={() => handleFilterChange('venueType', 'indoor')}
                className={`flex-1 rounded-lg text-sm transition-all duration-300 font-light relative z-10 ${
                  filters.venueType === 'indoor' ? 'text-[#0B0B0D]' : 'text-white hover:text-[#C6A75E]'
                }`}
              >
                 Indoor
              </button>
              <button
                onClick={() => handleFilterChange('venueType', 'outdoor')}
                className={`flex-1 rounded-lg text-sm transition-all duration-300 font-light relative z-10 ${
                  filters.venueType === 'outdoor' ? 'text-[#0B0B0D]' : 'text-white hover:text-[#C6A75E]'
             }`}
              >
                 Outdoor
              </button>
              {/* Highlight Slider */}
              <div 
                className="absolute top-1.5 bottom-1.5 bg-[#C6A75E] rounded-lg transition-transform duration-500 ease-out z-0"
                style={{
                   width: 'calc(33.33% - 4px)',
                   transform: `translateX(${filters.venueType === 'all' ? '0' : filters.venueType === 'indoor' ? '100%' : '200%'})`,
                   marginLeft: filters.venueType === 'outdoor' ? '4px' : filters.venueType === 'indoor' ? '2px' : '0px'
                }}
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button 
              className="group w-full h-[54px] relative rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(198,167,94,0.15)] flex items-center justify-center gap-3"
              onClick={() => {
                // Smooth scroll to the grid
                document.getElementById('venue-cards-grid')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="absolute inset-0 bg-[#C6A75E] group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-[1.5s]" />
              <SlidersHorizontal className="relative z-10 w-4 h-4 text-[#0B0B0D]" />
              <span className="relative z-10 text-[#0B0B0D] text-xs font-bold uppercase tracking-[0.2em]">
                 Filter Venues
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
