const goToNextRoom = require("../inquirer");

class Player {
  constructor(name) {
    this.name = name;
    this.fear = 0;
    this.tooScared = false;
    this.inventory = [];
  }
  changePlayerName(name) {
    this.name = name;
  }
  changePlayerFear(amount) {
    if (this.fear === 0 && amount < 0) return 0;   
    this.fear += amount;
  }
  checkIfTooScared(num) {
    if (this.fear >= num) {
      this.tooScared = true;
    } else {
      this.tooScared = false;
    };    
  }
  increasePlayerInventory(...item) {
    for (let i = 0; i < item.length; i++) {
      this.inventory.push(item[i]);
    };
  }
  decreasePlayerInventory(item) {
    let position = this.inventory.indexOf(item);
    if (position > -1) {
      this.inventory.splice(position, 1);
    };
  }
  reset() {
    this.name = 'default';
    this.fear = 0;
    this.tooScared = false;
    this.inventory = [];
  };
}

module.exports = Player;