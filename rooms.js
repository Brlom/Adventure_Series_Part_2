// Here is where you add 'rooms' to your game. Make sure they abide by the syntax described in the README, else it *will not work*.
function getRooms(game) {
  return {
    startGame: {
      message: `Welcome to the ${game.gameName}! What do you want to do?`,
      choices: [
        {
          text: "Looks like you need some more choices...",
          log: `player has completed ${game.gameName}`,
          targetRoomName: null
        }
      ]
    }
  };
}

module.exports = getRooms;
