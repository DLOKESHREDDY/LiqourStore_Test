import React from 'react';
import { GlassWater, Gift, Truck, Users, Calendar, Store } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <GlassWater className="w-12 h-12" />,
      title: "Expert Consultations",
      description: "Our knowledgeable staff provides personalized recommendations based on your preferences and occasion."
    },
    {
      icon: <Gift className="w-12 h-12" />,
      title: "Custom Gift Services",
      description: "Let us create the perfect gift package for any occasion, complete with beautiful presentation."
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Local Delivery",
      description: "Convenient delivery service available for orders within Hattiesburg area."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Private Tastings",
      description: "Host a private tasting event with our experts to explore new flavors and learn about different spirits."
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Special Events",
      description: "Regular wine tastings, spirit seminars, and special release events for our customers."
    },
    {
      icon: <Store className="w-12 h-12" />,
      title: "Corporate Services",
      description: "Special ordering and event planning services for corporate clients and large events."
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg"
            alt="Wine Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="font-serif text-5xl mb-6">Our Services</h1>
            <p className="text-lg">
              Discover our range of premium services designed to enhance your wine and spirits experience.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="text-burgundy-600 mb-6">{service.icon}</div>
              <h3 className="font-serif text-2xl text-burgundy-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <h2 className="font-serif text-3xl text-burgundy-900 mb-6">Ready to Experience Our Services?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our services or to schedule a consultation with our experts.
          </p>
          <button className="bg-burgundy-600 text-white px-8 py-3 rounded-md hover:bg-burgundy-700 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;