class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    localStorage.setItem(this.name, `${this.wins}`);
  }

  retrieveWinsFromStorage() {
    this.wins = parseInt(localStorage.getItem(this.name));
  }

  takeTurn() {
    return this.selection;
  }

  setSelection(selection) {
    this.selection = selection;
  }
}
