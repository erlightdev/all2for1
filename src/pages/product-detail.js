import '../style.css';
import { createHeader } from '../components/header';
import { createFooter } from '../components/footer';

document.body.prepend(createHeader());

// Sample data
const product = {
  id: 1,
  vendor: "TechGear Inc.",
  title: "Premium Wireless Headphones",
  price: "$29.99",
  category: "Electronics",
  location: "Los Angeles, CA",
  expiration: "December 31, 2025",
  description: `
    <p>Experience premium sound quality with these noise-cancelling wireless headphones.</p>
    <ul class="list-disc pl-5 mt-4 space-y-1">
      <li>Up to 30-hour battery life</li>
      <li>Touch controls and voice assistant support</li>
      <li>Bluetooth 5.2 connectivity</li>
      <li>One-year warranty included</li>
    </ul>
  `,
  terms: "Offer valid until December 31, 2025. Limit one per customer. Not valid with other offers.",
};

// Inject HTML
document.querySelector('#product-detail').innerHTML = `
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

    <!-- Breadcrumb -->
    <nav class="text-sm text-gray-500 mb-6">
      <a href="/" class="hover:text-green-600">Home</a> 
      <span class="mx-2">></span>
      <a href="/deals" class="hover:text-green-600">Deals</a>
      <span class="mx-2">></span>
      <span class="text-gray-800">${product.title}</span>
    </nav>

    <!-- Product Layout -->
    <div class="lg:grid lg:grid-cols-2 lg:gap-16">
      <!-- Image Section -->
      <div class="mb-8 lg:mb-0 group">
        <div class="rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 transform group-hover:shadow-xl">
          <img 
            src="https://placehold.co/800x450?text=Product+Image " 
            alt="${product.title}" 
            class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          >
          <!-- BOGO Label -->
          <div class="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            BOGO!
          </div>
        </div>
      </div>

      <!-- Info Section -->
      <div class="space-y-6">
        <!-- Vendor Info -->
        <a href="#" class="inline-block text-green-600 hover:text-green-800 font-medium text-sm">${product.vendor}</a>

        <!-- Title -->
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">${product.title}</h1>

        <!-- Price + Badge -->
        <div class="flex items-center gap-4">
          <span class="text-3xl font-bold text-gray-900">${product.price}</span>
          <span class="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
            Save $29.99
          </span>
        </div>

        <!-- Short Description -->
        <p class="text-gray-700">
          Premium noise-cancelling wireless headphones with 30-hour battery life.
        </p>

        <!-- Meta Info -->
        <div class="flex flex-wrap gap-4 text-sm text-gray-600">
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-1.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <a href="#" class="hover:text-green-600">${product.category}</a>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-1.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            ${product.location}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="border-t border-b border-gray-200 py-6 space-y-4">
          <div>
            <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
            <select id="quantity" name="quantity" class="block w-20 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
              ${[1, 2, 3, 4, 5].map(num => `<option value="${num}">${num}</option>`).join('')}
            </select>
          </div>

          <div class="flex flex-col sm:flex-row gap-3">
            <button class="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-3 px-4 rounded-lg shadow-sm hover:shadow transition">
              Add to Cart
            </button>
            <button class="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg transition">
              Save for Later
            </button>
          </div>

          <!-- Social Icons -->
          <div class="flex justify-center sm:justify-start gap-4 pt-4 border-t border-gray-200">
            <button class="text-gray-500 hover:text-blue-600 transition">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </button>
            <button class="text-gray-500 hover:text-blue-500 transition">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
            </button>
            <button class="text-gray-500 hover:text-red-600 transition">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.414 0-8-3.586-8-8s3.586-8 8-8 8 3.586 8 8-3.586 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Deal Details -->
    <div class="mt-16 prose max-w-none">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Deal Details</h2>
      <div class="bg-white p-6 rounded-xl shadow-sm mb-6">
        ${product.description}
      </div>

      <!-- Expiration & Terms -->
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-lg shadow-sm">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-yellow-800">Expires on: <span>${product.expiration}</span></p>
            <p class="text-sm text-yellow-700 mt-1">${product.terms}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Similar Deals -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
      <div class="overflow-x-auto pb-4 scrollbar-hide flex space-x-6">
        ${[1, 2, 3, 4, 5].map(i => `
          <div class="flex-shrink-0 w-64">
            <div class="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-200 transition-all duration-300">
              <div class="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden rounded-t-xl">
                <img src="https://placehold.co/400x225?text=Related+Deal+ ${i}" alt="Related Deal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-105">
              </div>
              <div class="p-4">
                <h3 class="font-semibold text-gray-900 mb-1">Related Deal ${i}</h3>
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
`;

document.body.appendChild(createFooter());