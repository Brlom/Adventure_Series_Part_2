const inquirer = require("inquirer");
const getRooms = require("./rooms");

const goToNextRoom = async (game, roomName = "startGame", player) => {
  console.log({ roomName });
  const roomsPreChoice = getRooms(game, player);
  let thisRoom = roomsPreChoice[roomName];
  if (thisRoom.invoke) thisRoom.invoke();
  const roomsPostInvoke = getRooms(game, player);
  thisRoom = roomsPostInvoke[roomName];
  if (thisRoom.log)
    console.log(`${roomName.toUpperCase()} LOG: ${thisRoom.log}`);
  const inquiry = [
    {
      type: "list",
      message: thisRoom.message,
      choices: thisRoom.choices.map(choice => choice.text),
      name: "response"
    }
  ];
  const { response } = await inquirer.prompt(inquiry);
  const roomsPostChoice = getRooms(game, player);
  const choice = thisRoom.choices.find(choice => choice.text === response);
  if (choice.invoke) choice.invoke();
  if (choice.log)
    console.log(
      `${(choice.targetRoomName || "finish game").toUpperCase()} LOG: ${choice.log}`
    );
  if (choice.targetRoomName) goToNextRoom(game, choice.targetRoomName, player);
  else console.log("Thanks for playing!");
};

module.exports = goToNextRoom;

