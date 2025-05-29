function loadCoffee(type) {
  const coffeeData = {
    espresso: {
      title: "Espresso",
      description: "A strong, rich coffee shot with bold flavor and high caffeine content."
    },
    latte: {
      title: "Latte",
      description: "Smooth coffee with steamed milk and a light foam topping."
    },
    cappuccino: {
      title: "Cappuccino",
      description: "Balanced coffee with equal parts espresso, steamed milk, and milk foam."
    },
    americano: {
      title: "Americano",
      description: "Espresso with added hot water, giving it a lighter body."
    },
    mocha: {
      title: "Mocha",
      description: "Chocolate-flavored coffee drink with espresso, milk, and whipped cream."
    }
  };

  const coffee = coffeeData[type];
  if (coffee) {
    document.getElementById('coffeeContent').innerHTML = `
      <h2>${coffee.title}</h2>
      <p>${coffee.description}</p>
    `;
  } else {
    document.getElementById('coffeeContent').innerHTML = "<p>Sorry, coffee not found.</p>";
  }
}
