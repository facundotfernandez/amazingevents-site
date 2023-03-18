import { data as localdata } from "./localdata.js";
const ApiURL = "https://mindhub-xj03.onrender.com/api/amazing"

async function obtain_EventsData() {

    try {

        const response = await fetch(ApiURL)
        const externaldata = await response.json()
        console.log(externaldata);
        return externaldata

    } catch (error) {

        console.log("API couldn't be reached, local data will be used instead");
        return localdata

    };

};

function init_DetailsPage() {

    const event_id = new URLSearchParams(location.search).get("id")

    const event = data.events.find(event => event._id == event_id)

    CardMainDetails.innerHTML = `
    <div class="d-flex align-items-center h-100 w-100">
        <div class="col d-none d-md-block border h-100 rounded-3 mx-2">
            <img src="${event.image}" class="card-img h-100" alt="${event.name} Event Image" id="CardMainDetails-image">
        </div>
        <div class="col border rounded-3 h-100 d-flex flex-column justify-content-between">
            <h5 class="card-title fs-1 m-4">${event.name}</h5>
            <p class="card-text fs-3 mx-4">${event.description}</p>
            <p class="card-text fs-5 mx-4">Date: ${event.date}</p>
            <p class="card-text fs-5 mx-4">Category: ${event.category}</p>
            <p class="card-text fs-5 mx-4">Place: ${event.place}</p>
            <p class="card-text fs-5 mx-4">Capacity: ${event.capacity}</p>
            <p class="card-text fs-5 mx-4">Assistance: ${(event.hasOwnProperty("assistance")) ? event.assistance : event.estimate}</p>
            <p class="card-text fs-5 mb-4 mx-4">Price: $ ${event.price}</p>
        </div>
    </div>
    `;

};

const data = await obtain_EventsData()

init_DetailsPage()