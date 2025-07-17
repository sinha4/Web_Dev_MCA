document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Element References ---
    const productContainer = document.getElementById('product-container');
    const searchBox = document.getElementById('search-box');
    const searchButton = document.getElementById('search-button');
    const sortDropdown = document.getElementById('sort-dropdown');
    const interestForm = document.getElementById('interest-form');
    const formError = document.getElementById('form-error');
    const welcomeMessage = document.getElementById('welcome-message');
    const geoLocationDisplay = document.getElementById('geo-location');
    const profileInfo = document.getElementById('profile-info');


    // --- State Management ---
    let allProducts = []; // To store all fetched products
    let displayedProducts = []; // To store currently displayed products for sorting



    // --- API Fetching ---
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=8');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            allProducts = await response.json();
            displayedProducts = [...allProducts]; // Initialize displayed products
            displayProducts(displayedProducts);
        } catch (error) {
            console.error("Failed to fetch products:", error);
            productContainer.innerHTML = `<p class="text-red-500 text-center col-span-full">Could not load products. Please try again later.</p>`;
        }
    };

    // --- Display Logic ---
    const displayProducts = (products) => {
        productContainer.innerHTML = ''; // Clear previous content
        if (products.length === 0) {
            productContainer.innerHTML = `<p class="text-gray-500 text-center col-span-full">No products found.</p>`;
            return;
        }
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="h-40 w-full object-contain mb-4">
                <h3 class="text-lg font-semibold text-gray-800 h-16 overflow-hidden">${product.title}</h3>
                <p class="text-xl font-bold text-blue-600 mt-2">$${product.price.toFixed(2)}</p>
            `;
            productContainer.appendChild(productDiv);
        });
    };

    // Search 
    const handleSearch = () => {
        const searchTerm = searchBox.value.toLowerCase();
        const filteredProducts = allProducts.filter(product => 
            product.title.toLowerCase().includes(searchTerm)
        );
        displayedProducts = [...filteredProducts]; // Update displayed products
        sortDropdown.value = 'default'; // Reset sort
        displayProducts(displayedProducts);
    };

    searchButton.addEventListener('click', handleSearch);
    searchBox.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    // Sort
    sortDropdown.addEventListener('change', () => {
        const sortBy = sortDropdown.value;
        let sortedProducts = [...displayedProducts]; // Sort only the currently displayed products

        if (sortBy === 'price-asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        
        displayProducts(sortedProducts);
    });

    

    // Form 
    interestForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const name = document.getElementById('user-name').value.trim();
        const email = document.getElementById('user-email').value.trim();
        const product = document.getElementById('product-interest').value.trim();

        if (!name || !email || !product) {
            formError.classList.remove('hidden');
            return;
        }

        formError.classList.add('hidden');

//localstorage
        localStorage.setItem('userName', name);
        localStorage.setItem('productInterest', product);

        alert(`Thank you, ${name}! We've received your interest in ${product}.`);
        interestForm.reset();
    });


    const showWelcomePopup = (name, product) => {
      const popup = document.createElement('div');
      popup.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
      popup.innerHTML = `
          <div class="bg-pink-50 rounded-lg p-8 max-w-md text-center relative">
              <button id="close-popup" class="absolute top-1 left-2 text-pink-600 hover:text-pink-800 text-2xl font-bold">&times;</button>
              <h2 class="text-2xl font-bold text-pink-600 mb-4">Welcome Back, ${name}!</h2>
              <p class="mb-4 text-pink-600">You were interested in: ${product}</p>
              <p class="mb-4 text-pink-600">Happy Browsing!</p>
          </div>
      `;
      document.body.appendChild(popup);

      document.getElementById('close-popup').addEventListener('click', () => popup.remove());
      // (Optional) Add logic to remember the user has seen the popup
    };

    // Modified checkLocalStorage to show popup
    const checkLocalStorage = () => {
      const storedName = localStorage.getItem('userName');
      const storedProduct = localStorage.getItem('productInterest');

      if (storedName && storedProduct) {
        showWelcomePopup(storedName, storedProduct);
      }
    };


    // Geolocation
    const getGeolocation = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    geoLocationDisplay.textContent = `Your Location: Lat ${latitude.toFixed(4)}, Lon ${longitude.toFixed(4)}`;
                },
                (error) => {
                    geoLocationDisplay.textContent = 'Could not get location. Please allow access.';
                    console.warn(`Geolocation error (${error.code}): ${error.message}`);
                }
            );
        } else {
            geoLocationDisplay.textContent = 'Geolocation is not supported by your browser.';
        }
    };

    // --- Initializations ---
    fetchProducts();
    checkLocalStorage();
    getGeolocation();
});

