import React, { useRef, useState } from 'react';
import { Star, Award } from 'lucide-react';

const BarberTeamSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  const teamMembers = [
    {
      name: "Sarmad",
      role: "Senior Frisör",
      experience: "8+ år",
      video: "https://fvega0dwq1jnr8l4.public.blob.vercel-storage.com/Sarmad-99wxRM8x6GLGf0q1o3KD3cxlsABpXQ.mp4",
      rating: 4.8
    },
    {
      name: "Samo",
      role: "Huvudfrisör & Ägare",
      experience: "14+ år",
      video: "https://fvega0dwq1jnr8l4.public.blob.vercel-storage.com/Samo-3ncHNSLoiKOOfLCZKmqco2JD9c3XnU.mp4",
      rating: 4.9
    },
    {
      name: "Marvin",
      role: "Barber Specialist",
      experience: "6+ år",
      video: "https://fvega0dwq1jnr8l4.public.blob.vercel-storage.com/Marvin-3UFaZmbmWdMiUG2Uww37NU8CcItNrc.mp4",
      rating: 4.9
    }
  ];

  return (
    <section id="team" className="py-16 md:py-20 bg-gray-50 pb-20 lg:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Vårt Expert Team
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Möt våra talangfulla frisörer som kombinerar års av erfarenhet med passion 
            för att skapa den perfekta looken för varje kund.
          </p>
        </div>

        {/* Team Members - Horizontal Scroll with Center Focus */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide justify-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 w-72 md:w-80 lg:w-96 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ${
                  index === 1 ? 'transform scale-105 z-10 ring-2 ring-amber-400' : 'transform scale-95 opacity-90 hover:scale-100 hover:opacity-100'
                }`}
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  >
                    <source src={member.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 md:px-3 py-1 flex items-center shadow-lg">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-amber-400 fill-current mr-1" />
                    <span className="text-xs md:text-sm font-semibold">{member.rating}</span>
                  </div>
                  {index === 1 && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-black rounded-full px-3 py-1 text-xs font-bold shadow-lg">
                      HUVUDFRISÖR
                    </div>
                  )}
                </div>
                
                <div className="p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{member.name}</h2>
                  <p className="text-amber-600 font-semibold mb-2 text-sm md:text-base">{member.role}</p>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Award className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                    <span className="text-sm md:text-base">{member.experience} erfarenhet</span>
                  </div>
                  
                  <button className="w-full bg-black hover:bg-gray-800 text-white py-2 md:py-3 px-4 rounded-lg font-semibold transition-colors duration-300 text-sm md:text-base">
                    Boka med {member.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Varför välja vårt team?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="bg-amber-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Certifierade Proffs</h3>
                <p className="text-gray-600 text-sm md:text-base">Alla våra frisörer är certifierade och kontinuerligt utbildade</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Högt Betyg</h3>
                <p className="text-gray-600 text-sm md:text-base">Genomsnittligt betyg på 4.8/5 från våra nöjda kunder</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Personlig Service</h3>
                <p className="text-gray-600 text-sm md:text-base">Vi lyssnar på dina önskemål och skapar din unika stil</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default BarberTeamSection;