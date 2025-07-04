import { Button } from "@/components/ui/button";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-barbershop-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="font-inter text-lg text-gray-300 max-w-2xl mx-auto">
            Ready for your next cut? Contact us to book your appointment or ask
            any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="font-playfair text-2xl font-semibold text-barbershop-gold mb-6">
              Contact Methods
            </h3>

            {/* Phone */}
            <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="bg-barbershop-gold/20 rounded-full p-4">
                <Phone className="h-6 w-6 text-barbershop-gold" />
              </div>
              <div className="flex-1">
                <h4 className="font-inter font-semibold text-white mb-1">
                  Phone
                </h4>
                <p className="text-gray-300">0423 164 439</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-barbershop-gold text-barbershop-gold hover:bg-barbershop-gold hover:text-white"
                onClick={() => window.open("tel:0423164439")}
              >
                Call
              </Button>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="bg-barbershop-gold/20 rounded-full p-4">
                <Mail className="h-6 w-6 text-barbershop-gold" />
              </div>
              <div className="flex-1">
                <h4 className="font-inter font-semibold text-white mb-1">
                  Email
                </h4>
                <p className="text-gray-300 text-sm">
                  hustlebarbershop3163@gmail.com
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-barbershop-gold text-barbershop-gold hover:bg-barbershop-gold hover:text-white"
                onClick={() =>
                  window.open("mailto:hustlebarbershop3163@gmail.com")
                }
              >
                Email
              </Button>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="bg-barbershop-gold/20 rounded-full p-4">
                <MapPin className="h-6 w-6 text-barbershop-gold" />
              </div>
              <div className="flex-1">
                <h4 className="font-inter font-semibold text-white mb-1">
                  Address
                </h4>
                <p className="text-gray-300 text-sm">
                  Shop 1/321A Koornang Rd
                  <br />
                  Carnegie VIC 3163, Australia
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-barbershop-gold text-barbershop-gold hover:bg-barbershop-gold hover:text-white"
                onClick={() =>
                  window.open(
                    "https://maps.google.com?q=Shop+1/321A+Koornang+Rd,+Carnegie+VIC+3163,+Australia"
                  )
                }
              >
                Directions
              </Button>
            </div>

            {/* Facebook */}
            <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="bg-barbershop-gold/20 rounded-full p-4">
                <Facebook className="h-6 w-6 text-barbershop-gold" />
              </div>
              <div className="flex-1">
                <h4 className="font-inter font-semibold text-white mb-1">
                  Follow Us
                </h4>
                <p className="text-gray-300 text-sm">
                  Check out our latest work on Facebook
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-barbershop-gold text-barbershop-gold hover:bg-barbershop-gold hover:text-white"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/p/Hustle-Barbershop-100063736172398/"
                  )
                }
              >
                Follow
              </Button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col justify-center items-center text-center lg:pl-8">
            <div className="mb-8">
              <img
                src="/lovable-uploads/50d1074d-88a9-4b0a-b6df-126b086d9ac8.png"
                alt="Hustle Barbershop Logo"
                className="h-24 w-auto mx-auto mb-6 opacity-80"
              />
              <h3 className="font-playfair text-3xl font-bold text-barbershop-gold mb-4">
                Book Your Appointment Today
              </h3>
              <p className="font-inter text-gray-300 mb-8 max-w-md">
                Experience the difference at Hustle Barbershop. Professional
                service, premium results, every time.
              </p>
            </div>

            <div className="space-y-4 w-full max-w-sm">
              <Button
                size="lg"
                className="w-full bg-barbershop-gold hover:bg-barbershop-gold-light text-white font-inter font-semibold py-4 text-lg transition-all duration-300 hover:shadow-lg"
                onClick={() => window.open("tel:0423164439")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 0423 164 439
              </Button>

              <p className="font-inter text-sm text-gray-400">
                Walk-ins welcome • Monday-Saturday
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
