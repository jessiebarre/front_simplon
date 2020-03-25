// DISPLAY COUNTRIES IN SELECT
const dropdownCities = document.createElement('select');
dropdownCities.id = 'cities'
document.body.appendChild(dropdownCities);


const defaultOption = document.createElement('option');
defaultOption.text = "Choose a country";

dropdownCities.add(defaultOption);
dropdownCities.selectedIndex = 0;

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
            dropdownCities.add(option);
        }
    } else {
        console.log("error");
    }
}
requestCountries.send();

// WHEN COUNTRY IS SELECTED, DISPLAY REGIONS

dropdownCities.addEventListener("change", function(){
    const dropdownRegions = document.createElement('select');
    dropdownRegions.id = 'regions';
    if (document.body.contains(document.getElementById('regions'))) {
        document.body.removeChild(dropdownRegions);
    } else { 
        document.body.appendChild(dropdownRegions);
    }
    

})

