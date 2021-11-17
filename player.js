class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
  }

  // not 100% on this, but I don't think you need the window.localStorage, I think you can just use localStorage.set etc...
  
  saveWinsToStorage() {
    window.localStorage.setItem(this.name, `${this.wins}`);
  }

  retrieveWinsFromStorage() {
    var storageItem = window.localStorage.getItem(this.name);
    if (storageItem) {
      this.wins = parseInt(storageItem);
    }
  }

  takeTurn() {
    return this.selection;
  }

  setSelection(selection) {
    this.selection = selection;
  }
}
