import { useParams, Navigate } from 'react-router';
import { IndividualEventHero } from '../components/IndividualEventHero';
import { EventOverview } from '../components/EventOverview';
import { ServicesIncluded } from '../components/ServicesIncluded';
import { EventGallery } from '../components/EventGallery';
import { PlanningProcess } from '../components/PlanningProcess';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { EventFAQ } from '../components/EventFAQ';
import { GetQuoteSection } from '../components/GetQuoteSection';

const eventData = {
  wedding: {
    eventType: 'WEDDING EVENTS',
    title: 'Timeless Wedding Celebrations',
    description: 'An unforgettable experience curated with elegance, precision, and artistry.',
    heroImage: 'https://images.unsplash.com/photo-1761499101631-92cde2434bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNlcmVtb255JTIwbHV4dXJ5JTIwdmVudWV8ZW58MXx8fHwxNzcyMjcwOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    overviewImage: 'https://images.unsplash.com/photo-1763553113332-800519753e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZGVjb3IlMjBlbGVnYW50fGVufDF8fHx8MTc3MjI3MDk0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    overviewParagraphs: [
      'Our wedding events are meticulously crafted to celebrate the most significant day of your life with unparalleled elegance and sophistication. Every moment is designed to reflect your unique love story, creating an atmosphere of refined luxury and timeless beauty.',
      'From intimate garden ceremonies to grand ballroom receptions, we transform your vision into an extraordinary reality. Our expert team handles every detail with precision, ensuring a seamless experience that allows you to fully immerse yourself in the celebration.',
      'With access to the world\'s finest venues, premium vendors, and exclusive resources, we create wedding experiences that transcend expectations. Each element is carefully curated to deliver a celebration that will be remembered for a lifetime.',
    ],
    services: [
      {
        title: 'Venue Styling',
        description: 'Transform any space into your dream celebration venue with custom décor and design',
      },
      {
        title: 'Lighting & Production',
        description: 'Create the perfect ambiance with professional lighting and audio-visual production',
      },
      {
        title: 'Guest Management',
        description: 'Seamless coordination of guest experience from invitations to departure',
      },
      {
        title: 'Catering Coordination',
        description: 'Gourmet culinary experiences from world-renowned chefs and caterers',
      },
      {
        title: 'Entertainment Booking',
        description: 'Exclusive access to premium performers and entertainment options',
      },
      {
        title: 'Event Branding',
        description: 'Custom design elements and personalized touches throughout your celebration',
      },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1763553113391-a659bee36e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBzZXR1cCUyMGx1eHVyeSUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3MjI3MDk0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1765614767234-8a56ad4c87f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZmxvd2VycyUyMGRlY29yYXRpb24lMjBlbGVnYW50fGVufDF8fHx8MTc3MjI3MDk0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1758307390525-46a0825d4e50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd2VkZGluZyUyMHRhYmxlJTIwc2V0dGluZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyMjcwOTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768488292627-7471f9881677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwb3V0ZG9vciUyMGNlcmVtb255JTIwdmVudWV8ZW58MXx8fHwxNzcyMjcwOTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1761499101631-92cde2434bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNlcmVtb255JTIwbHV4dXJ5JTIwdmVudWV8ZW58MXx8fHwxNzcyMjcwOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1763553113332-800519753e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZGVjb3IlMjBlbGVnYW50fGVufDF8fHx8MTc3MjI3MDk0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    faqs: [
      {
        question: 'How far in advance should we book your wedding planning services?',
        answer: 'We recommend booking 12-18 months in advance to ensure availability and allow ample time for meticulous planning. However, we can accommodate shorter timelines depending on our schedule and your event requirements.',
      },
      {
        question: 'What is included in your full-service wedding planning package?',
        answer: 'Our comprehensive package includes venue selection, vendor coordination, design concept development, timeline management, guest experience planning, day-of coordination, and unlimited consultations throughout the planning process.',
      },
      {
        question: 'Do you handle destination weddings?',
        answer: 'Absolutely. We specialize in luxury destination weddings worldwide, with established relationships at premier venues and vendors across the globe. Our team handles all logistics, from travel arrangements to local vendor coordination.',
      },
      {
        question: 'Can you work within our budget while maintaining luxury standards?',
        answer: 'Yes, we create customized proposals that align with your budget while maintaining our commitment to luxury and excellence. We leverage our industry relationships to maximize value without compromising quality.',
      },
      {
        question: 'What makes your wedding planning services unique?',
        answer: 'Our personalized approach, attention to detail, exclusive vendor network, and commitment to creating unique experiences set us apart. Each wedding is treated as a bespoke celebration, never replicated.',
      },
    ],
  },
  corporate: {
    eventType: 'CORPORATE EVENTS',
    title: 'Distinguished Corporate Experiences',
    description: 'Elevate your brand with sophisticated corporate events that inspire and impress.',
    heroImage: 'https://images.unsplash.com/photo-1609189123897-42db027571c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3Jwb3JhdGUlMjBnYWxhJTIwZXZlbnR8ZW58MXx8fHwxNzcyNDM1OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    overviewImage: 'https://images.unsplash.com/photo-1759458675607-7e76f54e396c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHN0YWdlJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzcyMzQ2NjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    overviewParagraphs: [
      'Our corporate event services deliver premium experiences that elevate your brand and create lasting impressions. From executive galas to international conferences, we orchestrate events that seamlessly blend professionalism with sophistication.',
      'Every corporate event is designed to reflect your company\'s values and objectives while providing an unforgettable experience for your guests. Our team expertly manages every aspect, from strategic planning to flawless execution.',
      'With extensive experience across industries, we specialize in creating corporate events that engage audiences, strengthen relationships, and drive business outcomes. Trust us to transform your vision into a powerful reality.',
    ],
    services: [
      {
        title: 'Conference Planning',
        description: 'Full-service coordination for international conferences and industry summits',
      },
      {
        title: 'Product Launches',
        description: 'Spectacular unveilings that generate buzz and showcase your innovation',
      },
      {
        title: 'Gala Dinners',
        description: 'Elegant corporate galas and award ceremonies that celebrate excellence',
      },
      {
        title: 'Team Building',
        description: 'Engaging corporate retreats and team-building experiences',
      },
      {
        title: 'Brand Activation',
        description: 'Immersive brand experiences and experiential marketing events',
      },
      {
        title: 'Executive Events',
        description: 'Exclusive C-suite gatherings and VIP networking functions',
      },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1609189123897-42db027571c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3Jwb3JhdGUlMjBnYWxhJTIwZXZlbnR8ZW58MXx8fHwxNzcyNDM1OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759458675607-7e76f54e396c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHN0YWdlJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzcyMzQ2NjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1764380746818-18c01e96df12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3Jwb3JhdGUlMjBwYXJ0eSUyMHNldHVwfGVufDF8fHx8MTc3MjQzNTk0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1673081752959-addbc864f678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMGdhbGElMjBkaW5uZXJ8ZW58MXx8fHwxNzcyNDM1OTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768508948849-b2ee9e074ab1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBuZXR3b3JraW5nJTIwZXZlbnQlMjBlbGVnYW50fGVufDF8fHx8MTc3MjM5MTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1609189123897-42db027571c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3Jwb3JhdGUlMjBnYWxhJTIwZXZlbnR8ZW58MXx8fHwxNzcyNDM1OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    faqs: [
      {
        question: 'What types of corporate events do you specialize in?',
        answer: 'We specialize in conferences, product launches, corporate galas, team-building retreats, brand activations, and executive networking events. Our expertise spans across all industries and event scales.',
      },
      {
        question: 'Can you manage multi-city or international corporate events?',
        answer: 'Absolutely. We have extensive experience coordinating multi-location and international corporate events, with established vendor networks and local partners worldwide to ensure consistent excellence.',
      },
      {
        question: 'How do you measure the success of corporate events?',
        answer: 'We work with you to define clear KPIs aligned with your business objectives, whether that\'s attendee engagement, lead generation, brand awareness, or employee satisfaction. Post-event analytics and reporting are included.',
      },
      {
        question: 'What is your approach to corporate event branding?',
        answer: 'We create cohesive brand experiences that align with your corporate identity while adding innovative touches. Every element, from stage design to attendee materials, reinforces your brand message.',
      },
      {
        question: 'Do you provide technology and AV support for corporate events?',
        answer: 'Yes, we offer comprehensive technology solutions including live streaming, hybrid event platforms, interactive displays, professional AV equipment, and technical support throughout your event.',
      },
    ],
  },
  'birthday-social': {
    eventType: 'BIRTHDAY & SOCIAL EVENTS',
    title: 'Extraordinary Personal Celebrations',
    description: 'Create unforgettable memories with bespoke celebrations tailored to your unique style.',
    heroImage: 'https://images.unsplash.com/photo-1758870041148-31d28fdf34d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwcGFydHl8ZW58MXx8fHwxNzcyNDM1OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    overviewImage: 'https://images.unsplash.com/photo-1768508950918-c87e2f544573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc29jaWFsJTIwZXZlbnQlMjB2ZW51ZXxlbnwxfHx8fDE3NzI0MzU5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    overviewParagraphs: [
      'Your milestone celebrations deserve the extraordinary. We specialize in creating bespoke birthday parties, anniversaries, and social gatherings that reflect your personality and exceed every expectation.',
      'From intimate dinner parties to lavish milestone celebrations, every detail is thoughtfully curated to create an atmosphere of joy and sophistication. Our creative team transforms your ideas into stunning realities.',
      'Whether celebrating a significant birthday, anniversary, or special achievement, we ensure your event is a true reflection of you. Let us handle the details while you enjoy making memories with those who matter most.',
    ],
    services: [
      {
        title: 'Milestone Birthdays',
        description: 'Spectacular celebrations for 30th, 40th, 50th birthdays and beyond',
      },
      {
        title: 'Anniversary Parties',
        description: 'Romantic and elegant celebrations of love and commitment',
      },
      {
        title: 'Themed Celebrations',
        description: 'Creative themed parties with immersive décor and entertainment',
      },
      {
        title: 'Intimate Gatherings',
        description: 'Sophisticated small-scale celebrations for close friends and family',
      },
      {
        title: 'Garden Parties',
        description: 'Elegant outdoor celebrations in beautiful garden settings',
      },
      {
        title: 'Cocktail Soirées',
        description: 'Chic evening events with premium bar service and entertainment',
      },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1758870041148-31d28fdf34d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwcGFydHl8ZW58MXx8fHwxNzcyNDM1OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768508950918-c87e2f544573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc29jaWFsJTIwZXZlbnQlMjB2ZW51ZXxlbnwxfHx8fDE3NzI0MzU5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1770391691214-ce36ef11bbc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYmlydGhkYXklMjB0YWJsZSUyMHNldHRpbmd8ZW58MXx8fHwxNzcyNDM1OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768508947605-8c7a50aed683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzb2NpYWwlMjBnYXRoZXJpbmclMjBldmVudHxlbnwxfHx8fDE3NzI0MzU5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1755704282977-340323fa52df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmlydGhkYXklMjBwYXJ0eSUyMHNldHVwfGVufDF8fHx8MTc3MjQzNTk1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1770045517842-5a5c801be34c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcGFydHklMjBsaWdodGluZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyNDM1OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    faqs: [
      {
        question: 'What makes your birthday and social event planning unique?',
        answer: 'We create completely personalized experiences that reflect your individual style and preferences. No two celebrations are alike—each is uniquely designed to tell your story and create lasting memories.',
      },
      {
        question: 'Can you accommodate both intimate and large-scale celebrations?',
        answer: 'Absolutely. We excel at events of all sizes, from intimate dinner parties for 20 guests to grand celebrations for 500+. Our approach remains consistently personalized regardless of scale.',
      },
      {
        question: 'Do you offer themed party planning services?',
        answer: 'Yes, we specialize in creating immersive themed celebrations, from elegant masquerade balls to sophisticated garden parties. Our creative team brings any vision to life with authentic details.',
      },
      {
        question: 'How far in advance should I book for a milestone birthday?',
        answer: 'We recommend booking 6-12 months in advance for milestone birthdays to ensure optimal venue availability and vendor selection. However, we can accommodate shorter timelines when needed.',
      },
      {
        question: 'Can you help with surprise parties?',
        answer: 'Absolutely! We have extensive experience coordinating surprise celebrations, managing all logistics discreetly while ensuring the guest of honor remains completely unaware until the perfect reveal moment.',
      },
    ],
  },
  destination: {
    eventType: 'DESTINATION EVENTS',
    title: 'Exquisite Destination Celebrations',
    description: 'Transform breathtaking locations into unforgettable celebration experiences.',
    heroImage: 'https://images.unsplash.com/photo-1766910701111-9eee02328e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkZXN0aW5hdGlvbiUyMHdlZGRpbmclMjBiZWFjaHxlbnwxfHx8fDE3NzI0MzU5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    overviewImage: 'https://images.unsplash.com/photo-1766043370445-b408e02292c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGRlc3RpbmF0aW9uJTIwZXZlbnQlMjBzZXR1cHxlbnwxfHx8fDE3NzI0MzU5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    overviewParagraphs: [
      'Experience the ultimate luxury of celebrating in the world\'s most spectacular destinations. We specialize in orchestrating seamless events in breathtaking locations, from pristine beaches to historic estates and exotic resorts.',
      'Our destination event expertise ensures every detail is flawlessly executed, no matter the location. We handle all logistics, from travel coordination to local vendor management, creating an effortless experience for you and your guests.',
      'With established relationships at premier destinations worldwide, we transform extraordinary locations into personalized celebrations that exceed imagination. Let us take you and your guests on an unforgettable journey.',
    ],
    services: [
      {
        title: 'Location Scouting',
        description: 'Expert curation of breathtaking destinations tailored to your vision',
      },
      {
        title: 'Travel Coordination',
        description: 'Comprehensive travel and accommodation arrangements for all guests',
      },
      {
        title: 'Local Vendor Network',
        description: 'Access to premium local vendors and trusted partners worldwide',
      },
      {
        title: 'Logistics Management',
        description: 'Seamless coordination of international shipping and on-site logistics',
      },
      {
        title: 'Guest Experience',
        description: 'Curated itineraries and excursions for the ultimate guest experience',
      },
      {
        title: 'Legal & Permits',
        description: 'Complete handling of legal requirements and destination permits',
      },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1766910701111-9eee02328e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkZXN0aW5hdGlvbiUyMHdlZGRpbmclMjBiZWFjaHxlbnwxfHx8fDE3NzI0MzU5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1766043370445-b408e02292c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGRlc3RpbmF0aW9uJTIwZXZlbnQlMjBzZXR1cHxlbnwxfHx8fDE3NzI0MzU5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1761085590866-e94c99818636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjB3ZWRkaW5nJTIwdmVudWV8ZW58MXx8fHwxNzcyNDM1OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1761569379330-11c0a38e0e78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXN0aW5hdGlvbiUyMGNlbGVicmF0aW9uJTIwb3V0ZG9vciUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyNDM1OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1620318936760-546d065d03eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaGZyb250JTIwZXZlbnQlMjByZWNlcHRpb258ZW58MXx8fHwxNzcyNDM1OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768488292764-8da1562789b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpc2xhbmQlMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzcyNDM1OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    faqs: [
      {
        question: 'Which destinations do you specialize in?',
        answer: 'We plan destination events worldwide, with particular expertise in the Mediterranean, Caribbean, South Pacific, and exclusive resort destinations across Europe, Asia, and the Americas. We can arrange events anywhere in the world.',
      },
      {
        question: 'How do you handle language barriers and local regulations?',
        answer: 'We work with trusted local partners who understand regional requirements and customs. Our team manages all permits, legal documentation, and communication with local vendors to ensure seamless execution.',
      },
      {
        question: 'What is included in destination event planning services?',
        answer: 'Our comprehensive service includes location scouting, venue selection, travel arrangements, accommodation booking, local vendor coordination, guest itineraries, on-site management, and complete logistics handling.',
      },
      {
        question: 'How do you manage unexpected challenges at destination events?',
        answer: 'We create detailed contingency plans for every scenario and maintain 24/7 on-site presence throughout your event. Our experience and local partnerships enable us to quickly address any unexpected situations.',
      },
      {
        question: 'Can guests extend their stay for a vacation?',
        answer: 'Absolutely. We can arrange extended accommodations and curated experiences for guests who wish to extend their trip, from spa treatments to excursions and local attractions.',
      },
    ],
  },
};

export default function IndividualEvent() {
  const { eventType } = useParams<{ eventType: string }>();
  
  // If no event type or invalid event type, redirect to events page
  if (!eventType || !(eventType in eventData)) {
    return <Navigate to="/events" replace />;
  }

  const data = eventData[eventType as keyof typeof eventData];

  return (
    <>
      <IndividualEventHero
        eventType={data.eventType}
        title={data.title}
        description={data.description}
        image={data.heroImage}
      />
      <EventOverview
        image={data.overviewImage}
        paragraphs={data.overviewParagraphs}
      />
      <ServicesIncluded services={data.services} />
      <EventGallery />
      <PlanningProcess />
      <TestimonialsSection />
      <EventFAQ faqs={data.faqs} />
      <GetQuoteSection />
    </>
  );
}