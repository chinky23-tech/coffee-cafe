  /*document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const cartButton = document.getElementById('cartButton');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.querySelector('.close-cart');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartCounter = document.getElementById('cartCounter');
    const cartTotal = document.getElementById('cartTotal');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    // Initialize cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Event Listeners
    cartButton.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartModal);
    
    // Add to cart functionality
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        
        // Check if item already exists in cart
        const existingItem = cart.find(item => item.name === name);
        
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.push({
            name,
            price,
            quantity: 1
          });
        }
        
        saveCart();
        updateUI();
        
        // Visual feedback
        button.textContent = '✓ Added!';
        setTimeout(() => {
          button.textContent = 'Add to Cart';
        }, 1000);
      });
    });
    
    // Cart functions
    function openCart() {
      cartModal.style.display = 'block';
      renderCartItems();
    }
    
    function closeCartModal() {
      cartModal.style.display = 'none';
    }
    
    function renderCartItems() {
      cartItemsContainer.innerHTML = '';
      
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        return;
      }
      
      cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
          <div class="item-info">
            <h3>${item.name}</h3>
            <p>₹${item.price} × ${item.quantity}</p>
          </div>
          <div class="item-controls">
            <button class="quantity-btn minus" data-index="${index}">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn plus" data-index="${index}">+</button>
            <button class="remove-item" data-index="${index}">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        `;
        cartItemsContainer.appendChild(itemElement);
      });
      
      // Add event listeners to new buttons
      document.querySelectorAll('.minus').forEach(btn => {
        btn.addEventListener('click', decreaseQuantity);
      });
      
      document.querySelectorAll('.plus').forEach(btn => {
        btn.addEventListener('click', increaseQuantity);
      });
      
      document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', removeItem);
      });
      
      // Update total
      updateTotal();
    }
    
    function decreaseQuantity(e) {
      const index = e.target.dataset.index;
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
      saveCart();
      updateUI();
    }
    
    function increaseQuantity(e) {
      const index = e.target.dataset.index;
      cart[index].quantity += 1;
      saveCart();
      updateUI();
    }
    
    function removeItem(e) {
      const index = e.target.closest('button').dataset.index;
      cart.splice(index, 1);
      saveCart();
      updateUI();
    }
    
    function updateTotal() {
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      cartTotal.textContent = `₹${total.toFixed(2)}`;
    }
    
    function updateUI() {
      const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
      cartCounter.textContent = itemCount;
      renderCartItems();
    }
    
    function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    // Initialize UI
    updateUI();
  });*/
 // functional cart 
  const cartItems = [];
  const cartList = document.querySelector('.cart-items-list');
  const totalPriceEl = document.querySelector('.total-price-list');

  function updateCart() {
    cartList.innerHTML = '';
    let total = 0;

    cartItems.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${item.name} <span>&#8377;${item.price}</span>`;
      cartList.appendChild(li);
      total += item.price;
    });

    totalPriceEl.textContent = `₹${total.toFixed(2)}`;
  }

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = parseFloat(button.getAttribute('data-price'));

      cartItems.push({ name, price });
      updateCart();
    });
  });

  document.querySelector('.clear-btn-btn').addEventListener('click', () => {
    cartItems.length = 0;
    updateCart();
  });

  document.querySelector('.checkout-btn-btn').addEventListener('click', () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
    } else {
      alert('Thanks for your order!');
      cartItems.length = 0;
      updateCart();
    }
  });

