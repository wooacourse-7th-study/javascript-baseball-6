import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, RULES } from "../constants/messages.js";
import randomNumber from "../utils/randomNumber.js";
import userInputValidation from "../utils/userInputValidation.js";
import resultPrint from "../utils/resultPrint.js";
import compareToNumber from "../utils/compareToNumber.js";

const playGame = async () => {
  const comNum = randomNumber();
  while (true) {
    const userInput = await MissionUtils.Console.readLineAsync(
      GAME_MESSAGES.INPUT
    );
    await userInputValidation(userInput);
    const userNum = Array.from(userInput, Number);

    const result = compareToNumber(comNum, userNum);
    await resultPrint(result);
    if (result[0] === RULES.NUM_LENGTH) {
      break;
    }
  }
};

export default playGame;
