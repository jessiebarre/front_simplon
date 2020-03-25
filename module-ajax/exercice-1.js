// GET

const dropdown = document.getElementById('country-dropdown');
dropdown.length = 0;

const defaultOption = document.createElement('option');
defaultOption.text = "Choose a country";

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = "http://localhost:8080/country";

const request = new XMLHttpRequest();
request.open('GET', url);

request.onload = function() {
    if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        let option;
        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name;
            console.log()
            option.value = data[i].id;
            dropdown.add(option);
        }
    } else {
        console.log("error");
    }
}
request.send();

// update div with selected country
const select = document.getElementById(('country-dropdown'));
const area = document.getElementsByTagName('div')[0];
select.addEventListener('change', function () {
    const selection = select.options[select.selectedIndex].text;
    if(selection === "Choose a country") {
        area.innerHTML = "No country selected";
    } else {
        area.innerHTML = `The selected country is ${selection}`;
    }
})

// POST 

// get language choice from back list
const languageDropdown = document.getElementById('language-dropdown');

const defaultOption2 = document.createElement('option');
defaultOption2.text = "Choose a language";

languageDropdown.add(defaultOption2);
languageDropdown.selectedIndex = 0;

const languageUrl = "http://localhost:8080/language";

const request2 = new XMLHttpRequest();
request2.open('GET', languageUrl);

request2.onload = function() {
    if (request.status === 200) {
        const data = JSON.parse(request2.responseText);
        let option;
        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i];
            console.log(data[i])
            option.value = data[i];
            languageDropdown.add(option);
        }
    } else {
        console.log("error");
    }
}
request2.send();

const submitButton = document.getElementById("submit-country");
submitButton.addEventListener("click", function(submitEvent) {
    submitEvent.preventDefault();
    const inputs = document.getElementsByTagName('input');
    const countryName = inputs[0].value;
    const countryLanguage = inputs[1].value;
});