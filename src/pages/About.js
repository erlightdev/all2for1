import '../style.css';
import { createHeader } from '../components/header';
import { createFooter } from '../components/footer';

document.body.prepend(createHeader());

document.querySelector('#about').innerHTML = `
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Hero Section -->
    <section class="text-center mb-16">
      <div class="mb-8">
        <span class="inline-block px-3 py-1 text-sm font-semibold text-green-600 bg-green-50 rounded-full mb-4">About Us</span>
        <h1 class="text-5xl font-bold text-gray-900 mb-4">Making Generosity Go Viral</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">Bogoblast connects savvy shoppers with authentic BOGO deals, creating value for everyone.</p>
      </div>
      <div class="relative rounded-2xl overflow-hidden shadow-xl aspect-video max-w-5xl mx-auto">
        <img src="https://placehold.co/1200x630?text=Bogoblast+Team+Photo" alt="Team Photo" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-green-500/20 to-purple-500/20"></div>
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="mb-20">
      <div class="bg-gradient-to-r from-green-50 to-purple-50 rounded-2xl p-8 md:p-12">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            At Bogoblast, we're revolutionizing the way people shop and businesses grow. Our platform creates a win-win ecosystem where shoppers get incredible Buy-One-Get-One-Free deals while vendors gain exposure and loyal customers. We're making generosity contagious in the marketplace.
          </p>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="mb-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">How Bogoblast Works</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">A simple three-step process that benefits everyone</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl font-bold mb-4 mx-auto">1</div>
          <h3 class="text-xl font-semibold text-center mb-3">Vendors List Exclusive Deals</h3>
          <p class="text-gray-600 text-center">Businesses easily create and manage their BOGO offers through our intuitive platform.</p>
        </div>
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl font-bold mb-4 mx-auto">2</div>
          <h3 class="text-xl font-semibold text-center mb-3">Shoppers Discover & Purchase</h3>
          <p class="text-gray-600 text-center">Customers browse verified deals, purchase directly, and enjoy double the value.</p>
        </div>
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl font-bold mb-4 mx-auto">3</div>
          <h3 class="text-xl font-semibold text-center mb-3">Mutual Growth</h3>
          <p class="text-gray-600 text-center">Vendors gain exposure and loyal customers while shoppers save significantly.</p>
        </div>
      </div>
    </section>

    <!-- Value Proposition -->
    <section class="mb-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Bogoblast Stands Out</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">The benefits that make our platform unique</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
          <div class="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 text-3xl mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Real Savings</h3>
          <p class="text-gray-600">Authentic 50% savings on every purchase - no hidden fees or gimmicks.</p>
        </div>
        <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
          <div class="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 text-3xl mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Vetted Vendors</h3>
          <p class="text-gray-600">All businesses are verified to ensure quality and reliability.</p>
        </div>
        <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
          <div class="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 text-3xl mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Secure Platform</h3>
          <p class="text-gray-600">Safe transactions with protection for both buyers and sellers.</p>
        </div>
      </div>
    </section>

    <!-- Team/Founders -->
    <section class="mb-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Meet The Team</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">The passionate people behind Bogoblast</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div class="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-green-50">
            <img src="https://placehold.co/200x200?text=Alex+Morgan" alt="Alex Morgan" class="w-full h-full object-cover">
          </div>
          <h3 class="text-xl font-semibold">Alex Morgan</h3>
          <p class="text-green-600 mb-3">CEO & Founder</p>
          <p class="text-gray-600">Former retail executive with a passion for creating win-win commerce solutions.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div class="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-green-50">
            <img src="https://placehold.co/200x200?text=Jamie+Chen" alt="Jamie Chen" class="w-full h-full object-cover">
          </div>
          <h3 class="text-xl font-semibold">Jamie Chen</h3>
          <p class="text-green-600 mb-3">CTO</p>
          <p class="text-gray-600">Tech innovator focused on building seamless digital experiences.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div class="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-green-50">
            <img src="https://placehold.co/200x200?text=Taylor+Wright" alt="Taylor Wright" class="w-full h-full object-cover">
          </div>
          <h3 class="text-xl font-semibold">Taylor Wright</h3>
          <p class="text-green-600 mb-3">Head of Growth</p>
          <p class="text-gray-600">Marketing expert dedicated to connecting businesses with their ideal customers.</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-green-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
      <h2 class="text-3xl font-bold mb-4">Ready to Experience Bogoblast?</h2>
      <p class="text-xl mb-6 max-w-2xl mx-auto">Join thousands of happy shoppers and vendors growing together.</p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <button class="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition">Find Deals</button>
        <button class="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">List Your Business</button>
      </div>
    </section>
  </div>
`;

document.body.appendChild(createFooter());