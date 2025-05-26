const listContainer = document.getElementById("listContainer");
const toggleBtn = document.getElementById("toggleListBtn");
const foods = JSON.parse(localStorage.getItem("myList")) || [];

if (foods.length === 0) {
  listContainer.innerHTML = "<p>No hay productos en la lista.</p>";
} else {
  let counter = 0;

  foods.forEach((food, i) => {
    const item = document.createElement("div");
    item.classList.add("list-product");
    item.innerHTML = `
      <h3>${food.description}</h3>
      <div style="display:flex; justify-content:space-between;">
      <span>Supermercado: ${food.supermarket}</span>
      <span>Precio: ${food.price} €</span>
      </div>
      <button class="remove-product-btn">X</button>
    `;

    counter += parseFloat(food.price);

    const removeBtn = item.querySelector(".remove-product-btn");
    removeBtn.addEventListener("click", () => {
      foods.splice(i, 1)
      localStorage.setItem("myList", JSON.stringify(foods));

      item.remove();
    });

    listContainer.appendChild(item);


  });

  const totalPrice = document.createElement("div");
  totalPrice.style.paddingTop = "10px"
  totalPrice.innerHTML = `Total: ${counter.toFixed(2)} €`;

  listContainer.appendChild(totalPrice);
};

// Mostrar/Ocultar la lista al hacer clic en el botón
toggleBtn.addEventListener("click", () => {
  if (listContainer.style.display === "none") {
    listContainer.style.display = "block";
    toggleBtn.textContent = "Ocultar lista";
  } else {
    listContainer.style.display = "none";
    toggleBtn.textContent = "Mostrar lista";
  }
});