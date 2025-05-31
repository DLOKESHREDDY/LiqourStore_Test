import React from 'react';
import { Wine, ShieldCheck, Brain, Leaf } from 'lucide-react';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: "James Wilson",
      role: "Wine Expert",
      image: "https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg",
      description: "With over 15 years of experience in the wine industry, James brings unparalleled expertise to our selection process."
    },
    {
      name: "Prasanth Kumar",
      role: "Spirits Specialist",
      image: "https://images.pexels.com/photos/8191571/pexels-photo-8191571.jpeg",
      description: "Prasanth's knowledge of rare and craft spirits helps us source the most exciting products for our shelves."
    },
    {
      name: "Sejal Patel",
      role: "Store Manager",
      image: "https://images.pexels.com/photos/7641837/pexels-photo-7641837.jpeg",
      description: "Sejal ensures that every customer receives exceptional service and leaves with the perfect selection."
    }
  ];

  const values = [
    {
      icon: <Wine className="w-8 h-8" />,
      title: "Quality",
      description: "We only source the finest beverages, ensuring quality in every bottle."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Trust",
      description: "Building customer relationships through knowledge and honesty."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Expertise",
      description: "Our knowledgeable staff can guide you to the perfect selection."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "Committed to responsible practices in our operations."
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2664150/pexels-photo-2664150.jpeg"
            alt="Wine Cellar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="font-serif text-5xl mb-6">Our Story</h1>
            <p className="text-lg">
              Rise Spirits & Wine was founded with a simple mission: to bring the finest selection of wines, 
              spirits, and ready-to-drink cocktails to the Hattiesburg community.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 mb-6 leading-relaxed">
            What started as a small family business has grown into a premier destination for beverage enthusiasts.
            Our team has spent years cultivating relationships with distilleries, vineyards, and producers around
            the world to ensure we offer only the best products to our customers.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, we're proud to be Hattiesburg's go-to source for everything from allocated bourbon to rare
            Japanese whiskeys, fine champagnes, and craft cocktails.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-20 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-burgundy-900 text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-burgundy-100 rounded-full flex items-center justify-center text-burgundy-600">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl text-burgundy-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl text-burgundy-900 text-center mb-16">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl text-burgundy-900 mb-2">{member.name}</h3>
                <p className="text-gold-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default AboutPage;