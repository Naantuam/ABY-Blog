import { useState } from 'react';
import { Facebook, Twitter, Instagram, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    // Client-side email validation
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    const apiKey = import.meta.env.VITE_CONVERTKIT_API_KEY;
    const formId = import.meta.env.VITE_CONVERTKIT_FORM_ID;

    // Check if configuration is missing or holds placeholder values
    const isConfigMissing =
      !apiKey ||
      !formId ||
      apiKey === 'your_public_api_key_here' ||
      formId === 'your_form_id_here' ||
      apiKey.trim() === '' ||
      formId.trim() === '';

    if (isConfigMissing) {
      // Simulation mode to allow local testing and design demonstration
      console.warn(
        'ConvertKit credentials missing. Running in simulation mode. Configure VITE_CONVERTKIT_API_KEY and VITE_CONVERTKIT_FORM_ID in a .env file to connect to your live ConvertKit account.'
      );
      
      setTimeout(() => {
        setStatus('success');
        setMessage(
          'Thank you for subscribing! Please check your inbox to confirm your subscription.'
        );
      }, 1200);
      return;
    }

    try {
      const response = await fetch(
        `https://api.convertkit.com/v3/forms/${formId.trim()}/subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            api_key: apiKey.trim(),
            email: trimmedEmail,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(
          'Thank you for subscribing! Please check your inbox to confirm your subscription.'
        );
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('ConvertKit subscription error:', err);
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setMessage('');
    setEmail('');
  };

  return (
    <footer id="footer" className="bg-slate-200 text-gray-800 py-4">
      {/* Reduced bottom padding on the max-w-7xl div (pb-3 to pb-0) and removed top padding (pt-6) */}
      <div className="w-full px-2 sm:px-6 lg:px-8">

        {/* Added mb-4 to create a small gap before the bottom bar */}
        <div className="flex flex-row justify-around text-center md:text-left gap-6 md:gap-0 flex-wrap md:flex-nowrap">

          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-center mb-3">Quick Links</h3>
            <ul className="space-y-3 items-center justify-center text-center text-base"> {/* Reduced space-y and text size */}
              <li><a href="#home" className="text-black hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#about" className="text-black hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#contact" className="text-black hover:text-blue-600 transition-colors">Contact</a></li>
              <li><a href="#team" className="text-black hover:text-blue-600 transition-colors">Team</a></li>
              <li><a href="#services" className="text-black hover:text-blue-600 transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Column 2: Newsletter */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h3>
            <div className="w-full max-w-sm flex flex-col items-center">
              {status === 'success' ? (
                <div className="w-4/5 text-center py-4 px-3 bg-green-50 border border-green-200 rounded-lg flex flex-col items-center gap-2 transition-all duration-300 transform scale-100 animate-fade-in">
                  <CheckCircle2 className="text-green-600 h-8 w-8 animate-bounce" />
                  <p className="text-sm font-medium text-green-800">Subscription Pending!</p>
                  <p className="text-xs text-green-700 leading-relaxed">
                    {message}
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-2 text-xs text-green-600 hover:text-green-800 font-semibold underline focus:outline-none cursor-pointer"
                  >
                    Subscribe another email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2 items-center">
                  <label htmlFor="email-subscribe" className="sr-only">Email</label>
                  <input
                    id="email-subscribe"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    required
                    className="bg-white text-gray-900 px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-4/5 text-sm disabled:bg-gray-100 disabled:text-gray-500 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 disabled:bg-blue-400 transition-colors font-medium w-4/5 text-sm flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin h-4 w-4" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                  {status === 'error' && (
                    <div className="flex items-center gap-1 text-red-600 text-xs mt-1 w-4/5">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span className="font-medium">{message}</span>
                    </div>
                  )}
                </form>
              )}
              <div className="flex justify-center h-40 mt-4">
                <img
                  src="/assets/ABY.png"
                  alt="Aby diamond Mining & Construction LTD Logo"
                  className="h-40 w-auto"
                />
              </div>
            </div>
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