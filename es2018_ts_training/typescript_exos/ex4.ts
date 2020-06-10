// string array
const myArray: string[] = ["riri", "fifi", "loulou"];
console.log(myArray[1]);

// number array
let myNumberArray: number[] = [];
myNumberArray.push(16);
myNumberArray.push(54);
myNumberArray.push(8);
console.log(myNumberArray);

const myFavoriteFlavors: string[] = ["chocolate", "mint-chocolate", "strawberry"];
const myParagraph = document.getElementsByTagName("p")[0];
myParagraph.innerHTML = `Mon parfum préféré c'est ${myFavoriteFlavors[1]}`;
