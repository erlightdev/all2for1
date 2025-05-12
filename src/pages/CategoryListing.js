import "../style.css";
import { createHeader } from "../components/header";
import { createFooter } from "../components/footer";

document.body.prepend(createHeader());

// Product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
    price: 199.99,
    image: "https://placehold.co/400x300?text=Wireless+Headphones ",
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Fitness tracker with heart rate monitor and sleep analysis",
    price: 149.99,
    image: "https://placehold.co/400x300?text=Smart+Watch ",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Waterproof portable speaker with 360° sound and 20-hour playtime",
    price: 89.99,
    image: "https://placehold.co/400x300?text=Bluetooth+Speaker ",
  },
  {
    id: 4,
    name: "Wireless Charger",
    description: "Fast charging pad compatible with all Qi-enabled devices",
    price: 39.99,
    image: "https://placehold.co/400x300?text=Wireless+Charger ",
  },
  {
    id: 5,
    name: "Smart Home Hub",
    description: "Voice-controlled home assistant with integrated smart home controls",
    price: 129.99,
    image: "https://placehold.co/400x300?text=Smart+Home+Hub ",
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    description: "True wireless earbuds with touch controls and charging case",
    price: 79.99,
    image: "https://placehold.co/400x300?text=Wireless+Earbuds ",
  },
  {
    id: 7,
    name: "Ultra HD Monitor",
    description: "32-inch 4K monitor with HDR support and adjustable stand",
    price: 349.99,
    image: "https://placehold.co/400x300?text=Ultra+HD+Monitor ",
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with customizable keys",
    price: 129.99,
    image: "https://placehold.co/400x300?text=Mechanical+Keyboard ",
  },
];

const categorylisting = document.getElementById("categorylisting");

let filters = {
  priceMin: 0,
  priceMax: 1000,
  location: "",
  sort: "popularity",
};

// Utilities
const formatPrice = (price) => `$${price.toFixed(2)}`;

// Render Filters UI
function renderFilters() {
  return `
    <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <div class="flex items-center gap-2 mb-2">
            <input id="min-price" type="number" value="${filters.priceMin}" class="border border-gray-200 px-3 py-1 w-20 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-300" />
            <span class="text-gray-500">to</span>
            <input id="max-price" type="number" value="${filters.priceMax}" class="border border-gray-200 px-3 py-1 w-20 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-300" />
          </div>
          <input id="price-slider" type="range" min="0" max="1000" value="${filters.priceMax}" class="w-full accent-green-600" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input id="location-input" type="text" placeholder="Enter zip or city" class="border border-gray-200 px-3 py-2 w-full rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-300" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
          <select id="sort-by" class="border border-gray-200 px-3 py-2 w-full rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-300">
            <option value="popularity">Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  `;
}

// Render Products Grid
function renderProducts(filteredList) {
  return `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      ${filteredList.map(p => `
        <div class="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
          <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover" />
          <div class="p-5 flex-grow">
            <h3 class="text-lg font-semibold mb-2">${p.name}</h3>
            <p class="text-sm text-gray-600 mb-4">${p.description}</p>
            <div class="flex justify-between items-center mt-auto">
              <span class="text-green-600 font-bold text-lg">${formatPrice(p.price)}</span>
              <button class="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded transition">View Deal</button>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

// Apply Filters and Sort
function applyFilters() {
  let result = [...products];

  result = result.filter(p => p.price >= filters.priceMin && p.price <= filters.priceMax);

  if (filters.sort === "price-low") {
    result.sort((a, b) => a.price - b.price);
  } else if (filters.sort === "price-high") {
    result.sort((a, b) => b.price - a.price);
  }

  return result;
}

// Main render function
function renderPage() {
  const filtered = applyFilters();
  categorylisting.innerHTML = `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header class="mb-6 flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Electronics</h1>
        <button onclick="window.history.back()" class="text-green-600 text-sm hover:underline flex items-center gap-1">
          ← Back
        </button>
      </header>

      ${renderFilters()}

      <div class="text-sm text-gray-500 mb-6">${filtered.length} results found</div>

      ${renderProducts(filtered)}
    </section>
  `;
  addFilterEvents();
}

// Event Handlers for filters
function addFilterEvents() {
  document.getElementById("min-price").addEventListener("input", (e) => {
    filters.priceMin = parseFloat(e.target.value);
    renderPage();
  });

  document.getElementById("max-price").addEventListener("input", (e) => {
    filters.priceMax = parseFloat(e.target.value);
    document.getElementById("price-slider").value = filters.priceMax;
    renderPage();
  });

  document.getElementById("price-slider").addEventListener("input", (e) => {
    filters.priceMax = parseFloat(e.target.value);
    document.getElementById("max-price").value = filters.priceMax;
    renderPage();
  });

  document.getElementById("location-input").addEventListener("input", (e) => {
    filters.location = e.target.value;
    renderPage();
  });

  document.getElementById("sort-by").addEventListener("change", (e) => {
    filters.sort = e.target.value;
    renderPage();
  });
}

// Initialize page
renderPage();
document.body.appendChild(createFooter());