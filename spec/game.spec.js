const { expect } = require("chai");
const Game = require("../entities/game");
const Player = require("../entities/player");

describe("GAME system", () => {
  describe("game", () => {
    it("creates an new Game object with the correct name", () => {
      const newGame = new Game("Thumbelina");
      expect(newGame.gameName).to.equal("Thumbelina");
    });
    it("creates an new player object set to default", () => {
      const newPlayer = new Player("default");
      expect(newPlayer.name).to.equal("default");
    });
    it("creates an changePlayer method that updates existing playerName", () => {
      const newPlayer = new Player("default");
      newPlayer.changePlayerName("Charlotte");
      expect(newPlayer.name).to.equal("Charlotte");
    });
    it("creates a playerFear object set to 0", () => {
      const newPlayer = new Player("default");
      expect(newPlayer.fear).to.equal(0);
    });
    it("creates a changePlayerFear method that updates existing playerFear", () => {
      const newPlayer = new Player("default");
      newPlayer.changePlayerFear(4);
      expect(newPlayer.fear).to.equal(4);
      newPlayer.changePlayerFear(-2);
      expect(newPlayer.fear).to.equal(2);
      newPlayer.changePlayerFear(-2);
      expect(newPlayer.fear).to.equal(0);
      newPlayer.changePlayerFear(-1);
      expect(newPlayer.fear).to.equal(0);
    });
    it("checks if playerFear is too high, and returns boolean", () => {
      const newPlayer = new Player("default");
      newPlayer.checkIfTooScared(100);
      expect(newPlayer.tooScared).to.equal(false);
      newPlayer.changePlayerFear(101);
      expect(newPlayer.fear).to.equal(101);
      newPlayer.checkIfTooScared(100);
      expect(newPlayer.tooScared).to.equal(true);
    });
    it("creates a playerInventory object set to []", () => {
      const newPlayer = new Player("default");
      expect(newPlayer.inventory).to.eql([]);
    });
    it("checks if playerInventory is increased when passed items", () => {
      const newPlayer = new Player("default");
      newPlayer.increasePlayerInventory("lantern");
      newPlayer.increasePlayerInventory("bubble wand", "cocoa beans");
      expect(newPlayer.inventory).to.eql(["lantern", "bubble wand", "cocoa beans"]);
    });
    it("checks if playerInventory is decreased when player uses items", () => {
      const newPlayer = new Player("default");
      newPlayer.increasePlayerInventory("bow & arrow", "rattlesnake", "cycle");
      newPlayer.decreasePlayerInventory("cycle");
      expect(newPlayer.inventory).to.eql(["bow & arrow", "rattlesnake"]);
    });
    it("should return correct playerInventory when a decrease and increase happen right after each other", () => {
      const newPlayer = new Player("default");
      newPlayer.increasePlayerInventory("apple", "loaf of bread", "handkerchief", "wine");
      expect(newPlayer.inventory).to.eql(["apple", "loaf of bread", "handkerchief", "wine"]);
      newPlayer.decreasePlayerInventory("apple");
      expect(newPlayer.inventory).to.eql(["loaf of bread", "handkerchief", "wine"]);
      newPlayer.increasePlayerInventory("barley corn")
      expect(newPlayer.inventory).to.eql(["loaf of bread", "handkerchief", "wine", "barley corn"])
    });
    it("resets playerName, playerFear, tooScared and playerInventory to startup values", () => {
      const newPlayer = new Player("default");
      expect(newPlayer.name).to.equal("default");
      expect(newPlayer.fear).to.equal(0);
      expect(newPlayer.tooScared).to.equal(false);
      expect(newPlayer.inventory).to.eql([]);
    });
  });
});
