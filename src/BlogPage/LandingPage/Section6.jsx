import React from 'react';

const Section6 = () => {
  const galleryImages = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      alt: 'Construction team members in safety gear',
      size: 'large'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=200&fit=crop',
      alt: 'Construction site overview',
      size: 'medium'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
      alt: 'Mining equipment in operation',
      size: 'large'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
      alt: 'Workers reviewing construction plans',
      size: 'large'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop',
      alt: 'Construction site progress',
      size: 'medium'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1597149750252-5c7c0b321c03?w=400&h=300&fit=crop',
      alt: 'Team collaboration on site',
      size: 'large'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop',
      alt: 'Mining operations overview',
      size: 'medium'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop',
      alt: 'Project management meeting',
      size: 'large'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-xl font-bold text-indigo-600">Our Gallery</h2>
            <div className="w-100 h-1 mx-auto bg-indigo-600 mb-2"></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {/* First Row */}
          <div className="col-span-1 row-span-2">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <img 
                src={galleryImages[0].image}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <img 
                src={galleryImages[1].image}
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="col-span-1 row-span-2 md:col-span-2">
            <div className="aspect-[4/3] md:aspect-[3/2] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <img 
                src={galleryImages[2].image}
                alt={galleryImages[2].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="col-span-1">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <img 
                src={galleryImages[3].image}
                alt={galleryImages[3].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="col-span-1 row-span-2">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <img 
                src={galleryImages[4].image}
                alt={galleryImages[4].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <img 
                src={galleryImages[5].image}
                alt={galleryImages[5].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <div className="aspect-[4/3] md:aspect-[3/2] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <img 
                src={galleryImages[6].image}
                alt={galleryImages[6].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Fourth Row */}
          <div className="col-span-1">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <img 
                src={galleryImages[7].image}
                alt={galleryImages[7].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section6;