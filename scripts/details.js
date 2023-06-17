import { data as localdata } from "./localdata.js";
const ApiURL = "https://mindhub-xj03.onrender.com/api/amazing"

async function obtain_EventsData() {

    try {

        const response = await fetch(ApiURL)
        const externaldata = await response.json()
        return externaldata

    } catch (error) {

        console.log("API couldn't be reached, local data will be used instead");
        return localdata

    };

};

async function init_DetailsPage() {

    try {

        const LoadingScreen = document.getElementById("LoadingScreen")

        const theme = localStorage.getItem('theme')

        if (theme == "light") {
            document.body.className = "light-theme"
        }

        const data = await obtain_EventsData()

        const event_id = new URLSearchParams(location.search).get("id")
        const event = data.events.find(event => event._id == event_id)

        EventDetails.innerHTML = `
        <div class="card">
            <div class="card-image details">
                <img src="${event.image}" alt="${event.name} Event Image">
                <a href="./contact.html" class="card-contact details">Buy your ticket</a>
            </div>
            <div class="card-content details">
                <h2 class="card-title details">${event.name}</h2>
                <div class="card-text details">
                    <p>${event.description}</p>
                    <p>Date: ${event.date}</p>
                    <p>Category: ${event.category}</p>
                    <p>Place: ${event.place}</p>
                    <p>Capacity: ${event.capacity}</p>
                    <p>Assistance: ${(event.hasOwnProperty("assistance")) ? event.assistance : event.estimate}</p>
                    <p>Price: $ ${event.price}</p>
                </div>
            </div>
        </div>
        `;

        const SwitchTheme = document.getElementById("Theme")
        SwitchTheme.addEventListener("click", switch_Theme)

        LoadingScreen.style.display = "none"

    } catch (error) {

        console.log(error);

    };

};

function switch_Theme() {

    const theme = localStorage.getItem('theme');
    document.body.className == "" ? document.body.className = "light-theme" : document.body.className = ""
    theme == null ? localStorage.setItem("theme", "light") : localStorage.removeItem('theme');
    
};

init_DetailsPage()