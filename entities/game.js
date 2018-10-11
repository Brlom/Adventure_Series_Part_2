const goToNextRoom = require("../inquirer");

const Game = function(gameName) {
  this.gameName = gameName;
  this.playerName = 'default';
  this.playerFear = 0;
  this.tooScared = false;
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

module.exports = Game;
