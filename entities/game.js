const goToNextRoom = require("../inquirer");

const Game = function(gameName) {
  this.gameName = gameName;
  this.playerName = 'default';
  this.playerFear = 0;
  this.tooScared = false;
  this.playerInventory = [];
};

Game.prototype.startGame = function() {
  goToNextRoom(this);
};

Game.prototype.changePlayerName = function(name) {
  this.playerName = name;
};

Game.prototype.changePlayerFear = function(amount) {
  if (this.playerFear === 0 && amount < 0) return 0;   
  this.playerFear += amount;
};

Game.prototype.checkIfTooScared = function(num) {
  if (this.playerFear >= num) {
    this.tooScared = true;
  } else {
    this.tooScared = false;
  };
};

Game.prototype.increasePlayerInventory = function(...item) {
  for (let i = 0; i < item.length; i++) {
    this.playerInventory.push(item[i]);
  }
};

Game.prototype.decreasePlayerInventory = function(item) {
  let position = this.playerInventory.indexOf(item);
  if (position > -1) {
    this.playerInventory.splice(position, 1);
  };
};

Game.prototype.resetGame = function() {
  this.playerName = 'default';
  this.playerFear = 0;
  this.tooScared = false;
  this.playerInventory = [];
};

module.exports = Game;
