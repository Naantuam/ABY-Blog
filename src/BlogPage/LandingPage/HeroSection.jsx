export default function HeroSection() {
  return (
    <div className="min-h-screen">
      {/* ===== Hero Section ===== */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: "url('/assets/HeroImage.png')" }} // replace with your actual hero image path
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6 sm:px-10 md:px-16 text-left text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Shaping the Future of Mining & Construction with Integrity.
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-200 max-w-2xl">
            We are committed to delivering high-quality mineral resources through
            safe, efficient, and sustainable operations. Our mission is to create
            long-term value for stakeholders while protecting the environment and
            uplifting communities.
          </p>
          <button className="bg-blue-700 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-800 transition">
            Explore
          </button>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="bg-white py-16 px-6 sm:px-10 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="w-full">
            <img
              src="/assets/AboutMining.png" // replace with your actual about image path
              alt="Mining Workers"
              className="rounded-2xl shadow-md w-full h-auto object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-blue-800 font-bold text-xl sm:text-2xl md:text-3xl mb-4 uppercase">
              About ABY Diamond Mines & Construction Nig Ltd
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              ABY DIAMOND MINES & CONSTRUCTION NIG LTD is a leading provider of
              comprehensive mining and construction solutions in Nigeria. With a
              strong foundation built on decades of industry expertise, we
              specialize in delivering high-quality, safe, and sustainable
              services that drive infrastructure development and economic growth.
              Our integrated approach combines advanced mining techniques with
              cutting-edge construction practices to meet the evolving needs of
              our clients across diverse sectors. Our company is a holder of
              mining leases across the country.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
