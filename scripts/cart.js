
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuItems = document.querySelectorAll(".menu-item");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItemsList = document.querySelector(".cart-items");
  const totalPriceElement = document.querySelector(".total-price");
  const clearCartButton = document.querySelector(".clear-cart-btn");
  const checkoutButton = document.querySelector(".checkout-btn");

  let cart = [];

  // FILTER MENU ITEMS
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
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

  // ADD TO CART
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
      li.innerHTML = `${item.name} <span>&#8360;${item.price.toFixed(2)}</span>`;
      cartItemsList.appendChild(li);
      total += item.price;
    });

    totalPriceElement.innerHTML = `&#8360;${total.toFixed(2)}`;
    checkoutButton.disabled = cart.length === 0;
  }

  // INITIALLY DISABLE CHECKOUT IF CART EMPTY
  updateCartUI();
});
