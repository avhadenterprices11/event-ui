import { BlogHeroBanner } from '../components/BlogHeroBanner';
import { FeaturedArticle } from '../components/FeaturedArticle';
import { BlogGrid } from '../components/BlogGrid';
import { BlogPagination } from '../components/BlogPagination';
import { NewsletterCTA } from '../components/NewsletterCTA';

export default function Blog() {
  return (
    <div className="bg-[#0B0B0D] text-white">
      <BlogHeroBanner />
      <FeaturedArticle />
      <BlogGrid />
      <BlogPagination />
      <NewsletterCTA />
    </div>
  );
}
