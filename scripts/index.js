import { data } from "./data.js";

function createEventsCards() {

    let CardGroup = []

    data.events.forEach(event => {

        CardGroup += `
        <div class="col">
            <div class="card h-100 w-100">
                <img src="${event.image}" class="card-img p-2 rounded-5" alt="${event.name} Event Image">
                <div class="card-body d-flex flex-column justify-content-between">
                    <p class="card-title fs-4">${event.name}</p>
                    <p class="card-text">${event.description}</p>
                    <div class="card-footer d-flex justify-content-between">
                        <p class="card-text my-0 py-1 px-2"">$ ${event.price}</p>
                        <a class="card-text see-more py-1 px-2 rounded-3" href="./details.html" id="${event._id}_DetailsId"">See more</a>
                    </div>
                </div>
            </div>
        </div>
        `;

    });

    document.getElementById("CardMainGroup").innerHTML = CardGroup

};

createEventsCards()