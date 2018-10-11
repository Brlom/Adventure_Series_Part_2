const { expect } = require("chai");
const Game = require("../entities/game");

describe("GAME system", () => {
  describe("game", () => {
    it("creates an new Game object with the correct name", () => {
      const newGame = new Game("The Haunt");
      expect(newGame.gameName).to.equal("The Haunt");
    });
    it("creates an new player object set to default", () => {
      const newGame = new Game("The Haunt");
      expect(newGame.playerName).to.equal("default");
    });
    it("creates an changePlayer method that updates existing playerName", () => {
      const newGame = new Game("The Haunt");
      newGame.changePlayerName("Charlotte");
      expect(newGame.playerName).to.equal("Charlotte");
    });
    it("creates a playerFear object set to 0", () => {
      const newGame = new Game("The Haunt");
      expect(newGame.playerFear).to.equal(0);
    });
    it("creates a changePlayerFear method that updates existing playerFear", () => {
      const newGame = new Game("The Haunt");
      newGame.changePlayerFear(4);
      expect(newGame.playerFear).to.equal(4);
      newGame.changePlayerFear(-2);
      expect(newGame.playerFear).to.equal(2);
      newGame.changePlayerFear(-2);
      expect(newGame.playerFear).to.equal(0);
      newGame.changePlayerFear(-1);
      expect(newGame.playerFear).to.equal(0);
    });
    it("checks if playerFear is too high, and returns boolean", () => {
      const newGame = new Game("The Haunt");
      newGame.checkIfTooScared(100);
      expect(newGame.tooScared).to.equal(false);
      newGame.changePlayerFear(101);
      expect(newGame.playerFear).to.equal(101);
      newGame.checkIfTooScared(100);
      expect(newGame.tooScared).to.equal(true);
    });
    it("creates a playerInventory object set to []", () => {
      const newGame = new Game("The Haunt");
      expect(newGame.playerInventory).to.eql([]);
    });
    it("checks if playerInventory is increased when passed an item", () => {
      const newGame = new Game("The Haunt");
      newGame.increasePlayerInventory("lantern");
      newGame.increasePlayerInventory("bubble wand");
      expect(newGame.playerInventory).to.eql(["lantern", "bubble wand"]);
    });
    it("checks if playerInventory is decreased when passed an item", () => {
      const newGame = new Game("The Haunt");
      newGame.increasePlayerInventory("bow & arrow", "cycle");
      newGame.decreasePlayerInventory("cycle");
      expect(newGame.playerInventory).to.eql(["bow & arrow"]);
    });
    it("resets playerName, playerFear, tooScared and playerInventory to startup values", () => {
      const newGame = new Game("The Haunt");
      expect(newGame.playerName).to.equal("default");
      expect(newGame.playerFear).to.equal(0);
      expect(newGame.tooScared).to.equal(false);
      expect(newGame.playerInventory).to.eql([]);
    });
  });
});
