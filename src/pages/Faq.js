import '../style.css'; // Ensure Tailwind CSS is imported and configured in your project
import { createHeader } from '../components/header';
import { createFooter } from '../components/footer';

// Prepend header as soon as the body is available
document.addEventListener('DOMContentLoaded', () => {
    if (document.body && typeof createHeader === 'function') {
        document.body.prepend(createHeader());
        renderFAQPage();
        document.body.appendChild(createFooter());
    } else {
        console.warn('createHeader function is not available or body not ready.');
    }
});

const faqData = [
  {
    category: "Shopping Information",
    items: [
      { question: "Pellentesque habitant morbi tristique senectus et netus?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { question: "How much is shipping and how long will it take?", answer: "Shipping costs vary based on your location and the items ordered." },
      { question: "How long will it take to get my package?", answer: "Package delivery times depend on the shipping method selected." },
      { question: "Branding is simply a more efficient way to sell things?", answer: "Effective branding helps build trust and recognition." }
    ]
  },
  {
    category: "Payment Information",
    items: [
      { question: "Pellentesque habitant morbi tristique senectus et netus?", answer: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis." },
      { question: "How much is shipping and how long will it take?", answer: "Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum." },
      { question: "How long will it take to get my package?", answer: "Aenean ultricies mi vitae est." },
      { question: "Branding is simply a more efficient way to sell things?", answer: "Pellentesque habitant morbi tristique senectus et netus." }
    ]
  },
  {
    category: "Order & Returns",
    items: [
      { question: "Pellentesque habitant morbi tristique senectus et netus?", answer: "Donec eu libero sit amet quam egestas semper." },
      { question: "How much is shipping and how long will it take?", answer: "Fusce euismod consequat ante." },
      { question: "How long will it take to get my package?", answer: "Aliquam congue fermentum nisl." },
      { question: "Branding is simply a more efficient way to sell things?", answer: "Nulla venenatis." }
    ]
  },
  {
    category: "Ordering from Umino",
    items: [
      { question: "Pellentesque habitant morbi tristique senectus et netus?", answer: "Praesent justo dolor, lobortis quis." },
      { question: "How much is shipping and how long will it take?", answer: "Sed ut perspiciatis unde omnis iste natus error." },
      { question: "How long will it take to get my package?", answer: "Nemo enim ipsam voluptatem quia voluptas." },
      { question: "Branding is simply a more efficient way to sell things?", answer: "Neque porro quisquam est." }
    ]
  }
];

const renderFAQPage = () => {
  const faqPageContainer = document.querySelector('#faq'); 

  if (!faqPageContainer) {
    console.error("FAQ page container (#faq) not found in the HTML.");
    return;
  }

  faqPageContainer.innerHTML = `
    <div class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <header class="mb-10 text-center lg:text-left">
          <nav aria-label="Breadcrumb" class="mb-3">
            <ol role="list" class="flex items-center justify-center lg:justify-start space-x-1 text-sm">
              <li>
                <a href="/" class="text-gray-500 hover:text-gray-700">Home</a>
              </li>
              <li>
                <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </li>
              <li>
                <a href="/faq.html" class="font-medium text-gray-700">FAQ</a>
              </li>
            </ol>
          </nav>
          <h1 class="text-4xl font-bold text-gray-900">Help Center</h1>
          <p class="mt-3 text-md text-gray-600">
            Please use the below form. You can also call customer service on +1 (973) 435-3638.
          </p>
        </header>

        <div class="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <aside class="lg:col-span-4 mb-10 lg:mb-0">
            <div class="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-sm sticky top-8">
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p class="text-sm text-gray-600 mb-3">
                If you have an issue or question that requires immediate assistance, you can click the button below to chat live with a Customer Service representative.
              </p>
              <div class="space-y-3">
                <a href="#" class="block w-full bg-white text-gray-800 text-center px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-50 transition font-semibold text-sm">
                  Contact Us
                </a>
                <a href="#" class="block w-full bg-green-800 text-white text-center px-6 py-3 rounded-full hover:bg-gray-700 transition font-semibold text-sm">
                  About us
                </a>
              </div>
            </div>
          </aside>

          <main class="lg:col-span-8">
            ${faqData.map(section => `
              <section class="mb-10">
                <h2 class="text-2xl font-semibold text-gray-900 mb-5">${section.category}</h2>
                <div class="space-y-1">
                  ${section.items.map((item) => `
                    <div class="faq-item border-b border-gray-200 last:border-b-0">
                      <button class="faq-question w-full flex justify-between items-center text-left py-4 focus:outline-none group">
                        <span class="text-base font-medium text-gray-800 group-hover:text-green-600">${item.question}</span>
                        <span class="faq-icon text-gray-500 ml-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 plus-icon group-hover:text-green-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 minus-icon hidden group-hover:text-green-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                          </svg>
                        </span>
                      </button>
                      <div class="faq-answer hidden pt-1 pb-4 pr-6 text-sm text-gray-600 leading-relaxed">
                        ${item.answer}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </section>
            `).join('')}
          </main>
        </div>
      </div>

      <!-- Scroll-to-top button -->
      <button id="scrollToTopBtnFaq" title="Go to top"
              class="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 opacity-0 pointer-events-none z-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>
  `;

  // Accordion functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');
    const answerPanel = item.querySelector('.faq-answer');
    const plusIcon = item.querySelector('.plus-icon');
    const minusIcon = item.querySelector('.minus-icon');

    questionButton.addEventListener('click', () => {
      answerPanel.classList.toggle('hidden');
      const isNowOpen = !answerPanel.classList.contains('hidden');

      plusIcon.classList.toggle('hidden', isNowOpen);
      minusIcon.classList.toggle('hidden', !isNowOpen);
    });
  });

  // Scroll-to-top button logic
  const scrollToTopBtn = document.getElementById('scrollToTopBtnFaq');
  let scrollListenerActive = false;

  const scrollFunction = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          scrollToTopBtn.style.opacity = "1";
          scrollToTopBtn.style.pointerEvents = "auto";
      } else {
          scrollToTopBtn.style.opacity = "0";
          scrollToTopBtn.style.pointerEvents = "none";
      }
  };
  
  if (scrollToTopBtn) {
      window.addEventListener('scroll', scrollFunction);
      scrollListenerActive = true;

      scrollToTopBtn.addEventListener('click', () => {
          window.scrollTo({top: 0, behavior: 'smooth'});
      });
      scrollFunction(); // Initial check
  }
};