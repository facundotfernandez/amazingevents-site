import { data } from "./data.js";

function init_CategoriesAndEvents() {

    let EventsGroup = {}
    let CategoriesGroup = {}
    let EventsHTMLSection = ""
    let CategoriesHTMLSection = ""

    data.events.forEach(event => {

        if (event.date < data.currentDate) {

            if (CategoriesGroup.hasOwnProperty(event.category)) {

                CategoriesGroup[event.category].push(event._id)

            } else {

                CategoriesGroup[event.category] = [event._id];

                CategoriesHTMLSection += `
                    <label class="btn categories-category">${event.category}
                        <input type="checkbox" class="btn-check" value="${event.category}">
                    </label>
                `;

            };

            EventsGroup[event._id] = { "image": event.image, "name": event.name, "description": event.description, "price": event.price };

            EventsHTMLSection += `
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

        };

    });

    document.getElementById("CardMainGroup").innerHTML = EventsHTMLSection
    document.getElementById("NavMainCategories").innerHTML = CategoriesHTMLSection

};

init_CategoriesAndEvents()