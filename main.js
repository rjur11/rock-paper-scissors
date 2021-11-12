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
var comparisonView = document.querySelector(".comparison-view");
var playerPick = document.querySelector(".selected-img-1");
var computerPick = document.querySelector(".selected-img-2");
var playerScore = document.querySelector(".player-score");
var computerScore = document.querySelector(".computer-score");
var changeGameButton = document.querySelector(".change-game");
var battleSong = document.querySelector("audio");

//Sound
const audioContext = new AudioContext();
const audioTrack = audioContext.createMediaElementSource(battleSong);
audioTrack.connect(audioContext.destination);
battleSong.loop = true;

// Event Listeners
classicButton.addEventListener("click", onClassicClick);
hardButton.addEventListener("click", onHardClick);
bulbaButtons.forEach(listenForSelection);
charmButtons.forEach(listenForSelection);
squirtButtons.forEach(listenForSelection);
changeGameButton.addEventListener("click", goHome);
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

function goHome() {
  game.mode = "home";
  game.gameType = "";
  battleSong.pause();
  battleSong.currentTime = 0;
  renderGame();
}

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
  renderScores();
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
  removeHidden(homeViewButtons);
  addHidden([classicView, hardView, comparisonView, changeGameButton]);
  subHeader.innerText = "Choose your Game!";
}

function renderSelection() {
  subHeader.innerText = "Choose your Pokemon!";
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
  battleSong.play();
  switch (game.gameType) {
    case "classic":
      classicMode();
      break;
    case "hard":
      hardMode();
      break;
  }
}
function renderComparison() {
  removeHidden(comparisonView);
  addHidden([classicView, hardView, homeViewButtons]);
  playerPick.src = pokemonToImage(game.player.selection);
  computerPick.src = pokemonToImage(game.computer.selection);
  switch (game.playRound()) {
    case "player":
      subHeader.innerText = `${game.player.name} wins!`;
      break;
    case "computer":
      subHeader.innerText = `${game.computer.name} wins!`;
      break;
    case "tie":
      subHeader.innerText = "It's a tie!";
      break;
  }
}

function pokemonToImage(selection) {
  switch (selection) {
    case "bulbasaur":
      return "assets/1.png";
      break;
    case "charmander":
      return "assets/4.png";
      break;
    case "squirtle":
      return "assets/7.png";
      break;
    case "pikachu":
      return "assets/25.png";
      break;
    case "sandshrew":
      return "assets/27.png";
      break;
  }
}

function renderScores() {
  playerScore.innerText = `${game.player.wins}`;
  computerScore.innerText = `${game.computer.wins}`;
}
function randomSelect(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function makeSelection(event) {
  game.player.setSelection(event.target.dataset.pokemon);
  if (game.gameType === "classic") {
    var computerSelection = randomSelect(easyModeArray);
  } else {
    var computerSelection = randomSelect(hardModeArray);
  }
  game.computer.setSelection(computerSelection);
  game.mode = "comparison";
  renderGame();
  setTimeout(resetBoard, 2000);
}

function resetBoard() {
  game.resetBoard();
  renderGame();
  removeHidden(changeGameButton);
}

function classicMode() {
  addHidden([homeViewButtons, hardView, comparisonView]);
  removeHidden(classicView);
}

function hardMode() {
  addHidden([homeViewButtons, classicView, comparisonView]);
  removeHidden(hardView);
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
