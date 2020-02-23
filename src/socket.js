const socketIO = require("socket.io");
const getRandomLocation = () => {
  return {
    x: Math.random()*0.8,
    y: Math.random()*0.8
  };
};
module.exports = server => {
  const io = socketIO(server);
  const gameState = {
    dungCollected: 0,
    animals: [
      {
        id: 0,
        emoji: "🐃",
        location: getRandomLocation()
      },
      {
        id: 1,
        emoji: "🐧",
        location: getRandomLocation()
      },
      {
        id: 2,
        emoji: "🦖",
        location: getRandomLocation()
      },
      {
        id: 3,
        emoji: "🐅",
        location: getRandomLocation()
      },
      {
        id: 4,
        emoji: "🦒",
        location: getRandomLocation()
      },
      {
        id: 5,
        emoji: "🦙",
        location: getRandomLocation()
      },
      {
        id: 6,
        emoji: "🐂",
        location: getRandomLocation()
      },
      {
        id: 7,
        emoji: "🐎",
        location: getRandomLocation()
      },
    ],
    dungs: [
      {
        id: 0,
        location: getRandomLocation()
      },
      {
        id: 1,
        location: getRandomLocation()
      },
      {
        id: 2,
        location: getRandomLocation()
      },
      {
        id: 3,
        location: getRandomLocation()
      },
      {
        id: 4,
        location: getRandomLocation()
      },
      {
        id: 5,
        location: getRandomLocation()
      },
      {
        id: 6,
        location: getRandomLocation()
      },
      {
        id: 7,
        location: getRandomLocation()
      },
      {
        id: 8,
        location: getRandomLocation()
      },
      {
        id: 9,
        location: getRandomLocation()
      },
    ]
  };

  io.on("connection", (socket) => {
    socket.on('collect-dung', ({ id }) => {
      gameState.dungCollected += 1;
      gameState.dungs = gameState.dungs.filter((dung) => dung.id !== id);
      gameState.dungs.push({
        id: gameState.dungs[gameState.dungs.length - 1].id + 1,
        location: getRandomLocation(), 
      });
    });
  });

   setInterval(() => {
     io.emit("game-state", gameState);
   }, 1000);
};
