import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images - in a real implementation, these would come from the Facebook page
  const galleryImages = [
    {
      src: "/lovable-uploads/haircut.jpg",
      alt: "Classic fade haircut",
    },
    {
      src: "/lovable-uploads/haircut1.jpg",
      alt: "Beard trimming service",
    },
    {
      src: "/lovable-uploads/shop.jpg",
      alt: "Modern barbershop interior",
    },
    {
      src: "/lovable-uploads/shop-outside.jpg",
      alt: "Professional beard styling",
    },
    {
      src: "/lovable-uploads/kids-haircut.jpg",
      alt: "Classic barbershop tools",
    },
    {
      src: "/lovable-uploads/before-after.jpg",
      alt: "Hair washing service",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-barbershop-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-barbershop-black mb-4">
            Our Work
          </h2>
          <p className="font-inter text-lg text-barbershop-charcoal max-w-2xl mx-auto">
            Showcasing the craftsmanship and attention to detail that makes
            Hustle Barbershop Carnegie's premier destination for modern
            grooming.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="font-inter font-medium text-barbershop-black">
                      View
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="font-inter text-barbershop-charcoal mb-6">
            Ready to experience our premium service?
          </p>
          <button
            onClick={() => window.open("tel:0423164439")}
            className="bg-barbershop-gold hover:bg-barbershop-gold-light text-white font-inter font-semibold px-8 py-3 rounded-md transition-all duration-300 hover:shadow-lg"
          >
            Book Your Appointment
          </button>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
