import { fromEvent, zip } from 'rxjs';
import { ajax } from 'rxjs/ajax';

/*********  SELECT with GET addresses *******/

// person form
const personForm = document.getElementById('personForm');

const addressesSelect = document.createElement('select');
addressesSelect.id = "getAddresses";

const defaultOption = document.createElement('option');
defaultOption.text = "Choose an address";

addressesSelect.add(defaultOption);
addressesSelect.selectedIndex = 0;

// when doc is loaded
fromEvent(window, "DOMContentLoaded").subscribe((event) => {


    // create an Obs to do the ajax request
    ajax({
        url: 'http://localhost:8084/addresses',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).subscribe((data) => {
        // observer
        if (data.status === 200) {
            let addressesList = data.response;
            let option;
            for (let i = 0; i < addressesList.length ; i++) {
                option = document.createElement('option');
                option.text = addressesList[i].city;
                option.value = addressesList[i].id;
                addressesSelect.add(option);
            }
            personForm.appendChild(addressesSelect);

        }
    })

})
