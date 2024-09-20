import { MissionUtils } from "@woowacourse/mission-utils";
import { init, getUserInput, getBaseballCount, resultPrint, getRestartInput } from "./utils/index.js";
import { END_MESSAGE } from "./constants/index.js";

class App {
  async play() {
    try {
      const computerNumber = init();

      while (true) {
        const userInput = await getUserInput();
        const { strike, ball, nothing } = getBaseballCount(computerNumber, userInput);
        resultPrint(strike, ball, nothing); // 결과 출력

        // 3strike가 아니면 계속 루프
        if (strike !== 3) {
          continue;
        }

        const userRestartInput = await getRestartInput(); // 재시작 여부

        // 게임 종료
        if (userRestartInput === "2") {
          MissionUtils.Console.print(END_MESSAGE);
          return;
        }

        this.play(); // 재시작
        return;
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

const app = new App();
app.play();

export default App;
