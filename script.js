//1. Adding a burger menu in the header for the mobile view

// Add a variable for header.
const header = document.querySelector("header");
// Add a variable for the hamburger menu that I put in a div. this is the clickable element
const nav = document.querySelector("nav");

// Add a a variable for button open
const openMenu = document.querySelector(".menuOpen");

// Add a a variable for button close
const closeMenu = document.querySelector(".menuClose");

//Add a event listener to open menu when the burger menu is clicked

header.addEventListener("click", function (event) {
  console.log(event.target)
;  // If you click the open menu, we display the nav and the close button, we also hide the open button
  if (event.target.classList[0]=== "menuOpen") {
  
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
    nav.style.display="block";
  
  }
  // If you click the close menu, we hide the nav and the close button, we also display the open button
  else if (event.target.classList[0]=== "menuClose") {
  
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
    nav.style.display = "none";
  }
});