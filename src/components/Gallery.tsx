import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/About-Us-Image.jpg",
      alt: "Samos Barbershop interiör - professionell frisörsalong i Jönköping"
    },
    {
      src: "/471185434_8897472130370157_3393166292361676614_n copy.jpg",
      alt: "Professionell herrklippning med skäggvård - Samos Barbershop"
    },
    {
      src: "/472717746_18480056608019357_2194470320329801997_n copy.jpg",
      alt: "Modern fade klippning och styling - expertarbete"
    },
    {
      src: "/481081263_1178548567608249_1938184152183028041_n copy.jpg",
      alt: "Textured crop herrklippning - modern stil"
    },
    {
      src: "/482006749_1174380044691768_7495139255548235610_n copy.jpg",
      alt: "Klassisk herrklippning med professionell skäggvård"
    },
    {
      src: "/482344054_1179377524192020_7227784331582757862_n copy.jpg",
      alt: "Precision klippning och styling - Samos Barbershop expertis"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="galleri" className="py-16 md:py-20 bg-white pb-20 lg:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Vårt Arbete
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Se exempel på vårt professionella hantverk. Varje klippning är unikt anpassad 
            efter kundens önskemål och ansiktsform. Från klassiska stilar till moderna trends.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-square"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  console.log(`Gallery image failed to load: ${image.src}`);
                  const target = e.currentTarget;
                  // Hide broken image
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.style.display = 'none';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                  <p className="font-semibold text-sm md:text-base">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal - Optimized for 80% size */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative w-[80%] h-[80%] max-w-4xl max-h-4xl">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
                aria-label="Stäng galleri"
              >
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
                aria-label="Föregående bild"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
                aria-label="Nästa bild"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg"
                onError={(e) => {
                  const target = e.currentTarget;
                  console.log(`Modal image failed to load: ${target.src}`);
                }}
              />
              
              <div className="absolute bottom-4 left-4 text-white bg-black/50 rounded-lg p-3">
                <p className="font-semibold text-sm md:text-lg">{galleryImages[selectedImage].alt}</p>
                <p className="text-xs md:text-sm text-gray-200 mt-1">
                  {selectedImage + 1} av {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;