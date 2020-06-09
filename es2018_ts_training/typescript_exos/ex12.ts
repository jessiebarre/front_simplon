interface Recette {
    readonly nom: string;
    nbPersonnes: number;
    readonly type: string;
    ingredients?: string[];
    prix?: string; 
}

const recette1: Recette = {
    nom: "pizza",
    nbPersonnes: 6,
    type: "plat principal",
    ingredients: ["pâte", "sauce tomate", "mozzarella", "jambon"]
}

const recette2: Recette = {
    nom: "spaghettis bolognaise", 
    nbPersonnes: 4,
    type: "plat principal", 
    prix: "peu coûteux"
}

const paragraph = document.getElementById("displayRecipe");

const description = function (enEntree: Recette) {
    if (enEntree.nbPersonnes > 4) {
       paragraph.innerHTML = `La recette de ${enEntree.nom} nécessite comme ingrédients: ${enEntree.ingredients}.`;
    } else if (enEntree.prix) {
        paragraph.innerHTML += `La recette de ${enEntree.nom} est ${enEntree.prix}.`;
    }
}

description(recette1);
description(recette2);

