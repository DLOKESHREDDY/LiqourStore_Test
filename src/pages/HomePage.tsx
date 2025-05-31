import React from 'react';
import Carousel from '../components/Carousel';
import AboutSection from '../components/AboutSection';
import ProductHighlights from '../components/ProductHighlights';
import SpecialOffer from '../components/SpecialOffer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Carousel />
      <AboutSection />
      <ProductHighlights />
      <SpecialOffer />
    </div>
  );
};

export default HomePage;