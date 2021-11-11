var homeView = document.querySelector(".home-view");
var classicView = document.querySelector(".classic-game-view");
var hardView = document.querySelector(".hard-game-view");
var homeViewButtons = document.querySelector(".buttons");
var classicButton = document.querySelector(".easy-game");
var hardButton = document.querySelector(".hard-game");
var bulbaButton = document.querySelector(".bulba");
var charmButton = document.querySelector(".charm");
var squirtButton = document.querySelector(".squirt");
var pikaButton = document.querySelector(".pikachu");
var sandButton = document.querySelector(".sand");
var normalPokesPage = document.querySelector(".normal-game-view");
var subHeader = document.querySelector(".sub-header");

classicButton.addEventListener("click", classicMode);
hardButton.addEventListener("click", hardMode);
bulbaButton.addEventListener("click", makeSelection);
charmButton.addEventListener("click", makeSelection);
squirtButton.addEventListener("click", makeSelection);
pikaButton.addEventListener("click", makeSelection);
sandButton.addEventListener("click", makeSelection);

function classicMode() {
  addHidden(homeViewButtons);
  removeHidden(normalPokesPage);
  subHeader.innerText = "Choose your pokemon!";
  console.log("clicked");
}

function hardMode() {
  addHidden(homeViewButtons);
  removeHidden(hardView);
  subHeader.innerText = "Choose your pokemon!";
  console.log("clicked");
}

function addHidden(element) {
  element.classList.add("hidden");
}

function removeHidden(element) {
  element.classList.remove("hidden");
}

function makeSelection(element) {
  console.log(`You have selected ${element.target}`);
}

// function computerPick(array){
//   return Math.floor(Math.random() * array.length)
// }
