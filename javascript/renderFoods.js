document.addEventListener("DOMContentLoaded", () => {
    //-----------------------------------------CONTENEDOR DE LOS SUPERMERCADOS EN GENERAL (PAGINA DE HTML)-----------------------------------------// 
    const supermarketContainer = document.getElementsByClassName("products-container");

    const carrefour = document.getElementById('carrefour-supermarket');
    const mercadona = document.getElementById('mercadona-supermarket');
    const dialprix = document.getElementById('dialprix-supermarket');
    const dia = document.getElementById('dia-supermarket');
    const allProducts = document.getElementById('allProductsContainer')

    // console.log("carrefour:", carrefour);
    // console.log("mercadona:", mercadona);
    // console.log("dialprix:", dialprix);
    // console.log("dia:", dia);

    // 
    const box = document.createElement("div");
    box.id = "custom-box";
    box.style.display = "flex";
    box.style.cssText = `
    display:none; position:fixed; top:0; left:0; font-size:10px;
    background:rgba(0,0,0,0.5); justify-content:center; align-items:center;
  `;
    box.innerHTML = `
    <div style="background:#fff; padding:20px; border-radius:8px; max-width:400px; width:80%;">
      <h2 style="display:flex; justify-self:center;" id="box-title" style="margin-top:0;"></h2>
      <p style="padding:8px 0 8px 0;" id="box-body"></p>
      <div style="display:flex; justify-content:space-between; align-content:center;">
        <span style="display:flex; justify-self:flex-start;" id="box-supermarket"></span>
        <span style="display:flex; justify-self:flex-end;" id="box-price"></span>
      </div>
      <button style="display:flex; justify-self:center; border:none; border-radius:4px;" id="box-close">Cerrar</button>
      </div>
      
  `;
    document.body.appendChild(box);


    document.getElementById("box-close").onclick = () => box.style.display = "none";


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
      <div class="supermarket-price-js-container">
      <span class="food-supermarket">${food.supermarket.toUpperCase()}</span>
      <span class="food-price">${food.price} €</span>
      </div>
      <div class="add-list-button">+</div>

    `;
    // console.log("Precio: " + food.price, typeof food.price);
    
            item.style.cursor = "pointer";
            item.onclick = () => {
                document.getElementById("box-title").textContent = food.description.slice(0, 20);
                document.getElementById("box-body").textContent = food.foodNutrients.map(i => i.name).join(", ");
                document.getElementById("box-supermarket").textContent = food.supermarket.toUpperCase();
                document.getElementById("box-price").textContent = food.price + " €";
                box.style.display = "flex";
            };


            const addListBtn = item.querySelector(".add-list-button");
            addListBtn.addEventListener("click", () => {
                const currentList = JSON.parse(localStorage.getItem("myList")) || [];

                const exists = currentList.some(product => product.description === food.description);
                if (!exists) {
                    currentList.push(food);
                    localStorage.setItem("myList", JSON.stringify(currentList));
                }
            });


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
            }if(food.supermarket) {
                allProducts?.append(item);
            }

        });
    };

    
});

