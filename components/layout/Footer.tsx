import React from 'react';

const Footer = () => {
  const exploreLinks = [
    'Apartments in Dubai',
    'Hotels in New York',
    'Villa in Spain',
    'Mansion in Indonesia'
  ];

  const companyLinks = [
    'About us',
    'Blog',
    'Career',
    'Customers',
    'Brand'
  ];

  const helpLinks = [
    'Support',
    'Cancel booking',
    'Refunds Process'
  ];

  const bottomLinks = [
    'Terms of Service',
    'Policy service',
    'Cookies Policy',
    'Partners'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-1">
              <div className="text-2xl font-bold mb-6">
                alx
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                ALX is a platform where travelers can discover and book unique, comfortable, and 
                affordable lodging options worldwide. From cozy city apartments and tranquil 
                countryside retreats to exotic beachside villas, ALX connects you with the perfect 
                place to stay for any trip.
              </p>
            </div>

            {/* Explore Section */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white">Explore</h3>
              <ul className="space-y-3">
                {exploreLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Section */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Section */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white">Help</h3>
              <ul className="space-y-3">
                {helpLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="px-6 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              {/* Notice */}
              <div className="text-gray-400 text-sm max-w-md">
                Some hotel requires you to cancel more than 24 hours before check-in. Details{' '}
                <a href="#" className="text-green-400 hover:text-green-300 transition-colors duration-200">
                  here
                </a>
              </div>
              
              {/* Bottom Links */}
              <div className="flex flex-wrap gap-6">
                {bottomLinks.map((link, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;