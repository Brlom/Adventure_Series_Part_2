// Here is where you add 'rooms' to your game. Make sure they abide by the syntax described in the README, else it *will not work*.
function getRooms(game) {
  return {
    startGame: {
      message: `Welcome to ${game.gameName}! Would you like to go on an adventure?`,
      choices: [
        {
          text: 'Yes, bring it on!',
          targetRoomName: "players"
        },
        {
          text: 'No, I want my mummy',
          targetRoomName: null
        },
      ]
    },
    players: {
      message: "Choose your player.",
      choices: [
        {
          text: 'Grandma Chuckles: a little old woman who never had any children of her own, and has therefore developed a small drinking habit',
          invoke: () => game.changePlayerName('Grandma Chuckles'),
          targetRoomName: "andSoItBegins"
        },
        {
          text: 'Grandfather Chuckles: a charming old man who loves to tell stories and crack horrible jokes',
          invoke: () => game.changePlayerName('Grandpa Chuckles'),
          targetRoomName: "andSoItBegins"
        },
        {
          text: "I changed my mind. I don't want to go afterall...", 
          targetRoomName: null
        },
      ]
    },
    andSoItBegins: {
      message: `Welcome to the game, ${game.playerName}. You are currently in your house. Would you like to take a look outside?`,
      choices: [
        {
          text: "Let's go already.",
          targetRoomName: "outside"
        },
        {
          text: "I want to take a nap.",
          targetRoomName: "bedroom"
        },
      ]
    },
    bedroom: {
      message: `Have a good nap, ${game.playerName}. .... Good morning, sleepy head! Are you ready to get going?`,
      choices: [
        {
          text: "Come on then.",
          targetRoomName: "outside"
        },
        {
          text: "I'm too tired",
          targetRoomName: null
        },
      ]
    },
    bedroom2: {
      message: `You are currently ${game.playerFear} procent scared, and stay under the bed for 10 hours. Would you like to continue your adventure?`,
      choices: [
        {
          text: "I need to get out of here",
          targetRoomName: "pathToCreepyLady"
        },
        {
          text: "No way, hose!",
          targetRoomName: null
        },
      ]
    },
    outside: {
      message: 'It\'s such a lovely day out, lets go for a walk',
      choices: [
        {
          text: "Sure",
          targetRoomName: "pathToCreepyLady"
        },
        {
          text: "No, I want to go back home",
          targetRoomName: "home"
        },
      ]
    },
    pathToCreepyLady: {
      message: 'You\'re walking along a sandy path, and are stopped by an ugly beggar lady who asks for something to eat. What would you like to do?',
      // invoke: function () { should not decrease when coming from outside
      //   game.changePlayerFear(-40);
      // },
      choices: [
        {
          text: "Ignore her, and keep walking",
          targetRoomName: "dragon"
        },
        {
          text: "Give her an apple you brought from home",
          targetRoomName: "gift"
        },
      ]
    },
    home: {
      message: 'Ah, good to be back home. But what\'s this! The place is trashed..',
      invoke: function () {
        game.changePlayerFear(10);
      },
      choices: [
        {
          text: "You're a little scared, but you look to see if the person who did this is still here",
          targetRoomName: "kitchen"
        },
        {
          text: "You're super scared, and go hide under the bed",
          invoke: function () {
            game.changePlayerFear(40);
          },
          targetRoomName: "bedroom2"
        },
      ]
    },
    kitchen: {
      message: 'Bad move - a serial killer was hidding in the kitchen. You were killed slowly and painfully and only found 2 months later',
      choices: [
        {
          text: "I would like to play again",
          targetRoomName: "reset"
        },
        {
          text: "I'm done for now",
          targetRoomName: null
        },
      ]
    },
    reset: {
      message: `Welcome back to ${game.gameName}. Would you like to go on an adventure?`,
      choices: [
        {
          text: 'Yes, bring it on!',
          targetRoomName: "players"
        },
        {
          text: 'No, I want my mummy',
          targetRoomName: null
        },
      ]
    },
  };
}

module.exports = getRooms;
