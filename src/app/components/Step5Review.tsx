import { motion } from 'motion/react';
import { Edit2, Calendar, MapPin, Users, DollarSign, FileText, CheckCircle2 } from 'lucide-react';

interface Step5Props {
  formData: {
    eventType: string;
    eventDate: string;
    location: string;
    guestCount: string;
    budget: string;
    vision: string;
    needVenue: boolean;
    needCatering: boolean;
    fullDesign: boolean;
  };
  onEdit: (step: number) => void;
}

const eventTypeLabels: { [key: string]: string } = {
  wedding: 'Wedding',
  corporate: 'Corporate Event',
  birthday: 'Birthday & Social',
  destination: 'Destination Event',
};

const budgetLabels: { [key: string]: string } = {
  '1-3': '₹1L - 3L',
  '3-7': '₹3L - 7L',
  '7-15': '₹7L - 15L',
  '15+': '₹15L+',
};

export function Step5Review({ formData, onEdit }: Step5Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="text-center space-y-3">
        <h2 className="text-3xl tracking-tight">Review Your Request</h2>
        <p className="text-gray-400">Please verify all details before submitting</p>
      </div>

      <div className="space-y-4">
        {/* Event Type */}
        <div className="bg-[#0B0B0D] border border-[#C6A75E]/30 rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-[#C6A75E]/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#C6A75E]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm text-gray-400 mb-1">Event Type</h3>
                <p className="text-xl text-white">{eventTypeLabels[formData.eventType] || formData.eventType}</p>
              </div>
            </div>
            <button
              onClick={() => onEdit(1)}
              className="text-[#C6A75E] hover:text-[#E5C97A] transition-colors flex items-center gap-2 text-sm"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
          </div>
        </div>

        {/* Date & Location */}
        <div className="bg-[#0B0B0D] border border-[#C6A75E]/30 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-sm text-gray-400">Date & Location Details</h3>
            <button
              onClick={() => onEdit(2)}
              className="text-[#C6A75E] hover:text-[#E5C97A] transition-colors flex items-center gap-2 text-sm"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#C6A75E]" />
              <div>
                <p className="text-xs text-gray-500">Date</p>
                <p className="text-white">{formData.eventDate || 'Not set'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#C6A75E]" />
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="text-white">{formData.location || 'Not set'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#C6A75E]" />
              <div>
                <p className="text-xs text-gray-500">Guests</p>
                <p className="text-white">{formData.guestCount || 'Not set'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Budget */}
        <div className="bg-[#0B0B0D] border border-[#C6A75E]/30 rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-[#C6A75E]/10 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-[#C6A75E]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm text-gray-400 mb-1">Budget Range</h3>
                <p className="text-xl text-white">{budgetLabels[formData.budget] || formData.budget}</p>
              </div>
            </div>
            <button
              onClick={() => onEdit(3)}
              className="text-[#C6A75E] hover:text-[#E5C97A] transition-colors flex items-center gap-2 text-sm"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
          </div>
        </div>

        {/* Vision & Services */}
        <div className="bg-[#0B0B0D] border border-[#C6A75E]/30 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-[#C6A75E]/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-[#C6A75E]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm text-gray-400 mb-2">Your Vision</h3>
                <p className="text-white leading-relaxed">{formData.vision || 'Not provided'}</p>
              </div>
            </div>
            <button
              onClick={() => onEdit(4)}
              className="text-[#C6A75E] hover:text-[#E5C97A] transition-colors flex items-center gap-2 text-sm"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
          </div>
          
          {/* Additional Services */}
          {(formData.needVenue || formData.needCatering || formData.fullDesign) && (
            <div className="mt-4 pt-4 border-t border-[#C6A75E]/20">
              <h4 className="text-sm text-gray-400 mb-3">Additional Services</h4>
              <div className="flex flex-wrap gap-2">
                {formData.needVenue && (
                  <span className="px-4 py-2 bg-[#C6A75E]/10 border border-[#C6A75E]/30 rounded-full text-sm text-[#C6A75E]">
                    Venue Assistance
                  </span>
                )}
                {formData.needCatering && (
                  <span className="px-4 py-2 bg-[#C6A75E]/10 border border-[#C6A75E]/30 rounded-full text-sm text-[#C6A75E]">
                    Catering
                  </span>
                )}
                {formData.fullDesign && (
                  <span className="px-4 py-2 bg-[#C6A75E]/10 border border-[#C6A75E]/30 rounded-full text-sm text-[#C6A75E]">
                    Full Event Design
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
