import { PolicyHero } from '../components/PolicyHero';
import { PolicyContent } from '../components/PolicyContent';

export default function RefundPolicy() {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            This Refund Policy outlines the conditions under which refunds may be issued for our luxury event management services. We understand that circumstances can change, and we strive to be fair and transparent in our refund procedures.
          </p>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8]">
            All refund requests must be submitted in writing to our team. Refunds are subject to the terms outlined below and will be processed according to the specific circumstances of each case.
          </p>
        </>
      ),
    },
    {
      id: 'deposit-refunds',
      title: 'Deposit Refunds',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            The initial deposit paid upon contract signing is subject to the following refund conditions:
          </p>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">More than 180 days before event:</strong> 80% of deposit refundable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">120-180 days before event:</strong> 50% of deposit refundable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">60-120 days before event:</strong> 25% of deposit refundable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Less than 60 days before event:</strong> No deposit refund</span>
            </li>
          </ul>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8] mt-6">
            Non-refundable portions cover administrative costs, planning time invested, and opportunity costs from holding your event date.
          </p>
        </>
      ),
    },
    {
      id: 'service-fee-refunds',
      title: 'Service Fee Refunds',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            Refunds for service fees paid beyond the initial deposit are calculated based on the extent of services already provided:
          </p>
          <h3 className="text-[22px] tracking-tight text-[#E5E5E5] mt-8 mb-4">
            Refund Calculation
          </h3>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Deduction for planning hours and consultations already completed</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Deduction for vendor deposits and commitments made on your behalf</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Deduction for custom designs, materials, and resources created</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Administrative fee of 10% on refundable amount</span>
            </li>
          </ul>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8] mt-6">
            A detailed breakdown of services rendered and associated costs will be provided with any refund calculation.
          </p>
        </>
      ),
    },
    {
      id: 'vendor-expenses',
      title: 'Third-Party Vendor Expenses',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            Important information regarding vendor-related expenses:
          </p>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Deposits paid to third-party vendors (venues, caterers, florists, etc.) are non-refundable through our company</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Clients must pursue refunds for vendor services directly with those vendors according to their individual policies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>We will provide all necessary documentation and assistance to help you request vendor refunds</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Any vendor refunds successfully obtained will be passed through to clients in full</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'force-majeure',
      title: 'Force Majeure & Exceptional Circumstances',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            In cases of force majeure events or exceptional circumstances beyond anyone's control:
          </p>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Natural Disasters:</strong> Events affected by earthquakes, floods, or severe weather</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Public Health Emergencies:</strong> Pandemics, epidemics, or mandatory lockdowns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Government Restrictions:</strong> Legal prohibitions on gatherings or events</span>
            </li>
          </ul>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8] mt-6">
            In such cases, we will work with you to either reschedule your event or provide the maximum possible refund. We strongly recommend event cancellation insurance to protect against such situations.
          </p>
        </>
      ),
    },
    {
      id: 'refund-process',
      title: 'Refund Process & Timeline',
      content: (
        <>
          <h3 className="text-[22px] tracking-tight text-[#E5E5E5] mb-4">
            How to Request a Refund
          </h3>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8] mb-6">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Submit a written refund request to <a href="mailto:legal@luxuryevents.com" className="text-[#C6A75E] hover:underline">legal@luxuryevents.com</a></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Include your contract number, event date, and reason for cancellation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Our team will review your request within 5 business days</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>You will receive a detailed refund calculation and timeline</span>
            </li>
          </ul>
          <h3 className="text-[22px] tracking-tight text-[#E5E5E5] mt-8 mb-4">
            Processing Timeline
          </h3>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8]">
            Approved refunds will be processed within 14-21 business days and returned via the original payment method. Bank transfers may take an additional 3-5 business days to appear in your account.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-[#0B0B0D] text-white min-h-screen">
      <PolicyHero title="Refund Policy" lastUpdated="12 February 2026" />
      <PolicyContent sections={sections} />
    </div>
  );
}
