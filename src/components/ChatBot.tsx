import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Product {
  name: string;
  price: string;
  description: string;
}

const products: Record<string, Product[]> = {
  whiskey: [
    { name: "Yamazaki 18 Year", price: "$899.99", description: "Japanese Single Malt Whisky" },
    { name: "Macallan 12 Year", price: "$89.99", description: "Highland Single Malt Scotch" },
    { name: "Buffalo Trace", price: "$29.99", description: "Kentucky Straight Bourbon" }
  ],
  vodka: [
    { name: "Grey Goose", price: "$39.99", description: "French Premium Vodka" },
    { name: "Belvedere", price: "$34.99", description: "Polish Luxury Vodka" },
    { name: "Tito's", price: "$24.99", description: "Handmade Vodka" }
  ],
  gin: [
    { name: "Hendrick's", price: "$34.99", description: "Scottish Gin with Cucumber & Rose" },
    { name: "Bombay Sapphire", price: "$29.99", description: "London Dry Gin" },
    { name: "The Botanist", price: "$39.99", description: "Islay Dry Gin" }
  ],
  wine: [
    { name: "Opus One 2019", price: "$399.99", description: "Napa Valley Red Blend" },
    { name: "Dom Pérignon 2012", price: "$249.99", description: "Vintage Champagne" },
    { name: "Caymus Cabernet", price: "$89.99", description: "Napa Valley Cabernet" }
  ],
  cocktails: [
    { name: "Old Fashioned Kit", price: "$79.99", description: "Complete cocktail set with bourbon" },
    { name: "Martini Set", price: "$69.99", description: "Premium vodka or gin with vermouth" },
    { name: "Negroni Bundle", price: "$89.99", description: "Gin, Campari, and vermouth" }
  ]
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([
    { 
      text: "Hello! Welcome to Rise Spirits & Wine. How can I help you today? You can ask about our products or select a category below.", 
      sender: 'bot' 
    }
  ]);
  const [input, setInput] = useState('');
  const [showCategories, setShowCategories] = useState(true);

  const handleAddressClick = () => {
    window.open('https://www.google.com/maps/place/6375+US-98+%2330,+Hattiesburg,+MS+39402', '_blank');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleCategorySelect = (category: string) => {
    const categoryProducts = products[category];
    if (categoryProducts) {
      const productList = categoryProducts.map(p => 
        `${p.name} - ${p.price}\n${p.description}`
      ).join('\n\n');
      
      setMessages(prev => [...prev, 
        { text: `Here are our available ${category} products:\n\n${productList}`, sender: 'bot' }
      ]);
      setShowCategories(false);
    }
  };

  const handleSend = () => {
    if (input.trim() === '') return;

    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    
    const lowerInput = input.toLowerCase();
    let botResponse = "I'm sorry, I don't have that information. For specific questions about our products, please visit our store in Hattiesburg or contact us at risespiritswine@gmail.com.";
    
    if (lowerInput.includes('products') || lowerInput.includes('what') || lowerInput.includes('available')) {
      setShowCategories(true);
      botResponse = "Please select a category below to see our available products:";
    } else if (lowerInput.includes('hours') || lowerInput.includes('open')) {
      botResponse = "We're open Monday-Thursday from 10AM-9PM, and Friday-Saturday from 10AM-10PM. We're closed on Sundays.";
    } else if (lowerInput.includes('location') || lowerInput.includes('where') || lowerInput.includes('address')) {
      botResponse = "We're located at 6375 Hwy98 W, Suite 30, Hattiesburg, MS, 39402. Click here to view on Google Maps.";
      setTimeout(() => handleAddressClick(), 1000);
    }
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);
    
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-burgundy-700 rotate-90' : 'bg-burgundy-600 hover:bg-burgundy-700'
        }`}
      >
        {isOpen ? <X className="text-white" size={24} /> : <MessageCircle className="text-white" size={24} />}
      </button>
      
      <div
        className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-40 overflow-hidden transition-all duration-300 transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-burgundy-600 p-4">
          <h3 className="text-white font-medium flex items-center">
            <MessageCircle className="mr-2" size={18} />
            Wine & Spirits Assistant
          </h3>
        </div>
        
        <div className="h-80 overflow-y-auto p-4 space-y-3" style={{ scrollBehavior: 'smooth' }}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`max-w-[85%] p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-burgundy-100 text-burgundy-900 ml-auto'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.text.split('\n').map((line, i) => (
                <p key={i} className="mb-1">{line}</p>
              ))}
            </div>
          ))}
          
          {showCategories && (
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(products).map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className="bg-burgundy-100 text-burgundy-900 p-2 rounded-md hover:bg-burgundy-200 transition-colors capitalize"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="border-t border-gray-200 p-3 flex">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Ask about our products..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-burgundy-500"
          />
          <button
            onClick={handleSend}
            className="bg-burgundy-600 text-white px-4 rounded-r-md hover:bg-burgundy-700 transition"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;