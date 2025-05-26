import { dataBackUp } from "./data-backup.js";

const url = "https://api.nal.usda.gov/fdc/v1/foods/list?dataType=Foundation&pageSize=200&pageNumber=1";
const apiKey = "vHoktS3dhBangBjmMC19qafqZz9y7YsoQnuHPj9E";


export const getFoods = async () => {
    try {
        const response = await fetch(url + "&api_key=" + apiKey);
        const foods = await response.json();
        // console.log("food recibido", foods);

        return randomMarketAssign(foods);
    } catch (error) {
        console.log("Ha ocurrido un error en la petición de las comidas", error);

        return randomMarketAssign(dataBackUp);
    }
};

// Funcion que itere en la constante foods, que le ponga la palabra del supermercado "correspondiente" y un precio aleatorio entre 1 y 4 euros.
const randomMarketAssign = (foods) => {
    const supermarkets = ["mercadona", "dia", "dialprix", "carrefour"];

    foods.forEach((obj) => {
        
        obj.price = parseFloat((Math.random() * 3 + 1).toFixed(2));

        const randomIndex = Math.floor(Math.random() * supermarkets.length);
        obj.supermarket = supermarkets[randomIndex];
    });


    return foods;
};
