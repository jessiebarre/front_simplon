"use strict";

console.log("Je suis un module secondaire !");

console.log(__dirname);
console.log(process.cwd());

let maFonction = function() {
    let nombreDeRepetitions = parseInt(process.argv.slice(2));
    for (let i= 0; i < nombreDeRepetitions; i++) {
        console.log(`Bonjour ${i+1} fois`);
    }
};
exports.maFonction = maFonction;

let myArray = ["Je", "fais", "grève"];
exports.myArray = myArray;

let myObject = {
    name: "Jessie",
    displayName: function() {
        console.log(`My name is ${this.name}`);
    }
};
exports.myObject = myObject;
