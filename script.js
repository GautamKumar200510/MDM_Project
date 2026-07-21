/**
 * Sweet Delights Bakery - E-Commerce Engine
 * Vanilla JavaScript implementation
 */

// Product Catalog Data
const PRODUCTS_DATA = [
  {
    id: "prod-1",
    name: "Classic Chocolate Fudge Cake",
    category: "cake",
    categoryLabel: "Cakes",
    rating: 4.9,
    ratingCount: 124,
    price: 34.99,
    discountPrice: 28.99,
    stockStatus: "in-stock",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500",
    description: "Rich, dense chocolate layers smothered in an exquisite house-made dark chocolate fudge frosting. A chocolate lover's absolute dream.",
    newest: true,
    dateAdded: "2026-07-10"
  },
  {
    id: "prod-2",
    name: "Royal Black Forest Cake",
    category: "cake",
    categoryLabel: "Cakes",
    rating: 4.8,
    ratingCount: 96,
    price: 39.99,
    discountPrice: 32.49,
    stockStatus: "in-stock",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=500",
    description: "Layers of chocolate sponge drizzled with cherry liqueur, whipped vanilla cream, and dark sweet cherries, topped with premium chocolate shavings.",
    newest: false,
    dateAdded: "2026-05-15"
  },
  {
    id: "prod-3",
    name: "Crimson Red Velvet Cake",
    category: "cake",
    categoryLabel: "Cakes",
    rating: 4.7,
    ratingCount: 110,
    price: 36.99,
    discountPrice: 29.99,
    stockStatus: "low-stock",
    image: "https://images.unsplash.com/photo-1586985289688-ca9cf4993ec0?q=80&w=500",
    description: "Elegant, cocoa-infused red velvet cake layered with our signature smooth cream cheese frosting and sweet white chocolate crumbles.",
    newest: true,
    dateAdded: "2026-07-18"
  },
  {
    id: "prod-4",
    name: "Fresh Strawberry Layer Cake",
    category: "cake",
    categoryLabel: "Cakes",
    rating: 4.6,
    ratingCount: 78,
    price: 32.99,
    discountPrice: 26.99,
    stockStatus: "in-stock",
    image: "https://images.unsplash.com/photo-1464349110296-4d54976ad7b6?q=80&w=500",
    description: "Light and airy vanilla sponge cake filled with freshly harvested strawberries, strawberry glaze, and vanilla chantilly cream.",
    newest: false,
    dateAdded: "2026-06-01"
  },
  {
    id: "prod-5",
    name: "Artisan Blueberry Cheesecake",
    category: "pastries",
    categoryLabel: "Pastries",
    rating: 4.9,
    ratingCount: 154,
    price: 42.99,
    discountPrice: 35.99,
    stockStatus: "in-stock",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=500",
    description: "Velvety smooth baked New York cheesecake over a buttery graham cracker crust, topped generously with a luscious wild blueberry compote.",
    newest: true,
    dateAdded: "2026-07-20"
  },
  {
    id: "prod-6",
    name: "Glazed Belgian Chocolate Donut",
    category: "donuts",
    categoryLabel: "Donuts",
    rating: 4.5,
    ratingCount: 142,
    price: 4.99,
    discountPrice: 3.49,
    stockStatus: "in-stock",
    image: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?q=80&w=500",
    description: "Fluffy, yeast-raised brioche donut dipped in a rich glaze made from premium Belgian milk chocolate and topped with delicate chocolate flakes.",
    newest: false,
    dateAdded: "2026-04-10"
  },
  {
    id: "prod-7",
    name: "Golden Butter Croissant",
    category: "pastries",
    categoryLabel: "Pastries",
    rating: 4.8,
    ratingCount: 180,
    price: 5.99,
    discountPrice: 4.49,
    stockStatus: "in-stock",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=500",
    description: "Flaky, multi-layered French pastry laminated with pure Normandy butter, baked to a beautiful deep golden brown.",
    newest: false,
    dateAdded: "2026-03-25"
  },
  {
    id: "prod-8",
    name: "Gourmet Garlic Herb Bread",
    category: "bread",
    categoryLabel: "Bread",
    rating: 4.6,
    ratingCount: 64,
    price: 8.99,
    discountPrice: 6.99,
    stockStatus: "in-stock",
    image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=500",
    description: "Artisanal crusty sourdough loaf stuffed with roasted garlic cloves, fresh rosemary, thyme, and rich cream butter.",
    newest: true,
    dateAdded: "2026-07-05"
  },
  {
    id: "prod-9",
    name: "Double Chocolate Chunk Cookie",
    category: "cookies",
    categoryLabel: "Cookies",
    rating: 4.9,
    ratingCount: 210,
    price: 3.99,
    discountPrice: 2.99,
    stockStatus: "in-stock",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=500",
    description: "Soft-baked cookie loaded with chunks of premium semi-sweet dark chocolate and milk chocolate, sprinkled with Maldon sea salt.",
    newest: false,
    dateAdded: "2026-02-12"
  },
  {
    id: "prod-10",
    name: "Healthy Oatmeal Raisin Cookie",
    category: "cookies",
    categoryLabel: "Cookies",
    rating: 4.4,
    ratingCount: 52,
    price: 3.49,
    discountPrice: 2.49,
    stockStatus: "low-stock",
    image: "https://images.unsplash.com/photo-1558961309-dbdf71791a5a?q=80&w=500",
    description: "Classic wholesome oats cookie packed with sweet, plump raisins, a hint of cinnamon spice, and organic brown sugar.",
    newest: false,
    dateAdded: "2026-03-01"
  },
  {
    id: "prod-11",
    name: "Signature Vanilla Cupcake",
    category: "cupcakes",
    categoryLabel: "Cupcakes",
    rating: 4.7,
    ratingCount: 88,
    price: 4.49,
    discountPrice: 3.49,
    stockStatus: "in-stock",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=500",
    description: "Fluffy moist Madagascar vanilla bean sponge cupcake, piled high with velvety cream frosting and pastel rainbow sprinkles.",
    newest: true,
    dateAdded: "2026-07-15"
  },
  {
    id: "prod-12",
    name: "Assorted French Macarons",
    category: "pastries",
    categoryLabel: "Pastries",
    rating: 4.9,
    ratingCount: 195,
    price: 18.99,
    discountPrice: 15.99,
    stockStatus: "in-stock",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=500",
    description: "An elegant box of 6 handmade Parisian macarons including Raspberry, Pistachio, Salted Caramel, Lemon, Lavender, and Vanilla.",
    newest: false,
    dateAdded: "2026-06-20"
  }
];

// Active Application State (Load from Local Storage if available)
let cart = JSON.parse(localStorage.getItem("bakery_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("bakery_wishlist")) || [];
let activeCategory = "all";
let activeSearchQuery = "";
let activeSortOrder = "default";

// Constant Settings
const GST_RATE = 0.18; // 18% GST
const DELIVERY_CHARGES = 5.00; // Flat Delivery Fee

// Document Elements
document.addEventListener("DOMContentLoaded", () => {
  // Preloader Toggle
  const preloader = document.getElementById("preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";
    });
    // Fallback: in case window load doesn't trigger quickly
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";
    }, 1500);
  }

  // Application Initialization
  initTheme();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  initOfferCountdown();
  setupEventListeners();
  initScrollAnimations();
});

// Theme Management (Dark / Light Mode)
function initTheme() {
  const savedTheme = localStorage.getItem("bakery_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeBtn = document.querySelector(".theme-toggle-btn");
  if (themeBtn) {
    const icon = themeBtn.querySelector("i");
    if (savedTheme === "dark") {
      icon.className = "fa-solid fa-sun";
    } else {
      icon.className = "fa-solid fa-moon";
    }
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("bakery_theme", newTheme);
  
  const themeBtn = document.querySelector(".theme-toggle-btn");
  if (themeBtn) {
    const icon = themeBtn.querySelector("i");
    if (newTheme === "dark") {
      icon.className = "fa-solid fa-sun";
      showToast("Dark Mode activated! Cozy baking vibes.", "success");
    } else {
      icon.className = "fa-solid fa-moon";
      showToast("Light Mode activated! Fresh morning vibes.", "success");
    }
  }
}

// Render Products with Filtering & Sorting applied
function renderProducts() {
  const productsContainer = document.getElementById("products-container");
  if (!productsContainer) return;

  // Filter logic
  let filteredProducts = PRODUCTS_DATA.filter(prod => {
    const matchesCategory = activeCategory === "all" || prod.category === activeCategory;
    const matchesSearch = prod.name.toLowerCase().includes(activeSearchQuery.toLowerCase()) || 
                          prod.description.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
                          prod.categoryLabel.toLowerCase().includes(activeSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting logic
  if (activeSortOrder === "price-low-high") {
    filteredProducts.sort((a, b) => a.discountPrice - b.discountPrice);
  } else if (activeSortOrder === "price-high-low") {
    filteredProducts.sort((a, b) => b.discountPrice - a.discountPrice);
  } else if (activeSortOrder === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (activeSortOrder === "newest") {
    filteredProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
  }

  // Clear and Render
  productsContainer.innerHTML = "";

  if (filteredProducts.length === 0) {
    productsContainer.innerHTML = `
      <div class="col-12 text-center py-5 animate-fade-up active">
        <i class="fa-solid fa-cookie-bite text-muted mb-3" style="font-size: 3rem; opacity: 0.5;"></i>
        <h4 class="text-muted font-display">No Treats Found</h4>
        <p class="text-muted">Try adjusting your search query or category filters.</p>
      </div>
    `;
    return;
  }

  filteredProducts.forEach(product => {
    const isWishlisted = wishlist.includes(product.id);
    const starHTML = getStarsHTML(product.rating);
    const badgeHTML = product.stockStatus === "low-stock" 
      ? `<span class="badge-stock low-stock">Low Stock</span>`
      : `<span class="badge-stock in-stock">In Stock</span>`;

    const discountBadgeHTML = product.price > product.discountPrice
      ? `<span class="badge-discount">${Math.round((1 - product.discountPrice / product.price) * 100)}% OFF</span>`
      : ``;

    const productCard = document.createElement("div");
    productCard.className = "col-xl-3 col-lg-4 col-md-6 mb-4 animate-fade-up active";
    productCard.setAttribute("id", `card-${product.id}`);

    productCard.innerHTML = `
      <div class="product-card">
        <div class="product-img-wrapper">
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" referrerPolicy="no-referrer">
          <div class="badge-container">
            ${badgeHTML}
            ${discountBadgeHTML}
          </div>
          <div class="product-actions-overlay">
            <button class="action-btn quick-view-btn" data-product-id="${product.id}" title="Quick View" aria-label="Quick View">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="action-btn wishlist-toggle-btn ${isWishlisted ? 'active-wish' : ''}" data-product-id="${product.id}" title="Add to Wishlist" aria-label="Toggle Wishlist">
              <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
          </div>
        </div>
        <div class="product-body">
          <span class="product-category">${product.categoryLabel}</span>
          <h4 class="product-name">${product.name}</h4>
          <div class="product-rating">
            <div class="stars">${starHTML}</div>
            <span class="count">(${product.ratingCount})</span>
          </div>
          <div class="product-price-row">
            <span class="price-now">$${product.discountPrice.toFixed(2)}</span>
            ${product.price > product.discountPrice ? `<span class="price-was">$${product.price.toFixed(2)}</span>` : ''}
          </div>
          <div class="product-footer-row">
            <div class="quantity-selector">
              <button class="qty-btn qty-decrease" data-product-id="${product.id}" aria-label="Decrease Quantity">
                <i class="fa-solid fa-minus"></i>
              </button>
              <input type="number" class="qty-input" value="1" min="1" max="10" data-product-id="${product.id}" readonly>
              <button class="qty-btn qty-increase" data-product-id="${product.id}" aria-label="Increase Quantity">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <button class="add-cart-btn main-add-btn" data-product-id="${product.id}">
              <i class="fa-solid fa-cart-shopping"></i> Add
            </button>
          </div>
        </div>
      </div>
    `;

    productsContainer.appendChild(productCard);
  });

  // Re-attach listeners inside rendered products
  attachDynamicProductListeners();
}

// Generate stars icon HTML for ratings
function getStarsHTML(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars += `<i class="fa-solid fa-star"></i>`;
    } else if (i === fullStars + 1 && hasHalf) {
      stars += `<i class="fa-solid fa-star-half-stroke"></i>`;
    } else {
      stars += `<i class="fa-regular fa-star"></i>`;
    }
  }
  return stars;
}

// Event Listeners for statically defined layout items
function setupEventListeners() {
  // Theme Toggle Button
  const themeBtn = document.querySelector(".theme-toggle-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
  }

  // Search input typing handler
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearchQuery = e.target.value;
      renderProducts();
    });
  }

  // Category filter button handler
  const categoryButtons = document.querySelectorAll(".filter-btn");
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });

  // Sort dropdown handler
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      activeSortOrder = e.target.value;
      renderProducts();
    });
  }

  // Cart Sidebar toggling
  const cartToggleBtn = document.getElementById("cart-toggle-btn");
  const cartSidebar = document.getElementById("cart-sidebar");
  const cartCloseBtn = document.getElementById("cart-close-btn");
  const overlay = document.getElementById("sidebar-overlay");

  if (cartToggleBtn && cartSidebar && cartCloseBtn && overlay) {
    const openCart = () => {
      cartSidebar.classList.add("open");
      overlay.classList.add("show");
    };
    const closeCart = () => {
      cartSidebar.classList.remove("open");
      overlay.classList.remove("show");
    };

    cartToggleBtn.addEventListener("click", openCart);
    cartCloseBtn.addEventListener("click", closeCart);
    overlay.addEventListener("click", () => {
      closeCart();
      closeWishlist();
    });

    // Make available globally for programmatic opening
    window.openCartSidebar = openCart;
  }

  // Wishlist Sidebar toggling
  const wishlistToggleBtnNavbar = document.getElementById("wishlist-toggle-btn-nav");
  const wishlistSidebar = document.getElementById("wishlist-sidebar");
  const wishlistCloseBtn = document.getElementById("wishlist-close-btn");

  if (wishlistToggleBtnNavbar && wishlistSidebar && wishlistCloseBtn && overlay) {
    const openWishlist = () => {
      wishlistSidebar.classList.add("open");
      overlay.classList.add("show");
    };
    const closeWishlist = () => {
      wishlistSidebar.classList.remove("open");
      overlay.classList.remove("show");
    };

    wishlistToggleBtnNavbar.addEventListener("click", openWishlist);
    wishlistCloseBtn.addEventListener("click", closeWishlist);
    window.closeWishlist = closeWishlist;
    window.openWishlistSidebar = openWishlist;
  }

  // Checkout Button
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        showToast("Your cart is empty! Add some sweet delights first.", "error");
        return;
      }
      showToast("🎉 Order placed successfully! Thank you for choosing sweet happiness.", "success");
      cart = [];
      saveCart();
      updateCartUI();
      renderProducts();
      
      const cartSidebar = document.getElementById("cart-sidebar");
      const overlay = document.getElementById("sidebar-overlay");
      if (cartSidebar && overlay) {
        cartSidebar.classList.remove("open");
        overlay.classList.remove("show");
      }
    });
  }

  // Sticky navbar effects and active links highlighting on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar-custom");
    const scrollTopBtn = document.getElementById("scroll-top-btn");

    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    if (scrollTopBtn) {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    }
  });

  // Scroll to Top action
  const scrollTopBtn = document.getElementById("scroll-top-btn");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Contact Form Submission Mock
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name").value;
      showToast(`Thank you, ${name}! Your message has been sent successfully. We will get back to you shortly.`, "success");
      contactForm.reset();
    });
  }

  // Newsletter Form Submission Mock
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector("input[type='email']").value;
      showToast(`Sweets incoming! ${email} subscribed successfully. Check your inbox for sweet deals.`, "success");
      newsletterForm.reset();
    });
  }
}

// Product items interaction event attachments (runs after every render)
function attachDynamicProductListeners() {
  // Quantity Selector increments / decrements
  const qtyDecreaseBtns = document.querySelectorAll(".qty-decrease");
  const qtyIncreaseBtns = document.querySelectorAll(".qty-increase");

  qtyDecreaseBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const prodId = btn.getAttribute("data-product-id");
      const input = document.querySelector(`.qty-input[data-product-id="${prodId}"]`);
      if (input) {
        let val = parseInt(input.value);
        if (val > 1) {
          input.value = val - 1;
        }
      }
    });
  });

  qtyIncreaseBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const prodId = btn.getAttribute("data-product-id");
      const input = document.querySelector(`.qty-input[data-product-id="${prodId}"]`);
      if (input) {
        let val = parseInt(input.value);
        if (val < 10) {
          input.value = val + 1;
        }
      }
    });
  });

  // Add To Cart Button click handler
  const addCartBtns = document.querySelectorAll(".main-add-btn");
  addCartBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const prodId = btn.getAttribute("data-product-id");
      const input = document.querySelector(`.qty-input[data-product-id="${prodId}"]`);
      const quantity = input ? parseInt(input.value) : 1;
      
      addToCart(prodId, quantity);
      
      // Reset input back to 1
      if (input) input.value = 1;
    });
  });

  // Wishlist heart toggle click handler
  const wishlistToggleBtns = document.querySelectorAll(".wishlist-toggle-btn");
  wishlistToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const prodId = btn.getAttribute("data-product-id");
      toggleWishlist(prodId, btn);
    });
  });

  // Quick View Button click handler
  const quickViewBtns = document.querySelectorAll(".quick-view-btn");
  quickViewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const prodId = btn.getAttribute("data-product-id");
      openQuickView(prodId);
    });
  });
}

// Add Item to Shopping Cart
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existingItemIndex = cart.findIndex(item => item.id === productId);
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.discountPrice,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added ${quantity}x ${product.name} to your cart! 🍰`, "success");
}

// Remove Item from Shopping Cart
function removeFromCart(productId) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  showToast(`Removed ${item.name} from your cart.`, "success");
}

// Update Cart Item Quantity in Sidebar directly
function updateCartItemQuantity(productId, newQty) {
  const itemIndex = cart.findIndex(i => i.id === productId);
  if (itemIndex > -1) {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    cart[itemIndex].quantity = newQty;
    saveCart();
    updateCartUI();
  }
}

// Save Cart State to Local Storage
function saveCart() {
  localStorage.setItem("bakery_cart", JSON.stringify(cart));
}

// Redraw entire Sidebar Cart UI & Navigation counters
function updateCartUI() {
  const cartList = document.getElementById("cart-list");
  const cartCounterNav = document.getElementById("cart-counter");
  const cartSubtotalEl = document.getElementById("cart-subtotal");
  const cartGstEl = document.getElementById("cart-gst");
  const cartDeliveryEl = document.getElementById("cart-delivery");
  const cartGrandTotalEl = document.getElementById("cart-grand-total");

  if (!cartList) return;

  // Update navbar counter badge
  const totalItemsCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  if (cartCounterNav) {
    cartCounterNav.innerText = totalItemsCount;
    cartCounterNav.style.display = totalItemsCount > 0 ? "block" : "none";
  }

  // Clear sidebar content
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div class="empty-cart-view">
        <i class="fa-solid fa-basket-shopping"></i>
        <h5 class="font-display">Your Basket is Empty</h5>
        <p class="small text-muted mb-0">Fill it with gourmet cakes, cookies, and delicious breads!</p>
      </div>
    `;
    
    if (cartSubtotalEl) cartSubtotalEl.innerText = "$0.00";
    if (cartGstEl) cartGstEl.innerText = "$0.00";
    if (cartDeliveryEl) cartDeliveryEl.innerText = "$0.00";
    if (cartGrandTotalEl) cartGrandTotalEl.innerText = "$0.00";
    return;
  }

  let subtotal = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const cartItemEl = document.createElement("div");
    cartItemEl.className = "cart-item";
    cartItemEl.innerHTML = `
      <div class="cart-item-img-wrapper">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy" referrerPolicy="no-referrer">
      </div>
      <div class="cart-item-info">
        <h6 class="cart-item-name">${item.name}</h6>
        <div class="cart-item-price-row">
          <span class="cart-item-price">$${item.price.toFixed(2)}</span>
          <div class="cart-item-qty">
            <button class="cart-item-qty-btn cart-qty-decrease" data-product-id="${item.id}" aria-label="Decrease Cart Quantity">
              <i class="fa-solid fa-minus"></i>
            </button>
            <input type="number" class="cart-item-qty-input" value="${item.quantity}" min="1" max="10" data-product-id="${item.id}" readonly>
            <button class="cart-item-qty-btn cart-qty-increase" data-product-id="${item.id}" aria-label="Increase Cart Quantity">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <button class="cart-item-remove-btn" data-product-id="${item.id}" title="Remove Item" aria-label="Remove Item">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;

    cartList.appendChild(cartItemEl);
  });

  // Calculate totals
  const gstAmount = subtotal * GST_RATE;
  const deliveryCharges = subtotal > 0 ? DELIVERY_CHARGES : 0;
  const grandTotal = subtotal + gstAmount + deliveryCharges;

  // Set Calculations
  if (cartSubtotalEl) cartSubtotalEl.innerText = `$${subtotal.toFixed(2)}`;
  if (cartGstEl) cartGstEl.innerText = `$${gstAmount.toFixed(2)}`;
  if (cartDeliveryEl) cartDeliveryEl.innerText = `$${deliveryCharges.toFixed(2)}`;
  if (cartGrandTotalEl) cartGrandTotalEl.innerText = `$${grandTotal.toFixed(2)}`;

  // Attach dynamic cart actions
  attachDynamicCartListeners();
}

// Event bindings for buttons dynamically rendered inside the cart sidebar
function attachDynamicCartListeners() {
  const decreaseBtns = document.querySelectorAll(".cart-qty-decrease");
  const increaseBtns = document.querySelectorAll(".cart-qty-increase");
  const removeBtns = document.querySelectorAll(".cart-item-remove-btn");

  decreaseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const prodId = btn.getAttribute("data-product-id");
      const currentItem = cart.find(i => i.id === prodId);
      if (currentItem) {
        updateCartItemQuantity(prodId, currentItem.quantity - 1);
      }
    });
  });

  increaseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const prodId = btn.getAttribute("data-product-id");
      const currentItem = cart.find(i => i.id === prodId);
      if (currentItem) {
        updateCartItemQuantity(prodId, currentItem.quantity + 1);
      }
    });
  });

  removeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const prodId = btn.getAttribute("data-product-id");
      removeFromCart(prodId);
    });
  });
}

// Toggle Wishlist Addition / Removal
function toggleWishlist(productId, btnElement = null) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const idx = wishlist.indexOf(productId);
  let added = false;

  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast(`Removed ${product.name} from your Wishlist.`, "wishlist-toast");
  } else {
    wishlist.push(productId);
    added = true;
    showToast(`Added ${product.name} to your Wishlist! ❤️`, "wishlist-toast");
    
    // Add pop-up heart animation
    if (btnElement) {
      btnElement.classList.add("heart-pop");
      setTimeout(() => btnElement.classList.remove("heart-pop"), 500);
    }
  }

  localStorage.setItem("bakery_wishlist", JSON.stringify(wishlist));
  updateWishlistUI();

  // If button was clicked, toggle style immediately
  if (btnElement) {
    const icon = btnElement.querySelector("i");
    if (added) {
      btnElement.classList.add("active-wish");
      if (icon) icon.className = "fa-solid fa-heart";
    } else {
      btnElement.classList.remove("active-wish");
      if (icon) icon.className = "fa-regular fa-heart";
    }
  } else {
    // Redraw active cards to reflect wishlist toggled from sidebar
    renderProducts();
  }
}

// Redraw entire Wishlist UI Drawer & Navigation counters
function updateWishlistUI() {
  const wishlistList = document.getElementById("wishlist-list");
  const wishlistCounterNav = document.getElementById("wishlist-counter");

  if (!wishlistList) return;

  const count = wishlist.length;
  if (wishlistCounterNav) {
    wishlistCounterNav.innerText = count;
    wishlistCounterNav.style.display = count > 0 ? "block" : "none";
  }

  wishlistList.innerHTML = "";

  if (wishlist.length === 0) {
    wishlistList.innerHTML = `
      <div class="empty-cart-view">
        <i class="fa-regular fa-heart"></i>
        <h5 class="font-display">Wishlist is Empty</h5>
        <p class="small text-muted mb-0">Tap the heart on any treat to save it for your next sweet cravings!</p>
      </div>
    `;
    return;
  }

  wishlist.forEach(prodId => {
    const product = PRODUCTS_DATA.find(p => p.id === prodId);
    if (!product) return;

    const wishItemEl = document.createElement("div");
    wishItemEl.className = "wishlist-item";
    wishItemEl.innerHTML = `
      <div class="cart-item-img-wrapper">
        <img src="${product.image}" alt="${product.name}" class="cart-item-img" loading="lazy" referrerPolicy="no-referrer">
      </div>
      <div class="wishlist-item-info">
        <h6 class="cart-item-name" style="margin-bottom:2px;">${product.name}</h6>
        <span class="cart-item-price">$${product.discountPrice.toFixed(2)}</span>
      </div>
      <div class="d-flex align-items-center gap-2">
        <button class="wishlist-item-btn add-from-wishlist" data-product-id="${product.id}" title="Add to Cart" aria-label="Add to Cart">
          <i class="fa-solid fa-cart-plus"></i> Add
        </button>
        <button class="cart-item-remove-btn remove-from-wishlist" data-product-id="${product.id}" title="Remove Wishlist" aria-label="Remove Wishlist">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;

    wishlistList.appendChild(wishItemEl);
  });

  // Attach dynamic wishlist sidebar button click events
  attachDynamicWishlistListeners();
}

// Event bindings for wishlist items within side panel
function attachDynamicWishlistListeners() {
  const addCartBtns = document.querySelectorAll(".add-from-wishlist");
  const removeBtns = document.querySelectorAll(".remove-from-wishlist");

  addCartBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const prodId = btn.getAttribute("data-product-id");
      addToCart(prodId, 1);
      toggleWishlist(prodId); // Optionally remove from wishlist on checkout, or keep it. Let's remove to keep clean!
    });
  });

  removeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const prodId = btn.getAttribute("data-product-id");
      toggleWishlist(prodId);
    });
  });
}

// Display Toast Notifications dynamically
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast-custom ${type}`;
  
  let iconClass = "fa-solid fa-check-circle";
  if (type === "error") {
    iconClass = "fa-solid fa-exclamation-circle";
  } else if (type === "wishlist-toast") {
    iconClass = "fa-solid fa-heart";
  }

  toast.innerHTML = `
    <i class="${iconClass}"></i>
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  // Automatically fade and remove toast after 3.5 seconds
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3500);
}

// Load dynamic data into Quick View Bootstrap Modal
function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modalImg = document.getElementById("qv-img");
  const modalName = document.getElementById("qv-name");
  const modalCategory = document.getElementById("qv-category");
  const modalRatingStars = document.getElementById("qv-stars");
  const modalRatingCount = document.getElementById("qv-rating-count");
  const modalPrice = document.getElementById("qv-price");
  const modalDesc = document.getElementById("qv-desc");
  const modalAddBtn = document.getElementById("qv-add-to-cart-btn");

  if (modalImg) modalImg.src = product.image;
  if (modalName) modalName.innerText = product.name;
  if (modalCategory) modalCategory.innerText = product.categoryLabel;
  if (modalRatingStars) modalRatingStars.innerHTML = getStarsHTML(product.rating);
  if (modalRatingCount) modalRatingCount.innerText = `(${product.ratingCount} Customer Reviews)`;
  if (modalPrice) modalPrice.innerText = `$${product.discountPrice.toFixed(2)}`;
  if (modalDesc) modalDesc.innerText = product.description;

  if (modalAddBtn) {
    // Clone button to remove previous event listeners
    const newAddBtn = modalAddBtn.cloneNode(true);
    modalAddBtn.parentNode.replaceChild(newAddBtn, modalAddBtn);
    newAddBtn.addEventListener("click", () => {
      addToCart(product.id, 1);
      
      // Programmatically close bootstrap modal
      const qvModalEl = document.getElementById("quickViewModal");
      const modalInstance = bootstrap.Modal.getInstance(qvModalEl);
      if (modalInstance) {
        modalInstance.hide();
      }
    });
  }

  // Trigger Bootstrap Modal
  const qvModalEl = document.getElementById("quickViewModal");
  if (qvModalEl) {
    const modal = new bootstrap.Modal(qvModalEl);
    modal.show();
  }
}

// Special Offer Countdown Timer Logic
function initOfferCountdown() {
  const daysEl = document.getElementById("timer-days");
  const hoursEl = document.getElementById("timer-hours");
  const minsEl = document.getElementById("timer-mins");
  const secsEl = document.getElementById("timer-secs");

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  // Set target countdown date to 3 days from current date/time dynamically
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  targetDate.setHours(23, 59, 59, 0);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      clearInterval(timerInterval);
      daysEl.innerText = "00";
      hoursEl.innerText = "00";
      minsEl.innerText = "00";
      secsEl.innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = days.toString().padStart(2, "0");
    hoursEl.innerText = hours.toString().padStart(2, "0");
    minsEl.innerText = minutes.toString().padStart(2, "0");
    secsEl.innerText = seconds.toString().padStart(2, "0");
  }

  updateCountdown();
  const timerInterval = setInterval(updateCountdown, 1000);
}

// Scroll entrance animation using Intersection Observer
function initScrollAnimations() {
  const animElements = document.querySelectorAll(".animate-fade-up, .animate-zoom");

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Optionally unobserve after animating
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    animElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    animElements.forEach(el => el.classList.add("active"));
  }

  // Active navigation link update based on scroll positions
  const sections = document.querySelectorAll("section[id]");
  if (sections.length > 0 && 'IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const navLink = document.querySelector(`.nav-link-custom[href="#${id}"]`);
          if (navLink) {
            document.querySelectorAll(".nav-link-custom").forEach(link => link.classList.remove("active"));
            navLink.classList.add("active");
          }
        }
      });
    }, {
      root: null,
      threshold: 0.4,
      rootMargin: "-10% 0px -60% 0px"
    });

    sections.forEach(sec => navObserver.observe(sec));
  }
}
