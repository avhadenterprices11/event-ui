import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const relatedPosts = [
  {
    id: 1,
    category: 'Event Planning',
    title: 'Essential Timeline for Corporate Event Success',
    excerpt: 'A comprehensive guide to planning your corporate event from concept to execution.',
    image: 'https://images.unsplash.com/photo-1712903276040-c99b32a057eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjBwbGFubmluZyUyMG5vdGVib29rfGVufDF8fHx8MTc3MjI3Mjg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    category: 'Design Trends',
    title: 'Luxury Color Palettes for 2026 Events',
    excerpt: 'Explore the most sophisticated color combinations trending in high-end events.',
    image: 'https://images.unsplash.com/photo-1770140304098-46700a5c45c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYWxhJTIwZGlubmVyJTIwdGFibGV8ZW58MXx8fHwxNzcyMjcyODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    category: 'Venue Selection',
    title: 'Choosing the Perfect Space for Your Celebration',
    excerpt: 'Key factors to consider when selecting a venue that matches your vision.',
    image: 'https://images.unsplash.com/photo-1640672246932-2f21e569d797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMGhvdGVsJTIwYmFsbHJvb20lMjB3ZWRkaW5nfGVufDF8fHx8MTc3MjI3Mjg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function RelatedPosts() {
  return (
    <section className="py-32 bg-[#0B0B0D]">
      <div className="max-w-[1440px] mx-auto px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl tracking-tight">Related Insights</h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-10">
          {relatedPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group cursor-pointer"
            >
              <Link to="/blog/designing-perfect-luxury-destination-wedding">
                <div className="bg-[#111114] border border-[#C6A75E]/20 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#C6A75E]/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C6A75E]/10">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-[#C6A75E] text-xs tracking-[0.15em] uppercase font-medium">
                      {post.category}
                    </p>

                    <h3 className="text-xl tracking-tight leading-tight group-hover:text-[#C6A75E] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-2 text-[#C6A75E] text-sm group-hover:gap-3 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
