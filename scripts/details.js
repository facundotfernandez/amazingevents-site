import { data } from "./data.js";

function createDetailsCard() {

    CardMainDetails.innerHTML = `
    <div class="d-flex align-items-center h-100 w-100">
        <div class="col d-none d-sm-block border h-100 rounded-3 mx-2">
            <img src="${data.events[0].image}" class="card-img rounded-4 h-100 p-2" alt="${data.events[0].name} Event Image">
        </div>
        <div class="col border rounded-3 h-100 d-flex flex-column justify-content-between">
            <h5 class="card-title fs-2 m-4">${data.events[0].name}</h5>
            <p class="card-text mx-4">${data.events[0].description}</p>
            <p class="card-text mx-4">Date: ${data.events[0].date}</p>
            <p class="card-text mx-4">Category: ${data.events[0].category}</p>
            <p class="card-text mx-4">Place: ${data.events[0].place}</p>
            <p class="card-text mx-4">Capacity: ${data.events[0].capacity}</p>
            <p class="card-text mx-4">Assistance: ${data.events[0].assistance}</p>
            <p class="card-text mb-4 mx-4">Price: $ ${data.events[0].price}</p>
        </div>
    </div>
    `;

}

createDetailsCard()