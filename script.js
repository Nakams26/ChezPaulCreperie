//1. Adding a burger menu in the header for the mobile view

// Add a variable for li that  I need to display when clicking on the menu
const header = document.querySelector("header");
// Add a variable for the hamburger menu that I put in a div. this is the clickable element
const nav = document.querySelector("nav");

// Add a a variable for button open
const openMenu = document.querySelector(".menuOpen");

// Add a a variable for button close
const closeMenu = document.querySelector(".menuClose");

//Add a event listener to open menu when the burger menu is clicked

header.addEventListener("click", function (event) {
  // If when you click the burger button, the menu doesn't contain showMenu as class, then I add the class (The class allow us to display the menu from the right with a transform translate X).  I also in the same time hide the open icon and display the close icon
  if (event.target.classList[2]=== "menuOpen") {
  
    closeMenu.style.color = "black";
    openMenu.style.display = "none";
    nav.style.display = "block";
  }
  // If when you click the burger button, the menu  already contain showMenu as class, then I remove the class. This will hide the menu
  else if (event.target.classList[2]=== "menuClose") {
  

    //I also in the same time show the  open menu icon and hide the close menu
    closeMenu.style.color = "transparent";
    openMenu.style.display = "block";
    nav.style.display = "none";
  }
});