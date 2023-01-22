let menu = document.querySelector(".menu")

menuIcon.addEventListener("click",displayMenu)

function displayMenu () {
    if (window.getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
}