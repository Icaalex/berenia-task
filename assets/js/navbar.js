function toggleMenu() {
    let menu = document.getElementById("menu");
    let icon = document.getElementById("icon");

    if (menu.style.display !== "block") {
        menu.style.display = "block";
        icon.innerHTML = '<i class="fa fa-times" aria-hidden="true">'
    }
    else {
        menu.style.display = "none"
        icon.innerHTML = '<i class="fa fa-bars" aria-hidden="true">';
    }
}