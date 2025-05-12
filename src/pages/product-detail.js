import '../style.css';
import { createHeader } from '../components/header';
import { createFooter } from '../components/footer';

document.body.prepend(createHeader());

document.querySelector('#product-detail').innerHTML = `
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Main Product Section -->
    <div class="lg:grid lg:grid-cols-2 lg:gap-12">
      <!-- Deal Image -->
      <div class="mb-8 lg:mb-0">
        <div class="rounded-xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9 bg-gray-100">
          <img 
            src="https://placehold.co/800x450?text=Product+Image" 
            alt="Deal Image" 
            class="w-full h-full object-cover"
            id="deal-image"
          >
        </div>
      </div>

      <!-- Deal Information -->
      <div>
        <!-- Vendor Info -->
        <div class="mb-4">
          <a href="#" class="text-green-600 hover:text-green-800 font-medium" id="vendor-link">
            Vendor Name
          </a>
        </div>

        <!-- Title & Price -->
        <h1 class="text-3xl font-bold text-gray-900 mb-2" id="deal-title">Deal Title</h1>
        <div class="flex items-center mb-4">
          <span class="text-2xl font-bold text-gray-900 mr-3" id="deal-price">$29.99</span>
          <span class="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">BOGO!</span>
        </div>

        <!-- Short Description -->
        <p class="text-gray-700 mb-6" id="deal-short-description">
          Short description of the deal (max 200 characters).
        </p>

        <!-- Meta Info -->
        <div class="flex flex-wrap gap-4 mb-6">
          <div class="flex items-center text-gray-600">
            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
            <a href="#" class="hover:text-green-600" id="deal-category">Category</a>
          </div>
          <div class="flex items-center text-gray-600" id="deal-location">
            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            Location
          </div>
        </div>

        <!-- Action Section -->
        <div class="border-t border-b border-gray-200 py-6 mb-6">
          <div class="mb-4">
            <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
            <select id="quantity" name="quantity" class="block w-20 rounded-md border-gray-300 py-2 pl-3 pr-8 text-base focus:border-green-500 focus:outline-none focus:ring-green-500">
              ${[1, 2, 3, 4, 5].map(num => `<option value="${num}">${num}</option>`).join('')}
            </select>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-3 mb-4">
            <button class="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition">
              Add to Cart
            </button>
            <button class="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-md transition">
              Save for Later
            </button>
          </div>

          <div class="flex justify-center gap-4 pt-4 border-t border-gray-200">
            <button class="text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </button>
            <button class="text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </button>
            <button class="text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Deal Details Section -->
    <div class="mt-12">
      <div class="prose max-w-none">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Deal Details</h2>
        <div id="deal-description">
          <p>Full description with all the details about this amazing BOGO deal. Can include HTML formatting as needed.</p>
          <ul class="list-disc pl-5 mt-4">
            <li>Redemption instructions</li>
            <li>Special terms and conditions</li>
            <li>Any other relevant details</li>
          </ul>
        </div>

        <div class="mt-6 p-4 bg-yellow-50 rounded-lg">
          <div class="flex items-start">
            <svg class="h-5 w-5 text-yellow-400 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"></path>
            </svg>
            <div>
              <p class="font-medium text-yellow-800">Expires on: <span id="expiration-date">December 31, 2023</span></p>
              <p class="text-yellow-700 mt-1">Terms & Conditions: <span id="deal-terms">While supplies last. Limit one per customer. Not valid with other offers.</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Similar Deals Section -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
      <div class="relative">
        <div class="overflow-x-hidden pb-4 scrollbar-hide">
          <div class="flex space-x-6">
            ${[1, 2, 3, 4, 5].map(i => `
              <div class="flex-shrink-0 w-64">
                <div class="bg-white rounded-lg shadow-sm border border-gray-200 -hidden hover:shadow-md transition">
                  <div class="aspect-w-16 aspect-h-9 bg-gray-100">
                    <img src="https://placehold.co/400x225?text=Related+Deal+${i}" alt="Related Deal" class="w-full h-full object-cover">
                  </div>
                  <div class="p-4">
                    <h3 class="font-medium text-gray-900 mb-1">Related Deal ${i}</h3>
                    <p class="text-sm text-gray-600 mb-2 line-clamp-2">Short description of this related deal that might interest you.</p>
                    <div class="flex justify-between items-center">
                      <span class="font-bold text-gray-900">$${(19.99 + i).toFixed(2)}</span>
                      <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">BOGO</span>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>
`;

document.body.appendChild(createFooter());

// Here you would typically add JavaScript to:
// 1. Fetch deal data based on the deal-id from URL
// 2. Populate all the elements with the fetched data
// 3. Handle the "Add to Cart" and other interactive functionality