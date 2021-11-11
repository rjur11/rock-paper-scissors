var homeView = document.querySelector(".home-view");
var classicView = document.querySelector(".classic-game-view");
var hardView = document.querySelector(".hard-game-view");
var homeViewButtons = document.querySelector(".buttons");
var classicButton = document.querySelector(".easy-game");
var hardButton = document.querySelector(".hard-game");
var bulbaButton = document.querySelector(".bulba");
var charmButton = document.querySelector(".charm");
var squirtButton = document.querySelector(".squirt");
var normalPokesPage = document.querySelector(".normal-game-view");

classicButton.addEventListener("click", classicMode);
hardButton.addEventListener("click", hardMode);

function classicMode() {
  addHidden(homeViewButtons);
  removeHidden(normalPokesPage);
  console.log("clicked");
}

function hardMode() {
  addHidden(homeViewButtons);
  removeHidden(hardView);
}

function addHidden(element) {
  element.classList.add("hidden");
}

function removeHidden(element) {
  element.classList.remove("hidden");
}
