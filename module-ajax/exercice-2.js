/********** GET ***************/

const areaToUpdate = window.document.getElementById("selectedAddress");
const HTMLSelectElements = window.document.getElementsByTagName("select");
HTMLSelectElements[0].addEventListener("change", function () {
    // console.log("Change detected");
    // get the select>option values
    const selectedValue = this.options[this.options.selectedIndex].value;
    if (!isNaN(selectedValue)) {
        const promise = fetch(`http://localhost:8081/addresses/${selectedValue}`, {
            method: "GET"
        });

        promise.then(function (response) {
            console.log(response);
            const promise2 = response.json();
            promise2.then(function (address) {
                console.log(address);
                areaToUpdate.innerHTML = `<p>Pays: ${address.country} / Ville: ${address.city} / Code postal:  ${address.zipCode} / Rue: ${address.street} / </p>`;
            })
        })
    } else {
        areaToUpdate.innerHTML = "";
    }
});

/************ POST ************/

//const HTMLFormElement = document.getElementsByTagName("form")[0];
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function (submitEvent) {
    submitEvent.preventDefault();
    const HTMLInputElements = document.getElementsByTagName("input");
    const country = HTMLInputElements[0].value;
    const city = HTMLInputElements[1].value;
    const zipCode = HTMLInputElements[2].value;
    const street = HTMLInputElements[3].value;

    const newAddress = {
        country: country,
        city: city,
        zipCode: zipCode,
        street: street
    };

    const promise = fetch("http://localhost:8081/addresses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAddress)
    });

    promise.then(function (response) {
        const promise2 = response.json();
        console.log(response);
        promise2.then(function (result) {
            if ("OK" === result.statusCode) {
                const HtmlOptionElement = document.createElement("option");
                HtmlOptionElement.value = HTMLSelectElements[0].length -1;
                HtmlOptionElement.innerHTML = `Address ${parseInt(HtmlOptionElement.value) + 1}`;
                HTMLSelectElements[0].appendChild(HtmlOptionElement);
                console.log("Done");
            }
        })
    })
});
