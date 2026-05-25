import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

export default function Topbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColorClass = isScrolled ? "text-blue-500" : "text-white";

  return (
    <nav
      className={"fixed md:absolute top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent backdrop-blur-sm py-3 sm:py-5"}
    >
      <div className="w-full px-2 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-14 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/assets/ABY.png"
              alt="Company Logo"
              className="h-15 sm:h-16 md:h-28 lg:h-36 xl:h-40 w-auto object-contain transition-all duration-300"
            />
          </a>
          {/* Navigation Links */}
          <div className="flex items-center gap-3 sm:gap-6 md:gap-10 lg:gap-16">
            <a
              href="#home"
              className="text-white text-[11px] sm:text-xs md:text-sm lg:text-base font-semibold hover:underline transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white text-[11px] sm:text-xs md:text-sm lg:text-base font-semibold hover:underline transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#team"
              className="text-white text-[11px] sm:text-xs md:text-sm lg:text-base font-semibold hover:underline transition-colors duration-300"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-white text-[11px] sm:text-xs md:text-sm lg:text-base font-semibold hover:underline transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="#footer"
              className="flex items-center gap-1 text-white text-[11px] sm:text-xs md:text-sm lg:text-base font-semibold hover:underline transition-colors duration-300"
            >
              Blog
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
