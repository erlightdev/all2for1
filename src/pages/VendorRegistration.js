import '../style.css'; // Ensure Tailwind CSS is imported and configured
import { createHeader } from '../components/header';
import { createFooter } from '../components/footer';

// Prepend Header
if (document.body && typeof createHeader === 'function') {
    document.body.prepend(createHeader());
} else {
    console.warn('createHeader function not available or body not ready.');
    // Fallback if body wasn't ready or function missing
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof createHeader === 'function') document.body.prepend(createHeader());
    });
}

const vendorRegistrationContainer = document.querySelector('#vendor-registration'); // Assuming you'll have <div id="vendor-registration"></div> in your HTML

if (vendorRegistrationContainer) {
    vendorRegistrationContainer.innerHTML = `
    <div class="bg-gray-50 min-h-screen">
     <!-- Hero/Intro Section -->
<section class="relative text-white py-20 sm:py-28 lg:py-32 overflow-hidden">
  <!-- Background Image with Overlay -->
  <div class="absolute inset-0">
    <img 
      src="https://images.pexels.com/photos/2078266/pexels-photo-2078266.jpeg" 
      alt="Abstract background" 
      class="w-full h-full object-cover"
    >
    <div class="absolute inset-0 bg-opacity-50"></div>
  </div>

  <!-- Content -->
  <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
      Partner with Us & Grow Your Business
    </h1>
    <p class="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
      Join our curated marketplace and reach a vibrant community of shoppers. Fill out the form below to start your journey.
    </p>
  </div>
</section>

      <!-- Registration Form Section -->
      <section class="py-16 sm:py-20">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-white p-8 sm:p-10 lg:p-12 rounded-xl shadow-2xl">
            <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">Vendor Registration Form</h2>
            
            <form id="vendorRegForm" class="space-y-8">
              <!-- Company Information -->
              <div>
                <h3 class="text-lg font-medium text-gray-800 mb-4 border-b pb-2">Company Information</h3>
                <div class="space-y-6">
                  <div>
                    <label for="companyName" class="block text-sm font-medium text-gray-700 mb-1">Company Name <span class="text-red-500">*</span></label>
                    <input type="text" name="companyName" id="companyName" required
                           class="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm placeholder-gray-400"
                           placeholder="Your Awesome Company LLC">
                  </div>
                  <div>
                    <label for="businessType" class="block text-sm font-medium text-gray-700 mb-1">Business Type/Category <span class="text-red-500">*</span></label>
                    <input type="text" name="businessType" id="businessType" required
                           class="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm placeholder-gray-400"
                           placeholder="e.g., Apparel, Home Goods, Electronics">
                  </div>
                  <div>
                    <label for="companyWebsite" class="block text-sm font-medium text-gray-700 mb-1">Company Website (Optional)</label>
                    <input type="url" name="companyWebsite" id="companyWebsite"
                           class="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm placeholder-gray-400"
                           placeholder="https://www.yourcompany.com">
                  </div>
                </div>
              </div>

              <!-- Contact Person -->
              <div>
                <h3 class="text-lg font-medium text-gray-800 mb-4 border-b pb-2">Contact Person</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label for="contactFirstName" class="block text-sm font-medium text-gray-700 mb-1">First Name <span class="text-red-500">*</span></label>
                    <input type="text" name="contactFirstName" id="contactFirstName" required
                           class="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm placeholder-gray-400"
                           placeholder="Jane">
                  </div>
                  <div>
                    <label for="contactLastName" class="block text-sm font-medium text-gray-700 mb-1">Last Name <span class="text-red-500">*</span></label>
                    <input type="text" name="contactLastName" id="contactLastName" required
                           class="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm placeholder-gray-400"
                           placeholder="Doe">
                  </div>
                </div>
                <div class="mt-6">
                    <label for="contactEmail" class="block text-sm font-medium text-gray-700 mb-1">Email Address <span class="text-red-500">*</span></label>
                    <input type="email" name="contactEmail" id="contactEmail" required
                           class="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm placeholder-gray-400"
                           placeholder="jane.doe@example.com">
                </div>
                <div class="mt-6">
                    <label for="contactPhone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number <span class="text-red-500">*</span></label>
                    <input type="tel" name="contactPhone" id="contactPhone" required
                           class="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm placeholder-gray-400"
                           placeholder="(555) 123-4567">
                </div>
              </div>
              
              <!-- Login Credentials -->
              <div>
                <h3 class="text-lg font-medium text-gray-800 mb-4 border-b pb-2">Account Credentials</h3>
                <div class="space-y-6">
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password <span class="text-red-500">*</span></label>
                        <input type="password" name="password" id="password" required minlength="8"
                               class="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                               placeholder="Create a strong password">
                        <p class="mt-1 text-xs text-gray-500">Must be at least 8 characters long.</p>
                    </div>
                    <div>
                        <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirm Password <span class="text-red-500">*</span></label>
                        <input type="password" name="confirmPassword" id="confirmPassword" required
                               class="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                               placeholder="Re-enter your password">
                    </div>
                </div>
              </div>

              <!-- Business Address -->
              <div>
                <h3 class="text-lg font-medium text-gray-800 mb-4 border-b pb-2">Business Address</h3>
                <div class="space-y-6">
                  <div>
                    <label for="streetAddress" class="block text-sm font-medium text-gray-700 mb-1">Street Address <span class="text-red-500">*</span></label>
                    <input type="text" name="streetAddress" id="streetAddress" required
                           class="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                           placeholder="123 Main St">
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label for="city" class="block text-sm font-medium text-gray-700 mb-1">City <span class="text-red-500">*</span></label>
                      <input type="text" name="city" id="city" required
                             class="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                             placeholder="Anytown">
                    </div>
                    <div>
                      <label for="state" class="block text-sm font-medium text-gray-700 mb-1">State / Province <span class="text-red-500">*</span></label>
                      <input type="text" name="state" id="state" required
                             class="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                             placeholder="CA">
                    </div>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label for="zipCode" class="block text-sm font-medium text-gray-700 mb-1">ZIP / Postal Code <span class="text-red-500">*</span></label>
                      <input type="text" name="zipCode" id="zipCode" required
                             class="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                             placeholder="90210">
                    </div>
                    <div>
                      <label for="country" class="block text-sm font-medium text-gray-700 mb-1">Country <span class="text-red-500">*</span></label>
                      <select id="country" name="country" required
                              class="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm bg-white">
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="GB">United Kingdom</option>
                        <option value="AU">Australia</option>
                        {/* Add more countries as needed */}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Business Description -->
               <div>
                <h3 class="text-lg font-medium text-gray-800 mb-4 border-b pb-2">About Your Business</h3>
                 <div>
                    <label for="businessDescription" class="block text-sm font-medium text-gray-700 mb-1">Brief Description (Optional)</label>
                    <textarea id="businessDescription" name="businessDescription" rows="4"
                              class="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm placeholder-gray-400"
                              placeholder="Tell us a bit about your products, brand, and what makes you unique."></textarea>
                  </div>
               </div>

              <!-- Terms and Conditions -->
              <div class="pt-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <input id="terms" name="terms" type="checkbox" required
                           class="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-0.5">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="terms" class="font-medium text-gray-700">I agree to the</label>
                    <a href="/terms-and-conditions.html" target="_blank" class="ml-1 text-green-600 hover:text-green-500 underline">Vendor Terms and Conditions</a>
                    <span class="text-red-500">*</span>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="pt-6">
                <button type="submit"
                        class="w-full bg-green-600 text-white py-4 px-4 rounded-lg font-semibold text-base hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out shadow-md hover:shadow-lg">
                  Submit Registration
                </button>
              </div>
            </form>
            
            <p class="mt-8 text-sm text-gray-500 text-center">
              Already have an account? 
              <a href="/vendor-login.html" class="font-medium text-green-600 hover:text-green-500 underline">Log in here</a>.
            </p>
          </div>
        </div>
      </section>
      
      <!-- Scroll-to-top button -->
      <button id="scrollToTopBtnVendorReg" title="Go to top"
              class="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 opacity-0 pointer-events-none z-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>
    `;

    // Form submission listener (basic example)
    const vendorRegForm = document.getElementById('vendorRegForm');
    if (vendorRegForm) {
        vendorRegForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual submission for this example
            
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert("Passwords do not match. Please try again.");
                // You might want to display this message more elegantly within the UI
                document.getElementById('confirmPassword').focus();
                return;
            }
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            console.log('Vendor Registration Data:', data);
            alert('Registration submitted! Check the console for data. (This is a demo)');
            // In a real application, you would send this data to a server.
            // this.reset(); // Optionally reset the form
        });
    }

    // Scroll-to-top button logic
    const scrollToTopBtn = document.getElementById('scrollToTopBtnVendorReg');
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
        window.addEventListener('scroll', scrollFunction);
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
        scrollFunction(); // Initial check
    }

} else {
    console.error("Vendor registration container (#vendor-registration) not found in HTML.");
}

// Append Footer
if (document.body && typeof createFooter === 'function') {
    document.body.appendChild(createFooter());
} else {
    console.warn('createFooter function not available or body not ready for appending footer.');
    document.addEventListener('DOMContentLoaded', () => { // Fallback if body not ready
        if (typeof createFooter === 'function') document.body.appendChild(createFooter());
    });
}