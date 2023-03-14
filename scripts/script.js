// ----------------------Start of firebase code------------------------//

import app from "./firebase.js";
//Import the sdk for the rtd product
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

// Initialize Database content using the configured app
const database = getDatabase(app);
//Create a specific reference to the root of my db
//This is the representation of our DB (this is how we hook into the DB and update and interact with it)
const dbRef = ref(database);
const dbGalettes = ref(database, `/galettes`);
const dbCrepes = ref(database, `/crepes`);
const dbGourmandises = ref(database, `/gourmandises`);
const dbDrinks = ref(database, `/drinks`);
//Adding uls in varaviables
const ulGalette = document.querySelector(".flexGalette");
const ulCrepes = document.querySelector(".flexCrepes");
const ulGourmandises = document.querySelector(".flexGourmandise");
const ulDrinks = document.querySelector(".drinks");

// Managing galettes database
onValue(dbGalettes, function (data) {
  if (data.exists()) {
    ulGalette.innerHTML = "";
    const newGalettes = data.val();
    for (let key in newGalettes) {
      // adding data in variables
      const name = newGalettes[key].name;
      const price = newGalettes[key].price;
      const text1 = newGalettes[key].text;
      const text2 = newGalettes[key].text2;
      const text3 = newGalettes[key].text3;
      const text4 = newGalettes[key].text4;
      const text5 = newGalettes[key].text5;
      const text6 = newGalettes[key].text6;

      //creating every element
      const nameItem = document.createElement("h4");
      nameItem.textContent = name;

      const listItem = document.createElement("li");
      listItem.classList.add("galette");

      const priceItem = document.createElement("p");
      priceItem.classList.add("price");
      priceItem.textContent = price;

      const firstText = document.createElement("p");
      firstText.textContent = text1;

      const secondText = document.createElement("p");
      secondText.textContent = text2;

      const thirdtext = document.createElement("p");
      thirdtext.textContent = text3;

      const fourthText = document.createElement("p");
      fourthText.textContent = text4;

      const fifthtext = document.createElement("p");
      fifthtext.textContent = text5;

      const sixthtext = document.createElement("p");
      sixthtext.textContent = text6;

      //Append element to the page
      listItem.append(
        nameItem,
        priceItem,
        firstText,
        secondText,
        thirdtext,
        fourthText,
        fifthtext,
        sixthtext
      );

      ulGalette.appendChild(listItem);
    }
  }
});

// Managing crepes database
onValue(dbCrepes, function (data) {
  if (data.exists()) {
    ulCrepes.innerHTML = "";
    const newCrepes = data.val();
    for (let key in newCrepes) {
      // adding data in variables
      const name = newCrepes[key].name;
      const price = newCrepes[key].price;
      const text1 = newCrepes[key].text;
      const text2 = newCrepes[key].text2;
      const text3 = newCrepes[key].text3;

      //creating every element
      const nameItem = document.createElement("h4");
      nameItem.textContent = name;

      const listItem = document.createElement("li");
      listItem.classList.add("crepe");

      const priceItem = document.createElement("p");
      priceItem.classList.add("price");
      priceItem.textContent = price;

      const firstText = document.createElement("p");
      firstText.textContent = text1;

      const secondText = document.createElement("p");
      secondText.textContent = text2;

      const thirdtext = document.createElement("p");
      thirdtext.textContent = text3;

      //Append element to the page
      listItem.append(nameItem, priceItem, firstText, secondText, thirdtext);
      ulCrepes.appendChild(listItem);
    }
  }
});

// Managing gourmandises database
onValue(dbGourmandises, function (data) {
  if (data.exists()) {
    ulGourmandises.innerHTML = "";
    const newGourmandises = data.val();
    for (let key in newGourmandises) {
      // adding data in variables
      const name = newGourmandises[key].name;
      const price = newGourmandises[key].price;
      const text1 = newGourmandises[key].text;
      const text2 = newGourmandises[key].text2;
      const text3 = newGourmandises[key].text3;
      //creating every element
      const nameItem = document.createElement("h4");
      nameItem.textContent = name;

      const listItem = document.createElement("li");
      listItem.classList.add("gourmandise");

      const priceItem = document.createElement("p");
      priceItem.classList.add("price2");
      priceItem.textContent = price;

      const firstText = document.createElement("p");
      firstText.textContent = text1;

      const secondText = document.createElement("p");
      secondText.textContent = text2;

      const thirdtext = document.createElement("p");
      thirdtext.textContent = text3;

      //Append element to the page
      listItem.append(nameItem, priceItem, firstText, secondText, thirdtext);
      ulGourmandises.appendChild(listItem);
    }
  }
});

// Managing drinks database
onValue(dbDrinks, function (data) {
  if (data.exists()) {
    ulDrinks.innerHTML = "";
    const newDrinks = data.val();
    for (let key in newDrinks) {
      // adding data in variables
      const name = newDrinks[key].name;
      const price = newDrinks[key].price;
      const text1 = newDrinks[key].text;
      const text2 = newDrinks[key].text2;
      const text3 = newDrinks[key].text3;
      const text4 = newDrinks[key].text4;
      const text5 = newDrinks[key].text5;
      const text6 = newDrinks[key].text6;

      //creating every element
      const nameItem = document.createElement("h4");
      nameItem.textContent = name;

      const listItem = document.createElement("li");
      listItem.classList.add("pop");

      const priceItem = document.createElement("p");
      priceItem.classList.add("price2");
      priceItem.textContent = price;

      const firstText = document.createElement("p");
      firstText.textContent = text1;

      const secondText = document.createElement("p");
      secondText.textContent = text2;

      const thirdtext = document.createElement("p");
      thirdtext.textContent = text3;

      const fourthText = document.createElement("p");
      fourthText.textContent = text4;

      const fifthtext = document.createElement("p");
      fifthtext.textContent = text5;

      const sixthtext = document.createElement("p");
      sixthtext.textContent = text6;

      //Append element to the page
      listItem.append(
        nameItem,
        priceItem,
        firstText,
        secondText,
        thirdtext,
        fourthText,
        fifthtext,
        sixthtext
      );

      ulDrinks.appendChild(listItem);
    }
  }
});
// ----------------------end of firebase code------------------------//

// ----------------------Burger menu------------------------//
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
//------------------------------End of burger menu---------------------//

//-----------------------------Dropdown menu in nav--------------------//
//Event listener when click on the dropdow icon
dropDown.addEventListener("click", function () {
  //creatig every element
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

  //Hiding displaying icons
  dropUp.style.color = "black";
  dropUp.style.zIndex = "10";
  dropDown.style.color = "transparent";

  //append new elements
  nav.appendChild(newDiv);
  newDiv.appendChild(newUl);
  newUl.append(newLi, newLi2, newLi3, newLi4);
});

//Event listener when click on the dropup icon
dropUp.addEventListener("click", function () {
  const newDiv = document.querySelector(".newDiv");
  //removing the new div
  newDiv.remove();
  //Hiding displaying icons
  dropUp.style.color = "transparent";
  dropUp.style.zIndex = "0";
  dropDown.style.color = "black";
});

//-----------------------------end ofDropdown menu in nav--------------------//

//-----------------------------Displaying phone number for order--------------------//

const orderSection = document.querySelector(".order");
const pPhone = document.querySelector(".pPhone");

//Event listener when click on the order section
orderSection.addEventListener("click", (event) => {
  // If the target is the phone icon>> I display the phone number
  if (event.target.classList[1] === "fa-square-phone") {
    pPhone.style.display = "block";
  } else {
    pPhone.style.display = "none";
  }
});
//-----------------------------DEnd of script--------------------//