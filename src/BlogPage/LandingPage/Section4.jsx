import React from 'react';

const Section4 = () => {
  const sections = [
    {
      id: 'management',
      title: 'OUR MANAGEMENT TEAM',
      content: `Our business is driven by our Directors, collectively they accumulated more than 25 years of work experience in the in mining industry. They are involved in Procurement, project management and administration of the company. The management team proactively gathers feedback, identifies changes in business environment, reviews work processes and communicates key learning points and company policy to all staff at regular meetings`,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      alt: 'Management team in hard hats',
      imageRight: true
    },
    {
      id: 'quality',
      title: 'QUALITY & SAFETY COMMITMENT',
      content: `At ABY DIAMOND MINES & CONSTRUCTION NIG LTD, quality and safety are the cornerstones of our operations. We adhere to rigorous quality control measures and international safety standards throughout every phase of our operations. Our commitment includes comprehensive training and certification to ensure that every operation is conducted with precision, accountability, and a steadfast commitment to protecting both people and the`,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      alt: 'Mining equipment and operations',
      imageRight: false
    },
    {
      id: 'sustainability',
      title: 'SUSTAINABILITY/ COMMUNITY ENGAGEMENT',
      content: `We believe that responsible business practices are essential to long-term success. Our sustainability initiatives include:\n\nECO-FRIENDLY PRACTICES: Implementing measures to reduce our environmental footprint, including waste management, energy-efficient operations, and land rehabilitation.\n\nCOMMUNITY DEVELOPMENT: Partnering with local communities to support educational, social, and economic programs that drive positive change.`,
      image: 'https://images.unsplash.com/photo-1597149750252-5c7c0b321c03?w=600&h=400&fit=crop',
      alt: 'Mining operations and environmental stewardship',
      imageRight: true
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {sections.map((section, index) => (
            <div key={section.id} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className={`space-y-6 ${section.imageRight ? 'lg:order-1' : 'lg:order-2'}`}>
                <h2 className="text-2xl font-bold text-gray-900 tracking-wide">
                  {section.title}
                </h2>
                <div className="prose prose-lg text-gray-700">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${section.imageRight ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={section.image} 
                    alt={section.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;