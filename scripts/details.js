import { data } from "./data.js";

const event_id = new URLSearchParams(location.search).get("id")

const event = data.events.find(event => event._id == event_id)

function createDetailsCard() {

    CardMainDetails.innerHTML = `
    <div class="d-flex align-items-center h-100 w-100">
        <div class="col d-none d-sm-block border h-100 rounded-3 mx-2">
            <img src="${event.image}" class="card-img rounded-4 h-100 p-2" alt="${event.name} Event Image" id="CardMainDetails-image">
        </div>
        <div class="col border rounded-3 h-100 d-flex flex-column justify-content-between">
            <h5 class="card-title fs-2 m-4">${event.name}</h5>
            <p class="card-text mx-4">${event.description}</p>
            <p class="card-text mx-4">Date: ${event.date}</p>
            <p class="card-text mx-4">Category: ${event.category}</p>
            <p class="card-text mx-4">Place: ${event.place}</p>
            <p class="card-text mx-4">Capacity: ${event.capacity}</p>
            <p class="card-text mx-4">Assistance: ${event.assistance}</p>
            <p class="card-text mb-4 mx-4">Price: $ ${event.price}</p>
        </div>
    </div>
    `;

}

createDetailsCard()