function init_ContactPage() {

    const theme = localStorage.getItem('theme')

    if (theme == "light") {
        document.body.className = "light-theme"
    }

    const SwitchTheme = document.getElementById("Theme")
    SwitchTheme.addEventListener("click", switch_Theme)
};

function switch_Theme() {

    const theme = localStorage.getItem('theme');
    document.body.className == "" ? document.body.className = "light-theme" : document.body.className = ""
    theme == null ? localStorage.setItem("theme", "light") : localStorage.removeItem('theme');

};

init_ContactPage()