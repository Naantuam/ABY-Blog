import React from 'react';

const Section3 = () => {
  const mineralProducts = [
    {
      name: 'ZINC',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
      alt: 'Zinc mineral sample'
    },
    {
      name: 'LEAD',
      image: 'https://images.unsplash.com/photo-1571847140471-1d7766e825ea?w=300&h=200&fit=crop',
      alt: 'Lead mineral sample'
    },
    {
      name: 'COPPER',
      image: 'https://images.unsplash.com/photo-1544724107-6d5c4caaff30?w=300&h=200&fit=crop',
      alt: 'Copper mineral sample'
    },
    {
      name: 'MANGANESE',
      image: 'https://images.unsplash.com/photo-1597149750252-5c7c0b321c03?w=300&h=200&fit=crop',
      alt: 'Manganese mineral sample'
    },
    {
      name: 'IRON ORE',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      alt: 'Iron ore mineral sample'
    },
    {
      name: 'GOLD',
      image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=300&h=200&fit=crop',
      alt: 'Gold mineral sample'
    }
  ];

  const constructionServices = [
    {
      title: 'PRE CONSTRUCTION SERVICES',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
      alt: 'Construction planning and surveying'
    },
    {
      title: 'BUILDING & CONSTRUCTION WORKS',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
      alt: 'Construction workers on site'
    },
    {
      title: 'CIVIL ENGINEERING WORKS',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
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
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
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
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6">
                  <h3 className="text-white font-bold text-xl">{service.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marketing Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-600">Our Marketing Team</h2>
          <div className="w-100 h-1 mx-auto bg-indigo-600 mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
              alt="Marketing team working together"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Our marketing team is dedicated to telling the story of mining in a way 
              that connects people, businesses, and communities. Through research-
              driven insights, engaging content, and innovative campaigns, we amplify 
              the voice of our company and highlight the impact of responsible mining. 
              From industry updates to community initiatives, we ensure every message 
              is clear, credible, and impactful.
            </p>
            
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900">Contact Information:</h3>
              <div className="space-y-2">
                <p className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2">CONTACT:</span>
                  <a href="tel:+234806880060" className="text-blue-600 hover:underline">
                    +234806880060
                  </a>
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2">EMAIL:</span>
                  <a href="mailto:abydiamondmine@outlook.com" className="text-blue-600 hover:underline">
                    abydiamondmine@outlook.com
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