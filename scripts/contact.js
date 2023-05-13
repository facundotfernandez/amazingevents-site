function init_ContactPage() {

    const theme = sessionStorage.getItem('theme')

    if (theme == "light") {
        document.body.className = "light-theme"
    }

    const SwitchTheme = document.getElementById("Theme")
    SwitchTheme.addEventListener("click", switch_Theme)
};

function switch_Theme() {

    const theme = sessionStorage.getItem('theme');
    document.body.className == "" ? document.body.className = "light-theme" : document.body.className = ""
    theme == null ? sessionStorage.setItem("theme", "light") : sessionStorage.removeItem('theme');

};

init_ContactPage()