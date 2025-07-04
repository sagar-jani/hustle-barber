import { Scissors, Sparkles, Users, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      name: "Classic Haircut",
      price: "$35",
      description: "Traditional scissor cut with expert styling",
      icon: Scissors
    },
    {
      name: "Skin Fade",
      price: "$40",
      description: "Precision fade with seamless blending",
      icon: Sparkles
    },
    {
      name: "Beard Trim",
      price: "$15",
      description: "Professional beard shaping and styling",
      icon: Scissors
    },
    {
      name: "Kids Cut",
      price: "$25",
      description: "Gentle, patient service for children",
      icon: Users
    },
    {
      name: "Hair + Beard Combo",
      price: "$50",
      description: "Complete grooming package",
      icon: Sparkles
    },
    {
      name: "Hot Towel Treatment",
      price: "$20",
      description: "Relaxing hot towel and facial treatment",
      icon: Clock
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-barbershop-black mb-4">
            Services & Pricing
          </h2>
          <p className="font-inter text-lg text-barbershop-charcoal max-w-2xl mx-auto">
            Professional grooming services tailored to your style. Quality cuts at honest prices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-barbershop-gold/20 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-barbershop-gold/10 rounded-full p-3 group-hover:bg-barbershop-gold/20 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-barbershop-gold" />
                  </div>
                  <span className="font-playfair text-2xl font-bold text-barbershop-gold">
                    {service.price}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-barbershop-black mb-2">
                  {service.name}
                </h3>
                <p className="font-inter text-barbershop-charcoal leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-barbershop-cream rounded-lg p-8 text-center">
          <h3 className="font-playfair text-2xl font-semibold text-barbershop-black mb-4">
            Walk-ins Welcome
          </h3>
          <p className="font-inter text-barbershop-charcoal mb-6 max-w-2xl mx-auto">
            While appointments are recommended, we also welcome walk-in customers. 
            Call ahead to check availability and reduce wait times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.open('tel:0423164439')}
              className="bg-barbershop-gold hover:bg-barbershop-gold-light text-white font-inter font-semibold px-8 py-3 rounded-md transition-all duration-300 hover:shadow-lg"
            >
              Call to Book: 0423 164 439
            </button>
            <span className="font-inter text-barbershop-charcoal">
              or visit us at Carnegie
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;