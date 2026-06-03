import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

export function ContactMapSocial() {
  return (
    <div className="space-y-8">
      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative h-[400px] rounded-xl overflow-hidden border border-[#C6A75E]/30 shadow-2xl"
      >
        {/* Google Map Embed */}
        <iframe
          title="Luxury Events Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160992253!2d72.71637385!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-[#0B0B0D]/20 pointer-events-none" />
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-[#111114] border border-[#C6A75E]/30 rounded-xl p-8"
      >
        <h3 className="text-2xl tracking-tight mb-6">Follow Us</h3>
        <div className="flex items-center gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.15, y: -3 }}
              className="w-14 h-14 rounded-full border border-[#C6A75E]/40 flex items-center justify-center text-[#C6A75E] hover:bg-[#C6A75E] hover:text-[#0B0B0D] hover:border-[#C6A75E] transition-all duration-300 group"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" strokeWidth={1.5} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Quick Info */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-[#111114] border border-[#C6A75E]/30 rounded-xl p-8 space-y-4"
      >
        <h3 className="text-2xl tracking-tight mb-4">Office Hours</h3>
        <div className="space-y-3 text-gray-400">
          <div className="flex justify-between">
            <span>Monday - Friday</span>
            <span className="text-white">9:00 AM - 7:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span className="text-white">10:00 AM - 5:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span className="text-white">By Appointment</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
