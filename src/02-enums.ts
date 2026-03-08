(()=>{
  // enums is a structure in which we can define a set of values
  // what makes enums differnt from literal types is there's no chance
  // of trying to guess the value to be assigned.
  // Also, they are much more meaningful and self-descriptive.

  enum ScreenSize {
    MAXIMUM = "maximum",
    WINDOWED = "windowed"
  }

  enum GameDifficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
    INSANE = "insane"
  }

  type GameSettings = {
    allowCheats: boolean,
    screenSize: ScreenSize,
    difficulty: GameDifficulty
  }

  const config: GameSettings = {
    allowCheats: true,
    screenSize: ScreenSize.WINDOWED,
    difficulty: GameDifficulty.HARD
  };

  const initializeGame = (settings: GameSettings) => {
    console.log(`Game initialized with the following settings:
      Screen size: ${settings.screenSize}.
      Cheats: ${settings.allowCheats ? "enabled" : "disabled"}.
      Difficulty level: ${settings.difficulty}.`);
  }

  initializeGame(config);
})();
