// signInPageModern.js
import '../style.css'; // Ensure Tailwind CSS is imported and configured

// For a full-page sign-in like this, a site header/footer is usually omitted.
import { createHeader } from '../components/header';
// import { createFooter } from '../components/footer';

const signInPageContainer = document.querySelector('#signin-page-modern'); // You'll need <div id="signin-page-modern"></div> in your HTML

if (signInPageContainer) {
  signInPageContainer.innerHTML = `
    <div class="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <!-- Left Column: Form -->
      <div class="w-full md:w-1/2 lg:w-[45%] xl:w-2/5 bg-white flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-24">
        <div class="w-full max-w-sm mx-auto">
          <!-- Logo -->
          <div class="mb-10 lg:mb-12 flex items-center">
            <svg class="h-8 w-auto mr-2.5 text-gray-800" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="2.5"/>
              <path d="M20 31.25V8.75" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M29.6942 25.9442L10.3058 14.0558" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M29.6942 14.0558L10.3058 25.9442" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-xl font-semibold text-gray-800">BogoBlast</span>
          </div>

          <!-- Welcome Text -->
          <div class="mb-8">
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-1.5 sm:mb-2">Welcome back, Olivia</h1>
            <p class="text-sm sm:text-base text-gray-500">Welcome back! Please enter your details.</p>
          </div>

          <!-- Google Sign-in Button -->
          <button class="w-full flex items-center justify-center py-2.5 sm:py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500 mb-6 transition-colors">
            <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56,12.25C22.56,11.47,22.49,10.72,22.36,10H12.27V14.44H18.05C17.79,15.71,17.09,16.81,16.07,17.51V20.29H19.94C21.72,18.62,22.56,15.75,22.56,12.25Z" fill="#4285F4"/>
                <path d="M12.27,24C15.3,24,17.83,23.03,19.94,21.38L16.07,18.6C15.05,19.31,13.79,19.73,12.27,19.73C9.38,19.73,6.9,17.95,5.97,15.32H2V18.1C3.96,21.94,7.83,24,12.27,24Z" fill="#34A853"/>
                <path d="M5.97,14.24C5.74,13.57,5.6,12.85,5.6,12.11C5.6,11.37,5.74,10.65,5.97,9.98V7.2H2C1.13,8.98,0.54,10.97,0.54,13.11C0.54,15.25,1.13,17.24,2,19.02L5.97,16.24V14.24Z" fill="#FBBC05"/>
                <path d="M12.27,4.27C13.92,4.27,15.39,4.84,16.49,5.85L20.02,2.33C17.83,0.53,15.3,0,12.27,0C7.83,0,3.96,2.06,2,5.9L5.97,8.72C6.9,6.05,9.38,4.27,12.27,4.27Z" fill="#EA4335"/>
            </svg>
            Log in with Google
          </button>

          <!-- OR Divider -->
          <div class="relative mb-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-200"></div>
            </div>
            <div class="relative flex justify-center text-xs">
              <span class="px-2 bg-white text-gray-400 uppercase">or</span>
            </div>
          </div>

          <!-- Email and Password Form -->
          <form id="signInFormModern" class="space-y-5">
            <div>
              <label for="emailModern" class="block text-xs font-medium text-gray-700 mb-1.5">Email</label>
              <input type="email" name="emailModern" id="emailModern" required
                     class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm placeholder-gray-400"
                     placeholder="you@example.com">
            </div>
            <div>
              <label for="passwordModern" class="block text-xs font-medium text-gray-700 mb-1.5">Password</label>
              <input type="password" name="passwordModern" id="passwordModern" required
                     class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm placeholder-gray-400"
                     placeholder="••••••••">
            </div>

            <div class="flex items-center justify-between text-xs sm:text-sm">
              <div class="flex items-center">
                <input id="rememberMeModern" name="rememberMeModern" type="checkbox"
                       class="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-600 border-gray-300 rounded focus:ring-green-500">
                <label for="rememberMeModern" class="ml-2 block text-gray-700 font-medium">Remember for 30 days</label>
              </div>
              <a href="#" class="font-medium text-green-600 hover:text-green-500 hover:underline">Forgot password</a>
            </div>

            <div class="pt-1">
              <button type="submit"
                      class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors">
                Log in
              </button>
            </div>
          </form>

          <!-- Sign Up Link -->
          <p class="mt-8 text-center text-sm text-gray-500">
            Don't have an account? 
            <a href="#" class="font-medium text-green-600 hover:text-green-500 hover:underline">Sign up for free</a>
          </p>
        </div>
      </div>

      <!-- Right Column: Image and Testimonial -->
      <div class="hidden md:flex md:w-1/2 lg:w-[55%] xl:w-3/5 bg-gray-800 relative items-end justify-center p-8 lg:p-12 xl:p-16 overflow-hidden">
        <!-- Background Image -->
        <img src="/pattern.svg" 
             alt="Promotional image of a model" 
             class="absolute inset-0 w-full h-full object-cover opacity-30">
        
        <!-- Distorted band visual effect (Placeholder - actual effect is complex) -->
        <div class="absolute top-1/3 left-0 w-full h-[100%] sm:h-[100%] bg-cover bg-center opacity-60"
             style="background-image: url(''); 
                    /* A real implementation would use a more sophisticated image or SVG mask for the specific distortion */
                    mix-blend-mode: overlay; /* Example blend mode */
                    filter: contrast(1.2) brightness(0.9); /* Example filter adjustments */
        "></div>


        <div class="relative z-10 text-white max-w-lg xl:max-w-xl">
          <p class="text-2xl lg:text-3xl xl:text-4xl font-medium leading-tight mb-6 sm:mb-8">
            "We move 10x faster than our peers and stay consistent. While they're bogged down with design debt, we're releasing new features."
          </p>
          <div class="mb-6 sm:mb-8">
            <p class="text-md lg:text-lg font-semibold">Sophie Hall</p>
            <p class="text-sm lg:text-base text-gray-300">Founder, Catalog</p>
            <p class="text-sm lg:text-base text-gray-300">Web Design Agency</p>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex space-x-1">
              ${Array(5).fill(0).map(() => `
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              `).join('')}
            </div>
            <div class="flex space-x-3">
              <button class="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50">
                <svg class="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <button class="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

  // Basic form submission handler (for demonstration)
  const signInForm = document.getElementById('signInFormModern');
  if (signInForm) {
    signInForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.getElementById('emailModern').value;
      const password = document.getElementById('passwordModern').value;
      console.log('Sign in attempt with:', { email, password });
      alert('Sign-in form submitted! Check console for data. (This is a demo)');
      // Add actual sign-in logic here (e.g., API call)
    });
  }

} else {
  console.error("Sign-in page container (#signin-page-modern) not found in HTML.");
}

// Render the header, main content, and footer
document.body.prepend(createHeader());
// document.body.appendChild(createFooter());