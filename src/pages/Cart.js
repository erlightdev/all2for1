import '../style.css';
// Assuming header and footer are not strictly needed for this specific cart.js snippet to function standalone for the demo
import { createHeader } from '../components/header';
import { createFooter } from '../components/footer';

document.body.prepend(createHeader()); // Assuming createHeader() exists

const cartContainer = document.querySelector('#cart');

// Sample cart data
let cartItems = [
  {
    id: 1,
    name: "Plain Cotton Undershirt - Wide Neck",
    details: "Color: White / Size: S",
    price: 35.00,
    quantity: 1,
    image: "https://placehold.co/80x96/f0f0f0/333?text=Item",
  }
];

const suggestedProducts = [
  {
    id: 101,
    name: "Hera Dome Hoop Earrings",
    price: 175.00,
    originalPrice: 195.00,
    image: "https://placehold.co/80x80/f0f0f0/333?text=Earrings1",
  },
  {
    id: 102,
    name: "Earrings in Gold with Diamonds",
    price: 135.00,
    image: "https://placehold.co/80x80/f0f0f0/333?text=Earrings2",
  },
  {
    id: 103,
    name: "Another Suggested Item",
    price: 99.00,
    originalPrice: 120.00,
    image: "https://placehold.co/80x80/f0f0f0/333?text=Item3",
  },
    {
    id: 104,
    name: "Yet Another Item",
    price: 45.00,
    image: "https://placehold.co/80x80/f0f0f0/333?text=Item4",
  },
];

const renderCart = () => {
  const isEmpty = cartItems.length === 0;
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const freeShippingThreshold = 265;
  const amountForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  cartContainer.innerHTML = `
    <div class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Breadcrumbs and Title -->
        <header class="mb-8">
          <nav aria-label="Breadcrumb" class="mb-4">
            <ol role="list" class="flex items-center space-x-1 text-sm">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700">Home</a>
              </li>
              <li>
                <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </li>
              <li>
                <a href="#" class="font-medium text-gray-700">Your Shopping Cart</a>
              </li>
            </ol>
          </nav>
          <h1 class="text-4xl font-bold text-gray-900">Shopping Cart</h1>
          <p class="mt-3 text-md text-gray-500">Review your selected items before purchase. Enjoy a seamless shopping experience!</p>
        </header>

        <!-- Countdown Timer -->
        ${isEmpty ? '' : `
          <div class="bg-rose-50 border border-rose-200 rounded-lg p-4 mb-8 flex items-center">
            <span class="text-2xl mr-3">🔥</span>
            <p class="text-sm text-rose-700">
              Products are limited, checkout within <span class="font-semibold">01m 16s</span>
            </p>
          </div>
        `}

        <!-- Main Content Area -->
        <div class="lg:flex lg:gap-8">
          <!-- Left Column: Cart Items and Recommendations -->
          <div class="lg:w-2/3">
            ${isEmpty ? `
              <!-- Empty State -->
              <div class="text-center py-20 border border-dashed border-gray-300 rounded-lg">
                <svg class="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h2 class="mt-4 text-2xl font-semibold text-gray-900">Your cart is empty</h2>
                <p class="mt-2 text-gray-600">Looks like you haven't added anything to your cart yet.</p>
                <a href="#" class="mt-6 inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition text-sm font-medium">
                  Continue Shopping
                </a>
              </div>
            ` : `
              <!-- Product List Header -->
              <div class="hidden md:flex justify-between items-center py-3 border-b border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div class="w-2/5 pl-0">Product</div>
                <div class="w-1/5 text-left">Price</div>
                <div class="w-1/5 text-center">Quantity</div>
                <div class="w-1/5 text-right pr-0">Total</div>
              </div>

              <!-- Product Items -->
              <div class="divide-y divide-gray-200">
                ${cartItems.map(item => `
                  <div class="flex flex-col md:flex-row md:items-center py-6">
                    <!-- Product Info -->
                    <div class="w-full md:w-2/5 flex items-center mb-4 md:mb-0">
                      <img src="${item.image}" alt="${item.name}" class="w-16 h-20 md:w-20 md:h-24 object-cover rounded-md border border-gray-200">
                      <div class="ml-4">
                        <h3 class="text-base font-medium text-gray-800">${item.name}</h3>
                        <p class="text-sm text-gray-500">${item.details}</p>
                        <button class="text-xs text-gray-500 hover:text-red-600 mt-1 underline remove-item" data-id="${item.id}">Remove</button>
                      </div>
                    </div>
                    <!-- Price -->
                    <div class="w-auto md:w-1/5 text-left text-base font-medium text-gray-800 mb-2 md:mb-0 md:pl-1">$${item.price.toFixed(2)}</div>
                    <!-- Quantity -->
                    <div class="w-auto md:w-1/5 mb-2 md:mb-0 md:flex md:justify-center">
                      <div class="flex items-center border border-gray-300 rounded-md w-max bg-gray-50">
                        <button class="px-3 py-1.5 text-gray-700 hover:bg-gray-200 rounded-l-md quantity-change" data-id="${item.id}" data-action="decrease" ${item.quantity === 1 ? 'disabled' : ''}>-</button>
                        <span class="px-4 py-1.5 text-sm text-gray-800">${item.quantity}</span>
                        <button class="px-3 py-1.5 text-gray-700 hover:bg-gray-200 rounded-r-md quantity-change" data-id="${item.id}" data-action="increase">+</button>
                      </div>
                    </div>
                    <!-- Total -->
                    <div class="w-auto md:w-1/5 text-left md:text-right text-base font-medium text-gray-800 md:pr-1">$${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                `).join('')}
              </div>

              <!-- Gift Wrap Option -->
              <div class="mt-6 py-4 border-t border-gray-200">
                <label class="flex items-center text-sm text-gray-700">
                  <input type="checkbox" class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-3">
                  Please wrap the product carefully. Fee is only <span class="font-semibold text-gray-900 ml-1">$10.00</span>. (You can choose or not)
                </label>
              </div>
            `}

            <!-- Informational Banners -->
            <div class="grid md:grid-cols-3 gap-4 my-8">
              <div class="bg-gray-50 p-4 rounded-lg flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 w-7 h-7 text-gray-500 mr-3 mt-0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.68-3.091a9.33 9.33 0 0 1-3.581.544c-3.208 0-5.94-1.873-7.185-4.569a9.348 9.348 0 0 1 0-5.192C4.189 5.166 7.044 3 10.5 3c.792 0 1.559.123 2.276.352l.71-.71a1 1 0 0 1 1.414 0l2.122 2.121a1 1 0 0 1 0 1.414l-.71.71A8.31 8.31 0 0 1 20.25 8.511Z" /></svg>
                <div>
                  <h4 class="font-semibold text-gray-800 text-sm">Have Questions?</h4>
                  <p class="text-xs text-gray-600">Our experts are here to help! Call us free.</p>
                </div>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg flex items-start">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 w-7 h-7 text-gray-500 mr-3 mt-0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.031 9-11.623v-2.998c0-1.447-.494-2.807-1.335-3.855A11.951 11.951 0 0 0 12 3c-2.392 0-4.642.806-6.402 2.181Z" /></svg>
                <div>
                  <h4 class="font-semibold text-gray-800 text-sm">Secure Shopping</h4>
                  <p class="text-xs text-gray-600">All transactions are protected by SSL technology.</p>
                </div>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 w-7 h-7 text-gray-500 mr-3 mt-0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25zM9 13.5V9A1.5 1.5 0 0110.5 7.5h3A1.5 1.5 0 0115 9v4.5m-4.5 0h3" /></svg> <!-- A lock icon -->
                <div>
                  <h4 class="font-semibold text-gray-800 text-sm">Privacy Protection</h4>
                  <p class="text-xs text-gray-600">Your privacy is always our top priority.</p>
                </div>
              </div>
            </div>

            <!-- "You may also like..." Section -->
            <div class="my-10">
              <h2 class="text-xl font-semibold text-gray-800 mb-5">You may also like...</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                ${suggestedProducts.slice(0, 2).map(product => `
                  <div class="bg-gray-50 p-4 rounded-lg flex">
                    <img src="${product.image}" alt="${product.name}" class="w-20 h-20 object-contain rounded-md mr-4 self-start">
                    <div class="flex-grow">
                      <h3 class="text-sm font-medium text-gray-800">${product.name}</h3>
                      <div class="mt-1">
                        <span class="text-md font-semibold text-gray-900">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="ml-2 text-xs text-gray-400 line-through">$${product.originalPrice.toFixed(2)}</span>` : ''}
                      </div>
                      <button class="mt-3 text-sm text-indigo-600 hover:text-indigo-800 font-medium">Add to Cart</button>
                    </div>
                  </div>
                `).join('')}
              </div>
              <!-- Slider dots -->
              <div class="flex justify-center mt-6 space-x-1.5">
                <button class="w-2 h-2 bg-gray-800 rounded-full focus:outline-none"></button>
                <button class="w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full focus:outline-none"></button>
                <button class="w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full focus:outline-none"></button>
                <button class="w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full focus:outline-none"></button>
              </div>
            </div>
          </div>

          <!-- Right Column: Order Summary Sidebar -->
          <div class="lg:w-1/3 mt-10 lg:mt-0">
            <div class="bg-white shadow-sm rounded-lg p-6 sticky top-8">
              <!-- Free Shipping Progress Bar -->
              ${!isEmpty ? `
              <div class="mb-6 p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-red-500 mr-2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                  <span class="text-sm text-gray-700">
                    ${amountForFreeShipping > 0 ? 
                      `Spend <span class="font-semibold">$${amountForFreeShipping.toFixed(2)}</span> more to enjoy <span class="text-red-600 font-semibold">Free shipping!</span>` : 
                      `<span class="text-red-600 font-semibold">You've got Free Shipping!</span>`}
                  </span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-1.5">
                  <div class="bg-red-500 h-1.5 rounded-full" style="width: ${shippingProgress}%;"></div>
                </div>
              </div>` : ''}

              <!-- Add Order Note -->
              <div class="mb-6">
                <label for="order-note" class="block text-sm font-medium text-gray-700 mb-1">Add Order Note</label>
                <textarea id="order-note" rows="3" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-sm" placeholder="How can we help you?"></textarea>
              </div>

              <!-- Estimate Shipping -->
              <div class="mb-6">
                <h3 class="text-sm font-medium text-gray-700 mb-2">Estimate Shipping</h3>
                <div>
                  <label for="country" class="block text-xs font-medium text-gray-600">Country/region</label>
                  <select id="country" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2.5 bg-white text-sm">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
                <div class="mt-3">
                  <label for="province" class="block text-xs font-medium text-gray-600">Province</label>
                  <select id="province" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2.5 bg-white text-sm">
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>Arizona</option>
                  </select>
                </div>
                <div class="mt-3">
                  <label for="postal-code" class="block text-xs font-medium text-gray-600">Postal/ZIP code</label>
                  <input type="text" id="postal-code" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2.5 bg-white text-sm" placeholder="Postal/ZIP code">
                </div>
                <button class="mt-4 w-full bg-green-800 text-white py-2.5 rounded-lg hover:bg-gray-700 transition font-semibold text-sm">
                  Estimate Shipping
                </button>
              </div>

              <!-- Order Summary -->
              <div class="pt-4 border-t border-gray-200">
                <div class="flex justify-between items-center">
                  <span class="text-lg font-semibold text-gray-800">Subtotal:</span>
                  <span class="text-lg font-semibold text-gray-800">$${subtotal.toFixed(2)} USD</span>
                </div>
                <p class="text-xs text-gray-500 mt-1.5">Taxes and shipping and discounts calculated at checkout</p>
              
                <div class="mt-6">
                  <label class="flex items-center text-sm text-gray-600">
                    <input id="terms-checkbox" type="checkbox" class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-2.5">
                    I agree with <a href="#" class="ml-1 text-indigo-600 hover:text-indigo-800 font-medium underline">Terms & Conditions</a>
                  </label>
                  <button class="mt-4 w-full bg-green-700 hover:bg-gray-800 text-white py-3 rounded-lg transition font-semibold text-base" ${isEmpty ? 'disabled' : ''}>
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Delivery Information Section -->
      <div class="bg-gray-50 mt-12">
        <div class="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-3 gap-8 text-sm">
                <div>
                    <h3 class="text-base font-semibold text-gray-800 mb-2">Delivery Information</h3>
                    <p class="text-gray-600">Free returns within 15 days, please make sure the items are in undamaged condition.</p>
                </div>
                <div>
                    <h3 class="text-base font-semibold text-gray-800 mb-2">Up to 30-Day Guarantee</h3>
                    <p class="text-gray-600">Bad luck with your tights? Simply contact us within 30 days of receiving your order and we will replace them for free!</p>
                </div>
                <div>
                    <h3 class="text-base font-semibold text-gray-800 mb-2">Payment Support</h3>
                    <div class="flex flex-wrap gap-2 mt-3">
                        <img src="https://placehold.co/48x30/E0E0E0/000000?text=AMEX&font=roboto" alt="Amex" class="h-6">
                        <img src="https://placehold.co/48x30/E0E0E0/000000?text=Klarna&font=roboto" alt="Klarna" class="h-6">
                        <img src="https://placehold.co/48x30/E0E0E0/000000?text=Cirrus&font=roboto" alt="Cirrus" class="h-6">
                        <img src="https://placehold.co/48x30/E0E0E0/000000?text=MC&font=roboto" alt="Mastercard" class="h-6">
                        <img src="https://placehold.co/48x30/E0E0E0/000000?text=Maestro&font=roboto" alt="Maestro" class="h-6">
                        <img src="https://placehold.co/48x30/E0E0E0/000000?text=VISA&font=roboto" alt="Visa" class="h-6">
                        <img src="https://placehold.co/48x30/E0E0E0/000000?text=PayPal&font=roboto" alt="PayPal" class="h-6">
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>

    <!-- Scroll-to-top button -->
    <button id="scrollToTopBtn" title="Go to top"
            class="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-opacity duration-300 opacity-0 pointer-events-none z-50">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" /> <!-- This is chevron-double-up -->
         <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15M5.25 9.75L12 3l6.75 6.75" /> <!-- This is arrow-up -->
      </svg>
    </button>
  `;

  // Add event listeners
  document.querySelectorAll('.quantity-change').forEach(button => {
    button.addEventListener('click', (e) => {
      const itemId = parseInt(e.currentTarget.dataset.id);
      const action = e.currentTarget.dataset.action;
      cartItems = cartItems.map(item => {
        if (item.id === itemId) {
          let newQuantity = item.quantity;
          if (action === 'increase') {
            newQuantity = Math.min(10, newQuantity + 1); // Max 10
          } else if (action === 'decrease') {
            newQuantity = Math.max(1, newQuantity - 1); // Min 1
          }
          return {...item, quantity: newQuantity};
        }
        return item;
      }).filter(item => item.quantity > 0); // Optional: remove if quantity becomes 0
      renderCart();
    });
  });

  document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', (e) => {
      const itemId = parseInt(e.currentTarget.dataset.id);
      cartItems = cartItems.filter(item => item.id !== itemId);
      renderCart();
    });
  });

  // Scroll-to-top button logic
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (scrollToTopBtn) {
      const scrollFunction = () => {
          if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
              scrollToTopBtn.style.opacity = "1";
              scrollToTopBtn.style.pointerEvents = "auto";
          } else {
              scrollToTopBtn.style.opacity = "0";
              scrollToTopBtn.style.pointerEvents = "none";
          }
      };
      window.onscroll = scrollFunction;
      scrollToTopBtn.addEventListener('click', () => {
          window.scrollTo({top: 0, behavior: 'smooth'});
      });
      // Initial check in case page is already scrolled
      scrollFunction();
  }
};

renderCart();
document.body.appendChild(createFooter()); // Assuming createFooter() exists