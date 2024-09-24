import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../constants/messages.js";
import playGame from "./playGame.js";
import askForRestart from "../utils/askForRestart.js";
class App {
  async play() {
    let isContinueGame = true;
    MissionUtils.Console.print(GAME_MESSAGES.START);
    while (isContinueGame) {
      await playGame();
      isContinueGame = await askForRestart();
    }
    MissionUtils.Console.print(GAME_MESSAGES.END);
  }
}
const app = new App();
app.play();

export default App;
