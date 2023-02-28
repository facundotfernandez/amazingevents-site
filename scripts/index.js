const event_Cinema = {
    name: "Cinema",
    date: new Date("10/14/23").toDateString(),
    description: "Gather your friends and family, and come to the Cinema",
    category: ["Kids & Family"],
    place: "Location",
    capacity: "200",
    assistance: "60",
    price: "$ 400",
    image_src: "./assets/cinema.jpg",
}

const event_CostumeParty = {
    name: "Costume Party",
    date: new Date("1/12/22").toDateString(),
    description: "Gather your friends and family, and come to the Costume Party",
    category: ["Nightlife"],
    place: "Location",
    capacity: "100",
    assistance: "80",
    price: "$ 500",
    image_src: "./assets/costume_party.jpg",
}

const event_FoodFair = {
    name: "Food Fair",
    date: new Date("1/23/23").toDateString(),
    description: "Gather your friends and family, and come to the Food Fair",
    category: ["Food & Drink", "Kids & Family"],
    place: "Location",
    capacity: "400",
    assistance: "250",
    price: "$ 250",
    image_src: "./assets/food_fair.jpg",
}

const event_Marathon = {
    name: "Marathon",
    date: new Date("12/18/22").toDateString(),
    description: "Gather your friends and family, and come to the Marathon",
    category: ["Sports"],
    place: "Location",
    capacity: "150",
    assistance: "50",
    price: "$ 200",
    image_src: "./assets/marathon.jpg",
}

const event_MuseumTour = {
    name: "Museum Tour",
    date: new Date("3/29/22").toDateString(),
    description: "Gather your friends and family, and come to the Museum Tour",
    category: ["Kids & Family", "Nightlife"],
    place: "Location",
    capacity: "200",
    assistance: "75",
    price: "$ 350",
    image_src: "./assets/museum_tour.jpg",
}

const event_MusicConcert = {
    name: "Music Concert",
    date: new Date("27/2/23").toDateString(),
    description: "Gather your friends and family, and come to the Music Concert",
    category: ["Music", "Nightlife"],
    place: "Location",
    capacity: "30000",
    assistance: "20000",
    price: "$ 650",
    image_src: "./assets/music_concert.jpg",
}

const events = [event_Cinema, event_CostumeParty, event_FoodFair, event_Marathon, event_MuseumTour, event_MusicConcert]
let shortinfo_parameters = ["name", "description", "price"]
let details_event = event_Cinema

if (document.getElementById("CardMainGroup")) {
    for (let i = 0; i < events.length; i++) {
        for (let j = 0; j < shortinfo_parameters.length; j++) {
            document.getElementById(`CardMain-${events[i].name.replace(" ", "")}-${shortinfo_parameters[j]}`).innerHTML = events[i][shortinfo_parameters[j]];
        }
    }
}

if (document.getElementById("CardMainDetails")) {
    document.getElementById("CardMainDetailsCard").innerHTML = `
    <h5 class="card-title fs-2 m-4" id="CardMainDetails-name">${details_event.name}</h5>
    <p class="card-text mx-4" id="CardMainDetails-date">Date: ${details_event.date}</p>
    <p class="card-text mx-4" id="CardMainDetails-description">Description: ${details_event.description}</p>
    <p class="card-text mx-4" id="CardMainDetails-category">Category: ${details_event.category}</p>
    <p class="card-text mx-4" id="CardMainDetails-place">Place: ${details_event.place}</p>
    <p class="card-text mx-4" id="CardMainDetails-capacity">Capacity: ${details_event.capacity}</p>
    <p class="card-text mx-4" id="CardMainDetails-assistance">Assistance or estimate: ${details_event.assistance}</p>
    <p class="card-text mb-4 mx-4" id="CardMainDetails-price">Price: $ ${details_event.price}</p>
    `
}