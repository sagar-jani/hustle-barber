import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  const businessHours = [
    { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <section id="location" className="py-20 bg-barbershop-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-barbershop-black mb-4">
            Visit Us
          </h2>
          <p className="font-inter text-lg text-barbershop-charcoal max-w-2xl mx-auto">
            Conveniently located in Carnegie, VIC. Easy parking and accessible location.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-barbershop-gold/10 rounded-full p-3">
                  <MapPin className="h-6 w-6 text-barbershop-gold" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-barbershop-black mb-2">
                    Address
                  </h3>
                  <p className="font-inter text-barbershop-charcoal">
                    Shop 1/321A Koornang Rd<br />
                    Carnegie VIC 3163, Australia
                  </p>
                  <button
                    onClick={() => window.open('https://maps.google.com?q=Shop+1/321A+Koornang+Rd,+Carnegie+VIC+3163,+Australia')}
                    className="mt-3 text-barbershop-gold hover:text-barbershop-gold-light font-inter font-medium transition-colors duration-300"
                  >
                    Get Directions →
                  </button>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-barbershop-gold/10 rounded-full p-3">
                  <Phone className="h-6 w-6 text-barbershop-gold" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-barbershop-black mb-2">
                    Phone
                  </h3>
                  <p className="font-inter text-barbershop-charcoal mb-3">
                    0423 164 439
                  </p>
                  <button
                    onClick={() => window.open('tel:0423164439')}
                    className="bg-barbershop-gold hover:bg-barbershop-gold-light text-white font-inter font-medium px-4 py-2 rounded-md transition-all duration-300"
                  >
                    Call Now
                  </button>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-barbershop-gold/10 rounded-full p-3">
                  <Mail className="h-6 w-6 text-barbershop-gold" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-barbershop-black mb-2">
                    Email
                  </h3>
                  <p className="font-inter text-barbershop-charcoal mb-3">
                    hustlebarbershop3163@gmail.com
                  </p>
                  <button
                    onClick={() => window.open('mailto:hustlebarbershop3163@gmail.com')}
                    className="text-barbershop-gold hover:text-barbershop-gold-light font-inter font-medium transition-colors duration-300"
                  >
                    Send Email →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours & Map */}
          <div className="space-y-8">
            {/* Business Hours */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-barbershop-gold/10 rounded-full p-3">
                  <Clock className="h-6 w-6 text-barbershop-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-barbershop-black">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-inter font-medium text-barbershop-charcoal">
                      {schedule.day}
                    </span>
                    <span className={`font-inter ${
                      schedule.hours === 'Closed' 
                        ? 'text-red-600' 
                        : 'text-barbershop-black'
                    }`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-playfair text-xl font-semibold text-barbershop-black mb-4">
                Location Map
              </h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.3969!2d145.0565!3d-37.8869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6685f2f0b8b3f%3A0x5045675eb39f770!2s321A%20Koornang%20Rd%2C%20Carnegie%20VIC%203163%2C%20Australia!5e0!3m2!1sen!2sus!4v1676000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;