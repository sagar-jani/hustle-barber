const About = () => {
  return (
    <section id="about" className="py-20 bg-barbershop-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              About Hustle
              <span className="block text-barbershop-gold">Barbershop</span>
            </h2>
            
            <div className="space-y-6 font-inter text-lg leading-relaxed text-gray-300">
              <p>
                Located in the heart of Carnegie, Hustle Barbershop represents the perfect blend 
                of traditional barbering craftsmanship and modern style. Our team of skilled 
                barbers brings years of experience and passion to every cut.
              </p>
              
              <p>
                We believe that a great haircut is more than just a service – it's an experience 
                that boosts confidence and reflects personal style. From classic cuts to 
                contemporary fades, we take pride in delivering precision and artistry 
                with every visit.
              </p>
              
              <p>
                Our commitment to excellence extends beyond the chair. We use only premium 
                products and maintain the highest standards of cleanliness and professionalism, 
                ensuring every client leaves looking and feeling their absolute best.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-barbershop-gold mb-2">5+</div>
                <div className="font-inter text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-barbershop-gold mb-2">1000+</div>
                <div className="font-inter text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-barbershop-gold mb-2">6</div>
                <div className="font-inter text-sm text-gray-400">Days a Week</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1621647117862-51b8a85de5f8?w=600&h=600&fit=crop"
                alt="Hustle Barbershop interior"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-barbershop-gold/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-barbershop-gold/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;