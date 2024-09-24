import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, RULES } from "../constants/messages.js";
import randomNumber from "../utils/randomNumber.js";
import userInputValidation from "../utils/userInputValidation.js";
import resultPrint from "../utils/resultPrint.js";
import getBaseballCount from "../utils/getBaseballCount.js";

const playGame = async () => {
  const computerNumber = randomNumber();
  while (true) {
    const userInput = await MissionUtils.Console.readLineAsync(
      GAME_MESSAGES.INPUT
    );
    userInputValidation(userInput);
    const userNum = Array.from(userInput, Number);

    const result = getBaseballCount(computerNumber, userNum);
    await resultPrint(result);
    if (result[0] === RULES.NUMBER_MAX_LENGTH) {
      break;
    }
  }
};

export default playGame;
