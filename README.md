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

We've included a Game object for you. It loads in the outputs as it is created. You can see it passes in a reference to itself as an argument, allowing you to refer to the Game and any of its properties or methods when you are designing it.

To enable inquirer to do its job, the data in the game has to be held in a particular way. You can see this in the basic example we've included, under the `getRooms` function. You can think of a 'room' as a physical place where the character is at this point, but really it can represent any output from the game, from _'You are standing in the kitchen. It is dark, and there is an unnerving noise coming from upstairs'_ to _'What do you want to do with the bag of oranges?'_. The `getRooms` function returns an object collection of all the possible interactions in your game in the following format, which you must stick to!

- each room will need a unique key name - you'll refer to this, so make it logical! You need to have one called `startGame` - that's what triggers on `npm start`
- it will need a `message` property, which is what will be displayed to the user if that room is called (think 'kitchen' or 'interactWithOranges')
- it will need a `choices` property, which should be an array of _choices_
- it can also have an `invokeRoom` property, which is a function you want to call on the player going to this room
- it can also have a `logRoom` property, which will console log anything you want on choosing that option - use this for debugging purposes!
- each choice also needs to be an object
- it should have a `text` property, which is what will be displayed on the screen for the user to select, e.g. _'Go upstairs'_ or _'Eat an orange'_
- it should have a `targetRoom` property, which is the key of the next room you want to show. If you don't have a `targetRoom`, the game will end
- it can also have an `invokeChoice` property, which is a function you want to call on choosing that option - make sure you don't duplicate behaviour you applied in your target's `invokeRoom` function
- it can also have a `logChoice` property, which again, will console log anything you like debugging purposes.

Remember that you have access to properties or methods in your game via the `game` parameter you have passed in!

### Day 2

Refactor your game to use classes instead of explicitly attaching to the prototype chain. Because the data (i.e. outputs) and inquirer's behaviour is abstracted out, you shouldn't need to change anything in your game design - just think how you will get the outputs into the game now it is in a class format.
