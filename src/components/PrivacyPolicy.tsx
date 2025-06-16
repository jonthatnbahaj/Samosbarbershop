import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Users, Phone, Mail, MapPin, Calendar, Camera, Bell, Smartphone } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full h-full md:w-[90vw] md:h-[90vh] lg:w-[80vw] lg:h-[85vh] md:rounded-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b bg-gray-50 md:rounded-t-2xl flex-shrink-0">
          <div className="flex items-center">
            <button
              onClick={onClose}
              className="mr-3 md:mr-4 p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
              aria-label="Stäng integritetspolicy"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <div className="flex items-center">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-amber-500 mr-3" />
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Integritetspolicy</h1>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Uppdaterad: {new Date().toLocaleDateString('sv-SE')}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction */}
            <section className="bg-amber-50 rounded-2xl p-6 md:p-8">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-amber-600 mr-3" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Översikt</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Samos Barbershop respekterar din integritet och är engagerade i att skydda dina personuppgifter. 
                Denna integritetspolicy förklarar hur vi samlar in, använder, lagrar och skyddar din information 
                när du använder vår webbplats, mobilapp eller besöker vår salong.
              </p>
              <div className="bg-white rounded-xl p-4 border-l-4 border-amber-500">
                <p className="text-sm text-gray-600">
                  <strong>Kort sammanfattning:</strong> Vi samlar endast in nödvändig information för att tillhandahålla 
                  våra tjänster, delar aldrig dina uppgifter med tredje part för marknadsföring, och du har full kontroll 
                  över dina data.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border">
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Information Vi Samlar In</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Phone className="w-5 h-5 text-green-600 mr-2" />
                    Kontaktinformation
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Namn och efternamn</li>
                    <li>• Telefonnummer</li>
                    <li>• E-postadress</li>
                    <li>• Adress (vid leverans)</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                    Bokningsinformation
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Bokade tjänster</li>
                    <li>• Datum och tid för besök</li>
                    <li>• Specialönskemål</li>
                    <li>• Besökshistorik</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Smartphone className="w-5 h-5 text-indigo-600 mr-2" />
                    Teknisk Information
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• IP-adress</li>
                    <li>• Webbläsartyp och version</li>
                    <li>• Enhetstyp och operativsystem</li>
                    <li>• Användningsstatistik</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Camera className="w-5 h-5 text-pink-600 mr-2" />
                    Frivillig Information
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Profilbilder (om du väljer)</li>
                    <li>• Recensioner och kommentarer</li>
                    <li>• Preferenser för tjänster</li>
                    <li>• Kommunikationshistorik</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border">
              <div className="flex items-center mb-6">
                <Lock className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Hur Vi Använder Din Information</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">Primära Ändamål</h3>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Hantera och bekräfta dina bokningar
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Kommunicera om dina besök och tjänster
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Tillhandahålla kundservice och support
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Förbättra våra tjänster och kundupplevelse
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Sekundära Ändamål</h3>
                  <ul className="space-y-3 text-blue-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Skicka påminnelser om bokningar (med ditt samtycke)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Informera om nya tjänster och erbjudanden (frivilligt)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Analysera användningsmönster för förbättringar
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Uppfylla juridiska krav och förpliktelser
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-amber-600 mr-3" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Delning av Information</h2>
              </div>

              <div className="bg-red-50 rounded-xl p-6 mb-6 border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Viktigt: Vi Säljer Aldrig Dina Uppgifter</h3>
                <p className="text-red-700">
                  Samos Barbershop säljer, hyr ut eller delar aldrig dina personuppgifter med tredje part för 
                  marknadsföringsändamål. Din integritet är vår högsta prioritet.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Vi Delar Endast Information När:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Tjänsteleverantörer</h4>
                    <p className="text-sm text-gray-600">
                      Med betrodda partners som hjälper oss att tillhandahålla våra tjänster 
                      (t.ex. bokningssystem, betalningshantering)
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Juridiska Krav</h4>
                    <p className="text-sm text-gray-600">
                      När det krävs enligt lag eller för att skydda våra rättigheter, 
                      säkerhet eller egendom
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border">
              <div className="flex items-center mb-6">
                <Lock className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Datasäkerhet</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kryptering</h3>
                  <p className="text-sm text-gray-600">
                    All data överförs med SSL-kryptering och lagras säkert
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Åtkomstkontroll</h3>
                  <p className="text-sm text-gray-600">
                    Endast auktoriserad personal har tillgång till dina uppgifter
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Övervakning</h3>
                  <p className="text-sm text-gray-600">
                    Kontinuerlig övervakning för att upptäcka säkerhetshot
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border">
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-indigo-600 mr-3" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Dina Rättigheter</h2>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                <p className="text-indigo-800 font-medium mb-4">
                  Enligt GDPR har du följande rättigheter gällande dina personuppgifter:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      <span className="text-indigo-700">Rätt till information</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      <span className="text-indigo-700">Rätt till tillgång</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      <span className="text-indigo-700">Rätt till rättelse</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      <span className="text-indigo-700">Rätt till radering</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      <span className="text-indigo-700">Rätt till begränsning</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      <span className="text-indigo-700">Rätt till dataportabilitet</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      <span className="text-indigo-700">Rätt att invända</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      <span className="text-indigo-700">Rätt att återkalla samtycke</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-500">
                <h3 className="font-semibold text-amber-800 mb-2">Hur Du Utövar Dina Rättigheter</h3>
                <p className="text-amber-700 mb-4">
                  För att utöva någon av dina rättigheter, kontakta oss via:
                </p>
                <div className="space-y-2 text-amber-700">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>samosbarbershop@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>036-12 71 12</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Klostergatan 50B, 553 35 Jönköping</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border">
              <div className="flex items-center mb-6">
                <Bell className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Cookies och Spårning</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-orange-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-orange-800 mb-4">Vad Är Cookies?</h3>
                  <p className="text-orange-700 mb-4">
                    Cookies är små textfiler som lagras på din enhet när du besöker vår webbplats. 
                    De hjälper oss att förbättra din upplevelse och tillhandahålla personaliserade tjänster.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Nödvändiga Cookies</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Sessionshantering</li>
                      <li>• Säkerhetsfunktioner</li>
                      <li>• Grundläggande webbplatsfunktioner</li>
                      <li>• Språkinställningar</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Valfria Cookies</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Analysverktyg (Google Analytics)</li>
                      <li>• Marknadsföringsverktyg</li>
                      <li>• Sociala medier-integration</li>
                      <li>• Personalisering</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-800 mb-2">Hantera Cookies</h4>
                  <p className="text-blue-700 text-sm">
                    Du kan när som helst ändra dina cookie-inställningar i din webbläsare. 
                    Observera att vissa funktioner kanske inte fungerar korrekt om du inaktiverar cookies.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-6 md:p-8 text-white">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-amber-400 mr-3" />
                <h2 className="text-xl md:text-2xl font-bold">Kontakta Oss</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-amber-400 mb-4">Dataskyddsombud</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-gray-300 mr-3" />
                      <span>samosbarbershop@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-gray-300 mr-3" />
                      <span>036-12 71 12</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-gray-300 mr-3" />
                      <span>Klostergatan 50B, 553 35 Jönköping</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-amber-400 mb-4">Tillsynsmyndighet</h3>
                  <div className="space-y-2 text-gray-300">
                    <p className="font-medium">Integritetsskyddsmyndigheten (IMY)</p>
                    <p className="text-sm">Box 8114, 104 20 Stockholm</p>
                    <p className="text-sm">Telefon: 08-657 61 00</p>
                    <p className="text-sm">E-post: imy@imy.se</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-600">
                <p className="text-sm text-gray-300">
                  Denna integritetspolicy uppdaterades senast: {new Date().toLocaleDateString('sv-SE')}. 
                  Vi förbehåller oss rätten att uppdatera denna policy vid behov. 
                  Väsentliga ändringar kommer att meddelas via e-post eller på vår webbplats.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;