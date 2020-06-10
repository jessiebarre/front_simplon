interface Film {
    titre: string;
    realisateur: string;
    annee: number;
    genre: string[];
}

const film1: Film =  {
    titre: "Oslo, 31 août",
    realisateur: "Joachim Trier",
    annee: 2011,
    genre: ["drame"]
}

const film2: Film = {
    titre: "Rosemary's Baby",
    realisateur: "Roman Polanski",
    annee: 1968,
    genre: ["thriller", "drame"]
}

function description(film: Film) {
    console.log(`${film.titre} a été réalisé par ${film.realisateur} en ${film.annee}. Il est de genre(s) ${film.genre}`);
}

description(film1);
description(film2); 