import React from 'react';

const Section5 = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'DR MUSA DANJUMA',
      title: 'CEO of ABY LTD',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      alt: 'Dr Musa Danjuma - CEO'
    },
    {
      id: 2,
      name: 'Mrs AMINA USMAN',
      title: 'Product Manager of ABY LTD',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=300&h=300&fit=crop&crop=face',
      alt: 'Mrs Amina Usman - Product Manager'
    },
    {
      id: 3,
      name: 'Mr JOHN AYUBA',
      title: 'COO of ABY LTD',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      alt: 'Mr John Ayuba - COO'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-xl font-bold text-indigo-600">Our Team</h2>
            <div className="w-100 h-1 mx-auto bg-indigo-600 mb-2"></div>
          </div>
        </div>

        {/* Hero Team Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
              alt="Team members in safety gear"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
          
          {/* Team Description */}
          <div className="mt-8 max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              Our people are crucial in the delivery of our services and solution to our clients. In order to ensure that everyone is 
              equipped with the right skill, knowledge and attitude, a comprehensive training programme is put in place to constantly 
              upgrade our people in technical and management skills We believe firmly in providing the right training, accredited 
              certification and practical knowledge for our people in order for them to execute their duties and responsibilities 
              confidently.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className="w-full h-full rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Team Member (Bottom) */}
        <div className="flex justify-center">
          <div className="text-center group max-w-xs">
            <div className="relative mb-6 mx-auto w-48 h-48">
              <div className="w-full h-full rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
                  alt="Additional team member"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-900">
                TEAM MEMBER
              </h3>
              <p className="text-gray-600 font-medium">
                Operations Specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;