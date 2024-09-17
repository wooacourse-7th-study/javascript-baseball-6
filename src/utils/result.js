import { MissionUtils } from "@woowacourse/mission-utils";
import { THREE_STRIKE_MESSAGE, NOTHING_TEXT, STRIKE_TEXT, BALL_TEXT, RESTART_MESSAGE } from "../constants/index.js";

export const resultPrint = (strike, ball, nothing) => {
  if (nothing) {
    MissionUtils.Console.print(NOTHING_TEXT);
    return false;
  }

  if (strike === 3) {
    MissionUtils.Console.print(THREE_STRIKE_MESSAGE);
    MissionUtils.Console.print(RESTART_MESSAGE);
    return true;
  }

  MissionUtils.Console.print(`${strike}${STRIKE_TEXT} ${ball}${BALL_TEXT}`);
  return false;
};
