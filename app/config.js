define([], function() {
  return {
    // render settings
    deadCellColor: '#ffffff',
    cellSize: 18,
    cellSpacing: 2,

    // grid settings
    gridWidth: 60,
    gridHeight: 30,

    // game settings
    generationDuration: 1000,
    giveCellsEvery: 1, // generations
    
    // player settings
    cellsPerPlayer: 1000,
    defaultPlayerColor: '#00aaff',
    lastSeenTimeout: 180000,

    // server settings
    timeBetweenStateUpdates: 5000,
    secretToken: "secret witch's brew",
    lowestHighScore: 200,
    chatLogLength: 175,
    chatMessageLength: 140,
    timeBetweenLatencyTests: 5000
  };
});