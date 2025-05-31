import React, { useState } from 'react';
import { Wine } from 'lucide-react';

interface AgeVerificationProps {
  onVerify: (verified: boolean) => void;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerify }) => {
  const [error, setError] = useState<string | null>(null);

  const handleVerify = (verified: boolean) => {
    if (verified) {
      onVerify(true);
    } else {
      setError("We're sorry, but you must be at least 21 years old to enter this site.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-8 text-center animate-fadeIn">
        <div className="mx-auto w-16 h-16 bg-burgundy-600 rounded-full flex items-center justify-center mb-6">
          <Wine className="text-gold-400" size={30} />
        </div>
        
        <h2 className="text-2xl font-serif text-burgundy-900 mb-4">Age Verification</h2>
        
        <p className="text-gray-700 mb-8">
          Welcome to Rise Spirits & Wine. You must be 21 years or older to enter this website.
        </p>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-md mb-6">
            {error}
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => handleVerify(true)}
            className="flex-1 bg-burgundy-600 text-white py-3 px-6 rounded-md hover:bg-burgundy-700 transition duration-300"
          >
            I am 21 or older
          </button>
          
          <button
            onClick={() => handleVerify(false)}
            className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-300 transition duration-300"
          >
            I am under 21
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;