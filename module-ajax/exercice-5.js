// DISPLAY COUNTRIES IN SELECT
const countriesDropdown = document.createElement('select');
countriesDropdown.id = 'countries'
document.body.appendChild(countriesDropdown);


const defaultOption = document.createElement('option');
defaultOption.text = "Choose a country";

countriesDropdown.add(defaultOption);
countriesDropdown.selectedIndex = 0;


const url = "http://localhost:8080/country";

const requestCountries = new XMLHttpRequest();
requestCountries.open('GET', url);

requestCountries.onload = function() {
    if (requestCountries.status === 200) {
        const data = JSON.parse(requestCountries.responseText);
        let option;
        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name;
            console.log()
            option.value = data[i].id;
            countriesDropdown.add(option);
        }
    } else {
        console.log("error");
    }
}
requestCountries.send();

createForm();


// WHEN COUNTRY IS SELECTED, DISPLAY REGIONS

countriesDropdown.addEventListener("change", function(){
    
    
    // reinit the former selects 
    if (document.getElementById('regions')) {
        const regionsReinit = document.getElementById('regions');
        regionsReinit.parentNode.removeChild(regionsReinit);
    } 

    if (document.getElementById('cities')) {
        const citiesReinit = document.getElementById('cities');
        citiesReinit.parentNode.removeChild(citiesReinit);
    } 


    const selection = countriesDropdown.options[countriesDropdown.selectedIndex].text;
    console.log(selection);

/******************* 
 FORM WHEN NO COUNTRY SELECTED
 *********************/ 

     if(selection === 'Choose a country') {
        reinitForm();
        createForm();

/******************* 
 ELSE : GET THE REGIONS FOR SELECTED COUNTRY
*********************/ 
     } else {
        reinitForm();

        const regionsDropdown = document.createElement('select');
        regionsDropdown.id = 'regions';
        document.body.appendChild(regionsDropdown);
    
        const defaultOption = document.createElement('option');
        defaultOption.text = "Choose a region";
    
        regionsDropdown.add(defaultOption);
        regionsDropdown.selectedIndex = 0;
    
        // get the id of the country selected to put in the request
        let countryId = countriesDropdown.options[countriesDropdown.selectedIndex].value;
        console.log(countryId);
    
        // build the request
        const regionsRequest = new XMLHttpRequest();
        const url = `http://localhost:8080/country/${countryId}/region`;
        regionsRequest.open('GET', url);
    
        // get the values of the corresponding regions
        regionsRequest.onload = function() {
                if (regionsRequest.status === 200) {
                    const data = JSON.parse(regionsRequest.responseText);
                    let option;
                    for (let i = 0; i < data.length; i++) {
                        option = document.createElement('option');
                        option.text = data[i].name;
                        console.log()
                        option.value = data[i].id;
                        regionsDropdown.add(option);
                    }
                } else {
                    console.log("error");
                }
            }
            regionsRequest.send();
    
            regionsDropdown.addEventListener("change", function(){
            
                const citiesDropdown = document.createElement('select');
                citiesDropdown.id = 'cities';
                document.body.appendChild(citiesDropdown);
            
                const defaultOption = document.createElement('option');
                defaultOption.text = "Choose a city";
            
                citiesDropdown.add(defaultOption);
                citiesDropdown.selectedIndex = 0;
            
                // get the id of the region selected to put in the request
                let regionId = regionsDropdown.options[regionsDropdown.selectedIndex].value;
                console.log(regionId);
            
                // build the request
                const citiesRequest = new XMLHttpRequest();
                const url = `http://localhost:8080/country/region/${regionId}/city`;
                citiesRequest.open('GET', url);
            
                // get the values of the corresponding regions
                citiesRequest.onload = function() {
                        if (citiesRequest.status === 200) {
                            const data = JSON.parse(citiesRequest.responseText);
                            let option;
                            for (let i = 0; i < data.length; i++) {
                                option = document.createElement('option');
                                option.text = data[i].name;
                                console.log()
                                option.value = data[i].id;
                                citiesDropdown.add(option);
                            }
                        } else {
                            console.log("error");
                        }
                    }
                    citiesRequest.send();
            })
     }

})

function createForm () {

        // dropdown fulfilled with backend languages
        const languageDropdown = document.createElement('select');
        languageDropdown.id = 'language-dropdown';

        const defaultOption = document.createElement('option');
        defaultOption.text = 'Choose a language';
        languageDropdown.add(defaultOption);
        languageDropdown.selectedIndex = 0;
    
        const languageUrl = "http://localhost:8080/language";
        const languageRequest = new XMLHttpRequest();
        languageRequest.open('GET', languageUrl);
    
        languageRequest.onload = function() {
            if (languageRequest.status === 200) {
                const data = JSON.parse(languageRequest.responseText);
                let option;
                for (let i = 0; i < data.length; i++) {
                    option = document.createElement('option');
                    option.text = data[i];
                    option.value = data[i];
                    languageDropdown.add(option);
                }
            } else {
                console.log("error");
            }
        }
        languageRequest.send();
    
    
    const countryForm = document.createElement('form');
    countryForm.id = 'countryForm';
    document.body.appendChild(countryForm);
    countryForm.setAttribute('method', 'post');
    
    // input for country name
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'countryName');

    const labelInput = document.createElement('label');
    labelInput.setAttribute('name', 'countryName');
    labelInput.innerHTML = 'Enter the name of the country: ';

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerHTML = 'Submit';

    labelInput.appendChild(nameInput);
    countryForm.appendChild(labelInput);
    countryForm.appendChild(languageDropdown);
    countryForm.appendChild(submitButton);
    document.body.appendChild(countryForm);
}

function reinitForm() {
    if (document.getElementById('countryForm')) {
        const reinitForm = document.getElementById('countryForm');
        reinitForm.parentNode.removeChild(reinitForm);
    }
}

