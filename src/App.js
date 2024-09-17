import { MissionUtils } from "@woowacourse/mission-utils";
import { init, getUserInput, getBaseballCount, resultPrint } from "./utils/index.js";
import { END_MESSAGE } from "./constants/index.js";

class App {
  async play() {
    try {
      const computerNumber = init();
      console.log(computerNumber);
      while (true) {
        const userInput = await getUserInput();
        const { strike, ball, nothing } = getBaseballCount(computerNumber, userInput);

        const isThreeStrike = resultPrint(strike, ball, nothing);
        if (isThreeStrike) {
        }
      }
    } catch (error) {
      MissionUtils.Console.print(END_MESSAGE);
    }
  }
}

const app = new App();
app.play();

export default App;
