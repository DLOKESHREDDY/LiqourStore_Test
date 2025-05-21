import React from 'react';
import { Link } from 'react-router-dom';
import { Wine, Mail, Clock, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const hours = [
    { day: 'Monday', hours: '10:00 AM - 9:00 PM' },
    { day: 'Tuesday', hours: '10:00 AM - 9:00 PM' },
    { day: 'Wednesday', hours: '10:00 AM - 9:00 PM' },
    { day: 'Thursday', hours: '10:00 AM - 9:00 PM' },
    { day: 'Friday', hours: '10:00 AM - 10:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 10:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const handleAddressClick = () => {
    window.open('https://www.google.com/maps/place/6375+US-98+%2330,+Hattiesburg,+MS+39402', '_blank');
  };

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Wine className="text-gold-400 mr-2" size={28} />
              <span className="font-serif font-bold text-2xl">
                <span className="text-white">Rise</span>
                <span className="text-gold-400"> Wine</span>
                <span className="text-white"> & Spirits</span>
              </span>
            </div>
            
            <p className="mb-6 text-gray-400">
              Your premier destination for a wide selection of premium liquor, wine, and ready-to-drink cocktails in the Hattiesburg area.
            </p>
            
            <div className="flex items-center mb-4">
              <Mail className="mr-3 text-burgundy-500" size={18} />
              <a href="mailto:risespiritswine@gmail.com" className="hover:text-gold-400 transition duration-300">
                risespiritswine@gmail.com
              </a>
            </div>
            
            <div className="flex items-center mb-4 cursor-pointer" onClick={handleAddressClick}>
              <MapPin className="mr-3 text-burgundy-500" size={18} />
              <span className="hover:text-gold-400 transition duration-300">
                6375 Hwy98 W, Suite 30, Hattiesburg, MS, 39402
              </span>
            </div>
            
            <div className="flex items-center">
              <Phone className="mr-3 text-burgundy-500" size={18} />
              <a href="tel:+16013366867" className="hover:text-gold-400 transition duration-300">
                (601) 336-6867
              </a>
            </div>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="font-serif text-xl text-white mb-6 flex items-center">
              <Clock className="mr-2 text-gold-400" size={20} />
              Our Hours
            </h3>
            <p className="text-gray-400 mb-4 text-sm italic">
              Holiday Hours May Vary. Please Call For Details.
            </p>
            
            <div className="space-y-2">
              {hours.map((day) => (
                <div key={day.day} className="flex justify-between border-b border-gray-800 pb-1">
                  <span>{day.day}</span>
                  <span className="text-gold-400">{day.hours}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="font-serif text-xl text-white mb-6">Site Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-gold-400 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-400 transition duration-300">About</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold-400 transition duration-300">Gallery</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition duration-300">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-400 transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-xl text-white mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on new arrivals, special offers, and events.
            </p>
            
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy-500"
              />
              <button 
                type="submit" 
                className="w-full bg-burgundy-600 hover:bg-burgundy-700 text-white py-2 px-4 rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Rise Spirits & Wine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;