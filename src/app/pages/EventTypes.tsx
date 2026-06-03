import { EventTypesHero } from '../components/EventTypesHero';
import { EventCategoriesGrid } from '../components/EventCategoriesGrid';
import { RevealImagesSection } from '../components/RevealImagesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { WhyChooseEventsSection } from '../components/WhyChooseEventsSection';
import { EventBookingCTA } from '../components/EventBookingCTA';

export default function EventTypes() {
  return (
    <>
      <EventTypesHero />
      <EventCategoriesGrid />
      <RevealImagesSection />
      <TestimonialsSection />
      <WhyChooseEventsSection />
      <EventBookingCTA />
    </>
  );
}