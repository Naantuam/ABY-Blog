import { Lightbulb, Star, Target } from 'lucide-react';
import React from 'react';

// Component for one of the two main service blocks (Mining or Construction)
function ServiceBlock({ title, image, imageAlt, services }) {
  return (
    // Adjusting for a more responsive layout on small screens
    <div className="w-full sm:w-1/2 min-w-0">
      <div className="flex flex-col">
        {/* Service Image */}
        {/* NOTE: You must ensure the paths for these images are correct in your project */}
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto object-cover rounded-lg mb-4"
        />

        {/* Service Title */}
        <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-wider">
          {title}
        </h4>

        {/* Service Descriptions - Mapped to mimic the list structure */}
        <div className="space-y-3">
          {services.map((service, index) => (
            <p key={index} className="text-sm text-black">
              <span className="font-semibold">{service.name}:</span> {service.description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

// Data for the Services Section
const ourServicesData = [
  {
    title: "MINING SERVICES",
    image: "/assets/MiningImage.jpg", // Placeholder, use your actual path
    imageAlt: "A miner surveying an open-pit mine site",
    services: [
      {
        name: "Exploration & Surveying",
        description: "Utilizing state-of-the-art equipment and expertise to identify and evaluate mineral resources.",
      },
      {
        name: "Extraction & Processing",
        description: "Employing efficient and environmentally responsible extraction techniques to maximize yield and quality.",
      },
      {
        name: "Logistics & Transportation",
        description: "Managing the seamless movement of materials from mine sites to processing plants.",
      },
    ],
  },
  {
    title: "CONSTRUCTION SERVICES",
    image: "/assets/ConstructionImage.jpg", // Placeholder, use your actual path
    imageAlt: "A large industrial building under construction with cranes",
    services: [
      {
        name: "Civil Engineering & Infrastructure",
        description: "Designing and constructing roads, bridges, and essential public infrastructure to support economic development.",
      },
      {
        name: "Building Construction",
        description: "Delivering turnkey building solutions for commercial, industrial, and residential projects.",
      },
      {
        name: "Project Management",
        description: "Providing end-to-end project oversight, ensuring timely delivery, budget adherence, and compliance with international Laws.",
      },
    ],
  },
];

// --- Component 2: Missions, Core Values, and Vision Section (from the image) ---

function AboutSection() {
  return (
    // This wrapper applies the light gray background (bg-gray-50)
    <section className="bg-gray-200 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* 1. Missions */}
          <div>
            <div className="mb-4">
              <Target className="w-10 h-10 text-gray-900" />     
            </div>
            <h3 className="text-xl font-bold text-black mb-4">
              Missions
            </h3>
            <p className="text-black mb-4 text-sm">
              Our mission is to deliver world-class mining and construction services that exceed industry standards in quality, safety, and efficiency. We are committed to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-black">
              <li>Implementing innovative technologies and sustainable practices.</li>
              <li>Upholding the highest levels of safety and environmental stewardship.</li>
              <li>Fostering long-term partnerships with our clients, stakeholders, and community.</li>
            </ul>
          </div>

          {/* 2. Core Values */}
          <div>
            <div className="mb-4">
              <Star className="w-10 h-10 text-gray-900" />  
            </div>
            <h3 className="text-xl font-bold text-black mb-4">
              Core Values
            </h3>
            <ul className="space-y-3 text-sm text-black">
              <li><span className="font-semibold">QUALITY:</span> Delivering superior workmanship and results on every project.</li>
              <li><span className="font-semibold">SAFETY:</span> Prioritizing the health and well-being of our team, clients, and communities through stringent safety protocols.</li>
              <li><span className="font-semibold">SUSTAINABILITY:</span> Embracing eco-friendly practices that minimize environmental impact and promote long-term resource viability.</li>
              <li><span className="font-semibold">INNOVATION:</span> Continuously exploring new technologies and methods to enhance efficiency and performance.</li>
              <li><span className="font-semibold">INTEGRITY:</span> Operating with transparency, accountability, and ethical practices in all our endeavors.</li>
            </ul>
          </div>

          {/* 3. Vision */}
          <div>
            <div className="mb-4">
              <Lightbulb className="w-10 h-10 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">
              Vision
            </h3>
            <p className="text-black text-sm">
              We envision <span className="font-semibold">ABY DIAMOND MINES & CONSTRUCTION NIG LTD</span> as the premier provider of mining and construction solutions in Nigeria and West Africa. Our goal is to be recognized globally for our commitment to innovation, reliability, and sustainable development, paving the way for a brighter, more resilient future
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


// --- Main Export Component to combine both sections ---

export default function CombinedPageLayout() {
  return (
    <div>
      {/* 2. Missions, Core Values, Vision Section (from the image) */}
      <AboutSection />

      {/* 1. Services Section (from the code you provided) */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* "Our Services" Header and Divider */}
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-xl font-semibold text-indigo-600 mb-2">
              Our Services
            </h2>
            {/* Mimicking the blue divider line */}
            <div className="w-100 h-1 mx-auto bg-indigo-600"></div>
          </div>

          {/* Services Content Grid - Two columns side-by-side */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 justify-center">
            {ourServicesData.map((block, index) => (
              <ServiceBlock
                key={index}
                title={block.title}
                image={block.image}
                imageAlt={block.imageAlt}
                services={block.services}
              />
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}