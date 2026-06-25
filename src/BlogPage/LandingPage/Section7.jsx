import React from 'react';

const Section7 = () => {
  const partners = [
    {
      id: 1,
      name: 'Global Mining Tactical Nig. LTD',
      logo: '/assets/Global Mining.png',
      alt: 'Global Mining Tactical Nigeria Limited logo'
    },
    {
      id: 2,
      name: 'Gwana Consortium Nig. LTD',
      logo: '/assets/Gwana.png',
      alt: 'Gwena Consortium Nigeria Limited logo'
    },
    {
      id: 3,
      name: 'Ayoma Mines Co. LTD',
      logo: '/assets/Ayoma.png',
      alt: 'Ayoma Mines Company Limited logo'
    },
    {
      id: 4,
      name: 'Tri-Pot Integrated Mines Nig. LTD',
      logo: '/assets/TripotMines.png',
      alt: 'Tri-Pot Integrated Mines Nigeria Limited logo'
    }
  ];

  const contactInfo = [
    {
      type: 'CONTACT',
      value: '+2348063333360',
      link: 'tel:+2348063333360',
      color: 'text-blue-600'
    },
    {
      type: 'CONTACT',
      value: '+2348063333360',
      link: 'tel:+2348063333360',
      color: 'text-blue-600'
    },
    {
      type: 'EMAIL',
      value: 'abydiamondmines62@gmail.com',
      link: 'mailto:abydiamondmines62@gmail.com',
      color: 'text-blue-600'
    },
    {
      type: 'EMAIL',
      value: 'abydiamondmines62@gmail.com',
      link: 'mailto:abydiamondmines62@gmail.com',
      color: 'text-blue-600'
    }
  ];

  return (
    <div id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners Section */}
        <div className="mb-16">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">Our Partners</h2>
              <div className="w-full h-1 bg-blue-600 rounded"></div>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 mb-4 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300 bg-white flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="w-16 h-16 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 text-center leading-tight">
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/assets/ContactUs.jpg"
                alt="Construction worker on site"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="font-bold text-gray-900 w-20">
                    {contact.type}:
                  </span>
                  <a
                    href={contact.link}
                    className={`${contact.color} hover:underline transition-colors duration-300`}
                  >
                    {contact.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Additional Contact Button */}
            <div className="pt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;