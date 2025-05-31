import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: "assests/images/Teqila.jpg",
    title: "Exquisite Teqila",
    description: "Explore our collection of fine tequilas from Mexico"
  },
  {
    image: "assests/images/shanpain.jpg",
    title: "Premium champagne",
    description: "Explore our selection of fine champagne for connoisseurs"
  },
  {
    image: "assests/images/Whisky.jpg",
    title: "Premium Aged Whiskeys ",
    description: "Discover top whiskeys matured to excellence- perfect for sipping, gifting, or collecting"
  }
];

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <div className="relative h-[90vh] overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-4 animate-fadeInUp">
              {slide.title}
            </h2>
            
            <p className="text-xl text-white mb-10 max-w-2xl animate-fadeInUp animation-delay-200">
              {slide.description}
            </p>
            
            <button className="bg-burgundy-600 hover:bg-burgundy-700 text-white px-8 py-3 rounded-md transition duration-300 font-medium animate-fadeInUp animation-delay-400">
              Have a Try!
            </button>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setAutoplay(false);
              setTimeout(() => setAutoplay(true), 5000);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-white w-6' : 'bg-white/50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;