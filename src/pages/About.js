import '../style.css'; // Make sure Tailwind CSS is imported and configured
import { createHeader } from '../components/header';
import { createFooter } from '../components/footer';

// Prepend Header
if (document.body && typeof createHeader === 'function') {
    document.body.prepend(createHeader());
} else {
    console.warn('createHeader function not available or body not ready.');
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof createHeader === 'function') document.body.prepend(createHeader());
    });
}

const aboutPageContainer = document.querySelector('#about');

if (aboutPageContainer) {
    aboutPageContainer.innerHTML = `
    <div class="bg-white text-gray-800">
      <!-- Breadcrumbs -->
      <nav aria-label="Breadcrumb" class="bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol role="list" class="flex items-center space-x-1 text-sm text-gray-500">
            <li>
              <a href="/" class="hover:text-gray-700">Home</a>
            </li>
            <li>
              <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </li>
            <li>
              <a href="/about.html" class="font-medium text-gray-700">About us</a>
            </li>
          </ol>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="relative text-center py-8 sm:py-6 lg:py-8 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p class="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Welcome to BogoBlast</p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Best Store <br class="hidden sm:inline"/>Available to Everyone!
          </h1>
          <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Over 15 years of experience, we have meticulously curated collections that transcend fleeting trends, embodying a timeless elegance that resonates with our discerning clientele.
          </p>
        </div>
      </section>
      
      <!-- Hero Image with Overlay -->
<section class="relative h-[250px] sm:h-[250px] md:h-[400px] lg:h-[calc(100vh-400px)] max-h-[400px] w-full overflow-hidden">
  <img src="https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg" alt="Fashion models" class="w-full h-full object-cover">
  <div class="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-end pb-12 sm:pb-16 md:pb-20">
    <p class="text-white text-xs sm:text-sm uppercase tracking-widest mb-1 sm:mb-2">Clothing London</p>
    <h2 class="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight" style="font-family: 'Playfair Display', serif;">BogoBlast</h2>
    <p class="text-white text-xs sm:text-sm uppercase tracking-widest mt-1 sm:mt-2">High Fashion Products</p>
  </div>
</section>

      <!-- Stats Section -->
      <section class="py-10 sm:py-10 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center">
            <div>
              <h3 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">53 k</h3>
              <p class="text-lg font-semibold text-gray-700 mb-2">Products for Sale</p>
              <p class="text-sm text-gray-500">That's why we strive to offer a diverse range of products that cater to all styles.</p>
            </div>
            <div>
              <h3 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">8.5 k</h3>
              <p class="text-lg font-semibold text-gray-700 mb-2">Happy Customer</p>
              <p class="text-sm text-gray-500">We pride ourselves on creating great products and experiences with our valued customers.</p>
            </div>
            <div>
              <h3 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">13 k</h3>
              <p class="text-lg font-semibold text-gray-700 mb-2">Partner Brand</p>
              <p class="text-sm text-gray-500">Partner with brands that share our values, striving to protect our environment.</p>
            </div>
          </div>
        </div>
      </section>

      <hr class="max-w-6xl mx-auto border-gray-200 my-8 sm:my-12">

      <!-- Our Peculiar Things Section -->
      <section class="py-10 sm:py-10 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p class="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Why Choose Us</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Peculiar Things</h2>
          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12 sm:mb-16">
            Our fashion products are characterized by innovative and on-trend designs. We pride ourselves in pushing the boundaries of conventional fashion, delivering new, bold and captivating styles.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img src="https://placehold.co/400x500/E0E0E0/333333?text=Ethical+Fashion" alt="Cultural Standards" class="w-full h-64 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Cultural Standards</h3>
                <p class="text-sm text-gray-600">We are committed to setting high ethical standards in production and ensuring mindful manufacturing through audits, training and education.</p>
              </div>
            </div>
            <div class="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img src="https://placehold.co/400x500/D0D0D0/333333?text=Mountain+View" alt="Designed to Last" class="w-full h-64 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Designed to Last</h3>
                <p class="text-sm text-gray-600">From traditional tailoring to the most informal pieces. Our BogoBlast collections feature the latest trends with the maximum comfort.</p>
              </div>
            </div>
            <div class="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img src="https://placehold.co/400x500/C0C0C0/333333?text=Expressive+Style" alt="Freedom for Everyone" class="w-full h-64 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Freedom for Everyone</h3>
                <p class="text-sm text-gray-600">The designs have been created adopting the current trends, while leaving room for personal expression among young people.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonial Section -->
      <section class="py-16 sm:py-24 bg-gray-800 text-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="flex justify-center mb-4">
            ${Array(5).fill(0).map(() => `<svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`).join('')}
          </div>
          <p class="text-xl sm:text-2xl italic text-gray-300 mb-6 leading-relaxed">
            "BogoBlast will become an example of the responsible business model by doing business with kindness, profit and bringing practical and long-term values to customers, employees, partners, the community for the environment and for shareholders."
          </p>
          <p class="font-semibold text-gray-200">Carie—Gosée Hera</p>
        </div>
      </section>

      <!-- Our Factories - The Best Product -->
      <section class="py-10 sm:py-10 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="relative">
              <img src="https://placehold.co/600x450/E8F5E9/66BB6A?text=Sustainable+Factory" alt="Factory interior" class="rounded-lg shadow-xl w-full">
              <p class="text-xs text-gray-500 mt-2 text-right italic">Photos at partner factories*</p>
            </div>
            <div>
              <p class="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Our Factories</p>
              <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">The Best Product</h2>
              <p class="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                We spend a lot of time finding the best factories around the world—the same factories that make your favorite designer brands. We visit them regularly and build strong personal relationships with the owners. Each factory is audited for compliance to assess factors such as fair wages.
              </p>
              <a href="#" class="inline-block bg-gray-900 text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Timeless Products Section -->
      <section class="py-16 sm:py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="lg:order-last relative">
              <img src="https://placehold.co/600x450/FCE4EC/EC407A?text=Timeless+Plaid+Jacket" alt="Timeless Product" class="rounded-lg shadow-xl w-full">
               <p class="text-xs text-gray-500 mt-2 text-right italic">Actual product taken at BogoBlast store*</p>
            </div>
            <div class="lg:order-first">
              <p class="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Our Products</p>
              <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Timeless Products</h2>
              <p class="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                At BogoBlast, we're not big on trends. We want you to wear our pieces for years, even decades, to come. That's why we source the finest materials and factories for our timeless products— like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.
              </p>
              <a href="#" class="inline-block bg-gray-900 text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Expanding Horizons Section -->
      <section class="py-10 sm:py-10 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p class="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">How We Work</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Expanding Horizons</h2>
          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12 sm:mb-16">
            At BogoBlast, our work culture is deeply rooted in collaboration, innovation and passion. We believe that a positive and inclusive work environment is the foundation for creativity and success.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img src="https://placehold.co/400x300/FFF3E0/FFB74D?text=Team+Collaboration" alt="The Core of Us" class="w-full h-56 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">The Core of Us</h3>
                <p class="text-sm text-gray-600">Adipisicing elit sed do eiusmod tempor labore et dolore dignissimos cumque. Excepteur sint occaecat cupidatat proident.</p>
              </div>
            </div>
            <div class="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img src="https://placehold.co/400x300/E1F5FE/4FC3F7?text=Delivery+Service" alt="Our Products" class="w-full h-56 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Our Products</h3>
                <p class="text-sm text-gray-600">Adipisicing elit sed do eiusmod tempor labore et dolore dignissimos cumque. Excepteur sint occaecat cupidatat proident.</p>
              </div>
            </div>
            <div class="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img src="https://placehold.co/400x300/F1F8E9/AED581?text=Office+Work" alt="Our Careers" class="w-full h-56 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Our Careers</h3>
                <p class="text-sm text-gray-600">Adipisicing elit sed do eiusmod tempor labore et dolore dignissimos cumque. Excepteur sint occaecat cupidatat proident.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Scroll-to-top button -->
      <button id="scrollToTopBtnAbout" title="Go to top"
              class="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 opacity-0 pointer-events-none z-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>
    `;

    // Scroll-to-top button logic
    const scrollToTopBtn = document.getElementById('scrollToTopBtnAbout');
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
    console.error("About page container (#about) not found in the HTML.");
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