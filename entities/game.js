const goToNextRoom = require("../inquirer");

const Game = function(gameName) {
  this.gameName = gameName;
};

Game.prototype.startGame = function() {
  goToNextRoom(this);
};

module.exports = Game;
