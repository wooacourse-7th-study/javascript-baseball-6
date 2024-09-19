import BaseballGame from "./BaseBallGame";

class App {
  async play() {
    const baseballGame = new BaseballGame();
    await baseballGame.runGame();
  }
}

export default App;
