import { Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-barbershop-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <img 
              src="/lovable-uploads/50d1074d-88a9-4b0a-b6df-126b086d9ac8.png" 
              alt="Hustle Barbershop Logo" 
              className="h-16 w-auto mx-auto md:mx-0 mb-4"
            />
            <p className="font-inter text-gray-300 mb-4 max-w-xs mx-auto md:mx-0">
              Carnegie's premier barbershop for modern gentlemen. Quality cuts, premium service.
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => window.open('https://www.facebook.com/p/Hustle-Barbershop-100063736172398/')}
                className="bg-barbershop-gold/20 hover:bg-barbershop-gold/30 rounded-full p-3 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5 text-barbershop-gold" />
              </button>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="text-center">
            <h3 className="font-playfair text-xl font-semibold text-barbershop-gold mb-4">
              Quick Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-4 w-4 text-barbershop-gold flex-shrink-0" />
                <span className="font-inter text-gray-300">0423 164 439</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-4 w-4 text-barbershop-gold flex-shrink-0" />
                <span className="font-inter text-gray-300 text-sm">hustlebarbershop3163@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-4 w-4 text-barbershop-gold flex-shrink-0" />
                <span className="font-inter text-gray-300 text-sm">Carnegie, VIC 3163</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="text-center md:text-right">
            <h3 className="font-playfair text-xl font-semibold text-barbershop-gold mb-4">
              Business Hours
            </h3>
            <div className="space-y-2 font-inter text-gray-300 text-sm">
              <div className="flex justify-center md:justify-end">
                <div className="text-left">
                  <div>Monday - Friday: 9AM - 6PM</div>
                  <div>Saturday: 9AM - 5PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Hustle Barbershop. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="font-inter text-barbershop-gold hover:text-barbershop-gold-light transition-colors duration-300 text-sm"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;