import { HeroSection } from '../components/HeroSection';
import { FeatureStepsSection } from '../components/FeatureStepsSection';
import { PortfolioProjects } from '../components/PortfolioProjects';
import { FeaturedEventsCardStack } from '../components/FeaturedEventsCardStack';
import { TimelineSection } from '../components/TimelineSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PartnersSection } from '../components/PartnersSection';
import { CTASection } from '../components/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureStepsSection />
      <PortfolioProjects />
      <FeaturedEventsCardStack />
      <TimelineSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </>
  );
}