import { PolicyHero } from '../components/PolicyHero';
import { PolicyContent } from '../components/PolicyContent';

export default function CancellationPolicy() {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            This Cancellation Policy outlines the procedures and terms for cancelling event management services. We understand that unforeseen circumstances may require cancellation, and we aim to handle such situations with fairness and professionalism.
          </p>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8]">
            All cancellations must be submitted in writing and will be subject to the terms specified in your service agreement and this policy. Cancellation fees are designed to cover costs already incurred and commitments made on your behalf.
          </p>
        </>
      ),
    },
    {
      id: 'cancellation-timeline',
      title: 'Cancellation Timeline & Fees',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            Cancellation fees are calculated based on how far in advance you cancel relative to your event date:
          </p>
          <h3 className="text-[22px] tracking-tight text-[#E5E5E5] mt-8 mb-4">
            More than 180 Days Before Event
          </h3>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8] mb-8">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Cancellation fee: 20% of total contract value</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Covers initial planning, consultations, and administrative costs</span>
            </li>
          </ul>

          <h3 className="text-[22px] tracking-tight text-[#E5E5E5] mt-8 mb-4">
            120-180 Days Before Event
          </h3>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8] mb-8">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Cancellation fee: 50% of total contract value</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Covers planning time, vendor deposits, and design work completed</span>
            </li>
          </ul>

          <h3 className="text-[22px] tracking-tight text-[#E5E5E5] mt-8 mb-4">
            60-120 Days Before Event
          </h3>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8] mb-8">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Cancellation fee: 75% of total contract value</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Covers extensive planning, vendor commitments, and opportunity costs</span>
            </li>
          </ul>

          <h3 className="text-[22px] tracking-tight text-[#E5E5E5] mt-8 mb-4">
            Less than 60 Days Before Event
          </h3>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Cancellation fee: 100% of total contract value</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Full payment required as services are substantially complete</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'cancellation-process',
      title: 'Cancellation Process',
      content: (
        <>
          <h3 className="text-[22px] tracking-tight text-[#E5E5E5] mb-4">
            How to Cancel Your Event
          </h3>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8] mb-6">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Submit written cancellation notice to <a href="mailto:legal@luxuryevents.com" className="text-[#C6A75E] hover:underline">legal@luxuryevents.com</a></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Include your contract number, event date, and reason for cancellation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Our team will acknowledge receipt within 24 hours</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>You will receive a detailed breakdown of cancellation fees and any applicable refunds within 5 business days</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>We will coordinate with vendors to cancel services and pursue refunds where possible</span>
            </li>
          </ul>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8]">
            Cancellation is effective from the date we receive your written notice, not from the date you decide to cancel.
          </p>
        </>
      ),
    },
    {
      id: 'postponement',
      title: 'Postponement vs. Cancellation',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            Postponing your event to a new date may be a better alternative to full cancellation:
          </p>
          <h3 className="text-[22px] tracking-tight text-[#E5E5E5] mt-8 mb-4">
            Postponement Benefits
          </h3>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8] mb-8">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>All payments made remain credited to your account</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Planning work and designs can be preserved for the new date</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Vendor relationships and commitments may be transferable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Administrative fee of ₹50,000 applies (waived for force majeure events)</span>
            </li>
          </ul>

          <h3 className="text-[22px] tracking-tight text-[#E5E5E5] mt-8 mb-4">
            Postponement Conditions
          </h3>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>New event date must be within 18 months of original date</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Subject to our availability on the new date</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Only one postponement permitted per contract</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Vendor availability and pricing may vary for the new date</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'vendor-cancellations',
      title: 'Third-Party Vendor Cancellations',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            When you cancel, we will assist with third-party vendor cancellations:
          </p>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>We will notify all contracted vendors immediately upon receiving your cancellation notice</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>We will request refunds according to each vendor's individual cancellation policy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Any refunds obtained from vendors will be passed through to you in full</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>We cannot guarantee vendor refunds as they are subject to third-party policies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>We will provide all documentation needed for you to pursue vendor refunds independently if needed</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'special-circumstances',
      title: 'Special Circumstances',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            We recognize that certain extraordinary circumstances may warrant special consideration:
          </p>
          <h3 className="text-[22px] tracking-tight text-[#E5E5E5] mt-8 mb-4">
            Force Majeure Events
          </h3>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8] mb-6">
            For cancellations due to natural disasters, pandemics, government restrictions, or other force majeure events, reduced cancellation fees may apply. We will work with you on a case-by-case basis to find the fairest solution.
          </p>

          <h3 className="text-[22px] tracking-tight text-[#E5E5E5] mt-8 mb-4">
            Medical Emergencies
          </h3>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8] mb-6">
            Cancellations due to serious illness, injury, or death of immediate family members may qualify for reduced fees with appropriate documentation. We recommend event insurance to cover such situations.
          </p>

          <h3 className="text-[22px] tracking-tight text-[#E5E5E5] mt-8 mb-4">
            Our Cancellation
          </h3>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8]">
            In the unlikely event that we must cancel our services, you will receive a full refund of all payments made, and we will assist you in finding alternative event management services at no additional cost.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-[#0B0B0D] text-white min-h-screen">
      <PolicyHero title="Cancellation Policy" lastUpdated="12 February 2026" />
      <PolicyContent sections={sections} />
    </div>
  );
}
