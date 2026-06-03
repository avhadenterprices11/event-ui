import { motion } from 'motion/react';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Heritage', path: '/about' },
    { label: 'Careers', path: '/about' },
    { label: 'Press', path: '/contact' }
  ],
  services: [
    { label: 'Weddings', path: '/events/wedding' },
    { label: 'Corporate Galas', path: '/events/corporate' },
    { label: 'Social Celebrations', path: '/events/birthday-social' },
    { label: 'Destination Affairs', path: '/events/destination' }
  ],
  quickLinks: [
    { label: 'Event Typologies', path: '/event-types' },
    { label: 'Services', path: '/services' },
    { label: 'Venues', path: '/venues' },
    { label: 'Request Consultation', path: '/quote' }
  ],
  contact: [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'concierge@luxuryevents.com', href: 'mailto:concierge@luxuryevents.com' },
    { icon: MapPin, text: 'Fifth Avenue, New York, NY', href: 'https://www.google.com/maps/search/Fifth+Avenue,+New+York,+NY' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
];

const legalLinks = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms-conditions' },
  { label: 'Refund Policy', path: '/refund-policy' },
  { label: 'Cancellation Policy', path: '/cancellation-policy' },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0B0B0D] pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Absolute Ambience Overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C6A75E]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col">

        {/* Top: Large Brand Identity */}
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-white/10 pb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2
              className="text-[40px] md:text-[64px] lg:text-[80px] text-[#F5F5F5] font-light leading-[0.9] tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Symphony <br />
              <i className="text-[#C6A75E]">of Elegance.</i>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="max-w-xs text-[#B8B8B8] font-light text-sm md:text-base leading-relaxed text-left md:text-right">
              Curating extraordinary celebrations globally. Masterpieces designed exclusively for you.
            </p>
          </motion.div>
        </div>

        {/* Main Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">

          {/* Contact Core */}
          <div className="lg:col-span-4">
            <h4 className="text-[#F5F5F5] text-sm font-semibold uppercase tracking-[0.2em] mb-8">Direct Access</h4>
            <ul className="space-y-6">
              {footerLinks.contact.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-start gap-4 group cursor-pointer">
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-colors group-hover:border-[#C6A75E]/50 group-hover:bg-[#C6A75E]/10 shrink-0">
                        <Icon className="w-3.5 h-3.5 text-[#C6A75E]" />
                      </div>
                      <span className="text-[#B8B8B8] text-base font-light mt-1 transition-colors group-hover:text-white">
                        {item.text}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8">
            {/* The Typologies */}
            <div>
              <h4 className="text-[#F5F5F5] text-sm font-semibold uppercase tracking-[0.2em] mb-8">Typologies</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="group flex items-center justify-between text-[#B8B8B8] hover:text-[#C6A75E] transition-colors duration-300 text-base font-light"
                    >
                      <span className="relative overflow-hidden">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C6A75E] transform -translate-x-[101%] transition-transform duration-500 ease-out group-hover:translate-x-0" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Maison */}
            <div>
              <h4 className="text-[#F5F5F5] text-sm font-semibold uppercase tracking-[0.2em] mb-8">The Maison</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="group flex items-center justify-between text-[#B8B8B8] hover:text-[#C6A75E] transition-colors duration-300 text-base font-light"
                    >
                      <span className="relative overflow-hidden">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C6A75E] transform -translate-x-[101%] transition-transform duration-500 ease-out group-hover:translate-x-0" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Directory */}
            <div>
              <h4 className="text-[#F5F5F5] text-sm font-semibold uppercase tracking-[0.2em] mb-8">Directory</h4>
              <ul className="space-y-4">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="group flex items-center justify-between text-[#B8B8B8] hover:text-[#C6A75E] transition-colors duration-300 text-base font-light"
                    >
                      <span className="relative overflow-hidden">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C6A75E] transform -translate-x-[101%] transition-transform duration-500 ease-out group-hover:translate-x-0" />
                      </span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 transform translate-y-1 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/10">

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 order-2 md:order-1">
            <span className="text-[#B8B8B8] text-sm uppercase tracking-widest font-light">
              © 2026 Luxury Events Group
            </span>
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-[#666666] hover:text-[#B8B8B8] transition-colors duration-300 text-sm tracking-wider uppercase font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-3 order-1 md:order-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#B8B8B8] hover:bg-[#C6A75E] hover:border-[#C6A75E] hover:text-[#0B0B0D] transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </motion.a>
              );
            })}
          </div>

        </div>
      </div>
    </footer>
  );
}