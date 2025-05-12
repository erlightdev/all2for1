import '../style.css';
import { createHeader } from '../components/header';
import { createFooter } from '../components/footer';

// Function to create the main content of the Home page
const createMainContent = () => {
  return `
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
      <div class="relative h-[600px] overflow-hidden">
        <img src="https://readdy.ai/api/search-image?query=Modern%20city%20lifestyle%20scene%20with%20vibrant%20street%20cafes%20and%20restaurants%2C%20warm%20evening%20atmosphere%20with%20city%20lights%20and%20people%20dining%2C%20professional%20urban%20photography%20with%20soft%20lighting%20and%20green%20accent%20elements&amp;width=1440&amp;height=600&amp;seq=1&amp;orientation=landscape" alt="Local Deals" class="w-full h-full object-cover object-center">
        <div class="absolute inset-0 z-20 flex items-center">
          <div class="container mx-auto px-6">
            <div class="max-w-2xl">
              <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">Discover 2-for-1 Deals Near You</h1>
              <p class="text-xl text-white mb-8">Find the best local offers and double your value instantly</p>
              <div class="bg-white p-4 rounded-lg shadow-xl">
                <div class="flex flex-col md:flex-row gap-4">
                  <div class="flex-grow relative">
                    <div class="absolute left-3 top-1/2 -translate-y-1/2">
                      <i class="fas fa-map-marker-alt text-green-600 text-lg"></i>
                    </div>
                    <input type="text" placeholder="Enter your delivery address" class="w-full pl-10 pr-4 py-3 border-none text-gray-700 bg-gray-100 rounded-md focus:ring-2 focus:ring-green-500 focus:bg-white transition-all text-sm">
                  </div>
                  <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 !rounded-button whitespace-nowrap cursor-pointer transition duration-300 flex items-center justify-center min-w-[140px]">
                    <i class="fas fa-search mr-2"></i>Find Deals
                  </button>
                </div>
                <div class="mt-4 flex items-center gap-6">
                  <button class="text-gray-600 hover:text-green-600 flex items-center gap-2 text-sm font-medium">
                    <i class="fas fa-location-arrow"></i>Use current location
                  </button>
                  <button class="text-gray-600 hover:text-green-600 flex items-center gap-2 text-sm font-medium">
                    <i class="far fa-clock"></i>Schedule for later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4 py-12">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold text-gray-800">Categories</h2>
        <button class="text-green-600 hover:text-green-800 font-medium flex items-center !rounded-button whitespace-nowrap cursor-pointer">
          View All <i class="fas fa-chevron-right ml-2"></i>
        </button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        ${createCategoryCards()}
      </div>
    </div>
    ${createFeaturedDealsSection()} <!-- Featured Deals section now below Categories -->
    ${createTopVendorsSection()} <!-- Top Vendors section now below Featured Deals -->
    <div class="bg-gray-50 py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${createHowItWorksCards()}
        </div>
      </div>
    </div>
    <div class="bg-green-600 py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Ready to Save Big?</h2>
        <p class="text-white text-lg max-w-2xl mx-auto mb-8">Join thousands of smart shoppers who are getting twice the value with All2For1.com</p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button class="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 !rounded-button whitespace-nowrap cursor-pointer transition duration-300">Sign Up Now</button>
          <button class="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 !rounded-button whitespace-nowrap cursor-pointer transition duration-300">Become a Vendor</button>
        </div>
      </div>
    </div>
  `;
};

// Function to create category cards
const createCategoryCards = () => {
  const categories = [
    { name: 'Food', image: 'https://readdy.ai/api/search-image?query=Delicious%20food%20arrangement%20with%20fresh%20ingredients%20on%20a%20clean%20minimalist%20background%20with%20soft%20lighting%2C%20professional%20food%20photography%20showing%20various%20dishes%20with%20a%20green%20accent&amp;width=200&amp;height=200&amp;seq=2&amp;orientation=squarish' },
    { name: 'Drinks', image: 'https://readdy.ai/api/search-image?query=Elegant%20drink%20photography%20with%20various%20beverages%20including%20cocktails%2C%20coffee%20and%20smoothies%20on%20a%20clean%20minimalist%20background%20with%20soft%20lighting%20and%20green%20accent%20elements&amp;width=200&amp;height=200&amp;seq=3&amp;orientation=squarish' },
    { name: 'Health', image: 'https://readdy.ai/api/search-image?query=Health%20and%20wellness%20products%20including%20supplements%2C%20fitness%20equipment%20and%20natural%20remedies%20on%20a%20clean%20minimalist%20background%20with%20soft%20lighting%20and%20green%20accent%20elements&amp;width=200&amp;height=200&amp;seq=4&amp;orientation=squarish' },
    { name: 'Beauty', image: 'https://readdy.ai/api/search-image?query=Beauty%20and%20skincare%20products%20elegantly%20arranged%20including%20creams%2C%20serums%20and%20makeup%20items%20on%20a%20clean%20minimalist%20background%20with%20soft%20lighting%20and%20green%20accent%20elements&amp;width=200&amp;height=200&amp;seq=5&amp;orientation=squarish' },
    { name: 'Electronics', image: 'https://readdy.ai/api/search-image?query=Modern%20electronics%20and%20gadgets%20including%20smartphones%2C%20headphones%20and%20smart%20devices%20on%20a%20clean%20minimalist%20background%20with%20soft%20lighting%20and%20green%20accent%20elements&amp;width=200&amp;height=200&amp;seq=6&amp;orientation=squarish' },
    { name: 'Services', image: 'https://readdy.ai/api/search-image?query=Professional%20service%20concept%20with%20business%20elements%20and%20service%20tools%20on%20a%20clean%20minimalist%20background%20with%20soft%20lighting%20and%20green%20accent%20elements&amp;width=200&amp;height=200&amp;seq=7&amp;orientation=squarish' },
  ];

  return categories.map(category => `
    <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer">
      <div class="h-36 overflow-hidden">
        <img src="${category.image}" alt="${category.name}" class="w-full h-full object-cover object-top">
      </div>
      <div class="p-4 text-center">
        <h3 class="font-semibold text-gray-800">${category.name}</h3>
      </div>
    </div>
  `).join('');
};

// Function to create "How It Works" cards
const createHowItWorksCards = () => {
  const steps = [
    { icon: 'fas fa-search', title: '1. Browse Deals', description: 'Explore amazing 2-for-1 deals from local businesses near you.' },
    { icon: 'fas fa-shopping-cart', title: '2. Add to Cart', description: 'Select your favorite deals and securely check out online.' },
    { icon: 'fas fa-smile', title: '3. Enjoy Double!', description: 'Redeem your purchase and enjoy twice the value!' },
  ];

  return steps.map(step => `
    <div class="bg-white rounded-lg shadow-md p-6 text-center">
      <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="${step.icon} text-2xl text-green-600"></i>
      </div>
      <h3 class="text-xl font-bold mb-3">${step.title}</h3>
      <p class="text-gray-600">${step.description}</p>
    </div>
  `).join('');
};

// Function to create the Featured Deals section
const createFeaturedDealsSection = () => {
  return `
    <div class="bg-gray-50 py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">Featured Deals</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          ${createFeaturedDealsCards()}
        </div>
      </div>
    </div>
  `;
};

// Function to create featured deals cards
const createFeaturedDealsCards = () => {
  const deals = [
    {
      title: 'Buy 1 Get 1 Free Coffee',
      description: 'Urban Brew Coffee',
      distance: '0.8 miles away',
      image: 'https://readdy.ai/api/search-image?query=Two%20premium%20coffee%20cups%20with%20latte%20art%20on%20a%20wooden%20table%20with%20coffee%20beans%20scattered%20around%2C%20professional%20coffee%20shop%20photography%20with%20soft%20lighting%20and%20green%20accent%20elements&amp;width=300&amp;height=200&amp;seq=8&amp;orientation=landscape',
      timeLeft: '2 days left'
    },
    {
      title: '2 for 1 Pizza Deal',
      description: "Mama's Pizzeria",
      distance: '1.2 miles away',
      image: 'https://readdy.ai/api/search-image?query=Two%20delicious%20pizzas%20with%20various%20toppings%20side%20by%20side%20on%20a%20wooden%20serving%20board%2C%20professional%20food%20photography%20with%20soft%20lighting%20and%20green%20accent%20elements&amp;width=300&amp;height=200&amp;seq=9&amp;orientation=landscape',
      timeLeft: '5 days left'
    },
    {
        title: 'Buy 1 Get 1 Free Facial',
        description: 'Glow Spa & Beauty',
        distance: '2.5 miles away',
        image: 'https://readdy.ai/api/search-image?query=Luxury%20spa%20facial%20treatment%20products%20including%20creams%2C%20oils%20and%20tools%20elegantly%20arranged%2C%20professional%20spa%20photography%20with%20soft%20lighting%20and%20green%20accent%20elements&amp;width=300&amp;height=200&amp;seq=10&amp;orientation=landscape',
        timeLeft: '3 days left'
      },
      {
        title: '2 for 1 Movie Tickets',
        description: 'Starlight Cinema',
        distance: '3.1 miles away',
        image: 'https://readdy.ai/api/search-image?query=Two%20movie%20tickets%20with%20popcorn%20and%20drinks%20on%20a%20theater%20background%2C%20professional%20entertainment%20photography%20with%20soft%20lighting%20and%20green%20accent%20elements&amp;width=300&amp;height=200&amp;seq=11&amp;orientation=landscape',
        timeLeft: '1 day left'
      }
    // Add more deals as needed
  ];

  return deals.map(deal => `
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="relative h-48 overflow-hidden">
        <img src="${deal.image}" alt="${deal.title}" class="w-full h-full object-cover object-top">
        <div class="absolute bottom-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">${deal.timeLeft}</div>
      </div>
      <div class="p-4">
        <div class="flex items-center text-sm text-gray-500 mb-2">
          <i class="fas fa-map-marker-alt mr-1"></i>
          <span>${deal.distance}</span>
        </div>
        <h3 class="font-bold text-lg mb-1">${deal.title}</h3>
        <p class="text-gray-600 mb-3">${deal.description}</p>
        <button class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 !rounded-button whitespace-nowrap cursor-pointer transition duration-300">View Deal</button>
      </div>
    </div>
  `).join('');
};

// Function to create the Top Vendors section
const createTopVendorsSection = () => {
  return `
    <div class="bg-gray-50 py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">Top Vendors</h2>
        <div class="relative">
          <div class="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
            ${createTopVendorCards()}
          </div>
        </div>
      </div>
    </div>
  `;
};

// Function to create top vendor cards
const createTopVendorCards = () => {
  const vendors = [
    {
      name: 'Urban Brew Coffee',
      rating: '4.8',
      description: 'Artisan coffee and pastries',
      image: 'https://readdy.ai/api/search-image?query=Modern%20coffee%20shop%20interior%20with%20green%20plants%20and%20wooden%20elements%2C%20professional%20business%20photography%20with%20soft%20lighting%20showing%20barista%20counter%20and%20seating%20area&amp;width=300&amp;height=200&amp;seq=12&amp;orientation=landscape'
    },
    {
      name: "Mama's Pizzeria",
      rating: '4.7',
      description: 'Authentic Italian pizza',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20pizzeria%20interior%20with%20brick%20oven%20and%20chefs%20preparing%20food%2C%20professional%20restaurant%20photography%20with%20soft%20lighting%20and%20green%20accent%20elements&amp;width=300&amp;height=200&amp;seq=13&amp;orientation=landscape'
    },
    {
        name: 'FitLife Gym',
        rating: '4.8',
        description: 'State-of-the-art fitness center',
        image: 'https://readdy.ai/api/search-image?query=Modern%20gym%20interior%20with%20various%20exercise%20equipment%20and%20training%20areas%2C%20professional%20fitness%20center%20photography%20with%20soft%20lighting%20and%20green%20accent%20elements&amp;width=300&amp;height=200&amp;seq=16&amp;orientation=landscape'
      },
      {
        name: 'Glow Spa & Beauty',
        rating: '4.9',
        description: 'Premium beauty treatments',
        image: 'https://readdy.ai/api/search-image?query=Elegant%20spa%20interior%20with%20treatment%20rooms%20and%20relaxation%20area%2C%20professional%20spa%20photography%20with%20soft%20lighting%20and%20green%20plants%20as%20accents&amp;width=300&amp;height=200&amp;seq=14&amp;orientation=landscape'
      },
      {
        name: 'Starlight Cinema',
        rating: '4.6',
        description: 'Premium movie experience',
        image: 'https://readdy.ai/api/search-image?query=Modern%20cinema%20interior%20with%20comfortable%20seating%20and%20concession%20stand%2C%20professional%20entertainment%20venue%20photography%20with%20soft%20lighting%20and%20green%20accent%20elements&amp;width=300&amp;height=200&amp;seq=15&amp;orientation=landscape'
      }
    // Add more vendors as needed
  ];

  return vendors.map(vendor => `
    <div class="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden">
      <div class="h-40 overflow-hidden">
        <img src="${vendor.image}" alt="${vendor.name}" class="w-full h-full object-cover object-top">
      </div>
      <div class="p-4">
        <div class="flex justify-between items-center mb-2">
          <h3 class="font-bold text-lg">${vendor.name}</h3>
          <div class="flex items-center">
            <i class="fas fa-star text-yellow-400 mr-1"></i>
            <span class="font-medium">${vendor.rating}</span>
          </div>
        </div>
        <p class="text-gray-600 mb-3">${vendor.description}</p>
        <button class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 !rounded-button whitespace-nowrap cursor-pointer transition duration-300">View Profile</button>
      </div>
    </div>
  `).join('');
};

// Render the header, main content, and footer
document.body.prepend(createHeader());
document.querySelector('#app').innerHTML = createMainContent();
document.body.appendChild(createFooter());