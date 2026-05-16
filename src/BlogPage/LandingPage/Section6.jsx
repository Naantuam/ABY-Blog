import React from 'react';

const Section6 = () => {
  const galleryImages = [
    {
      id: 1,
      image: '/assets/3c324621ce6290e675da7717c20569e3d61c6355.jpg',
      alt: 'Construction team members in safety gear',
      size: 'large'
    },
    {
      id: 2,
      image: '/assets/TeamMember.jpg',
      alt: 'Construction site overview',
      size: 'medium'
    },
    {
      id: 3,
      image: '/assets/PreConstruction.png',
      alt: 'Mining equipment in operation',
      size: 'large'
    },
    {
      id: 4,
      image: '/assets/OurTeam.jpg',
      alt: 'Workers reviewing construction plans',
      size: 'large'
    },
    {
      id: 5,
      image: '/assets/Marketing.jpg',
      alt: 'Construction site progress',
      size: 'medium'
    },
    {
      id: 6,
      image: '/assets/CivilEngineering.png',
      alt: 'Team collaboration on site',
      size: 'large'
    },
    {
      id: 7,
      image: '/assets/ContactUs.jpg',
      alt: 'Mining operations overview',
      size: 'medium'
    },
    {
      id: 8,
      image: '/assets/PreConstruction.png',
      alt: 'Project management meeting',
      size: 'large'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-block">
            <h2 className="text-xl font-bold text-indigo-600">Our Gallery</h2>
            <div className="w-100 h-1 mx-auto bg-indigo-600 mb-2"></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
          {galleryImages.map((img, index) => (
            <div 
              key={img.id} 
              className={`${
                index === 2 || index === 5 ? 'col-span-2' : 'col-span-1'
              } group`}
            >
              <div className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src={img.image}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
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