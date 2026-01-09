import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-200 text-gray-800 py-4">
      {/* Reduced bottom padding on the max-w-7xl div (pb-3 to pb-0) and removed top padding (pt-6) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Added mb-4 to create a small gap before the bottom bar */}
        <div className="flex flex-row justify-around text-center md:text-left gap-6 md:gap-0 flex-wrap md:flex-nowrap">
          
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-center mb-3">Quick Links</h3>
            <ul className="space-y-3 items-center justify-center text-center text-base"> {/* Reduced space-y and text size */}
              <li><a href="/home" className="text-black hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="/about" className="text-black hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="/contact" className="text-black hover:text-blue-600 transition-colors">Contact</a></li>
              <li><a href="/team" className="text-black hover:text-blue-600 transition-colors">Team</a></li>
              <li><a href="/services" className="text-black hover:text-blue-600 transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Column 2: Newsletter */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h3>
            <form className="w-full max-w-sm">
              <label htmlFor="email-subscribe" className="sr-only">Email</label>
              <div className="flex flex-col gap-2 items-center"> {/* Reduced gap */}
                <input
                  id="email-subscribe"
                  type="email"
                  placeholder="Email"
                  className="bg-white text-gray-900 px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-4/5 text-sm" // Reduced padding and width
                />
                <button 
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition-colors font-medium w-4/5 text-sm" // Reduced padding and width
                >
                  Subscribe
                </button>
                <div className="flex justify-center h-40">
                <img
                  src="/assets/ABY.png" 
                  alt="Aby diamond Mining & Construction LTD Logo"
                  className="h-40 w-auto" 
                />
              </div>
              </div>
            </form>
          </div>

          {/* Column 3: Social Media */}
          <div className="">
            <h3 className="text-lg font-semibold text-center mb-3">Social Media</h3>
            <ul className="space-y-3 flex flex-col items-center text-sm"> {/* Reduced space-y and text size */}
              <li>
                <a href="#" className="flex items-center gap-2 text-black hover:text-blue-600 transition-colors">
                  <Facebook size={18} /> {/* Reduced icon size */}
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-black hover:text-blue-600 transition-colors">
                  <Twitter size={18} /> {/* Reduced icon size */}
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-black hover:text-blue-600 transition-colors">
                  <Instagram size={18} /> {/* Reduced icon size */}
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Logo and Copyright */}
        <div className="text-center"> 
          
          <p className="text-sm text-gray-700 mt-1 pb-2"> 
            © Aby diamond Mining & Construction LTD 2025
          </p>
        </div>

      </div>
    </footer>
  );
}