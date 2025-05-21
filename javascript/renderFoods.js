document.addEventListener("DOMContentLoaded", () => {
    //-----------------------------------------CONTENEDOR DE LOS SUPERMERCADOS EN GENERAL (PAGINA DE HTML)-----------------------------------------// 
    const supermarketContainer = document.getElementById("supermarket")

    const carrefour = document.getElementById('carrefour-supermarket');
    const mercadona = document.getElementById('mercadona-supermarket');
    const dialprix = document.getElementById('dialprix-supermarket');
    const dia = document.getElementById('dia-supermarket');

    console.log("carrefour:", carrefour);
    console.log("mercadona:", mercadona);
    console.log("dialprix:", dialprix);
    console.log("dia:", dia);

    //-----------------------------------------
    const data = JSON.parse(localStorage.getItem("foods")) || [];

    if (data.length === 0) {
        supermarketContainer.innerHTML = "<p>No hay comidas disponibles.</p>";
    } else {
        data.forEach(food => {
            const item = document.createElement("div");
            item.classList.add("product");
            item.innerHTML = `
      <h3 class="food-name">${food.description.slice(0, 20)}</h3>
      <span class="food-supermarket">${food.supermarket.toUpperCase()}<span>

    `;
            if (food.supermarket === "carrefour") {
                carrefour?.append(item);
                // console.log(item);
            } if (food.supermarket === "mercadona") {
                mercadona?.append(item);
                // console.log(item);
            } if (food.supermarket === "dialprix") {
                dialprix?.append(item);
                // console.log(item);
            } if (food.supermarket === "dia") {
                dia?.append(item);
                // console.log(item);
            }

        });
    };
});
