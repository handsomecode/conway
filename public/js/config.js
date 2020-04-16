define([], function() {
  return {
    // render settings
    deadCellColor: '#ffffff',
    defaultAccentColor: '#000000',
    cellSize: 12,
    cellSpacing: 2,
    tickBarHeight: 5,

    // grid settings
    gridWidth: 130,
    gridHeight: 80,

    // game settings
    generationDuration: 1000,
    giveCellsEvery: 1, // generations
    timeBetweenUpdates: 5000,

    // player settings
    cellsPerPlayer: 1000,
    lastSeenTimeout: 180000,

    // chat settings
    chatLogLength: 175,
    chatMessageLength: 140
  };
});