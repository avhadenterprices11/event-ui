import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function BlogArticleContent() {
  return (
    <section className="py-32 bg-[#0B0B0D]">
      <div className="max-w-[820px] mx-auto px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Section 1 */}
          <div className="space-y-6">
            <h2 className="text-[34px] tracking-tight leading-[1.2]">
              Choosing Your Dream Destination
            </h2>
            <div className="space-y-6 text-[#D5D5D5] text-lg leading-[1.8]">
              <p>
                The foundation of any remarkable destination wedding lies in selecting a location that resonates with your personal story. Whether it's a clifftop villa overlooking the Mediterranean, a historic château in the French countryside, or a private island in the Maldives, your venue should reflect your unique vision.
              </p>
              <p>
                Consider factors such as accessibility for your guests, local climate during your preferred dates, and the cultural richness of the destination. A well-chosen location doesn't just provide a beautiful backdrop—it becomes an integral part of your celebration's narrative.
              </p>
            </div>
          </div>

          {/* Featured Image 1 */}
          <motion.figure
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1758810743028-6b8e150ec98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdGFibGUlMjBzZXR0aW5nJTIwd2VkZGluZyUyMGZsb3dlcnN8ZW58MXx8fHwxNzcyMjc0MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Elegant wedding table setting"
                className="w-full h-auto"
              />
            </div>
          </motion.figure>

          {/* Conclusion */}
          <div className="space-y-6 text-[#D5D5D5] text-lg leading-[1.8]">
            <p>
              Exquisite table arrangements that set the tone for an unforgettable celebration
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}