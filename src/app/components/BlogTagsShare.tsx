import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';

const tags = ['Wedding Planning', 'Destination Weddings', 'Luxury Events', 'Event Design', 'Travel'];

export function BlogTagsShare() {
  return (
    <section className="py-16 bg-[#0B0B0D] border-t border-[#C6A75E]/10">
      <div className="max-w-[820px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between gap-8"
        >
          {/* Tags */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-gray-400 text-sm">Tags:</span>
            {tags.map((tag, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 border border-[#C6A75E]/40 rounded-full text-sm text-gray-300 hover:bg-[#C6A75E] hover:text-[#0B0B0D] hover:border-[#C6A75E] transition-all"
              >
                {tag}
              </motion.a>
            ))}
          </div>

          {/* Share Icons */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm">Share:</span>
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Link2, label: 'Copy Link' },
            ].map((social, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full border border-[#C6A75E]/40 flex items-center justify-center text-[#C6A75E] hover:bg-[#C6A75E] hover:text-[#0B0B0D] transition-all group"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
