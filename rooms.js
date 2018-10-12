// Here is where you add 'rooms' to your game. Make sure they abide by the syntax described in the README, else it *will not work*.
function getRooms(game, player) {
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
          invoke: () => player.changePlayerName('Grandma Chuckles'),
          targetRoomName: "andSoItBegins"
        },
        {
          text: 'Grandfather Chuckles: a charming old man who loves to tell stories and crack horrible jokes',
          invoke: () => player.changePlayerName('Grandpa Chuckles'),
          targetRoomName: "andSoItBegins"
        },
        {
          text: "I changed my mind. I don't want to go afterall...", 
          targetRoomName: null
        },
      ]
    },
    andSoItBegins: {
      message: `Welcome to the game, ${player.name}. You are currently in your house. Would you like to take a look outside?`,
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
      message: `Have a good nap, ${player.name}. .... Good morning, sleepy head! Are you ready to get going?`,
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
      message: `You are currently ${player.fear} procent scared, and stay under the bed for 10 hours. Would you like to continue your adventure?`,
      choices: [
        {
          text: "I need to get out of here",
          invoke: function () { 
            player.changePlayerFear(-40);
          },
          invoke: function () {
            player.increasePlayerInventory("Apple", "loaf of bread", "handkerchief", "wine");
          },
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
          invoke: function () {
            player.increasePlayerInventory("apple", "loaf of bread", "handkerchief", "wine");
          },
          targetRoomName: "pathToCreepyLady"
        },
        {
          text: "No, I want to go back home",
          targetRoomName: "home"
        },
      ]
    },
    pathToCreepyLady: {
      message: `You brought some stuff from home. Your inventory is now: ${player.inventory}.You\'re walking along a sandy path, and are stopped by an ugly beggar lady who asks for something to eat. What would you like to do?`,
      choices: [
        {
          text: "Ignore her, and keep walking",
          targetRoomName: "dragon"
        },
        {
          text: "Give her an apple you brought from home",
          invoke: function() {
            player.decreasePlayerInventory("apple");
          },
          targetRoomName: "gift"
        },
      ]
    },
    home: {
      message: 'Ah, good to be back home. But what\'s this! The place is trashed..',
      invoke: function () {
        player.changePlayerFear(10);
      },
      choices: [
        {
          text: "You're a little scared, but you look to see if the person who did this is still here",
          targetRoomName: "kitchen"
        },
        {
          text: "You're super scared, and go hide under the bed",
          invoke: function () {
            player.changePlayerFear(40);
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
    dragon: {
      message: 'The old lady turns into a dragon, and blows fire at you! dun, dun, dun.. you died from your extensive burns',
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
    gift: {
      message: "The old lady thanks you for your kindness, and gifts you with a barleycorn.",
      invoke: function() {
            player.increasePlayerInventory("barleycorn");
          },
      choices: [
        {
          text: "You thank her, and continue on your way", 
          targetRoomName: "barleycorn"
        },
        {
          text: "Want to check your inventory?", 
          targetRoomName: "inventory"
        },
      ]
    },
    inventory: {
      message: `Your inventory is currently ${player.inventory}`,
      choices: [
        {
          text: "", 
          targetRoomName: null
        },
      ]
    },
    barleycorn: {
      message: "As you are walking along the path, you notice the barleycorn is moving. You..", 
      choices: [
        {
          text: "get scared and throw it far away.",
          targetRoomName: "path"
        }, 
        {
          text: "look closer at the barleycorn", 
          targetRoomName: "thumbelina"
        },
      ]
    },
    thumbelina: {
      message: "The barleycorn blossoms, and as the petals start to drop you realise that there appears to be a tiny little girl inside.", 
      choices: [
        {
          text: "",
          targetRoomName: ""
        }, 
        {
          text: "", 
          targetRoomName: ""
        },
      ]
    },
    reset: {
      message: `Welcome back to ${game.gameName}. Would you like to go on an adventure?`,
      choices: [
        {
          text: 'Yes, bring it on!',
          invoke: function() {
            player.reset();
          },
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
