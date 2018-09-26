const inquirer = require("inquirer");
const getRooms = require("./rooms");

const goToNextRoom = async (game, roomName = "startGame") => {
  const roomsPreChoice = getRooms(game);
  const thisRoom = roomsPreChoice[roomName];
  if (thisRoom.invoke) thisRoom.invoke();
  if (thisRoom.log) console.log(`room log ${roomName}: ${thisRoom.log}`);
  const inquiry = [
    {
      type: "list",
      message: thisRoom.message,
      choices: thisRoom.choices.map(choice => choice.text),
      name: "response"
    }
  ];
  const { response } = await inquirer.prompt(inquiry);
  const roomsPostChoice = getRooms(game);
  const choice = thisRoom.choices.find(choice => choice.text === response);
  if (choice.invoke) choice.invoke();
  if (choice.log)
    console.log(
      `choice log on target ${choice.targetRoom || "finish game"}: ${
        choice.log
      }`
    );
  if (choice.targetRoomName) goToNextRoom(game, choice.targetRoomName);
  else console.log("Thanks for playing!");
};

module.exports = goToNextRoom;
