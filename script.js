let cart = []; // Global cart array

function addToCart(itemName, price, qtyInputId) {
  const quantity = parseInt(document.getElementById(qtyInputId).value);

  if (isNaN(quantity) || quantity <= 0) {
    alert("Please enter a valid quantity!");
    return;
  }

  const total = quantity * price;

  // Check if item already in cart
  const existingItem = cart.find(item => item.name === itemName);
  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.total += total;
  } else {
    cart.push({ name: itemName, quantity: quantity, total: total });
  }

  updateCartDisplay();
}

function updateCartDisplay() {
  const cartDiv = document.getElementById("cart");
  const totalDiv = document.getElementById("total");

  if (cart.length === 0) {
    cartDiv.innerHTML = "<h3>Your Cart is Empty</h3>";
    totalDiv.innerHTML = "";
    return;
  }

  cartDiv.innerHTML = "<h3>Your Cart</h3>";
  let grandTotal = 0;

  cart.forEach(item => {
    cartDiv.innerHTML += `<p>${item.name} x ${item.quantity} = ₹${item.total}</p>`;
    grandTotal += item.total;
  });

  totalDiv.innerHTML = `<h3>Total: ₹${grandTotal}</h3>`;
}

function confirmOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let message = "Order Confirmation:\n";
  let total = 0;

  cart.forEach(item => {
    message += `${item.name} x ${item.quantity} = ₹${item.total}\n`;
    total += item.total;
  });

  message += `Total: ₹${total}`;
  alert(message);
}
