import { motion, useInView } from 'motion/react';
import { ArrowUpRight, Search } from 'lucide-react';
import { Link } from 'react-router';
import { useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { blogPosts } from '../data/blogData';

const categories = [
  'General Publications',
  'Wedding Masterpieces',
  'Corporate Elegance',
  'Aesthetic Trends',
  'Venue Selection',
  'Guest Experience',
];

export function BlogGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const filtered = blogPosts.filter(post => {
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'General Publications' ||
      post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#111114]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Superior Search and Filter Operations */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
           className="flex flex-col md:flex-row justify-between gap-12 mb-20 border-b border-white/5 pb-12"
        >
          <div className="relative flex-1 w-full md:max-w-md group">
             <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#C6A75E] transition-colors duration-300" />
             <input
                type="text"
                placeholder="Search the journal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 hover:border-white/30 focus:border-[#C6A75E] pl-10 pr-4 py-4 text-white text-sm font-light tracking-wide outline-none transition-colors"
             />
          </div>

          <div className="relative w-full md:w-auto md:min-w-[280px]">
             <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 hover:border-white/30 focus:border-[#C6A75E] px-4 py-4 text-white text-sm font-light tracking-wide outline-none appearance-none cursor-pointer transition-colors"
             >
               {categories.map((cat, idx) => (
                 <option key={idx} value={cat} className="bg-[#111114] text-white">
                   {cat}
                 </option>
               ))}
             </select>
             {/* Custom Caret */}
             <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 border-b border-r border-[#C6A75E] transform rotate-45 pointer-events-none" />
          </div>
        </motion.div>

        {/* Clean Editorial Grid Configuration */}
        {filtered.length === 0 ? (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/30 text-center py-24 text-lg font-light"
          >
            No articles match your search.
          </motion.p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {filtered.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`} className="block focus:outline-none">
                   
                   {/* Image Block */}
                   <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden mb-8 bg-[#0B0B0D]">
                      <motion.div 
                         className="w-full h-full"
                         whileHover={{ scale: 1.05 }}
                         transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      >
                         <ImageWithFallback
                           src={post.image}
                           alt={post.title}
                           className="w-full h-full object-cover mix-blend-luminosity opacity-80 transition-all duration-700 group-hover:mix-blend-normal group-hover:opacity-100"
                         />
                      </motion.div>
                      <div className="absolute inset-0 border border-white/5 rounded-[16px] pointer-events-none" />
                   </div>

                   {/* Typography Component */}
                   <div className="flex flex-col">
                      <span className="text-[#C6A75E] text-[10px] uppercase font-bold tracking-[0.3em] mb-4">
                         {post.category}
                      </span>
                      <h3 
                         className="text-2xl md:text-3xl text-white font-light leading-[1.25] tracking-tight mb-4 transition-colors duration-300 group-hover:text-[#C6A75E]"
                         style={{ fontFamily: 'var(--font-heading)' }}
                      >
                         {post.title}
                      </h3>
                      <p className="text-[#888888] font-light text-sm md:text-base leading-relaxed line-clamp-3 mb-6">
                         {post.excerpt}
                      </p>

                      {/* Integrated CTA */}
                      <div className="inline-flex items-center gap-3">
                         <span className="text-white text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300 group-hover:text-[#C6A75E]">
                            Read Article
                         </span>
                         <ArrowUpRight className="w-4 h-4 text-[#C6A75E] opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                      </div>
                   </div>

                </Link>
              </motion.article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}