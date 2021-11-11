// Query Selectors
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
var selectionPage = document.querySelector(".selection-view");
var playerPick = document.querySelector(".selectedImg1");
var computerPick = document.querySelector(".selectedImg2");

// Event Listeners
classicButton.addEventListener("click", classicMode);
hardButton.addEventListener("click", hardMode);
bulbaButton.addEventListener("click", makeSelection);
charmButton.addEventListener("click", makeSelection);
squirtButton.addEventListener("click", makeSelection);
pikaButton.addEventListener("click", makeSelection);
sandButton.addEventListener("click", makeSelection);

// Global Variables
// var pokemonOptions = {
//   bulba: {button: bulbaButton, image: "assets/1.png"},
//   charm: {button: charmButton, image: "assets/4.png"},
//   squirt: {button: squirtButton, image: "assets/7.png"},
//   pikachu: {button: pikaButton, image: "assets/25.png"},
//   sand: {button: sandButton, image: "assets/27.png"}
// };

var gameMode = "home";
var playerWins = 0;
var computerWins = 0;

// function playGame(player, computer){
//   switch (player) {
//     case "bulbasaur":
//     case "charmander":
//     case "squirtle":
//     case "pikachu":
//     case "sandshrew":
//   }
// }

// Functions
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
  addHidden(normalPokesPage);
  removeHidden(selectionPage);
  setSelections();
}

// setSelections(button) {
//
// }

// function computerPick(array){
//   return Math.floor(Math.random() * array.length)
// }
