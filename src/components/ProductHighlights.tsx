import React from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Whiskeys",
    category: "Liquor",
    image: "https://images.pexels.com/photos/5947019/pexels-photo-5947019.jpeg",
    description: "Explore our collection of fine whiskeys from around the world, including rare Japanese varieties and small-batch bourbons."
  },
  {
    id: 2,
    name: "Elegant Wines",
    category: "Wine",
    image: "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg",
    description: "Discover our hand-selected wines from renowned vineyards, featuring reds, whites, and sparkling options for every occasion."
  },
  {
    id: 3,
    name: "Craft Cocktails",
    category: "Cocktails",
    image: "https://images.pexels.com/photos/613037/pexels-photo-613037.jpeg",
    description: "Find everything you need for perfect cocktails, from premium spirits to artisanal mixers and garnishes."
  },
  {
    id: 4,
    name: "Unique Spirits",
    category: "Specialty",
    image: "https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg",
    description: "Experience our collection of unique spirits including craft vodkas, small-batch gins, and premium tequilas."
  }
];

const ProductHighlights: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-burgundy-900 mb-6">Our Highlights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of premium spirits, wines, and cocktail essentials
          </p>
          <div className="w-24 h-1 bg-gold-400 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-burgundy-600 text-white text-sm py-1 px-3 rounded-full">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-xl text-burgundy-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <a 
                  href="#" 
                  className="inline-block text-burgundy-600 font-medium hover:text-burgundy-800 transition-colors duration-300"
                >
                  Explore More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;