/*********************************
 ************ EXERCICE ************
 **********************************
 On souhaite créer une loterie avec 20% de chances de gagner et où le tirage dure entre 1 et 5 secondes.
 1. Créez une fonction loterie qui renvoie un objet de type Promise.
 Cet objet sera instancié à partir de la fonction constructeur Promise à laquelle vous fournirez en argument une fonction de rappel (callback) prenant à son tour en paramètre une fonction que vous appellerez resoudreLaPromesse.
 2. Pour l'instant notre fonction loterie ne fait que renvoyer des promesses dans l'état "pending". Vérifiez que c'est le cas en affichant la valeur de retour de loterie() dans la console.
 3. Dans la callback fournie au constructeur de la promesse, générez un nombre aléatoire entre 1000 et 5000 et affichez dans la console le message "Votre temps d'attente est estimé à X secondes", où X est le nombre de secondes au bout duquel la promesse sera résolue ("resolved") arrondi à l'entier supérieur.
 4. Faites en sorte de résoudre la promesse au bout du nombre de ms généré en appelant la fonction resoudreLaPromesse dans un appel à window.setTimeout(). Stockez cette fois la valeur de retour de la fonction et attendez quelques secondes avant d'afficher sa valeur dans la console. La promesse devrait cette fois se trouver dans l'état "resolved".
 5. Afin que la promesse fournisse une valeur au moment de sa résolution il faut passer la valeur que l'on souhaite à resoudreLaPromesse. Toujours dans la callback de la fonction constructeur, générez un nombre aléatoire entre 0 et 1. Résolvez la promesse avec ce nombre.

 6. Cette fois, sachant que loterie renvoie une promesse, chaînez la méthode .then() à l'appel à loterie() et fournissez une callback à .then() qui prendra pour argument la valeur de résolution de la promesse.
 Si la valeur est inférieure ou égale à 0.2 (20% de chances de gagner), affichez "On a un gagnant !", sinon "C'est perdu, retentez votre chance...".
 */

const loterie = function () {

}
