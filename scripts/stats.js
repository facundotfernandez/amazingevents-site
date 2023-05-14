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

async function init_StatsPage() {

    try {

        const LoadingScreen = document.getElementById("LoadingScreen")

        const theme = sessionStorage.getItem('theme')

        if (theme == "light") {
            document.body.className = "light-theme"
        }

        const data = await obtain_EventsData()

        let EventStatsHTMLSection = `
        <tr class="stats-column-header">
            <td>Event with the highest percentage of attendance</td>
            <td>Event with the lowest percentage of attendance</td>
            <td>Event with larger capacity</td>
        </tr>
        `
        let UpcomingStatsHTMLSection = `
        <tr class="stats-column-header">
            <td>Categories</td>
            <td>Revenues</td>
            <td>Percentage of attendance</td>
        </tr>`
        let PastStatsHTMLSection = `
        <tr class="stats-column-header">
            <td>Categories</td>
            <td>Revenues</td>
            <td>Percentage of attendance</td>
        </tr>`
        let UpcomingEventsStatsByCat = {}
        let PastEventsStatsByCat = {}
        let MaxAttendanceInfo = { "eventname": "", "attendance": -Infinity }
        let MinAttendanceInfo = { "eventname": "", "attendance": +Infinity }
        let MaxCapacityInfo = { "eventname": "", "capacity": -Infinity }

        data.events.forEach(event => {

            if (event.hasOwnProperty("assistance")) {

                let attendance = (event.assistance * 100) / event.capacity
                let revenue = event.assistance * event.price

                if (attendance >= MaxAttendanceInfo["attendance"]) {

                    MaxAttendanceInfo["eventname"] = event.name
                    MaxAttendanceInfo["attendance"] = attendance.toFixed(2)

                };

                if (attendance <= MinAttendanceInfo["attendance"]) {

                    MinAttendanceInfo["eventname"] = event.name
                    MinAttendanceInfo["attendance"] = attendance.toFixed(2)

                };



                if (PastEventsStatsByCat.hasOwnProperty(event.category)) {

                    PastEventsStatsByCat[event.category]["revenue"] += revenue
                    PastEventsStatsByCat[event.category]["attendance"] += attendance
                    PastEventsStatsByCat[event.category]["quantity"] += 1

                } else {

                    PastEventsStatsByCat[event.category] = { "revenue": revenue, "attendance": attendance, "quantity": 1 }

                };

            };

            if (event.hasOwnProperty("estimate")) {

                let attendance = ((event.estimate * 100) / event.capacity)
                let revenue = event.estimate * event.price

                if (UpcomingEventsStatsByCat.hasOwnProperty(event.category)) {

                    UpcomingEventsStatsByCat[event.category]["revenue"] += revenue
                    UpcomingEventsStatsByCat[event.category]["attendance"] += attendance
                    UpcomingEventsStatsByCat[event.category]["quantity"] += 1

                } else {

                    UpcomingEventsStatsByCat[event.category] = { "revenue": revenue, "attendance": attendance, "quantity": 1 }

                };

            };

            if (event.capacity > MaxCapacityInfo["capacity"]) {

                MaxCapacityInfo["eventname"] = event.name
                MaxCapacityInfo["capacity"] = event.capacity

            };

            const SwitchTheme = document.getElementById("Theme")
            SwitchTheme.addEventListener("click", switch_Theme)

        });

        Object.keys(UpcomingEventsStatsByCat).forEach(category => {

            UpcomingStatsHTMLSection += `
            <tr>
                <td>${category}</td>
                <td>${UpcomingEventsStatsByCat[category]["revenue"]}</td>
                <td>${(UpcomingEventsStatsByCat[category]["attendance"] / UpcomingEventsStatsByCat[category]["quantity"]).toFixed(2)} %</td>
            </tr>
            `;

        });

        Object.keys(PastEventsStatsByCat).forEach(category => {

            PastStatsHTMLSection += `
            <tr>
                <td>${category}</td>
                <td>${PastEventsStatsByCat[category]["revenue"]}</td>
                <td>${(PastEventsStatsByCat[category]["attendance"] / PastEventsStatsByCat[category]["quantity"]).toFixed(2)} %</td>
            </tr>
            `;

        });

        EventStatsHTMLSection += `
        <tr>
            <td>${MaxAttendanceInfo["eventname"]} ${MaxAttendanceInfo["attendance"]} %</td>
            <td>${MinAttendanceInfo["eventname"]} ${MinAttendanceInfo["attendance"]} %</td>
            <td>${MaxCapacityInfo["eventname"]} ${MaxCapacityInfo["capacity"]}</td>
        </tr>
        `;

        document.getElementById("EventStatsMainTable-Body").innerHTML = EventStatsHTMLSection
        document.getElementById("UpcomingStatsMainTable-Body").innerHTML = UpcomingStatsHTMLSection
        document.getElementById("PastStatsMainTable-Body").innerHTML = PastStatsHTMLSection

        LoadingScreen.style.display = "none"

    } catch (error) {

        console.log(error);

    };

};

function switch_Theme() {

    const theme = sessionStorage.getItem('theme');
    document.body.className == "" ? document.body.className = "light-theme" : document.body.className = ""
    theme == null ? sessionStorage.setItem("theme", "light") : sessionStorage.removeItem('theme');

};

init_StatsPage()