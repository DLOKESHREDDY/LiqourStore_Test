import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const SpecialOffer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-white rounded-lg p-8 max-w-md mx-4 animate-fadeIn">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <h2 className="font-serif text-3xl text-burgundy-900 mb-4">Summer Special!</h2>
          <p className="text-gray-600 mb-6">
            Beat the heat with our exclusive summer collection! Discover refreshing wines
            and craft cocktails perfect for your summer gatherings.
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="bg-burgundy-600 text-white px-8 py-3 rounded-md hover:bg-burgundy-700 transition-colors"
          >
            Have a Try!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;