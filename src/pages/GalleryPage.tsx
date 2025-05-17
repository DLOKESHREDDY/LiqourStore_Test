import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Château Margaux 2015",
    category: "Wines",
    image: "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg",
    price: "$699.99",
    description: "Premier Grand Cru Classé from Bordeaux"
  },
  {
    id: 2,
    name: "Yamazaki 18 Year",
    category: "Spirits",
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg",
    price: "$899.99",
    description: "Japanese Single Malt Whisky"
  },
  {
    id: 3,
    name: "Dom Pérignon 2012",
    category: "Wines",
    image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg",
    price: "$299.99",
    description: "Vintage Champagne"
  },
  {
    id: 4,
    name: "Negroni Gift Set",
    category: "Cocktails",
    image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg",
    price: "$149.99",
    description: "Complete cocktail kit with premium spirits"
  },
  {
    id: 5,
    name: "Store Experience",
    category: "Store",
    image: "https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg",
    price: "Visit Us",
    description: "Experience our carefully curated selection in person"
  },
  {
    id: 6,
    name: "Limited Edition Bourbon",
    category: "Special",
    image: "https://images.pexels.com/photos/5947019/pexels-photo-5947019.jpeg",
    price: "$499.99",
    description: "Rare Kentucky straight bourbon whiskey"
  }
];

const categories = ["All", "Wines", "Spirits", "Cocktails", "Store", "Special"];

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl text-burgundy-900 text-center mb-6">Our Collection</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our carefully curated selection of premium spirits, fine wines, and artisanal cocktails.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-burgundy-600 text-white'
                  : 'bg-white text-burgundy-600 hover:bg-burgundy-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-xl text-burgundy-900">{product.name}</h3>
                  <span className="text-gold-600 font-medium">{product.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-burgundy-600 font-medium">{product.category}</span>
                  <button className="bg-burgundy-600 text-white px-4 py-2 rounded hover:bg-burgundy-700 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;