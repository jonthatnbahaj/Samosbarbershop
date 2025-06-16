import React, { useState } from 'react';
import { X, Clock, CreditCard, ChevronRight } from 'lucide-react';

interface Service {
  name: string;
  duration: string;
  price: string;
  url: string;
}

interface ServiceCategory {
  category: string;
  services: Service[];
}

const AvailableServiceSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: ServiceCategory[] = [
    {
      category: "Barnklippning (0–12 år)",
      services: [
        {
          name: "Flickor",
          duration: "30 min",
          price: "400 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/barnklippning-0-12-ar-flickor-1486880"
        },
        {
          name: "Pojkar",
          duration: "30 min",
          price: "330 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/barnklippning-0-12-ar-pojkar-1272146"
        }
      ]
    },
    {
      category: "Damklippning",
      services: [
        {
          name: "Kort (0–5 cm)",
          duration: "30 min",
          price: "440 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/damklippning-kort-0-5-cm-1272390"
        },
        {
          name: "Lång (över 5 cm)",
          duration: "60 min",
          price: "500 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/damklippning-lang-over-5-cm-1272391"
        }
      ]
    },
    {
      category: "Herrklippning",
      services: [
        {
          name: "Standard",
          duration: "30 min",
          price: "440 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/herrklippning-1272142"
        },
        {
          name: "Pensionär",
          duration: "30 min",
          price: "300 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/herrklippning-pensionar--1272145"
        },
        {
          name: "Student",
          duration: "30 min",
          price: "350 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/herrklippning-student--1272147"
        }
      ]
    },
    {
      category: "Herrklippning & Skägg",
      services: [
        {
          name: "Kort skägg (0–2 cm)",
          duration: "60 min",
          price: "590 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/herrklippning-skagg-kort-skagg-0-2-cm-1272389"
        },
        {
          name: "Långt skägg (över 2 cm)",
          duration: "60 min",
          price: "600 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/herrklippning-skagg-langt-skagg-over-2-cm-1289620"
        },
        {
          name: "Pensionär",
          duration: "30 min",
          price: "400 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/herrklippning-skagg-pensionar--1272148"
        },
        {
          name: "Student",
          duration: "60 min",
          price: "500 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/herrklippning-skagg-student--1272461"
        }
      ]
    },
    {
      category: "Huvudrakning",
      services: [
        {
          name: "Enbart huvudet",
          duration: "30 min",
          price: "350 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/huvud-rakning-1415774"
        },
        {
          name: "Huvud + skägg",
          duration: "60 min",
          price: "600 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/huvud-rakning-skagg-1415775"
        }
      ]
    },
    {
      category: "Skägg & Rakning",
      services: [
        {
          name: "Endast skägg/rakning",
          duration: "30 min",
          price: "330 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/skagg-rakning-1272144"
        }
      ]
    },
    {
      category: "Snagg / Skinfade",
      services: [
        {
          name: "Snagg",
          duration: "10 min",
          price: "160 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/snagg-1272143"
        },
        {
          name: "Snagg + skägg",
          duration: "30 min",
          price: "400 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/snagg-skagg-1272592"
        },
        {
          name: "Snaggning & skinfade",
          duration: "30 min",
          price: "350 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/snaggning-skinfade-1289621"
        },
        {
          name: "Snaggning skinfade & skägg",
          duration: "60 min",
          price: "550 kr",
          url: "https://www.bokadirekt.se/boka-tjanst/samos-barbershop-38023/snaggning-skinfade-skagg-1950643"
        }
      ]
    }
  ];

  const openBookingModal = (url: string) => {
    setSelectedService(url);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <section id="tjanster" className="py-16 md:py-20 bg-white pb-20 lg:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Våra Tjänster
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Professionella frisörtjänster i Jönköping sedan 2010. Välj kategori och sedan tjänst för att boka din tid enkelt online.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Categories */}
          <div className="space-y-3 md:space-y-4">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
                {/* Category Header */}
                <button
                  onClick={() => handleCategorySelect(category.category)}
                  className="w-full p-4 md:p-6 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 text-left">
                    {category.category}
                  </h2>
                  <ChevronRight 
                    className={`w-5 h-5 md:w-6 md:h-6 text-gray-600 transition-transform duration-200 ${
                      selectedCategory === category.category ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {/* Services */}
                {selectedCategory === category.category && (
                  <div className="bg-white border-t border-gray-200">
                    <div className="p-3 md:p-4 space-y-3">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="bg-gray-50 rounded-xl p-3 md:p-4 hover:bg-gray-100 transition-colors duration-200">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1">
                                {service.name}
                              </h3>
                              <div className="flex items-center text-gray-600 text-xs md:text-sm">
                                <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                                <span>{service.duration}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between sm:justify-end gap-3">
                              <span className="text-lg md:text-xl font-bold text-amber-500">
                                {service.price}
                              </span>
                              <button
                                onClick={() => openBookingModal(service.url)}
                                className="bg-black hover:bg-gray-800 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center text-xs md:text-sm whitespace-nowrap"
                              >
                                <CreditCard className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                                Boka Tid
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal - Optimized for all devices */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 md:p-4">
          <div className="bg-white w-full h-full md:w-[98vw] md:h-[90vh] lg:w-[95vw] lg:h-[95vh] md:rounded-2xl flex flex-col mb-16 md:mb-0">
            <div className="flex justify-between items-center p-3 md:p-4 border-b bg-gray-50 md:rounded-t-2xl flex-shrink-0">
              <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900">Boka Din Tid</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src={selectedService}
                className="w-full h-full border-0"
                title="Boka tid - Samos Barbershop"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AvailableServiceSection;