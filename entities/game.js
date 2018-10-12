const goToNextRoom = require("../inquirer");

class Game {
  constructor(gameName) {
    this.gameName = gameName;
    this.playerName = 'default';
    this.playerFear = 0;
    this.tooScared = false;
    this.playerInventory = [];
  }
  startGame() {
    goToNextRoom(this);
  }
  changePlayerName(name) {
    this.playerName = name;
  }
  changePlayerFear(amount) {
    if (this.playerFear === 0 && amount < 0) return 0;   
    this.playerFear += amount;
  }
  checkIfTooScared(num) {
    if (this.playerFear >= num) {
      this.tooScared = true;
    } else {
      this.tooScared = false;
    };    
  }
  increasePlayerInventory(...item) {
    for (let i = 0; i < item.length; i++) {
      this.playerInventory.push(item[i]);
    };
  }
  decreasePlayerInventory(item) {
    let position = this.playerInventory.indexOf(item);
    if (position > -1) {
      this.playerInventory.splice(position, 1);
    };
  }
  reset() {
    this.playerName = 'default';
    this.playerFear = 0;
    this.tooScared = false;
    this.playerInventory = [];
  };
}

module.exports = Game;
