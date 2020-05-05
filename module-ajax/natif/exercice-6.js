const countriesDropdown = document.createElement("select");
countriesDropdown.id = "countries";
document.body.appendChild(countriesDropdown);
const defaultOption = document.createElement("option");
defaultOption.text = "Choose a country";
countriesDropdown.add(defaultOption);
countriesDropdown.selectedIndex = 0;

const url = "http://localhost:8080/country";

const countriesPromise = fetch(url, {
    method: 'GET'
});
countriesPromise.then(function (response) {
    const newCountriesPromise = response.json();
    newCountriesPromise.then(function (data) {
        let option;
        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name;
            option.value = data[i].id;
            countriesDropdown.add(option);
        }
    })
})
createForm();

// WHEN COUNTRY IS SELECTED, DISPLAY REGIONS

countriesDropdown.addEventListener("change", function() {
  // reinit the former selects
  if (document.getElementById("regions")) {
    const regionsReinit = document.getElementById("regions");
    regionsReinit.parentNode.removeChild(regionsReinit);
  }
  if (document.getElementById("cities")) {
    const citiesReinit = document.getElementById("cities");
    citiesReinit.parentNode.removeChild(citiesReinit);
  }
  const selection =
    countriesDropdown.options[countriesDropdown.selectedIndex].text;

  /******************* 
       FORM WHEN NO COUNTRY SELECTED
      *********************/
  if (selection === "Choose a country") {
    reinitForm();
    createForm();

    /******************* 
             ELSE : GET THE REGIONS FOR SELECTED COUNTRY
            *********************/
  } else {
    reinitForm();
    // create regions select
    const regionsDropdown = document.createElement("select");
    regionsDropdown.id = "regions";
    document.body.appendChild(regionsDropdown);
    const defaultOption = document.createElement("option");
    defaultOption.text = "Choose a region";
    regionsDropdown.add(defaultOption);
    regionsDropdown.selectedIndex = 0;

    // get the id of the country selected to put in the request
    let countryId =
      countriesDropdown.options[countriesDropdown.selectedIndex].value;
    console.log(countryId);

    // build the request
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

    // idem to display the cities select
    regionsDropdown.addEventListener("change", function() {
      const citiesDropdown = document.createElement("select");
      citiesDropdown.id = "cities";
      document.body.appendChild(citiesDropdown);
      const defaultOption = document.createElement("option");
      defaultOption.text = "Choose a city";
      citiesDropdown.add(defaultOption);
      citiesDropdown.selectedIndex = 0;

      // get the id of the region selected to put in the request
      let regionId =
        regionsDropdown.options[regionsDropdown.selectedIndex].value;
      console.log(regionId);

      // build the request
      const citiesRequest = new XMLHttpRequest();
      const url = `http://localhost:8080/country/region/${regionId}/city`;
      citiesRequest.open("GET", url);

      // get the values of the corresponding regions
      const Regionurl = `http://localhost:8080/country/region/${regionId}/city`;
                const citiesPromise = fetch(Regionurl, {
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
    });
  }
});

function createForm() {
  // dropdown fulfilled with backend languages
  const languageDropdown = document.createElement("select");
  languageDropdown.id = "languageDropdown";
  const defaultOption2 = document.createElement("option");
  defaultOption2.text = "Choose a language";
  languageDropdown.add(defaultOption2);
  languageDropdown.selectedIndex = 0;

  const languageUrl = "http://localhost:8080/language";
  const languagePromise = fetch(languageUrl, {
    method: "GET"
  });
  languagePromise.then(function(response) {
    const newLanguagePromise = response.json();
    newLanguagePromise.then(function(data) {
      console.log(data);
      let option;
      for (let i = 0; i < data.length; i++) {
        option = document.createElement("option");
        option.text = data[i];
        option.value = data[i];
        languageDropdown.add(option);
      }
    });
  });

  const countryForm = document.createElement("form");
  countryForm.id = "countryForm";
  document.body.appendChild(countryForm);
  countryForm.setAttribute("method", "post");

  // input for country name
  const nameInput = document.createElement("input");
  nameInput.id = "countryNameInput";
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "countryName");

  const labelInput = document.createElement("label");
  labelInput.setAttribute("name", "countryName");
  labelInput.innerHTML = "Enter the name of the country: ";

  const submitButton = document.createElement("button");
  submitButton.id = "submitButton";
  submitButton.setAttribute("type", "submit");
  submitButton.innerHTML = "Submit";

  labelInput.appendChild(nameInput);
  countryForm.appendChild(labelInput);
  countryForm.appendChild(languageDropdown);
  countryForm.appendChild(submitButton);
  document.body.appendChild(countryForm);
}

function reinitForm() {
  if (document.getElementById("countryForm")) {
    const reinitForm = document.getElementById("countryForm");
    reinitForm.parentNode.removeChild(reinitForm);
  }
}

// FORM POST
function postNewCountry() {
  // get the values
  let selection;
  languageDropdown.addEventListener("change", function() {
    selection = languageDropdown.options[languageDropdown.selectedIndex].value;
  });
  console.log(selection);

  submitButton.addEventListener("click", function(submitEvent) {
    submitEvent.preventDefault();
    // get the input value of country name
    const countryNameValue = document.getElementById("countryNameInput").value;
    //console.log(countryNameValue);
    const newCountry = {
      language: selection,
      name: countryNameValue
    };
    console.log(newCountry);

    fetch("http://localhost:8080/country", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCountry)
    }).then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

    const url = "http://localhost:8080/country";

    const countriesPromise = fetch(url, {
      method: "GET"
    });
    countriesPromise.then(function(response) {
      const newCountriesPromise = response.json();
      newCountriesPromise.then(function(data) {
        let option;
        for (let i = 0; i < data.length; i++) {
          option = document.createElement("option");
          option.text = data[i].name;
          option.value = data[i].id;
          countriesDropdown.add(option);
        }
      });
    });
  });
}

postNewCountry();
