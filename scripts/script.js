let menu = document.querySelector(".menu");

let overlay = document.querySelector(".overlay");

menuIcon.addEventListener("click", displayMenu);

/* This function shows and hides the menu in the mobile version. Also, it changes the menu icon between open and closet states */

function displayMenu() {
  if (window.getComputedStyle(menu).display == "none") {
    menu.style.display = "flex";
    menuIcon.src = "images/icon-close-menu.svg";
    menuIcon.style.position = "fixed";
    menuIcon.style.right = "0";
    menuIcon.style.marginRight = "1rem";
    overlay.style.display = "block";
  } else {
    menu.style.display = "none";
    menuIcon.src = "images/icon-menu.svg";
    menuIcon.style.position = "unset";
    menuIcon.style.right = "unset";
    menuIcon.style.marginRight = "unset";
    overlay.style.display = "none";
  }
}

/* Variables definitions */

let menuExpandables = document.querySelectorAll(".menu__expandable");

let innerMenus = document.querySelectorAll(".menu__innerLevel");

let arrows = document.querySelectorAll(".arrowIcon");

/* The forEach will go through both menuExpandables elementes and add a click event to them. Once clicked it will call the function toggleMenu */

menuExpandables.forEach((menuExpandable, index) => {
  menuExpandable.addEventListener("click", () => {
    toggleMenu(index);
  });
});

/* The first part of the function will run throught all of the inner menus (with the exception of the one I just clicked at) and close them, to make sure only one submenu is open at a given time */

function toggleMenu(i) {
  for (let j = 0; j < innerMenus.length; j++) {
    if (j != i) {
      innerMenus[j].style.display = "none";
      arrows[j].src = "images/icon-arrow-down.svg";
    }
  }

  if (window.getComputedStyle(innerMenus[i]).display == "none") {
    innerMenus[i].style.display = "block";
    arrows[i].src = "images/icon-arrow-up.svg";
  } else {
    innerMenus[i].style.display = "none";
    arrows[i].src = "images/icon-arrow-down.svg";
  }
}
