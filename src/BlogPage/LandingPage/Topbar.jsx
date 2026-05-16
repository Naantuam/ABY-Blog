import { useState, useEffect } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

export default function Topbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const textColorClass = isScrolled ? "text-blue-500" : "text-white";

  return (
    <>
      {/* ===== Desktop Topbar ===== */}
      <nav className="hidden sm:block fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/assets/ABY.png"
                alt="Company Logo"
                className="h-40 w-auto"
              />
            </a>

            {/* Navigation Links */}
            <div className="flex items-center gap-14">
              <a href="#home" className={`${textColorClass} font-semibold hover:underline transition-colors duration-300`}>
                Home
              </a>
              <a
                href="#about"
                className={`${textColorClass} font-semibold hover:underline transition-colors duration-300`}
              >
                About
              </a>
              <a
                href="#team"
                className={`${textColorClass} font-semibold hover:underline transition-colors duration-300`}
              >
                Team
              </a>
              <a
                href="#contact"
                className={`flex items-center gap-1 ${textColorClass} font-semibold hover:underline transition-colors duration-300`}
              >
                Contact
              </a>
              <a
                href="#footer"
                className={`flex items-center gap-1 ${textColorClass} font-semibold hover:underline transition-colors duration-300`}
              >
                Blog
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== Mobile Topbar ===== */}
      <nav className="sm:hidden fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50">
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo on Left */}
            <a href="/" className="flex items-center">
              <img
                src="/assets/ABY.png"
                alt="Company Logo"
                className="h-20 w-auto"
              />
            </a>

            {/* Right Section: Menu Icon */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleSidebar}
                className={`${textColorClass} hover:opacity-80 transition-colors duration-300`}
                aria-label="Toggle menu"
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== Mobile Sidebar ===== */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 sm:hidden"
            onClick={toggleSidebar}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-64 bg-white/10 backdrop-blur-sm shadow-lg z-50 sm:hidden transition-transform duration-300">
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <img
                  src="/assets/ABY.png"
                  alt="Company Logo"
                  className="h-20 w-auto"
                />
                <button
                  onClick={toggleSidebar}
                  className="text-gray-900 hover:text-gray-600 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Sidebar Navigation */}
              <nav className="flex flex-col p-4 gap-4">
                <a
                  href="#home"
                  className="text-white font-medium hover:underline hover:text-blue-500 transition-colors duration-300"
                  onClick={toggleSidebar}
                >
                  Home
                </a>
                <a
                  href="#team"
                  className="text-white font-medium hover:underline hover:text-blue-500 transition-colors duration-300"
                  onClick={toggleSidebar}
                >
                  Team
                </a>
                <a
                  href="#contact"
                  className="text-white font-medium hover:underline hover:text-blue-500 transition-colors duration-300"
                  onClick={toggleSidebar}
                >
                  Contact
                </a>
                <a
                  href="#footer"
                  className="flex items-center gap-1 text-white font-medium hover:underline hover:text-blue-500 transition-colors duration-300"
                  onClick={toggleSidebar}
                >
                  Blog
                  <ChevronRight className="w-4 h-4" />
                </a>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
