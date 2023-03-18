import { data as localdata } from "./data.js";
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

        const data = await obtain_EventsData()
        console.log(data);

        let UpcomingStatsHTMLSection = `
        <tr class="text-bg-secondary">
            <td>Categories</td>
            <td>Revenues</td>
            <td>Percentage of attendance</td>
        </tr>`
        let PastStatsHTMLSection = `
        <tr class="text-bg-secondary">
            <td>Categories</td>
            <td>Revenues</td>
            <td>Percentage of attendance</td>
        </tr>`
        let UpcomingEventsStatsByCat = {}
        let PastEventsStatsByCat = {}
        let MaxAttendanceInfo = ["", -Infinity]
        let MinAttendanceInfo = ["", +Infinity]
        let MaxCapacityInfo = ["", -Infinity]

        data.events.forEach(event => {

            if (event.hasOwnProperty("assistance")) {

                let attendance = (event.assistance * 100) / event.capacity
                let revenue = event.assistance * event.price

                if (attendance >= MaxAttendanceInfo[1]) {

                    MaxAttendanceInfo = [event.name, attendance.toFixed(2)]

                };

                if (attendance <= MinAttendanceInfo[1]) {

                    MinAttendanceInfo = [event.name, attendance.toFixed(2)]

                };

                

                if (PastEventsStatsByCat.hasOwnProperty(event.category)) {

                    PastEventsStatsByCat[event.category][0] += revenue
                    PastEventsStatsByCat[event.category][1] += attendance
                    PastEventsStatsByCat[event.category][2] += 1

                } else {

                    PastEventsStatsByCat[event.category] = [revenue, attendance, 1]

                };

            };

            if (event.hasOwnProperty("estimate")) {

                let attendance = ((event.estimate * 100) / event.capacity)
                let revenue = event.estimate * event.price

                if (UpcomingEventsStatsByCat.hasOwnProperty(event.category)) {

                    UpcomingEventsStatsByCat[event.category][0] += revenue
                    UpcomingEventsStatsByCat[event.category][1] += attendance
                    UpcomingEventsStatsByCat[event.category][2] += 1

                } else {

                    UpcomingEventsStatsByCat[event.category] = [revenue, attendance, 1]

                };

            };

            if (event.capacity > MaxCapacityInfo[1]) {

                MaxCapacityInfo = [event.name, event.capacity]

            };

        });
        
        Object.keys(UpcomingEventsStatsByCat).forEach(category => {

            UpcomingStatsHTMLSection += `
            <tr>
                <td>${category}</td>
                <td>${UpcomingEventsStatsByCat[category][0]}</td>
                <td>${(UpcomingEventsStatsByCat[category][1]/UpcomingEventsStatsByCat[category][2]).toFixed(2) + " %"}</td>
            </tr>
            `

        });

        Object.keys(PastEventsStatsByCat).forEach(category => {

            PastStatsHTMLSection += `
            <tr>
                <td>${category}</td>
                <td>${PastEventsStatsByCat[category][0]}</td>
                <td>${(PastEventsStatsByCat[category][1]/PastEventsStatsByCat[category][2]).toFixed(2) + " %"}</td>
            </tr>
            `

        });

        document.getElementById("EventStatsMainTable-Body").innerHTML = `
        <tr class="text-bg-secondary">
            <td>Event with the highest percentage of attendance</td>
            <td>Event with the lowest percentage of attendance</td>
            <td>Event with larger capacity</td>
        </tr>
        <tr>
            <td>${MaxAttendanceInfo.join(" ") + " %"}</td>
            <td>${MinAttendanceInfo.join(" ") + " %"}</td>
            <td>${MaxCapacityInfo.join(" ")}</td>
        </tr>
        `
        document.getElementById("UpcomingStatsMainTable-Body").innerHTML = UpcomingStatsHTMLSection
        document.getElementById("PastStatsMainTable-Body").innerHTML = PastStatsHTMLSection

    } catch (error) {

        console.log(error);

    };

};

init_StatsPage()