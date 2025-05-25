const listContainer = document.getElementById("listContainer");
const foods = JSON.parse(localStorage.getItem("myList")) || [];

if (foods.length === 0) {
  listContainer.innerHTML = "<p>No hay productos en la lista.</p>";
} else {
  foods.forEach(food => {
    const item = document.createElement("div");
    item.classList.add("list-product");
    item.innerHTML = `
      <h3>${food.description}</h3>
      <span>Supermercado: ${food.supermarket}</span>
      <span>Precio: ${food.price}</span>
      <button class="remove-product-btn">X</button>
    `;

    const removeBtn = item.querySelector(".remove-product-btn");
    removeBtn.addEventListener("click", () => {
      foods.splice([], 1)
      localStorage.setItem("myList", JSON.stringify(foods));

      item.remove();
    });
    
    
    listContainer.appendChild(item);
  });
}