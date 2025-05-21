const cart = document.getElementById("cart-section");

const addButtons = document.querySelectorAll("cart");

const removeButton = document.getElementById("remove-btn");

addButtons.forEach(button => {
  button.addEventListener("click", () => {
    const itemName = button.getAttribute("items-section");

    const option = document.createElement("________");
    option.textContent = itemName;
    option.value = itemName;

    cart.____________________;
  });
});


removeButton.addEventListener("click", () => {
  const selected = Array.from(cart._____________________);  

  selected.forEach(option => {
    cart.______________________;
  });
});
