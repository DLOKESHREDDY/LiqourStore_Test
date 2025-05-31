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
    name: "Louis XIII",
    category: "Brandy",
    image: "assests/images/Louis.jpg",
    price: "$4999.99",
    description: "Louis XIII is a luxurious, century-aged cognac with rich and complex flavors."
  },
  {
    id: 2,
    name: "CakeBread Cabernet 750ml",
    category: "Wine",
    image: "assests/images/CakeBread_Wine.jpg",
    price: "$88.99",
    description: "A rich and bold Cabernet."
  },
  {
    id: 3,
    name: "Decoy Cabernet",
    category: "Wine",
    image: "assests/images/Decoy_Wine.jpg",
    price: "$25.99",
    description: "A smooth and elegant Cabernet."
  },
  {
    id: 4,
    name: "Josh Paso Robles",
    category: "Wine",
    image: "assests/images/Josh_Wine.jpg",
    price: "$17.99",
    description: "A robust and refined red."
  },
    {
    id: 5,
    name: "Kendall Jackson Grand",
    category: "Wine",
    image: "assests/images/KendallJackson_Wine.jpg",
    price: "$33.49",
    description: "A smooth and luxurious Chardonnay."
  },
  {
    id: 6,
    name: "Volcan XA 6",
    category: "Tequila",
    image: "assests/images/VolcanXA_Tequila.jpg",
    price: "$160.67",
    description: "An ultra-premium, smooth tequila."
  },
  {
    id: 7,
    name: "Deleon Reosado",
    category: "Tequila",
    image: "assests/images/Deleon_Tequila.jpg",
    price: "$50.60",
    description: "A rich and refined reposado."
  },
  {
    id: 8,
    name: "Lunazul Blanco",
    category: "Tequila",
    image: "assests/images/Lunazul_Tequila.jpg",
    price: "$48.49",
    description: "A crisp and smooth Blanco."
  },
   {
    id: 9,
    name: "Absolut Waterlon",
    category: "Vodka",
    image: "assests/images/Absolut_Vodka.jpg",
    price: "$23.49",
    description: "A refreshing and fruity vodka."
  },
 {
    id: 10,
    name: "Ciroc",
    category: "Vodka",
    image: "assests/images/Ciroc_Vodka.jpg",
    price: "$74.99",
    description: "A smooth and stylish vodka."
  },
 {
    id: 11,
    name: "Smirnoff",
    category: "Vodka",
    image: "assests/images/Smirnoff_Vodka.jpg",
    price: "$15.99",
    description: "A classic and versatile vodka."
  },
 {
    id: 12,
    name: "Burnetts",
    category: "Vodka",
    image: "assests/images/Burnetts_Vodka.jpg",
    price: "$16.49",
    description: "A crisp and affordable vodka."
  },
 {
    id: 13,
    name: "Tito's",
    category: "Vodka",
    image: "assests/images/Titos_Vodka.jpg",
    price: "$36.50",
    description: "A smooth and handcrafted vodka."
  },
 {
    id: 14,
    name: "Jim Beam",
    category: "Whisky",
    image: "assests/images/JimBeam_Whisky.jpg",
    price: "$49.99",
    description: "A classic and bold bourbon."
  },
{
    id: 15,
    name: "JD Gentleman Jack",
    category: "Whisky",
    image: "assests/images/Gentleman_Whisky.jpg",
    price: "$65.99",
    description: "A smooth and refined whiskey."
  },
 {
    id: 16,
    name: "Makers Mark",
    category: "Whisky",
    image: "assests/images/MakersMark_Whisky.jpg",
    price: "$61.99",
    description: "A rich and flavorful bourbon."
  },
];

const categories = ["All", "Wine", "Whisky", "Vodka", "Tequila"];

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