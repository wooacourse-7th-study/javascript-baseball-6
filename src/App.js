import BaseballGame from "./BaseBallGame.js";

class App {
  async play() {
    const baseballGame = new BaseballGame();
    await baseballGame.runGame();
  }
}

export default App;
