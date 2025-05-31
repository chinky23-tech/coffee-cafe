document.addEventListener('DOMContentLoaded', function () {
  // Button on index.html
  const coffeeButton = document.getElementById('coffeeButton');
  if (coffeeButton) {
    coffeeButton.addEventListener('click', function () {
      window.location.href = 'coffee.html'; // Opens coffee.html
    });
  }

  // Button on coffee.html
  const menuButton = document.getElementById('menuButton');
  if (menuButton) {
    menuButton.addEventListener('click', function () {
      window.location.href = 'cafe.html'; // Opens cafe.html
    });
  }

  // You can add more buttons for other pages here
});
