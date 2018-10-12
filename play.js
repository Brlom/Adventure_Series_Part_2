const Game = require("./entities/game");
const Player = require("./entities/player");

const newGame = new Game("Thumbelina");
const newPlayer = new Player("default");

newGame.startGame(newPlayer);
