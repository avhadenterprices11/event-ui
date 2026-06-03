import { ServicesHeroBanner } from '../components/ServicesHeroBanner';
import { ServicesGrid } from '../components/ServicesGrid';
import { HowItWorks } from '../components/HowItWorks';
import { ServicesTestimonialCarousel } from '../components/ServicesTestimonialCarousel';
import { ServicesGetQuote } from '../components/ServicesGetQuote';
import { ServicesFAQ } from '../components/ServicesFAQ';
import { GetQuoteCTA } from '../components/GetQuoteCTA';

export default function Services() {
  return (
    <main className="bg-[#0B0B0D]">
      <ServicesHeroBanner />
      <ServicesGrid />
      <HowItWorks />
      <ServicesTestimonialCarousel />
      <ServicesGetQuote />
      <ServicesFAQ />
      <GetQuoteCTA />
    </main>
  );
}