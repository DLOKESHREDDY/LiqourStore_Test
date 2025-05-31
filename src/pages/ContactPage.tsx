import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xnndrydn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl text-burgundy-900 text-center mb-12">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="font-serif text-2xl text-burgundy-900 mb-6">Get in Touch</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6" method='POST'>
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy-500"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-burgundy-600 text-white py-3 rounded-md hover:bg-burgundy-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="font-serif text-2xl text-burgundy-900 mb-6">Store Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-burgundy-600 mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">6375 US-98 #30<br />Hattiesburg, MS, 39402</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-burgundy-600 mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">(601) 336-6867</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-burgundy-600 mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">risespiritswine@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6816.911454233298!2d-89.4048828!3d31.318785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889d209b322e159b%3A0x80c440e806c452c7!2s6375%20US-98%20%2330%2C%20Hattiesburg%2C%20MS%2039402!5e0!3m2!1sen!2sus!4v1747788906184!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;