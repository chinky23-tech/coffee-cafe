/*document.addEventListener('DOMContentLoaded', () => {
  // Store cart items in an array
  
  let cart = [];

  // Get all "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  // Add click event to each button
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = parseFloat(button.getAttribute('data-price'));

      // Add item to cart array
      cart.push({ name, price });

      // Optional: Log cart to console or update UI
      console.log(`Added ${name} - ₹${price}`);
      console.log('Current cart:', cart);

      // Optionally show cart count or items in a div (if present)
      const cartCount = document.getElementById('cart-count');
      if (cartCount) {
        cartCount.textContent = cart.length;
      }
    });
  });
})*/



/*
document.addEventListener('DOMContentLoaded', () => {
  // Get cart counter element
  const cartCounter = document.getElementById('cartCounter');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Initialize cart counter
  updateCartCounter();
  
  // Add click event to each button
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const name = button.getAttribute('data-name');
      const price = parseFloat(button.getAttribute('data-price'));
      
      // Add item to cart
      cart.push({ name, price });
      localStorage.setItem('cart', JSON.stringify(cart));
      
      // Update UI
      updateCartCounter();
      
      // Visual feedback
      const originalText = button.textContent;
      button.textContent = '✓ Added!';
      button.style.backgroundColor = '#4CAF50';
      
      setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
      }, 1500);
      
      console.log(`Added ${name} - ₹${price}`);
    });
  });
  
  function updateCartCounter() {
    if (cartCounter) {
      cartCounter.textContent = cart.length;
    }
  }
});*/
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuItems = document.querySelectorAll(".menu-item");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItemsList = document.querySelector(".cart-items");
  const totalPriceElement = document.querySelector(".total-price");

  let cart = [];

  // Filtering
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      menuItems.forEach(item => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Add to Order
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".menu-item");
      const name = item.querySelector("h3").innerText;
      const priceText = item.querySelector(".price").innerText;
      const price = parseFloat(priceText.replace(/[^\d.]/g, ''));

      cart.push({ name, price });
      updateCartUI();
    });
  });

      function updateCartUI() {
    // Clear cart list
    cartItemsList.innerHTML = "";

    let total = 0;
    cart.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `${item.name} <span>&#8360:${item.price.toFixed(2)}</span>`;
      cartItemsList.appendChild(li);
      total += item.price;
    });

    totalPriceElement.innerHTML = `&#8360:${total.toFixed(2)}`;
  }
});

