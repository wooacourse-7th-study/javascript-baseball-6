import { MissionUtils } from "@woowacourse/mission-utils";
import { THREE_STRIKE_MESSAGE, NOTHING_TEXT, STRIKE_TEXT, BALL_TEXT, RESTART_MESSAGE } from "../constants/index.js";

export const resultPrint = (strike, ball, nothing) => {
  if (nothing) {
    MissionUtils.Console.print(NOTHING_TEXT);
    return false;
  }

  if (strike === 3) {
    MissionUtils.Console.print(strike + STRIKE_TEXT);
    MissionUtils.Console.print("게임 종료");
    // MissionUtils.Console.print(THREE_STRIKE_MESSAGE);
    MissionUtils.Console.print(RESTART_MESSAGE);
    return true;
  }

  MissionUtils.Console.print(`${ball}${BALL_TEXT} ${strike}${STRIKE_TEXT} `);
  return false;
};
