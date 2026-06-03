import { motion } from 'motion/react';
import { ReactNode, useEffect, useState } from 'react';

interface PolicySection {
  id: string;
  title: string;
  content: ReactNode;
}

interface PolicyContentProps {
  sections: PolicySection[];
  contactEmail?: string;
}

export function PolicyContent({ sections, contactEmail = 'legal@luxuryevents.com' }: PolicyContentProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const currentSection = sectionElements.find(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 pb-32">
      <div className="max-w-[820px] mx-auto px-8">
        {/* Anchor Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 pb-8 border-b border-[#C6A75E]/20"
        >
          <div className="flex flex-wrap gap-6 justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm transition-all duration-300 relative group ${
                  activeSection === section.id
                    ? 'text-[#C6A75E]'
                    : 'text-gray-400 hover:text-[#C6A75E]'
                }`}
              >
                {section.title}
                <span className={`absolute bottom-[-4px] left-0 h-px bg-[#C6A75E] transition-all duration-300 ${
                  activeSection === section.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>
        </motion.nav>

        {/* Policy Sections */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-[30px] tracking-tight text-[#E5E5E5]">
                {section.title}
              </h2>
              
              <div className="prose-policy">
                {section.content}
              </div>

              {/* Section divider */}
              {index < sections.length - 1 && (
                <div className="pt-8">
                  <div className="w-full h-px bg-[#C6A75E]/10" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-[#111114] border border-[#C6A75E]/30 rounded-xl p-10 text-center space-y-4"
        >
          <h3 className="text-2xl tracking-tight text-[#E5E5E5]">
            Questions About This Policy?
          </h3>
          <p className="text-gray-400">
            If you have any questions or concerns, please contact us at:
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="text-[#C6A75E] text-lg hover:underline transition-all inline-block"
          >
            {contactEmail}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
