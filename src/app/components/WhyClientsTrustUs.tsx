import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Users, Star } from 'lucide-react';

export function WhyClientsTrustUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  // Detect when footer is in view
  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef, { once: false, margin: '0px' });

  const features = [
    {
      icon: Award,
      title: 'Award-Winning Excellence',
      description: 'Recognized globally for outstanding event design and execution.',
      subtitle: 'premium quality',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned professionals with decades of combined experience.',
      subtitle: 'dedicated experts',
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Uncompromising standards in every detail, every time.',
      subtitle: 'luxury service',
    },
  ];

  return (
    <>
      <section ref={ref} className="py-[100px] bg-[#111114]">
        <style>{`
          .trust-card {
            width: 100%;
            height: 280px;
            background: #0B0B0D;
            position: relative;
            display: grid;
            place-content: center;
            border-radius: 10px;
            overflow: hidden;
            transition: all 0.5s ease-in-out;
          }

          .trust-card-border {
            position: absolute;
            inset: 0px;
            border: 2px solid #C6A75E;
            opacity: 0;
            transform: rotate(10deg);
            transition: all 0.5s ease-in-out;
          }

          .trust-card-bottom-text {
            position: absolute;
            left: 50%;
            bottom: 18px;
            transform: translateX(-50%);
            font-size: 8px;
            text-transform: uppercase;
            padding: 0px 5px 0px 8px;
            color: #C6A75E;
            background: #0B0B0D;
            opacity: 0;
            letter-spacing: 7px;
            transition: all 0.5s ease-in-out;
          }

          .trust-card-content {
            transition: all 0.5s ease-in-out;
            text-align: center;
          }

          .trust-card-icon-wrapper {
            height: 80px;
            position: relative;
            width: 80px;
            margin: 0 auto;
            overflow: hidden;
            transition: all 1s ease-in-out;
            border-radius: 50%;
            background: linear-gradient(135deg, #C6A75E 0%, #E5C97A 100%);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .trust-card-icon {
            width: 40px;
            height: 40px;
            color: #0B0B0D;
          }

          .trust-card-trail {
            position: absolute;
            inset: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            border-radius: 50%;
          }

          .trust-card-subtitle {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            margin-top: 140px;
            color: #C6A75E;
            padding-left: 8px;
            font-size: 12px;
            opacity: 0;
            letter-spacing: none;
            transition: all 0.5s ease-in-out 0.5s;
          }

          .trust-card:hover,
          .trust-card.active {
            border-radius: 0;
            transform: scale(1.05);
          }

          .trust-card:hover .trust-card-icon-wrapper,
          .trust-card.active .trust-card-icon-wrapper {
            animation: icon-glow 1s ease-in-out;
          }

          .trust-card:hover .trust-card-border,
          .trust-card.active .trust-card-border {
            inset: 20px;
            opacity: 1;
            transform: rotate(0);
          }

          .trust-card:hover .trust-card-bottom-text,
          .trust-card.active .trust-card-bottom-text {
            letter-spacing: 4px;
            opacity: 1;
            transform: translateX(-50%);
          }

          .trust-card:hover .trust-card-subtitle,
          .trust-card.active .trust-card-subtitle {
            opacity: 1;
            letter-spacing: 6px;
          }

          .trust-card:hover .trust-card-trail,
          .trust-card.active .trust-card-trail {
            animation: icon-trail 1s ease-in-out;
          }

          @keyframes icon-glow {
            0% {
              box-shadow: 0 0 0 rgba(198, 167, 94, 0);
            }
            50% {
              box-shadow: 0 0 30px rgba(198, 167, 94, 0.8);
            }
            100% {
              box-shadow: 0 0 0 rgba(198, 167, 94, 0);
            }
          }

          @keyframes icon-trail {
            0% {
              background: radial-gradient(circle, rgba(198, 167, 94, 0) 60%, rgba(198, 167, 94, 0.8) 100%);
              opacity: 0;
            }
            30% {
              background: radial-gradient(circle, rgba(198, 167, 94, 0) 40%, rgba(198, 167, 94, 0.8) 100%);
              opacity: 1;
            }
            70% {
              background: radial-gradient(circle, rgba(198, 167, 94, 0) 40%, rgba(198, 167, 94, 0.8) 100%);
              opacity: 1;
            }
            95% {
              background: radial-gradient(circle, rgba(198, 167, 94, 0) 60%, rgba(198, 167, 94, 0.8) 100%);
              opacity: 0;
            }
          }
        `}</style>

        <div className="max-w-[1440px] mx-auto px-20">
          <motion.h2
            className="text-5xl text-center mb-16 text-[#F5F5F5]"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Related Insights
          </motion.h2>

          <div className="grid grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className={`trust-card ${isFooterInView ? 'active' : ''}`}>
                  <div className="trust-card-border"></div>
                  <div className="trust-card-content">
                    <div className="trust-card-icon-wrapper">
                      <feature.icon className="trust-card-icon" />
                      <span className="trust-card-trail"></span>
                    </div>
                    <h3
                      className="text-2xl mt-6 mb-3 text-[#F5F5F5]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-[#C6C6C6] leading-relaxed px-8">{feature.description}</p>
                    <span className="trust-card-subtitle">{feature.subtitle}</span>
                  </div>
                  <span className="trust-card-bottom-text">trusted excellence</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Hidden footer detection element */}
      <div ref={footerRef} className="h-px" />
    </>
  );
}