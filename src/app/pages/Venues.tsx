import { useState } from 'react';
import { VenuesHeroBanner } from '../components/VenuesHeroBanner';
import { VenueFilterBar, VenueFilters } from '../components/VenueFilterBar';
import { VenueCardsGrid } from '../components/VenueCardsGrid';
import { FeaturedVenueHighlight } from '../components/FeaturedVenueHighlight';
import { VenueDetailPreview } from '../components/VenueDetailPreview';
import { VenueBookingCTA } from '../components/VenueBookingCTA';

export default function Venues() {
  const [filters, setFilters] = useState<VenueFilters>({
    location: '',
    capacity: '',
    venueType: 'all'
  });

  return (
    <div className="bg-[#0B0B0D] text-white">
      <VenuesHeroBanner />
      <VenueFilterBar filters={filters} setFilters={setFilters} />
      <VenueCardsGrid filters={filters} />
      <FeaturedVenueHighlight />
      <VenueDetailPreview />
      <VenueBookingCTA />
    </div>
  );
}
