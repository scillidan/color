// credit krista @ cosl
const userPrefers = getComputedStyle(document.documentElement).getPropertyValue("content");

if (theme === "dark") {
    document.getElementById("theme-toggle").innerHTML = "<img src='./asset/sun.png'>";
} else if (theme === "light") {
    document.getElementById("theme-toggle").innerHTML = "<img src='./asset/sun-blur.png'>";
} else if (userPrefers === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    window.localStorage.setItem("theme", "dark");
    document.getElementById("theme-toggle").innerHTML = "<img src='./asset/sun.png'>";
} else {
    document.documentElement.setAttribute("data-theme", "light");
    window.localStorage.setItem("theme", "light");
    document.getElementById("theme-toggle").innerHTML = "<img src='./asset/sun-blur.png'>";
}

function modeSwitcher() {
    let currentMode = document.documentElement.getAttribute("data-theme");
    if (currentMode === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        window.localStorage.setItem("theme", "light");
        document.getElementById("theme-toggle").innerHTML = "<img src='./asset/sun-blur.png'>";
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
        document.getElementById("theme-toggle").innerHTML = "<img src='./asset/sun.png'>";
    }
}