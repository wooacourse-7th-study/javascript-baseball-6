import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, RESULT, RULES } from "../constants/messages.js";

const resultPrint = (result) => {
  let strike = result[0];
  let ball = result[1];

  if (strike === 0 && ball === 0) {
    MissionUtils.Console.print(RESULT.NOTHING);
    return;
  }
  if (strike === RULES.NUM_LENGTH) {
    MissionUtils.Console.print(RULES.NUM_LENGTH + RESULT.STRIKE);
    MissionUtils.Console.print(GAME_MESSAGES.THREE_STRIKE);
    return;
  }

  if (strike > 0 && ball === 0) {
    MissionUtils.Console.print(`${strike}${RESULT.STRIKE}`);
    return;
  }

  if (ball > 0 && strike === 0) {
    MissionUtils.Console.print(`${ball}${RESULT.BALL}`);
    return;
  }

  MissionUtils.Console.print(`${strike}${RESULT.STRIKE} ${ball}${RESULT.BALL}`);
};

export default resultPrint;
