// Query Selectors
var homeView = document.querySelector(".home-view");
var hardView = document.querySelector(".hard-game-view");
var homeViewButtons = document.querySelector(".buttons");
var classicButton = document.querySelector(".easy-game");
var hardButton = document.querySelector(".hard-game");
var bulbaButtons = document.querySelectorAll(".bulba");
var charmButtons = document.querySelectorAll(".charm");
var squirtButtons = document.querySelectorAll(".squirt");
var pikaButton = document.querySelector(".pikachu");
var sandButton = document.querySelector(".sand");
var classicView = document.querySelector(".normal-game-view");
var subHeader = document.querySelector(".sub-header");
var selectionView = document.querySelector(".selection-view");
var playerPick = document.querySelector(".selectedImg1");
var playerScore = document.querySelector(".player-score");
var computerScore = document.querySelector(".computer-score");

// Event Listeners
classicButton.addEventListener("click", onClassicClick);
hardButton.addEventListener("click", onHardClick);
bulbaButtons.forEach(listenForSelection);
charmButtons.forEach(listenForSelection);
squirtButtons.forEach(listenForSelection);
listenForSelection(pikaButton);
listenForSelection(sandButton);
window.addEventListener("load", windowLoad);

function listenForSelection(element) {
  element.addEventListener("click", makeSelection);
}
// Global Variables
var game;
var easyModeArray = ["bulbasaur", "charmander", "squirtle"];
var hardModeArray = [
  "bulbasaur",
  "charmander",
  "squirtle",
  "pikachu",
  "sandshrew"
];

// Functions
function windowLoad() {
  var player = new Player("Pokemon Trainer", "assets/red1.png");
  var computer = new Player("Rival", "assets/blue2.png");
  game = new Game(player, computer);
  player.retrieveWinsFromStorage();
  computer.retrieveWinsFromStorage();
  renderGame();
}

function renderGame() {
  switch (game.mode) {
    case "home":
      renderHome();
      break;
    case "selection":
      renderSelection();
      break;
    case "comparison":
      renderComparison();
      break;
  }
}

function onClassicClick() {
  game.gameType = "classic";
  game.mode = "selection";
  renderGame();
}

function onHardClick() {
  game.gameType = "hard";
  game.mode = "selection";
  renderGame();
}

function renderHome() {
  removeHidden(homeView);
  addHidden([classicView, hardView, selectionView]);
  renderScores();
}
function renderSelection() {
  switch (game.gameType) {
    case "classic":
      classicMode();
      break;
    case "hard":
      hardMode();
      break;
  }
}
function renderComparison() {}

function renderScores() {
  playerScore.innerText = `${game.player.wins}`;
  computerScore.innerText = `${game.computer.wins}`;
}
function computerPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function makeSelection(event) {
  game.player.setSelection(event.target.dataset.pokemon);
  if (gameMode === "classic") {
    var computerSelection = computerPick(easyModeArray);
  } else {
    var computerSelection = computerPick(hardModeArray);
  }
  game.computer.setSelection(computerSelection);
  game.mode = "comparison";
  renderGame();
  setTimeout(resetBoard(), 2000);
}

function resetBoard() {
  game.resetBoard();
  renderGame();
}

function classicMode() {
  addHidden(homeViewButtons);
  removeHidden(classicView);
  subHeader.innerText = "Choose your pokemon!";
  renderScores();
}

function hardMode() {
  addHidden(homeViewButtons);
  removeHidden(hardView);
  subHeader.innerText = "Choose your pokemon!";
  renderScores();
}

function addHidden(element) {
  if (Array.isArray(element)) {
    for (var i = 0; i < element.length; i++) {
      addHidden(element[i]);
    }
  } else {
    element.classList.add("hidden");
  }
}

function removeHidden(element) {
  element.classList.remove("hidden");
}
