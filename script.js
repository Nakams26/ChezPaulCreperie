import app from "./firebase.js";
//Import the sdk for the rtd product
import {
  getDatabase,
  ref,
  onValue,
  push,
  update,
  get,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// Initialize Database content using the configured app
const database = getDatabase(app);
//Create a specific reference to the root of my db
//This is the representation of our DB (this is how we hook into the DB and update and interact with it)
const dbRef = ref(database);
const dbGalettes = ref(database, `.galettes`);
console.log(dbGalettes);
const dbCrepes = ref(database, `/crepes`);
const dbGourmandises = ref(database, `/gourmandises`);
const dbDrinks = ref(database, `/drinks`);

// Add a variable for header.
const header = document.querySelector("header");
// Add a variable for the hamburger menu that I put in a div. this is the clickable element
const nav = document.querySelector("nav");

// Add a a variable for button open
const openMenu = document.querySelector(".menuOpen");

// Add a a variable for button close
const closeMenu = document.querySelector(".menuClose");

//Add a variable on drop down menu

const dropDown = document.querySelector(".fa-chevron-down");
const dropUp = document.querySelector(".fa-chevron-up");

//1. Adding a burger menu in the header for the mobile view
//Add a event listener to open menu when the burger menu is clicked

header.addEventListener("click", function (event) {
  console.log(event.target); // If you click the open menu, we display the nav and the close button, we also hide the open button
  if (event.target.classList[0] === "menuOpen") {
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
    nav.style.display = "block";
  }
  // If you click the close menu, we hide the nav and the close button, we also display the open button
  else if (event.target.classList[0] === "menuClose") {
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
    nav.style.display = "none";
  }
});

//2.Adding a dropdown menu when clicking on menu

dropDown.addEventListener("click", function () {
  const newDiv = document.createElement("div");
  newDiv.classList.add("newDiv");
  const newUl = document.createElement("ul");
  const newLi = document.createElement("li");
  newLi.innerHTML = '<a href="#menuGalettes">Galettes</a>';
  const newLi2 = document.createElement("li");
  newLi2.innerHTML = '<a href="#menuCrepes">Crepes</a>';
  const newLi3 = document.createElement("li");
  newLi3.innerHTML = '<a href="#menuGourmandise">Gourmandise</a>';
  const newLi4 = document.createElement("li");
  newLi4.innerHTML = '<a href="#menuDrinks">Drinks</a>';

  dropUp.style.color = "black";
  dropUp.style.zIndex = "10";
  dropDown.style.color = "transparent";
  nav.appendChild(newDiv);
  newDiv.appendChild(newUl);
  newUl.append(newLi, newLi2, newLi3, newLi4);
});

dropUp.addEventListener("click", function () {
  const newDiv = document.querySelector(".newDiv");
  newDiv.remove();
  dropUp.style.color = "transparent";
  dropUp.style.zIndex = "0";
  dropDown.style.color = "black";
 
});
