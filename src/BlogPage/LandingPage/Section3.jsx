import React from 'react';

const Section3 = () => {
  const mineralProducts = [
    {
      name: 'ZINC',
      image: '/assets/Zinc.jpg',
      alt: 'Zinc mineral sample'
    },
    {
      name: 'LEAD',
      image: '/assets/Lead.jpg',
      alt: 'Lead mineral sample'
    },
    {
      name: 'COPPER',
      image: '/assets/Copper.jpg',
      alt: 'Copper mineral sample'
    },
    {
      name: 'MANGANESE',
      image: '/assets/Manganese.jpg',
      alt: 'Manganese mineral sample'
    },
    {
      name: 'IRON ORE',
      image: '/assets/IronOre.jpg',
      alt: 'Iron ore mineral sample'
    },
    {
      name: 'GOLD',
      image: '/assets/Gold.jpg',
      alt: 'Gold mineral sample'
    }
  ];

  const constructionServices = [
    {
      title: 'PRE CONSTRUCTION SERVICES',
      image: '/assets/PreConstruction.png',
      alt: 'Construction planning and surveying'
    },
    {
      title: 'BUILDING & CONSTRUCTION WORKS',
      image: '/assets/OurService2.jpg',
      alt: 'Construction workers on site'
    },
    {
      title: 'CIVIL ENGINEERING WORKS',
      image: '/assets/CivilEngineering.png',
      alt: 'Civil engineering construction'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      {/* Mineral Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-indigo-600">Mineral Products</h2>
          <div className="w-100 h-1 mx-auto bg-indigo-600 mb-4"></div>
          <p className="text-black max-w-4xl mx-auto">
            ABY DIAMOND MINES AND CONTRUCTION LTD since its cooperation in business of mineral exploitation and trading of different brands of
            mineral resources across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {mineralProducts.map((mineral, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={mineral.image}
                  alt={mineral.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-end p-4">
                  <h3 className="text-white font-bold text-lg">{mineral.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Construction Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold text-indigo-600">Construction Services & Contracts</h2>
          <div className="w-100 h-1 mx-auto bg-indigo-600 mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {constructionServices.map((service, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-white font-bold text-l">{service.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marketing Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-indigo-600">Our Marketing Team</h2>
          <div className="w-100 h-1 mx-auto bg-indigo-600 mb-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="relative">
            <div className="aspect-video md:w-5/6 mx-auto rounded-lg overflow-hidden shadow-lg">
              <img
                src="/assets/Marketing.jpg"
                alt="Marketing team working together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              Our marketing team is dedicated to telling the story of mining in a way
              that connects people, businesses, and communities. Through research-
              driven insights, engaging content, and innovative campaigns, we amplify
              the voice of our company and highlight the impact of responsible mining.
              From industry updates to community initiatives, we ensure every message
              is clear, credible, and impactful.
            </p>

            <div className="space-y-3 mt-4">
              <h3 className="text-lg font-bold text-gray-900">Contact Information:</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2">CONTACT:</span>
                  <a href="tel:+2348063333360" className="text-blue-600 hover:underline">
                    +2348063333360
                  </a>
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2">EMAIL:</span>
                  <a href="mailto:abydiamondmines62@gmail.com" className="text-blue-600 hover:underline">
                    abydiamondmines62@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;