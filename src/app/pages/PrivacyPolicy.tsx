import { PolicyHero } from '../components/PolicyHero';
import { PolicyContent } from '../components/PolicyContent';

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            Welcome to our Privacy Policy. This policy describes how we collect, use, and protect your personal information when you use our luxury event management services. We are committed to ensuring that your privacy is protected and that your data is handled with the utmost care and respect.
          </p>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8]">
            By using our services, you agree to the collection and use of information in accordance with this policy. We may update this policy from time to time, and we will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </>
      ),
    },
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            We collect several types of information to provide and improve our services:
          </p>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Personal Information:</strong> Name, email address, phone number, and billing address when you request a quote or book our services.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Event Details:</strong> Information about your event including date, location, guest count, budget, and specific requirements.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Usage Data:</strong> Information on how you access and use our website, including IP address, browser type, pages visited, and time spent on pages.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Communication Data:</strong> Records of correspondence when you contact us via email, phone, or contact forms.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'how-we-use-data',
      title: 'How We Use Your Data',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            Your information is used exclusively to provide, maintain, and improve our luxury event management services:
          </p>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>To process your event booking requests and provide personalized service recommendations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>To communicate with you regarding your events, including confirmations, updates, and support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>To improve our website functionality and user experience based on usage patterns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>To send you marketing communications about our services (only with your consent)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>To comply with legal obligations and protect our rights and interests</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. Cookies are small data files stored on your device.
          </p>
          <h3 className="text-[22px] tracking-tight text-[#E5E5E5] mt-8 mb-4">
            Types of Cookies We Use
          </h3>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Essential Cookies:</strong> Required for the website to function properly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Analytics Cookies:</strong> Help us understand how visitors interact with our website</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Preference Cookies:</strong> Remember your settings and preferences</span>
            </li>
          </ul>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8] mt-6">
            You can control cookie preferences through your browser settings. However, disabling certain cookies may affect website functionality.
          </p>
        </>
      ),
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Our security practices include:
          </p>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Encrypted data transmission using SSL/TLS protocols</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Secure storage of personal data on protected servers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Regular security audits and vulnerability assessments</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span>Limited access to personal data on a need-to-know basis</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      content: (
        <>
          <p className="text-[17px] leading-[1.8] text-[#E5E5E5] mb-6">
            You have the following rights regarding your personal data:
          </p>
          <ul className="space-y-4 text-[17px] leading-[1.8] text-[#B8B8B8]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Access:</strong> Request a copy of the personal data we hold about you</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Correction:</strong> Request correction of inaccurate or incomplete data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Deletion:</strong> Request deletion of your personal data under certain conditions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Objection:</strong> Object to processing of your data for marketing purposes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full mt-3 flex-shrink-0" />
              <span><strong className="text-[#E5E5E5]">Portability:</strong> Request transfer of your data to another service provider</span>
            </li>
          </ul>
          <p className="text-[17px] leading-[1.8] text-[#B8B8B8] mt-6">
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:legal@luxuryevents.com" className="text-[#C6A75E] hover:underline">
              legal@luxuryevents.com
            </a>
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-[#0B0B0D] text-white min-h-screen">
      <PolicyHero title="Privacy Policy" lastUpdated="12 February 2026" />
      <PolicyContent sections={sections} />
    </div>
  );
}
