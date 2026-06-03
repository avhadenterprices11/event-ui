import { motion } from 'motion/react';
import { Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClass = "w-full bg-transparent border-b border-white/20 px-0 py-4 text-[#F5F5F5] font-light placeholder-white/30 focus:outline-none focus:border-[#C6A75E] transition-colors duration-500 rounded-none appearance-none";
  const labelClass = "text-[10px] tracking-[0.2em] uppercase font-bold text-[#C6A75E] mb-2 block transition-opacity duration-300";

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Full Name */}
        <div className="relative group">
          <label htmlFor="fullName" className={`${labelClass} ${focusedField === 'fullName' || formData.fullName ? 'opacity-100' : 'opacity-70'}`}>
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onFocus={() => setFocusedField('fullName')}
            onBlur={() => setFocusedField(null)}
            required
            className={inputClass}
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div className="relative group">
          <label htmlFor="email" className={`${labelClass} ${focusedField === 'email' || formData.email ? 'opacity-100' : 'opacity-70'}`}>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            required
            className={inputClass}
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Phone */}
        <div className="relative group">
          <label htmlFor="phone" className={`${labelClass} ${focusedField === 'phone' || formData.phone ? 'opacity-100' : 'opacity-70'}`}>
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField(null)}
            required
            className={inputClass}
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Event Date */}
        <div className="relative group">
          <label htmlFor="eventDate" className={`${labelClass} ${focusedField === 'eventDate' || formData.eventDate ? 'opacity-100' : 'opacity-70'}`}>
            Proposed Date *
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            onFocus={() => setFocusedField('eventDate')}
            onBlur={() => setFocusedField(null)}
            required
            className={`${inputClass} text-white/50 focus:text-white`}
            style={{ colorScheme: 'dark' }}
          />
        </div>
      </div>

      {/* Event Type (Custom styled select) */}
      <div className="relative group">
        <label htmlFor="eventType" className={`${labelClass} ${focusedField === 'eventType' || formData.eventType ? 'opacity-100' : 'opacity-70'}`}>
          Event Classification *
        </label>
        <div className="relative">
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            onFocus={() => setFocusedField('eventType')}
            onBlur={() => setFocusedField(null)}
            required
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled className="bg-[#111114] text-white/50">Select classification</option>
            <option value="wedding" className="bg-[#111114] text-white">Destination Wedding</option>
            <option value="corporate" className="bg-[#111114] text-white">Corporate Summit</option>
            <option value="gala" className="bg-[#111114] text-white">Exclusive Gala</option>
            <option value="social" className="bg-[#111114] text-white">Private Social Gathering</option>
            <option value="other" className="bg-[#111114] text-white">Other</option>
          </select>
          {/* Custom Select Caret */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-3 h-3 border-b border-r border-[#C6A75E] transform rotate-45" />
        </div>
      </div>

      {/* Message */}
      <div className="relative group">
        <label htmlFor="message" className={`${labelClass} ${focusedField === 'message' || formData.message ? 'opacity-100' : 'opacity-70'}`}>
          Event Details & Vision *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          required
          rows={3}
          className={`${inputClass} resize-none min-h-[120px]`}
          placeholder="Describe your vision, estimated guest count, and any specific requirements..."
        />
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative w-full flex items-center justify-between px-8 py-5 border border-[#C6A75E] bg-transparent overflow-hidden"
        >
          {/* Fill Animation */}
          <div className="absolute inset-0 bg-[#C6A75E] transform scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 pointer-events-none" />
          
          <span className="relative z-10 text-[#C6A75E] group-hover:text-[#0B0B0D] font-bold tracking-[0.2em] uppercase text-xs transition-colors duration-500">
            Submit Inquiry
          </span>
          
          <div className="relative z-10 w-10 h-10 rounded-full border border-[#C6A75E]/30 group-hover:border-[#0B0B0D]/20 flex items-center justify-center transition-colors duration-500">
            <ArrowRight className="w-4 h-4 text-[#C6A75E] group-hover:text-[#0B0B0D] transition-colors duration-500" />
          </div>
        </motion.button>
      </div>
    </motion.form>
  );
}
