# CORE-choose-your-own-adventure

### Aims of this sprint

- Handle more complex systems with OOP
- Refine our testing practises
- Get creative!

### Background

You may or may not have partaken in the 'Choose Your Own' genre of storybooks or computer games - either way, the concept is simple. You play a character in a certain situation, and then can choose what to do or where to go next. A classic is [The Oregon Trail](https://classicreload.com/oregon-trail.html) which was created for educational purposes, but spectacularly backfired into something entertaining, challenging and thought-provoking.

If you were to think about these games from a programming perspective, you could reduce them down to some key concepts:

- _State_ that represents what is happening or the situation of the game. Examples could be where your character is, what their inventory is, how long it has been since they last slept, what the weather is, and so on.
- _Actions_ that the player can choose to do. Examples could be to travel somewhere else, interact with something where they are, go to sleep, ponder the weather, and so on.

Object Oriented Programming is a natural fit for this sort of structure. The _state_ of the game can be represented by the data or properties of an encompassing 'Game' object; the _actions_ can be methods on the object that affect the state.

Of course, the entities of the game do not have the be held completely within one Game object - a Game's properties may include a Player object, and that player's properties may hold an Inventory object, and the Inventory may be filled with Item objects. How you wish to interact different states in your game is up to you!

### Task

Create a Choose Your Own Adventure game.

First, give the sample one a go. Run `npm install` and `npm start`

The 'playing' part of the game we have abstracted out for you. It uses a package called [inquirer](https://www.npmjs.com/package/inquirer/v/5.0.1) which is a tool for allowing users to interact with the command line. You don't need to worry about this aspect, but checkout their Github repo examples folder if you are interested in seeing some ways it can work. We've taken this out because it is by it's nature _asynchronous_ logic - often, the code needs to wait for a player to give input into the game before it can continue. That's stuff you will learn about next week!

What you _do_ need to create is the state you care about in your game, and the methods that affect that state. These methods should be thoroughly tested, so you can trust they will behave as you want whilst your game is in progress.

To enable inquirer to do its job, the data in the game has to be held in a particular way. You can see this in the basic example we've included, under the `getRooms` function. You can think of a 'room' as a physical place where the character is at this point, but really the room's message can represent any output from the game, from _'You are standing in the kitchen. It is dark, and there is an unnerving noise coming from upstairs'_ to _'What do you want to do with the bag of oranges?'_. The `getRooms` function returns an object collection of all the possible interactions in your game in the following format, which you must stick to!

We've included a Game object for you. When it calls the `startGame` function, it will use the external `goToNextRoom` function, which is responsible for analysing your game design. You can see in the `getRooms` function that it passes in a reference to itself as an argument, allowing you to refer to the Game and any of its properties or methods when you are designing it.

- each room will need a unique key name - you'll refer to this, so make it logical! You need to have one called `startGame` - that's what triggers on `npm start`. For others, think along the lines of 'kitchen' or 'chooseInteractionWithOranges'
- it will need a `message` property, which is what will be displayed to the user on going to that room
- it will need a `choices` property, which should be an array of _choices_ (described below)
- it can also have an `invoke` property, which is a function you want to call on the player going to this room
- it can also have a `log` property, which will console log anything you want on choosing that option - use this for debugging purposes!


- each _choice_ also needs to be an object
- each should have a `text` property, which is what will be displayed on the screen for the user to select, e.g. _'Go upstairs'_ or _'Eat an orange'_
- each should have a `targetRoomName` property, which is the key of the next room you want to show. If you don't have a `targetRoom`, the game will end
- each can also have an `invoke` property, which is a function you want to call on choosing that option - make sure you don't duplicate behaviour you applied in your target's `invokeRoom` function
- each can also have a `log` property, which again, will console log anything you like debugging purposes when that option is chosen

Remember that you have access to properties or methods in your game via the `game` parameter you have passed in!

### How To Approach

First focus on the properties and methods that will apply to your game design. If your game will rely on the passing of time, create a `time` property and a `progressTime` method. TEST THESE! You'll then know they're safe to use in your game.

Then create a couple of 'rooms' and check you have the hang of using 'targetRoomName' in the choices so your player can travel back and forth between rooms.

Then start using the 'invoke' function to call the methods you created on your constructors. Use 'log' to check what's going on in your game if you're not sure.

Start bringing in more complex systems or entities into your game by creating new constructors, and linking them up to your game.

As 'choices' is an array, you can create that array however you like! You might hardcode it in, but you might want to programmatically create your choices. You might only want to include in your array 'Open door' after you have unlocked it. Or perhaps you want to map over an array of some property in your game - for example, `game.weaponChoices`, but filtered based on `game.character.strength`... or whatever you like.

### Ideas

Create a 'Haunted Mansion' game where somebody wakes up in a room and has to find their way out. You could make it more interesting by having a Player constructor with a `fear` property that increases when they make bad choices, and the game ends if it gets too high.

Or try making a battle game, perhaps along the lines of Pokemon. In this case, you would think of the 'rooms' as describing a series of choices and events (i.e. which Pokemon to deploy, which move to use etc, what happened when you used the move, etc.) You could make it two-player, which would be a good way to re-use a Player constructor. You would also probably have a Pokemon constructor, which would create Pokemon objects with a name, type and health property, and a moves property constaining an array of constructed Move objects, each of which has a name, descriptions and damage property, and so on...

### Debugging

NONE of your 'rooms' can refer to something that doesn't exist yet in your game. So if you refer in ANY room to `player.character.name`, then FROM THE START your game must at least have a `player.character` object, so it's not trying to get property 'name' of undefined.

Any gaps like this will give you an 'unhandled Promise rejection' error (you'll come across plenty of these when we cover async & Promises!) and end the game - read the message and that will point you to what doesn't exist.

### Day 2

Refactor your game to use classes instead of explicitly attaching to the prototype chain. Because the data (the 'rooms') and inquirer's behaviour is abstracted out, you shouldn't need to change anything in your game design, and the tests should be called in the same way.
