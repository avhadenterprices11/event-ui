import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { useState } from 'react';

export function NewsletterCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
  };

  return (
    <section className="relative py-32 bg-[#0B0B0D] overflow-hidden">
      {/* Soft Spotlight Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#C6A75E]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-10"
        >
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-[#C6A75E]/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-[#C6A75E]" />
              </div>
            </div>

            <h2 className="text-5xl tracking-tight leading-[1.1]">
              Stay Inspired
            </h2>

            <p className="text-gray-400 text-lg">
              Receive curated luxury event insights directly to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex gap-4 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#111114] border border-[#C6A75E]/30 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A75E] transition-colors"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gradient-to-r from-[#C6A75E] to-[#D4B76E] text-[#0B0B0D] rounded-lg font-medium hover:shadow-xl hover:shadow-[#C6A75E]/30 transition-shadow whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </form>

          <p className="text-gray-500 text-sm">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
