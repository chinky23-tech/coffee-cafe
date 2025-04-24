
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

