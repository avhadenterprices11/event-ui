import { VenuesHeroBanner } from '../components/VenuesHeroBanner';
import { VenueFilterBar } from '../components/VenueFilterBar';
import { VenueCardsGrid } from '../components/VenueCardsGrid';
import { FeaturedVenueHighlight } from '../components/FeaturedVenueHighlight';
import { VenueDetailPreview } from '../components/VenueDetailPreview';
import { VenueBookingCTA } from '../components/VenueBookingCTA';

export default function Venues() {
  return (
    <div className="bg-[#0B0B0D] text-white">
      <VenuesHeroBanner />
      <VenueFilterBar />
      <VenueCardsGrid />
      <FeaturedVenueHighlight />
      <VenueDetailPreview />
      <VenueBookingCTA />
    </div>
  );
}
