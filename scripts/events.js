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

async function init_EventsPage() {

    try {

        const LoadingScreen = document.getElementById("LoadingScreen")
        
        const theme = localStorage.getItem('theme')

        if (theme == "light") {
            document.body.className = "light-theme"
        }
        
        const data = await obtain_EventsData()

        let EventsGroup = []
        let CategoriesGroup = []
        let CategoriesHTMLSection = ""
        let PageTitle = document.title

        data.events.forEach(event => {

            if (PageTitle == "Home" || ((PageTitle == "Past Events") ? event.date < data.currentDate : event.date >= data.currentDate)) {

                if (!CategoriesGroup.includes(event.category)) {

                    CategoriesGroup.push(event.category)

                    CategoriesHTMLSection += `
                        <span class="categories-category">
                            <input type="checkbox" class="btn-check" id="btncheck-${event._id}" value="${event.category}">
                            <label class="btn categories-category" for="btncheck-${event._id}">${event.category}</label>
                        </span>
                    `;

                };

                EventsGroup.push(event)

            };

        });

        document.getElementById("CategoriesButtons").innerHTML = CategoriesHTMLSection

        const CheckboxGroup = [...document.querySelectorAll("input[class = btn-check")]
        const SearchInput = document.getElementById("SearchInput")
        const SwitchTheme = document.getElementById("Theme")

        CheckboxGroup.forEach(checkbox => {

            checkbox.addEventListener("click", update_EventsShown)

        });

        SearchInput.addEventListener("keyup", update_EventsShown)
        SwitchTheme.addEventListener("click", switch_Theme)

        LoadingScreen.style.display = "none"

        return EventsGroup

    } catch (error) {

        console.log(error);

    };

};

function update_EventsShown() {

    let EventsHTMLSection = "";
    let CheckboxGroupChecked = [...document.querySelectorAll("input[class = btn-check]:checked")].map(category => category.value);
    let SearchInputValue = document.getElementById("SearchInput").value.toLowerCase();

    EventsAvailable.forEach(event => {

        if ((CheckboxGroupChecked.length == 0 || CheckboxGroupChecked.includes(event.category)) && (SearchInputValue.length == 0 || (event.name.toLowerCase()).includes(SearchInputValue))) {

            EventsHTMLSection += `
                <li class="events-cards-item">
                    <div class="card">
                        <div class="card-image">
                            <img src="${event.image}" alt="${event.name} Event Image">
                            <span class="card-price"><span>$</span>${event.price}</span>
                            <a href="./details.html?id=${event._id}" class="card-see-more">See more</a>
                        </div>
                        <div class="card-content">
                            <h2 class="card-title">${event.name}</h2>
                            <div class="card-text">
                                <p>${event.description}</p>
                            </div>
                        </div>
                    </div>
                </li>
            `;

        };

    });

    if (EventsHTMLSection == "") {

        const toast = document.getElementById("Toast");
        toast.className = "show";
        setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);

    };

    document.getElementById("Events").innerHTML = EventsHTMLSection

};

function switch_Theme() {

    const theme = localStorage.getItem('theme');
    document.body.className == "" ? document.body.className = "light-theme" : document.body.className = ""
    theme == null ? localStorage.setItem("theme", "light") : localStorage.removeItem('theme');
    
};

const EventsAvailable = await init_EventsPage()

update_EventsShown()