// footer.js
export const createFooter = () => {
    const footer = document.createElement('footer');
    footer.className = 'bg-gray-800 text-white pt-12 pb-6';
    
    footer.innerHTML = `
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <!-- Company Info -->
          <div>
            <h3 class="text-xl font-bold mb-4">All2For1.com</h3>
            <p class="text-gray-400 mb-4">
              The best place to find 2-for-1 deals near you. Save big while
              supporting local businesses.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                </svg>
              </a>
            </div>
          </div>
  
          <!-- Quick Links -->
          <div>
            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white cursor-pointer">Home</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white cursor-pointer">About Us</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white cursor-pointer">How It Works</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white cursor-pointer">Browse Deals</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white cursor-pointer">Become a Vendor</a>
              </li>
            </ul>
          </div>
  
          <!-- Support -->
          <div>
            <h3 class="text-xl font-bold mb-4">Support</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white cursor-pointer">FAQs</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white cursor-pointer">Contact Us</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white cursor-pointer">Terms of Service</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white cursor-pointer">Refund Policy</a>
              </li>
            </ul>
          </div>
  
          <!-- App Download -->
          <div>
            <h3 class="text-xl font-bold mb-4">Download Our App</h3>
            <p class="text-gray-400 mb-4">
              Get the All2For1 app for the best mobile experience.
            </p>
            <div class="flex flex-col space-y-2">
              <a href="#" class="bg-black text-white px-4 py-2 rounded-md flex items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-3">
                  <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.1-.04-.22-.06-.31-.06-.18 0-.36.1-.47.2-.37.25-.77.5-1.21.5-.43 0-.82-.25-1.21-.5-.11-.1-.28-.2-.46-.2-.08 0-.17.02-.24.05-.1.03-.2.04-.31.04-1.01 0-2.21-.66-2.97-1.57-.69-.8-1.18-1.95-1.18-3.08C5.444.21 8.413.01 11.96 0h.09c3.56.01 6.53.21 6.32 1.43zm4.31 16.9c-.33.61-.5 1.31-.5 2.07 0 1.65.8 3.2 2.04 4.15.81.59 1.83.85 2.85.85 1.78 0 3.57-1.17 4.03-3.45.12-.5.35-2.3.35-2.97 0-.68-.23-2.47-.35-2.99-.46-2.25-2.26-3.42-4.04-3.42-.28 0-.56.02-.85.07-.97.18-2.09.75-2.53 1.7zm-15.81-14c-.33.62-.5 1.33-.5 2.08 0 1.66.8 3.21 2.05 4.15.81.6 1.82.85 2.85.85 1.78 0 3.57-1.18 4.03-3.45.13-.51.35-2.31.35-2.98 0-.68-.22-2.48-.35-3-.46-2.26-2.26-3.43-4.04-3.43-.28 0-.56.02-.85.08-.96.18-2.08.74-2.53 1.7h-.01z" />
                </svg>
                <div>
                  <div class="text-xs">Download on the</div>
                  <div class="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" class="bg-black text-white px-4 py-2 rounded-md flex items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-3">
                  <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                </svg>
                <div>
                  <div class="text-xs">Get it on</div>
                  <div class="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p class="copyright-text">
            &copy; ${new Date().getFullYear()} All2For1.com. All rights reserved.
          </p>
        </div>
      </div>
    `;
  
    return footer;
  };
  
  // Initialize footer with dynamic date
  export const initFooter = () => {
    return createFooter();
  };