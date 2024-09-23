import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../constants/messages.js";
import randomNumber from "../utils/randomNumber.js";
import userInputValidation from "../utils/userInputValidation.js";
import compareToNumber from "../utils/compareToNumber.js";
import resultPrint from "../utils/resultPrint.js";
class App {
  async play() {
    MissionUtils.Console.print(GAME_MESSAGES.START);
    while (true) {
      //컴퓨터 숫자 생성
      const comNum = randomNumber();

      while (true) {
        const userInput = await MissionUtils.Console.readLineAsync(
          GAME_MESSAGES.INPUT
        );
        await userInputValidation(userInput);

        const userNum = Array.from(userInput, Number);

        //숫자 비교후 출력
        if (resultPrint(compareToNumber(comNum, userNum)) === "finish") {
          const restart = await MissionUtils.Console.readLineAsync(
            GAME_MESSAGES.RESTART
          );
          if (restart == 1) {
            break;
          }
          if (restart == 2) {
            MissionUtils.Console.print(GAME_MESSAGES.END);
            return;
          }
        }
      }
    }
  }
}
const app = new App();
app.play();

export default App;
