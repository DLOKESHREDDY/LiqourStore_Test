import React from 'react';
import { GlassWater, Wine, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-burgundy-900 mb-6">About Us</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <img 
              src="assests/images/Louis.jpg" 
              alt="Wine Store Interior" 
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-6 leading-relaxed">
             Welcome to Rise Spirits & Wine — your go-to destination in the Hattiesburg area for a top-tier selection of premium liquor, wine, and ready-to-drink cocktails.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              From top-shelf bourbon and tequila to smooth vodka, gin, rum, and a refined wine selection, we offer something for every taste and occasion. Whether you're after a rare find or a trusted favorite, our collection is curated to impress.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              To complete your experience, we also carry a variety of cocktail mixers, energy drinks, and sodas. Whether you're seeking a special gift set or looking to explore new flavors, our knowledgeable staff is here to assist you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-10">
              <div className="flex items-center">
                <div className="bg-burgundy-100 p-3 rounded-full mr-4">
                  <GlassWater className="text-burgundy-600" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-burgundy-900">Premium Selection</h3>
                  <p className="text-sm text-gray-600">Curated fine spirits</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-burgundy-100 p-3 rounded-full mr-4">
                  <Wine className="text-burgundy-600" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-burgundy-900">Expert Advice</h3>
                  <p className="text-sm text-gray-600">Knowledgeable staff</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-burgundy-100 p-3 rounded-full mr-4">
                  <Clock className="text-burgundy-600" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-burgundy-900">Extended Hours</h3>
                  <p className="text-sm text-gray-600">Open 7 days a week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;