import { MissionUtils } from "@woowacourse/mission-utils";
import { init, getUserInput, getBaseballCount } from "./utils/index.js";

class App {
  async play() {
    try {
      const computerNumber = init();
      const userInput = await getUserInput();
      const { strike, ball, nothing } = getBaseballCount(computerNumber, userInput);
    } catch (e) {
      console.error(e);
    }
  }
}

const app = new App();
app.play();

export default App;
