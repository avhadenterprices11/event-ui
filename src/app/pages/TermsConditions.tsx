import { PolicyHero } from '../components/PolicyHero';
import { PolicyContent } from '../components/PolicyContent';

export default function TermsConditions() {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            Welcome to our Terms and Conditions. These terms govern your use of our luxury event management services and website. By accessing or using our services, you agree to be bound by these terms.
          </p>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8]">
            Please read these terms carefully before using our services. If you do not agree with any part of these terms, you may not access our services. We reserve the right to modify these terms at any time, and such modifications will be effective immediately upon posting.
          </p>
        </>
      ),
    },
    {
      id: 'services',
      title: 'Our Services',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            We provide premium event management services including but not limited to:
          </p>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Complete event planning and coordination for weddings, corporate events, and social celebrations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Venue selection and booking assistance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Vendor coordination and management</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Event design and styling consultation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>On-site event coordination and execution</span>
            </li>
          </ul>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8] mt-6">
            Service packages are customized based on your specific requirements and will be detailed in your service agreement.
          </p>
        </>
      ),
    },
    {
      id: 'booking-payment',
      title: 'Booking & Payment Terms',
      content: (
        <>
          <h3 className="text-[22px] tracking-tight text-[#E5E5E5] mb-4">
            Booking Process
          </h3>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8] mb-6">
            To secure our services, clients must submit a booking request and receive written confirmation from our team. A signed service agreement and initial deposit are required to confirm your booking.
          </p>
          
          <h3 className="text-[22px] tracking-tight text-[#E5E5E5] mt-8 mb-4">
            Payment Schedule
          </h3>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Initial Deposit:</strong> 30% of total service fee due upon contract signing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Second Payment:</strong> 40% due 60 days before the event date</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Final Payment:</strong> 30% due 14 days before the event date</span>
            </li>
          </ul>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8] mt-6">
            All payments must be made via bank transfer or approved payment methods. Late payments may result in service suspension or additional fees.
          </p>
        </>
      ),
    },
    {
      id: 'client-responsibilities',
      title: 'Client Responsibilities',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            Clients are responsible for:
          </p>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Providing accurate and complete information regarding event requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Making timely decisions on proposals, designs, and vendor selections</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Ensuring all payments are made according to the agreed schedule</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Obtaining necessary permits and permissions for the event venue</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Communicating any changes or concerns promptly to our team</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            While we strive to provide exceptional service, our liability is subject to the following limitations:
          </p>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>We are not liable for delays or failures due to circumstances beyond our control, including force majeure events</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Our liability for any claim related to our services is limited to the amount paid for those services</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>We are not responsible for the actions or failures of third-party vendors, though we will assist in resolution</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>We recommend clients obtain appropriate event insurance to cover unforeseen circumstances</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            All content on our website, including text, graphics, logos, images, and designs, is the property of our company and protected by intellectual property laws.
          </p>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8] mb-6">
            Event designs, concepts, and materials created by our team remain our intellectual property. Clients receive a license to use these materials for their specific event but may not reproduce or use them for commercial purposes without written permission.
          </p>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8]">
            We may use photographs and materials from your event for marketing and promotional purposes unless you request otherwise in writing prior to the event.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-[#0B0B0D] text-white min-h-screen">
      <PolicyHero title="Terms & Conditions" lastUpdated="12 February 2026" />
      <PolicyContent sections={sections} />
    </div>
  );
}
