const myPc: string = "hp";
const pouces: number = 15.6;
console.log(myPc, pouces);

const myParagraph = document.getElementsByTagName("p")[0];
myParagraph.innerHTML = `Mon ${myPc} a un écran de ${pouces} pouces`;
