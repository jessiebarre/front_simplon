// DISPLAY COUNTRIES IN SELECT
const countriesDropdown = document.createElement('select');
countriesDropdown.id = 'countries'
document.body.appendChild(countriesDropdown);


const defaultOption = document.createElement('option');
defaultOption.text = "Choose a country";

countriesDropdown.add(defaultOption);
countriesDropdown.selectedIndex = 0;

// GET countries request => fetch

const url = "http://localhost:8080/country";

const countriesPromise = fetch(url, {
    method: 'GET'
});
//console.log(countriesPromise);
countriesPromise.then(function (response) {
    //console.log(response);
    const newCountriesPromise = response.json();
    newCountriesPromise.then(function (data) {
        //console.log(data);
        let option;
        //console.log(data.length);
        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name;
            option.value = data[i].id;
            countriesDropdown.add(option);
        }
    })
})

// WHEN COUNTRY IS SELECTED, DISPLAY REGIONS

countriesDropdown.addEventListener("change", function () {

            // reinit the former selects 
            if (document.getElementById('regions')) {
                const regionsReinit = document.getElementById('regions');
                regionsReinit.parentNode.removeChild(regionsReinit);
            }

            if (document.getElementById('cities')) {
                const citiesReinit = document.getElementById('cities');
                citiesReinit.parentNode.removeChild(citiesReinit);
            }

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

            // build the request ==> fetch
            const url = `http://localhost:8080/country/${countryId}/region`;
            const regionsPromise = fetch(url, {
                method: 'GET'
            })
            regionsPromise.then(function (response) {
                const newRegionsPromise = response.json();
                newRegionsPromise.then(function (data) {
                    let option;
                    for (let i = 0; i < data.length; i++) {
                        option = document.createElement('option');
                        option.text = data[i].name;
                        option.value = data[i].id;
                        regionsDropdown.add(option);
                    }
                })
            })
            regionsDropdown.addEventListener("change", function () {

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


                const url = `http://localhost:8080/country/region/${regionId}/city`;
                const citiesPromise = fetch(url, {
                    method: 'GET'
                })
                citiesPromise.then(function (response) {
                    const newCitiesPromise = response.json();
                    newCitiesPromise.then(function (data) {
                        let option;
                        for (let i = 0; i < data.length; i++) {
                            option = document.createElement('option');
                            option.text = data[i].name;
                            option.value = data[i].id;
                            citiesDropdown.add(option);
                        }
                    })
                })

            })
        })