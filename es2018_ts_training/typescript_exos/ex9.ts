// get HTML elements
const submitButton = document.getElementsByTagName("button")[0];
const myDiv = document.getElementById("result");

submitButton.addEventListener("click", function (submitEvent) {

    // get input values
    const input1 = parseInt(document.getElementsByTagName("input")[0].value);
    const input2 = parseInt(document.getElementsByTagName("input")[1].value);
    submitEvent.preventDefault();
    if (!isNaN(input1) && !isNaN(input2)) {
        let myArray :number[] = [];
        const ope = (a :number, b :number) => {
            myArray.push(a + b);
            myArray.push(a * b);
        };
        ope(input1, input2);
        myDiv.innerHTML = `la somme donne ${myArray[0]} et la multiplication donne ${myArray[1]}.`;
    } else {
        console.log("Please enter some numbers");
    }
});








