interface Recette {
    readonly nom: string;
    nbPersonnes: number;
    readonly type: string;
    ingredients?: string[];
    prix?: string; 
}

const recette3: Recette = {
    nom: "pizza",
    nbPersonnes: 6,
    type: "plat principal",
    ingredients: ["pâte", "sauce tomate", "mozzarella", "jambon"]
}

// recette3.nom = "not-a-pizza";