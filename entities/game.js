const goToNextRoom = require("../inquirer");

class Game {
  constructor(gameName) {
    this.gameName = gameName;
  }
  startGame(player) {
    goToNextRoom(this, undefined, player);
  }
}

module.exports = Game;
