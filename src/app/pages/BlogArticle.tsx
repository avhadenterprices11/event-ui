import { useParams, Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { blogPosts } from '../data/blogData';

export default function BlogArticle() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yImg = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opImg = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0B0B0D] flex items-center justify-center">
        <div className="text-center text-white space-y-6">
          <h1 className="text-5xl font-light" style={{ fontFamily: 'var(--font-heading)' }}>Article Not Found</h1>
          <Link to="/blog" className="inline-block text-[#C6A75E] border-b border-[#C6A75E]/40 hover:border-[#C6A75E] transition-colors text-sm uppercase tracking-widest">
            Return to Journal
          </Link>
        </div>
      </div>
    );
  }

  // Related posts (other than current)
  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="bg-[#0B0B0D] min-h-screen text-white">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-[90vh] flex items-end overflow-hidden">
        {/* Parallax image */}
        <motion.div style={{ y: yImg, opacity: opImg }} className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/50 to-[#0B0B0D]/30 z-10" />
          <img src={post.image} alt={post.title} className="w-full h-full object-cover scale-110" />
        </motion.div>

        {/* Hero content */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-12 pb-20 md:pb-32">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs uppercase tracking-[0.3em] font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Journal
            </Link>
          </motion.div>

          {/* Category */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.5em] mb-6"
          >
            {post.category}
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-[1.05] mb-10"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {post.title}
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="flex flex-wrap items-center gap-8 text-white/40 text-sm font-light"
          >
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#C6A75E]" />{post.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#C6A75E]" />{post.readTime}</span>
            <span className="text-white/30">By <span className="text-white/70">{post.author}</span></span>
          </motion.div>
        </div>
      </section>

      {/* ── Article Body ─────────────────────────────────────── */}
      <section className="py-24 md:py-36 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-16">
          {post.content.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              {block.heading && (
                <h2
                  className="text-2xl md:text-3xl text-[#C6A75E] font-light tracking-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {block.heading}
                </h2>
              )}
              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
                {block.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Tags ─────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t border-white/5 py-16"
      >
        <div className="max-w-3xl mx-auto px-6 md:px-12 flex flex-wrap items-center gap-3">
          <Tag className="w-4 h-4 text-[#C6A75E] mr-2" />
          {post.tags.map(tag => (
            <span
              key={tag}
              className="border border-white/10 text-white/50 hover:border-[#C6A75E] hover:text-[#C6A75E] transition-colors px-4 py-1.5 rounded-full text-xs uppercase tracking-widest cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.section>

      {/* ── Author Bio ───────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="border-t border-white/5 py-20"
      >
        <div className="max-w-3xl mx-auto px-6 md:px-12 flex items-center gap-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C6A75E]/30 to-[#C6A75E]/10 border border-[#C6A75E]/30 flex items-center justify-center shrink-0 text-[#C6A75E] text-xl font-light select-none">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="text-[#C6A75E] text-xs uppercase tracking-[0.3em] mb-1">Written by</p>
            <p className="text-white text-xl font-light" style={{ fontFamily: 'var(--font-heading)' }}>{post.author}</p>
            <p className="text-white/40 text-sm font-light mt-1">Senior Editorial Director, Celestia Events</p>
          </div>
        </div>
      </motion.section>

      {/* ── Related Articles ─────────────────────────────────── */}
      <section className="border-t border-white/5 py-24 md:py-36 bg-[#060608]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <span className="text-[#C6A75E] text-xs font-bold uppercase tracking-[0.3em] block mb-3">Continue Reading</span>
              <h2 className="text-3xl md:text-4xl font-light text-white" style={{ fontFamily: 'var(--font-heading)' }}>Related Articles</h2>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedPosts.map((related, i) => (
              <motion.article
                key={related.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <Link to={`/blog/${related.slug}`} className="block space-y-5 focus:outline-none">
                  <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-[#111114]">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full"
                    >
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                      />
                    </motion.div>
                    <div className="absolute inset-0 border border-white/5 rounded-[16px]" />
                  </div>
                  <span className="text-[#C6A75E] text-[10px] uppercase font-bold tracking-[0.3em] block">{related.category}</span>
                  <h3
                    className="text-xl md:text-2xl text-white font-light leading-snug group-hover:text-[#C6A75E] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {related.title}
                  </h3>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}