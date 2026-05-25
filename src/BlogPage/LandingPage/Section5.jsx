import React from 'react';

const Section5 = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'DR MUSA DANJUMA',
      title: 'CEO of ABY LTD',
      image: '/assets/Person1.jpg',
      alt: 'Dr Musa Danjuma - CEO'
    },
    {
      id: 2,
      name: 'Mrs AMINA USMAN',
      title: 'Product Manager of ABY LTD',
      image: '/assets/Person2.jpg',
      alt: 'Mrs Amina Usman - Product Manager'
    },
    {
      id: 3,
      name: 'Mr JOHN AYUBA',
      title: 'COO of ABY LTD',
      image: '/assets/Person3.jpg',
      alt: 'Mr John Ayuba - COO'
    }
  ];

  return (
    <div id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <div className="inline-block">
            <h2 className="text-xl font-bold text-indigo-600">Our Team</h2>
            <div className="w-100 h-1 mx-auto bg-indigo-600 mb-2"></div>
          </div>
        </div>

        {/* Hero Team Image */}
        <div className="mb-8 w-full relative rounded-2xl overflow-hidden shadow-2xl md:aspect-[21/9] min-h-[400px] md:min-h-[350px] flex items-center justify-center p-6 sm:p-12">
          {/* Background Image */}
          <img
            src="/assets/PreConstruction.png"
            alt="Team members in safety gear"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Team Description Text */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed text-center drop-shadow-lg">
              Our people are crucial in the delivery of our services and solution to our clients. In order to ensure that everyone is
              equipped with the right skill, knowledge and attitude, a comprehensive training programme is put in place to constantly
              upgrade our people in technical and management skills. We believe firmly in providing the right training, accredited
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
                  src="/assets/TeamMember.jpg"
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