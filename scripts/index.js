import { data } from "./data.js";

for (let event_i = 0; event_i < data.events.length; event_i++) {

    let CardGroup_Column = document.getElementById("CardMainGroup").appendChild(document.createElement("div"));
    CardGroup_Column.classList.add("col");

    CardGroup_Column.innerHTML = `
    <div class="card h-100 w-100">
        <img src="${data.events[event_i].image}" class="card-img p-2 rounded-5" alt="${data.events[event_i].name} Event Image">
        <div class="card-body d-flex flex-column justify-content-between">
            <p class="card-title fs-4">${data.events[event_i].name}</p>
            <p class="card-text">${data.events[event_i].description}</p>
            <div class="card-footer d-flex justify-content-between">
                <p class="card-text my-0 py-1 px-2"">$ ${data.events[event_i].price}</p>
                <a class="card-text see-more py-1 px-2 rounded-3" href="./details.html" id="${data.events[event_i]._id}_DetailsId"">See more</a>
            </div>
        </div>
    </div>
`;
};