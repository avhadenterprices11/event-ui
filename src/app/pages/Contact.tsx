import { ContactHero } from '../components/ContactHero';
import { ContactInfoCards } from '../components/ContactInfoCards';
import { MainContactSection } from '../components/MainContactSection';
import { ContactCTA } from '../components/ContactCTA';

export default function Contact() {
  return (
    <div className="bg-[#0B0B0D] text-white">
      <ContactHero />
      <ContactInfoCards />
      <MainContactSection />
      <ContactCTA />
    </div>
  );
}
