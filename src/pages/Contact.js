import '../style.css';
import { createHeader } from '../components/header';
import { createFooter } from '../components/footer';

document.body.prepend(createHeader());

document.querySelector('#contact').innerHTML = `
  <div class="min-h-screen bg-white mx-auto max-w-7xl">
    <!-- Page Header -->
    <div class="bg-white py-12 px-4 border-b border-gray-100">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-3xl font-bold text-gray-900 mb-3">Help & Support</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          We've gathered the most frequently asked questions from our users. If you don't find what you're looking for, let us know.
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 gap-10 mr-4">
          <h2 class="text-2xl font-semibold text-gray-900 mb-8">Send us a message</h2>
          <form class="space-y-6">
            <div class="grid grid-cols-1 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  id="name" 
                  name="name" 
                  type="text" 
                  required 
                  class="block w-full px-4 py-3 border-0 border-b border-gray-200 focus:border-green-500 focus:ring-0 bg-gray-50 rounded-t-md"
                  placeholder="Your name"
                >
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  class="block w-full px-4 py-3 border-0 border-b border-gray-200 focus:border-green-500 focus:ring-0 bg-gray-50 rounded-t-md"
                  placeholder="your@email.com"
                >
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  class="block w-full px-4 py-3 border-0 border-b border-gray-200 focus:border-green-500 focus:ring-0 bg-gray-50 rounded-t-md"
                  placeholder="Your phone number"
                >
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  required 
                  class="block w-full px-4 py-3 border-0 border-b border-gray-200 focus:border-green-500 focus:ring-0 bg-gray-50 rounded-t-md"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
            </div>
            
            <button 
              type="submit" 
              class="w-full bg-green-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="bg-white rounded-xl p-8 border border-gray-100 shadow-sm mb-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-green-50 p-2 rounded-lg">
                  <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-sm font-medium text-gray-500">Email</h3>
                  <p class="text-base text-gray-900">support@bogoblast.com</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-green-50 p-2 rounded-lg">
                  <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-sm font-medium text-gray-500">Phone</h3>
                  <p class="text-base text-gray-900">(555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Business Hours</h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-green-50 p-2 rounded-lg">
                  <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-base text-gray-900">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                  <p class="text-base text-gray-900">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

document.body.appendChild(createFooter());