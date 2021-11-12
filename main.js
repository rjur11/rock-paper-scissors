// Query Selectors
var homeView = document.querySelector(".home-view");
var classicView = document.querySelector(".classic-game-view");
var hardView = document.querySelector(".hard-game-view");
var homeViewButtons = document.querySelector(".buttons");
var classicButton = document.querySelector(".easy-game");
var hardButton = document.querySelector(".hard-game");
var bulbaButtons = document.querySelectorAll(".bulba");
var charmButtons = document.querySelectorAll(".charm");
var squirtButtons = document.querySelectorAll(".squirt");
var pikaButton = document.querySelector(".pikachu");
var sandButton = document.querySelector(".sand");
var normalPokesPage = document.querySelector(".normal-game-view");
var subHeader = document.querySelector(".sub-header");
var selectionPage = document.querySelector(".selection-view");
var playerPick = document.querySelector(".selectedImg1");

// Event Listeners
classicButton.addEventListener("click", classicMode);
hardButton.addEventListener("click", hardMode);
bulbaButtons.forEach(listenForSelection);
charmButtons.forEach(listenForSelection);
squirtButtons.forEach(listenForSelection);
listenForSelection(pikaButton);
listenForSelection(sandButton);

function listenForSelection(element) {
  element.addEventListener("click", makeSelection);
}
// Global Variables
// var pokemonOptions = {
//   bulba: {button: bulbaButton, image: "assets/1.png"},
//   charm: {button: charmButton, image: "assets/4.png"},
//   squirt: {button: squirtButton, image: "assets/7.png"},
//   pikachu: {button: pikaButton, image: "assets/25.png"},
//   sand: {button: sandButton, image: "assets/27.png"}
// };
var easyModeArray = ["bulbasaur", "charmander", "squirtle"];
var hardModeArray = [
  "bulbasaur",
  "charmander",
  "squirtle",
  "pikachu",
  "sandshrew"
];

var gameMode = "home";
var playerWins = 0;
var computerWins = 0;

function playGame(player, computer) {}

// Functions

function computerPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function makeSelection(event) {
  // console.log(`You have selected ${element.target}`);
  // addHidden(normalPokesPage);
  // removeHidden(selectionPage);
  // setSelections();
  var playerSelection = event.target.dataset.pokemon;
  if (gameMode === "classic") {
    var computerSelection = computerPick(easyModeArray);
  } else {
    var computerSelection = computerPick(hardModeArray);
  }
  var winner = playGame(playerSelection, computerSelection);
  console.log(playerSelection, computerSelection, winner);
}
function classicMode() {
  addHidden(homeViewButtons);
  removeHidden(normalPokesPage);
  subHeader.innerText = "Choose your pokemon!";
  gameMode = "classic";
  console.log("clicked");
}

function hardMode() {
  addHidden(homeViewButtons);
  removeHidden(hardView);
  subHeader.innerText = "Choose your pokemon!";
  gameMode = "hard";
  console.log("clicked");
}

function addHidden(element) {
  element.classList.add("hidden");
}

function removeHidden(element) {
  element.classList.remove("hidden");
}

// setSelections(button) {
//
// }
