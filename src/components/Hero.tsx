import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-barbershop-black via-barbershop-charcoal to-barbershop-black">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/lovable-uploads/50d1074d-88a9-4b0a-b6df-126b086d9ac8.png"
              alt="Hustle Barbershop Logo"
              className="h-32 w-auto mx-auto mb-6"
            />
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Cuts
            <span className="block text-barbershop-gold">Modern Style</span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the finest grooming in Carnegie. Where tradition meets
            contemporary style.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToServices}
              size="lg"
              className="bg-barbershop-gold hover:bg-barbershop-gold-light text-white font-inter font-semibold px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg"
            >
              View Services & Pricing
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-black hover:bg-white hover:text-barbershop-black font-inter font-semibold px-8 py-4 text-lg transition-all duration-300"
              onClick={() => window.open("tel:0423164439")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Now
            </Button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <MapPin className="h-5 w-5 text-barbershop-gold flex-shrink-0" />
              <span className="font-inter text-sm">Carnegie, VIC</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Clock className="h-5 w-5 text-barbershop-gold flex-shrink-0" />
              <span className="font-inter text-sm">Mon-Sat: 9AM-6PM</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="h-5 w-5 text-barbershop-gold flex-shrink-0" />
              <span className="font-inter text-sm">0423 164 439</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-barbershop-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
