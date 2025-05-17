import React from 'react';
import Carousel from '../components/Carousel';
import AboutSection from '../components/AboutSection';
import ProductHighlights from '../components/ProductHighlights';

const HomePage: React.FC = () => {
  return (
    <div>
      <Carousel />
      <AboutSection />
      <ProductHighlights />
    </div>
  );
};

export default HomePage;