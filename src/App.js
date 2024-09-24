import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../constants/messages.js";
import playGame from "./playGame.js";
import askForRestart from "../utils/askForRestart.js";
class App {
  async play() {
    let continueGame = true;
    MissionUtils.Console.print(GAME_MESSAGES.START);
    while (continueGame) {
      await playGame();
      continueGame = await askForRestart();
    }
    MissionUtils.Console.print(GAME_MESSAGES.END);
  }
}
const app = new App();
app.play();

export default App;
