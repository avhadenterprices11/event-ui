import { CardStack, CardStackItem } from './ui/card-stack';

const luxuryEventItems: CardStackItem[] = [
  {
    id: 1,
    title: "Luxury Wedding Ballroom",
    description: "Experience timeless elegance with crystal chandeliers and breathtaking décor",
    imageSrc: "https://images.unsplash.com/photo-1759519238029-689e99c6d19e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwYmFsbHJvb20lMjBjaGFuZGVsaWVyc3xlbnwxfHx8fDE3NzIxODI4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Corporate Gala Dinner",
    description: "Sophisticated events that inspire and create lasting impressions",
    imageSrc: "https://images.unsplash.com/photo-1768508947825-0a63f7c46a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnYWxhJTIwZGlubmVyJTIwZXZlbnR8ZW58MXx8fHwxNzcyMTE0MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Elegant Ceremony Venue",
    description: "Where dreams meet reality in stunning architectural spaces",
    imageSrc: "https://images.unsplash.com/photo-1761499101631-92cde2434bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwdmVudUUlMjBlbGVnYW50fGVufDF8fHx8MTc3MjE4MjgwMnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Destination Beach Wedding",
    description: "Celebrate love with breathtaking ocean views and golden sunsets",
    imageSrc: "https://images.unsplash.com/photo-1766910701111-9eee02328e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXN0aW5hdGlvbiUyMHdlZGRpbmclMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NzIwODE1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Reception Centerpiece",
    description: "Exquisite table settings that showcase artistry and sophistication",
    imageSrc: "https://images.unsplash.com/photo-1768777270907-235286662f98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHJlY2VwdGlvbiUyMGNlbnRlcnBpZWNlfGVufDF8fHx8MTc3MjE4MjgwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function LuxuryEventGallery() {
  return (
    <div className="w-full max-w-5xl mx-auto px-8">
      <CardStack
        items={luxuryEventItems}
        initialIndex={0}
        autoAdvance
        intervalMs={3000}
        pauseOnHover
        showDots
        cardWidth={520}
        cardHeight={320}
      />
    </div>
  );
}