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
    name: "Champagne",
    category: "champagne",
    image: "assests/images/shanpain.jpg",
    description: "Explore our collection of fine champagnes from renowned regions, including vintage French cuvées and limited-edition grower champagnes."
  },
  {
    id: 2,
    name: "Elegant Wines",
    category: "Wine",
    image: "assests/images/wine.jpg",
    description: "Explore our collection of fine wines from around the world, including distinguished French Bordeaux, Italian Chianti, and exclusive New World vintages."
  },
  {
    id: 3,
    name: "Tequila",
    category: "Tequila",
    image: "assests/images/teqila.jpg",
    description: "Explore our collection of fine tequilas from Mexico, including aged añejos, smooth reposados, and rare small-batch artisanal varieties."
  },
  {
    id: 4,
    name: "Vodka",
    category: "Vodka",
    image: "assests/images/vodka.jpg",
    description: "Explore our collection of fine vodkas from around the world, including ultra-smooth Russian classics, Polish grain vodkas, and premium craft distillations."
  }
];

const ProductHighlights: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-burgundy-900 mb-6">Our Highlights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of premium Champagne, wines, Tequila and Vodka
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