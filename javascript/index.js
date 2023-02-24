const categories = ["Food & Drink", "Kids & Family", "Music", "Nightlife", "Sports"]

const event_Cinema = {
    name: "Cinema",
    date: "Date",
    description: "Gather your family and friends and experience the latest alternative entertainment on the 'Big Screen'",
    category: ["Kids & Family"],
    place: "Location",
    capacity: "Max Capacity",
    assistance: "Average Assistance",
    price: "400",
}

const event_CostumeParty = {
    name: "Costume Party",
    date: "Date",
    description: "Placeholder",
    category: ["Nightlife"],
    place: "Location",
    capacity: "Max Capacity",
    assistance: "Average Assistance",
    price: "500",
}

const event_FoodFair = {
    name: "Food Fair",
    date: "Date",
    description: "Placeholder",
    category: ["Food & Drink", "Kids & Family"],
    place: "Location",
    capacity: "Max Capacity",
    assistance: "Average Assistance",
    price: "250",
}

const event_Marathon = {
    name: "Marathon",
    date: "Date",
    description: "Placeholder",
    category: ["Sports"],
    place: "Location",
    capacity: "Max Capacity",
    assistance: "Average Assistance",
    price: "200",
}

const event_MuseumTour = {
    name: "Museum Tour",
    date: "Date",
    description: "Placeholder",
    category: ["Kids & Family", "Nightlife"],
    place: "Location",
    capacity: "Max Capacity",
    assistance: "Average Assistance",
    price: "350",
}

const event_MusicConcert = {
    name: "Music Concert",
    date: "Date",
    description: "Placeholder",
    category: ["Music", "Nightlife"],
    place: "Location",
    capacity: "Max Capacity",
    assistance: "Average Assistance",
    price: "650",
}

const events = [event_Cinema, event_CostumeParty, event_FoodFair, event_Marathon, event_MuseumTour, event_MusicConcert]
const shortinfo = ["name", "descripcion", "price"]

for (let i = 0; i < events.length; i++) {
    document.getElementById("CardMain-" + events[i].name.replace(' ','') + "-name").innerHTML = events[i].name
    document.getElementById("CardMain-" + events[i].name.replace(' ','') + "-description").innerHTML = events[i].description
    document.getElementById("CardMain-" + events[i].name.replace(' ','') + "-price").innerHTML = "$ " + events[i].price
}