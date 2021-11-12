class Game {
  constructor(player, computer) {
    this.player = player;
    this.computer = computer;
    this.gameType = "main";
    this.playerSelection = "";
    this.computerSelection = "";
  }

  checkForWin() {
    if (this.playerSelection === "" || this.computerSelection === "") {
      return "none";
    }
    switch (this.playerSelection) {
      case "bulbasaur":
        switch (this.computerSelection) {
          case "bulbasaur":
            return "tie";
          case "charmander":
            return "computer";
          case "squirtle":
            return "player";
          case "pikachu":
            return "tie";
          case "sandshrew":
            return "player";
          default:
            return "none";
        }
      case "charmander":
        switch (this.computerSelection) {
          case "bulbasaur":
            return "player";
          case "charmander":
            return "tie";
          case "squirtle":
            return "computer";
          case "pikachu":
            return "tie";
          case "sandshrew":
            return "computer";
          default:
            return "none";
        }
      case "squirtle":
        switch (this.computerSelection) {
          case "bulbasaur":
            return "computer";
          case "charmander":
            return "player";
          case "squirtle":
            return "tie";
          case "pikachu":
            return "computer";
          case "sandshrew":
            return "player";
          default:
            return "none";
        }
      case "pikachu":
        switch (this.computerSelection) {
          case "bulbasaur":
            return "tie";
          case "charmander":
            return "tie";
          case "squirtle":
            return "player";
          case "pikachu":
            return "tie";
          case "sandshrew":
            return "computer";
          default:
            return "none";
        }
      case "sandshrew":
        switch (this.computerSelection) {
          case "bulbasaur":
            return "computer";
          case "charmander":
            return "player";
          case "squirtle":
            return "computer";
          case "pikachu":
            return "player";
          case "sandshrew":
            return "tie";
          default:
            return "none";
        }
      default:
        return "none";
    }
  }

  resetBoard() {
    this.gameType = "classic";
    this.playerSelection = "";
    this.computerSelection = "";
  }
}
