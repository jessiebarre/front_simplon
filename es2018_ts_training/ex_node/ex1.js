/**
 Quand on utilise Node JS, l'objet Global est l'objet principal dans lequel le
 code s'exécute. Par comparaison, sur un navigateur, l'objet principal est
 l'objet Window. L'objet Window n'EXISTE PAS sur Node JS. En revanche les
 fonctions/objets fondamentaux de JavaScript (undefined, parseFloat(), isNaN(),
 Math, Date, Object, ...) sont toujours disponibles.

 L'objet Global documenté ici : https://nodejs.org/docs/latest/api/globals.html

 Cet objet est accessible à tout moment à partir de la variable global. Il
 contient des propriétés comme :

 - global.console pour accéder à l'objet Console documenté ici :
 https://nodejs.org/docs/latest/api/console.html
 - global.process pour accéder à l'objet Process documenté ici :
 https://nodejs.org/docs/latest/api/process.html

 On peut ne pas écrire global. Les objets cités précédemment pourraient être
 utilisés directement par la propriété :
 - console.
 - process.


 L'objet Console vous permet d'afficher des message sur la sortie standard
 (au niveau du terminal). Il s'utilise comme l'objet Console qu'on trouve dans
 l'objet Window d'un navigateur Internet.
 Par exemple:
 - Si on exécute global.console.log('Ceci est un message'); alors on
 affichera Ceci est un message au niveau du terminal.

 L'objet Process vous permet de travailler sur le programme démarré par Node
 JS (on appelle un programme en cours d'exécution un processus). La propriété
 ".argv", par exemple, de l'objet Process contient un objet de type Array avec
 la liste des arguments utilisés lors de l'exécution du programme.
 Par exemple :
 - Si on démarre notre programme en écrivant "node exercice1.js a 3 b" alors
 global.process.argv contiendra : [
 '..\node',
 '..\exercice1.js',
 'a',
 '3',
 'b'
 ]

 ATTENTION, l'Array contient toujours des chaînes de caractère même si les
 arguments sont des nombres.
 **/

/**
 Exercices :

 1. Écrivez un programme que vous exécuterez à l'aide de Node JS. Ce
 programme affiche dans la console :
 - Le nom du fichier source du programme (voir Global)
 - Le nom du dossier dans lequel le programme s'exécute (voir Global)
 - Le nom du dossier dans lequel le programme s'exécute obtenu autrement
 (voir Process)
 **/
console.log(__dirname);
console.log(__filename);
console.log(global.process.cwd());

/**
 2. Écrivez un programme que vous exécuterez à l'aide de Node JS. Ce
 programme prend en argument un nombre.
 Ce nombre est le nombre de fois que le programme affichera
 "Bonjour n fois !" dans le  terminal. Par exemple :
 - Si je démarre le programme en écrivant "node exercice1.js 1" alors le
 programme écrira "Bonjour 1 fois !" dans la console.
 - Si je démarre le programme en écrivant "node exercice1.js 2" alors le
 programme écrira "Bonjour 1 fois ! Bonjour 2 fois !" dans la console.

 Si le programme n'a pas de nombre en argument ou autre chose qu'un nombre,
 le programme doit afficher Au Revoir ! dans la console.
 **/
let nombreDeRepetitions = parseInt(process.argv.slice(2));
if (!nombreDeRepetitions) {
    console.log("Au revoir");
} else {
    for (let i = 0; i < nombreDeRepetitions; i++) {
        console.log(`Bonjour ${i+1} fois`);
    }
}

/**
 3. Améliorez votre programme. Créez une fonction qui prend en argument un
 nombre et qui affiche autant de fois Bonjour que le nombre fourni en
 argument.

 Écrivez un programme qui produit un résultat identique au précédent mais
 en utilisant la fonction que vous avez créé.
 **/

let maFonction = function() {
    let nombreDeRepetitions = parseInt(process.argv.slice(2));
    for (let i= 0; i < nombreDeRepetitions; i++) {
        console.log(`Bonjour ${i+1} fois`);
    }
};
maFonction();

/**
 * Sami Radi - VirtuoWorks® - tous droits réservés©
 **/

