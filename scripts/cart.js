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
});
