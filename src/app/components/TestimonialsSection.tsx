import { ImageWithFallback } from './figma/ImageWithFallback';
import { testimonialsData } from '../data/testimonials';

const testimonials = testimonialsData;

const columns = [
  { start: 0, end: 3, className: "hidden md:block animate-scroll-up-1" },
  { start: 3, end: 6, className: "hidden md:block animate-scroll-up-2" },
  { start: 6, end: 9, className: "hidden lg:block animate-scroll-up-3" }
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-gradient-to-b from-[#0B0B0D] to-[#1a1a1d] border border-[#C6A75E]/20 rounded-xl p-6 mb-4 hover:border-[#C6A75E]/50 transition-all duration-300">
      <div className="mb-5">
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#C6A75E" strokeOpacity=".7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13.056c.464 0 .91-.131 1.237-.364.329-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88C7.91 6.97 7.464 6.838 7 6.838c-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.513-.879.328-.233.773-.364 1.237-.364.232 0 .455-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.619-.181c-1.392 0-2.728.393-3.712 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.513.88.328.233.773.364 1.237.364zm9.83 0c.465 0 .91-.131 1.238-.364.328-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88-.328-.233-.773-.364-1.237-.364-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.512-.879.329-.233.774-.364 1.238-.364.232 0 .454-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.62-.181c-1.391 0-2.727.393-3.711 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.512.88.329.233.774.364 1.238.364z"/>
          </g>
        </svg>
      </div>
      <p className="text-sm text-[#B8B8B8] mb-5 leading-relaxed">
        {testimonial.description}
      </p>
      <div className="flex items-center gap-3">
        <ImageWithFallback 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="size-9 rounded-full border border-[#C6A75E]/30" 
        />
        <div>
          <p className="text-sm text-[#F5F5F5]">{testimonial.name}</p>
          <p className="text-sm text-[#B8B8B8]/70">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <>
      <style>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-up-1 {
          animation: scroll-up 25s linear infinite;
        }
        .animate-scroll-up-2 {
          animation: scroll-up 30s linear infinite;
        }
        .animate-scroll-up-3 {
          animation: scroll-up 20s linear infinite; 
        }
        .animate-scroll-up-mobile {
          animation: scroll-up 60s linear infinite;
        }
      `}</style>
      
      <div className="bg-[#0B0B0D] flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-[44px] md:text-5xl tracking-tight text-[#F5F5F5] mb-4">
            Client Testimonials
          </h2>
          <p className="text-sm text-[#B8B8B8] max-w-md mx-auto leading-relaxed">
            Real stories from clients who trusted us with their most important celebrations and corporate events.
          </p>
        </div>

        <div className="relative w-full max-w-6xl overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-b from-[#0B0B0D] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-[#0B0B0D] to-transparent z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[500px] md:h-[600px] overflow-hidden px-2 md:px-0">
            {/* Mobile Column: Shows ALL testimonials so none are hidden from mobile users */}
            <div className="block md:hidden animate-scroll-up-mobile">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard 
                  key={`mob-${testimonial.id}-${index}`} 
                  testimonial={testimonial} 
                />
              ))}
            </div>

            {/* Desktop Columns */}
            {columns.map((col, colIndex) => {
              const columnTestimonials = [
                ...testimonials.slice(col.start, col.end), 
                ...testimonials.slice(col.start, col.end)
              ];
              
              return (
                <div key={colIndex} className={col.className}>
                  {columnTestimonials.map((testimonial, index) => (
                    <TestimonialCard 
                      key={`col${colIndex}-${testimonial.id}-${index}`} 
                      testimonial={testimonial} 
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}