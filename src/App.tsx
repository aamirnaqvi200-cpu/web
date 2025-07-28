import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

interface TestimonialBadge {
  word: string;
  rating: number;
  attribution: string;
  position: { top: string; left: string };
  delay: number;
}

const testimonialBadges: TestimonialBadge[] = [
  { word: "VISIONARY", rating: 5, attribution: "— Forbes", position: { top: "10%", left: "15%" }, delay: 1.2 },
  { word: "MASTERFUL", rating: 5, attribution: "— Design Week", position: { top: "15%", left: "88%" }, delay: 1.8 },
  { word: "BRILLIANT", rating: 5, attribution: "— Creative Review", position: { top: "25%", left: "5%" }, delay: 2.4 },
  { word: "INNOVATIVE", rating: 5, attribution: "— Fast Company", position: { top: "30%", left: "92%" }, delay: 3.0 },
  { word: "ICONIC", rating: 5, attribution: "— Dezeen", position: { top: "70%", left: "3%" }, delay: 2.1 },
  { word: "PROFOUND", rating: 5, attribution: "— AIGA", position: { top: "75%", left: "90%" }, delay: 3.3 },
  { word: "STUNNING", rating: 5, attribution: "— Vogue", position: { top: "12%", left: "50%" }, delay: 2.7 },
  { word: "EXCEPTIONAL", rating: 5, attribution: "— GQ", position: { top: "68%", left: "50%" }, delay: 3.6 },
  { word: "REVOLUTIONARY", rating: 5, attribution: "— Wired", position: { top: "40%", left: "2%" }, delay: 2.0 },
  { word: "CAPTIVATING", rating: 5, attribution: "— Elle", position: { top: "45%", left: "95%" }, delay: 3.9 }
];

function TestimonialBadge({ badge }: { badge: TestimonialBadge }) {
  return (
    <div 
      className="absolute opacity-0 animate-fade-in-delayed group cursor-default"
      style={{ 
        top: badge.position.top, 
        left: badge.position.left,
        animationDelay: `${badge.delay}s`,
        animationFillMode: 'forwards'
      }}
    >
      <div className="text-left">
        {/* Stars */}
        <div className="flex mb-1">
          {[...Array(badge.rating)].map((_, i) => (
            <Star 
              key={i} 
              size={10} 
              className="fill-white/20 text-white/70 mr-0.5" 
            />
          ))}
        </div>

       <div className="relative inline-block text-[1.6rem] sm:text-2xl font-bosenAlt uppercase tracking-wide leading-none">
          {/* Actual Word with Shine Animation */}
          <span className="relative z-10 text-white/10 animate-shine">{badge.word}</span>
        </div>

        {/* Attribution */}
        <div className="mt-1 text-sm text-white/20 font-light tracking-wide">
          {badge.attribution}
        </div>
      </div>
    </div>
  );
}

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !textRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 15;
      const y = (clientY / innerHeight - 0.5) * 15;
      
      textRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative">
      {/* Main Hero Section */}
      <div 
        ref={heroRef}
className="relative min-h-screen w-full overflow-hidden bg-transparent"
      >
        {/* External Background Image */} 
<div 
  className="absolute inset-0 bg-cover bg-center opacity-100"
  style={{
    backgroundImage: `url('/public/bg.png')`,
  }}
/>

        {/* Background Text - Aamir Naqvi */}
       
        {/* Portrait */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ top: '-10%' }}>
          <div className="relative">
            <div 
              className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] overflow-hidden opacity-0 animate-fade-in-delayed"
              style={{
                width: '800px',
                height: '800px', 
                animationDelay: '0.3s', 
                animationFillMode: 'forwards' 
              }}
            > 
              <img 
                src="/public/me.png"
                alt="Portrait"
                className="w-full h-full object-cover grayscale contrast-110 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent" />
            </div> 
          </div>
        </div> 

        {/* Main Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: '25%' }}>
          <div className="text-center z-10 px-6">
            <div 
              className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white/80 leading-tight opacity-0 animate-fade-in-delayed"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards'  }}
            >
              I EDIT
            </div>
            <div 
              className="text-2xl md:text-3xl lg:text-4xl font-mid tracking-tight text-white/80 leading-tight mt-2 opacity-0 animate-fade-in-delayed"
              style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
            >
              VISUALS THAT
            </div>
            <div 
              className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mt-2 opacity-0 animate-fade-in-delayed"
              style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}
            >
              BUILD BRANDS
            </div>
            
            {/* Subtitle */}
            <div 
              className="text-lg md:text-xl text-white/60 font-light tracking-wide mt-8 max-w-md mx-auto opacity-0 animate-fade-in-delayed"
              style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
            >
              Where artistry meets innovation, and every detail tells a story worth remembering.
            </div>

            {/* Accent Line */}
            <div 
              className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8 opacity-0 animate-fade-in-delayed"
              style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}
            />
          </div>
        </div>

        {/* Floating Testimonial Badges */}
        {testimonialBadges.map((badge, index) => (
          <TestimonialBadge key={index} badge={badge} />
        ))}

        {/* Background Text - Aamir Naqvi at Bottom */}
        <div 
          ref={textRef}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none transition-transform duration-100 ease-out"
          style={{ bottom: '5%' }}
        >
          <div 
            className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-white/5 select-none leading-none opacity-0 animate-fade-in-delayed"
            style={{ 
              animationDelay: '0.1s', 
              animationFillMode: 'forwards' 
            }}
          >
            AAMIR NAQVI
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div 
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-delayed"
          style={{ animationDelay: '3.5s', animationFillMode: 'forwards' }}
        >
          <div className="flex flex-col items-center text-white/40">
            <div className="text-xs tracking-widest font-light mb-3">EXPLORE</div>
            <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;