import { MissionUtils } from "@woowacourse/mission-utils";
import {
  init,
  getUserInput,
  getBaseballCount,
  resultPrint,
  getRestartInput,
  checkThreeStrike,
  threeStrikeResultPrint,
} from "./utils/index.js";
import { END_MESSAGE } from "./constants/index.js";

class App {
  async play() {
    try {
      const computerNumber = init();
      console.log(`컴퓨터 번호(테스트용): ${computerNumber}`);

      while (true) {
        const userInput = await getUserInput();
        const { strike, ball, nothing } = getBaseballCount(computerNumber, userInput);
        const isThreeStrike = checkThreeStrike(strike);

        if (isThreeStrike) {
          threeStrikeResultPrint();

          const userResultInput = await getRestartInput();
          if (userResultInput === "2") {
            MissionUtils.Console.print(END_MESSAGE);
            return;
          }

          this.play();
          return;
        }

        resultPrint(strike, ball, nothing);
      }
    } catch (error) {
      if (error.message) {
        MissionUtils.Console.print(error.message);
      }

      // MissionUtils.Console.print(END_MESSAGE);

      throw error;
    }
  }
}

const app = new App();
app.play();

export default App;
