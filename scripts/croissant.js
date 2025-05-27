document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItemsList = document.querySelector(".cart-items");
  const totalPriceElement = document.querySelector(".total-price");
  const clearCartButton = document.querySelector(".clear-cart-btn");
  const checkoutButton = document.querySelector(".checkout-btn");

  let cart = [];

  // ADD TO CART
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".menu-item") || button.closest(".coffee-card");

      // Try to get name from data-name, otherwise from heading
      let name = item.dataset.name || item.querySelector("h2, h3").innerText;
      const priceText = item.querySelector(".price").innerText;
      const price = parseFloat(priceText.replace(/[^\d.]/g, ''));

      cart.push({ name, price });
      updateCartUI();
    });
  });

  // CLEAR CART
  clearCartButton.addEventListener("click", () => {
    cart = [];
    updateCartUI();
  });

  // CHECKOUT BUTTON
  checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before checking out.");
      return;
    }

    const confirmed = confirm("Proceed to checkout?");
    if (confirmed) {
      alert("Thank you for your order!");
      cart = [];
      updateCartUI();
    }
  });

  // UPDATE CART UI FUNCTION
  function updateCartUI() {
    cartItemsList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `${item.name} <span>&#8377;${item.price.toFixed(2)}</span>`;
      cartItemsList.appendChild(li);
      total += item.price;
    });

    totalPriceElement.innerHTML = `&#8377;${total.toFixed(2)}`;
    checkoutButton.disabled = cart.length === 0;
  }

  updateCartUI();
});
